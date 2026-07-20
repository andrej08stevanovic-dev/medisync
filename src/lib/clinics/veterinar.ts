/**
 * Veterinarska ambulanta VETERINAR — Beograd
 *
 * Usluge: opšti klinički pregled, vakcinacija, čipovanje i izdavanje pasoša,
 * preventivna dijagnostika, sterilizacija/kasstracija, specijalistički pregled,
 * stomatologija veterinara.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, bgBiz } from "@/lib/demo-types";
import { CalendarCheck, ShieldCheck, HeartPulse, PawPrint } from "lucide-react";

export const veterinar: DemoConfig = {
  slug: "veterinar",
  brand: "VETERINAR",
  category: "Veterinarska ambulanta · Beograd",
  name: "Veterinarska ambulanta VETERINAR",
  description:
    "Kompletna veterinarska nega za vaše ljubimce — opšti pregled, vakcinacija, čipovanje, preventivna dijagnostika, hirurgija i stomatologija, uz online zakazivanje.",
  theme: "medical",
  hero: {
    lead: "Vaš ljubimac zaslužuje",
    emphasis: "najbolju negu.",
    subtext:
      "Opšti pregled, vakcinacija, čipovanje, preventivna dijagnostika, sterilizacija i stomatologija — zakažite termin online, bez čekanja.",
    icon: PawPrint,
    stats: medStats("3.500+", "12"),
  },
  services: [
    {
      id: "pregled",
      name: "Opšti klinički pregled",
      description: "Kompletan klinički pregled sa anamnezom i savetom za negu.",
      duration: 30,
      price: 3000,
    },
    {
      id: "vakcinacija",
      name: "Vakcinacija",
      description: "Imunizacija prema protokolu (piroplazmoza, esganj, leptospiroza, parvoviroza, parainfluenza, kolera).",
      duration: 20,
      price: 2500,
      providerIds: ["milan", "ana"],
    },
    {
      id: "cipovanje",
      name: "Čipovanje i izdavanje pasoša",
      description: "Umetanje mikročipa i izdavanje međunarodnog veterinarskog pasoša za putovanja.",
      duration: 20,
      price: 3500,
      providerIds: ["milan", "ana"],
    },
    {
      id: "preventivna-dijagnostika",
      name: "Preventivna dijagnostika",
      description: "Kompletna preventivna analiza (krvna slika, biohemija, urin, koprološki nalaz).",
      duration: 30,
      price: 5500,
      providerIds: ["milan", "ana"],
    },
    {
      id: "sterilizacija-kastricija",
      name: "Sterilizacija / Kasstracija",
      description: "Hirurška sterilizacija (ženke) ili kasstracija (muškarci) pod opštom anestezijom.",
      duration: 60,
      price: 12000,
      providerIds: ["marko"],
    },
    {
      id: "specijalisticki-pregled",
      name: "Specijalistički pregled",
      description: "Specijalistička konsultacija (kardiologija, dermatologija, oftalmologija, ortopedija).",
      duration: 30,
      price: 4500,
      providerIds: ["marko", "jelena"],
    },
    {
      id: "stomatologija",
      name: "Stomatologija veterinara",
      description: "Pregled usne šupljine, uklanjanje kamenca, ekstrakcije, sanitacija pod anestezijom.",
      duration: 45,
      price: 8000,
      providerIds: ["jelena"],
    },
  ],
  providers: [
    { id: "milan", name: "Dr Milan Petrović", title: "Veterinar, opšta praksa" },
    { id: "ana", name: "Dr Ana Marković", title: "Veterinar, preventivna medicina" },
    { id: "marko", name: "Dr Marko Jovanović", title: "Veterinar hirurg" },
    { id: "jelena", name: "Dr Jelena Nikolić", title: "Veterinar stomatolog" },
  ],
  providerLabel: "Izaberite veterinara",
  reviews: [
    {
      name: "Marija L.",
      service: "Vakcinacija i čipovanje",
      text: "Zakazala dva pasa za 5 minuta, došli smo na vreme, sve gotovo brzo i bez stresa. Veterinari strpljivi.",
    },
    {
      name: "Stefan R.",
      service: "Sterilizacija",
      text: "Sve profesionalno — anestezija, operacija, kontrola. Mačka oporavila za dva dana. Hvala timu!",
    },
    {
      name: "Ana D.",
      service: "Stomatologija",
      text: "Pas imao loš dah i kamenac. Doktorica Jelena je sve rešila pod anestezijom, sada je kao nov. Preporučujem!",
    },
  ],
  rating: { average: "4.9", count: 187 },
  gallery: medGallery({ icon: PawPrint, label: "Naš tim" }),
  trust: [
    {
      icon: CalendarCheck,
      title: "Zakazivanje za 30 sekundi",
      text: "Bez čekanja na telefonu. Izaberite slobodan termin online, bilo kada.",
    },
    {
      icon: ShieldCheck,
      title: "Sterilno okruženje",
      text: "Sterilizacija instrumenata po najstrožijim veterinarskim standardima.",
    },
    {
      icon: HeartPulse,
      title: "Empatija i strpljenje",
      text: "Znamo koliko su ljubimci stresirani — pristupamo sa pažnjom i tišinom.",
    },
  ],
  business: bgBiz(
    "+381 11 444 55 66",
    "kontakt@veterinar.rs",
    "Vojvode Mišića 28",
    "Pon – Sub 08 – 20h",
    "Mo-Sa 08:00-20:00",
  ),
  seo: {
    title: "VETERINAR — Veterinarska ambulanta Beograd · Online zakazivanje",
    description:
      "Opšti pregled, vakcinacija, čipovanje, preventivna dijagnostika, sterilizacija, specijalistički pregledi i stomatologija za ljubimce. Zakažite termin online.",
  },
};