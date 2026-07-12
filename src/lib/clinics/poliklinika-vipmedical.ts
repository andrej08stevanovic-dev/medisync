/**
 * VIP Medical — Vranje (+ Leskovac)
 *
 * No confirmed individual doctor names from their website.
 * All providers use generic position titles.
 *
 * Prices, durations, and service names copied verbatim from the source document.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, cityBiz } from "@/lib/demo-types";
import {
  Bone,
  Brain,
  Briefcase,
  Droplets,
  Eye,
  ScanFace,
  ScanSearch,
  Stethoscope,
} from "lucide-react";

export const poliklinika_vipmedical: DemoConfig = {
  slug: "poliklinika-vipmedical",
  brand: "VIP MEDICAL",
  category: "Poliklinika · Vranje",
  name: "VIP Medical",
  description:
    "Moderni dijagnostički centar sa MRI 1.5T, multislajsnim CT-om i širokim spektrom specijalnosti — korak dalje za vaše zdravlje.",
  theme: "medical",
  hero: {
    lead: "Korak dalje",
    emphasis: "za vaše zdravlje.",
    subtext:
      "MRI, multislajsni CT, digitalna mamografija i 8 specijalnosti — zakažite pregled online u najsavremenijem centru na jugu Srbije.",
    icon: ScanSearch,
    stats: medStats("10.000+", "15"),
  },

  specialties: [
    { id: "dijagnostika", name: "Dijagnostički centar", icon: ScanSearch, color: "oklch(0.55 0.12 230)" },
    { id: "interna", name: "Interna medicina", icon: Stethoscope, color: "oklch(0.60 0.14 25)" },
    { id: "neuropsihijatrija", name: "Neuropsihijatrija / Psihijatrija", icon: Brain, color: "oklch(0.55 0.12 280)" },
    { id: "oftalmologija", name: "Oftalmologija", icon: Eye, color: "oklch(0.65 0.14 170)" },
    { id: "ortopedija", name: "Ortopedija", icon: Bone, color: "oklch(0.60 0.10 60)" },
    { id: "urologija", name: "Urologija", icon: Droplets, color: "oklch(0.55 0.12 200)" },
    { id: "dermatologija", name: "Dermatologija", icon: ScanFace, color: "oklch(0.60 0.13 330)" },
    { id: "medicina-rada", name: "Medicina rada", icon: Briefcase, color: "oklch(0.65 0.10 140)" },
  ],

  services: [
    // ── Dijagnostički centar ──
    {
      id: "dij-mri",
      name: "Magnetna rezonanca (MRI 1.5T)",
      description: "Najsavremeniji MRI snimak za preciznu dijagnostiku bez zračenja.",
      duration: 45,
      price: 14000,
      specialtyId: "dijagnostika",
      noProviderStep: true,
    },
    {
      id: "dij-ct",
      name: "Multislajsni CT",
      description: "Višeslojni CT skener za brzu i detaljnu dijagnostiku celoga tela.",
      duration: 30,
      price: 12000,
      specialtyId: "dijagnostika",
      noProviderStep: true,
    },
    {
      id: "dij-rtg",
      name: "Digitalni rendgen",
      description: "Digitalna radiografija sa minimalnom dozom zračenja i brzim nalazom.",
      duration: 10,
      price: 2000,
      specialtyId: "dijagnostika",
      noProviderStep: true,
    },
    {
      id: "dij-mamografija",
      name: "Digitalna mamografija",
      description: "Skrining dojki digitalnom mamografijom za ranu detekciju promena.",
      duration: 15,
      price: 4000,
      specialtyId: "dijagnostika",
      noProviderStep: true,
    },

    // ── Interna medicina ──
    {
      id: "int-pregled",
      name: "Internistički pregled + EKG",
      description: "Kompletan internistički pregled sa EKG snimanjem srčanog ritma.",
      duration: 30,
      price: 4000,
      specialtyId: "interna",
    },
    {
      id: "int-uzv-abdomen",
      name: "Ultrazvuk abdomena",
      description: "Ultrazvučni pregled trbušnih organa za sveobuhvatnu dijagnostiku.",
      duration: 20,
      price: 3000,
      specialtyId: "interna",
    },
    {
      id: "int-uzv-srca",
      name: "Ultrazvuk srca",
      description: "Ehokardiografija za detaljan uvid u rad i strukturu srca.",
      duration: 30,
      price: 4500,
      specialtyId: "interna",
    },

    // ── Neuropsihijatrija / Psihijatrija ──
    {
      id: "neuro-pregled",
      name: "Neuropsihijatrijski pregled",
      description: "Sveobuhvatan neuropsihijatrijski pregled sa procenom i planom lečenja.",
      duration: 30,
      price: 4500,
      specialtyId: "neuropsihijatrija",
    },
    {
      id: "neuro-psihijatrija",
      name: "Psihijatrijski pregled",
      description: "Detaljan psihijatrijski pregled sa dijagnostikom i terapijskim planom.",
      duration: 30,
      price: 4500,
      specialtyId: "neuropsihijatrija",
    },
    {
      id: "neuro-psihoterapija",
      name: "Psihoterapijska seansa",
      description: "Individualna psihoterapijska seansa prilagođena vašim potrebama.",
      duration: 50,
      price: 4500,
      specialtyId: "neuropsihijatrija",
    },

    // ── Oftalmologija ──
    {
      id: "oft-pregled",
      name: "Oftalmološki pregled",
      description: "Kompletan pregled očiju sa procenom stanja vida i očnog dna.",
      duration: 20,
      price: 3500,
      specialtyId: "oftalmologija",
    },
    {
      id: "oft-pritisak",
      name: "Merenje očnog pritiska",
      description: "Brza i bezbolna tonometrija za skrining glaukoma.",
      duration: 10,
      price: 1500,
      specialtyId: "oftalmologija",
    },
    {
      id: "oft-dioptrija",
      name: "Pregled za dioptriju",
      description: "Precizno utvrđivanje dioptrije i preporuka za korekciju vida.",
      duration: 15,
      price: 3000,
      specialtyId: "oftalmologija",
    },

    // ── Ortopedija ──
    {
      id: "ort-pregled",
      name: "Ortopedski pregled",
      description: "Specijalistički pregled koštano-zglobnog sistema sa planom lečenja.",
      duration: 20,
      price: 4000,
      specialtyId: "ortopedija",
    },
    {
      id: "ort-uzv",
      name: "Ultrazvuk mekih tkiva",
      description: "Ultrazvučni pregled mekih tkiva, tetiva i ligamenata.",
      duration: 15,
      price: 3000,
      specialtyId: "ortopedija",
    },

    // ── Urologija ──
    {
      id: "uro-pregled",
      name: "Urološki pregled",
      description: "Detaljan urološki pregled sa procenom stanja i preporukama.",
      duration: 20,
      price: 4000,
      specialtyId: "urologija",
    },
    {
      id: "uro-uzv",
      name: "Ultrazvuk urološki",
      description: "Ultrazvučni pregled bubrega, mokraćne bešike i prostate.",
      duration: 20,
      price: 3000,
      specialtyId: "urologija",
    },

    // ── Dermatologija ──
    {
      id: "derm-pregled",
      name: "Dermatološki pregled",
      description: "Pregled kože sa dijagnostikom i individualinim savjetom za negu.",
      duration: 20,
      price: 3500,
      specialtyId: "dermatologija",
    },
    {
      id: "derm-radiotalasi",
      name: "Uklanjanje kožnih promena radiotalasnim nožem",
      description: "Precizno uklanjanje benignih kožnih promena radiotalasnom tehnologijom.",
      duration: 20,
      price: 5000,
      specialtyId: "dermatologija",
    },
    {
      id: "derm-dermatoskopija",
      name: "Dermatoskopija mladeža",
      description: "Digitalna analiza mladeža za procenu rizika i ranu prevenciju.",
      duration: 15,
      price: 2000,
      specialtyId: "dermatologija",
    },

    // ── Medicina rada ──
    {
      id: "mr-uverenje",
      name: "Lekarsko uverenje",
      description: "Izdavanje lekarskog uverenja za zaposlenje, vozačku ili oružje.",
      duration: 30,
      price: 3000,
      specialtyId: "medicina-rada",
      noProviderStep: true,
    },
    {
      id: "mr-sistematski",
      name: "Sistematski pregled zaposlenih",
      description: "Kompletan sistematski pregled za zaposlene po zakonskim standardima.",
      duration: 45,
      price: 6000,
      specialtyId: "medicina-rada",
      noProviderStep: true,
    },
  ],

  providers: [
    { id: "spec-interna", name: "Spec. interne medicine", title: "Internista" },
    { id: "spec-neuro", name: "Spec. neuropsihijatrije", title: "Neuropsihijatar" },
    { id: "spec-oft", name: "Spec. oftalmologije", title: "Oftalmolog" },
    { id: "spec-ort", name: "Spec. ortopedije", title: "Ortoped" },
    { id: "spec-uro", name: "Spec. urologije", title: "Urolog" },
    { id: "spec-derm", name: "Spec. dermatologije", title: "Dermatolog" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Stefan V.",
      service: "Magnetna rezonanca",
      text: "MRI snimak kolena gotov za 40 minuta, nalaz istog dana. Oprema je vrhunska — nisam morao da idem do Beograda.",
    },
    {
      name: "Dragana T.",
      service: "Dermatološki pregled",
      text: "Dermatoskopija mladeža obavljena brzo i temeljno. Online zakazivanje mi uštedelo celo jutro čekanja.",
    },
    {
      name: "Miloš R.",
      service: "Ortopedski pregled",
      text: "Posle povrede kolena, pregled + ultrazvuk u jednoj poseti. Doktor jasan, objašnjenje detaljno, bez žurbe.",
    },
  ],
  rating: { average: "4.8", count: 198 },
  gallery: medGallery({ icon: ScanSearch, label: "Dijagnostički centar" }),
  trust: MEDICAL_TRUST,

  business: cityBiz(
    "017/444-444",
    "info@vipmedical.rs",
    "Vranje",
    "17500",
    "Vranje",
    "Pon – Sub 7-20h",
    "Mo-Sa 07:00-20:00",
  ),
  seo: {
    title: "VIP Medical — Zakažite pregled online · Vranje",
    description:
      "MRI, CT, digitalna mamografija i 8 specijalnosti u Vranju. Izaberite uslugu i zakažite termin online u najsavremenijem centru na jugu Srbije.",
  },
};
