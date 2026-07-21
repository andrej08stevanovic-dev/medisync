/**
 * Poliklinika Dr Nikolić V2 — Niš
 *
 * Clone of poliklinika-nikolic with corrected specialties (Kardiologija,
 * Gastroenterologija, Pulmologija, Neurologija, Pedijatrija, Urologija) —
 * original left unchanged.
 *
 * Confirmed doctors (from their website):
 *   Dr Predrag Nikolić — osnivač, specijalista interne medicine – kardiolog
 *   Dr Marko Nikolić — pedijatar (sin osnivača, vodi pedijatriju)
 *   Remaining specialties use generic position titles.
 *
 * Prices, durations, and service names copied verbatim from the source document.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, cityBiz } from "@/lib/demo-types";
import { Baby, Brain, Droplets, HeartPulse, Stethoscope, Wind } from "lucide-react";

export const poliklinika_nikolic_v2: DemoConfig = {
  slug: "poliklinika-nikolic-v2",
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
      "Kardiologija, gastroenterologija, pedijatrija i još 3 specijalnosti — zakažite pregled online kod 30+ lekara sa tradicijom porodične medicine.",
    icon: HeartPulse,
    stats: medStats("12.000+", "30"),
  },

  specialties: [
    { id: "kardiologija", name: "Kardiologija", icon: HeartPulse, color: "oklch(0.60 0.15 25)" },
    { id: "gastro", name: "Gastroenterologija", icon: Stethoscope, color: "oklch(0.60 0.12 50)" },
    { id: "pulmologija", name: "Pulmologija", icon: Wind, color: "oklch(0.55 0.12 195)" },
    { id: "neurologija", name: "Neurologija", icon: Brain, color: "oklch(0.55 0.12 280)" },
    { id: "pedijatrija", name: "Pedijatrija", icon: Baby, color: "oklch(0.68 0.14 80)" },
    { id: "urologija", name: "Urologija", icon: Droplets, color: "oklch(0.55 0.12 220)" },
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
  ],

  providers: [
    { id: "predrag", name: "Dr Predrag Nikolić", title: "Internista — kardiolog, osnivač" },
    { id: "marko", name: "Dr Marko Nikolić", title: "Pedijatar" },
    { id: "spec-gastro", name: "Spec. gastroenterologije", title: "Gastroenterolog" },
    { id: "spec-pulmo", name: "Spec. pulmologije", title: "Pulmolog" },
    { id: "spec-neuro", name: "Spec. neurologije", title: "Neurolog" },
    { id: "spec-uro", name: "Spec. urologije", title: "Urolog" },
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
      "Porodična poliklinika sa 30+ lekara u Nišu. Kardiologija, gastroenterologija, pulmologija, neurologija, pedijatrija i urologija — zakažite online.",
  },
};
