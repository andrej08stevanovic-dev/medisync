/**
 * Rheuma Medica — Beograd
 *
 * Generic providers only — no confirmed individual doctor names.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, bgBiz } from "@/lib/demo-types";
import { Activity, Bone, HeartPulse, Stethoscope } from "lucide-react";

export const rheuma_medica: DemoConfig = {
  slug: "rheuma-medica",
  brand: "RHEUMA MEDICA",
  category: "Poliklinika · Beograd",
  name: "Rheuma Medica",
  description:
    "Reumatologija, kardiologija, endokrinologija i gastroenterologija — specijalizovana dijagnostika hroničnih oboljenja, uz online zakazivanje.",
  theme: "medical",
  hero: {
    lead: "Hronične tegobe,",
    emphasis: "pod kontrolom.",
    subtext:
      "Reumatologija, kardiologija, endokrinologija i gastroenterologija — izaberite specijalnost, lekara i termin online.",
    icon: Bone,
    stats: medStats("6.300+", "17"),
  },

  specialties: [
    { id: "reumatologija", name: "Reumatologija", icon: Bone, color: "oklch(0.60 0.10 60)" },
    { id: "kardiologija", name: "Kardiologija", icon: HeartPulse, color: "oklch(0.60 0.15 25)" },
    { id: "endokrinologija", name: "Endokrinologija", icon: Activity, color: "oklch(0.70 0.12 95)" },
    { id: "gastroenterologija", name: "Gastroenterologija", icon: Stethoscope, color: "oklch(0.60 0.12 50)" },
  ],

  services: [
    // ── Reumatologija ──
    {
      id: "reuma-pregled",
      name: "Reumatološki pregled",
      description: "Specijalistički pregled zglobova i vezivnog tkiva sa dijagnostikom.",
      duration: 30,
      price: 4500,
      specialtyId: "reumatologija",
      providerIds: ["spec-reuma"],
    },
    {
      id: "reuma-uzv",
      name: "Ultrazvuk zglobova",
      description: "Ultrazvučni pregled zglobova za procenu upale i oštećenja.",
      duration: 20,
      price: 3800,
      specialtyId: "reumatologija",
      providerIds: ["spec-reuma"],
    },
    {
      id: "reuma-infiltracija",
      name: "Intraartikularna infiltracija",
      description: "Ciljana injekcija u zglob za smanjenje bola i upale.",
      duration: 20,
      price: 5500,
      specialtyId: "reumatologija",
      providerIds: ["spec-reuma"],
    },

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
      id: "endo-hormoni",
      name: "Hormonski panel",
      description: "Analiza hormona štitne žlezde i metaboličkih markera.",
      duration: 10,
      price: 3500,
      specialtyId: "endokrinologija",
      providerIds: ["spec-endo"],
      noProviderStep: true,
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
      id: "gastro-fibroscan",
      name: "FibroScan (elastografija jetre)",
      description: "Neinvazivno merenje stepena fibroze jetre — brzo i bezbolno.",
      duration: 15,
      price: 6000,
      specialtyId: "gastroenterologija",
      providerIds: ["spec-gastro"],
    },
  ],

  providers: [
    { id: "spec-reuma", name: "Spec. reumatologije", title: "Reumatolog" },
    { id: "spec-kardio", name: "Spec. kardiologije", title: "Kardiolog" },
    { id: "spec-endo", name: "Spec. endokrinologije", title: "Endokrinolog" },
    { id: "spec-gastro", name: "Spec. gastroenterologije", title: "Gastroenterolog" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Verica N.",
      service: "Reumatološki pregled",
      text: "Konačno dijagnostikovan uzrok bola u zglobovima. Zakazivanje online mnogo brže od poziva.",
    },
    {
      name: "Miroslav D.",
      service: "Ultrazvuk štitne žlezde",
      text: "Kontrolni pregled štitne žlezde zakazan za dva klika. Nalaz jasno objašnjen.",
    },
    {
      name: "Sandra P.",
      service: "Gastroenterološki pregled",
      text: "Pregled i ultrazvuk abdomena u istoj poseti — praktično i brzo. Preporučujem.",
    },
  ],
  rating: { average: "4.9", count: 168 },
  gallery: medGallery({ icon: Bone, label: "Reumatološka dijagnostika" }),
  trust: MEDICAL_TRUST,

  business: bgBiz(
    "+381 11 333 45 66",
    "kontakt@rheumamedica.rs",
    "Ruzveltova 21",
    "Pon – Sub 08 – 20h",
    "Mo-Sa 08:00-20:00",
  ),
  seo: {
    title: "Rheuma Medica — Zakažite pregled online · Beograd",
    description:
      "Reumatologija, kardiologija, endokrinologija i gastroenterologija u Beogradu. Izaberite specijalnost i termin — zakažite online.",
  },
};
