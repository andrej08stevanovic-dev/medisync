/**
 * Pedijatrijska Medica — Beograd
 *
 * Generic providers only — no confirmed individual doctor names.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, bgBiz } from "@/lib/demo-types";
import { Activity, Baby, Droplets, Smile, Wind } from "lucide-react";

export const pedijatrijska_medica: DemoConfig = {
  slug: "pedijatrijska-medica",
  brand: "PEDIJATRIJSKA MEDICA",
  category: "Poliklinika · Beograd",
  name: "Pedijatrijska Medica",
  description:
    "Pedijatrija, pulmologija/alergologija, endokrinologija, hematologija i psihologija — kompletna nega za razvoj deteta, uz online zakazivanje.",
  theme: "medical",
  hero: {
    lead: "Zdravlje deteta,",
    emphasis: "na jednom mestu.",
    subtext:
      "Pedijatrija, pulmologija/alergologija, endokrinologija, hematologija i psihologija — izaberite specijalnost i termin online.",
    icon: Baby,
    stats: medStats("7.800+", "13"),
  },

  specialties: [
    { id: "pedijatrija", name: "Pedijatrija", icon: Baby, color: "oklch(0.68 0.14 80)" },
    {
      id: "pulmologija-alergologija",
      name: "Pulmologija/alergologija",
      icon: Wind,
      color: "oklch(0.55 0.12 195)",
    },
    { id: "endokrinologija", name: "Endokrinologija", icon: Activity, color: "oklch(0.70 0.12 95)" },
    { id: "hematologija", name: "Hematologija", icon: Droplets, color: "oklch(0.55 0.13 15)" },
    { id: "psihologija", name: "Psihologija", icon: Smile, color: "oklch(0.62 0.12 320)" },
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

    // ── Pulmologija/alergologija ──
    {
      id: "pulmo-pregled",
      name: "Pulmološko-alergološki pregled",
      description: "Specijalistički pregled respiratornog sistema i procena alergija kod dece.",
      duration: 30,
      price: 4000,
      specialtyId: "pulmologija-alergologija",
      providerIds: ["spec-pulmo"],
    },
    {
      id: "pulmo-spirometrija",
      name: "Spirometrija kod dece",
      description: "Merenje kapaciteta i funkcije pluća — brzo i bezbolno.",
      duration: 15,
      price: 2800,
      specialtyId: "pulmologija-alergologija",
      providerIds: ["spec-pulmo"],
    },
    {
      id: "pulmo-alergo-testovi",
      name: "Alergološki testovi",
      description: "Kožni testovi za otkrivanje najčešćih dečjih alergena.",
      duration: 30,
      price: 4500,
      specialtyId: "pulmologija-alergologija",
      providerIds: ["spec-pulmo"],
    },

    // ── Endokrinologija ──
    {
      id: "endo-pregled",
      name: "Endokrinološki pregled",
      description: "Procena hormonskog statusa i rasta kod dece.",
      duration: 30,
      price: 4000,
      specialtyId: "endokrinologija",
      providerIds: ["spec-endo"],
    },
    {
      id: "endo-stitna",
      name: "Ultrazvuk štitne žlezde",
      description: "Precizan nalaz stanja štitne žlezde kod dece.",
      duration: 20,
      price: 3200,
      specialtyId: "endokrinologija",
      providerIds: ["spec-endo"],
    },
    {
      id: "endo-rast",
      name: "Konsultacija za poremećaje rasta",
      description: "Procena i praćenje rasta i razvoja deteta.",
      duration: 30,
      price: 3800,
      specialtyId: "endokrinologija",
      providerIds: ["spec-endo"],
    },

    // ── Hematologija ──
    {
      id: "hema-pregled",
      name: "Hematološki pregled",
      description: "Specijalistički pregled sa procenom krvne slike i planom terapije.",
      duration: 30,
      price: 4000,
      specialtyId: "hematologija",
      providerIds: ["spec-hema"],
    },
    {
      id: "hema-krvna-slika",
      name: "Kompletna krvna slika",
      description: "Osnovni skrining hematološkog statusa deteta.",
      duration: 10,
      price: 900,
      specialtyId: "hematologija",
      providerIds: ["spec-hema"],
      noProviderStep: true,
    },
    {
      id: "hema-anemija",
      name: "Konsultacija za anemiju",
      description: "Dijagnostika i plan terapije kod sumnje na anemiju.",
      duration: 20,
      price: 3500,
      specialtyId: "hematologija",
      providerIds: ["spec-hema"],
    },

    // ── Psihologija ──
    {
      id: "psiho-procena",
      name: "Psihološka procena deteta",
      description: "Procena emocionalnog i kognitivnog razvoja deteta.",
      duration: 50,
      price: 4500,
      specialtyId: "psihologija",
      providerIds: ["spec-psiholog"],
    },
    {
      id: "psiho-seansa",
      name: "Individualna terapijska seansa",
      description: "Redovna seansa prilagođena uzrastu i potrebama deteta.",
      duration: 50,
      price: 4500,
      specialtyId: "psihologija",
      providerIds: ["spec-psiholog"],
    },
  ],

  providers: [
    { id: "spec-ped", name: "Spec. pedijatrije", title: "Pedijatar" },
    { id: "spec-pulmo", name: "Spec. pulmologije/alergologije", title: "Pulmolog-alergolog" },
    { id: "spec-endo", name: "Spec. dečije endokrinologije", title: "Endokrinolog" },
    { id: "spec-hema", name: "Spec. dečije hematologije", title: "Hematolog" },
    { id: "spec-psiholog", name: "Dečji psiholog", title: "Psiholog" },
  ],
  providerLabel: "Izaberite stručnjaka",

  reviews: [
    {
      name: "Milena T.",
      service: "Pedijatrijski pregled",
      text: "Sistematski pregled zakazan online za dva dana, doktorka temeljna i strpljiva sa detetom.",
    },
    {
      name: "Aleksandar J.",
      service: "Alergološki testovi",
      text: "Konačno znamo tačno na šta je sin alergičan. Testiranje brzo, nalaz jasno objašnjen.",
    },
    {
      name: "Sandra M.",
      service: "Individualna terapijska seansa",
      text: "Ćerka rado ide na seanse, psihološkinja zna kako da priđe deci. Preporučujem svim roditeljima.",
    },
  ],
  rating: { average: "4.9", count: 218 },
  gallery: medGallery({ icon: Smile, label: "Razvoj deteta" }),
  trust: MEDICAL_TRUST,

  business: bgBiz(
    "+381 11 355 67 89",
    "kontakt@pedijatrijskamedica.rs",
    "Ustanička 125",
    "Pon – Sub 08 – 20h",
    "Mo-Sa 08:00-20:00",
  ),
  seo: {
    title: "Pedijatrijska Medica — Zakažite pregled online · Beograd",
    description:
      "Pedijatrija, pulmologija/alergologija, endokrinologija, hematologija i psihologija u Beogradu. Zakažite online.",
  },
};
