/**
 * Poliklinika Dr Nikolić — Niš
 *
 * Confirmed doctors (from their website):
 *   Dr Predrag Nikolić — osnivač, specijalista interne medicine – kardiolog
 *   Dr Marko Nikolić — pedijatar (sin osnivača, vodi pedijatriju)
 *   Dr Svetlana Nikolić — dermatolog i lekar estetske medicine
 *   Remaining specialties use generic position titles.
 *
 * Prices, durations, and service names copied verbatim from the source document.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, cityBiz } from "@/lib/demo-types";
import {
  Activity,
  Baby,
  Bone,
  Brain,
  Droplets,
  HeartHandshake,
  HeartPulse,
  Home,
  ScanSearch,
  Scissors,
  Stethoscope,
  Wind,
} from "lucide-react";

export const poliklinika_nikolic: DemoConfig = {
  slug: "poliklinika-nikolic",
  brand: "DR NIKOLIĆ",
  category: "Poliklinika · Niš",
  name: "Poliklinika Dr Nikolić",
  description:
    "Porodična poliklinika — tri generacije pod jednim krovom. 30+ lekara, profesori Medicinskog fakulteta, uz online zakazivanje.",
  theme: "medical",
  hero: {
    lead: "Tri generacije",
    emphasis: "pod jednim krovom.",
    subtext:
      "Kardiologija, gastroenterologija, pedijatrija i još 9 specijalnosti — zakažite pregled online kod 30+ lekara sa tradicijom porodične medicine.",
    icon: HeartPulse,
    stats: medStats("12.000+", "30"),
  },

  specialties: [
    { id: "kardiologija", name: "Kardiologija", icon: HeartPulse, color: "oklch(0.60 0.15 25)" },
    { id: "gastro", name: "Gastroenterologija", icon: Stethoscope, color: "oklch(0.60 0.12 50)" },
    { id: "pulmologija", name: "Pulmologija", icon: Wind, color: "oklch(0.55 0.12 195)" },
    { id: "endokrinologija", name: "Endokrinologija", icon: Activity, color: "oklch(0.70 0.12 95)" },
    { id: "urologija", name: "Urologija", icon: Droplets, color: "oklch(0.55 0.12 220)" },
    { id: "reumatologija", name: "Reumatologija", icon: Bone, color: "oklch(0.60 0.10 60)" },
    { id: "neurologija", name: "Neurologija", icon: Brain, color: "oklch(0.55 0.12 280)" },
    { id: "psihijatrija", name: "Psihijatrija", icon: HeartHandshake, color: "oklch(0.60 0.13 310)" },
    { id: "pedijatrija", name: "Pedijatrija", icon: Baby, color: "oklch(0.68 0.14 80)" },
    { id: "hirurgija", name: "Hirurgija", icon: Scissors, color: "oklch(0.55 0.13 15)" },
    { id: "radiologija", name: "Radiologija", icon: ScanSearch, color: "oklch(0.55 0.12 240)" },
    { id: "kucno-lecenje", name: "Kućno lečenje", icon: Home, color: "oklch(0.65 0.12 155)" },
  ],

  services: [
    // ── Kardiologija ──
    {
      id: "kardio-pregled",
      name: "Kardiološki pregled + EKG",
      description: "Klinički pregled sa EKG snimanjem i procenom kardiovaskularnog rizika.",
      duration: 30,
      price: 5000,
      specialtyId: "kardiologija",
      providerIds: ["predrag"],
    },
    {
      id: "kardio-uzv",
      name: "Ultrazvuk srca sa Color Dopplerom",
      description: "Ehokardiografija sa Color Doppler-om za detaljan uvid u rad srca.",
      duration: 30,
      price: 5500,
      specialtyId: "kardiologija",
      providerIds: ["predrag"],
    },
    {
      id: "kardio-holter",
      name: "Holter EKG (24h)",
      description: "24-časovno praćenje srčanog ritma — postavljanje Holter uređaja.",
      duration: 15,
      price: 6000,
      specialtyId: "kardiologija",
      providerIds: ["predrag"],
    },
    {
      id: "kardio-treadmill",
      name: "Test fizičkim opterećenjem (Treadmill)",
      description: "Stres test na traci za procenu rada srca pri naporu.",
      duration: 40,
      price: 6500,
      specialtyId: "kardiologija",
      providerIds: ["predrag"],
    },
    {
      id: "kardio-holter-pritiska",
      name: "Holter pritiska (24h)",
      description: "24-časovno praćenje krvnog pritiska za dijagnostiku hipertenzije.",
      duration: 15,
      price: 4500,
      specialtyId: "kardiologija",
      providerIds: ["predrag"],
    },

    // ── Gastroenterologija ──
    {
      id: "gastro-pregled",
      name: "Gastroenterološki pregled",
      description: "Specijalistički pregled digestivnog trakta sa procenom i terapijskim planom.",
      duration: 20,
      price: 4500,
      specialtyId: "gastro",
    },
    {
      id: "gastro-gastroskopija",
      name: "Gastroskopija",
      description: "Endoskopski pregled jednjaka, želuca i dvanaestopalačnog creva.",
      duration: 30,
      price: 12000,
      specialtyId: "gastro",
    },
    {
      id: "gastro-kolonoskopija",
      name: "Kolonoskopija",
      description: "Endoskopski pregled debelog creva za dijagnostiku i prevenciju.",
      duration: 45,
      price: 15000,
      specialtyId: "gastro",
    },
    {
      id: "gastro-kolonoskopija-sedacija",
      name: "Kolonoskopija sa analgo-sedacijom",
      description: "Endoskopski pregled debelog creva u blagoj sedaciji — bez bola.",
      duration: 60,
      price: 20000,
      specialtyId: "gastro",
    },
    {
      id: "gastro-fibroscan",
      name: "FibroScan (elastografija jetre)",
      description: "Neinvazivno merenje stepena fibroze jetre — brzo i bezbolno.",
      duration: 15,
      price: 6000,
      specialtyId: "gastro",
    },
    {
      id: "gastro-rektoskopija",
      name: "Rektoskopija",
      description: "Endoskopski pregled završnog dela debelog creva za dijagnostiku.",
      duration: 20,
      price: 5000,
      specialtyId: "gastro",
    },
    {
      id: "gastro-polipektomija",
      name: "Polipektomija",
      description: "Endoskopsko uklanjanje polipa debelog creva tokom kolonoskopije.",
      duration: 45,
      price: 18000,
      specialtyId: "gastro",
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
    {
      id: "pulmo-spirometrija-bd",
      name: "Spirometrija sa bronhodilatatornim testom",
      description: "Spirometrija pre i posle bronhodilatatora za procenu reverzibilnosti opstrukcije.",
      duration: 20,
      price: 4000,
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
      price: 3500,
      specialtyId: "endokrinologija",
    },
    {
      id: "endo-hormoni",
      name: "Hormonski profil",
      description: "Kompletna hormonska analiza — štitna žlezda, polni hormoni, metabolički panel.",
      duration: 10,
      price: 5000,
      specialtyId: "endokrinologija",
      noProviderStep: true,
    },

    // ── Urologija ──
    {
      id: "uro-pregled",
      name: "Urološki pregled",
      description: "Detaljan urološki pregled sa procenom stanja i planom terapije.",
      duration: 20,
      price: 4500,
      specialtyId: "urologija",
    },
    {
      id: "uro-uzv",
      name: "Ultrazvuk urološki",
      description: "Ultrazvučni pregled bubrega, mokraćne bešike i prostate.",
      duration: 20,
      price: 3500,
      specialtyId: "urologija",
    },
    {
      id: "uro-cistoskopija",
      name: "Cistoskopija",
      description: "Endoskopski pregled mokraćne bešike za preciznu dijagnostiku.",
      duration: 30,
      price: 8000,
      specialtyId: "urologija",
    },
    {
      id: "uro-trus",
      name: "TRUS biopsija prostate",
      description: "Transrektalna ultrazvučno navođena biopsija prostate za dijagnostiku.",
      duration: 30,
      price: 15000,
      specialtyId: "urologija",
    },

    // ── Reumatologija ──
    {
      id: "reuma-pregled",
      name: "Reumatološki pregled",
      description: "Specijalistički pregled zglobova i vezivnog tkiva sa dijagnostikom.",
      duration: 20,
      price: 4500,
      specialtyId: "reumatologija",
    },
    {
      id: "reuma-uzv",
      name: "Ultrazvuk zglobova",
      description: "Ultrazvučni pregled zglobova za procenu upale i oštećenja.",
      duration: 20,
      price: 3500,
      specialtyId: "reumatologija",
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
    {
      id: "neuro-emng",
      name: "EMNG",
      description: "Elektroneuromiografija za dijagnostiku bolesti perifernih nerava i mišića.",
      duration: 40,
      price: 6000,
      specialtyId: "neurologija",
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
      id: "psih-kontrola",
      name: "Kontrolni pregled",
      description: "Kontrolni psihijatrijski pregled sa korekcijom terapije i praćenjem stanja.",
      duration: 20,
      price: 3500,
      specialtyId: "psihijatrija",
    },
    {
      id: "psih-psihoterapija",
      name: "Psihoterapijska seansa",
      description: "Individualna psihoterapijska seansa prilagođena vašim potrebama.",
      duration: 50,
      price: 5000,
      specialtyId: "psihijatrija",
    },

    // ── Pedijatrija ──
    {
      id: "ped-pregled",
      name: "Pedijatrijski pregled",
      description: "Klinički pregled deteta uz savet i preporuke za roditelje.",
      duration: 20,
      price: 3500,
      specialtyId: "pedijatrija",
      providerIds: ["marko"],
    },
    {
      id: "ped-subspec",
      name: "Subspecijalistički pedijatrijski pregled",
      description: "Subspecijalistički pregled dece — kardio, pulmo, gastro, neuro ili endokrinologija.",
      duration: 30,
      price: 4500,
      specialtyId: "pedijatrija",
      providerIds: ["marko"],
    },
    {
      id: "ped-uzv",
      name: "Dečji ultrazvuk",
      description: "Ultrazvučni pregled prilagođen dečjem uzrastu — brz i bezbolan.",
      duration: 15,
      price: 3000,
      specialtyId: "pedijatrija",
      providerIds: ["marko"],
    },

    // ── Hirurgija ──
    {
      id: "hir-pregled",
      name: "Hirurški pregled",
      description: "Specijalistički hirurški pregled sa procenom stanja i planom lečenja.",
      duration: 20,
      price: 4500,
      specialtyId: "hirurgija",
    },
    {
      id: "hir-vaskularni",
      name: "Pregled vaskularnog hirurga",
      description: "Procena stanja krvnih sudova sa planom dalje dijagnostike ili terapije.",
      duration: 20,
      price: 5000,
      specialtyId: "hirurgija",
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
      id: "rad-srce",
      name: "Ultrazvuk srca",
      description: "Ehokardiografija za detaljan uvid u rad i strukturu srca.",
      duration: 30,
      price: 5500,
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
    {
      id: "rad-stitna",
      name: "Ultrazvuk štitne žlezde",
      description: "Precizan ultrazvučni nalaz stanja štitne žlezde i okolnog tkiva.",
      duration: 15,
      price: 3500,
      specialtyId: "radiologija",
      noProviderStep: true,
    },
    {
      id: "rad-doppler",
      name: "Color Doppler krvnih sudova",
      description: "Pregled protoka krvi u arterijama i venama pomoću Color Doppler-a.",
      duration: 20,
      price: 5000,
      specialtyId: "radiologija",
      noProviderStep: true,
    },

    // ── Kućno lečenje ──
    {
      id: "kucno-opsta",
      name: "Kućna poseta lekara opšte prakse",
      description: "Lekar opšte prakse dolazi na vašu adresu — pregled, dijagnostika, recept.",
      duration: 30,
      price: 5000,
      specialtyId: "kucno-lecenje",
      noProviderStep: true,
    },
    {
      id: "kucno-spec",
      name: "Kućna poseta specijaliste",
      description: "Specijalista dolazi na vašu adresu za pregled i savet bez odlaska u kliniku.",
      duration: 30,
      price: 8000,
      specialtyId: "kucno-lecenje",
      noProviderStep: true,
    },
  ],

  providers: [
    { id: "predrag", name: "Dr Predrag Nikolić", title: "Internista — kardiolog, osnivač" },
    { id: "marko", name: "Dr Marko Nikolić", title: "Pedijatar" },
    { id: "svetlana", name: "Dr Svetlana Nikolić", title: "Dermatolog, estetska medicina" },
    { id: "spec-gastro", name: "Spec. gastroenterologije", title: "Gastroenterolog" },
    { id: "spec-pulmo", name: "Spec. pulmologije", title: "Pulmolog" },
    { id: "spec-endo", name: "Spec. endokrinologije", title: "Endokrinolog" },
    { id: "spec-uro", name: "Spec. urologije", title: "Urolog" },
    { id: "spec-reuma", name: "Spec. reumatologije", title: "Reumatolog" },
    { id: "spec-neuro", name: "Spec. neurologije", title: "Neurolog" },
    { id: "spec-psih", name: "Spec. psihijatrije", title: "Psihijatar" },
    { id: "spec-hir", name: "Spec. hirurgije", title: "Hirurg" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Vladimir P.",
      service: "Kardiološki pregled + EKG",
      text: "Dr Predrag Nikolić mi je spasio život — otkrio problem na rutinskom pregledu. Zakazao sam online, stigao na vreme, bez stresa.",
    },
    {
      name: "Jelena D.",
      service: "Pedijatrijski pregled",
      text: "Dr Marko je fenomenalan sa decom. Sin se više ne plaši lekara. Online zakazivanje olakšava život svakom roditelju.",
    },
    {
      name: "Nikola M.",
      service: "Kolonoskopija sa sedacijom",
      text: "Kolonoskopija u sedaciji — zaspao sam i probudio se kad je gotovo. Zakazao termin uveče sa telefona za sutradan.",
    },
  ],
  rating: { average: "4.9", count: 389 },
  gallery: medGallery({ icon: HeartPulse, label: "30+ lekara" }),
  trust: MEDICAL_TRUST,

  business: cityBiz(
    "018 4531 904",
    "info@drnikolic.rs",
    "Niš",
    "18000",
    "Niš",
    "Pon – Pet 8-20h, Sub 8-14h",
    "Mo-Fr 08:00-20:00, Sa 08:00-14:00",
  ),
  seo: {
    title: "Poliklinika Dr Nikolić — Zakažite pregled online · Niš",
    description:
      "Porodična poliklinika sa 30+ lekara u Nišu. Kardiologija, gastroenterologija, pedijatrija i još 9 specijalnosti — zakažite online.",
  },
};
