/**
 * Poliklinika HUMAN — Niš + Vranje (8 lokacija u 4 grada)
 *
 * No confirmed individual doctor names (their website does not display
 * individual doctors publicly). All providers use generic position titles.
 *
 * Prices, durations, and service names copied verbatim from the source document.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, cityBiz } from "@/lib/demo-types";
import {
  Activity,
  Baby,
  Droplets,
  HeartPulse,
  MapPin,
  Ribbon,
  ScanSearch,
  Scissors,
  ShieldPlus,
  Stethoscope,
  TestTube,
} from "lucide-react";

export const poliklinika_human: DemoConfig = {
  slug: "poliklinika-human",
  brand: "HUMAN",
  category: "Poliklinika · Niš",
  name: "Poliklinika HUMAN",
  description:
    "Najveća poliklinička mreža u regionu — 8 lokacija u 4 grada, 10 specijalnosti pod jednim krovom, sa online zakazivanjem. Brinemo o vašem zdravlju 20+ godina.",
  theme: "medical",
  hero: {
    lead: "Brinemo o vašem zdravlju",
    emphasis: "20+ godina.",
    subtext:
      "Laboratorija, hirurgija, kardiologija, urologija i još 6 specijalnosti — izaberite uslugu i zakažite termin online u najvećoj polikliničkoj mreži na jugu.",
    icon: Stethoscope,
    stats: medStats("20.000+", "20"),
  },

  // 8 lokacija u 4 grada. Specijalnosti bez `locationIds` su dostupne na svim
  // lokacijama (npr. laboratorija, interna, pedijatrija) — specijalizovane
  // usluge (hirurgija, gastro, radiologija, dojke...) samo tamo gde ima opreme.
  locations: [
    {
      id: "nis-centar",
      name: "Niš — Centar",
      icon: MapPin,
      color: "oklch(0.58 0.13 260)",
      phone: "018 302 001",
      address: "Vožda Karađorđa 15, 18000 Niš",
    },
    {
      id: "nis-medijana",
      name: "Niš — Medijana",
      icon: MapPin,
      color: "oklch(0.62 0.12 200)",
      phone: "018 302 002",
      address: "Bulevar Nemanjića 78, 18000 Niš",
    },
    {
      id: "nis-pantelej",
      name: "Niš — Pantelej",
      icon: MapPin,
      color: "oklch(0.60 0.11 140)",
      phone: "018 302 003",
      address: "Knjaževačka 32, 18105 Niš",
    },
    {
      id: "nis-crveni-krst",
      name: "Niš — Crveni Krst",
      icon: MapPin,
      color: "oklch(0.65 0.10 100)",
      phone: "018 302 004",
      address: "Save Kovačevića 5, 18202 Niš",
    },
    {
      id: "vranje-centar",
      name: "Vranje — Centar",
      icon: MapPin,
      color: "oklch(0.55 0.14 30)",
      phone: "017 421 100",
      address: "Karađorđeva 10, 17500 Vranje",
    },
    {
      id: "vranje-bulevar",
      name: "Vranje — Bulevar",
      icon: MapPin,
      color: "oklch(0.60 0.12 60)",
      phone: "017 421 200",
      address: "Bulevar Radomira Putnika 22, 17500 Vranje",
    },
    {
      id: "prokuplje",
      name: "Prokuplje",
      icon: MapPin,
      color: "oklch(0.58 0.11 320)",
      phone: "027 321 300",
      address: "Toplička 8, 18400 Prokuplje",
    },
    {
      id: "aleksinac",
      name: "Aleksinac",
      icon: MapPin,
      color: "oklch(0.62 0.10 170)",
      phone: "018 804 400",
      address: "Knjaza Miloša 14, 18220 Aleksinac",
    },
  ],

  specialties: [
    { id: "laboratorija", name: "Laboratorija", icon: TestTube, color: "oklch(0.60 0.10 180)" },
    {
      id: "hirurgija",
      name: "Hirurgija",
      icon: Scissors,
      color: "oklch(0.55 0.13 15)",
      locationIds: ["nis-centar", "vranje-centar"],
    },
    {
      id: "gastro",
      name: "Gastroenterologija",
      icon: Stethoscope,
      color: "oklch(0.60 0.12 50)",
      locationIds: ["nis-centar"],
    },
    {
      id: "urologija",
      name: "Urologija",
      icon: Droplets,
      color: "oklch(0.55 0.12 220)",
      locationIds: ["nis-centar", "nis-medijana", "vranje-centar"],
    },
    {
      id: "kardiologija",
      name: "Kardiologija",
      icon: HeartPulse,
      color: "oklch(0.60 0.15 25)",
      locationIds: ["nis-centar", "nis-medijana", "prokuplje", "vranje-centar"],
    },
    {
      id: "endokrinologija",
      name: "Endokrinologija",
      icon: Activity,
      color: "oklch(0.70 0.12 95)",
      locationIds: ["nis-centar", "vranje-centar", "aleksinac"],
    },
    { id: "pedijatrija", name: "Pedijatrija", icon: Baby, color: "oklch(0.68 0.14 75)" },
    {
      id: "radiologija",
      name: "Radiologija",
      icon: ScanSearch,
      color: "oklch(0.55 0.12 280)",
      locationIds: ["nis-centar", "vranje-centar"],
    },
    { id: "interna", name: "Interna medicina", icon: ShieldPlus, color: "oklch(0.55 0.10 195)" },
    {
      id: "dojke",
      name: "Kabinet za bolesti dojke",
      icon: Ribbon,
      color: "oklch(0.65 0.14 340)",
      locationIds: ["nis-centar"],
    },
  ],

  services: [
    // ── Laboratorija ──
    {
      id: "lab-krvna",
      name: "Kompletna krvna slika",
      description: "Osnovni skrining opšteg stanja organizma iz kapi krvi.",
      duration: 10,
      price: 550,
      specialtyId: "laboratorija",
      noProviderStep: true,
    },
    {
      id: "lab-biohemija",
      name: "Biohemijske analize (šećer, holesterol, jetra, bubrezi)",
      description: "Kompletan biohemijski panel za evaluaciju metabolizma i funkcije organa.",
      duration: 10,
      price: 1500,
      specialtyId: "laboratorija",
      noProviderStep: true,
    },
    {
      id: "lab-urinokultura",
      name: "Urinokultura",
      description: "Mikrobiološka analiza urina za otkrivanje urinarnih infekcija.",
      duration: 5,
      price: 660,
      specialtyId: "laboratorija",
      noProviderStep: true,
    },
    {
      id: "lab-hormoni",
      name: "Hormonski panel (štitna žlezda, polni hormoni)",
      description: "Analiza hormona štitne žlezde i polnih hormona za procenu hormonskog statusa.",
      duration: 10,
      price: 2500,
      specialtyId: "laboratorija",
      noProviderStep: true,
    },
    {
      id: "lab-urin",
      name: "Celokupni pregled urina",
      description: "Kompletna analiza urina za skrining bubrežnih i metaboličkih oboljenja.",
      duration: 5,
      price: 420,
      specialtyId: "laboratorija",
      noProviderStep: true,
    },
    {
      id: "lab-tumor",
      name: "Tumor markeri",
      description: "Skrining tumorskih markera za ranu detekciju malignih oboljenja.",
      duration: 10,
      price: 1800,
      specialtyId: "laboratorija",
      noProviderStep: true,
    },
    {
      id: "lab-bris",
      name: "Bris grla/nosa (mikrobiologija)",
      description: "Uzorkovanje brisa za mikrobiološku analizu i otkrivanje infekcija.",
      duration: 5,
      price: 800,
      specialtyId: "laboratorija",
      noProviderStep: true,
    },

    // ── Hirurgija ──
    {
      id: "hir-pregled",
      name: "Hirurški pregled",
      description: "Specijalistički hirurški pregled sa procenom stanja i planom lečenja.",
      duration: 20,
      price: 4000,
      specialtyId: "hirurgija",
    },
    {
      id: "hir-ekscizija",
      name: "Ekscizija kožnih promena (mladeži, ciste, lipomi)",
      description: "Hirurško uklanjanje benignih kožnih promena uz lokalnu anesteziju.",
      duration: 30,
      price: 8000,
      specialtyId: "hirurgija",
    },
    {
      id: "hir-prokto",
      name: "Proktološki pregled",
      description: "Specijalistički pregled rektuma i analne regije sa dijagnostikom.",
      duration: 20,
      price: 5000,
      specialtyId: "hirurgija",
    },
    {
      id: "hir-vaskularni",
      name: "Pregled vaskularnog hirurga + Color Doppler",
      description: "Procena stanja krvnih sudova sa Color Doppler ultrazvukom.",
      duration: 30,
      price: 6000,
      specialtyId: "hirurgija",
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
      id: "gastro-uzv",
      name: "Ultrazvuk abdomena",
      description: "Ultrazvučni pregled trbušnih organa za sveobuhvatnu dijagnostiku.",
      duration: 20,
      price: 3500,
      specialtyId: "gastro",
    },

    // ── Urologija ──
    {
      id: "uro-pregled",
      name: "Urološki pregled",
      description: "Detaljan urološki pregled sa procenom stanja i planom terapije.",
      duration: 20,
      price: 4000,
      specialtyId: "urologija",
    },
    {
      id: "uro-uzv",
      name: "Ultrazvuk urološki (bubrezi, mokraćna bešika, prostata)",
      description: "Ultrazvučni pregled uroloških organa za preciznu dijagnostiku.",
      duration: 20,
      price: 3500,
      specialtyId: "urologija",
    },
    {
      id: "uro-psa",
      name: "PSA test (laboratorija)",
      description: "Krvni test za skrining prostate — brz i bezbolan.",
      duration: 10,
      price: 1200,
      specialtyId: "urologija",
      noProviderStep: true,
    },
    {
      id: "uro-uroflow",
      name: "Uroflow test",
      description: "Merenje protoka urina za dijagnostiku poremećaja mokrenja.",
      duration: 15,
      price: 2500,
      specialtyId: "urologija",
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
      name: "Ultrazvuk srca (ehokardiografija)",
      description: "Ehokardiografija za detaljan uvid u rad i strukturu srca.",
      duration: 30,
      price: 5000,
      specialtyId: "kardiologija",
    },
    {
      id: "kardio-doppler",
      name: "Color Doppler krvnih sudova vrata",
      description: "Pregled protoka krvi u karotidnim arterijama pomoću Color Doppler-a.",
      duration: 20,
      price: 4500,
      specialtyId: "kardiologija",
    },
    {
      id: "kardio-holter",
      name: "Holter EKG (24h monitoring)",
      description: "24-časovno praćenje srčanog ritma — postavljanje Holter uređaja.",
      duration: 15,
      price: 5500,
      specialtyId: "kardiologija",
    },

    // ── Endokrinologija ──
    {
      id: "endo-pregled",
      name: "Endokrinološki pregled",
      description: "Procena hormonskog statusa i metabolizma sa planom terapije.",
      duration: 20,
      price: 4000,
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
    {
      id: "endo-hormoni",
      name: "Hormonski panel (komplet)",
      description: "Kompletna hormonska analiza — štitna žlezda, nadbubreg, polni hormoni.",
      duration: 10,
      price: 4500,
      specialtyId: "endokrinologija",
      noProviderStep: true,
    },

    // ── Pedijatrija ──
    {
      id: "ped-pregled",
      name: "Pedijatrijski pregled",
      description: "Klinički pregled deteta uz savet i preporuke za roditelje.",
      duration: 20,
      price: 3500,
      specialtyId: "pedijatrija",
    },
    {
      id: "ped-sistematski",
      name: "Sistematski pregled za decu",
      description: "Kompletan sistematski pregled za upis u vrtić ili školu.",
      duration: 30,
      price: 4500,
      specialtyId: "pedijatrija",
    },
    {
      id: "ped-kukovi",
      name: "Ultrazvuk kukova bebe",
      description: "Rani skrining razvojnog poremećaja kuka kod odojčadi.",
      duration: 15,
      price: 3000,
      specialtyId: "pedijatrija",
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
      id: "rad-doppler",
      name: "Color Doppler krvnih sudova",
      description: "Pregled protoka krvi u arterijama i venama pomoću Color Doppler-a.",
      duration: 20,
      price: 4500,
      specialtyId: "radiologija",
      noProviderStep: true,
    },
    {
      id: "rad-dojke-abvs",
      name: "Ultrazvuk dojke + ABVS 3D",
      description: "Ultrazvučni pregled dojki sa ABVS 3D tehnologijom za sveobuhvatni skrining.",
      duration: 30,
      price: 5000,
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

    // ── Interna medicina ──
    {
      id: "int-pregled",
      name: "Internistički pregled",
      description: "Sveobuhvatni internistički pregled sa evaluacijom opšteg zdravstvenog stanja.",
      duration: 20,
      price: 4000,
      specialtyId: "interna",
    },
    {
      id: "int-sistematski",
      name: "Kompletni sistematski pregled",
      description:
        "Komprehenzivni sistematski pregled sa svim neophodnim analizama i dijagnostikom.",
      duration: 60,
      price: 12000,
      specialtyId: "interna",
    },

    // ── Kabinet za bolesti dojke ──
    {
      id: "dojke-pregled",
      name: "Pregled dojki + ultrazvuk",
      description: "Klinički pregled dojki sa ultrazvučnom dijagnostikom za rani skrining.",
      duration: 30,
      price: 4500,
      specialtyId: "dojke",
    },
    {
      id: "dojke-abvs",
      name: "ABVS 3D skener dojki",
      description: "Automatizovani 3D ultrazvuk dojki za sveobuhvatnu analizu tkiva.",
      duration: 30,
      price: 6000,
      specialtyId: "dojke",
      noProviderStep: true,
    },
  ],

  providers: [
    { id: "spec-hirurgije", name: "Spec. hirurgije", title: "Hirurg" },
    { id: "spec-gastro", name: "Spec. gastroenterologije", title: "Gastroenterolog" },
    { id: "spec-uro", name: "Spec. urologije", title: "Urolog" },
    { id: "spec-kardio", name: "Spec. kardiologije", title: "Kardiolog" },
    { id: "spec-endo", name: "Spec. endokrinologije", title: "Endokrinolog" },
    { id: "spec-ped", name: "Spec. pedijatrije", title: "Pedijatar" },
    { id: "spec-int", name: "Spec. interne medicine", title: "Internista" },
    { id: "spec-dojke", name: "Spec. za bolesti dojke", title: "Senolog" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Marija S.",
      service: "Kompletna krvna slika",
      text: "Zakazala vađenje krvi za 7 ujutru, čekala bukvalno 2 minuta. Rezultati na mejl istog dana. Online zakazivanje je genijalno.",
    },
    {
      name: "Dejan N.",
      service: "Kardiološki pregled + EKG",
      text: "EKG i ultrazvuk srca gotovi za pola sata. Sve jasno objašnjeno, bez nepotrebnog stresa. Vrhunska organizacija.",
    },
    {
      name: "Ana V.",
      service: "Ultrazvuk dojke + ABVS 3D",
      text: "ABVS 3D skener koji nemaju ni mnoge beogradske klinike. Pregled temeljit, nalaz detaljan. Hvala Human-u.",
    },
  ],
  rating: { average: "4.9", count: 523 },
  gallery: medGallery({ icon: Stethoscope, label: "10 specijalnosti" }),
  trust: MEDICAL_TRUST,

  business: cityBiz(
    "018 302 000",
    "info@human.rs",
    "Niš",
    "18000",
    "Niš",
    "Pon – Pet 7-21h, Sub 8-16h, Ned 8-14h",
    "Mo-Fr 07:00-21:00, Sa 08:00-16:00, Su 08:00-14:00",
  ),
  seo: {
    title: "Poliklinika HUMAN — Zakažite pregled online · Niš",
    description:
      "Laboratorija, hirurgija, kardiologija, urologija i još 6 specijalnosti u Nišu. Izaberite specijalnost i termin — zakažite online u 30 sekundi.",
  },
};
