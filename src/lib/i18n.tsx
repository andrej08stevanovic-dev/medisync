import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

/**
 * Client-side-only language toggle for booking-flow UI chrome. Never touches the
 * URL — demo links already sent to clients (sajt.com/demo/<slug>) must stay
 * identical regardless of language. Service names, doctor bios, and other
 * per-config content are NOT covered here; only the shared booking chrome is.
 */
export type Lang = "sr" | "en";

const STORAGE_KEY = "demo-lang";

interface Dict {
  bookAppointment: string;
  contact: string;
  hoursAndAddress: string;
  copyright: (name: string) => string;
  selectSpecialty: string;
  selectLocation: string;
  selectService: string;
  selectServiceFor: (specialty: string) => string;
  breadcrumbLocation: string;
  breadcrumbSpecialty: string;
  breadcrumbService: string;
  breadcrumbProvider: string;
  breadcrumbTerm: string;
  bookingProgress: string;
  selectDate: string;
  selectTime: string;
  fillDetails: string;
  dateAndTime: string;
  contactDetails: string;
  selectDateFirst: string;
  patientReviews: string;
  clientReviews: string;
  step: (n: string) => string;
  availableSlots: string;
  noSlotsForDay: string;
  slotAt: (time: string) => string;
  prevMonth: string;
  nextMonth: string;
  selectionOverview: string;
  yourDetails: string;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  errorName: string;
  errorPhone: string;
  errorEmail: string;
  bookSubmit: string;
  checkFieldsAbove: string;
  reservationNotFound: string;
  missingDataRestart: string;
  backHome: string;
  rowService: string;
  rowDate: string;
  rowTime: string;
  rowClient: string;
  rowPhone: string;
  rowEmail: string;
  fallbackAppointment: string;
  totalToPay: string;
  bookingReview: string;
  confirmBooking: string;
  backToEdit: string;
  bookingSuccess: string;
  withProvider: (name: string) => string;
  confirmationMessage: (
    name: string,
    service: string,
    providerPart: string,
    date: string,
    time: string,
  ) => string;
}

const sr: Dict = {
  bookAppointment: "Zakaži Termin",
  contact: "Kontakt",
  hoursAndAddress: "Radno vreme i adresa",
  copyright: (name) => `© 2026 ${name}. Sva prava zadržana.`,
  selectSpecialty: "Izaberite Specijalnost",
  selectLocation: "Izaberite Lokaciju",
  selectService: "Izaberite Uslugu",
  selectServiceFor: (specialty) => `Izaberite Uslugu — ${specialty}`,
  breadcrumbLocation: "Lokacija",
  breadcrumbSpecialty: "Specijalnost",
  breadcrumbService: "Usluga",
  breadcrumbProvider: "Lekar",
  breadcrumbTerm: "Termin",
  bookingProgress: "Napredak zakazivanja",
  selectDate: "Izaberite datum",
  selectTime: "Izaberite vreme",
  fillDetails: "Popunite podatke",
  dateAndTime: "Datum i Vreme",
  contactDetails: "Kontakt Detalji",
  selectDateFirst: "Prvo izaberite datum u kalendaru",
  patientReviews: "Šta kažu pacijenti",
  clientReviews: "Šta kažu klijenti",
  step: (n) => `Korak ${n}`,
  availableSlots: "Dostupni Termini",
  noSlotsForDay: "Nema slobodnih termina za ovaj dan. Izaberite drugi datum.",
  slotAt: (time) => `Termin u ${time}`,
  prevMonth: "Prethodni mesec",
  nextMonth: "Sledeći mesec",
  selectionOverview: "Pregled izbora",
  yourDetails: "Vaši Podaci",
  fullName: "Ime i prezime",
  phoneNumber: "Broj telefona",
  emailAddress: "Email adresa",
  errorName: "Unesite ime i prezime.",
  errorPhone: "Unesite ispravan broj telefona.",
  errorEmail: "Unesite ispravnu email adresu.",
  bookSubmit: "Zakaži",
  checkFieldsAbove: "Proverite označena polja iznad.",
  reservationNotFound: "Rezervacija nije pronađena",
  missingDataRestart: "Izgleda da nedostaju podaci. Započnite zakazivanje ponovo.",
  backHome: "Nazad na početnu",
  rowService: "Usluga",
  rowDate: "Datum",
  rowTime: "Vreme",
  rowClient: "Klijent",
  rowPhone: "Telefon",
  rowEmail: "Email",
  fallbackAppointment: "Termin",
  totalToPay: "Ukupno za uplatu",
  bookingReview: "Pregled Rezervacije",
  confirmBooking: "Potvrdi rezervaciju",
  backToEdit: "Nazad na izmenu",
  bookingSuccess: "Uspešno zakazano!",
  withProvider: (name) => ` kod ${name}`,
  confirmationMessage: (name, service, providerPart, date, time) =>
    `${name}, vaš termin za ${service}${providerPart} je potvrđen za ${date} u ${time}. Vidimo se!`,
};

const en: Dict = {
  bookAppointment: "Book Appointment",
  contact: "Contact",
  hoursAndAddress: "Hours & Address",
  copyright: (name) => `© 2026 ${name}. All rights reserved.`,
  selectSpecialty: "Select a Specialty",
  selectLocation: "Select a Location",
  selectService: "Select a Service",
  selectServiceFor: (specialty) => `Select a Service — ${specialty}`,
  breadcrumbLocation: "Location",
  breadcrumbSpecialty: "Specialty",
  breadcrumbService: "Service",
  breadcrumbProvider: "Doctor",
  breadcrumbTerm: "Appointment",
  bookingProgress: "Booking progress",
  selectDate: "Select a date",
  selectTime: "Select a time",
  fillDetails: "Fill in your details",
  dateAndTime: "Date & Time",
  contactDetails: "Contact Details",
  selectDateFirst: "First pick a date on the calendar",
  patientReviews: "What patients say",
  clientReviews: "What clients say",
  step: (n) => `Step ${n}`,
  availableSlots: "Available Slots",
  noSlotsForDay: "No available slots for the selected date. Please choose another day.",
  slotAt: (time) => `Slot at ${time}`,
  prevMonth: "Previous month",
  nextMonth: "Next month",
  selectionOverview: "Selection overview",
  yourDetails: "Your Details",
  fullName: "Full name",
  phoneNumber: "Phone number",
  emailAddress: "Email address",
  errorName: "Please enter your full name.",
  errorPhone: "Please enter a valid phone number.",
  errorEmail: "Please enter a valid email address.",
  bookSubmit: "Book",
  checkFieldsAbove: "Please check the highlighted fields above.",
  reservationNotFound: "Booking Not Found",
  missingDataRestart: "It looks like some details are missing. Please start the booking again.",
  backHome: "Back to Home",
  rowService: "Service",
  rowDate: "Date",
  rowTime: "Time",
  rowClient: "Client",
  rowPhone: "Phone",
  rowEmail: "Email",
  fallbackAppointment: "Appointment",
  totalToPay: "Total to Pay",
  bookingReview: "Booking Review",
  confirmBooking: "Confirm Booking",
  backToEdit: "Back to Edit",
  bookingSuccess: "Successfully Booked!",
  withProvider: (name) => ` with ${name}`,
  confirmationMessage: (name, service, providerPart, date, time) =>
    `${name}, your appointment for ${service}${providerPart} is confirmed for ${date} at ${time}. See you soon!`,
};

const dictionaries: Record<Lang, Dict> = { sr, en };

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: Dict;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always render "sr" first (matches SSR output, avoids hydration mismatch),
  // then pick up a stored preference right after mount.
  const [lang, setLang] = useState<Lang>("sr");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "sr" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "sr" ? "en" : "sr";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
