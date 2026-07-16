/**
 * Neo Mag — Niš i Pirot
 *
 * Generic providers only — no confirmed individual doctor names.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, cityBiz } from "@/lib/demo-types";
import { Bone, Brain, BrainCircuit, HeartPulse, MapPin, ScanSearch } from "lucide-react";

export const neo_mag: DemoConfig = {
  slug: "neo-mag",
  brand: "NEO MAG",
  category: "Dijagnostički centar · Niš",
  name: "Neo Mag",
  description:
    "Magnetna rezonanca, CT, rendgen i ultrazvuk, uz neurohirurgiju, neurologiju, ortopediju i kardiologiju — na dve lokacije, sa online zakazivanjem.",
  theme: "medical",
  hero: {
    lead: "Napredna dijagnostika,",
    emphasis: "brz i tačan nalaz.",
    subtext:
      "MR, CT, rendgen i ultrazvuk, uz neurohirurgiju, neurologiju, ortopediju i kardiologiju — izaberite lokaciju i termin online.",
    icon: ScanSearch,
    stats: medStats("14.200+", "12"),
  },

  locations: [
    {
      id: "nis",
      name: "Niš",
      icon: MapPin,
      color: "oklch(0.58 0.13 260)",
      phone: "018 522 100",
      address: "Vožda Karađorđa 78, 18000 Niš",
    },
    {
      id: "pirot",
      name: "Pirot",
      icon: MapPin,
      color: "oklch(0.60 0.12 60)",
      phone: "010 322 200",
      address: "Srpskih vladara 21, 18300 Pirot",
    },
  ],

  specialties: [
    { id: "dijagnostika", name: "Dijagnostika (MR, CT, RTG, UZ)", icon: ScanSearch, color: "oklch(0.55 0.12 240)" },
    {
      id: "neurohirurgija",
      name: "Neurohirurgija",
      icon: BrainCircuit,
      color: "oklch(0.50 0.14 270)",
      locationIds: ["nis"],
    },
    { id: "neurologija", name: "Neurologija", icon: Brain, color: "oklch(0.55 0.12 280)" },
    { id: "ortopedija", name: "Ortopedija", icon: Bone, color: "oklch(0.55 0.09 70)" },
    { id: "kardiologija", name: "Kardiologija", icon: HeartPulse, color: "oklch(0.60 0.15 25)" },
  ],

  services: [
    // ── Dijagnostika ──
    {
      id: "dg-mri",
      name: "Magnetna rezonanca (MRI)",
      description: "MRI snimak za preciznu dijagnostiku bez zračenja — mozak, kičma, zglobovi.",
      duration: 45,
      price: 14000,
      specialtyId: "dijagnostika",
      noProviderStep: true,
    },
    {
      id: "dg-ct",
      name: "CT snimanje",
      description: "Kompjuterizovana tomografija za detaljnu dijagnostiku unutrašnjih struktura.",
      duration: 30,
      price: 11000,
      specialtyId: "dijagnostika",
      noProviderStep: true,
    },
    {
      id: "dg-rtg",
      name: "Digitalni rendgen",
      description: "Digitalna radiografija sa minimalnom dozom zračenja i brzim nalazom.",
      duration: 10,
      price: 2200,
      specialtyId: "dijagnostika",
      noProviderStep: true,
    },
    {
      id: "dg-uzv",
      name: "Ultrazvuk (opšti)",
      description: "Ultrazvučni pregled abdomena ili mekih tkiva za sveobuhvatnu dijagnostiku.",
      duration: 20,
      price: 3200,
      specialtyId: "dijagnostika",
      noProviderStep: true,
    },

    // ── Neurohirurgija ──
    {
      id: "neurohir-pregled",
      name: "Neurohirurški pregled",
      description: "Specijalistički pregled sa procenom neurološkog i strukturnog nalaza.",
      duration: 30,
      price: 6500,
      specialtyId: "neurohirurgija",
      providerIds: ["spec-neurohir"],
    },
    {
      id: "neurohir-kicma",
      name: "Konsultacija za hirurgiju kičme",
      description: "Procena kandidature za operativno lečenje diskus hernije i stenoze.",
      duration: 30,
      price: 7500,
      specialtyId: "neurohirurgija",
      providerIds: ["spec-neurohir"],
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
      price: 4000,
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

    // ── Ortopedija ──
    {
      id: "orto-pregled",
      name: "Ortopedski pregled",
      description: "Klinička procena zglobova i kičme sa planom terapije.",
      duration: 30,
      price: 4000,
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

    // ── Kardiologija ──
    {
      id: "kardio-pregled",
      name: "Kardiološki pregled + EKG",
      description: "Klinički pregled sa EKG snimanjem i procenom kardiovaskularnog rizika.",
      duration: 30,
      price: 4500,
      specialtyId: "kardiologija",
      providerIds: ["spec-kardio"],
    },
    {
      id: "kardio-uzv",
      name: "Ultrazvuk srca",
      description: "Ehokardiografija za detaljan uvid u rad i strukturu srca.",
      duration: 30,
      price: 6000,
      specialtyId: "kardiologija",
      providerIds: ["spec-kardio"],
    },
  ],

  providers: [
    { id: "spec-neurohir", name: "Spec. neurohirurgije", title: "Neurohirurg" },
    { id: "spec-neuro", name: "Spec. neurologije", title: "Neurolog" },
    { id: "spec-orto", name: "Spec. ortopedije", title: "Ortoped" },
    { id: "spec-kardio", name: "Spec. kardiologije", title: "Kardiolog" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Vladan R.",
      service: "Magnetna rezonanca (MRI)",
      text: "MRI kolena zakazao u Nišu za dva dana, nalaz stigao na mejl isti dan. Ne moram više do Beograda.",
    },
    {
      name: "Snežana J.",
      service: "Ortopedski pregled",
      text: "Zakazala pregled u Pirotu, bez putovanja do većeg grada. Oprema na visokom nivou.",
    },
    {
      name: "Boban K.",
      service: "Konsultacija za hirurgiju kičme",
      text: "Neurohirurg detaljno objasnio sve opcije, bez žurbe. Ozbiljan pristup pacijentu.",
    },
  ],
  rating: { average: "4.9", count: 341 },
  gallery: medGallery({ icon: ScanSearch, label: "MR i CT dijagnostika" }),
  trust: MEDICAL_TRUST,

  business: cityBiz(
    "018 522 100",
    "info@neomag.rs",
    "Vožda Karađorđa 78",
    "18000",
    "Niš",
    "Pon – Sub 07 – 20h",
    "Mo-Sa 07:00-20:00",
  ),
  seo: {
    title: "Neo Mag — Zakažite MR, CT i pregled online · Niš i Pirot",
    description:
      "MR, CT, rendgen i ultrazvuk, uz neurohirurgiju, neurologiju, ortopediju i kardiologiju. Dve lokacije — zakažite online.",
  },
};
