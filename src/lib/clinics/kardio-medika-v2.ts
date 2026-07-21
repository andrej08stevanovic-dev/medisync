/**
 * Kardio Medika V2 — Beograd
 *
 * Clone of kardio-medika with corrected specialties (Kardiologija, Interna
 * medicina, Pedijatrija, Neurologija) — original left unchanged.
 * Generic providers only — no confirmed individual doctor names.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, bgBiz } from "@/lib/demo-types";
import { Baby, Brain, HeartPulse, ShieldPlus } from "lucide-react";

export const kardio_medika_v2: DemoConfig = {
  slug: "kardio-medika-v2",
  brand: "KARDIO MEDIKA",
  category: "Poliklinika · Beograd",
  name: "Kardio Medika",
  description:
    "Kardiologija, interna medicina, pedijatrija i neurologija — dijagnostika za celu porodicu, uz online zakazivanje.",
  theme: "medical",
  hero: {
    lead: "Srce i zdravlje,",
    emphasis: "za celu porodicu.",
    subtext:
      "Kardiologija, interna medicina, pedijatrija i neurologija — izaberite specijalnost i termin online.",
    icon: HeartPulse,
    stats: medStats("7.100+", "16"),
  },

  specialties: [
    { id: "kardiologija", name: "Kardiologija", icon: HeartPulse, color: "oklch(0.60 0.15 25)" },
    { id: "interna", name: "Interna medicina", icon: ShieldPlus, color: "oklch(0.55 0.10 195)" },
    { id: "pedijatrija", name: "Pedijatrija", icon: Baby, color: "oklch(0.68 0.14 80)" },
    { id: "neurologija", name: "Neurologija", icon: Brain, color: "oklch(0.55 0.12 280)" },
  ],

  services: [
    // ── Kardiologija ──
    {
      id: "kardio-pregled",
      name: "Kardiološki pregled + EKG",
      description: "Klinički pregled sa EKG snimanjem i procenom kardiovaskularnog rizika.",
      duration: 30,
      price: 4200,
      specialtyId: "kardiologija",
      providerIds: ["spec-kardio"],
    },
    {
      id: "kardio-uzv",
      name: "Ultrazvuk srca",
      description: "Ehokardiografija za detaljan uvid u rad i strukturu srca.",
      duration: 30,
      price: 5800,
      specialtyId: "kardiologija",
      providerIds: ["spec-kardio"],
    },
    {
      id: "kardio-holter",
      name: "Holter monitoring",
      description: "24-časovno praćenje srčanog ritma — postavljanje uređaja.",
      duration: 15,
      price: 3800,
      specialtyId: "kardiologija",
      providerIds: ["spec-kardio"],
    },

    // ── Interna medicina ──
    {
      id: "int-pregled",
      name: "Internistički pregled",
      description: "Kompletan pregled sa procenom opšteg zdravstvenog stanja.",
      duration: 30,
      price: 3800,
      specialtyId: "interna",
      providerIds: ["spec-interna"],
    },
    {
      id: "int-lab",
      name: "Laboratorijske analize — prijem",
      description: "Uzorkovanje krvi za kompletan biohemijski panel.",
      duration: 10,
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
      price: 2800,
      specialtyId: "interna",
      providerIds: ["spec-interna"],
    },

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

    // ── Neurologija ──
    {
      id: "neuro-pregled",
      name: "Neurološki pregled",
      description: "Specijalistički pregled sa evaluacijom nervnog sistema.",
      duration: 30,
      price: 4200,
      specialtyId: "neurologija",
      providerIds: ["spec-neuro"],
    },
    {
      id: "neuro-eeg",
      name: "EEG",
      description: "Elektroencefalografija — snimanje električne aktivnosti mozga.",
      duration: 30,
      price: 4000,
      specialtyId: "neurologija",
      providerIds: ["spec-neuro"],
      noProviderStep: true,
    },
    {
      id: "neuro-emng",
      name: "EMNG",
      description: "Elektroneuromiografija za dijagnostiku bolesti perifernih nerava i mišića.",
      duration: 40,
      price: 6000,
      specialtyId: "neurologija",
      providerIds: ["spec-neuro"],
    },
  ],

  providers: [
    { id: "spec-kardio", name: "Spec. kardiologije", title: "Kardiolog" },
    { id: "spec-interna", name: "Spec. interne medicine", title: "Internista" },
    { id: "spec-ped", name: "Spec. pedijatrije", title: "Pedijatar" },
    { id: "spec-neuro", name: "Spec. neurologije", title: "Neurolog" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Bojan V.",
      service: "Kardiološki pregled + EKG",
      text: "Kompletan kardio pregled za jedan dan, doktor sve jasno objasnio. Ozbiljan pristup.",
    },
    {
      name: "Jelena D.",
      service: "Pedijatrijski pregled",
      text: "Sin je pregledan pažljivo i bez žurbe, doktorka strpljiva sa decom. Zakazivanje online olakšava sve.",
    },
    {
      name: "Dejan L.",
      service: "Neurološki pregled",
      text: "Nalaz objašnjen detaljno, bez nagađanja. Termin zakazan za dva dana bez ijednog poziva.",
    },
  ],
  rating: { average: "4.9", count: 199 },
  gallery: medGallery({ icon: HeartPulse, label: "Dijagnostika za porodicu" }),
  trust: MEDICAL_TRUST,

  business: bgBiz(
    "+381 11 344 56 77",
    "kontakt@kardiomedika.rs",
    "Bulevar kralja Aleksandra 350",
    "Pon – Sub 08 – 20h",
    "Mo-Sa 08:00-20:00",
  ),
  seo: {
    title: "Kardio Medika — Zakažite pregled online · Beograd",
    description:
      "Kardiologija, interna medicina, pedijatrija i neurologija u Beogradu. Zakažite online.",
  },
};
