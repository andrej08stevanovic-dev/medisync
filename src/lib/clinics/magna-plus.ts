/**
 * Magna Plus — Beograd
 *
 * Generic providers only — no confirmed individual doctor names.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, bgBiz } from "@/lib/demo-types";
import { Baby, Brain, ScanSearch } from "lucide-react";

export const magna_plus: DemoConfig = {
  slug: "magna-plus",
  brand: "MAGNA PLUS",
  category: "Poliklinika · Beograd",
  name: "Magna Plus",
  description:
    "Pedijatrija, neurologija i dijagnostika magnetnom rezonancom — kompletna nega za decu i odrasle, uz online zakazivanje.",
  theme: "medical",
  hero: {
    lead: "Briga koja",
    emphasis: "raste sa vama.",
    subtext:
      "Pedijatrija, neurologija i MR dijagnostika — izaberite specijalnost, lekara i termin online, bez čekanja na liniji.",
    icon: Baby,
    stats: medStats("6.700+", "14"),
  },

  specialties: [
    { id: "pedijatrija", name: "Pedijatrija", icon: Baby, color: "oklch(0.68 0.14 80)" },
    { id: "neurologija", name: "Neurologija", icon: Brain, color: "oklch(0.55 0.12 280)" },
    { id: "dijagnostika", name: "Dijagnostika (MR)", icon: ScanSearch, color: "oklch(0.55 0.12 240)" },
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
      name: "Sistematski pregled za decu",
      description: "Kompletan sistematski pregled za upis u vrtić ili školu.",
      duration: 30,
      price: 4200,
      specialtyId: "pedijatrija",
      providerIds: ["spec-ped"],
    },
    {
      id: "ped-uzv-kukovi",
      name: "Ultrazvuk kukova bebe",
      description: "Rani skrining razvojnog poremećaja kuka kod odojčadi.",
      duration: 15,
      price: 3000,
      specialtyId: "pedijatrija",
      providerIds: ["spec-ped"],
    },

    // ── Neurologija ──
    {
      id: "neuro-pregled",
      name: "Neurološki pregled",
      description: "Pregled sa procenom simptoma i plana dijagnostike.",
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
    {
      id: "neuro-emng",
      name: "EMNG",
      description: "Ispitivanje živaca i mišića.",
      duration: 45,
      price: 5500,
      specialtyId: "neurologija",
      providerIds: ["spec-neuro"],
    },

    // ── Dijagnostika (MR) ──
    {
      id: "mr-glava",
      name: "MR glave",
      description: "Magnetna rezonanca mozga za preciznu dijagnostiku bez zračenja.",
      duration: 45,
      price: 14000,
      specialtyId: "dijagnostika",
      noProviderStep: true,
    },
    {
      id: "mr-kicma",
      name: "MR kičme",
      description: "Magnetna rezonanca kičme — vratni, grudni ili slabinski segment.",
      duration: 45,
      price: 15000,
      specialtyId: "dijagnostika",
      noProviderStep: true,
    },
    {
      id: "mr-zglobovi",
      name: "MR zglobova",
      description: "Magnetna rezonanca kolena, ramena ili drugog zgloba.",
      duration: 40,
      price: 13000,
      specialtyId: "dijagnostika",
      noProviderStep: true,
    },
  ],

  providers: [
    { id: "spec-ped", name: "Spec. pedijatrije", title: "Pedijatar" },
    { id: "spec-neuro", name: "Spec. neurologije", title: "Neurolog" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Marija T.",
      service: "Sistematski pregled za decu",
      text: "Sistematski za sina zakazan online za dva dana, bez čekanja u redu. Osoblje ljubazno.",
    },
    {
      name: "Vuk S.",
      service: "MR glave",
      text: "MR zakazan za sutradan, nalaz stigao brzo. Konačno moderna oprema u blizini kuće.",
    },
    {
      name: "Jelena R.",
      service: "EEG",
      text: "EEG detetu obavljen mirno i strpljivo, doktor sve objasnio roditeljima. Preporučujem.",
    },
  ],
  rating: { average: "4.9", count: 194 },
  gallery: medGallery({ icon: ScanSearch, label: "MR dijagnostika" }),
  trust: MEDICAL_TRUST,

  business: bgBiz(
    "+381 11 299 01 22",
    "kontakt@magnaplus.rs",
    "Bulevar oslobođenja 130",
    "Pon – Sub 08 – 20h",
    "Mo-Sa 08:00-20:00",
  ),
  seo: {
    title: "Magna Plus — Zakažite pregled online · Beograd",
    description:
      "Pedijatrija, neurologija i MR dijagnostika u Beogradu. Izaberite specijalnost i termin — zakažite online.",
  },
};
