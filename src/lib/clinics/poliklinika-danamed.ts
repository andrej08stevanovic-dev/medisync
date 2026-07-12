/**
 * Poliklinika DANAMED — Niš
 *
 * Confirmed doctors (from their website / media):
 *   Mr dr Bratislav Pejić — specijalista urologije, zamenik direktora Klinike za urologiju UKC Niš
 *   Mr dr Tomislav Stamenić — specijalista urologije
 *   Dr Dubravka Panić — specijalista urologije
 *   Prof. Biljana Radovanović-Dinić — gastroenterohepatologija
 *   Prof. Milan Višnjić — hirurgija
 *   Remaining specialties use generic position titles.
 *
 * Prices, durations, and service names copied verbatim from the source document.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, cityBiz } from "@/lib/demo-types";
import {
  Activity,
  Brain,
  Droplets,
  Flower2,
  HeartHandshake,
  HeartPulse,
  Pipette,
  ScanSearch,
  Scissors,
  Stethoscope,
  TestTube,
  Wind,
} from "lucide-react";

export const poliklinika_danamed: DemoConfig = {
  slug: "poliklinika-danamed",
  brand: "DANAMED",
  category: "Poliklinika · Niš",
  name: "Poliklinika DANAMED",
  description:
    "Poverenje koje leči — 30 godina u službi vašeg zdravlja. Nova poliklinika sa spletom tradicije i modernog pristupa, bez čekanja.",
  theme: "medical",
  hero: {
    lead: "Poverenje koje leči —",
    emphasis: "30 godina.",
    subtext:
      "Urologija, ginekologija, kardiologija, gastroenterohepatologija i još 8 specijalnosti — zakažite pregled online bez čekanja.",
    icon: Stethoscope,
    stats: medStats("14.000+", "30"),
  },

  specialties: [
    { id: "urologija", name: "Urologija", icon: Droplets, color: "oklch(0.55 0.12 220)" },
    { id: "ginekologija", name: "Ginekologija", icon: Flower2, color: "oklch(0.65 0.14 350)" },
    { id: "kardiologija", name: "Kardiologija", icon: HeartPulse, color: "oklch(0.60 0.15 25)" },
    { id: "gastro", name: "Gastroenterohepatologija", icon: Stethoscope, color: "oklch(0.60 0.12 55)" },
    { id: "pulmologija", name: "Pulmologija", icon: Wind, color: "oklch(0.55 0.12 195)" },
    { id: "endokrinologija", name: "Endokrinologija", icon: Activity, color: "oklch(0.70 0.12 95)" },
    { id: "nefrologija", name: "Nefrologija", icon: Pipette, color: "oklch(0.55 0.12 180)" },
    { id: "hematologija", name: "Hematologija", icon: TestTube, color: "oklch(0.55 0.10 160)" },
    { id: "neurologija", name: "Neurologija", icon: Brain, color: "oklch(0.55 0.12 280)" },
    { id: "psihijatrija", name: "Psihijatrija", icon: HeartHandshake, color: "oklch(0.60 0.13 310)" },
    { id: "hirurgija", name: "Hirurgija", icon: Scissors, color: "oklch(0.55 0.13 15)" },
    { id: "radiologija", name: "Radiologija", icon: ScanSearch, color: "oklch(0.55 0.12 240)" },
  ],

  services: [
    // ── Urologija ──
    {
      id: "uro-pregled",
      name: "Urološki pregled",
      description: "Detaljan urološki pregled sa procenom stanja i planom terapije.",
      duration: 20,
      price: 4500,
      specialtyId: "urologija",
      providerIds: ["pejic", "stamenic", "panic"],
    },
    {
      id: "uro-uzv",
      name: "Ultrazvuk urološki",
      description: "Ultrazvučni pregled bubrega, mokraćne bešike i prostate.",
      duration: 20,
      price: 3500,
      specialtyId: "urologija",
      providerIds: ["pejic", "stamenic", "panic"],
    },
    {
      id: "uro-cistoskopija",
      name: "Cistoskopija",
      description: "Endoskopski pregled mokraćne bešike za preciznu dijagnostiku.",
      duration: 30,
      price: 8000,
      specialtyId: "urologija",
      providerIds: ["pejic", "stamenic"],
    },
    {
      id: "uro-uroflow",
      name: "Uroflow test",
      description: "Merenje protoka urina za dijagnostiku poremećaja mokrenja.",
      duration: 15,
      price: 2500,
      specialtyId: "urologija",
      providerIds: ["pejic", "stamenic", "panic"],
    },

    // ── Ginekologija ──
    {
      id: "gin-pregled",
      name: "Ginekološki pregled + ultrazvuk",
      description: "Kompletan ginekološki pregled sa ultrazvučnom dijagnostikom karlice.",
      duration: 30,
      price: 4500,
      specialtyId: "ginekologija",
    },
    {
      id: "gin-kolposkopija",
      name: "Kolposkopija",
      description: "Detaljan pregled grlića materice pod uvećanjem za ranu prevenciju.",
      duration: 20,
      price: 3500,
      specialtyId: "ginekologija",
    },
    {
      id: "gin-papa",
      name: "Papa test",
      description: "Bezbolno uzimanje brisa za skrining promena na grliću materice.",
      duration: 10,
      price: 2000,
      specialtyId: "ginekologija",
    },
    {
      id: "gin-dojke",
      name: "Ultrazvuk dojke",
      description: "Ultrazvučni pregled dojki za rani skrining i prevenciju.",
      duration: 20,
      price: 3500,
      specialtyId: "ginekologija",
    },

    // ── Kardiologija ──
    {
      id: "kardio-pregled",
      name: "Kardiološki pregled + EKG",
      description: "Klinički pregled sa EKG snimanjem i procenom kardiovaskularnog rizika.",
      duration: 30,
      price: 4500,
      specialtyId: "kardiologija",
    },
    {
      id: "kardio-uzv",
      name: "Ultrazvuk srca",
      description: "Ehokardiografija za detaljan uvid u rad i strukturu srca.",
      duration: 30,
      price: 5000,
      specialtyId: "kardiologija",
    },
    {
      id: "kardio-holter",
      name: "Holter EKG",
      description: "24-časovno praćenje srčanog ritma — postavljanje Holter uređaja.",
      duration: 15,
      price: 5500,
      specialtyId: "kardiologija",
    },

    // ── Gastroenterohepatologija ──
    {
      id: "gastro-pregled",
      name: "Gastroenterološki pregled",
      description: "Specijalistički pregled digestivnog trakta sa procenom i terapijskim planom.",
      duration: 20,
      price: 4500,
      specialtyId: "gastro",
      providerIds: ["radovanovic"],
    },
    {
      id: "gastro-uzv",
      name: "Ultrazvuk abdomena",
      description: "Ultrazvučni pregled trbušnih organa za sveobuhvatnu dijagnostiku.",
      duration: 20,
      price: 3500,
      specialtyId: "gastro",
      providerIds: ["radovanovic"],
    },
    {
      id: "gastro-gastroskopija",
      name: "Gastroskopija",
      description: "Endoskopski pregled jednjaka, želuca i dvanaestopalačnog creva.",
      duration: 30,
      price: 12000,
      specialtyId: "gastro",
      providerIds: ["radovanovic"],
    },
    {
      id: "gastro-kolonoskopija",
      name: "Kolonoskopija",
      description: "Endoskopski pregled debelog creva za dijagnostiku i prevenciju.",
      duration: 45,
      price: 15000,
      specialtyId: "gastro",
      providerIds: ["radovanovic"],
    },

    // ── Pulmologija ──
    {
      id: "pulmo-pregled",
      name: "Pulmološki pregled",
      description: "Specijalistički pregled respiratornog sistema sa dijagnostikom.",
      duration: 20,
      price: 4500,
      specialtyId: "pulmologija",
    },
    {
      id: "pulmo-spirometrija",
      name: "Spirometrija",
      description: "Merenje kapaciteta i funkcije pluća — brzo i bezbolno.",
      duration: 15,
      price: 3000,
      specialtyId: "pulmologija",
    },

    // ── Endokrinologija ──
    {
      id: "endo-pregled",
      name: "Endokrinološki pregled",
      description: "Procena hormonskog statusa i metabolizma sa planom terapije.",
      duration: 20,
      price: 4500,
      specialtyId: "endokrinologija",
    },
    {
      id: "endo-stitna",
      name: "Ultrazvuk štitne žlezde",
      description: "Precizan ultrazvučni nalaz stanja štitne žlezde i okolnog tkiva.",
      duration: 15,
      price: 3000,
      specialtyId: "endokrinologija",
    },

    // ── Nefrologija ──
    {
      id: "nefro-pregled",
      name: "Nefrološki pregled",
      description: "Specijalistički pregled bubrega i mokraćnih puteva sa dijagnostikom.",
      duration: 20,
      price: 4500,
      specialtyId: "nefrologija",
    },
    {
      id: "nefro-uzv",
      name: "Ultrazvuk bubrega",
      description: "Ultrazvučni pregled bubrega za rani skrining i procenu funkcije.",
      duration: 15,
      price: 3000,
      specialtyId: "nefrologija",
    },

    // ── Hematologija ──
    {
      id: "hemato-pregled",
      name: "Hematološki pregled",
      description: "Specijalistički pregled krvnog sistema sa dijagnostikom i terapijskim planom.",
      duration: 20,
      price: 4500,
      specialtyId: "hematologija",
    },
    {
      id: "hemato-tumacenje",
      name: "Tumačenje krvne slike",
      description: "Stručno tumačenje rezultata krvne slike sa preporukama za dalju dijagnostiku.",
      duration: 15,
      price: 2500,
      specialtyId: "hematologija",
    },

    // ── Neurologija ──
    {
      id: "neuro-pregled",
      name: "Neurološki pregled",
      description: "Specijalistički neurološki pregled sa evaluacijom nervnog sistema.",
      duration: 20,
      price: 4500,
      specialtyId: "neurologija",
    },
    {
      id: "neuro-eeg",
      name: "EEG",
      description: "Elektroencefalografija — snimanje električne aktivnosti mozga.",
      duration: 30,
      price: 4000,
      specialtyId: "neurologija",
      noProviderStep: true,
    },

    // ── Psihijatrija ──
    {
      id: "psih-pregled",
      name: "Psihijatrijski pregled",
      description: "Detaljan psihijatrijski pregled sa dijagnostikom i terapijskim planom.",
      duration: 30,
      price: 5000,
      specialtyId: "psihijatrija",
    },
    {
      id: "psih-psihoterapija",
      name: "Psihoterapija",
      description: "Individualna psihoterapijska seansa prilagođena vašim potrebama.",
      duration: 50,
      price: 5000,
      specialtyId: "psihijatrija",
    },

    // ── Hirurgija ──
    {
      id: "hir-pregled",
      name: "Hirurški pregled",
      description: "Specijalistički hirurški pregled sa procenom stanja i planom lečenja.",
      duration: 20,
      price: 4500,
      specialtyId: "hirurgija",
      providerIds: ["visnjic"],
    },
    {
      id: "hir-ekscizija",
      name: "Ekscizija manjih kožnih promena",
      description: "Hirurško uklanjanje manjih benignih kožnih promena uz lokalnu anesteziju.",
      duration: 20,
      price: 6000,
      specialtyId: "hirurgija",
      providerIds: ["visnjic"],
    },

    // ── Radiologija ──
    {
      id: "rad-abdomen",
      name: "Ultrazvuk abdomena",
      description: "Ultrazvučni pregled trbušnih organa za sveobuhvatnu dijagnostiku.",
      duration: 20,
      price: 3500,
      specialtyId: "radiologija",
      noProviderStep: true,
    },
    {
      id: "rad-stitna",
      name: "Ultrazvuk štitne žlezde",
      description: "Precizan ultrazvučni nalaz stanja štitne žlezde i okolnog tkiva.",
      duration: 15,
      price: 3000,
      specialtyId: "radiologija",
      noProviderStep: true,
    },
    {
      id: "rad-dojke",
      name: "Ultrazvuk dojke",
      description: "Ultrazvučni pregled dojki za rani skrining i prevenciju.",
      duration: 20,
      price: 3500,
      specialtyId: "radiologija",
      noProviderStep: true,
    },
  ],

  providers: [
    { id: "pejic", name: "Mr dr Bratislav Pejić", title: "Spec. urologije" },
    { id: "stamenic", name: "Mr dr Tomislav Stamenić", title: "Spec. urologije" },
    { id: "panic", name: "Dr Dubravka Panić", title: "Spec. urologije" },
    { id: "radovanovic", name: "Prof. Biljana Radovanović-Dinić", title: "Gastroenterohepatolog" },
    { id: "visnjic", name: "Prof. Milan Višnjić", title: "Hirurg" },
    { id: "spec-gin", name: "Spec. ginekologije", title: "Ginekolog" },
    { id: "spec-kardio", name: "Spec. kardiologije", title: "Kardiolog" },
    { id: "spec-pulmo", name: "Spec. pulmologije", title: "Pulmolog" },
    { id: "spec-endo", name: "Spec. endokrinologije", title: "Endokrinolog" },
    { id: "spec-nefro", name: "Spec. nefrologije", title: "Nefrolog" },
    { id: "spec-hemato", name: "Spec. hematologije", title: "Hematolog" },
    { id: "spec-neuro", name: "Spec. neurologije", title: "Neurolog" },
    { id: "spec-psih", name: "Spec. psihijatrije", title: "Psihijatar" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Dragan S.",
      service: "Urološki pregled",
      text: "Dr Pejić je autoritetan ali ljudski pristupačan. Zakazao sam pregled online za sutra ujutru — bez čekanja i bez stresa.",
    },
    {
      name: "Milena K.",
      service: "Gastroskopija",
      text: "Prof. Radovanović-Dinić je objasnila sve pre gastroskopije. Zakazivanje online mi uštedelo celo jutro telefoniranja.",
    },
    {
      name: "Aleksandar V.",
      service: "Hirurški pregled",
      text: "Prof. Višnjić je profesionalac od glave do pete. Nova poliklinika, stari kvalitet. Zakazivanje za 30 sekundi.",
    },
  ],
  rating: { average: "4.8", count: 302 },
  gallery: medGallery({ icon: Stethoscope, label: "12 specijalnosti" }),
  trust: MEDICAL_TRUST,

  business: cityBiz(
    "018/531-424",
    "info@danamed.rs",
    "Niš",
    "18000",
    "Niš",
    "Pon – Pet 07:30-20:30h",
    "Mo-Fr 07:30-20:30",
  ),
  seo: {
    title: "Poliklinika DANAMED — Zakažite pregled online · Niš",
    description:
      "Urologija, ginekologija, kardiologija i još 9 specijalnosti u Nišu. Poverenje koje leči — 30 godina. Zakažite termin online.",
  },
};
