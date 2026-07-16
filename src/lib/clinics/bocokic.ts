/**
 * Bocokić — Beograd
 *
 * Generic providers only — no confirmed individual doctor names.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, bgBiz } from "@/lib/demo-types";
import { Droplets, ShieldCheck, Stethoscope, TestTube } from "lucide-react";

export const bocokic: DemoConfig = {
  slug: "bocokic",
  brand: "BOCOKIĆ",
  category: "Poliklinika · Beograd",
  name: "Poliklinika Bocokić",
  description:
    "Urologija, imunologija, interna medicina i laboratorija — precizna dijagnostika i diskretna nega, uz online zakazivanje.",
  theme: "medical",
  hero: {
    lead: "Precizna dijagnostika,",
    emphasis: "diskretna nega.",
    subtext:
      "Urologija, imunologija, interna medicina i laboratorija — izaberite specijalnost, lekara i termin online.",
    icon: Droplets,
    stats: medStats("6.100+", "18"),
  },

  specialties: [
    { id: "urologija", name: "Urologija", icon: Droplets, color: "oklch(0.55 0.12 220)" },
    { id: "imunologija", name: "Imunologija", icon: ShieldCheck, color: "oklch(0.58 0.11 195)" },
    { id: "interna", name: "Interna medicina", icon: Stethoscope, color: "oklch(0.58 0.09 175)" },
    { id: "laboratorija", name: "Laboratorija", icon: TestTube, color: "oklch(0.60 0.10 165)" },
  ],

  services: [
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
    {
      id: "uro-uroflow",
      name: "Uroflow",
      description: "Merenje protoka mokraće — bezbolno i brzo.",
      duration: 15,
      price: 2500,
      specialtyId: "urologija",
      providerIds: ["spec-uro"],
    },

    // ── Imunologija ──
    {
      id: "imuno-pregled",
      name: "Imunološki pregled",
      description: "Procena imunskog statusa uz stručan savet i plan dijagnostike.",
      duration: 30,
      price: 4500,
      specialtyId: "imunologija",
      providerIds: ["spec-imuno"],
    },
    {
      id: "imuno-alergo",
      name: "Alergološki testovi",
      description: "Kožni testovi za otkrivanje najčešćih alergena.",
      duration: 30,
      price: 4500,
      specialtyId: "imunologija",
      providerIds: ["spec-imuno"],
    },
    {
      id: "imuno-panel",
      name: "Imunološki panel iz krvi",
      description: "Laboratorijska analiza imunoglobulina i markera autoimunih bolesti.",
      duration: 10,
      price: 5500,
      specialtyId: "imunologija",
      providerIds: ["spec-imuno"],
      noProviderStep: true,
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
      id: "int-kontrola",
      name: "Kontrolni pregled",
      description: "Kontrola sa tumačenjem nalaza i korekcijom terapije.",
      duration: 20,
      price: 2800,
      specialtyId: "interna",
      providerIds: ["spec-interna"],
    },

    // ── Laboratorija ──
    {
      id: "lab-krvna",
      name: "Kompletna krvna slika",
      description: "Osnovni skrining opšteg stanja organizma.",
      duration: 10,
      price: 800,
      specialtyId: "laboratorija",
      noProviderStep: true,
    },
    {
      id: "lab-biohemija",
      name: "Biohemijske analize",
      description: "Šećer, holesterol, jetra, bubrezi i više.",
      duration: 10,
      price: 1500,
      specialtyId: "laboratorija",
      noProviderStep: true,
    },
    {
      id: "lab-urin",
      name: "Urin analiza",
      description: "Brza i precizna analiza urina.",
      duration: 5,
      price: 500,
      specialtyId: "laboratorija",
      noProviderStep: true,
    },
  ],

  providers: [
    { id: "spec-uro", name: "Spec. urologije", title: "Urolog" },
    { id: "spec-imuno", name: "Spec. imunologije", title: "Imunolog" },
    { id: "spec-interna", name: "Spec. interne medicine", title: "Internista" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Miloš Đ.",
      service: "Urološki pregled",
      text: "Zakazao pregled diskretno, bez ijednog poziva. Sve brzo i profesionalno.",
    },
    {
      name: "Snežana R.",
      service: "Alergološki testovi",
      text: "Konačno znam tačno na šta reagujem. Rezultati testova jasno objašnjeni.",
    },
    {
      name: "Petar V.",
      service: "Kompletna krvna slika",
      text: "Vađenje krvi zakazao za 7 ujutru, gotovo za pet minuta. Bez čekanja u redu.",
    },
  ],
  rating: { average: "4.8", count: 176 },
  gallery: medGallery({ icon: ShieldCheck, label: "Imunološka dijagnostika" }),
  trust: MEDICAL_TRUST,

  business: bgBiz(
    "+381 11 255 67 88",
    "kontakt@bocokic.rs",
    "Kneza Miloša 88",
    "Pon – Sub 08 – 20h",
    "Mo-Sa 08:00-20:00",
  ),
  seo: {
    title: "Poliklinika Bocokić — Zakažite pregled online · Beograd",
    description:
      "Urologija, imunologija, interna medicina i laboratorija u Beogradu. Izaberite specijalnost i termin — zakažite online.",
  },
};
