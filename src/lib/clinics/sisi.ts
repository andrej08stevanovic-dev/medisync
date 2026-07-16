/**
 * SiSi — Beograd
 *
 * Generic providers only — no confirmed individual doctor names.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, bgBiz } from "@/lib/demo-types";
import { Baby, ShieldPlus, Stethoscope, TestTube } from "lucide-react";

export const sisi: DemoConfig = {
  slug: "sisi",
  brand: "SISI",
  category: "Poliklinika · Beograd",
  name: "Poliklinika SiSi",
  description:
    "Opšta medicina, interna medicina, ginekologija i laboratorija — porodična poliklinika za svaki dan, uz online zakazivanje.",
  theme: "medical",
  hero: {
    lead: "Zdravlje cele porodice,",
    emphasis: "na jednom mestu.",
    subtext:
      "Opšta medicina, interna medicina, ginekologija i laboratorija — izaberite specijalnost, lekara i termin online.",
    icon: Stethoscope,
    stats: medStats("9.100+", "13"),
  },

  specialties: [
    { id: "opsta-medicina", name: "Opšta medicina", icon: Stethoscope, color: "oklch(0.58 0.09 175)" },
    { id: "interna", name: "Interna medicina", icon: ShieldPlus, color: "oklch(0.55 0.10 195)" },
    { id: "ginekologija", name: "Ginekologija", icon: Baby, color: "oklch(0.68 0.12 350)" },
    { id: "laboratorija", name: "Laboratorija", icon: TestTube, color: "oklch(0.60 0.10 165)" },
  ],

  services: [
    // ── Opšta medicina ──
    {
      id: "opsta-pregled",
      name: "Pregled lekara opšte prakse",
      description: "Osnovni pregled sa savetom i uputom po potrebi.",
      duration: 20,
      price: 2500,
      specialtyId: "opsta-medicina",
      providerIds: ["spec-opsta"],
    },
    {
      id: "opsta-uverenje",
      name: "Lekarsko uverenje",
      description: "Izdavanje uverenja za posao, vozačku ili sport.",
      duration: 20,
      price: 3000,
      specialtyId: "opsta-medicina",
      providerIds: ["spec-opsta"],
    },
    {
      id: "opsta-vakcinacija",
      name: "Vakcinacija",
      description: "Konsultacija i imunizacija po preporučenom kalendaru.",
      duration: 15,
      price: 2000,
      specialtyId: "opsta-medicina",
      providerIds: ["spec-opsta"],
      noProviderStep: true,
    },

    // ── Interna medicina ──
    {
      id: "int-pregled",
      name: "Internistički pregled",
      description: "Kompletan pregled sa procenom opšteg zdravstvenog stanja.",
      duration: 30,
      price: 3500,
      specialtyId: "interna",
      providerIds: ["spec-interna"],
    },
    {
      id: "int-uzv",
      name: "Ultrazvuk abdomena",
      description: "Ultrazvučni pregled trbušnih organa.",
      duration: 20,
      price: 3200,
      specialtyId: "interna",
      providerIds: ["spec-interna"],
    },
    {
      id: "int-sistematski",
      name: "Sistematski pregled",
      description: "Sveobuhvatna evaluacija zdravlja sa laboratorijskim analizama.",
      duration: 60,
      price: 11000,
      specialtyId: "interna",
      providerIds: ["spec-interna"],
    },

    // ── Ginekologija ──
    {
      id: "gin-pregled",
      name: "Ginekološki pregled",
      description: "Kompletan pregled uz savet i preporuke.",
      duration: 30,
      price: 3800,
      specialtyId: "ginekologija",
      providerIds: ["spec-gin"],
    },
    {
      id: "gin-uzv",
      name: "Ultrazvuk karlice",
      description: "Ultrazvučni pregled karlice — precizno i nežno.",
      duration: 20,
      price: 3200,
      specialtyId: "ginekologija",
      providerIds: ["spec-gin"],
    },
    {
      id: "gin-papa",
      name: "Papa test",
      description: "Bezbolno uzimanje brisa za ranu prevenciju.",
      duration: 15,
      price: 2000,
      specialtyId: "ginekologija",
      providerIds: ["spec-gin"],
    },

    // ── Laboratorija ──
    {
      id: "lab-krvna",
      name: "Kompletna krvna slika",
      description: "Osnovni skrining opšteg stanja organizma.",
      duration: 10,
      price: 800,
      specialtyId: "laboratorija",
      noProviderStep: true,
    },
    {
      id: "lab-biohemija",
      name: "Biohemijske analize",
      description: "Šećer, holesterol, jetra, bubrezi i više.",
      duration: 10,
      price: 1500,
      specialtyId: "laboratorija",
      noProviderStep: true,
    },
    {
      id: "lab-hormoni",
      name: "Hormonski panel",
      description: "Štitna žlezda i polni hormoni.",
      duration: 10,
      price: 2500,
      specialtyId: "laboratorija",
      noProviderStep: true,
    },
  ],

  providers: [
    { id: "spec-opsta", name: "Lekar opšte prakse", title: "Opšta medicina" },
    { id: "spec-interna", name: "Spec. interne medicine", title: "Internista" },
    { id: "spec-gin", name: "Spec. ginekologije", title: "Ginekolog" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Bojana N.",
      service: "Ginekološki pregled",
      text: "Zakazala pregled u dva klika, bez neprijatnih poziva. Sve diskretno i profesionalno.",
    },
    {
      name: "Miloš K.",
      service: "Lekarsko uverenje",
      text: "Uverenje za posao izvadio za pola sata, bez čekanja u redu. Praktično.",
    },
    {
      name: "Tanja D.",
      service: "Sistematski pregled",
      text: "Kompletan sistematski gotov za jedan dan, sve na jednom mestu. Preporučujem.",
    },
  ],
  rating: { average: "4.8", count: 231 },
  gallery: medGallery({ icon: Baby, label: "Porodična nega" }),
  trust: MEDICAL_TRUST,

  business: bgBiz(
    "+381 11 266 78 99",
    "kontakt@sisipoliklinika.rs",
    "Ustanička 130",
    "Pon – Sub 08 – 20h",
    "Mo-Sa 08:00-20:00",
  ),
  seo: {
    title: "Poliklinika SiSi — Zakažite pregled online · Beograd",
    description:
      "Opšta medicina, interna medicina, ginekologija i laboratorija u Beogradu. Izaberite specijalnost i termin — zakažite online.",
  },
};
