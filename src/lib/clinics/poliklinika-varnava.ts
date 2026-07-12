/**
 * Poliklinika Varnava — Niš
 *
 * Confirmed doctors (from their website / public sources):
 *   Prof. dr Branko Branković — opšti hirurg, kolorektalna hirurgija, profesor Medicinskog fakulteta
 *   Dr Zoran Blagojević — specijalista interne medicine, gastroenterolog
 *   50+ lekara ukupno — remaining providers use generic position titles.
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
  HeartPulse,
  Microscope,
  ScanSearch,
  Scissors,
  Stethoscope,
  TestTube,
} from "lucide-react";

export const poliklinika_varnava: DemoConfig = {
  slug: "poliklinika-varnava",
  brand: "VARNAVA",
  category: "Poliklinika · Niš",
  name: "Poliklinika Varnava",
  description:
    "Renomirana poliklinika sa 50+ lekara i dugogodišnjom akademskom tradicijom — vaše mesto zdravlja od 2001. godine.",
  theme: "medical",
  hero: {
    lead: "Vaše mesto zdravlja",
    emphasis: "od 2001. godine.",
    subtext:
      "Kardiologija, gastroenterologija, hirurgija, laboratorija i još 7 specijalnosti — zakažite pregled online kod 50+ specijalista.",
    icon: Stethoscope,
    stats: medStats("18.000+", "23"),
  },

  specialties: [
    { id: "kardiologija", name: "Kardiologija", icon: HeartPulse, color: "oklch(0.60 0.15 25)" },
    { id: "gastro", name: "Gastroenterologija", icon: Stethoscope, color: "oklch(0.60 0.12 50)" },
    { id: "endokrinologija", name: "Endokrinologija", icon: Activity, color: "oklch(0.70 0.12 95)" },
    { id: "nefrologija", name: "Nefrologija", icon: Droplets, color: "oklch(0.55 0.12 200)" },
    { id: "hematologija", name: "Hematologija", icon: TestTube, color: "oklch(0.55 0.10 160)" },
    { id: "reumatologija", name: "Reumatologija", icon: Bone, color: "oklch(0.60 0.10 60)" },
    { id: "pedijatrija", name: "Pedijatrija", icon: Baby, color: "oklch(0.68 0.14 80)" },
    { id: "neuropsihijatrija", name: "Neuropsihijatrija", icon: Brain, color: "oklch(0.55 0.12 280)" },
    { id: "hirurgija", name: "Opšta hirurgija", icon: Scissors, color: "oklch(0.55 0.13 15)" },
    { id: "radiologija", name: "Radiologija", icon: ScanSearch, color: "oklch(0.55 0.12 230)" },
    { id: "laboratorija", name: "Laboratorija", icon: Microscope, color: "oklch(0.60 0.10 140)" },
  ],

  services: [
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
    {
      id: "kardio-doppler",
      name: "Color Doppler karotidnih arterija",
      description: "Pregled protoka krvi u karotidnim arterijama pomoću Color Doppler-a.",
      duration: 20,
      price: 4500,
      specialtyId: "kardiologija",
    },

    // ── Gastroenterologija ──
    {
      id: "gastro-pregled",
      name: "Gastroenterološki pregled",
      description: "Specijalistički pregled digestivnog trakta sa procenom i terapijskim planom.",
      duration: 20,
      price: 4500,
      specialtyId: "gastro",
      providerIds: ["blagojevic"],
    },
    {
      id: "gastro-uzv",
      name: "Ultrazvuk abdomena",
      description: "Ultrazvučni pregled trbušnih organa za sveobuhvatnu dijagnostiku.",
      duration: 20,
      price: 3500,
      specialtyId: "gastro",
      providerIds: ["blagojevic"],
    },
    {
      id: "gastro-gastroskopija",
      name: "Gastroskopija",
      description: "Endoskopski pregled jednjaka, želuca i dvanaestopalačnog creva.",
      duration: 30,
      price: 12000,
      specialtyId: "gastro",
      providerIds: ["blagojevic"],
    },
    {
      id: "gastro-kolonoskopija",
      name: "Kolonoskopija",
      description: "Endoskopski pregled debelog creva za dijagnostiku i prevenciju.",
      duration: 45,
      price: 15000,
      specialtyId: "gastro",
      providerIds: ["blagojevic"],
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
      name: "Ultrazvuk bubrega i mokraćnih puteva",
      description: "Ultrazvučni pregled bubrega i mokraćnih puteva za rani skrining.",
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
      name: "Interpretacija krvne slike i koagulograma",
      description: "Stručno tumačenje rezultata krvne slike i koagulacionih testova.",
      duration: 15,
      price: 2500,
      specialtyId: "hematologija",
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
      id: "ped-subspec",
      name: "Subspecijalistička pedijatrija",
      description: "Subspecijalistički pregled dece — kardio, pulmo, gastro, neuro ili endokrinologija.",
      duration: 25,
      price: 4000,
      specialtyId: "pedijatrija",
    },

    // ── Neuropsihijatrija ──
    {
      id: "neuro-psihijatrija",
      name: "Psihijatrijski pregled",
      description: "Detaljan psihijatrijski pregled sa dijagnostikom i terapijskim planom.",
      duration: 30,
      price: 5000,
      specialtyId: "neuropsihijatrija",
    },
    {
      id: "neuro-pregled",
      name: "Neurološki pregled",
      description: "Specijalistički neurološki pregled sa evaluacijom nervnog sistema.",
      duration: 20,
      price: 4500,
      specialtyId: "neuropsihijatrija",
    },
    {
      id: "neuro-decji",
      name: "Dečji neuropsihijatrijski pregled",
      description: "Specijalizovan pregled za procenu neuropsihijatrijskog razvoja dece.",
      duration: 30,
      price: 5000,
      specialtyId: "neuropsihijatrija",
    },
    {
      id: "neuro-eeg",
      name: "EEG",
      description: "Elektroencefalografija — snimanje električne aktivnosti mozga.",
      duration: 30,
      price: 4000,
      specialtyId: "neuropsihijatrija",
      noProviderStep: true,
    },
    {
      id: "neuro-kognitivno",
      name: "Kognitivno testiranje",
      description: "Standardizovano testiranje kognitivnih funkcija — pažnja, memorija, govor.",
      duration: 60,
      price: 6000,
      specialtyId: "neuropsihijatrija",
    },

    // ── Opšta hirurgija ──
    {
      id: "hir-pregled",
      name: "Hirurški pregled",
      description: "Specijalistički hirurški pregled sa procenom stanja i planom lečenja.",
      duration: 20,
      price: 4500,
      specialtyId: "hirurgija",
      providerIds: ["brankovic"],
    },
    {
      id: "hir-prokto",
      name: "Proktološki pregled",
      description: "Specijalistički pregled rektuma i analne regije sa dijagnostikom.",
      duration: 20,
      price: 5000,
      specialtyId: "hirurgija",
      providerIds: ["brankovic"],
    },
    {
      id: "hir-hemoroidi",
      name: "Lečenje hemoroida",
      description: "Ambulantno lečenje hemoroida minimalno invazivnom procedurom.",
      duration: 30,
      price: 15000,
      specialtyId: "hirurgija",
      providerIds: ["brankovic"],
    },
    {
      id: "hir-ekscizija",
      name: "Ekscizija kožnih promena",
      description: "Hirurško uklanjanje benignih kožnih promena uz lokalnu anesteziju.",
      duration: 20,
      price: 6000,
      specialtyId: "hirurgija",
      providerIds: ["brankovic"],
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
      id: "rad-dojke",
      name: "Ultrazvuk dojke",
      description: "Ultrazvučni pregled dojki za rani skrining i prevenciju.",
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
      name: "Biohemijski panel",
      description: "Šećer, holesterol, jetra, bubrezi — kompletan biohemijski panel.",
      duration: 10,
      price: 1500,
      specialtyId: "laboratorija",
      noProviderStep: true,
    },
    {
      id: "lab-hormoni",
      name: "Hormonski panel",
      description: "Analiza hormona štitne žlezde, polnih hormona i metaboličkih markera.",
      duration: 10,
      price: 2500,
      specialtyId: "laboratorija",
      noProviderStep: true,
    },
    {
      id: "lab-urin",
      name: "Urin komplet",
      description: "Kompletna analiza urina za skrining bubrežnih i metaboličkih oboljenja.",
      duration: 5,
      price: 400,
      specialtyId: "laboratorija",
      noProviderStep: true,
    },
  ],

  providers: [
    { id: "brankovic", name: "Prof. dr Branko Branković", title: "Opšti hirurg, kolorektalna hirurgija" },
    { id: "blagojevic", name: "Dr Zoran Blagojević", title: "Internista, gastroenterolog" },
    { id: "spec-kardio", name: "Spec. kardiologije", title: "Kardiolog" },
    { id: "spec-endo", name: "Spec. endokrinologije", title: "Endokrinolog" },
    { id: "spec-nefro", name: "Spec. nefrologije", title: "Nefrolog" },
    { id: "spec-hemato", name: "Spec. hematologije", title: "Hematolog" },
    { id: "spec-reuma", name: "Spec. reumatologije", title: "Reumatolog" },
    { id: "spec-ped", name: "Spec. pedijatrije", title: "Pedijatar" },
    { id: "spec-neuro", name: "Spec. neuropsihijatrije", title: "Neuropsihijatar" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Aleksandra R.",
      service: "Gastroenterološki pregled",
      text: "Dr Blagojević je temeljit i strpljiv. Zakazala gastroskopiju online — bez čekanja na liniji, jednostavno i brzo.",
    },
    {
      name: "Miroslav T.",
      service: "Hirurški pregled",
      text: "Prof. Branković mi je objasnio sve opcije za hemoroide, bez žurbe. Profesori fakulteta u privatnoj praksi — to je kvalitet.",
    },
    {
      name: "Jovana S.",
      service: "Pedijatrijski pregled",
      text: "Sistematski za ćerku gotov za pola sata. Doktorka nežna sa decom, roditelji imaju poverenje. Zakazivanje online — fenomenalno.",
    },
  ],
  rating: { average: "4.9", count: 467 },
  gallery: medGallery({ icon: Stethoscope, label: "50+ specijalista" }),
  trust: MEDICAL_TRUST,

  business: cityBiz(
    "018 4520 360",
    "info@varnava.rs",
    "Niš",
    "18000",
    "Niš",
    "Pon – Pet 08-20:30, Sub 08-16h",
    "Mo-Fr 08:00-20:30, Sa 08:00-16:00",
  ),
  seo: {
    title: "Poliklinika Varnava — Zakažite pregled online · Niš",
    description:
      "50+ specijalista pod jednim krovom u Nišu — kardiologija, gastroenterologija, hirurgija i još 8 specijalnosti. Zakažite termin online.",
  },
};
