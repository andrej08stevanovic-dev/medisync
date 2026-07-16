/**
 * Klinika Elit — Beograd
 *
 * Generic providers only — no confirmed individual doctor names.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, bgBiz } from "@/lib/demo-types";
import { BrainCircuit, PersonStanding, ShieldPlus } from "lucide-react";

export const klinika_elit: DemoConfig = {
  slug: "klinika-elit",
  brand: "ELIT",
  category: "Klinika · Beograd",
  name: "Klinika Elit",
  description:
    "Neurohirurgija, fizikalna medicina i interna medicina pod jednim krovom — precizna dijagnostika i posvećena rehabilitacija, uz online zakazivanje.",
  theme: "medical",
  hero: {
    lead: "Precizna nega,",
    emphasis: "od dijagnoze do oporavka.",
    subtext:
      "Neurohirurgija, fizikalna medicina i interna medicina — izaberite specijalnost, lekara i termin online, bez čekanja na liniji.",
    icon: BrainCircuit,
    stats: medStats("7.200+", "16"),
  },

  specialties: [
    { id: "neurohirurgija", name: "Neurohirurgija", icon: BrainCircuit, color: "oklch(0.50 0.14 270)" },
    {
      id: "fizikalna",
      name: "Fizikalna medicina",
      icon: PersonStanding,
      color: "oklch(0.62 0.10 140)",
    },
    { id: "interna", name: "Interna medicina", icon: ShieldPlus, color: "oklch(0.55 0.10 195)" },
  ],

  services: [
    // ── Neurohirurgija ──
    {
      id: "neurohir-pregled",
      name: "Neurohirurški pregled",
      description: "Specijalistički pregled sa procenom neurološkog i strukturnog nalaza.",
      duration: 30,
      price: 6000,
      specialtyId: "neurohirurgija",
      providerIds: ["spec-neurohir"],
    },
    {
      id: "neurohir-kicma",
      name: "Konsultacija za hirurgiju kičme",
      description: "Procena kandidature za operativno lečenje diskus hernije i stenoze.",
      duration: 30,
      price: 7000,
      specialtyId: "neurohirurgija",
      providerIds: ["spec-neurohir"],
    },
    {
      id: "neurohir-kontrola",
      name: "Kontrolni pregled posle operacije",
      description: "Praćenje toka oporavka i korekcija terapije nakon intervencije.",
      duration: 20,
      price: 4000,
      specialtyId: "neurohirurgija",
      providerIds: ["spec-neurohir"],
    },

    // ── Fizikalna medicina ──
    {
      id: "fizio-pregled",
      name: "Fizijatrijski pregled",
      description: "Procena funkcionalnog stanja sa planom rehabilitacije.",
      duration: 30,
      price: 3800,
      specialtyId: "fizikalna",
      providerIds: ["spec-fizijatrija"],
    },
    {
      id: "fizio-terapija",
      name: "Individualna kinezi terapija",
      description: "Vođene vežbe za oporavak pokretljivosti i snage.",
      duration: 45,
      price: 3000,
      specialtyId: "fizikalna",
      providerIds: ["spec-fizijatrija"],
    },
    {
      id: "fizio-elektro",
      name: "Elektroterapija",
      description: "Analgetski i protivupalni tretman strujama niske frekvencije.",
      duration: 20,
      price: 2000,
      specialtyId: "fizikalna",
      providerIds: ["spec-fizijatrija"],
    },

    // ── Interna medicina ──
    {
      id: "int-pregled",
      name: "Internistički pregled",
      description: "Sveobuhvatni pregled sa evaluacijom opšteg zdravstvenog stanja.",
      duration: 30,
      price: 3800,
      specialtyId: "interna",
      providerIds: ["spec-interna"],
    },
    {
      id: "int-ekg",
      name: "EKG",
      description: "Snimanje srčanog ritma — brzo i potpuno bezbolno.",
      duration: 15,
      price: 1800,
      specialtyId: "interna",
      providerIds: ["spec-interna"],
      noProviderStep: true,
    },
    {
      id: "int-sistematski",
      name: "Kompletni sistematski pregled",
      description: "Sveobuhvatna evaluacija zdravlja sa laboratorijskim analizama.",
      duration: 60,
      price: 12000,
      specialtyId: "interna",
      providerIds: ["spec-interna"],
    },
  ],

  providers: [
    { id: "spec-neurohir", name: "Spec. neurohirurgije", title: "Neurohirurg" },
    { id: "spec-fizijatrija", name: "Spec. fizikalne medicine", title: "Fizijatar" },
    { id: "spec-interna", name: "Spec. interne medicine", title: "Internista" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Radovan T.",
      service: "Konsultacija za hirurgiju kičme",
      text: "Zakazao konsultaciju za nedelju dana, doktor detaljno objasnio sve opcije. Ozbiljan pristup.",
    },
    {
      name: "Milica S.",
      service: "Individualna kinezi terapija",
      text: "Posle operacije kolena, terapije zakazujem online kad god mi odgovara. Veliko olakšanje.",
    },
    {
      name: "Zoran P.",
      service: "Internistički pregled",
      text: "Sistematski pregled gotov za jedan dan, nalazi jasno objašnjeni. Preporučujem.",
    },
  ],
  rating: { average: "4.9", count: 187 },
  gallery: medGallery({ icon: PersonStanding, label: "Rehabilitacija" }),
  trust: MEDICAL_TRUST,

  business: bgBiz(
    "+381 11 233 45 66",
    "kontakt@klinikaelit.rs",
    "Bulevar kralja Aleksandra 218",
    "Pon – Pet 08 – 20h, Sub 08 – 14h",
    "Mo-Fr 08:00-20:00, Sa 08:00-14:00",
  ),
  seo: {
    title: "Klinika Elit — Zakažite pregled online · Beograd",
    description:
      "Neurohirurgija, fizikalna medicina i interna medicina u Beogradu. Izaberite specijalnost, lekara i termin — zakažite online.",
  },
};
