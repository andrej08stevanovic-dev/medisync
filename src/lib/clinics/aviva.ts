/**
 * Aviva — Beograd
 *
 * Generic providers only — no confirmed individual doctor names.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, bgBiz } from "@/lib/demo-types";
import { Dna, HeartPulse, Ribbon } from "lucide-react";

export const aviva: DemoConfig = {
  slug: "aviva",
  brand: "AVIVA",
  category: "Klinika · Beograd",
  name: "Aviva",
  description:
    "Onkologija, kardiologija i gensko testiranje — rana detekcija i precizna prevencija, uz online zakazivanje.",
  theme: "medical",
  hero: {
    lead: "Rana detekcija,",
    emphasis: "precizna prevencija.",
    subtext:
      "Onkologija, kardiologija i gensko testiranje — izaberite specijalnost, lekara i termin online, bez čekanja na liniji.",
    icon: Ribbon,
    stats: medStats("5.300+", "11"),
  },

  specialties: [
    { id: "onkologija", name: "Onkologija", icon: Ribbon, color: "oklch(0.55 0.14 340)" },
    { id: "kardiologija", name: "Kardiologija", icon: HeartPulse, color: "oklch(0.60 0.15 25)" },
    { id: "gensko-testiranje", name: "Gensko testiranje", icon: Dna, color: "oklch(0.55 0.13 300)" },
  ],

  services: [
    // ── Onkologija ──
    {
      id: "onko-pregled",
      name: "Onkološki pregled",
      description: "Specijalistički pregled sa procenom rizika i planom praćenja.",
      duration: 30,
      price: 6000,
      specialtyId: "onkologija",
      providerIds: ["spec-onko"],
    },
    {
      id: "onko-markeri",
      name: "Tumor markeri",
      description: "Laboratorijski skrining tumorskih markera za ranu detekciju.",
      duration: 10,
      price: 3500,
      specialtyId: "onkologija",
      providerIds: ["spec-onko"],
      noProviderStep: true,
    },
    {
      id: "onko-kontrola",
      name: "Kontrolni onkološki pregled",
      description: "Praćenje toka lečenja i korekcija terapije.",
      duration: 20,
      price: 4500,
      specialtyId: "onkologija",
      providerIds: ["spec-onko"],
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
    {
      id: "kardio-holter",
      name: "Holter monitoring",
      description: "24-časovno praćenje srčanog ritma — postavljanje uređaja.",
      duration: 15,
      price: 3800,
      specialtyId: "kardiologija",
      providerIds: ["spec-kardio"],
    },

    // ── Gensko testiranje ──
    {
      id: "gen-onko-panel",
      name: "Gensko testiranje na nasledne karcinome",
      description: "Analiza gena povezanih sa naslednim rizikom od karcinoma dojke i jajnika.",
      duration: 20,
      price: 25000,
      specialtyId: "gensko-testiranje",
      providerIds: ["spec-genetika"],
      noProviderStep: true,
    },
    {
      id: "gen-kardio-panel",
      name: "Gensko testiranje na kardiovaskularni rizik",
      description: "Panel gena povezanih sa naslednim srčanim oboljenjima.",
      duration: 20,
      price: 22000,
      specialtyId: "gensko-testiranje",
      providerIds: ["spec-genetika"],
      noProviderStep: true,
    },
    {
      id: "gen-konsultacija",
      name: "Genetsko savetovanje",
      description: "Tumačenje rezultata testa i saveti za dalje praćenje sa genetičarem.",
      duration: 30,
      price: 6000,
      specialtyId: "gensko-testiranje",
      providerIds: ["spec-genetika"],
    },
  ],

  providers: [
    { id: "spec-onko", name: "Spec. onkologije", title: "Onkolog" },
    { id: "spec-kardio", name: "Spec. kardiologije", title: "Kardiolog" },
    { id: "spec-genetika", name: "Spec. medicinske genetike", title: "Genetičar" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Milena K.",
      service: "Gensko testiranje na nasledne karcinome",
      text: "Test i savetovanje zakazala online, rezultat i objašnjenje genetičara mi je vratilo mir.",
    },
    {
      name: "Dragoslav N.",
      service: "Kardiološki pregled + EKG",
      text: "Kompletan kardio pregled za jedan dan, doktor sve jasno objasnio. Ozbiljan pristup.",
    },
    {
      name: "Ana P.",
      service: "Onkološki pregled",
      text: "Kontrolni pregled zakazan bez čekanja, osoblje pažljivo i posvećeno. Hvala Avivi.",
    },
  ],
  rating: { average: "4.9", count: 138 },
  gallery: medGallery({ icon: Dna, label: "Genska dijagnostika" }),
  trust: MEDICAL_TRUST,

  business: bgBiz(
    "+381 11 288 90 11",
    "kontakt@aviva.rs",
    "Kneza Miloša 22",
    "Pon – Pet 08 – 20h, Sub 08 – 14h",
    "Mo-Fr 08:00-20:00, Sa 08:00-14:00",
  ),
  seo: {
    title: "Aviva — Zakažite pregled online · Beograd",
    description:
      "Onkologija, kardiologija i gensko testiranje u Beogradu. Izaberite specijalnost i termin — zakažite online.",
  },
};
