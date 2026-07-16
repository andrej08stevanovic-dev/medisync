/**
 * Kardio Medika — Beograd
 *
 * Generic providers only — no confirmed individual doctor names.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, bgBiz } from "@/lib/demo-types";
import { Activity, Droplets, HeartPulse, Stethoscope } from "lucide-react";

export const kardio_medika: DemoConfig = {
  slug: "kardio-medika",
  brand: "KARDIO MEDIKA",
  category: "Poliklinika · Beograd",
  name: "Kardio Medika",
  description:
    "Kardiologija, pedijatrijska nefrologija, endokrinologija i gastroenterologija — dijagnostika za celu porodicu, uz online zakazivanje.",
  theme: "medical",
  hero: {
    lead: "Srce i zdravlje,",
    emphasis: "za celu porodicu.",
    subtext:
      "Kardiologija, pedijatrijska nefrologija, endokrinologija i gastroenterologija — izaberite specijalnost i termin online.",
    icon: HeartPulse,
    stats: medStats("7.100+", "16"),
  },

  specialties: [
    { id: "kardiologija", name: "Kardiologija", icon: HeartPulse, color: "oklch(0.60 0.15 25)" },
    {
      id: "pedijatrijska-nefrologija",
      name: "Pedijatrijska nefrologija",
      icon: Droplets,
      color: "oklch(0.55 0.12 200)",
    },
    { id: "endokrinologija", name: "Endokrinologija", icon: Activity, color: "oklch(0.70 0.12 95)" },
    { id: "gastroenterologija", name: "Gastroenterologija", icon: Stethoscope, color: "oklch(0.60 0.12 50)" },
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

    // ── Pedijatrijska nefrologija ──
    {
      id: "pnefro-pregled",
      name: "Pedijatrijski nefrološki pregled",
      description: "Specijalistički pregled bubrežne funkcije kod dece.",
      duration: 30,
      price: 4200,
      specialtyId: "pedijatrijska-nefrologija",
      providerIds: ["spec-pnefro"],
    },
    {
      id: "pnefro-uzv",
      name: "Ultrazvuk bubrega kod dece",
      description: "Ultrazvučni pregled bubrega prilagođen dečjem uzrastu.",
      duration: 20,
      price: 3500,
      specialtyId: "pedijatrijska-nefrologija",
      providerIds: ["spec-pnefro"],
    },
    {
      id: "pnefro-urin",
      name: "Analiza urina kod dece",
      description: "Kompletna analiza urina za skrining bubrežnih poremećaja.",
      duration: 10,
      price: 800,
      specialtyId: "pedijatrijska-nefrologija",
      providerIds: ["spec-pnefro"],
      noProviderStep: true,
    },

    // ── Endokrinologija ──
    {
      id: "endo-pregled",
      name: "Endokrinološki pregled",
      description: "Procena hormonskog statusa i metabolizma.",
      duration: 30,
      price: 4000,
      specialtyId: "endokrinologija",
      providerIds: ["spec-endo"],
    },
    {
      id: "endo-stitna",
      name: "Ultrazvuk štitne žlezde",
      description: "Precizan nalaz stanja štitne žlezde.",
      duration: 20,
      price: 3200,
      specialtyId: "endokrinologija",
      providerIds: ["spec-endo"],
    },
    {
      id: "endo-dijabetes",
      name: "Konsultacija za dijabetes",
      description: "Plan ishrane i terapije za kontrolu šećera.",
      duration: 30,
      price: 3500,
      specialtyId: "endokrinologija",
      providerIds: ["spec-endo"],
    },

    // ── Gastroenterologija ──
    {
      id: "gastro-pregled",
      name: "Gastroenterološki pregled",
      description: "Specijalistički pregled digestivnog trakta sa procenom i terapijskim planom.",
      duration: 30,
      price: 4500,
      specialtyId: "gastroenterologija",
      providerIds: ["spec-gastro"],
    },
    {
      id: "gastro-uzv",
      name: "Ultrazvuk abdomena",
      description: "Ultrazvučni pregled trbušnih organa za sveobuhvatnu dijagnostiku.",
      duration: 20,
      price: 3500,
      specialtyId: "gastroenterologija",
      providerIds: ["spec-gastro"],
    },
    {
      id: "gastro-gastroskopija",
      name: "Gastroskopija",
      description: "Endoskopski pregled jednjaka, želuca i dvanaestopalačnog creva.",
      duration: 30,
      price: 12000,
      specialtyId: "gastroenterologija",
      providerIds: ["spec-gastro"],
    },
  ],

  providers: [
    { id: "spec-kardio", name: "Spec. kardiologije", title: "Kardiolog" },
    { id: "spec-pnefro", name: "Spec. pedijatrijske nefrologije", title: "Nefrolog" },
    { id: "spec-endo", name: "Spec. endokrinologije", title: "Endokrinolog" },
    { id: "spec-gastro", name: "Spec. gastroenterologije", title: "Gastroenterolog" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Bojan V.",
      service: "Kardiološki pregled + EKG",
      text: "Kompletan kardio pregled za jedan dan, doktor sve jasno objasnio. Ozbiljan pristup.",
    },
    {
      name: "Sanja M.",
      service: "Pedijatrijski nefrološki pregled",
      text: "Sinu pregledan bubreg brzo i pažljivo, nalaz odmah objašnjen. Preporučujem.",
    },
    {
      name: "Dejan L.",
      service: "Konsultacija za dijabetes",
      text: "Plan ishrane i terapije napravljen individualno, ne po šablonu. Vidljiv napredak.",
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
      "Kardiologija, pedijatrijska nefrologija, endokrinologija i gastroenterologija u Beogradu. Zakažite online.",
  },
};
