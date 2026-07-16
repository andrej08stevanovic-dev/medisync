/**
 * Mirabiliss — Beograd
 *
 * Generic providers only — no confirmed individual doctor names.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, bgBiz } from "@/lib/demo-types";
import { Flower2, Scissors, ShieldPlus, Wand2 } from "lucide-react";

export const mirabiliss: DemoConfig = {
  slug: "mirabiliss",
  brand: "MIRABILISS",
  category: "Poliklinika · Beograd",
  name: "Mirabiliss",
  description:
    "Ginekologija i akušerstvo, estetska i plastična hirurgija, opšta hirurgija i interna medicina — kompletna nega za ženu i porodicu, uz online zakazivanje.",
  theme: "medical",
  hero: {
    lead: "Vaše zdravlje",
    emphasis: "i lepota, na jednom mestu.",
    subtext:
      "Ginekologija, estetska hirurgija, opšta hirurgija i interna medicina — izaberite specijalnost, lekara i termin online.",
    icon: Flower2,
    stats: medStats("8.400+", "14"),
  },

  specialties: [
    { id: "ginekologija", name: "Ginekologija i akušerstvo", icon: Flower2, color: "oklch(0.65 0.14 350)" },
    {
      id: "estetska-hirurgija",
      name: "Estetska i plastična hirurgija",
      icon: Wand2,
      color: "oklch(0.60 0.12 330)",
    },
    { id: "opsta-hirurgija", name: "Opšta hirurgija", icon: Scissors, color: "oklch(0.55 0.13 15)" },
    { id: "interna", name: "Interna medicina", icon: ShieldPlus, color: "oklch(0.55 0.10 195)" },
  ],

  services: [
    // ── Ginekologija i akušerstvo ──
    {
      id: "gin-pregled",
      name: "Ginekološki pregled + ultrazvuk",
      description: "Kompletan pregled sa ultrazvučnom dijagnostikom karlice.",
      duration: 30,
      price: 4500,
      specialtyId: "ginekologija",
      providerIds: ["spec-gin"],
    },
    {
      id: "gin-trudnoca",
      name: "Konsultacija za trudnoću",
      description: "Praćenje i saveti u svakoj fazi trudnoće.",
      duration: 30,
      price: 4000,
      specialtyId: "ginekologija",
      providerIds: ["spec-gin"],
    },
    {
      id: "gin-papa",
      name: "Papa test",
      description: "Bezbolno uzimanje brisa za ranu prevenciju.",
      duration: 15,
      price: 2200,
      specialtyId: "ginekologija",
      providerIds: ["spec-gin"],
    },

    // ── Estetska i plastična hirurgija ──
    {
      id: "estet-konsultacija",
      name: "Konsultacija za estetsku hirurgiju",
      description: "Individualna procena i plan za estetsku intervenciju.",
      duration: 30,
      price: 5000,
      specialtyId: "estetska-hirurgija",
      providerIds: ["spec-estetska"],
    },
    {
      id: "estet-botoks",
      name: "Botoks tretman",
      description: "Korekcija mimičnih bora — precizno i prirodno.",
      duration: 30,
      price: 12000,
      specialtyId: "estetska-hirurgija",
      providerIds: ["spec-estetska"],
    },
    {
      id: "estet-fileri",
      name: "Dermalni fileri",
      description: "Vraćanje volumena i konture licu hijaluronskim filerima.",
      duration: 30,
      price: 18000,
      specialtyId: "estetska-hirurgija",
      providerIds: ["spec-estetska"],
    },

    // ── Opšta hirurgija ──
    {
      id: "hir-pregled",
      name: "Hirurški pregled",
      description: "Specijalistički pregled sa procenom stanja i planom lečenja.",
      duration: 20,
      price: 4000,
      specialtyId: "opsta-hirurgija",
      providerIds: ["spec-hirurgija"],
    },
    {
      id: "hir-ekscizija",
      name: "Ekscizija kožnih promena",
      description: "Hirurško uklanjanje mladeža, cisti i lipoma uz lokalnu anesteziju.",
      duration: 30,
      price: 8000,
      specialtyId: "opsta-hirurgija",
      providerIds: ["spec-hirurgija"],
    },
    {
      id: "hir-uzv",
      name: "Ultrazvuk mekih tkiva",
      description: "Pregled potkožnih promena pre eventualne intervencije.",
      duration: 20,
      price: 3500,
      specialtyId: "opsta-hirurgija",
      providerIds: ["spec-hirurgija"],
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
      name: "Predoperativna laboratorija",
      description: "Kompletan predoperativni panel analiza pre intervencije.",
      duration: 10,
      price: 3000,
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
  ],

  providers: [
    { id: "spec-gin", name: "Spec. ginekologije i akušerstva", title: "Ginekolog-akušer" },
    { id: "spec-estetska", name: "Spec. estetske hirurgije", title: "Plastični hirurg" },
    { id: "spec-hirurgija", name: "Spec. opšte hirurgije", title: "Hirurg" },
    { id: "spec-interna", name: "Spec. interne medicine", title: "Internista" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Jovana R.",
      service: "Ginekološki pregled + ultrazvuk",
      text: "Pratim trudnoću ovde od prvog dana — zakazivanje online mi je uštedelo bezbroj poziva.",
    },
    {
      name: "Aleksandra M.",
      service: "Botoks tretman",
      text: "Rezultat prirodan, doktorka strpljivo objasnila sve opcije pre tretmana. Vraćam se sigurno.",
    },
    {
      name: "Vladimir K.",
      service: "Ekscizija kožnih promena",
      text: "Mala intervencija zakazana za dva dana, sve gotovo za pola sata. Profesionalno osoblje.",
    },
  ],
  rating: { average: "4.9", count: 264 },
  gallery: medGallery({ icon: Wand2, label: "Estetska hirurgija" }),
  trust: MEDICAL_TRUST,

  business: bgBiz(
    "+381 11 244 56 77",
    "kontakt@mirabiliss.rs",
    "Vojislava Ilića 88",
    "Pon – Sub 08 – 20h",
    "Mo-Sa 08:00-20:00",
  ),
  seo: {
    title: "Mirabiliss — Zakažite pregled online · Beograd",
    description:
      "Ginekologija, estetska hirurgija, opšta hirurgija i interna medicina u Beogradu. Izaberite specijalnost i termin — zakažite online.",
  },
};
