import {
  Activity,
  Baby,
  BadgeCheck,
  Bone,
  Brain,
  CalendarCheck,
  Droplets,
  Ear,
  Eye,
  Gem,
  HeartHandshake,
  HeartPulse,
  Layers,
  Leaf,
  Microscope,
  Paintbrush,
  Scan,
  ScanFace,
  ScanSearch,
  Scissors,
  ShieldCheck,
  ShieldPlus,
  Sparkles,
  Stethoscope,
  Syringe,
  TestTube,
  ToyBrick,
  Wand2,
  Waves,
  Wind,
  Zap,
} from "lucide-react";
import { Brow, Massage, Nail, Tooth } from "@/components/demo-icons";

// Re-export types from demo-types so existing imports from "@/lib/demos" still work.
export type {
  ThemeName,
  DemoService,
  DemoSpecialty,
  DemoLocation,
  DemoProvider,
  DemoReview,
  DemoTrust,
  DemoGalleryItem,
  DemoConfig,
  DemoIcon,
} from "./demo-types";

import type { DemoConfig, DemoService, DemoSpecialty, DemoProvider, ThemeName } from "./demo-types";
import {
  medStats,
  beautyStats,
  MEDICAL_TRUST,
  BEAUTY_TRUST,
  medGallery,
  beautyGallery,
  bgBiz,
  MED_HOURS,
  MED_SCHEMA,
  BEAUTY_HOURS,
  BEAUTY_SCHEMA,
} from "./demo-types";

// ── Clinic-specific configs (isolated per file for safety) ───────────────────
import { poliklinika_human } from "./clinics/poliklinika-human";
import { poliklinika_nikolic } from "./clinics/poliklinika-nikolic";
import { poliklinika_danamed } from "./clinics/poliklinika-danamed";
import { poliklinika_goranova } from "./clinics/poliklinika-goranova";
import { poliklinika_varnava } from "./clinics/poliklinika-varnava";
import { poliklinika_maja } from "./clinics/poliklinika-maja";
import { poliklinika_magnetmd } from "./clinics/poliklinika-magnetmd";
import { poliklinika_vipmedical } from "./clinics/poliklinika-vipmedical";
import { klinika_elit } from "./clinics/klinika-elit";
import { mirabiliss } from "./clinics/mirabiliss";
import { bocokic } from "./clinics/bocokic";
import { naissa } from "./clinics/naissa";
import { sisi } from "./clinics/sisi";
import { hipokrat_group } from "./clinics/hipokrat-group";
import { neo_mag } from "./clinics/neo-mag";
import { longa_vita } from "./clinics/longa-vita";
import { aviva } from "./clinics/aviva";
import { magna_plus } from "./clinics/magna-plus";
import { poligin } from "./clinics/poligin";
import { aja_medika } from "./clinics/aja-medika";
import { prva_pedijatrija } from "./clinics/prva-pedijatrija";
import { rheuma_medica } from "./clinics/rheuma-medica";
import { kardio_medika } from "./clinics/kardio-medika";
import { ravena } from "./clinics/ravena";

// ── Configs ─────────────────────────────────────────────────────────────────

const CONFIGS: DemoConfig[] = [
  // ═══ MEDICINSKE SPECIJALNOSTI ═══
  {
    slug: "stomatolog",
    brand: "NOVA",
    category: "Stomatološka ordinacija · Beograd",
    name: "Stomatološka ordinacija Dr Marković",
    description:
      "Moderna stomatološka ordinacija sa kompletnim uslugama za celu porodicu — bezbolno, precizno i sa online zakazivanjem.",
    theme: "medical",
    hero: {
      lead: "Osmeh koji",
      emphasis: "govori za vas.",
      subtext:
        "Moderna, bezbolna stomatologija prilagođena vama. Zakažite pregled online i prepustite svoj osmeh našem timu specijalista.",
      icon: Tooth,
      stats: medStats("5.000+", "15"),
    },
    services: [
      {
        id: "pregled",
        name: "Stomatološki pregled",
        description: "Detaljan pregled sa planom terapije i savetima za negu.",
        duration: 30,
        price: 2500,
      },
      {
        id: "kamenac",
        name: "Uklanjanje kamenca",
        description: "Ultrazvučno čišćenje i poliranje za zdrave desni i svež dah.",
        duration: 30,
        price: 4500,
      },
      {
        id: "plomba",
        name: "Bela plomba",
        description: "Kompozitna plomba u boji zuba — estetski i trajno.",
        duration: 45,
        price: 4900,
        providerIds: ["ana", "jovana"],
      },
      {
        id: "beljenje",
        name: "Beljenje zuba",
        description: "Profesionalno beljenje do 8 nijansi — bezbedno po gleđ.",
        duration: 60,
        price: 19900,
        providerIds: ["ana"],
      },
      {
        id: "vadjenje",
        name: "Vađenje zuba",
        description: "Bezbolna intervencija uz savremenu anesteziju i brz oporavak.",
        duration: 45,
        price: 4900,
        providerIds: ["marko"],
      },
      {
        id: "ortodoncija",
        name: "Ortodontska konzultacija",
        description: "Procena zagrižaja i plan za savršeno poravnat osmeh.",
        duration: 30,
        price: 3000,
        providerIds: ["ana", "jovana"],
      },
    ],
    providers: [
      { id: "marko", name: "Dr Marko Marković", title: "Oralni hirurg" },
      { id: "ana", name: "Dr Ana Ilić", title: "Estetska stomatologija" },
      { id: "jovana", name: "Dr Jovana Perić", title: "Pedodontkinja" },
    ],
    providerLabel: "Izaberite doktora",
    reviews: [
      {
        name: "Marija S.",
        service: "Beljenje zuba",
        text: "Zakazala sam za 30 sekundi, bez čekanja na telefonu. A rezultat beljenja — kao iz reklame. Konačno!",
      },
      {
        name: "Nikola D.",
        service: "Vađenje zuba",
        text: "Umnjak izvađen za deset minuta, potpuno bezbolno i sve objašnjeno unapred. Više ne zovem pet puta da zakažem.",
      },
      {
        name: "Jelena P.",
        service: "Stomatološki pregled",
        text: "Izabrala sam termin koji mi odgovara, bez stresa. Ordinacija besprekorna, osoblje ljubazno.",
      },
    ],
    rating: { average: "4.9", count: 312 },
    gallery: [
      { icon: HeartHandshake, label: "Naš tim" },
      { icon: Sparkles, label: "Digitalna dijagnostika" },
      { icon: ShieldCheck, label: "Sterilizacija" },
    ],
    trust: [
      {
        icon: ShieldCheck,
        title: "Bezbolne intervencije",
        text: "Savremena anestezija i nežan pristup — i najveći strah nestaje.",
      },
      {
        icon: Sparkles,
        title: "Digitalna dijagnostika",
        text: "3D snimci i intraoralna kamera za preciznu i brzu dijagnozu.",
      },
      {
        icon: BadgeCheck,
        title: "Sterilno okruženje",
        text: "Sterilizacija instrumenata po najvišim evropskim standardima.",
      },
    ],
    business: bgBiz(
      "+381 11 123 45 67",
      "kontakt@novadental.rs",
      "Kralja Petra 12",
      MED_HOURS,
      MED_SCHEMA,
    ),
    seo: {
      title: "NOVA Dental Studio — Zakažite stomatološki pregled online",
      description:
        "Moderna, bezbolna stomatologija u Beogradu. Izaberite uslugu, doktora i termin — zakažite online za par klikova.",
    },
  },
  {
    slug: "stomatolog-tasa",
    brand: "TAŠA",
    category: "Stomatološka ordinacija · Beograd",
    name: "Stomatološka ordinacija Dr Taša",
    description:
      "Butik stomatološka ordinacija posvećena samo vama — pažljiva nega, bez žurbe, uz online zakazivanje u terminima pre i posle radnog dana.",
    theme: "medical",
    hero: {
      lead: "Vaš osmeh,",
      emphasis: "lično i pažljivo.",
      subtext:
        "Jedan doktor, puna posvećenost. Zakažite pregled online i dobijte termin koji stvarno odgovara vašem danu.",
      icon: Tooth,
      stats: medStats("3.100+", "11"),
    },
    services: [
      {
        id: "pregled",
        name: "Stomatološki pregled",
        description: "Detaljan pregled sa planom terapije i savetima za negu.",
        duration: 30,
        price: 2500,
      },
      {
        id: "kamenac",
        name: "Uklanjanje kamenca",
        description: "Ultrazvučno čišćenje i poliranje za zdrave desni i svež dah.",
        duration: 30,
        price: 4500,
      },
      {
        id: "plomba",
        name: "Bela plomba",
        description: "Kompozitna plomba u boji zuba — estetski i trajno.",
        duration: 45,
        price: 4900,
      },
      {
        id: "beljenje",
        name: "Beljenje zuba",
        description: "Profesionalno beljenje do 8 nijansi — bezbedno po gleđ.",
        duration: 60,
        price: 19900,
      },
      {
        id: "vadjenje",
        name: "Vađenje zuba",
        description: "Bezbolna intervencija uz savremenu anesteziju i brz oporavak.",
        duration: 45,
        price: 4900,
      },
      {
        id: "ortodoncija",
        name: "Ortodontska konzultacija",
        description: "Procena zagrižaja i plan za savršeno poravnat osmeh.",
        duration: 30,
        price: 3000,
      },
    ],
    providers: [{ id: "tasa", name: "Dr Milica Taša", title: "Stomatolog opšte prakse" }],
    providerLabel: "Izaberite doktora",
    /** Split shift — jutarnji i večernji blok, pauza 13–16h bez ponuđenih termina. */
    bookingHours: [
      { start: "08:00", end: "13:00" },
      { start: "16:00", end: "20:00" },
    ],
    reviews: [
      {
        name: "Dušan K.",
        service: "Beljenje zuba",
        text: "Termin u 17h posle posla — konačno ordinacija koja radi po mom rasporedu, ne obrnuto.",
      },
      {
        name: "Ivana T.",
        service: "Stomatološki pregled",
        text: "Doktorka Taša ima vremena za svakog pacijenta, ništa nije na brzinu. Preporučujem.",
      },
      {
        name: "Petar M.",
        service: "Vađenje zuba",
        text: "Zakazao ujutru pre posla, sve gotovo za pola sata. Bez čekanja, bez stresa.",
      },
    ],
    rating: { average: "5.0", count: 96 },
    gallery: medGallery({ icon: Sparkles, label: "Digitalna dijagnostika" }),
    trust: MEDICAL_TRUST,
    business: bgBiz(
      "+381 11 654 32 10",
      "kontakt@tasadental.rs",
      "Njegoševa 8",
      "Pon – Sub 08 – 13h i 16 – 20h",
      "Mo-Sa 08:00-13:00,Mo-Sa 16:00-20:00",
    ),
    seo: {
      title: "TAŠA Dental — Zakažite stomatološki pregled online",
      description:
        "Butik stomatološka ordinacija Dr Taša u Beogradu. Jutarnji i večernji termini — zakažite online za par klikova.",
    },
  },
  {
    slug: "stomatolog-bora",
    brand: "BORA",
    category: "Stomatološka ordinacija · Beograd",
    name: "Stomatološka ordinacija Dr Bora",
    description:
      "Savremena stomatološka ordinacija sa sopstvenom RTG dijagnostikom — kompletna nega i precizan uvid u stanje zuba na jednom mestu.",
    theme: "medical",
    hero: {
      lead: "Precizna nega,",
      emphasis: "od dijagnoze do osmeha.",
      subtext:
        "Pregled, terapija i digitalni RTG snimak na istoj adresi. Zakažite termin online, bez čekanja na uput.",
      icon: Tooth,
      stats: medStats("4.400+", "13"),
    },
    services: [
      {
        id: "pregled",
        name: "Stomatološki pregled",
        description: "Detaljan pregled sa planom terapije i savetima za negu.",
        duration: 30,
        price: 2500,
      },
      {
        id: "kamenac",
        name: "Uklanjanje kamenca",
        description: "Ultrazvučno čišćenje i poliranje za zdrave desni i svež dah.",
        duration: 30,
        price: 4500,
      },
      {
        id: "plomba",
        name: "Bela plomba",
        description: "Kompozitna plomba u boji zuba — estetski i trajno.",
        duration: 45,
        price: 4900,
      },
      {
        id: "beljenje",
        name: "Beljenje zuba",
        description: "Profesionalno beljenje do 8 nijansi — bezbedno po gleđ.",
        duration: 60,
        price: 19900,
        providerIds: ["jelena"],
      },
      {
        id: "vadjenje",
        name: "Vađenje zuba",
        description: "Bezbolna intervencija uz savremenu anesteziju i brz oporavak.",
        duration: 45,
        price: 4900,
        providerIds: ["bora"],
      },
      {
        id: "ortodoncija",
        name: "Ortodontska konzultacija",
        description: "Procena zagrižaja i plan za savršeno poravnat osmeh.",
        duration: 30,
        price: 3000,
        providerIds: ["jelena"],
      },
      {
        id: "rtg",
        name: "RTG snimanje",
        description: "Digitalni RTG snimak zuba za preciznu dijagnozu i plan terapije.",
        duration: 15,
        price: 2000,
      },
    ],
    providers: [
      { id: "bora", name: "Dr Borislav Tanasković", title: "Stomatolog opšte prakse" },
      { id: "jelena", name: "Dr Jelena Radulović", title: "Estetska stomatologija" },
    ],
    providerLabel: "Izaberite doktora",
    reviews: [
      {
        name: "Milena V.",
        service: "RTG snimanje",
        text: "Snimak, pregled i objašnjenje nalaza u istoj poseti — ne moram više nigde da vozim film.",
      },
      {
        name: "Ognjen P.",
        service: "Bela plomba",
        text: "Doktor Bora odmah vidi na RTG-u gde je problem, bez nagađanja. Sve brzo i precizno.",
      },
      {
        name: "Tijana S.",
        service: "Stomatološki pregled",
        text: "Zakazala online za dva dana, RTG odmah na licu mesta. Ozbiljna ordinacija.",
      },
    ],
    rating: { average: "4.9", count: 141 },
    gallery: medGallery({ icon: Scan, label: "Digitalni RTG" }),
    trust: MEDICAL_TRUST,
    business: bgBiz(
      "+381 11 321 09 87",
      "kontakt@boradental.rs",
      "Cvijićeva 15",
      MED_HOURS,
      MED_SCHEMA,
    ),
    seo: {
      title: "BORA Dental — Stomatolog i RTG dijagnostika online zakazivanje",
      description:
        "Stomatološka ordinacija Dr Bora u Beogradu, sa sopstvenim RTG snimanjem. Izaberite uslugu i termin — zakažite online.",
    },
  },
  {
    slug: "kardiolog",
    brand: "PULS",
    category: "Kardiološka ordinacija · Beograd",
    name: "Kardiološka ordinacija Dr Petrović",
    description:
      "Kompletna kardiološka dijagnostika i prevencija srčanih oboljenja — EKG, ultrazvuk srca i Holter, uz online zakazivanje.",
    theme: "medical",
    hero: {
      lead: "Srce u",
      emphasis: "sigurnim rukama.",
      subtext:
        "EKG, ultrazvuk srca, Holter i ergometrija — zakažite kardiološki pregled online, bez čekanja na liniji.",
      icon: HeartPulse,
      stats: medStats("6.200+", "18"),
    },
    services: [
      {
        id: "pregled",
        name: "Kardiološki pregled",
        description: "Klinički pregled sa procenom rizika i savetima za srce.",
        duration: 30,
        price: 4000,
      },
      {
        id: "ekg",
        name: "EKG",
        description: "Snimanje srčanog ritma — brzo i potpuno bezbolno.",
        duration: 20,
        price: 2000,
      },
      {
        id: "uzv",
        name: "Ultrazvuk srca",
        description: "Ehokardiografija za detaljan uvid u rad i strukturu srca.",
        duration: 30,
        price: 6000,
        providerIds: ["milica"],
      },
      {
        id: "holter",
        name: "Holter monitoring",
        description: "24-časovno praćenje ritma — postavljanje uređaja.",
        duration: 15,
        price: 3500,
        providerIds: ["nikola"],
      },
      {
        id: "ergo",
        name: "Ergometrija",
        description: "Test opterećenja za procenu rada srca u naporu.",
        duration: 45,
        price: 5500,
        providerIds: ["nikola"],
      },
    ],
    providers: [
      { id: "nikola", name: "Dr Nikola Petrović", title: "Kardiolog, subspecijalista" },
      { id: "milica", name: "Dr Milica Đurić", title: "Kardiolog, ehokardiografija" },
    ],
    providerLabel: "Izaberite doktora",
    reviews: [
      {
        name: "Dragan M.",
        service: "EKG",
        text: "Zakazao EKG za sutra, bez čekanja na liniji. Brzo, jednostavno i profesionalno.",
      },
      {
        name: "Snežana R.",
        service: "Ultrazvuk srca",
        text: "Konačno ne moram da zovem po tri puta da dobijem termin. Sve online, u par klikova.",
      },
      {
        name: "Miloš T.",
        service: "Kardiološki pregled",
        text: "Izabrao sam termin posle posla, idealno. Doktor je sve strpljivo objasnio.",
      },
    ],
    rating: { average: "4.9", count: 187 },
    gallery: medGallery({ icon: Activity, label: "EKG i Holter" }),
    trust: MEDICAL_TRUST,
    business: bgBiz(
      "+381 11 245 67 89",
      "ordinacija@pulskardio.rs",
      "Bulevar oslobođenja 42",
      MED_HOURS,
      MED_SCHEMA,
    ),
    seo: {
      title: "PULS Kardiologija — Zakažite kardiološki pregled online",
      description:
        "EKG, ultrazvuk srca, Holter i ergometrija u Beogradu. Izaberite uslugu i termin — zakažite online bez čekanja.",
    },
  },
  {
    slug: "ginekolog",
    brand: "VITA",
    category: "Ginekološka ordinacija · Beograd",
    name: "Ginekološka ordinacija Dr Jovanović",
    description:
      "Kompletna ginekološka zaštita — pregledi, ultrazvuk i praćenje trudnoće, privatno i diskretno, uz online zakazivanje.",
    theme: "medical",
    hero: {
      lead: "Vaše zdravlje,",
      emphasis: "naša briga.",
      subtext:
        "Privatno, diskretno i u terminu koji vama odgovara. Zakažite ginekološki pregled online, bez neprijatnih poziva.",
      icon: Baby,
      stats: medStats("4.800+", "14"),
    },
    services: [
      {
        id: "pregled",
        name: "Ginekološki pregled",
        description: "Kompletan pregled uz savet i preporuke.",
        duration: 30,
        price: 3500,
      },
      {
        id: "uzv",
        name: "Ultrazvuk",
        description: "Ultrazvučni pregled karlice — precizno i nežno.",
        duration: 20,
        price: 3000,
        providerIds: ["jelena", "ana"],
      },
      {
        id: "papa",
        name: "Papa test",
        description: "Bezbolno uzimanje brisa za ranu prevenciju.",
        duration: 15,
        price: 1800,
      },
      {
        id: "kolpo",
        name: "Kolposkopija",
        description: "Detaljan pregled grlića materice pod uvećanjem.",
        duration: 30,
        price: 4000,
        providerIds: ["jelena", "marija"],
      },
      {
        id: "trudnoca",
        name: "Konsultacija za trudnoću",
        description: "Praćenje i saveti u svakoj fazi trudnoće.",
        duration: 30,
        price: 3500,
        providerIds: ["jelena", "marija"],
      },
      {
        id: "ctg",
        name: "CTG",
        description: "Praćenje otkucaja bebe i kontrakcija.",
        duration: 30,
        price: 2500,
        providerIds: ["jelena", "marija"],
      },
    ],
    providers: [
      { id: "jelena", name: "Dr Jelena Jovanović", title: "Ginekolog-akušer" },
      { id: "marija", name: "Dr Marija Stanković", title: "Ginekolog-akušer" },
      { id: "ana", name: "Dr Ana Radulović", title: "Ginekolog, ultrazvučna dijagnostika" },
    ],
    providerLabel: "Izaberite doktora",
    reviews: [
      {
        name: "Ana K.",
        service: "Ginekološki pregled",
        text: "Zakazala pregled u dva klika, bez neprijatnih poziva. Sve diskretno i profesionalno.",
      },
      {
        name: "Ivana M.",
        service: "Ultrazvuk",
        text: "Birala sam termin i doktora sama. Mnogo bolje od čekanja da se neko javi na telefon.",
      },
      {
        name: "Milica Đ.",
        service: "Konsultacija za trudnoću",
        text: "Pratim trudnoću ovde, a zakazivanje je sada najlakši deo. Topla preporuka.",
      },
    ],
    rating: { average: "4.9", count: 241 },
    gallery: medGallery({ icon: Baby, label: "Praćenje trudnoće" }),
    trust: MEDICAL_TRUST,
    business: bgBiz(
      "+381 11 356 78 90",
      "ordinacija@vitagin.rs",
      "Njegoševa 15",
      MED_HOURS,
      MED_SCHEMA,
    ),
    seo: {
      title: "VITA Ginekologija — Zakažite ginekološki pregled online",
      description:
        "Ginekološki pregledi, ultrazvuk i praćenje trudnoće u Beogradu. Privatno i diskretno — zakažite online.",
    },
  },
  {
    slug: "oftalmolog",
    brand: "OKO",
    category: "Očna ordinacija · Novi Sad",
    name: "Očna ordinacija Dr Nikolić",
    description:
      "Kompletan oftalmološki pregled i dijagnostika — vid, očni pritisak i očno dno, uz online zakazivanje.",
    theme: "medical",
    hero: {
      lead: "Svet vidite",
      emphasis: "jasnije.",
      subtext:
        "Pregled vida, očnog pritiska i očnog dna — bez čekanja. Zakažite termin koji vama odgovara, online.",
      icon: Eye,
      stats: medStats("5.400+", "16"),
    },
    services: [
      {
        id: "vid",
        name: "Pregled vida",
        description: "Provera oštrine vida i dioptrije uz stručan savet.",
        duration: 30,
        price: 3000,
      },
      {
        id: "pritisak",
        name: "Merenje očnog pritiska",
        description: "Prevencija glaukoma — brzo i bezbolno.",
        duration: 15,
        price: 1500,
        providerIds: ["milan"],
      },
      {
        id: "dno",
        name: "Pregled očnog dna",
        description: "Rano otkrivanje promena na mrežnjači.",
        duration: 20,
        price: 2500,
        providerIds: ["milan"],
      },
      {
        id: "sociva",
        name: "Pregled za kontaktna sočiva",
        description: "Odabir i proba sočiva prilagođenih vašem oku.",
        duration: 30,
        price: 2500,
        providerIds: ["tamara"],
      },
      {
        id: "laser",
        name: "Laserska dijagnostika",
        description: "Precizna laserska analiza stanja oka.",
        duration: 30,
        price: 4000,
        providerIds: ["tamara"],
      },
    ],
    providers: [
      { id: "milan", name: "Dr Milan Nikolić", title: "Oftalmolog" },
      { id: "tamara", name: "Dr Tamara Ilić", title: "Oftalmolog, kontaktna sočiva" },
    ],
    providerLabel: "Izaberite doktora",
    reviews: [
      {
        name: "Stefan V.",
        service: "Pregled za kontaktna sočiva",
        text: "Zakazao pregled za kontaktna sočiva za sutra. Super brzo, bez ijednog poziva.",
      },
      {
        name: "Maja P.",
        service: "Pregled vida",
        text: "Ne moram da gubim pola dana na čekanje. Došla sam tačno u zakazano vreme.",
      },
      {
        name: "Petar N.",
        service: "Pregled očnog dna",
        text: "Jednostavno zakazivanje, tačno vreme, bez čekanja. Sve pohvale.",
      },
    ],
    rating: { average: "4.9", count: 156 },
    gallery: medGallery({ icon: Eye, label: "Dijagnostika vida" }),
    trust: MEDICAL_TRUST,
    business: {
      phone: "+381 21 456 789",
      phoneHref: "tel:+38121456789",
      email: "ordinacija@okovid.rs",
      street: "Zmaj Jovina 8",
      postalCode: "21000",
      city: "Novi Sad",
      address: "Zmaj Jovina 8, 21000 Novi Sad",
      hours: MED_HOURS,
      openingHoursSchema: MED_SCHEMA,
    },
    seo: {
      title: "OKO Oftalmologija — Zakažite pregled vida online",
      description:
        "Pregled vida, očnog pritiska i očnog dna u Novom Sadu. Izaberite uslugu i termin — zakažite online bez čekanja.",
    },
  },
  {
    slug: "orl",
    brand: "AUDIO",
    category: "ORL ordinacija · Beograd",
    name: "ORL ordinacija Dr Đorđević",
    description:
      "Specijalista za uvo, grlo i nos — pregledi, audiometrija, endoskopija i alergološki testovi, uz online zakazivanje.",
    theme: "medical",
    hero: {
      lead: "Čujte i dišite",
      emphasis: "punim plućima.",
      subtext:
        "Audiometrija, endoskopija i alergološki testovi — izaberite termin online i preskočite čekaonicu.",
      icon: Ear,
      stats: medStats("4.100+", "13"),
    },
    services: [
      {
        id: "pregled",
        name: "ORL pregled",
        description: "Pregled uva, grla i nosa uz stručan savet.",
        duration: 30,
        price: 3000,
      },
      {
        id: "audio",
        name: "Audiometrija",
        description: "Test sluha — precizno merenje po frekvencijama.",
        duration: 20,
        price: 2500,
        providerIds: ["jovana"],
      },
      {
        id: "timpano",
        name: "Timpanometrija",
        description: "Provera funkcije srednjeg uva.",
        duration: 15,
        price: 2000,
        providerIds: ["jovana"],
      },
      {
        id: "endo",
        name: "Endoskopija nosa",
        description: "Endoskopski pregled nosa i sinusa.",
        duration: 20,
        price: 3500,
        providerIds: ["stefan"],
      },
      {
        id: "alergo",
        name: "Alergološki testovi",
        description: "Kožni testovi za otkrivanje alergena.",
        duration: 30,
        price: 4500,
        providerIds: ["stefan"],
      },
    ],
    providers: [
      { id: "stefan", name: "Dr Stefan Đorđević", title: "ORL specijalista" },
      { id: "jovana", name: "Dr Jovana Radovanović", title: "ORL specijalista, audiologija" },
    ],
    providerLabel: "Izaberite doktora",
    reviews: [
      {
        name: "Dejan R.",
        service: "Audiometrija",
        text: "Zakazao audiometriju bez problema, stigao i gotov za pola sata. Efikasno.",
      },
      {
        name: "Zorana L.",
        service: "ORL pregled",
        text: "Konačno ne čekam sat vremena u čekaonici. Termin biram sama, online.",
      },
      {
        name: "Marko S.",
        service: "Endoskopija nosa",
        text: "Brzo zakazivanje, profesionalna usluga, sve objašnjeno. Preporučujem.",
      },
    ],
    rating: { average: "4.8", count: 143 },
    gallery: medGallery({ icon: Ear, label: "Audio dijagnostika" }),
    trust: MEDICAL_TRUST,
    business: bgBiz(
      "+381 11 467 89 01",
      "ordinacija@audioorl.rs",
      "Vojvode Stepe 55",
      MED_HOURS,
      MED_SCHEMA,
    ),
    seo: {
      title: "AUDIO ORL — Zakažite ORL pregled online",
      description:
        "Audiometrija, endoskopija i alergološki testovi u Beogradu. Izaberite uslugu i termin — zakažite online.",
    },
  },
  {
    slug: "dermatolog",
    brand: "DERMA",
    category: "Dermatološka ordinacija · Beograd",
    name: "Dermatološka ordinacija Dr Stojanović",
    description:
      "Pregledi kože, dermatoskopija i estetski tretmani — od prevencije do nege, uz online zakazivanje.",
    theme: "medical",
    hero: {
      lead: "Zdrava koža,",
      emphasis: "vidljiva razlika.",
      subtext:
        "Pregled mladeža, piling i mezoterapija — u terminu koji vama odgovara. Zakažite online, bez čekanja.",
      icon: ScanFace,
      stats: medStats("5.900+", "12"),
    },
    services: [
      {
        id: "pregled",
        name: "Dermatološki pregled",
        description: "Pregled kože, kose i noktiju uz savet za negu.",
        duration: 30,
        price: 3200,
      },
      {
        id: "dermatoskopija",
        name: "Dermatoskopija",
        description: "Digitalna analiza mladeža za ranu prevenciju.",
        duration: 20,
        price: 3500,
        providerIds: ["ivana", "nemanja"],
      },
      {
        id: "krio",
        name: "Krioterapija",
        description: "Uklanjanje promena zamrzavanjem — brzo i čisto.",
        duration: 15,
        price: 2500,
        providerIds: ["ivana", "nemanja"],
      },
      {
        id: "piling",
        name: "Hemijski piling",
        description: "Za sjajniju, glađu i ujednačeniju kožu.",
        duration: 45,
        price: 6000,
        providerIds: ["ivana", "milica"],
      },
      {
        id: "mezo",
        name: "Mezoterapija",
        description: "Revitalizacija kože koktelom vitamina.",
        duration: 45,
        price: 8000,
        providerIds: ["milica"],
      },
      {
        id: "mladez",
        name: "Uklanjanje mladeža",
        description: "Bezbedno uklanjanje uz histološku analizu.",
        duration: 30,
        price: 4500,
        providerIds: ["ivana", "nemanja"],
      },
    ],
    providers: [
      { id: "ivana", name: "Dr Ivana Stojanović", title: "Dermatolog" },
      { id: "nemanja", name: "Dr Nemanja Ristić", title: "Dermatovenerolog" },
      { id: "milica", name: "Dr Milica Antić", title: "Dermatolog, estetska dermatologija" },
    ],
    providerLabel: "Izaberite doktora",
    reviews: [
      {
        name: "Tamara V.",
        service: "Dermatoskopija",
        text: "Zakazala dermatoskopiju online, bez čekanja i zvanja. Sve pregledno i profesionalno.",
      },
      {
        name: "Igor K.",
        service: "Dermatološki pregled",
        text: "Izabrao sam termin posle posla, došao tačno na vreme. Bez gubljenja dana.",
      },
      {
        name: "Nevena M.",
        service: "Hemijski piling",
        text: "Piling sam zakazala za vikend — super opcija. Koža blista, presrećna sam.",
      },
    ],
    rating: { average: "4.9", count: 208 },
    gallery: medGallery({ icon: Sparkles, label: "Estetski tretmani" }),
    trust: MEDICAL_TRUST,
    business: bgBiz(
      "+381 11 578 90 12",
      "ordinacija@dermastudio.rs",
      "Makenzijeva 24",
      MED_HOURS,
      MED_SCHEMA,
    ),
    seo: {
      title: "DERMA Dermatologija — Zakažite dermatološki pregled online",
      description:
        "Pregledi kože, dermatoskopija i estetski tretmani u Beogradu. Izaberite uslugu i termin — zakažite online.",
    },
  },
  {
    slug: "endokrinolog",
    brand: "BALANS",
    category: "Endokrinološka ordinacija · Beograd",
    name: "Endokrinološka ordinacija Dr Pavlović",
    description:
      "Štitna žlezda, dijabetes i hormonski poremećaji — kompletna dijagnostika uz online zakazivanje.",
    theme: "medical",
    hero: {
      lead: "Hormoni u",
      emphasis: "ravnoteži.",
      subtext:
        "Ultrazvuk štitne žlezde i kontrola dijabetesa — brzo zakazivanje bez čekanja nedelju dana na telefonu.",
      icon: Activity,
      stats: medStats("3.900+", "17"),
    },
    services: [
      {
        id: "pregled",
        name: "Endokrinološki pregled",
        description: "Procena hormonskog statusa i metabolizma.",
        duration: 30,
        price: 3800,
      },
      {
        id: "uzv",
        name: "Ultrazvuk štitne žlezde",
        description: "Precizan nalaz stanja štitne žlezde.",
        duration: 20,
        price: 3000,
        providerIds: ["dragana"],
      },
      {
        id: "dijabetes",
        name: "Konsultacija za dijabetes",
        description: "Plan ishrane i terapije za kontrolu šećera.",
        duration: 30,
        price: 3500,
        providerIds: ["vladimir"],
      },
      {
        id: "kontrola",
        name: "Kontrolni pregled",
        description: "Kontrola sa tumačenjem nalaza i korekcijom terapije.",
        duration: 20,
        price: 2500,
      },
    ],
    providers: [
      { id: "dragana", name: "Dr Dragana Pavlović", title: "Endokrinolog" },
      { id: "vladimir", name: "Dr Vladimir Perić", title: "Endokrinolog, dijabetolog" },
    ],
    providerLabel: "Izaberite doktora",
    reviews: [
      {
        name: "Gordana S.",
        service: "Ultrazvuk štitne žlezde",
        text: "Kontrolni pregled štitne žlezde zakazan za dva klika. Nema više odugovlačenja.",
      },
      {
        name: "Branislav P.",
        service: "Konsultacija za dijabetes",
        text: "Ne moram više da čekam nedelju dana da se dogovorim telefonom. Sjajno rešenje.",
      },
      {
        name: "Vesna T.",
        service: "Endokrinološki pregled",
        text: "Praktično i moderno, doktorka strpljiva i temeljna. Preporučujem.",
      },
    ],
    rating: { average: "4.9", count: 129 },
    gallery: medGallery({ icon: Activity, label: "Ultrazvuk" }),
    trust: MEDICAL_TRUST,
    business: bgBiz(
      "+381 11 689 01 23",
      "ordinacija@balansendo.rs",
      "Resavska 30",
      MED_HOURS,
      MED_SCHEMA,
    ),
    seo: {
      title: "BALANS Endokrinologija — Zakažite pregled online",
      description:
        "Štitna žlezda, dijabetes i hormonska dijagnostika u Beogradu. Izaberite uslugu i termin — zakažite online.",
    },
  },
  {
    slug: "urolog",
    brand: "URO",
    category: "Urološka ordinacija · Beograd",
    name: "Urološka ordinacija Dr Kostić",
    description:
      "Kompletna urološka dijagnostika i pregledi — diskretno, precizno i uz online zakazivanje.",
    theme: "medical",
    hero: {
      lead: "Diskretno i",
      emphasis: "pouzdano.",
      subtext:
        "Ultrazvuk, uroflow i cistoskopija — u terminu koji vama odgovara. Zakažite online, bez poziva.",
      icon: Droplets,
      stats: medStats("3.600+", "15"),
    },
    services: [
      {
        id: "pregled",
        name: "Urološki pregled",
        description: "Pregled uz diskreciju i stručan savet.",
        duration: 30,
        price: 3500,
      },
      {
        id: "uzv-bubreg",
        name: "Ultrazvuk bubrega i bešike",
        description: "Ultrazvuk bubrega i mokraćne bešike.",
        duration: 20,
        price: 3000,
        providerIds: ["aleksandar"],
      },
      {
        id: "uzv-prostata",
        name: "Ultrazvuk prostate",
        description: "Ultrazvučni pregled prostate.",
        duration: 20,
        price: 3000,
        providerIds: ["aleksandar"],
      },
      {
        id: "uroflow",
        name: "Uroflow",
        description: "Merenje protoka mokraće — bezbolno.",
        duration: 15,
        price: 2000,
        providerIds: ["nemanja"],
      },
      {
        id: "cisto",
        name: "Cistoskopija",
        description: "Endoskopski pregled mokraćne bešike.",
        duration: 30,
        price: 5000,
        providerIds: ["nemanja"],
      },
    ],
    providers: [
      { id: "aleksandar", name: "Dr Aleksandar Kostić", title: "Urolog" },
      { id: "nemanja", name: "Dr Nemanja Vukićević", title: "Urolog, endoskopska hirurgija" },
    ],
    providerLabel: "Izaberite doktora",
    reviews: [
      {
        name: "Milan N.",
        service: "Urološki pregled",
        text: "Zakazao pregled diskretno, bez poziva. Baš to mi je trebalo — brzo i profesionalno.",
      },
      {
        name: "Zoran Đ.",
        service: "Ultrazvuk prostate",
        text: "Izabrao termin ujutru pre posla, odlično. Sve završeno na vreme.",
      },
      {
        name: "Predrag M.",
        service: "Uroflow",
        text: "Jednostavno i brzo zakazivanje, ljubazno osoblje. Preporuka.",
      },
    ],
    rating: { average: "4.8", count: 118 },
    gallery: medGallery({ icon: Droplets, label: "Ultrazvuk" }),
    trust: MEDICAL_TRUST,
    business: bgBiz(
      "+381 11 790 12 34",
      "ordinacija@urocentar.rs",
      "Kneza Miloša 60",
      MED_HOURS,
      MED_SCHEMA,
    ),
    seo: {
      title: "URO Urologija — Zakažite urološki pregled online",
      description:
        "Ultrazvuk, uroflow i cistoskopija u Beogradu. Diskretno zakazivanje — izaberite uslugu i termin online.",
    },
  },
  {
    slug: "neurolog",
    brand: "NEURO",
    category: "Neurološka ordinacija · Novi Sad",
    name: "Neurološka ordinacija Dr Mitić",
    description:
      "Neurološki pregledi, EEG, EMNG i Doppler dijagnostika — uz online zakazivanje bez čekanja.",
    theme: "medical",
    hero: {
      lead: "Um i telo",
      emphasis: "u skladu.",
      subtext:
        "EEG, EMNG i Doppler — izaberite termin online, bez čekanja nedelju dana na telefonu.",
      icon: Brain,
      stats: medStats("3.300+", "16"),
    },
    services: [
      {
        id: "pregled",
        name: "Neurološki pregled",
        description: "Pregled sa procenom simptoma i plana.",
        duration: 30,
        price: 3800,
      },
      {
        id: "eeg",
        name: "EEG",
        description: "Snimanje moždane aktivnosti — bezbolno.",
        duration: 30,
        price: 3500,
        providerIds: ["sanja"],
      },
      {
        id: "emng",
        name: "EMNG",
        description: "Ispitivanje živaca i mišića.",
        duration: 45,
        price: 5000,
        providerIds: ["sanja"],
      },
      {
        id: "doppler",
        name: "Doppler krvnih sudova vrata",
        description: "Ultrazvuk krvnih sudova vrata.",
        duration: 20,
        price: 3000,
        providerIds: ["bojan"],
      },
      {
        id: "glavobolje",
        name: "Konsultacija za glavobolje",
        description: "Plan dijagnostike i terapije za glavobolje.",
        duration: 30,
        price: 3500,
        providerIds: ["bojan"],
      },
    ],
    providers: [
      { id: "bojan", name: "Dr Bojan Mitić", title: "Neurolog" },
      { id: "sanja", name: "Dr Sanja Kovačević", title: "Neurolog, neurofiziologija" },
    ],
    providerLabel: "Izaberite doktora",
    reviews: [
      {
        name: "Darko V.",
        service: "EMNG",
        text: "EMNG sam zakazao za sutradan — inače bih čekao nedelju dana. Ogromna razlika.",
      },
      {
        name: "Mirjana K.",
        service: "Neurološki pregled",
        text: "Bez stresa oko zakazivanja, sve online. Doktor temeljno objasnio nalaz.",
      },
      {
        name: "Dejan L.",
        service: "EEG",
        text: "Profesionalno i efikasno, od termina do nalaza. Sve pohvale.",
      },
    ],
    rating: { average: "4.9", count: 134 },
    gallery: medGallery({ icon: Brain, label: "EEG i EMNG" }),
    trust: MEDICAL_TRUST,
    business: {
      phone: "+381 21 567 890",
      phoneHref: "tel:+38121567890",
      email: "ordinacija@neurocentar.rs",
      street: "Bulevar oslobođenja 100",
      postalCode: "21000",
      city: "Novi Sad",
      address: "Bulevar oslobođenja 100, 21000 Novi Sad",
      hours: MED_HOURS,
      openingHoursSchema: MED_SCHEMA,
    },
    seo: {
      title: "NEURO Neurologija — Zakažite neurološki pregled online",
      description:
        "EEG, EMNG i Doppler dijagnostika u Novom Sadu. Izaberite uslugu i termin — zakažite online bez čekanja.",
    },
  },
  {
    slug: "internista",
    brand: "MEDIS",
    category: "Internistička ordinacija · Beograd",
    name: "Internistička ordinacija Dr Živković",
    description:
      "Kompletni internistički pregledi i ultrazvučna dijagnostika — jedno mesto za vaše zdravlje, uz online zakazivanje.",
    theme: "medical",
    hero: {
      lead: "Celovita briga",
      emphasis: "o zdravlju.",
      subtext:
        "Ultrazvuk abdomena, spirometrija i laboratorija — bez čekanja. Izaberite doktora i termin online.",
      icon: Stethoscope,
      stats: medStats("5.100+", "19"),
    },
    services: [
      {
        id: "pregled",
        name: "Internistički pregled",
        description: "Kompletan pregled i stručan savet.",
        duration: 30,
        price: 3500,
      },
      {
        id: "uzv",
        name: "Ultrazvuk abdomena",
        description: "Ultrazvuk trbušnih organa.",
        duration: 20,
        price: 3200,
        providerIds: ["milos", "tatjana"],
      },
      {
        id: "lab",
        name: "Laboratorijske analize — prijem",
        description: "Uzorkovanje krvi za analize.",
        duration: 10,
        price: 800,
      },
      {
        id: "spiro",
        name: "Spirometrija",
        description: "Test plućne funkcije — brzo i jednostavno.",
        duration: 15,
        price: 2200,
        providerIds: ["vesna", "milos"],
      },
      {
        id: "kontrola",
        name: "Kontrolni pregled",
        description: "Kontrola sa tumačenjem nalaza.",
        duration: 20,
        price: 2500,
      },
    ],
    providers: [
      { id: "milos", name: "Dr Miloš Živković", title: "Internista" },
      { id: "tatjana", name: "Dr Tatjana Vasić", title: "Internista, kardiolog" },
      { id: "vesna", name: "Dr Vesna Kovačević", title: "Internista, pulmolog" },
    ],
    providerLabel: "Izaberite doktora",
    reviews: [
      {
        name: "Slobodan R.",
        service: "Ultrazvuk abdomena",
        text: "Ultrazvuk zakazan za danas, bez ijednog dana čekanja. Brzo i uredno.",
      },
      {
        name: "Ljiljana M.",
        service: "Internistički pregled",
        text: "Izabrala sam doktora i termin sama — mnogo bolje od poziva i čekanja.",
      },
      {
        name: "Nenad S.",
        service: "Kontrolni pregled",
        text: "Kontrolni pregled zakazan u dva klika. Sve na vreme i profesionalno.",
      },
    ],
    rating: { average: "4.9", count: 176 },
    gallery: medGallery({ icon: Microscope, label: "Ultrazvuk i lab" }),
    trust: MEDICAL_TRUST,
    business: bgBiz(
      "+381 11 801 23 45",
      "ordinacija@medisinterna.rs",
      "Takovska 45",
      MED_HOURS,
      MED_SCHEMA,
    ),
    seo: {
      title: "MEDIS Internistika — Zakažite internistički pregled online",
      description:
        "Ultrazvuk abdomena, spirometrija i laboratorija u Beogradu. Izaberite doktora i termin — zakažite online.",
    },
  },
  {
    slug: "laboratorija",
    brand: "MEDILAB",
    category: "Biohemijska laboratorija · Beograd",
    name: "Laboratorija MediLab",
    description:
      "Privatna biohemijska laboratorija — krvna slika, hormoni i alergije. Zakažite termin i preskočite red.",
    theme: "medical",
    hero: {
      lead: "Rezultati bez",
      emphasis: "čekanja u redu.",
      subtext:
        "Izaberite termin ujutru i dođite bez čekanja. Vađenje krvi, biohemija, hormoni i alergološki paneli.",
      icon: TestTube,
      stats: medStats("12.000+", "11"),
    },
    services: [
      {
        id: "krvna",
        name: "Kompletna krvna slika",
        description: "Osnovni skrining opšteg stanja organizma.",
        duration: 10,
        price: 900,
      },
      {
        id: "biohemija",
        name: "Biohemijske analize",
        description: "Šećer, holesterol, jetra, bubrezi i više.",
        duration: 10,
        price: 1500,
      },
      {
        id: "hormoni",
        name: "Hormonski panel",
        description: "Štitna žlezda i polni hormoni.",
        duration: 10,
        price: 2500,
      },
      {
        id: "urin",
        name: "Urin analiza",
        description: "Brza i precizna analiza urina.",
        duration: 5,
        price: 500,
      },
      {
        id: "alergo",
        name: "Alergološki panel",
        description: "Najčešći inhalatorni i nutritivni alergeni.",
        duration: 15,
        price: 4000,
      },
      {
        id: "bris",
        name: "Bris grla / nosa",
        description: "Uzorkovanje uz brzi nalaz.",
        duration: 5,
        price: 700,
      },
    ],
    providers: [],
    providerLabel: "",
    reviews: [
      {
        name: "Marina K.",
        service: "Kompletna krvna slika",
        text: "Zakazala za 7 ujutru, došla, izvadila krv, otišla za pet minuta. Bez reda!",
      },
      {
        name: "Dragan P.",
        service: "Biohemijske analize",
        text: "Više ne čekam u redu od šest ujutru. Zakazao online, došao tačno na vreme.",
      },
      {
        name: "Svetlana J.",
        service: "Hormonski panel",
        text: "Konačno normalan sistem za laboratoriju. Brzo, uredno i bez gužve.",
      },
    ],
    rating: { average: "4.9", count: 402 },
    gallery: [
      { icon: TestTube, label: "Uzorkovanje" },
      { icon: Microscope, label: "Analiza" },
      { icon: ShieldCheck, label: "Kontrola kvaliteta" },
    ],
    trust: [
      {
        icon: CalendarCheck,
        title: "Termin bez reda",
        text: "Izaberite vreme ujutru i dođite bez čekanja u redu.",
      },
      { icon: Zap, title: "Brzi nalazi", text: "Rezultati istog dana, dostupni i online." },
      {
        icon: ShieldCheck,
        title: "Kontrola kvaliteta",
        text: "Akreditovane metode i redovna interna kontrola.",
      },
    ],
    business: bgBiz(
      "+381 11 912 34 56",
      "info@medilab.rs",
      "Bulevar kralja Aleksandra 73",
      "Pon – Sub 07 – 15h",
      "Mo-Sa 07:00-15:00",
    ),
    seo: {
      title: "MediLab — Zakažite vađenje krvi online",
      description:
        "Privatna biohemijska laboratorija u Beogradu. Krvna slika, hormoni i alergije — zakažite termin i preskočite red.",
    },
  },

  {
    slug: "poliklinika",
    brand: "MEDIS",
    category: "Poliklinika · Beograd",
    name: "Poliklinika MEDIS",
    description:
      "Velika poliklinika sa pet specijalnosti pod jednim krovom — kardiologija, dermatologija, endokrinologija, ginekologija i laboratorija, uz online zakazivanje.",
    theme: "medical",
    hero: {
      lead: "Sve specijalnosti,",
      emphasis: "jedno mesto.",
      subtext:
        "Kardiologija, dermatologija, endokrinologija, ginekologija i laboratorija — izaberite specijalnost, lekara i termin online, bez čekanja na liniji.",
      icon: Stethoscope,
      stats: medStats("9.700+", "20"),
    },
    specialties: [
      { id: "kardiologija", name: "Kardiologija", icon: HeartPulse, color: "oklch(0.6 0.15 25)" },
      { id: "dermatologija", name: "Dermatologija", icon: ScanFace, color: "oklch(0.55 0.11 310)" },
      {
        id: "endokrinologija",
        name: "Endokrinologija",
        icon: Activity,
        color: "oklch(0.75 0.12 95)",
      },
      { id: "ginekologija", name: "Ginekologija", icon: Baby, color: "oklch(0.68 0.12 350)" },
      { id: "laboratorija", name: "Laboratorija", icon: TestTube, color: "oklch(0.6 0.1 165)" },
    ],
    services: [
      // Kardiologija
      {
        id: "kardio-pregled",
        name: "Kardiološki pregled",
        description: "Klinički pregled sa procenom rizika i savetima za srce.",
        duration: 30,
        price: 4000,
        specialtyId: "kardiologija",
        providerIds: ["nikola", "jovana"],
      },
      {
        id: "kardio-ekg",
        name: "EKG",
        description: "Snimanje srčanog ritma — brzo i potpuno bezbolno.",
        duration: 20,
        price: 2000,
        specialtyId: "kardiologija",
        providerIds: ["nikola", "jovana", "marko"],
      },
      {
        id: "kardio-uzv",
        name: "Ultrazvuk srca",
        description: "Ehokardiografija za detaljan uvid u rad i strukturu srca.",
        duration: 30,
        price: 6000,
        specialtyId: "kardiologija",
        providerIds: ["marko", "nikola"],
      },
      {
        id: "kardio-holter",
        name: "Holter monitoring",
        description: "24-časovno praćenje srčanog ritma — postavljanje uređaja.",
        duration: 15,
        price: 3500,
        specialtyId: "kardiologija",
        providerIds: ["nikola", "jovana"],
      },
      {
        id: "kardio-ergo",
        name: "Ergometrija",
        description: "Test opterećenja za procenu rada srca u naporu.",
        duration: 45,
        price: 5500,
        specialtyId: "kardiologija",
        providerIds: ["nikola", "marko"],
      },
      {
        id: "kardio-holter-pritiska",
        name: "24h monitoring krvnog pritiska",
        description: "Holter pritiska za praćenje varijacija tokom dana i noći.",
        duration: 15,
        price: 3000,
        specialtyId: "kardiologija",
        providerIds: ["nikola", "jovana"],
      },
      {
        id: "kardio-kontrola",
        name: "Kontrolni kardiološki pregled",
        description: "Kontrola sa tumačenjem nalaza i korekcijom terapije.",
        duration: 20,
        price: 2500,
        specialtyId: "kardiologija",
        providerIds: ["nikola", "jovana", "marko"],
      },
      // Dermatologija
      {
        id: "derma-pregled",
        name: "Dermatološki pregled",
        description: "Pregled kože, kose i noktiju uz savet za negu.",
        duration: 30,
        price: 3200,
        specialtyId: "dermatologija",
        providerIds: ["ivana", "nemanja", "tijana"],
      },
      {
        id: "derma-dermatoskopija",
        name: "Dermatoskopija",
        description: "Digitalna analiza mladeža za ranu prevenciju.",
        duration: 20,
        price: 3500,
        specialtyId: "dermatologija",
        providerIds: ["ivana", "nemanja", "tijana"],
      },
      {
        id: "derma-krio",
        name: "Krioterapija",
        description: "Uklanjanje promena zamrzavanjem — brzo i čisto.",
        duration: 15,
        price: 2500,
        specialtyId: "dermatologija",
        providerIds: ["ivana", "tijana"],
      },
      {
        id: "derma-piling",
        name: "Hemijski piling",
        description: "Za sjajniju, glađu i ujednačeniju kožu.",
        duration: 45,
        price: 6000,
        specialtyId: "dermatologija",
        providerIds: ["ivana", "tijana"],
      },
      {
        id: "derma-mezo",
        name: "Mezoterapija",
        description: "Revitalizacija kože koktelom vitamina.",
        duration: 45,
        price: 8000,
        specialtyId: "dermatologija",
        providerIds: ["ivana", "tijana"],
      },
      {
        id: "derma-mladez",
        name: "Uklanjanje mladeža",
        description: "Bezbedno uklanjanje uz histološku analizu.",
        duration: 30,
        price: 4500,
        specialtyId: "dermatologija",
        providerIds: ["ivana", "nemanja"],
      },
      {
        id: "derma-akne",
        name: "Tretman akni",
        description: "Individualni protokol za problematičnu i aknoznu kožu.",
        duration: 30,
        price: 3800,
        specialtyId: "dermatologija",
        providerIds: ["ivana", "tijana"],
      },
      // Endokrinologija
      {
        id: "endo-pregled",
        name: "Endokrinološki pregled",
        description: "Procena hormonskog statusa i metabolizma.",
        duration: 30,
        price: 3800,
        specialtyId: "endokrinologija",
        providerIds: ["dragana", "aleksandar"],
      },
      {
        id: "endo-uzv",
        name: "Ultrazvuk štitne žlezde",
        description: "Precizan nalaz stanja štitne žlezde.",
        duration: 20,
        price: 3000,
        specialtyId: "endokrinologija",
        providerIds: ["dragana", "aleksandar"],
      },
      {
        id: "endo-dijabetes",
        name: "Konsultacija za dijabetes",
        description: "Plan ishrane i terapije za kontrolu šećera.",
        duration: 30,
        price: 3500,
        specialtyId: "endokrinologija",
        providerIds: ["dragana", "aleksandar"],
      },
      {
        id: "endo-kontrola",
        name: "Kontrolni pregled",
        description: "Kontrola sa tumačenjem nalaza i korekcijom terapije.",
        duration: 20,
        price: 2500,
        specialtyId: "endokrinologija",
        providerIds: ["dragana", "aleksandar"],
      },
      {
        id: "endo-punkcija",
        name: "Punkcija čvora štitne žlezde",
        description: "Citološka punkcija pod ultrazvučnom kontrolom.",
        duration: 30,
        price: 5500,
        specialtyId: "endokrinologija",
        providerIds: ["dragana"],
      },
      {
        id: "endo-denso",
        name: "Densitometrija",
        description: "Merenje gustine kostiju za procenu osteoporoze.",
        duration: 20,
        price: 3200,
        specialtyId: "endokrinologija",
        providerIds: ["aleksandar"],
      },
      {
        id: "endo-gojaznost",
        name: "Konsultacija za gojaznost i metabolizam",
        description: "Plan terapije i ishrane prilagođen metaboličkom statusu.",
        duration: 30,
        price: 3500,
        specialtyId: "endokrinologija",
        providerIds: ["dragana", "aleksandar"],
      },
      // Ginekologija
      {
        id: "gin-pregled",
        name: "Ginekološki pregled",
        description: "Kompletan pregled uz savet i preporuke.",
        duration: 30,
        price: 3500,
        specialtyId: "ginekologija",
        providerIds: ["jelena", "marija"],
      },
      {
        id: "gin-uzv",
        name: "Ultrazvuk karlice",
        description: "Ultrazvučni pregled karlice — precizno i nežno.",
        duration: 20,
        price: 3000,
        specialtyId: "ginekologija",
        providerIds: ["jelena", "marija", "ana", "sara"],
      },
      {
        id: "gin-papa",
        name: "Papa test",
        description: "Bezbolno uzimanje brisa za ranu prevenciju.",
        duration: 15,
        price: 1800,
        specialtyId: "ginekologija",
        providerIds: ["jelena", "marija", "ana", "sara"],
      },
      {
        id: "gin-hpv",
        name: "HPV test",
        description: "Molekularna analiza za rano otkrivanje HPV infekcije.",
        duration: 15,
        price: 3500,
        specialtyId: "ginekologija",
        providerIds: ["jelena", "marija", "ana", "sara"],
      },
      {
        id: "gin-kolpo",
        name: "Kolposkopija",
        description: "Detaljan pregled grlića materice pod uvećanjem.",
        duration: 30,
        price: 4000,
        specialtyId: "ginekologija",
        providerIds: ["jelena", "marija"],
      },
      {
        id: "gin-trudnoca",
        name: "Konsultacija za trudnoću",
        description: "Praćenje i saveti u svakoj fazi trudnoće.",
        duration: 30,
        price: 3500,
        specialtyId: "ginekologija",
        providerIds: ["jelena", "marija"],
      },
      {
        id: "gin-ctg",
        name: "CTG",
        description: "Praćenje otkucaja bebe i kontrakcija.",
        duration: 30,
        price: 2500,
        specialtyId: "ginekologija",
        providerIds: ["jelena", "marija"],
      },
      // Laboratorija
      {
        id: "lab-krvna",
        name: "Kompletna krvna slika",
        description: "Osnovni skrining opšteg stanja organizma.",
        duration: 10,
        price: 900,
        specialtyId: "laboratorija",
        noProviderStep: true,
      },
      {
        id: "lab-biohemija",
        name: "Biohemijske analize",
        description: "Šećer, holesterol, jetra, bubrezi i više.",
        duration: 10,
        price: 1500,
        specialtyId: "laboratorija",
        noProviderStep: true,
      },
      {
        id: "lab-hormoni",
        name: "Hormonski panel",
        description: "Štitna žlezda i polni hormoni.",
        duration: 10,
        price: 2500,
        specialtyId: "laboratorija",
        noProviderStep: true,
      },
      {
        id: "lab-urin",
        name: "Urin analiza",
        description: "Brza i precizna analiza urina.",
        duration: 5,
        price: 500,
        specialtyId: "laboratorija",
        noProviderStep: true,
      },
      {
        id: "lab-alergo",
        name: "Alergološki panel",
        description: "Najčešći inhalatorni i nutritivni alergeni.",
        duration: 15,
        price: 4000,
        specialtyId: "laboratorija",
        noProviderStep: true,
      },
      {
        id: "lab-bris",
        name: "Bris grla / nosa",
        description: "Uzorkovanje uz brzi nalaz.",
        duration: 5,
        price: 700,
        specialtyId: "laboratorija",
        noProviderStep: true,
      },
      {
        id: "lab-vitamin",
        name: "Vitamin D i minerali",
        description: "Provera nivoa vitamina D, kalcijuma i magnezijuma.",
        duration: 10,
        price: 1800,
        specialtyId: "laboratorija",
        noProviderStep: true,
      },
    ],
    providers: [
      { id: "nikola", name: "Dr Nikola Petrović", title: "Kardiolog" },
      { id: "jovana", name: "Dr Jovana Ilić", title: "Kardiolog" },
      { id: "marko", name: "Dr Marko Radović", title: "Kardiolog, ehokardiografija" },
      { id: "ivana", name: "Dr Ivana Stojanović", title: "Dermatolog" },
      { id: "nemanja", name: "Dr Nemanja Ristić", title: "Dermatovenerolog" },
      { id: "tijana", name: "Dr Tijana Vuković", title: "Dermatolog" },
      { id: "dragana", name: "Dr Dragana Pavlović", title: "Endokrinolog" },
      { id: "aleksandar", name: "Dr Aleksandar Simić", title: "Endokrinolog" },
      { id: "jelena", name: "Dr Jelena Jovanović", title: "Ginekolog-akušer" },
      { id: "marija", name: "Dr Marija Stanković", title: "Ginekolog-akušer" },
      { id: "ana", name: "Dr Ana Milošević", title: "Ginekolog" },
      { id: "sara", name: "Dr Sara Đukić", title: "Ginekolog" },
    ],
    providerLabel: "Izaberite lekara",
    reviews: [
      {
        name: "Vladimir T.",
        service: "Kardiološki pregled",
        text: "Sve specijalnosti na jednom mestu — zakazao sam EKG i pregled istog dana, bez trčanja po gradu.",
      },
      {
        name: "Milica R.",
        service: "Dermatološki pregled",
        text: "Izabrala sam specijalnost, uslugu i doktorku za tri klika. Mnogo lakše od zvanja i čekanja.",
      },
      {
        name: "Petar J.",
        service: "Vađenje krvi — analize",
        text: "Za laboratoriju nisam ni birao doktora, samo termin ujutru. Brzo i jednostavno.",
      },
    ],
    rating: { average: "4.9", count: 356 },
    gallery: medGallery({ icon: Stethoscope, label: "Pet specijalnosti" }),
    trust: MEDICAL_TRUST,
    business: bgBiz(
      "+381 11 934 56 78",
      "zakazivanje@poliklinikamedis.rs",
      "Bulevar despota Stefana 15",
      MED_HOURS,
      MED_SCHEMA,
    ),
    seo: {
      title: "Poliklinika MEDIS — Zakažite pregled online",
      description:
        "Kardiologija, dermatologija, endokrinologija, ginekologija i laboratorija pod jednim krovom u Beogradu. Izaberite specijalnost, lekara i termin — zakažite online.",
    },
  },
  {
    slug: "pedijatrija",
    brand: "RASTI",
    category: "Pedijatrijska ordinacija · Beograd",
    name: "Pedijatrijska ordinacija Dr Anđelković",
    description:
      "Kompletna nega za vaše najmlađe — sistematski pregledi, vakcinacija i ultrazvučna dijagnostika, uz online zakazivanje bez čekanja u čekaonici punoj dece.",
    theme: "medical",
    hero: {
      lead: "Rast i razvoj",
      emphasis: "pod pravom brigom.",
      subtext:
        "Sistematski pregled, vakcinacija, ultrazvuk kukova — zakažite termin za vaše dete online, bez čekanja.",
      icon: ToyBrick,
      stats: medStats("6.300+", "17"),
    },
    services: [
      {
        id: "pregled",
        name: "Pedijatrijski pregled",
        description: "Klinički pregled deteta uz savet i preporuke za roditelje.",
        duration: 30,
        price: 3000,
      },
      {
        id: "sistematski",
        name: "Sistematski pregled",
        description: "Kompletan sistematski pregled za upis u vrtić ili školu.",
        duration: 45,
        price: 3500,
        providerIds: ["jovana", "nikola"],
      },
      {
        id: "vakcinacija",
        name: "Vakcinacija",
        description: "Imunizacija po nacionalnom i preporučenom kalendaru.",
        duration: 20,
        price: 1500,
      },
      {
        id: "uzv-kukova",
        name: "Ultrazvuk kukova (odojčad)",
        description: "Rani skrining razvojnog poremećaja kuka.",
        duration: 20,
        price: 3000,
        providerIds: ["nikola"],
      },
      {
        id: "uzv-abdomen",
        name: "Ultrazvuk abdomena",
        description: "Ultrazvučni pregled trbušnih organa kod dece.",
        duration: 20,
        price: 3200,
        providerIds: ["jovana", "nikola"],
      },
      {
        id: "alergo",
        name: "Alergološko testiranje",
        description: "Otkrivanje alergena koji izazivaju dečije tegobe.",
        duration: 30,
        price: 4000,
        providerIds: ["milica"],
      },
      {
        id: "spiro",
        name: "Spirometrija",
        description: "Test plućne funkcije kod dece sa astmom i alergijama.",
        duration: 15,
        price: 2200,
        providerIds: ["milica", "jovana"],
      },
      {
        id: "kontrola",
        name: "Kontrolni pregled",
        description: "Kontrola toka terapije i tumačenje nalaza.",
        duration: 20,
        price: 2200,
      },
    ],
    providers: [
      { id: "jovana", name: "Dr Jovana Anđelković", title: "Pedijatar" },
      { id: "nikola", name: "Dr Nikola Backović", title: "Pedijatar, neonatolog" },
      { id: "milica", name: "Dr Milica Ćosić", title: "Pedijatar, alergolog" },
    ],
    providerLabel: "Izaberite pedijatra",
    reviews: [
      {
        name: "Katarina M.",
        service: "Vakcinacija",
        text: "Zakazala vakcinaciju za bebu bez čekanja u punoj čekaonici sa bolesnom decom. Ogromna razlika.",
      },
      {
        name: "Nemanja S.",
        service: "Ultrazvuk kukova (odojčad)",
        text: "Ultrazvuk kukova zakazan za sledeći dan, umesto nedelju dana čekanja. Doktor sve strpljivo objasnio.",
      },
      {
        name: "Ivana P.",
        service: "Sistematski pregled",
        text: "Sistematski pregled pred upis u vrtić zakazala sam za pet minuta, bez zvanja i čekanja na liniji.",
      },
    ],
    rating: { average: "4.9", count: 289 },
    gallery: medGallery({ icon: Syringe, label: "Vakcinacija" }),
    trust: [
      {
        icon: ShieldPlus,
        title: "Bezbedna vakcinacija",
        text: "Sve vakcine po nacionalnom i preporučenom kalendaru, uz punu evidenciju.",
      },
      {
        icon: HeartHandshake,
        title: "Pristup prilagođen deci",
        text: "Nežan i strpljiv pristup koji smanjuje strah od poseta lekaru.",
      },
      {
        icon: ShieldCheck,
        title: "Odvojena čekaonica",
        text: "Posebna čekaonica za bolesnu i zdravu decu, po najvišim standardima.",
      },
    ],
    business: bgBiz(
      "+381 11 555 66 77",
      "ordinacija@rastipedi.rs",
      "Vojislava Ilića 40",
      MED_HOURS,
      MED_SCHEMA,
    ),
    seo: {
      title: "RASTI Pedijatrija — Zakažite pedijatrijski pregled online",
      description:
        "Sistematski pregledi, vakcinacija i ultrazvuk kukova u Beogradu. Izaberite pedijatra i termin — zakažite online bez čekanja.",
    },
  },
  {
    slug: "ortopedija",
    brand: "ORTO",
    category: "Ortopedska ordinacija · Beograd",
    name: "Ortopedska ordinacija Dr Radović",
    description:
      "Pregledi, dijagnostika i fizikalna terapija za probleme sa kostima, zglobovima i kičmom.",
    theme: "medical",
    hero: {
      lead: "Pokret bez",
      emphasis: "bola i čekanja.",
      subtext:
        "Pregled, ultrazvuk zgloba, fizikalna terapija — izaberite termin bez čekanja.",
      icon: Bone,
      stats: medStats("4.400+", "14"),
    },
    services: [
      {
        id: "pregled",
        name: "Ortopedski pregled",
        description: "Klinički pregled kostiju, zglobova i kičme uz plan terapije.",
        duration: 30,
        price: 3500,
      },
      {
        id: "uzv-zglob",
        name: "Ultrazvuk zgloba",
        description: "Precizan uvid u stanje mekih tkiva i zgloba.",
        duration: 20,
        price: 2800,
        providerIds: ["vladimir", "goran"],
      },
      {
        id: "infiltracija",
        name: "Infiltracija",
        description: "Ciljana injekcija za brzo ublažavanje bola u zglobu.",
        duration: 20,
        price: 4500,
        providerIds: ["vladimir", "goran"],
      },
      {
        id: "fizikalna",
        name: "Fizikalna terapija — pojedinačna seansa",
        description: "Individualna seansa za oporavak pokretljivosti i snage.",
        duration: 45,
        price: 3000,
        providerIds: ["milena"],
      },
      {
        id: "kontrola",
        name: "Kontrolni pregled",
        description: "Kontrola toka terapije i korekcija plana oporavka.",
        duration: 20,
        price: 2200,
      },
      {
        id: "prp",
        name: "PRP tretman",
        description: "Terapija trombocitima za ubrzano zarastanje tkiva.",
        duration: 30,
        price: 15000,
        providerIds: ["goran", "milena"],
      },
    ],
    providers: [
      { id: "vladimir", name: "Dr Vladimir Radović", title: "Ortoped" },
      { id: "milena", name: "Dr Milena Đukić", title: "Ortoped, fizijatar" },
      { id: "goran", name: "Dr Goran Nikolić", title: "Ortoped, sportska medicina" },
    ],
    providerLabel: "Izaberite doktora",
    reviews: [
      {
        name: "Radovan T.",
        service: "Fizikalna terapija — pojedinačna seansa",
        text: "Zakazao seriju fizikalne terapije unapred za ceo mesec, bez zvanja svaki put.",
      },
      {
        name: "Biljana S.",
        service: "PRP tretman",
        text: "PRP tretman zakazan za sledeću nedelju, sve online.",
      },
      {
        name: "Milorad K.",
        service: "Infiltracija",
        text: "Konačno ne moram da čekam na infiltraciju danima.",
      },
    ],
    rating: { average: "4.8", count: 121 },
    gallery: medGallery({ icon: Activity, label: "Fizikalna terapija" }),
    trust: MEDICAL_TRUST,
    business: bgBiz(
      "+381 11 111 22 33",
      "ordinacija@ortoradovic.rs",
      "Đorđa Vajferta 18",
      MED_HOURS,
      MED_SCHEMA,
    ),
    seo: {
      title: "ORTO Ortopedija — Zakažite ortopedski pregled online",
      description:
        "Pregled, ultrazvuk zgloba i fizikalna terapija u Beogradu. Izaberite doktora i termin — zakažite online bez čekanja.",
    },
  },
  {
    slug: "gastroenterologija",
    brand: "GASTRO",
    category: "Gastroenterološka ordinacija · Beograd",
    name: "Gastroenterološka ordinacija Dr Simić",
    description:
      "Pregledi, gastroskopija i kolonoskopija sa kompletnim uputstvima za pripremu.",
    theme: "medical",
    hero: {
      lead: "Zdrav stomak,",
      emphasis: "miran um.",
      subtext:
        "Gastroskopija, kolonoskopija, ultrazvuk abdomena — uz automatski podsetnik za pripremu.",
      icon: Waves,
      stats: medStats("3.200+", "13"),
    },
    services: [
      {
        id: "pregled",
        name: "Gastroenterološki pregled",
        description: "Klinički pregled uz procenu simptoma i plan dijagnostike.",
        duration: 30,
        price: 3800,
      },
      {
        id: "gastroskopija",
        name: "Gastroskopija",
        description: "Endoskopski pregled jednjaka i želuca.",
        duration: 30,
        price: 9000,
        providerIds: ["zoran"],
      },
      {
        id: "kolonoskopija",
        name: "Kolonoskopija",
        description: "Endoskopski pregled debelog creva.",
        duration: 45,
        price: 14000,
        providerIds: ["jovana"],
      },
      {
        id: "uzv-abdomen",
        name: "Ultrazvuk abdomena",
        description: "Ultrazvučni pregled trbušnih organa.",
        duration: 20,
        price: 3200,
      },
      {
        id: "konsultacija",
        name: "Konsultacija nalaza",
        description: "Tumačenje nalaza i preporuka daljeg toka terapije.",
        duration: 20,
        price: 2500,
      },
    ],
    providers: [
      { id: "zoran", name: "Dr Zoran Simić", title: "Gastroenterolog" },
      { id: "jovana", name: "Dr Jovana Antić", title: "Gastroenterolog, endoskopija" },
    ],
    providerLabel: "Izaberite doktora",
    reviews: [
      {
        name: "Snežana M.",
        service: "Gastroskopija",
        text: "Dobila sam SMS podsetnik dan pre gastroskopije sa uputstvom za pripremu. Baš mi je trebalo.",
      },
      {
        name: "Dušan P.",
        service: "Kolonoskopija",
        text: "Zakazao kolonoskopiju online, sve jasno objašnjeno unapred.",
      },
      {
        name: "Verica R.",
        service: "Gastroenterološki pregled",
        text: "Nema više zaboravljanja kada treba da počnem pripremu, sistem me podseti.",
      },
    ],
    rating: { average: "4.9", count: 98 },
    gallery: medGallery({ icon: ScanSearch, label: "Endoskopija" }),
    trust: MEDICAL_TRUST,
    business: bgBiz(
      "+381 11 222 33 44",
      "ordinacija@gastrosimic.rs",
      "Cara Dušana 9",
      MED_HOURS,
      MED_SCHEMA,
    ),
    seo: {
      title: "GASTRO Gastroenterologija — Zakažite pregled online",
      description:
        "Gastroskopija, kolonoskopija i ultrazvuk abdomena u Beogradu. Izaberite termin online, uz podsetnik za pripremu.",
    },
  },
  {
    slug: "dijagnostika",
    brand: "MEDSCAN",
    category: "Dijagnostički centar · Beograd",
    name: "Dijagnostički centar MedScan",
    description: "MR, CT i ultrazvučna dijagnostika sa brzim zakazivanjem termina.",
    theme: "medical",
    hero: {
      lead: "Brza i precizna",
      emphasis: "dijagnostika.",
      subtext: "Izaberite tip snimanja, termin, i dobijte nalaz brzo.",
      icon: Scan,
      stats: medStats("7.500+", "10"),
    },
    services: [
      {
        id: "mr-kicma",
        name: "MR pregled — kičma",
        description: "Magnetna rezonanca kičmenog stuba.",
        duration: 45,
        price: 14000,
      },
      {
        id: "mr-glava",
        name: "MR pregled — glava",
        description: "Magnetna rezonanca glave i mozga.",
        duration: 45,
        price: 14000,
      },
      {
        id: "ct",
        name: "CT pregled",
        description: "Kompjuterizovana tomografija za brzu i preciznu dijagnostiku.",
        duration: 20,
        price: 9000,
      },
      {
        id: "uzv-abdomen",
        name: "Ultrazvuk abdomena",
        description: "Ultrazvučni pregled trbušnih organa.",
        duration: 20,
        price: 3200,
      },
      {
        id: "uzv-meka-tkiva",
        name: "Ultrazvuk mekih tkiva",
        description: "Pregled mišića, tetiva i mekih tkiva.",
        duration: 20,
        price: 3000,
      },
      {
        id: "rtg",
        name: "Rendgen",
        description: "Brzo i jednostavno rendgensko snimanje.",
        duration: 10,
        price: 1800,
      },
    ],
    providers: [],
    providerLabel: "",
    reviews: [
      {
        name: "Dijana V.",
        service: "MR pregled — kičma",
        text: "Zakazala MR kičme za sledeći dan, umesto čekanja nedelju dana.",
      },
      {
        name: "Saša M.",
        service: "CT pregled",
        text: "Sve termine za snimanje biram sama, bez zvanja i čekanja na liniji.",
      },
      {
        name: "Ljubiša D.",
        service: "Rendgen",
        text: "Brzo, jasno, nalaz stigao na vreme.",
      },
    ],
    rating: { average: "4.9", count: 267 },
    gallery: [
      { icon: Scan, label: "Sala za snimanje" },
      { icon: Layers, label: "3D rekonstrukcija" },
      { icon: ShieldCheck, label: "Kontrola kvaliteta" },
    ],
    trust: [
      {
        icon: CalendarCheck,
        title: "Termin za snimanje odmah",
        text: "Izaberite tip snimanja i slobodan termin, bez čekanja na liniji.",
      },
      {
        icon: Scan,
        title: "Savremeni aparati",
        text: "Najnovija MR i CT tehnologija za precizan nalaz.",
      },
      {
        icon: Zap,
        title: "Brz nalaz",
        text: "Nalaz dostupan u najkraćem roku, uz mogućnost preuzimanja online.",
      },
    ],
    business: bgBiz(
      "+381 11 333 44 55",
      "zakazivanje@medscan.rs",
      "Bulevar Zorana Đinđića 64",
      MED_HOURS,
      MED_SCHEMA,
    ),
    seo: {
      title: "MedScan Dijagnostika — Zakažite MR ili CT snimanje online",
      description:
        "MR, CT i ultrazvučna dijagnostika u Beogradu. Izaberite tip snimanja i termin — zakažite online, bez čekanja.",
    },
  },
  {
    slug: "estetska-hirurgija",
    brand: "ELITE",
    category: "Klinika za plastičnu hirurgiju · Beograd",
    name: "Klinika za plastičnu hirurgiju Dr Vukotić",
    description: "Konsultacije i estetski hirurški zahvati u privatnoj klinici.",
    theme: "medical",
    hero: {
      lead: "Promena koja",
      emphasis: "ostaje diskretna.",
      subtext: "Privatno, diskretno — izaberite termin za prvu konsultaciju.",
      icon: Scissors,
      stats: medStats("2.100+", "9"),
    },
    services: [
      {
        id: "konsultacija",
        name: "Prva konsultacija",
        description: "Uvodni razgovor i procena očekivanja i mogućnosti.",
        duration: 30,
        price: 6000,
      },
      {
        id: "kontrola",
        name: "Kontrolni pregled",
        description: "Kontrola nakon zahvata ili terapije.",
        duration: 20,
        price: 3000,
      },
      {
        id: "rinoplastika",
        name: "Konsultacija za rinoplastiku",
        description: "Procena i plan za korekciju oblika nosa.",
        duration: 30,
        price: 6000,
        providerIds: ["nikola"],
      },
      {
        id: "liposukcija",
        name: "Konsultacija za liposukciju",
        description: "Procena i plan za konturisanje tela.",
        duration: 30,
        price: 6000,
        providerIds: ["marija"],
      },
      {
        id: "augmentacija",
        name: "Konsultacija za augmentaciju grudi",
        description: "Procena i plan za augmentaciju grudi.",
        duration: 30,
        price: 6000,
        providerIds: ["marija"],
      },
    ],
    providers: [
      { id: "marija", name: "Dr Marija Vukotić", title: "Plastični hirurg" },
      { id: "nikola", name: "Dr Nikola Đurđević", title: "Plastični hirurg" },
    ],
    providerLabel: "Izaberite doktora",
    reviews: [
      {
        name: "Anonimno",
        service: "Prva konsultacija",
        text: "Zakazala prvu konsultaciju diskretno, bez ičijeg znanja. Baš mi je to trebalo.",
      },
      {
        name: "J.K.",
        service: "Konsultacija za rinoplastiku",
        text: "Sve informacije dobila unapred, konsultacija zakazana za par dana.",
      },
      {
        name: "M.T.",
        service: "Konsultacija za augmentaciju grudi",
        text: "Profesionalan pristup od samog zakazivanja.",
      },
    ],
    rating: { average: "4.9", count: 87 },
    gallery: medGallery({ icon: Gem, label: "Premium enterijer" }),
    trust: [
      {
        icon: ShieldCheck,
        title: "Diskrecija zagarantovana",
        text: "Svaka konsultacija i zahvat obavljaju se uz punu privatnost pacijenta.",
      },
      {
        icon: BadgeCheck,
        title: "Sertifikovan hirurg",
        text: "Dr Vukotić poseduje međunarodne sertifikate iz estetske hirurgije.",
      },
      {
        icon: Sparkles,
        title: "Premium klinika",
        text: "Moderna oprema i enterijer nivoa privatne klinike.",
      },
    ],
    business: bgBiz(
      "+381 11 444 55 66",
      "konsultacije@klinikavukotic.rs",
      "Vase Čarapića 5",
      MED_HOURS,
      MED_SCHEMA,
    ),
    seo: {
      title: "ELITE Plastična hirurgija — Zakažite konsultaciju online",
      description:
        "Konsultacije i estetski hirurški zahvati u privatnoj klinici u Beogradu. Zakažite prvu konsultaciju online, diskretno.",
    },
  },

  // ═══ BEAUTY VERTIKALA ═══
  {
    slug: "kozmeticki-salon",
    brand: "LUMEA",
    category: "Kozmetički salon · Niš",
    name: "Beauty Studio Niš",
    description:
      "Profesionalni tretmani lica i tela u modernom ambijentu — od pilinga do anti-age nege, uz online zakazivanje.",
    theme: "beauty",
    hero: {
      lead: "Lepota koja",
      emphasis: "zrači.",
      subtext:
        "Piling, anti-age i hijaluron — izaberite termin bez poziva. Prepustite se našim kozmetičarkama.",
      icon: Sparkles,
      stats: beautyStats("3.800+", "11"),
    },
    services: [
      {
        id: "lice",
        name: "Tretman lica",
        description: "Dubinsko čišćenje i nega prilagođena vašoj koži.",
        duration: 60,
        price: 4500,
      },
      {
        id: "piling",
        name: "Hemijski piling",
        description: "Za blistav i ujednačen ten.",
        duration: 45,
        price: 3500,
        providerIds: ["ivana", "jelena"],
      },
      {
        id: "mikro",
        name: "Mikrodermabrazija",
        description: "Mehanički piling za glatku i svežu kožu.",
        duration: 40,
        price: 4000,
        providerIds: ["ivana", "milica"],
      },
      {
        id: "antiage",
        name: "Anti-age tretman",
        description: "Zatezanje i ishrana kože protiv bora.",
        duration: 60,
        price: 6000,
        providerIds: ["milica", "jelena"],
      },
      {
        id: "hijaluron",
        name: "Hijaluronski tretman",
        description: "Intenzivna hidratacija i sjaj.",
        duration: 45,
        price: 5500,
        providerIds: ["jelena"],
      },
    ],
    providers: [
      { id: "ivana", name: "Ivana", title: "Kozmetičar-estetičar" },
      { id: "milica", name: "Milica", title: "Estetičar" },
      { id: "jelena", name: "Jelena", title: "Kozmetičar, spa terapeut" },
    ],
    providerLabel: "Izaberite kozmetičarku",
    reviews: [
      {
        name: "Teodora S.",
        service: "Tretman lica",
        text: "Zakazala tretman lica za subotu popodne. Jednostavno, a koža nikad blistavija!",
      },
      {
        name: "Jelena K.",
        service: "Hijaluronski tretman",
        text: "Ne moram da šaljem poruku i čekam odgovor. Biram termin i gotovo.",
      },
      {
        name: "Marija V.",
        service: "Hemijski piling",
        text: "Piling sam zakazala u dva ujutru kad sam se setila. Super opcija!",
      },
    ],
    rating: { average: "4.9", count: 264 },
    gallery: beautyGallery({ icon: Sparkles, label: "Tretmani lica" }),
    trust: BEAUTY_TRUST,
    business: {
      phone: "+381 18 234 567",
      phoneHref: "tel:+38118234567",
      email: "zakazivanje@lumeabeauty.rs",
      street: "Obrenovićeva 20",
      postalCode: "18000",
      city: "Niš",
      address: "Obrenovićeva 20, 18000 Niš",
      hours: BEAUTY_HOURS,
      openingHoursSchema: BEAUTY_SCHEMA,
    },
    seo: {
      title: "LUMEA Beauty Studio — Zakažite tretman lica online",
      description:
        "Profesionalni tretmani lica i tela u Nišu. Piling, anti-age i hijaluron — izaberite termin online, bez poziva.",
    },
  },
  {
    slug: "frizerski-salon",
    brand: "MECHE",
    category: "Frizerski salon · Niš",
    name: "Hair Studio Niš",
    description:
      "Farbanje, pramenovi, feniranje i nega kose u premium ambijentu — uz online zakazivanje kod omiljenog frizera.",
    theme: "beauty",
    hero: {
      lead: "Kosa koja",
      emphasis: "ostavlja utisak.",
      subtext:
        "Farbanje, pramenovi i feniranje — izaberite frizera i termin online, bez čekanja.",
      icon: Paintbrush,
      stats: beautyStats("3.500+", "10"),
    },
    services: [
      {
        id: "zensko-sisanje",
        name: "Žensko šišanje",
        description: "Šišanje i oblikovanje prilagođeno vašem stilu.",
        duration: 45,
        price: 2200,
        providerIds: ["filip", "nina"],
      },
      {
        id: "musko-sisanje",
        name: "Muško šišanje",
        description: "Precizno oblikovanje i doterivanje frizure.",
        duration: 30,
        price: 1500,
        providerIds: ["filip"],
      },
      {
        id: "farbanje",
        name: "Farbanje kose",
        description: "Kompletno bojenje kose profesionalnim bojama.",
        duration: 90,
        price: 5500,
        providerIds: ["aleksandra", "filip"],
      },
      {
        id: "pramenovi",
        name: "Pramenovi / Balayage",
        description: "Ručno oslikani pramenovi za prirodan efekat sunčanja.",
        duration: 120,
        price: 7500,
        providerIds: ["aleksandra"],
      },
      {
        id: "feniranje",
        name: "Feniranje",
        description: "Feniranje i stilizovanje za svaku priliku.",
        duration: 30,
        price: 1500,
        providerIds: ["filip", "nina"],
      },
      {
        id: "keratin",
        name: "Keratinski tretman",
        description: "Duboka regeneracija za glatku i sjajnu kosu.",
        duration: 60,
        price: 6500,
        providerIds: ["aleksandra", "nina"],
      },
      {
        id: "svecana",
        name: "Svečana frizura",
        description: "Frizura za venčanja, proslave i posebne prilike.",
        duration: 60,
        price: 3800,
        providerIds: ["nina"],
      },
    ],
    providers: [
      { id: "aleksandra", name: "Aleksandra", title: "Kolorista" },
      { id: "filip", name: "Filip", title: "Hair stilista" },
      { id: "nina", name: "Nina", title: "Stilista za svečane frizure" },
    ],
    providerLabel: "Izaberite frizera",
    reviews: [
      {
        name: "Milena T.",
        service: "Pramenovi / Balayage",
        text: "Zakazala pramenove kod Aleksandre za subotu, bez ijedne poruke unapred. Rezultat — kao iz salona u centru grada.",
      },
      {
        name: "Nikolina P.",
        service: "Svečana frizura",
        text: "Svečanu frizuru sam zakazala nedelju dana pre venčanja moje drugarice. Sve isplanirano do minuta.",
      },
      {
        name: "Marko D.",
        service: "Muško šišanje",
        text: "Više ne čekam u redu subotom ujutru. Biram termin uveče, dođem tačno kad mi odgovara.",
      },
    ],
    rating: { average: "4.9", count: 276 },
    gallery: beautyGallery({ icon: Wind, label: "Feniranje i styling" }),
    trust: BEAUTY_TRUST,
    business: {
      phone: "+381 18 678 901",
      phoneHref: "tel:+38118678901",
      email: "zakazivanje@mechehair.rs",
      street: "Nikole Pašića 22",
      postalCode: "18000",
      city: "Niš",
      address: "Nikole Pašića 22, 18000 Niš",
      hours: BEAUTY_HOURS,
      openingHoursSchema: BEAUTY_SCHEMA,
    },
    seo: {
      title: "MECHE Hair Studio — Zakažite frizerski termin online",
      description:
        "Farbanje, pramenovi, feniranje i keratinski tretmani u Nišu. Izaberite frizera i termin online — bez čekanja.",
    },
  },
  {
    slug: "epilacija",
    brand: "SILK",
    category: "Laser centar · Niš",
    name: "Laser Centar Niš",
    description:
      "Profesionalna laserska i voštana epilacija za sve delove tela — trajno glatka koža uz online zakazivanje.",
    theme: "beauty",
    hero: {
      lead: "Glatka koža,",
      emphasis: "bez kompromisa.",
      subtext:
        "Noge, bikini, pazuh, lice — izaberite tretman i termin online. Trajan rezultat, prijatan ambijent.",
      icon: Zap,
      stats: beautyStats("2.900+", "9"),
    },
    services: [
      {
        id: "noge",
        name: "Laserska epilacija — noge",
        description: "Trajno uklanjanje dlačica sa nogu.",
        duration: 45,
        price: 5000,
        providerIds: ["jovana", "marina"],
      },
      {
        id: "bikini",
        name: "Laserska epilacija — bikini",
        description: "Precizna epilacija bikini zone.",
        duration: 30,
        price: 3000,
        providerIds: ["jovana", "marina"],
      },
      {
        id: "pazuh",
        name: "Laserska epilacija — pazuh",
        description: "Brza i bezbolna epilacija pazuha.",
        duration: 15,
        price: 1500,
      },
      {
        id: "lice",
        name: "Laserska epilacija — lice",
        description: "Nežna laserska epilacija lica.",
        duration: 15,
        price: 1800,
        providerIds: ["jovana"],
      },
      {
        id: "ruke",
        name: "Laserska epilacija — ruke",
        description: "Glatke ruke bez dlačica.",
        duration: 30,
        price: 3000,
        providerIds: ["jovana", "marina"],
      },
      {
        id: "vosak",
        name: "Voštana epilacija — noge",
        description: "Klasična depilacija toplim voskom.",
        duration: 45,
        price: 2500,
        providerIds: ["ana"],
      },
    ],
    providers: [
      { id: "jovana", name: "Jovana", title: "Laser terapeut" },
      { id: "ana", name: "Ana", title: "Estetičar" },
      { id: "marina", name: "Marina", title: "Laser terapeut" },
    ],
    providerLabel: "Izaberite terapeuta",
    reviews: [
      {
        name: "Ivana R.",
        service: "Laserska epilacija — noge",
        text: "Zakazala sve tretmane za ceo mesec unapred. Odlično organizovano!",
      },
      {
        name: "Nina M.",
        service: "Laserska epilacija — bikini",
        text: "Ranije sam zvala i čekala, sad biram termin sama. Ogromna ušteda vremena.",
      },
      {
        name: "Katarina D.",
        service: "Laserska epilacija — pazuh",
        text: "Brzo, moderno, bez komplikacija. Rezultat vidljiv već posle par tretmana.",
      },
    ],
    rating: { average: "4.9", count: 231 },
    gallery: beautyGallery({ icon: Zap, label: "Laser tretmani" }),
    trust: BEAUTY_TRUST,
    business: {
      phone: "+381 18 345 678",
      phoneHref: "tel:+38118345678",
      email: "zakazivanje@silklaser.rs",
      street: "Vojvode Putnika 5",
      postalCode: "18000",
      city: "Niš",
      address: "Vojvode Putnika 5, 18000 Niš",
      hours: BEAUTY_HOURS,
      openingHoursSchema: BEAUTY_SCHEMA,
    },
    seo: {
      title: "SILK Laser Centar — Zakažite lasersku epilaciju online",
      description:
        "Laserska i voštana epilacija u Nišu. Noge, bikini, pazuh i lice — izaberite tretman i termin online.",
    },
  },
  {
    slug: "nail-salon",
    brand: "GLOSS",
    category: "Nail studio · Niš",
    name: "Nail Studio Niš",
    description:
      "Manikir, pedikir, gel i nadogradnja — sve na jednom mestu, uz online zakazivanje kod omiljene manikiriste.",
    theme: "beauty",
    hero: {
      lead: "Nokti koji",
      emphasis: "privlače pažnju.",
      subtext:
        "Gel, nadogradnja i spa manikir — izaberite manikiristu i termin online. Bez DM-ova i čekanja.",
      icon: Nail,
      stats: beautyStats("4.200+", "8"),
    },
    services: [
      {
        id: "gel",
        name: "Gel lakiranje",
        description: "Postojan sjaj koji traje nedeljama.",
        duration: 60,
        price: 2000,
      },
      {
        id: "manikir",
        name: "Manikir",
        description: "Nega noktiju i zanoktica uz besprekoran oblik.",
        duration: 45,
        price: 1500,
      },
      {
        id: "pedikir",
        name: "Pedikir",
        description: "Nega stopala i noktiju za savršen izgled.",
        duration: 50,
        price: 2200,
        providerIds: ["ivana", "tamara"],
      },
      {
        id: "nadogradnja",
        name: "Nadogradnja noktiju",
        description: "Izduženje i oblikovanje po želji.",
        duration: 90,
        price: 3500,
        providerIds: ["milica", "tamara"],
      },
      {
        id: "skidanje",
        name: "Skidanje gela",
        description: "Nežno skidanje bez oštećenja nokta.",
        duration: 20,
        price: 800,
      },
      {
        id: "spa",
        name: "Spa manikir",
        description: "Manikir uz piling, masku i masažu ruku.",
        duration: 60,
        price: 2800,
        providerIds: ["ivana", "milica"],
      },
    ],
    providers: [
      { id: "ivana", name: "Ivana", title: "Nail artist" },
      { id: "milica", name: "Milica", title: "Nail artist" },
      { id: "tamara", name: "Tamara", title: "Nail artist" },
    ],
    providerLabel: "Izaberite manikiristu",
    reviews: [
      {
        name: "Ana S.",
        service: "Nadogradnja noktiju",
        text: "Zakazala nadogradnju kod Milice za petak. Bez DM-ova i čekanja — savršeno.",
      },
      {
        name: "Maja T.",
        service: "Gel lakiranje",
        text: "Konačno ne moram da pitam „imate li slobodno“. Vidim termine i biram.",
      },
      {
        name: "Dragana L.",
        service: "Pedikir",
        text: "Pedikir zakazan za subotu ujutru, stigla tačno na vreme. Preporuka!",
      },
    ],
    rating: { average: "4.9", count: 318 },
    gallery: beautyGallery({ icon: Nail, label: "Nail art" }),
    trust: BEAUTY_TRUST,
    business: {
      phone: "+381 18 456 789",
      phoneHref: "tel:+38118456789",
      email: "zakazivanje@glossnails.rs",
      street: "Kopitareva 3",
      postalCode: "18000",
      city: "Niš",
      address: "Kopitareva 3, 18000 Niš",
      hours: BEAUTY_HOURS,
      openingHoursSchema: BEAUTY_SCHEMA,
    },
    seo: {
      title: "GLOSS Nail Studio — Zakažite manikir online",
      description:
        "Manikir, pedikir, gel i nadogradnja u Nišu. Izaberite manikiristu i termin online — bez DM-ova i čekanja.",
    },
  },
  {
    slug: "brow-bar",
    brand: "ARC",
    category: "Brow studio · Niš",
    name: "Brow Studio Niš",
    description:
      "Obrve, trepavice i microblading — profesionalno oblikovanje koje otvara pogled, uz online zakazivanje.",
    theme: "beauty",
    hero: {
      lead: "Pogled koji",
      emphasis: "govori pre reči.",
      subtext:
        "Laminacija, microblading i lash lift — izaberite termin online. Savršen oblik obrva bez šminke.",
      icon: Brow,
      stats: beautyStats("2.600+", "7"),
    },
    services: [
      {
        id: "regulisanje",
        name: "Regulisanje obrva",
        description: "Oblikovanje prema geometriji lica.",
        duration: 20,
        price: 1000,
      },
      {
        id: "laminacija",
        name: "Laminacija obrva",
        description: "Zategnute, podignute obrve do 6 nedelja.",
        duration: 45,
        price: 2500,
        providerIds: ["marija", "teodora"],
      },
      {
        id: "microblading",
        name: "Microblading",
        description: "Prirodno popunjavanje obrva dlačicu po dlačicu.",
        duration: 120,
        price: 12000,
        providerIds: ["iva"],
      },
      {
        id: "lift",
        name: "Brow lift",
        description: "Podizanje i fiksiranje oblika obrva.",
        duration: 45,
        price: 2200,
        providerIds: ["marija", "teodora"],
      },
      {
        id: "farbanje",
        name: "Farbanje obrva i trepavica",
        description: "Definisan pogled bez šminke.",
        duration: 20,
        price: 1200,
      },
      {
        id: "lashlift",
        name: "Lash lift",
        description: "Podizanje trepavica za otvoren pogled.",
        duration: 60,
        price: 2800,
        providerIds: ["teodora", "iva"],
      },
    ],
    providers: [
      { id: "marija", name: "Marija", title: "Brow & lash stilista" },
      { id: "teodora", name: "Teodora", title: "Brow & lash stilista" },
      { id: "iva", name: "Iva", title: "Microblading majstor" },
    ],
    providerLabel: "Izaberite stilistkinju",
    reviews: [
      {
        name: "Kristina M.",
        service: "Microblading",
        text: "Microblading sam zakazala mesec unapred bez problema. Obrve izgledaju prirodno i savršeno.",
      },
      {
        name: "Aleksandra V.",
        service: "Laminacija obrva",
        text: "Laminacija obrva zakazana za sutra. Prosto, brzo i rezultat traje nedeljama.",
      },
      {
        name: "Sara P.",
        service: "Lash lift",
        text: "Više ne šaljem poruke i čekam odgovor. Biram termin i dolazim — pogled otvoren i bez maskare.",
      },
    ],
    rating: { average: "4.9", count: 197 },
    gallery: beautyGallery({ icon: Wand2, label: "Microblading" }),
    trust: BEAUTY_TRUST,
    business: {
      phone: "+381 18 567 890",
      phoneHref: "tel:+38118567890",
      email: "zakazivanje@arcbrow.rs",
      street: "Davidova 11",
      postalCode: "18000",
      city: "Niš",
      address: "Davidova 11, 18000 Niš",
      hours: BEAUTY_HOURS,
      openingHoursSchema: BEAUTY_SCHEMA,
    },
    seo: {
      title: "ARC Brow Studio — Zakažite tretman obrva online",
      description:
        "Obrve, trepavice i microblading u Nišu. Laminacija, microblading i lash lift — izaberite termin online.",
    },
  },

  // ═══ WELLNESS (postojeći demo) ═══
  {
    slug: "masaza",
    brand: "AURA",
    category: "Wellness Studio · Beograd",
    name: "AURA Wellness Studio",
    description:
      "Premium masaže i wellness tretmani u srcu grada. Izaberite uslugu, terapeuta i termin — zakažite online za par klikova.",
    theme: "wellness",
    hero: {
      lead: "Umetnost",
      emphasis: "opuštanja.",
      subtext:
        "Premium masaže prilagođene vašem telu. Iskusite mir u srcu grada uz naše sertifikovane terapeute.",
      icon: Massage,
      stats: beautyStats("2.400+", "8"),
    },
    services: [
      {
        id: "relax",
        name: "Relax Masaža",
        description: "Nežni pokreti za potpuno opuštanje i bolju cirkulaciju.",
        duration: 60,
        price: 4500,
        providerIds: ["marko", "sofija"],
      },
      {
        id: "deep",
        name: "Deep Tissue",
        description: "Intenzivna masaža za duboko opuštanje mišića.",
        duration: 75,
        price: 5800,
        providerIds: ["elena", "marko"],
      },
      {
        id: "sport",
        name: "Sportska Masaža",
        description: "Oporavak i fleksibilnost za aktivne osobe.",
        duration: 60,
        price: 5200,
        providerIds: ["elena", "marko"],
      },
      {
        id: "aroma",
        name: "Aroma Terapija",
        description: "Eterična ulja za balans uma i tela.",
        duration: 60,
        price: 4800,
        providerIds: ["sofija"],
      },
      {
        id: "kamenje",
        name: "Vrelo Kamenje",
        description: "Terapija vulkanskim kamenjem za duboku relaksaciju.",
        duration: 90,
        price: 6500,
        providerIds: ["elena", "sofija"],
      },
      {
        id: "refleks",
        name: "Refleksologija",
        description: "Masaža stopala koja stimuliše vitalne tačke tela.",
        duration: 45,
        price: 3900,
        providerIds: ["marko", "sofija"],
      },
      {
        id: "parcijalna",
        name: "Parcijalna Masaža",
        description: "Fokus na vrat, ramena i leđa — brzo olakšanje.",
        duration: 30,
        price: 2500,
        providerIds: ["elena", "marko", "sofija"],
      },
    ],
    providers: [
      { id: "elena", name: "Elena Marković", title: "Deep Tissue Specijalista" },
      { id: "marko", name: "Marko Jovanović", title: "Relax & Sportska" },
      { id: "sofija", name: "Sofija Lukić", title: "Aroma & Holistička" },
    ],
    providerLabel: "Izaberite terapeuta",
    reviews: [
      {
        name: "Jelena P.",
        service: "Deep Tissue",
        text: "Deep tissue kod Elene je najbolja masaža koju sam ikada imala. Zakazivanje online traje pola minuta.",
      },
      {
        name: "Nikola S.",
        service: "Sportska Masaža",
        text: "Posle svakog jačeg treninga dolazim kod Marka. Tačno zna gde je problem i pre nego što mu kažem.",
      },
      {
        name: "Ana M.",
        service: "Aroma Terapija",
        text: "Sat vremena potpunog mira kod Sofije. Prostor je predivan, sve miriše, osoblje neverovatno ljubazno.",
      },
    ],
    rating: { average: "4.9", count: 214 },
    gallery: [
      { icon: HeartHandshake, label: "Naš tim" },
      { icon: Leaf, label: "Organska ulja" },
      { icon: Sparkles, label: "Privatne sobe" },
    ],
    trust: [
      {
        icon: BadgeCheck,
        title: "Sertifikovani terapeuti",
        text: "Svaki terapeut ima međunarodne sertifikate i višegodišnje iskustvo.",
      },
      {
        icon: Leaf,
        title: "Organska ulja",
        text: "Koristimo isključivo prirodna, hladno ceđena ulja premium kvaliteta.",
      },
      {
        icon: Sparkles,
        title: "Privatne tretman sobe",
        text: "Svaki tretman se odvija u potpuno privatnoj, zvučno izolovanoj sobi.",
      },
    ],
    business: {
      phone: "+381 11 123 45 67",
      phoneHref: "tel:+381111234567",
      email: "kontakt@aurastudio.rs",
      street: "Kralja Petra 12",
      postalCode: "11000",
      city: "Beograd",
      address: "Kralja Petra 12, 11000 Beograd",
      hours: "Svakog dana 09 – 18h",
      openingHoursSchema: "Mo-Su 09:00-18:00",
    },
    seo: {
      title: "AURA Wellness Studio — Zakažite masažu online",
      description:
        "Premium masaže u srcu grada. Izaberite uslugu, terapeuta i termin — zakažite online za par klikova.",
    },
  },

  // ── Prilagođene poliklinika instance ──
  poliklinika_human,
  poliklinika_nikolic,
  poliklinika_danamed,
  poliklinika_goranova,
  poliklinika_varnava,
  poliklinika_maja,
  poliklinika_magnetmd,
  poliklinika_vipmedical,

  // ── Nove poliklinika/klinika instance (specialties-based) ──
  klinika_elit,
  mirabiliss,
  bocokic,
  naissa,
  sisi,
  hipokrat_group,
  neo_mag,
  longa_vita,
  aviva,
  magna_plus,
  poligin,
  aja_medika,
  prva_pedijatrija,
  rheuma_medica,
  kardio_medika,
  ravena,
];

// ── Lookup helpers ────────────────────────────────────────────────────────────

export const DEMOS: Record<string, DemoConfig> = Object.fromEntries(
  CONFIGS.map((c) => [c.slug, c]),
);

/** The demo shown at "/" and used as the fallback for unknown slugs. */
export const DEFAULT_SLUG = "masaza";

export const getDemo = (slug: string | undefined): DemoConfig | undefined =>
  slug ? DEMOS[slug] : undefined;

/** All providers that offer a given service (defaults to every provider). */
export const providersForService = (config: DemoConfig, service: DemoService): DemoProvider[] => {
  if (!service.providerIds) return config.providers;
  return config.providers.filter((p) => service.providerIds!.includes(p.id));
};

export const getConfigService = (config: DemoConfig, id: string | undefined) =>
  id ? config.services.find((s) => s.id === id) : undefined;

export const getConfigProvider = (config: DemoConfig, id: string | undefined) =>
  id ? config.providers.find((p) => p.id === id) : undefined;

/** True when the provider-selection step should be skipped (e.g. laboratorija). */
export const hasProviderStep = (config: DemoConfig) =>
  config.providerLabel !== "" && config.providers.length > 0;

/** True for multi-department demos (e.g. poliklinika) that add a specialty-selection step. */
export const hasSpecialties = (config: DemoConfig): boolean => !!config.specialties?.length;

export const getSpecialty = (config: DemoConfig, id: string | undefined) =>
  id ? config.specialties?.find((sp) => sp.id === id) : undefined;

export const servicesForSpecialty = (config: DemoConfig, specialtyId: string): DemoService[] =>
  config.services.filter((s) => s.specialtyId === specialtyId);

/** True for multi-branch demos (e.g. poliklinika-human) that add a location-selection step before specialty. */
export const hasLocations = (config: DemoConfig): boolean => !!config.locations?.length;

/**
 * Specialties available at a given location. Specialties without `locationIds`
 * are available everywhere (default, backward-compatible). Passing a falsy
 * `locationId` (no location chosen yet) returns every specialty unfiltered.
 */
export const filterByLocation = (
  config: DemoConfig,
  locationId: string | null | undefined,
): DemoSpecialty[] => {
  const all = config.specialties ?? [];
  if (!locationId) return all;
  return all.filter((sp) => !sp.locationIds || sp.locationIds.includes(locationId));
};

// ── SEO / social sharing ────────────────────────────────────────────────────

const SCHEMA_TYPE: Record<ThemeName, string> = {
  medical: "MedicalBusiness",
  beauty: "BeautySalon",
  wellness: "DaySpa",
};

/** schema.org JSON-LD for this demo's own business — never the wellness default. */
export const demoStructuredData = (config: DemoConfig) => ({
  "@context": "https://schema.org",
  "@type": SCHEMA_TYPE[config.theme],
  name: config.name,
  description: config.description,
  telephone: config.business.phone,
  email: config.business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: config.business.street,
    postalCode: config.business.postalCode,
    addressLocality: config.business.city,
    addressCountry: "RS",
  },
  openingHours: config.business.openingHoursSchema,
  priceRange: "$$",
});

/**
 * Full <head> meta for a demo page — title, description, Open Graph, Twitter
 * card and JSON-LD, all derived from the demo's own config. Spread this into
 * each route's `head()` so link previews (WhatsApp/Slack/email) and
 * structured-data validators show the right business per demo instead of
 * falling back to the root's hardcoded AURA defaults.
 */
export const demoMeta = (config: DemoConfig) => [
  { title: config.seo.title },
  { name: "description", content: config.seo.description },
  { property: "og:title", content: config.seo.title },
  { property: "og:description", content: config.seo.description },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "author", content: config.name },
  { "script:ld+json": demoStructuredData(config) },
];
