/**
 * Aja Medika — Beograd
 *
 * Generic providers only — no confirmed individual doctor names.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, bgBiz } from "@/lib/demo-types";
import { Bone, HeartPulse, PersonStanding, Salad, Smile } from "lucide-react";

export const aja_medika: DemoConfig = {
  slug: "aja-medika",
  brand: "AJA MEDIKA",
  category: "Poliklinika · Beograd",
  name: "Aja Medika",
  description:
    "Kardiologija, ortopedija, fizijatrija, psihologija i dijetetika — celovita briga o telu i umu, uz online zakazivanje.",
  theme: "medical",
  hero: {
    lead: "Telo i um,",
    emphasis: "u ravnoteži.",
    subtext:
      "Kardiologija, ortopedija, fizijatrija, psihologija i dijetetika — izaberite specijalnost, lekara i termin online.",
    icon: HeartPulse,
    stats: medStats("6.900+", "15"),
  },

  specialties: [
    { id: "kardiologija", name: "Kardiologija", icon: HeartPulse, color: "oklch(0.60 0.15 25)" },
    { id: "ortopedija", name: "Ortopedija", icon: Bone, color: "oklch(0.55 0.09 70)" },
    { id: "fizijatrija", name: "Fizijatrija", icon: PersonStanding, color: "oklch(0.62 0.10 140)" },
    { id: "psihologija", name: "Psihologija", icon: Smile, color: "oklch(0.62 0.12 320)" },
    { id: "dijetetika", name: "Dijetetika", icon: Salad, color: "oklch(0.65 0.13 130)" },
  ],

  services: [
    // ── Kardiologija ──
    {
      id: "kardio-pregled",
      name: "Kardiološki pregled + EKG",
      description: "Klinički pregled sa EKG snimanjem i procenom kardiovaskularnog rizika.",
      duration: 30,
      price: 4200,
      specialtyId: "kardiologija",
      providerIds: ["spec-kardio"],
    },
    {
      id: "kardio-uzv",
      name: "Ultrazvuk srca",
      description: "Ehokardiografija za detaljan uvid u rad i strukturu srca.",
      duration: 30,
      price: 5800,
      specialtyId: "kardiologija",
      providerIds: ["spec-kardio"],
    },
    {
      id: "kardio-ergo",
      name: "Ergometrija",
      description: "Test opterećenja za procenu rada srca u naporu.",
      duration: 45,
      price: 5500,
      specialtyId: "kardiologija",
      providerIds: ["spec-kardio"],
    },

    // ── Ortopedija ──
    {
      id: "orto-pregled",
      name: "Ortopedski pregled",
      description: "Klinička procena zglobova i kičme sa planom terapije.",
      duration: 30,
      price: 3800,
      specialtyId: "ortopedija",
      providerIds: ["spec-orto"],
    },
    {
      id: "orto-uzv-zglob",
      name: "Ultrazvuk zgloba",
      description: "Ultrazvučna dijagnostika zgloba za procenu oštećenja i upale.",
      duration: 20,
      price: 3200,
      specialtyId: "ortopedija",
      providerIds: ["spec-orto"],
    },
    {
      id: "orto-infiltracija",
      name: "Intraartikularna infiltracija",
      description: "Ciljana injekcija u zglob za smanjenje bola i upale.",
      duration: 20,
      price: 5500,
      specialtyId: "ortopedija",
      providerIds: ["spec-orto"],
    },

    // ── Fizijatrija ──
    {
      id: "fizio-pregled",
      name: "Fizijatrijski pregled",
      description: "Procena funkcionalnog stanja sa planom rehabilitacije.",
      duration: 30,
      price: 3500,
      specialtyId: "fizijatrija",
      providerIds: ["spec-fizijatrija"],
    },
    {
      id: "fizio-terapija",
      name: "Individualna kinezi terapija",
      description: "Vođene vežbe za oporavak pokretljivosti i snage.",
      duration: 45,
      price: 2800,
      specialtyId: "fizijatrija",
      providerIds: ["spec-fizijatrija"],
    },
    {
      id: "fizio-masaza",
      name: "Terapeutska masaža",
      description: "Ciljana masaža za opuštanje muskulature i smanjenje bola.",
      duration: 45,
      price: 3200,
      specialtyId: "fizijatrija",
      providerIds: ["spec-fizijatrija"],
    },

    // ── Psihologija ──
    {
      id: "psiho-konsultacija",
      name: "Prva psihološka konsultacija",
      description: "Uvodni razgovor i procena potreba za dalju podršku.",
      duration: 50,
      price: 4500,
      specialtyId: "psihologija",
      providerIds: ["spec-psiholog"],
    },
    {
      id: "psiho-seansa",
      name: "Individualna terapijska seansa",
      description: "Redovna seansa prilagođena vašim potrebama i tempu.",
      duration: 50,
      price: 4500,
      specialtyId: "psihologija",
      providerIds: ["spec-psiholog"],
    },
    {
      id: "psiho-parovi",
      name: "Terapija za parove",
      description: "Zajednička seansa za rad na komunikaciji i odnosu.",
      duration: 60,
      price: 6000,
      specialtyId: "psihologija",
      providerIds: ["spec-psiholog"],
    },

    // ── Dijetetika ──
    {
      id: "dijeta-konsultacija",
      name: "Nutricionistička konsultacija",
      description: "Procena ishrane i sastava tela sa individualnim planom.",
      duration: 45,
      price: 4000,
      specialtyId: "dijetetika",
      providerIds: ["spec-dijetetika"],
    },
    {
      id: "dijeta-plan",
      name: "Izrada personalizovanog jelovnika",
      description: "Detaljan plan ishrane prilagođen ciljevima i navikama.",
      duration: 30,
      price: 3500,
      specialtyId: "dijetetika",
      providerIds: ["spec-dijetetika"],
    },
    {
      id: "dijeta-kontrola",
      name: "Kontrolna konsultacija",
      description: "Praćenje napretka i korekcija plana ishrane.",
      duration: 20,
      price: 2500,
      specialtyId: "dijetetika",
      providerIds: ["spec-dijetetika"],
    },
  ],

  providers: [
    { id: "spec-kardio", name: "Spec. kardiologije", title: "Kardiolog" },
    { id: "spec-orto", name: "Spec. ortopedije", title: "Ortoped" },
    { id: "spec-fizijatrija", name: "Spec. fizijatrije", title: "Fizijatar" },
    { id: "spec-psiholog", name: "Klinički psiholog", title: "Psiholog" },
    { id: "spec-dijetetika", name: "Spec. dijetetike", title: "Nutricionista" },
  ],
  providerLabel: "Izaberite stručnjaka",

  reviews: [
    {
      name: "Nikolina B.",
      service: "Individualna terapijska seansa",
      text: "Prvi put da lako zakažem termin kod psihologa bez neprijatnih poziva. Velika promena.",
    },
    {
      name: "Đorđe M.",
      service: "Individualna kinezi terapija",
      text: "Posle povrede ramena, terapije zakazujem online kad mi odgovara. Napredak vidljiv.",
    },
    {
      name: "Katarina S.",
      service: "Izrada personalizovanog jelovnika",
      text: "Plan ishrane konačno prilagođen mom rasporedu, ne generičan šablon. Rezultati vidljivi.",
    },
  ],
  rating: { average: "4.9", count: 205 },
  gallery: medGallery({ icon: Smile, label: "Telo i um" }),
  trust: MEDICAL_TRUST,

  business: bgBiz(
    "+381 11 311 23 44",
    "kontakt@ajamedika.rs",
    "Gospodara Vučića 50",
    "Pon – Sub 08 – 20h",
    "Mo-Sa 08:00-20:00",
  ),
  seo: {
    title: "Aja Medika — Zakažite pregled online · Beograd",
    description:
      "Kardiologija, ortopedija, fizijatrija, psihologija i dijetetika u Beogradu. Izaberite specijalnost i termin — zakažite online.",
  },
};
