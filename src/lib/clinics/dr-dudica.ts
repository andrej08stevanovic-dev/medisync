/**
 * Dr Dudica Milenović — Beograd
 *
 * Dr Dudica Milenović — pedijatar (confirmed name).
 * ORL specijalista — generic position title, no confirmed individual name.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, bgBiz } from "@/lib/demo-types";
import { Baby, Ear } from "lucide-react";

export const dr_dudica: DemoConfig = {
  slug: "dr-dudica",
  brand: "DR DUDICA",
  category: "Ordinacija · Beograd",
  name: "Ordinacija Dr Dudica Milenović",
  description:
    "Pedijatrija i otorinolaringologija (ORL) za decu — pregledi, dijagnostika i saveti za roditelje, uz online zakazivanje.",
  theme: "medical",
  hero: {
    lead: "Pažljiva nega,",
    emphasis: "od malih nogu.",
    subtext:
      "Pedijatrija i ORL za decu na jednom mestu — izaberite specijalnost, lekara i termin online.",
    icon: Baby,
    stats: medStats("4.600+", "12"),
  },

  specialties: [
    { id: "pedijatrija", name: "Pedijatrija", icon: Baby, color: "oklch(0.68 0.14 80)" },
    { id: "orl", name: "Otorinolaringologija (ORL)", icon: Ear, color: "oklch(0.55 0.12 230)" },
  ],

  services: [
    // ── Pedijatrija ──
    {
      id: "ped-pregled",
      name: "Pedijatrijski pregled",
      description: "Klinički pregled deteta uz savet i preporuke za roditelje.",
      duration: 20,
      price: 3000,
      specialtyId: "pedijatrija",
      providerIds: ["dudica"],
    },
    {
      id: "ped-sistematski",
      name: "Sistematski pregled",
      description: "Kompletan sistematski pregled za upis u vrtić ili školu.",
      duration: 30,
      price: 4000,
      specialtyId: "pedijatrija",
      providerIds: ["dudica"],
    },
    {
      id: "ped-vakcinacija",
      name: "Vakcinacija",
      description: "Imunizacija po preporučenom kalendaru za decu.",
      duration: 15,
      price: 2200,
      specialtyId: "pedijatrija",
      providerIds: ["dudica"],
      noProviderStep: true,
    },

    // ── ORL ──
    {
      id: "orl-pregled",
      name: "ORL pregled kod dece",
      description: "Pregled uva, grla i nosa prilagođen dečjem uzrastu.",
      duration: 20,
      price: 3200,
      specialtyId: "orl",
      providerIds: ["spec-orl"],
    },
    {
      id: "orl-audio",
      name: "Audiometrija kod dece",
      description: "Test sluha prilagođen deci — precizno merenje po frekvencijama.",
      duration: 20,
      price: 2800,
      specialtyId: "orl",
      providerIds: ["spec-orl"],
    },
    {
      id: "orl-endo",
      name: "Endoskopija nosa i grla",
      description: "Endoskopski pregled nosa, grla i sinusa kod dece.",
      duration: 20,
      price: 3800,
      specialtyId: "orl",
      providerIds: ["spec-orl"],
    },
  ],

  providers: [
    { id: "dudica", name: "Dr Dudica Milenović", title: "Pedijatar" },
    { id: "spec-orl", name: "Spec. otorinolaringologije", title: "ORL specijalista" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Milica S.",
      service: "Pedijatrijski pregled",
      text: "Doktorka Dudica ima beskrajno strpljenja sa decom, ćerka se više ne plaši pregleda. Zakazivanje online je odlično.",
    },
    {
      name: "Nenad P.",
      service: "ORL pregled kod dece",
      text: "Sin je imao problem sa uvom, pregledan i lečen isti dan. Brzo i profesionalno.",
    },
    {
      name: "Tijana K.",
      service: "Sistematski pregled",
      text: "Sistematski za vrtić zakazan za dva dana, bez čekanja u redu. Preporučujem svim roditeljima.",
    },
  ],
  rating: { average: "4.9", count: 142 },
  gallery: medGallery({ icon: Ear, label: "ORL dijagnostika" }),
  trust: MEDICAL_TRUST,

  business: bgBiz(
    "+381 11 288 45 12",
    "ordinacija@drdudica.rs",
    "Bulevar kralja Aleksandra 210",
    "Pon – Pet 08 – 18h",
    "Mo-Fr 08:00-18:00",
  ),
  seo: {
    title: "Dr Dudica Milenović — Zakažite pregled online · Beograd",
    description:
      "Pedijatrija i ORL za decu u Beogradu. Izaberite specijalnost, lekara i termin — zakažite online.",
  },
};
