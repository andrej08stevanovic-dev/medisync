/**
 * Hipokrat Group — Niš (2 lokacije: Prvomajska i Vojvode Mišića)
 *
 * Generic providers only — no confirmed individual doctor names.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, cityBiz } from "@/lib/demo-types";
import { Baby, Droplets, Flower2, MapPin, Scissors, ShieldPlus, Stethoscope } from "lucide-react";

export const hipokrat_group: DemoConfig = {
  slug: "hipokrat-group",
  brand: "HIPOKRAT GROUP",
  category: "Poliklinika · Niš",
  name: "Hipokrat Group",
  description:
    "Dve lokacije, šest specijalnosti — opšta medicina, interna medicina, pedijatrija, ginekologija, urologija i hirurgija, uz online zakazivanje.",
  theme: "medical",
  hero: {
    lead: "Zdravlje na dve",
    emphasis: "adrese u Nišu.",
    subtext:
      "Opšta medicina, interna medicina, pedijatrija, ginekologija, urologija i hirurgija — izaberite lokaciju, specijalnost i termin online.",
    icon: Stethoscope,
    stats: medStats("10.500+", "17"),
  },

  locations: [
    {
      id: "prvomajska",
      name: "Prvomajska",
      icon: MapPin,
      color: "oklch(0.58 0.13 260)",
      phone: "018 511 100",
      address: "Prvomajska 14, 18000 Niš",
    },
    {
      id: "vojvode-misica",
      name: "Vojvode Mišića",
      icon: MapPin,
      color: "oklch(0.60 0.12 140)",
      phone: "018 511 200",
      address: "Vojvode Mišića 62, 18000 Niš",
    },
  ],

  specialties: [
    { id: "opsta-medicina", name: "Opšta medicina", icon: Stethoscope, color: "oklch(0.58 0.09 175)" },
    { id: "interna", name: "Interna medicina", icon: ShieldPlus, color: "oklch(0.55 0.10 195)" },
    { id: "pedijatrija", name: "Pedijatrija", icon: Baby, color: "oklch(0.68 0.14 80)" },
    { id: "ginekologija", name: "Ginekologija", icon: Flower2, color: "oklch(0.65 0.14 350)" },
    {
      id: "urologija",
      name: "Urologija",
      icon: Droplets,
      color: "oklch(0.55 0.12 220)",
      locationIds: ["prvomajska"],
    },
    {
      id: "hirurgija",
      name: "Hirurgija",
      icon: Scissors,
      color: "oklch(0.55 0.13 15)",
      locationIds: ["prvomajska"],
    },
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
      id: "opsta-kontrola",
      name: "Kontrolni pregled",
      description: "Kontrola sa tumačenjem nalaza i korekcijom terapije.",
      duration: 15,
      price: 2000,
      specialtyId: "opsta-medicina",
      providerIds: ["spec-opsta"],
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
      id: "int-uzv",
      name: "Ultrazvuk abdomena",
      description: "Ultrazvučni pregled trbušnih organa.",
      duration: 20,
      price: 3000,
      specialtyId: "interna",
      providerIds: ["spec-interna"],
    },

    // ── Pedijatrija ──
    {
      id: "ped-pregled",
      name: "Pedijatrijski pregled",
      description: "Klinički pregled deteta uz savet i preporuke za roditelje.",
      duration: 20,
      price: 3000,
      specialtyId: "pedijatrija",
      providerIds: ["spec-ped"],
    },
    {
      id: "ped-sistematski",
      name: "Sistematski pregled",
      description: "Kompletan sistematski pregled za upis u vrtić ili školu.",
      duration: 30,
      price: 4000,
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

    // ── Urologija ──
    {
      id: "uro-pregled",
      name: "Urološki pregled",
      description: "Pregled uz diskreciju i stručan savet.",
      duration: 30,
      price: 4000,
      specialtyId: "urologija",
      providerIds: ["spec-uro"],
    },
    {
      id: "uro-uzv",
      name: "Ultrazvuk bubrega i bešike",
      description: "Ultrazvučni pregled bubrega i mokraćne bešike.",
      duration: 20,
      price: 3500,
      specialtyId: "urologija",
      providerIds: ["spec-uro"],
    },

    // ── Hirurgija ──
    {
      id: "hir-pregled",
      name: "Hirurški pregled",
      description: "Specijalistički pregled sa procenom stanja i planom lečenja.",
      duration: 20,
      price: 4000,
      specialtyId: "hirurgija",
      providerIds: ["spec-hirurgija"],
    },
    {
      id: "hir-ekscizija",
      name: "Ekscizija kožnih promena",
      description: "Hirurško uklanjanje mladeža, cisti i lipoma uz lokalnu anesteziju.",
      duration: 30,
      price: 7500,
      specialtyId: "hirurgija",
      providerIds: ["spec-hirurgija"],
    },
  ],

  providers: [
    { id: "spec-opsta", name: "Lekar opšte prakse", title: "Opšta medicina" },
    { id: "spec-interna", name: "Spec. interne medicine", title: "Internista" },
    { id: "spec-ped", name: "Spec. pedijatrije", title: "Pedijatar" },
    { id: "spec-gin", name: "Spec. ginekologije", title: "Ginekolog" },
    { id: "spec-uro", name: "Spec. urologije", title: "Urolog" },
    { id: "spec-hirurgija", name: "Spec. hirurgije", title: "Hirurg" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Dušica P.",
      service: "Pedijatrijski pregled",
      text: "Sistematski za sina zakazala online za dva dana, bez čekanja u čekaonici. Odlično.",
    },
    {
      name: "Saša M.",
      service: "Urološki pregled",
      text: "Otišao na lokaciju Prvomajska, pregled brz i diskretan. Termin biram sam, online.",
    },
    {
      name: "Marina T.",
      service: "Ginekološki pregled",
      text: "Zakazala na bližoj lokaciji, bez razlike u kvalitetu usluge. Sve pohvale.",
    },
  ],
  rating: { average: "4.8", count: 298 },
  gallery: medGallery({ icon: Stethoscope, label: "Dve lokacije" }),
  trust: MEDICAL_TRUST,

  business: cityBiz(
    "018 511 100",
    "info@hipokratgroup.rs",
    "Prvomajska 14",
    "18000",
    "Niš",
    "Pon – Sub 08 – 20h",
    "Mo-Sa 08:00-20:00",
  ),
  seo: {
    title: "Hipokrat Group — Zakažite pregled online · Niš",
    description:
      "Opšta medicina, interna medicina, pedijatrija, ginekologija, urologija i hirurgija na dve lokacije u Nišu. Zakažite online.",
  },
};
