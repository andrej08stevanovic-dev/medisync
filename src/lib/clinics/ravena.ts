/**
 * Ravena — Beograd
 *
 * Generic providers only — no confirmed individual doctor names.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, bgBiz } from "@/lib/demo-types";
import { Activity, Bone, HeartPulse, Stethoscope, Wind } from "lucide-react";

export const ravena: DemoConfig = {
  slug: "ravena",
  brand: "RAVENA",
  category: "Poliklinika · Beograd",
  name: "Ravena",
  description:
    "Gastroenterologija, kardiologija, endokrinologija, pulmologija i reumatologija — pet specijalnosti pod jednim krovom, uz online zakazivanje.",
  theme: "medical",
  hero: {
    lead: "Pet specijalnosti,",
    emphasis: "jedna adresa.",
    subtext:
      "Gastroenterologija, kardiologija, endokrinologija, pulmologija i reumatologija — izaberite specijalnost i termin online.",
    icon: Stethoscope,
    stats: medStats("8.200+", "18"),
  },

  specialties: [
    { id: "gastroenterologija", name: "Gastroenterologija", icon: Stethoscope, color: "oklch(0.60 0.12 50)" },
    { id: "kardiologija", name: "Kardiologija", icon: HeartPulse, color: "oklch(0.60 0.15 25)" },
    { id: "endokrinologija", name: "Endokrinologija", icon: Activity, color: "oklch(0.70 0.12 95)" },
    { id: "pulmologija", name: "Pulmologija", icon: Wind, color: "oklch(0.55 0.12 195)" },
    { id: "reumatologija", name: "Reumatologija", icon: Bone, color: "oklch(0.60 0.10 60)" },
  ],

  services: [
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
      id: "gastro-kolonoskopija",
      name: "Kolonoskopija",
      description: "Endoskopski pregled debelog creva za dijagnostiku i prevenciju.",
      duration: 45,
      price: 15000,
      specialtyId: "gastroenterologija",
      providerIds: ["spec-gastro"],
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

    // ── Pulmologija ──
    {
      id: "pulmo-pregled",
      name: "Pulmološki pregled",
      description: "Specijalistički pregled respiratornog sistema sa dijagnostikom.",
      duration: 20,
      price: 4000,
      specialtyId: "pulmologija",
      providerIds: ["spec-pulmo"],
    },
    {
      id: "pulmo-spirometrija",
      name: "Spirometrija",
      description: "Merenje kapaciteta i funkcije pluća — brzo i bezbolno.",
      duration: 15,
      price: 2800,
      specialtyId: "pulmologija",
      providerIds: ["spec-pulmo"],
    },
    {
      id: "pulmo-ct",
      name: "CT pregled grudnog koša",
      description: "Kompjuterizovana tomografija za detaljnu dijagnostiku pluća.",
      duration: 20,
      price: 9500,
      specialtyId: "pulmologija",
      providerIds: ["spec-pulmo"],
      noProviderStep: true,
    },

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
  ],

  providers: [
    { id: "spec-gastro", name: "Spec. gastroenterologije", title: "Gastroenterolog" },
    { id: "spec-kardio", name: "Spec. kardiologije", title: "Kardiolog" },
    { id: "spec-endo", name: "Spec. endokrinologije", title: "Endokrinolog" },
    { id: "spec-pulmo", name: "Spec. pulmologije", title: "Pulmolog" },
    { id: "spec-reuma", name: "Spec. reumatologije", title: "Reumatolog" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Nemanja B.",
      service: "Gastroenterološki pregled",
      text: "Pregled i ultrazvuk abdomena u istoj poseti, zakazano online za dva dana. Efikasno.",
    },
    {
      name: "Ljiljana V.",
      service: "Kardiološki pregled + EKG",
      text: "Kardio pregled sa EKG-om gotov za pola sata, doktor strpljiv i temeljan. Preporučujem.",
    },
    {
      name: "Igor T.",
      service: "Spirometrija",
      text: "Spirometrija zakazana bez čekanja, rezultat odmah objašnjen. Sve pohvale.",
    },
  ],
  rating: { average: "4.8", count: 214 },
  gallery: medGallery({ icon: HeartPulse, label: "Pet specijalnosti" }),
  trust: MEDICAL_TRUST,

  business: bgBiz(
    "+381 11 355 67 88",
    "kontakt@ravena.rs",
    "Cara Dušana 5",
    "Pon – Sub 08 – 20h",
    "Mo-Sa 08:00-20:00",
  ),
  seo: {
    title: "Ravena — Zakažite pregled online · Beograd",
    description:
      "Gastroenterologija, kardiologija, endokrinologija, pulmologija i reumatologija u Beogradu. Zakažite online.",
  },
};
