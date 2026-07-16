/**
 * Longa Vita — Beograd (2 lokacije: Longa Vita i Aesthetica)
 *
 * Generic providers only — no confirmed individual doctor names.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, bgBiz } from "@/lib/demo-types";
import { Baby, Building2, ScanFace, Sparkles, Stethoscope, Wind } from "lucide-react";

export const longa_vita: DemoConfig = {
  slug: "longa-vita",
  brand: "LONGA VITA",
  category: "Poliklinika · Beograd",
  name: "Longa Vita",
  description:
    "Opšta medicina, pedijatrija, dermatologija i pulmologija/alergologija na dve lokacije — Longa Vita i Aesthetica, uz online zakazivanje.",
  theme: "medical",
  hero: {
    lead: "Dug i zdrav",
    emphasis: "život, korak po korak.",
    subtext:
      "Opšta medicina, pedijatrija, dermatologija i pulmologija/alergologija — izaberite lokaciju, specijalnost i termin online.",
    icon: Stethoscope,
    stats: medStats("8.900+", "16"),
  },

  locations: [
    {
      id: "longa-vita",
      name: "Longa Vita",
      icon: Building2,
      color: "oklch(0.58 0.13 260)",
      phone: "+381 11 277 89 10",
      address: "Bulevar Zorana Đinđića 64, 11070 Beograd",
    },
    {
      id: "aesthetica",
      name: "Aesthetica",
      icon: Sparkles,
      color: "oklch(0.60 0.12 330)",
      phone: "+381 11 277 89 20",
      address: "Vojislava Ilića 22, 11000 Beograd",
    },
  ],

  specialties: [
    { id: "opsta-medicina", name: "Opšta medicina", icon: Stethoscope, color: "oklch(0.58 0.09 175)" },
    {
      id: "pedijatrija",
      name: "Pedijatrija",
      icon: Baby,
      color: "oklch(0.68 0.14 80)",
      locationIds: ["longa-vita"],
    },
    {
      id: "dermatologija",
      name: "Dermatologija",
      icon: ScanFace,
      color: "oklch(0.55 0.11 310)",
      locationIds: ["aesthetica"],
    },
    {
      id: "pulmo-alergo",
      name: "Pulmologija i alergologija",
      icon: Wind,
      color: "oklch(0.55 0.12 195)",
      locationIds: ["longa-vita"],
    },
  ],

  services: [
    // ── Opšta medicina ──
    {
      id: "opsta-pregled",
      name: "Pregled lekara opšte prakse",
      description: "Osnovni pregled sa savetom i uputom po potrebi.",
      duration: 20,
      price: 2500,
      specialtyId: "opsta-medicina",
      providerIds: ["spec-opsta"],
    },
    {
      id: "opsta-uverenje",
      name: "Lekarsko uverenje",
      description: "Izdavanje uverenja za posao, vozačku ili sport.",
      duration: 20,
      price: 3000,
      specialtyId: "opsta-medicina",
      providerIds: ["spec-opsta"],
    },
    {
      id: "opsta-sistematski",
      name: "Sistematski pregled",
      description: "Sveobuhvatna evaluacija zdravlja sa osnovnim analizama.",
      duration: 45,
      price: 8000,
      specialtyId: "opsta-medicina",
      providerIds: ["spec-opsta"],
    },

    // ── Pedijatrija ──
    {
      id: "ped-pregled",
      name: "Pedijatrijski pregled",
      description: "Klinički pregled deteta uz savet i preporuke za roditelje.",
      duration: 20,
      price: 3000,
      specialtyId: "pedijatrija",
      providerIds: ["spec-ped"],
    },
    {
      id: "ped-sistematski",
      name: "Sistematski pregled za decu",
      description: "Kompletan sistematski pregled za upis u vrtić ili školu.",
      duration: 30,
      price: 4000,
      specialtyId: "pedijatrija",
      providerIds: ["spec-ped"],
    },
    {
      id: "ped-vakcinacija",
      name: "Vakcinacija",
      description: "Imunizacija po preporučenom kalendaru za decu.",
      duration: 15,
      price: 2500,
      specialtyId: "pedijatrija",
      providerIds: ["spec-ped"],
      noProviderStep: true,
    },

    // ── Dermatologija ──
    {
      id: "derma-pregled",
      name: "Dermatološki pregled",
      description: "Pregled kože, kose i noktiju uz savet za negu.",
      duration: 30,
      price: 3500,
      specialtyId: "dermatologija",
      providerIds: ["spec-derma"],
    },
    {
      id: "derma-dermatoskopija",
      name: "Dermatoskopija",
      description: "Digitalna analiza mladeža za ranu prevenciju.",
      duration: 20,
      price: 3800,
      specialtyId: "dermatologija",
      providerIds: ["spec-derma"],
    },
    {
      id: "derma-piling",
      name: "Hemijski piling",
      description: "Za sjajniju, glađu i ujednačeniju kožu.",
      duration: 45,
      price: 6500,
      specialtyId: "dermatologija",
      providerIds: ["spec-derma"],
    },

    // ── Pulmologija i alergologija ──
    {
      id: "pulmo-pregled",
      name: "Pulmološki pregled",
      description: "Specijalistički pregled respiratornog sistema sa dijagnostikom.",
      duration: 20,
      price: 4000,
      specialtyId: "pulmo-alergo",
      providerIds: ["spec-pulmo"],
    },
    {
      id: "pulmo-spirometrija",
      name: "Spirometrija",
      description: "Merenje kapaciteta i funkcije pluća — brzo i bezbolno.",
      duration: 15,
      price: 2800,
      specialtyId: "pulmo-alergo",
      providerIds: ["spec-pulmo"],
    },
    {
      id: "pulmo-alergo-test",
      name: "Alergološki testovi",
      description: "Kožni testovi za otkrivanje najčešćih inhalatornih alergena.",
      duration: 30,
      price: 4500,
      specialtyId: "pulmo-alergo",
      providerIds: ["spec-pulmo"],
    },
  ],

  providers: [
    { id: "spec-opsta", name: "Lekar opšte prakse", title: "Opšta medicina" },
    { id: "spec-ped", name: "Spec. pedijatrije", title: "Pedijatar" },
    { id: "spec-derma", name: "Spec. dermatologije", title: "Dermatolog" },
    { id: "spec-pulmo", name: "Spec. pulmologije i alergologije", title: "Pulmolog-alergolog" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Nataša V.",
      service: "Sistematski pregled za decu",
      text: "Sistematski za ćerku zakazala online, bez čekanja u čekaonici. Osoblje strpljivo sa decom.",
    },
    {
      name: "Ognjen S.",
      service: "Dermatoskopija",
      text: "Zakazao pregled mladeža u Aesthetici, sve objašnjeno detaljno i bez žurbe.",
    },
    {
      name: "Ivana Lj.",
      service: "Alergološki testovi",
      text: "Konačno znam na šta tačno reagujem. Testovi zakazani za nedelju dana, rezultat brz.",
    },
  ],
  rating: { average: "4.9", count: 276 },
  gallery: medGallery({ icon: Sparkles, label: "Dve lokacije" }),
  trust: MEDICAL_TRUST,

  business: bgBiz(
    "+381 11 277 89 10",
    "kontakt@longavita.rs",
    "Bulevar Zorana Đinđića 64",
    "Pon – Sub 08 – 20h",
    "Mo-Sa 08:00-20:00",
  ),
  seo: {
    title: "Longa Vita — Zakažite pregled online · Beograd",
    description:
      "Opšta medicina, pedijatrija, dermatologija i pulmologija/alergologija na dve lokacije u Beogradu. Zakažite online.",
  },
};
