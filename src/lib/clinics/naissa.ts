/**
 * Naissa — Niš
 *
 * Generic providers only — no confirmed individual doctor names.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, cityBiz } from "@/lib/demo-types";
import { Bone, PersonStanding, Stethoscope } from "lucide-react";

export const naissa: DemoConfig = {
  slug: "naissa",
  brand: "NAISSA",
  category: "Poliklinika · Niš",
  name: "Poliklinika Naissa",
  description:
    "Ortopedija, fizikalna medicina i interna medicina — od dijagnoze do potpunog oporavka pokretljivosti, uz online zakazivanje.",
  theme: "medical",
  hero: {
    lead: "Pokret bez",
    emphasis: "granica.",
    subtext:
      "Ortopedija, fizikalna medicina i interna medicina — izaberite specijalnost, lekara i termin online, bez čekanja na liniji.",
    icon: Bone,
    stats: medStats("5.600+", "15"),
  },

  specialties: [
    { id: "ortopedija", name: "Ortopedija", icon: Bone, color: "oklch(0.55 0.09 70)" },
    {
      id: "fizikalna",
      name: "Fizikalna medicina",
      icon: PersonStanding,
      color: "oklch(0.62 0.10 140)",
    },
    { id: "interna", name: "Interna medicina", icon: Stethoscope, color: "oklch(0.58 0.09 175)" },
  ],

  services: [
    // ── Ortopedija ──
    {
      id: "orto-pregled",
      name: "Ortopedski pregled",
      description: "Klinička procena zglobova i kičme sa planom terapije.",
      duration: 30,
      price: 3800,
      specialtyId: "ortopedija",
      providerIds: ["spec-orto"],
    },
    {
      id: "orto-uzv-zglob",
      name: "Ultrazvuk zgloba",
      description: "Ultrazvučna dijagnostika zgloba za procenu oštećenja i upale.",
      duration: 20,
      price: 3200,
      specialtyId: "ortopedija",
      providerIds: ["spec-orto"],
    },
    {
      id: "orto-infiltracija",
      name: "Intraartikularna infiltracija",
      description: "Ciljana injekcija u zglob za smanjenje bola i upale.",
      duration: 20,
      price: 5500,
      specialtyId: "ortopedija",
      providerIds: ["spec-orto"],
    },

    // ── Fizikalna medicina ──
    {
      id: "fizio-pregled",
      name: "Fizijatrijski pregled",
      description: "Procena funkcionalnog stanja sa planom rehabilitacije.",
      duration: 30,
      price: 3500,
      specialtyId: "fizikalna",
      providerIds: ["spec-fizijatrija"],
    },
    {
      id: "fizio-terapija",
      name: "Individualna kinezi terapija",
      description: "Vođene vežbe za oporavak pokretljivosti i snage.",
      duration: 45,
      price: 2800,
      specialtyId: "fizikalna",
      providerIds: ["spec-fizijatrija"],
    },
    {
      id: "fizio-magnet",
      name: "Magnetna terapija",
      description: "Neinvazivan tretman za ubrzanje zarastanja i smanjenje bola.",
      duration: 20,
      price: 2200,
      specialtyId: "fizikalna",
      providerIds: ["spec-fizijatrija"],
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
      id: "int-ekg",
      name: "EKG",
      description: "Snimanje srčanog ritma — brzo i potpuno bezbolno.",
      duration: 15,
      price: 1500,
      specialtyId: "interna",
      providerIds: ["spec-interna"],
      noProviderStep: true,
    },
    {
      id: "int-kontrola",
      name: "Kontrolni pregled",
      description: "Kontrola sa tumačenjem nalaza i korekcijom terapije.",
      duration: 20,
      price: 2500,
      specialtyId: "interna",
      providerIds: ["spec-interna"],
    },
  ],

  providers: [
    { id: "spec-orto", name: "Spec. ortopedije", title: "Ortoped" },
    { id: "spec-fizijatrija", name: "Spec. fizikalne medicine", title: "Fizijatar" },
    { id: "spec-interna", name: "Spec. interne medicine", title: "Internista" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Dragan M.",
      service: "Ortopedski pregled",
      text: "Bol u kolenu rešen za tri posete. Zakazivanje online mi je uštedelo dane čekanja.",
    },
    {
      name: "Ivana S.",
      service: "Individualna kinezi terapija",
      text: "Terapije nakon povrede zakazujem kad mi odgovara, bez zvanja svaki put.",
    },
    {
      name: "Nemanja T.",
      service: "Internistički pregled",
      text: "Brz i temeljan pregled, doktor sve jasno objasnio. Preporučujem.",
    },
  ],
  rating: { average: "4.9", count: 152 },
  gallery: medGallery({ icon: PersonStanding, label: "Rehabilitacija" }),
  trust: MEDICAL_TRUST,

  business: cityBiz(
    "018 245 12 34",
    "info@naissa.rs",
    "Vožda Karađorđa 44",
    "18000",
    "Niš",
    "Pon – Sub 08 – 20h",
    "Mo-Sa 08:00-20:00",
  ),
  seo: {
    title: "Poliklinika Naissa — Zakažite pregled online · Niš",
    description:
      "Ortopedija, fizikalna medicina i interna medicina u Nišu. Izaberite specijalnost i termin — zakažite online.",
  },
};
