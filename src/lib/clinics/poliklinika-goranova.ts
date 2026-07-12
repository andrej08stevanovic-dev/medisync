/**
 * Poliklinika Goranova — Vranje (+ Bujanovac, Preševo)
 *
 * Confirmed doctors (from their website):
 *   Dr Goran Petrović (ginekolog — osnivač), Dr Lidija Milošević,
 *   Dr Ilonka Čanadi Djelić, Dr Ivana Jevtić, Dr Jadran Janjić,
 *   Dr Nikola Pesić, Dr Ivan Miladinović, Dr Nenad Milenković
 *
 * Prices, durations, and service names copied verbatim from the source document.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, cityBiz } from "@/lib/demo-types";
import {
  Baby,
  Droplets,
  Flower2,
  ScanSearch,
  Sparkles,
  Stethoscope,
} from "lucide-react";

export const poliklinika_goranova: DemoConfig = {
  slug: "poliklinika-goranova",
  brand: "GORANOVA",
  category: "Poliklinika · Vranje",
  name: "Poliklinika Goranova",
  description:
    "Porodična poliklinika sa 25+ godina iskustva u Vranju — ginekologija, urologija, pedijatrija, radiologija i estetska medicina, uz online zakazivanje.",
  theme: "medical",
  hero: {
    lead: "U službi vašeg zdravlja",
    emphasis: "25+ godina.",
    subtext:
      "Ginekologija, urologija, pedijatrija, ultrazvučna dijagnostika i estetska medicina — izaberite specijalnost i zakažite termin online, bez čekanja.",
    icon: Stethoscope,
    stats: medStats("8.000+", "25"),
  },

  specialties: [
    { id: "ginekologija", name: "Ginekologija", icon: Flower2, color: "oklch(0.65 0.14 350)" },
    { id: "urologija", name: "Urologija", icon: Droplets, color: "oklch(0.55 0.12 220)" },
    { id: "pedijatrija", name: "Pedijatrija", icon: Baby, color: "oklch(0.70 0.14 90)" },
    { id: "radiologija", name: "Radiologija", icon: ScanSearch, color: "oklch(0.60 0.12 270)" },
    { id: "estetska", name: "Estetska i anti-aging medicina", icon: Sparkles, color: "oklch(0.65 0.13 25)" },
  ],

  services: [
    // ── Ginekologija ──
    {
      id: "gin-pregled",
      name: "Ginekološki pregled + ultrazvuk",
      description: "Kompletan ginekološki pregled sa ultrazvučnom dijagnostikom karlice.",
      duration: 30,
      price: 4000,
      specialtyId: "ginekologija",
      providerIds: ["goran", "ivana"],
    },
    {
      id: "gin-kolposkopija",
      name: "Kolposkopija",
      description: "Detaljan pregled grlića materice pod uvećanjem za ranu prevenciju.",
      duration: 20,
      price: 3000,
      specialtyId: "ginekologija",
      providerIds: ["goran", "ivana"],
    },
    {
      id: "gin-papa",
      name: "Papa test",
      description: "Bezbolno uzimanje brisa za skrining promena na grliću materice.",
      duration: 10,
      price: 1500,
      specialtyId: "ginekologija",
      providerIds: ["goran", "ivana"],
    },
    {
      id: "gin-trudnoca",
      name: "Praćenje trudnoće (kontrola + 4D ultrazvuk)",
      description: "Redovna kontrola trudnoće sa 4D ultrazvučnim pregledom bebe.",
      duration: 30,
      price: 5000,
      specialtyId: "ginekologija",
      providerIds: ["goran"],
    },
    {
      id: "gin-ctg",
      name: "CTG (kardiotokografija)",
      description: "Praćenje otkucaja srca bebe i kontrakcija materice u trudnoći.",
      duration: 30,
      price: 2000,
      specialtyId: "ginekologija",
      providerIds: ["goran", "ivana"],
    },

    // ── Urologija ──
    {
      id: "uro-pregled",
      name: "Urološki pregled",
      description: "Detaljan urološki pregled sa procenom stanja i planom terapije.",
      duration: 20,
      price: 4000,
      specialtyId: "urologija",
      providerIds: ["jadran", "nikola"],
    },
    {
      id: "uro-uzv",
      name: "Ultrazvuk urološki",
      description: "Ultrazvučni pregled bubrega, mokraćne bešike i prostate.",
      duration: 20,
      price: 3000,
      specialtyId: "urologija",
      providerIds: ["jadran", "nikola"],
    },
    {
      id: "uro-cistoskopija",
      name: "Cistoskopija",
      description: "Endoskopski pregled mokraćne bešike za preciznu dijagnostiku.",
      duration: 30,
      price: 7000,
      specialtyId: "urologija",
      providerIds: ["jadran"],
    },
    {
      id: "uro-prostata",
      name: "Pregled za probleme prostate",
      description: "Specijalizovani pregled sa procenom stanja prostate i planom lečenja.",
      duration: 20,
      price: 4500,
      specialtyId: "urologija",
      providerIds: ["jadran", "nikola"],
    },

    // ── Pedijatrija ──
    {
      id: "ped-pregled",
      name: "Pedijatrijski pregled",
      description: "Klinički pregled deteta uz savet i preporuke za roditelje.",
      duration: 20,
      price: 3000,
      specialtyId: "pedijatrija",
      providerIds: ["lidija", "nenad"],
    },
    {
      id: "ped-sistematski",
      name: "Sistematski pregled za decu",
      description: "Kompletan sistematski pregled za upis u vrtić ili školu.",
      duration: 30,
      price: 4000,
      specialtyId: "pedijatrija",
      providerIds: ["lidija", "nenad"],
    },
    {
      id: "ped-kukovi",
      name: "Ultrazvuk kukova bebe",
      description: "Rani skrining razvojnog poremećaja kuka kod odojčadi.",
      duration: 15,
      price: 2500,
      specialtyId: "pedijatrija",
      providerIds: ["lidija"],
    },
    {
      id: "ped-vakcinacija",
      name: "Vakcinacija (savetovanje + aplikacija)",
      description: "Konsultacija o vakcinalnom kalendaru i aplikacija vakcine.",
      duration: 15,
      price: 2000,
      specialtyId: "pedijatrija",
      providerIds: ["lidija", "nenad"],
    },

    // ── Radiologija ──
    {
      id: "rad-abdomen",
      name: "Ultrazvuk abdomena",
      description: "Ultrazvučni pregled trbušnih organa za sveobuhvatnu dijagnostiku.",
      duration: 20,
      price: 3000,
      specialtyId: "radiologija",
      providerIds: ["ivan"],
    },
    {
      id: "rad-stitna",
      name: "Ultrazvuk štitne žlezde",
      description: "Precizan ultrazvučni nalaz stanja štitne žlezde i okolnog tkiva.",
      duration: 15,
      price: 2500,
      specialtyId: "radiologija",
      providerIds: ["ivan"],
    },
    {
      id: "rad-dojke",
      name: "Ultrazvuk dojke",
      description: "Ultrazvučni pregled dojki za rani skrining i prevenciju.",
      duration: 20,
      price: 3000,
      specialtyId: "radiologija",
      providerIds: ["ivan"],
    },
    {
      id: "rad-doppler",
      name: "Color Doppler krvnih sudova",
      description: "Pregled protoka krvi u arterijama i venama pomoću Color Doppler-a.",
      duration: 20,
      price: 4000,
      specialtyId: "radiologija",
      providerIds: ["ivan"],
    },

    // ── Estetska i anti-aging medicina ──
    {
      id: "est-konsultacija",
      name: "Konsultacija za estetske tretmane",
      description: "Individualna procena i plan estetskih intervencija prilagođen vašim željama.",
      duration: 20,
      price: 2000,
      specialtyId: "estetska",
      providerIds: ["ilonka"],
    },
    {
      id: "est-botoks",
      name: "Botoks tretman (jedna zona)",
      description: "Redukcija mimičkih bora aplikacijom botulinum toksina u jednu zonu.",
      duration: 30,
      price: 15000,
      specialtyId: "estetska",
      providerIds: ["ilonka"],
    },
    {
      id: "est-fileri",
      name: "Hijaluronski fileri",
      description: "Popunjavanje bora i modelovanje volumena lica hijaluronskim filerima.",
      duration: 45,
      price: 25000,
      specialtyId: "estetska",
      providerIds: ["ilonka"],
    },
    {
      id: "est-mezo",
      name: "Mezoterapija lica",
      description: "Revitalizacija kože koktelom vitamina i antioksidanata za mlađi izgled.",
      duration: 30,
      price: 8000,
      specialtyId: "estetska",
      providerIds: ["ilonka"],
    },
    {
      id: "est-prp",
      name: "PRP tretman lica",
      description: "Regeneracija kože sopstvenom plazmom obogaćenom trombocitima.",
      duration: 45,
      price: 12000,
      specialtyId: "estetska",
      providerIds: ["ilonka"],
    },
  ],

  providers: [
    { id: "goran", name: "Dr Goran Petrović", title: "Spec. ginekologije" },
    { id: "lidija", name: "Dr Lidija Milošević", title: "Spec. pedijatrije" },
    { id: "ilonka", name: "Dr Ilonka Čanadi Djelić", title: "Spec. estetske medicine" },
    { id: "ivana", name: "Dr Ivana Jevtić", title: "Spec. ginekologije" },
    { id: "jadran", name: "Dr Jadran Janjić", title: "Spec. urologije" },
    { id: "nikola", name: "Dr Nikola Pesić", title: "Spec. urologije" },
    { id: "ivan", name: "Dr Ivan Miladinović", title: "Spec. radiologije" },
    { id: "nenad", name: "Dr Nenad Milenković", title: "Spec. pedijatrije" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Jelena M.",
      service: "Ginekološki pregled",
      text: "Kod Dr Petrovića se osećam sigurno od prvog dana trudnoće. Zakazivanje online mi je olakšalo život — ne moram da čekam na telefonu.",
    },
    {
      name: "Dragan K.",
      service: "Urološki pregled",
      text: "Brza dijagnostika, sve završeno u jednoj poseti. Zakazao termin veče pre, ujutru sam bio na redu bez čekanja.",
    },
    {
      name: "Milica P.",
      service: "Pedijatrijski pregled",
      text: "Sistematski za sina obavljen temeljno i brzo. Doktorka je strpljiva sa decom, a online zakazivanje je fantasticno.",
    },
  ],
  rating: { average: "4.8", count: 245 },
  gallery: medGallery({ icon: Stethoscope, label: "Pet specijalnosti" }),
  trust: MEDICAL_TRUST,

  business: cityBiz(
    "017/404-300",
    "info@goranova.rs",
    "Vranje",
    "17500",
    "Vranje",
    "Pon – Pet 8-20h, Sub 8-14h",
    "Mo-Fr 08:00-20:00, Sa 08:00-14:00",
  ),
  seo: {
    title: "Poliklinika Goranova — Zakažite pregled online · Vranje",
    description:
      "Ginekologija, urologija, pedijatrija, ultrazvučna dijagnostika i estetska medicina u Vranju. Izaberite specijalnost, lekara i termin — zakažite online.",
  },
};
