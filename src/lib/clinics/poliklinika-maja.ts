/**
 * Maja Medical — Niš
 *
 * No confirmed individual doctor names from their website.
 * All providers use generic position titles.
 *
 * Prices, durations, and service names copied verbatim from the source document.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, cityBiz } from "@/lib/demo-types";
import {
  Baby,
  Briefcase,
  Building2,
  Droplets,
  Eye,
  Flower2,
  HeartHandshake,
  Hospital,
  Microscope,
  Scissors,
  ScanSearch,
  Stethoscope,
  TestTube,
} from "lucide-react";

export const poliklinika_maja: DemoConfig = {
  slug: "poliklinika-maja",
  brand: "MAJA MEDICAL",
  category: "Poliklinika · Niš",
  name: "Maja Medical",
  description:
    "Premium zdravstveni sistem sa specijalnom bolnicom za oftalmologiju, MRI i MSCT dijagnostikom i širokim spektrom specijalnosti — svetska usluga na jednom mestu od 1994.",
  theme: "medical",
  hero: {
    lead: "Svetska usluga —",
    emphasis: "na jednom mestu.",
    subtext:
      "Oftalmologija, MRI, MSCT, hirurgija i 9 specijalnosti — zakažite pregled online u vodećem medicinskom centru u Nišu.",
    icon: Eye,
    stats: medStats("15.000+", "30"),
  },

  // 4 entiteta u sistemu (ne gradovi — Bolnica/Dom zdravlja/Klinika/Poliklinika
  // su različiti objekti u istoj mreži). Isti location mehanizam kao HUMAN,
  // samo semantički entiteti umesto gradova. Specijalnosti bez `locationIds`
  // su dostupne u svim objektima.
  locations: [
    {
      id: "bolnica",
      name: "Bolnica",
      icon: Hospital,
      color: "oklch(0.55 0.13 10)",
      phone: "018 530 531",
      address: "Vojvode Tankosića 15, 18000 Niš",
    },
    {
      id: "dom-zdravlja",
      name: "Dom zdravlja",
      icon: HeartHandshake,
      color: "oklch(0.60 0.10 150)",
      phone: "018 530 532",
      address: "Bulevar Dr Zorana Đinđića 32, 18000 Niš",
    },
    {
      id: "klinika",
      name: "Klinika",
      icon: Microscope,
      color: "oklch(0.55 0.12 260)",
      phone: "018 530 533",
      address: "Obrenovićeva 8, 18000 Niš",
    },
    {
      id: "poliklinika",
      name: "Poliklinika",
      icon: Building2,
      color: "oklch(0.60 0.11 60)",
      phone: "018 530 534",
      address: "Sinđelićev trg 3, 18000 Niš",
    },
  ],

  specialties: [
    {
      id: "oftalmologija",
      name: "Oftalmologija",
      icon: Eye,
      color: "oklch(0.55 0.14 305)",
      locationIds: ["klinika"],
    },
    {
      id: "radiologija",
      name: "Radiologija (MRI, MSCT, RTG)",
      icon: ScanSearch,
      color: "oklch(0.55 0.12 220)",
      locationIds: ["klinika", "bolnica"],
    },
    {
      id: "hirurgija",
      name: "Hirurgija",
      icon: Scissors,
      color: "oklch(0.60 0.13 25)",
      locationIds: ["bolnica"],
    },
    {
      id: "ginekologija",
      name: "Ginekologija",
      icon: Flower2,
      color: "oklch(0.65 0.14 350)",
      locationIds: ["bolnica", "poliklinika"],
    },
    {
      id: "urologija",
      name: "Urologija",
      icon: Droplets,
      color: "oklch(0.55 0.12 200)",
      locationIds: ["bolnica", "poliklinika"],
    },
    {
      id: "pedijatrija",
      name: "Pedijatrija",
      icon: Baby,
      color: "oklch(0.70 0.14 90)",
      locationIds: ["dom-zdravlja", "poliklinika"],
    },
    { id: "interna", name: "Interna medicina", icon: Stethoscope, color: "oklch(0.60 0.10 160)" },
    { id: "laboratorija", name: "Laboratorija", icon: TestTube, color: "oklch(0.55 0.10 50)" },
    {
      id: "medicina-rada",
      name: "Medicina rada",
      icon: Briefcase,
      color: "oklch(0.60 0.10 130)",
      locationIds: ["poliklinika", "dom-zdravlja"],
    },
  ],

  services: [
    // ── Oftalmologija ──
    {
      id: "oft-pregled",
      name: "Oftalmološki pregled",
      description: "Kompletan pregled očiju sa procenom stanja vida, očnog dna i struktura oka.",
      duration: 20,
      price: 4000,
      specialtyId: "oftalmologija",
    },
    {
      id: "oft-dioptrija",
      name: "Pregled za dioptriju",
      description: "Precizno utvrđivanje dioptrije i preporuka za korekciju vida.",
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
      id: "oft-oct",
      name: "OCT snimak (optička koherentna tomografija)",
      description: "Visoko-rezolucioni snimak mrežnjače za dijagnostiku degenerativnih promena.",
      duration: 15,
      price: 4000,
      specialtyId: "oftalmologija",
    },
    {
      id: "oft-laser",
      name: "Konsultacija za lasersku korekciju vida",
      description:
        "Procena kandidature i plan za lasersku korekciju kratkovidosti ili dalekovidosti.",
      duration: 20,
      price: 3000,
      specialtyId: "oftalmologija",
    },
    {
      id: "oft-katarakta",
      name: "Pregled za kataraktu",
      description: "Specijalizovani pregled za procenu stanja sočiva i potrebe za operacijom.",
      duration: 20,
      price: 3500,
      specialtyId: "oftalmologija",
    },

    // ── Radiologija ──
    {
      id: "rad-mri",
      name: "Magnetna rezonanca (MRI)",
      description: "MRI snimak za preciznu dijagnostiku bez zračenja — mozak, kičma, zglobovi.",
      duration: 45,
      price: 15000,
      specialtyId: "radiologija",
      noProviderStep: true,
    },
    {
      id: "rad-msct",
      name: "MSCT snimanje",
      description: "Višeslojni CT skener za detaljnu dijagnostiku unutrašnjih organa i struktura.",
      duration: 30,
      price: 12000,
      specialtyId: "radiologija",
      noProviderStep: true,
    },
    {
      id: "rad-rtg",
      name: "Digitalni rendgen",
      description: "Digitalna radiografija sa minimalnom dozom zračenja i brzim nalazom.",
      duration: 10,
      price: 2500,
      specialtyId: "radiologija",
      noProviderStep: true,
    },
    {
      id: "rad-uzv-abdomen",
      name: "Ultrazvuk abdomena",
      description: "Ultrazvučni pregled trbušnih organa za sveobuhvatnu dijagnostiku.",
      duration: 20,
      price: 3500,
      specialtyId: "radiologija",
      noProviderStep: true,
    },
    {
      id: "rad-mamografija",
      name: "Digitalna mamografija",
      description: "Skrining dojki digitalnom mamografijom za ranu detekciju promena.",
      duration: 15,
      price: 4000,
      specialtyId: "radiologija",
      noProviderStep: true,
    },

    // ── Hirurgija ──
    {
      id: "hir-pregled",
      name: "Hirurški pregled",
      description: "Specijalistički hirurški pregled sa procenom i planom intervencije.",
      duration: 20,
      price: 4500,
      specialtyId: "hirurgija",
    },
    {
      id: "hir-plasticna",
      name: "Konsultacija za plastičnu hirurgiju",
      description:
        "Individualna konsultacija sa specijalistom plastične i rekonstruktivne hirurgije.",
      duration: 30,
      price: 5000,
      specialtyId: "hirurgija",
    },
    {
      id: "hir-vaskularna",
      name: "Pregled vaskularnog hirurga",
      description: "Procena stanja krvnih sudova sa planom dalje dijagnostike ili terapije.",
      duration: 20,
      price: 5000,
      specialtyId: "hirurgija",
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
      id: "gin-papa",
      name: "Papa test",
      description: "Bezbolno uzimanje brisa za skrining promena na grliću materice.",
      duration: 10,
      price: 2000,
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
      name: "Sistematski pregled",
      description: "Kompletan sistematski pregled za upis u vrtić ili školu.",
      duration: 30,
      price: 5000,
      specialtyId: "pedijatrija",
    },

    // ── Interna medicina ──
    {
      id: "int-pregled",
      name: "Internistički pregled",
      description: "Sveobuhvatni internistički pregled sa evaluacijom opšteg zdravstvenog stanja.",
      duration: 20,
      price: 4500,
      specialtyId: "interna",
    },
    {
      id: "int-ekg",
      name: "EKG",
      description: "Snimanje srčanog ritma — brzo i potpuno bezbolno.",
      duration: 10,
      price: 1500,
      specialtyId: "interna",
    },
    {
      id: "int-sistematski",
      name: "Kompletni sistematski pregled",
      description: "Sveobuhvatni sistematski pregled za kompletnu evaluaciju zdravlja.",
      duration: 60,
      price: 15000,
      specialtyId: "interna",
    },

    // ── Laboratorija ──
    {
      id: "lab-krvna",
      name: "Kompletna krvna slika",
      description: "Osnovni skrining opšteg stanja organizma iz kapi krvi.",
      duration: 10,
      price: 600,
      specialtyId: "laboratorija",
      noProviderStep: true,
    },
    {
      id: "lab-biohemija",
      name: "Biohemijske analize",
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
      price: 3000,
      specialtyId: "laboratorija",
      noProviderStep: true,
    },
    {
      id: "lab-tumor",
      name: "Tumor markeri",
      description: "Skrining tumorskih markera za ranu detekciju malignih oboljenja.",
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
      price: 3500,
      specialtyId: "medicina-rada",
      noProviderStep: true,
    },
    {
      id: "mr-sistematski",
      name: "Sistematski pregled za zaposlene",
      description: "Kompletan sistematski pregled za zaposlene po zakonskim standardima.",
      duration: 45,
      price: 8000,
      specialtyId: "medicina-rada",
      noProviderStep: true,
    },
  ],

  providers: [
    { id: "spec-oft", name: "Spec. oftalmologije", title: "Oftalmolog" },
    { id: "spec-hir", name: "Spec. hirurgije", title: "Hirurg" },
    { id: "spec-gin", name: "Spec. ginekologije", title: "Ginekolog" },
    { id: "spec-uro", name: "Spec. urologije", title: "Urolog" },
    { id: "spec-ped", name: "Spec. pedijatrije", title: "Pedijatar" },
    { id: "spec-int", name: "Spec. interne medicine", title: "Internista" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Ivana P.",
      service: "Oftalmološki pregled",
      text: "Pregled za kataraktu obavljen detaljno, OCT snimak odmah na licu mesta. Zakazala sam za sat vremena — bez čekanja u redu.",
    },
    {
      name: "Nenad D.",
      service: "MRI snimak",
      text: "MRI kolena gotov za 45 minuta, nalaz istog dana na mejl. Konačno ne moram do Beograda za MRI.",
    },
    {
      name: "Svetlana J.",
      service: "Ginekološki pregled",
      text: "Sve na jednom mestu — ginekolog, laboratorija i ultrazvuk. Zakazala online, došla i završila bez stresa.",
    },
  ],
  rating: { average: "4.9", count: 412 },
  gallery: medGallery({ icon: Eye, label: "Klinika Maja — oftalmologija" }),
  trust: MEDICAL_TRUST,

  business: cityBiz(
    "018 530 530",
    "info@majamedical.rs",
    "Niš",
    "18000",
    "Niš",
    "Pon – Sub 7-20h",
    "Mo-Sa 07:00-20:00",
  ),
  seo: {
    title: "Maja Medical — Zakažite pregled online · Niš",
    description:
      "Oftalmologija, MRI, MSCT i 9 specijalnosti u Nišu. Premium medicinski centar od 1994. — zakažite termin online za par klikova.",
  },
};
