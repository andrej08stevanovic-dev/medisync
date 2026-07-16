/**
 * Prva Pedijatrija — Beograd
 *
 * Generic providers only — no confirmed individual doctor names.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, bgBiz } from "@/lib/demo-types";
import { Baby, Brain, HeartHandshake, MessageCircle, Scissors, Smile } from "lucide-react";

export const prva_pedijatrija: DemoConfig = {
  slug: "prva-pedijatrija",
  brand: "PRVA PEDIJATRIJA",
  category: "Poliklinika · Beograd",
  name: "Prva Pedijatrija",
  description:
    "Pedijatrija, dečija hirurgija, neurologija, psihijatrija, logopedija i psihologija — kompletna nega za razvoj deteta, uz online zakazivanje.",
  theme: "medical",
  hero: {
    lead: "Svaki korak razvoja,",
    emphasis: "u dobrim rukama.",
    subtext:
      "Pedijatrija, dečija hirurgija, neurologija, psihijatrija, logopedija i psihologija — izaberite specijalnost i termin online.",
    icon: Baby,
    stats: medStats("9.400+", "15"),
  },

  specialties: [
    { id: "pedijatrija", name: "Pedijatrija", icon: Baby, color: "oklch(0.68 0.14 80)" },
    { id: "decija-hirurgija", name: "Dečija hirurgija", icon: Scissors, color: "oklch(0.60 0.13 20)" },
    { id: "neurologija", name: "Neurologija", icon: Brain, color: "oklch(0.55 0.12 280)" },
    { id: "psihijatrija", name: "Psihijatrija", icon: HeartHandshake, color: "oklch(0.60 0.13 310)" },
    { id: "logopedija", name: "Logopedija", icon: MessageCircle, color: "oklch(0.62 0.11 210)" },
    { id: "psihologija", name: "Psihologija", icon: Smile, color: "oklch(0.62 0.12 320)" },
  ],

  services: [
    // ── Pedijatrija ──
    {
      id: "ped-pregled",
      name: "Pedijatrijski pregled",
      description: "Klinički pregled deteta uz savet i preporuke za roditelje.",
      duration: 20,
      price: 3200,
      specialtyId: "pedijatrija",
      providerIds: ["spec-ped"],
    },
    {
      id: "ped-sistematski",
      name: "Sistematski pregled",
      description: "Kompletan sistematski pregled za upis u vrtić ili školu.",
      duration: 30,
      price: 4200,
      specialtyId: "pedijatrija",
      providerIds: ["spec-ped"],
    },
    {
      id: "ped-vakcinacija",
      name: "Vakcinacija",
      description: "Imunizacija po preporučenom kalendaru za decu.",
      duration: 15,
      price: 2500,
      specialtyId: "pedijatrija",
      providerIds: ["spec-ped"],
      noProviderStep: true,
    },

    // ── Dečija hirurgija ──
    {
      id: "dhir-pregled",
      name: "Dečji hirurški pregled",
      description: "Specijalistički pregled sa procenom stanja i planom lečenja.",
      duration: 20,
      price: 4000,
      specialtyId: "decija-hirurgija",
      providerIds: ["spec-dhir"],
    },
    {
      id: "dhir-kila",
      name: "Konsultacija za kilu / hidrokelu",
      description: "Procena kandidature za operativno lečenje kod dece.",
      duration: 20,
      price: 4500,
      specialtyId: "decija-hirurgija",
      providerIds: ["spec-dhir"],
    },
    {
      id: "dhir-uzv",
      name: "Ultrazvuk abdomena kod dece",
      description: "Pregled trbušnih organa prilagođen dečjem uzrastu.",
      duration: 20,
      price: 3500,
      specialtyId: "decija-hirurgija",
      providerIds: ["spec-dhir"],
    },

    // ── Neurologija ──
    {
      id: "neuro-pregled",
      name: "Dečji neurološki pregled",
      description: "Pregled sa procenom psihomotornog razvoja deteta.",
      duration: 30,
      price: 4000,
      specialtyId: "neurologija",
      providerIds: ["spec-neuro"],
    },
    {
      id: "neuro-eeg",
      name: "EEG",
      description: "Snimanje moždane aktivnosti — bezbolno.",
      duration: 30,
      price: 3800,
      specialtyId: "neurologija",
      providerIds: ["spec-neuro"],
      noProviderStep: true,
    },

    // ── Psihijatrija ──
    {
      id: "psih-pregled",
      name: "Dečji psihijatrijski pregled",
      description: "Detaljan pregled sa dijagnostikom i terapijskim planom.",
      duration: 40,
      price: 5000,
      specialtyId: "psihijatrija",
      providerIds: ["spec-psihijatar"],
    },
    {
      id: "psih-kontrola",
      name: "Kontrolni pregled",
      description: "Kontrolni pregled sa korekcijom terapije i praćenjem stanja.",
      duration: 20,
      price: 3500,
      specialtyId: "psihijatrija",
      providerIds: ["spec-psihijatar"],
    },

    // ── Logopedija ──
    {
      id: "logo-procena",
      name: "Logopedska procena govora",
      description: "Procena govorno-jezičkog razvoja sa planom tretmana.",
      duration: 45,
      price: 3800,
      specialtyId: "logopedija",
      providerIds: ["spec-logoped"],
    },
    {
      id: "logo-tretman",
      name: "Logopedski tretman",
      description: "Individualna vežba za razvoj govora i artikulacije.",
      duration: 45,
      price: 3000,
      specialtyId: "logopedija",
      providerIds: ["spec-logoped"],
    },

    // ── Psihologija ──
    {
      id: "psiho-procena",
      name: "Psihološka procena deteta",
      description: "Procena emocionalnog i kognitivnog razvoja deteta.",
      duration: 50,
      price: 4500,
      specialtyId: "psihologija",
      providerIds: ["spec-psiholog"],
    },
    {
      id: "psiho-seansa",
      name: "Individualna terapijska seansa",
      description: "Redovna seansa prilagođena uzrastu i potrebama deteta.",
      duration: 50,
      price: 4500,
      specialtyId: "psihologija",
      providerIds: ["spec-psiholog"],
    },
  ],

  providers: [
    { id: "spec-ped", name: "Spec. pedijatrije", title: "Pedijatar" },
    { id: "spec-dhir", name: "Spec. dečije hirurgije", title: "Dečji hirurg" },
    { id: "spec-neuro", name: "Spec. dečije neurologije", title: "Neurolog" },
    { id: "spec-psihijatar", name: "Spec. dečije psihijatrije", title: "Psihijatar" },
    { id: "spec-logoped", name: "Logoped", title: "Logoped" },
    { id: "spec-psiholog", name: "Dečji psiholog", title: "Psiholog" },
  ],
  providerLabel: "Izaberite stručnjaka",

  reviews: [
    {
      name: "Aleksandra P.",
      service: "Logopedska procena govora",
      text: "Zakazala procenu online za nedelju dana, logopedkinja strpljiva i precizna. Napredak vidljiv.",
    },
    {
      name: "Miloš R.",
      service: "Dečji neurološki pregled",
      text: "Pregled deteta obavljen mirno, doktorka sve objasnila roditeljima. Preporučujem.",
    },
    {
      name: "Jovana K.",
      service: "Individualna terapijska seansa",
      text: "Sin sada rado ide na seanse, psiholog zna kako da pristupi deci. Zakazivanje online olakšava sve.",
    },
  ],
  rating: { average: "4.9", count: 312 },
  gallery: medGallery({ icon: MessageCircle, label: "Razvoj deteta" }),
  trust: MEDICAL_TRUST,

  business: bgBiz(
    "+381 11 322 34 55",
    "kontakt@prvapedijatrija.rs",
    "Maksima Gorkog 15",
    "Pon – Sub 08 – 20h",
    "Mo-Sa 08:00-20:00",
  ),
  seo: {
    title: "Prva Pedijatrija — Zakažite pregled online · Beograd",
    description:
      "Pedijatrija, dečija hirurgija, neurologija, psihijatrija, logopedija i psihologija u Beogradu. Zakažite online.",
  },
};
