/**
 * Magnet MD — Vranje
 *
 * No confirmed individual doctor names from their website.
 * All providers use generic position titles.
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
  Briefcase,
  Ear,
  Eye,
  Flower2,
  HeartHandshake,
  HeartPulse,
  Magnet,
  Scan,
  ScanSearch,
  TestTube,
} from "lucide-react";

export const poliklinika_magnetmd: DemoConfig = {
  slug: "poliklinika-magnetmd",
  brand: "MAGNET MD",
  category: "Poliklinika · Vranje",
  name: "Magnet MD",
  description:
    "Prva i najveća privatna zdravstvena ustanova u Pčinjskom okrugu — jedini MRI u poliklinici južno od Beograda, sa 13 specijalnosti.",
  theme: "medical",
  hero: {
    lead: "Prva i najveća",
    emphasis: "u Pčinjskom okrugu.",
    subtext:
      "MRI 1.5T, 13 specijalnosti i kompletna dijagnostika — zakažite pregled online u vodećoj privatnoj zdravstvenoj ustanovi južne Srbije.",
    icon: Magnet,
    stats: medStats("12.000+", "15"),
  },

  specialties: [
    { id: "mri", name: "Magnetna rezonanca (MRI 1.5T)", icon: Magnet, color: "oklch(0.55 0.14 220)" },
    { id: "interna", name: "Interna medicina / Kardiologija", icon: HeartPulse, color: "oklch(0.60 0.15 25)" },
    { id: "endokrinologija", name: "Endokrinologija", icon: Activity, color: "oklch(0.70 0.12 95)" },
    { id: "ginekologija", name: "Ginekologija", icon: Flower2, color: "oklch(0.65 0.14 350)" },
    { id: "neurologija", name: "Neurologija / Neurohirurgija", icon: Brain, color: "oklch(0.55 0.12 280)" },
    { id: "oftalmologija", name: "Oftalmologija", icon: Eye, color: "oklch(0.60 0.14 170)" },
    { id: "orl", name: "ORL", icon: Ear, color: "oklch(0.60 0.12 50)" },
    { id: "pedijatrija", name: "Pedijatrija", icon: Baby, color: "oklch(0.68 0.14 80)" },
    { id: "psihijatrija", name: "Psihijatrija", icon: HeartHandshake, color: "oklch(0.60 0.13 310)" },
    { id: "reumatologija", name: "Reumatologija", icon: Bone, color: "oklch(0.60 0.10 60)" },
    { id: "laboratorija", name: "Laboratorija", icon: TestTube, color: "oklch(0.55 0.10 160)" },
    { id: "medicina-rada", name: "Medicina rada", icon: Briefcase, color: "oklch(0.65 0.10 140)" },
    { id: "rendgen", name: "Rendgen dijagnostika", icon: Scan, color: "oklch(0.55 0.12 200)" },
  ],

  services: [
    // ── Magnetna rezonanca ──
    {
      id: "mri-glava",
      name: "MRI glave",
      description: "MRI snimak mozga za dijagnostiku neuroloških i vaskularnih stanja.",
      duration: 45,
      price: 14000,
      specialtyId: "mri",
      noProviderStep: true,
    },
    {
      id: "mri-kicma",
      name: "MRI kičme (cervikalni/lumbalni segment)",
      description: "MRI snimak kičmenog stuba za dijagnostiku diskus hernije i degenerativnih promena.",
      duration: 45,
      price: 14000,
      specialtyId: "mri",
      noProviderStep: true,
    },
    {
      id: "mri-zglob",
      name: "MRI kolena/ramena/kuka",
      description: "MRI snimak zglobova za preciznu dijagnostiku povreda i oštećenja.",
      duration: 40,
      price: 14000,
      specialtyId: "mri",
      noProviderStep: true,
    },
    {
      id: "mri-abdomen",
      name: "MRI abdomena",
      description: "MRI snimak abdomena za dijagnostiku oboljenja unutrašnjih organa.",
      duration: 50,
      price: 16000,
      specialtyId: "mri",
      noProviderStep: true,
    },
    {
      id: "mri-dojke",
      name: "MRI dojke",
      description: "MRI dojki sa kontrastom za najdetaljniju dijagnostiku tkiva dojki.",
      duration: 50,
      price: 18000,
      specialtyId: "mri",
      noProviderStep: true,
    },
    {
      id: "mri-srce",
      name: "MRI srca",
      description: "Kardijalni MRI za evaluaciju strukture i funkcije srčanog mišića.",
      duration: 60,
      price: 20000,
      specialtyId: "mri",
      noProviderStep: true,
    },

    // ── Interna medicina / Kardiologija ──
    {
      id: "int-pregled",
      name: "Internistički pregled + EKG",
      description: "Kompletan internistički pregled sa EKG snimanjem srčanog ritma.",
      duration: 30,
      price: 4000,
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
    {
      id: "int-holter",
      name: "Holter EKG",
      description: "24-časovno praćenje srčanog ritma — postavljanje Holter uređaja.",
      duration: 15,
      price: 5000,
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
      price: 2500,
      specialtyId: "endokrinologija",
    },

    // ── Ginekologija ──
    {
      id: "gin-pregled",
      name: "Ginekološki pregled + ultrazvuk",
      description: "Kompletan ginekološki pregled sa ultrazvučnom dijagnostikom karlice.",
      duration: 30,
      price: 4000,
      specialtyId: "ginekologija",
    },
    {
      id: "gin-papa",
      name: "Papa test",
      description: "Bezbolno uzimanje brisa za skrining promena na grliću materice.",
      duration: 10,
      price: 1500,
      specialtyId: "ginekologija",
    },

    // ── Neurologija / Neurohirurgija ──
    {
      id: "neuro-pregled",
      name: "Neurološki pregled",
      description: "Specijalistički neurološki pregled sa evaluacijom nervnog sistema.",
      duration: 20,
      price: 4000,
      specialtyId: "neurologija",
    },
    {
      id: "neuro-eeg",
      name: "EEG",
      description: "Elektroencefalografija — snimanje električne aktivnosti mozga.",
      duration: 30,
      price: 3500,
      specialtyId: "neurologija",
      noProviderStep: true,
    },
    {
      id: "neuro-neurohirurg",
      name: "Konsultacija neurohirurga",
      description: "Specijalistička konsultacija neurohirurga za procenu operativnih opcija.",
      duration: 20,
      price: 5000,
      specialtyId: "neurologija",
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
      id: "oft-dioptrija",
      name: "Pregled za dioptriju",
      description: "Precizno utvrđivanje dioptrije i preporuka za korekciju vida.",
      duration: 15,
      price: 3000,
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

    // ── ORL ──
    {
      id: "orl-pregled",
      name: "ORL pregled",
      description: "Specijalistički pregled uha, grla i nosa sa dijagnostikom.",
      duration: 20,
      price: 3500,
      specialtyId: "orl",
    },
    {
      id: "orl-audiometrija",
      name: "Audiometrija",
      description: "Merenje oštrine sluha za dijagnostiku gubitka sluha.",
      duration: 20,
      price: 2500,
      specialtyId: "orl",
      noProviderStep: true,
    },
    {
      id: "orl-timpanometrija",
      name: "Timpanometrija",
      description: "Merenje funkcije srednjeg uha i pokretljivosti bubne opne.",
      duration: 15,
      price: 2000,
      specialtyId: "orl",
      noProviderStep: true,
    },

    // ── Pedijatrija ──
    {
      id: "ped-pregled",
      name: "Pedijatrijski pregled",
      description: "Klinički pregled deteta uz savet i preporuke za roditelje.",
      duration: 20,
      price: 3000,
      specialtyId: "pedijatrija",
    },
    {
      id: "ped-sistematski",
      name: "Sistematski pregled deteta",
      description: "Kompletan sistematski pregled za upis u vrtić ili školu.",
      duration: 30,
      price: 4000,
      specialtyId: "pedijatrija",
    },

    // ── Psihijatrija ──
    {
      id: "psih-pregled",
      name: "Psihijatrijski pregled",
      description: "Detaljan psihijatrijski pregled sa dijagnostikom i terapijskim planom.",
      duration: 30,
      price: 4500,
      specialtyId: "psihijatrija",
    },
    {
      id: "psih-kontrola",
      name: "Kontrolni pregled",
      description: "Kontrolni psihijatrijski pregled sa korekcijom terapije i praćenjem stanja.",
      duration: 20,
      price: 3000,
      specialtyId: "psihijatrija",
    },

    // ── Reumatologija ──
    {
      id: "reuma-pregled",
      name: "Reumatološki pregled",
      description: "Specijalistički pregled zglobova i vezivnog tkiva sa dijagnostikom.",
      duration: 20,
      price: 4000,
      specialtyId: "reumatologija",
    },
    {
      id: "reuma-uzv",
      name: "Ultrazvuk zglobova",
      description: "Ultrazvučni pregled zglobova za procenu upale i oštećenja.",
      duration: 20,
      price: 3000,
      specialtyId: "reumatologija",
    },

    // ── Laboratorija ──
    {
      id: "lab-krvna",
      name: "Kompletna krvna slika",
      description: "Osnovni skrining opšteg stanja organizma iz kapi krvi.",
      duration: 10,
      price: 500,
      specialtyId: "laboratorija",
      noProviderStep: true,
    },
    {
      id: "lab-biohemija",
      name: "Biohemijski panel",
      description: "Šećer, holesterol, jetra, bubrezi — kompletan biohemijski panel.",
      duration: 10,
      price: 1200,
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
      id: "lab-tumor",
      name: "Tumor markeri",
      description: "Skrining tumorskih markera za ranu detekciju malignih oboljenja.",
      duration: 10,
      price: 1500,
      specialtyId: "laboratorija",
      noProviderStep: true,
    },
    {
      id: "lab-virus",
      name: "Virusološki panel",
      description: "Panel testova za dijagnostiku virusnih infekcija — hepatitis, HIV, EBV i drugi.",
      duration: 10,
      price: 2000,
      specialtyId: "laboratorija",
      noProviderStep: true,
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
      name: "Sistematski pregled za zaposlene",
      description: "Kompletan sistematski pregled za zaposlene po zakonskim standardima.",
      duration: 45,
      price: 6000,
      specialtyId: "medicina-rada",
      noProviderStep: true,
    },

    // ── Rendgen dijagnostika ──
    {
      id: "rtg-grudni",
      name: "Digitalni rendgen grudnog koša",
      description: "Digitalna radiografija grudnog koša sa minimalnom dozom zračenja.",
      duration: 10,
      price: 2000,
      specialtyId: "rendgen",
      noProviderStep: true,
    },
    {
      id: "rtg-kosti",
      name: "Rendgen kostiju/zglobova",
      description: "Digitalni rendgen kostiju i zglobova za dijagnostiku preloma i degenerativnih promena.",
      duration: 10,
      price: 2000,
      specialtyId: "rendgen",
      noProviderStep: true,
    },
  ],

  providers: [
    { id: "spec-int", name: "Spec. interne medicine", title: "Internista — kardiolog" },
    { id: "spec-endo", name: "Spec. endokrinologije", title: "Endokrinolog" },
    { id: "spec-gin", name: "Spec. ginekologije", title: "Ginekolog" },
    { id: "spec-neuro", name: "Spec. neurologije", title: "Neurolog" },
    { id: "spec-neurohir", name: "Spec. neurohirurgije", title: "Neurohirurg" },
    { id: "spec-oft", name: "Spec. oftalmologije", title: "Oftalmolog" },
    { id: "spec-orl", name: "Spec. ORL", title: "Otorinolaringolog" },
    { id: "spec-ped", name: "Spec. pedijatrije", title: "Pedijatar" },
    { id: "spec-psih", name: "Spec. psihijatrije", title: "Psihijatar" },
    { id: "spec-reuma", name: "Spec. reumatologije", title: "Reumatolog" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Marko J.",
      service: "MRI kičme",
      text: "MRI kičme gotov za 45 minuta, nalaz na mejl istog dana. Jedini MRI u poliklinici južno od Beograda — odlično.",
    },
    {
      name: "Gordana P.",
      service: "Endokrinološki pregled",
      text: "Ultrazvuk štitne žlezde i pregled u jednoj poseti. Zakazala online, čekanje nula. Preporučujem svakome.",
    },
    {
      name: "Petar M.",
      service: "ORL pregled",
      text: "Audiometrija i timpanometrija obavljene za pola sata. Doktor detaljan, sve objašnjeno. Online termin — fantastika.",
    },
  ],
  rating: { average: "4.8", count: 278 },
  gallery: medGallery({ icon: Magnet, label: "MRI 1.5T centar" }),
  trust: MEDICAL_TRUST,

  business: cityBiz(
    "017-411-611",
    "info@magnetmd.rs",
    "Vranje",
    "17500",
    "Vranje",
    "Pon – Sub 7-20h",
    "Mo-Sa 07:00-20:00",
  ),
  seo: {
    title: "Magnet MD — Zakažite MRI ili pregled online · Vranje",
    description:
      "MRI 1.5T i 13 specijalnosti u Vranju. Prva i najveća privatna zdravstvena ustanova u Pčinjskom okrugu — zakažite termin online.",
  },
};
