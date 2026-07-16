/**
 * Poligin — Beograd
 *
 * Generic providers only — no confirmed individual doctor names.
 */

import type { DemoConfig } from "@/lib/demo-types";
import { medStats, MEDICAL_TRUST, medGallery, bgBiz } from "@/lib/demo-types";
import { Baby, Flower2 } from "lucide-react";

export const poligin: DemoConfig = {
  slug: "poligin",
  brand: "POLIGIN",
  category: "Poliklinika · Beograd",
  name: "Poligin",
  description:
    "Ginekologija i pedijatrija — nega za mamu i bebu na jednom mestu, uz online zakazivanje.",
  theme: "medical",
  hero: {
    lead: "Za mamu i bebu,",
    emphasis: "na jednom mestu.",
    subtext:
      "Ginekologija i pedijatrija — izaberite specijalnost, lekara i termin online, bez čekanja na liniji.",
    icon: Flower2,
    stats: medStats("7.500+", "13"),
  },

  specialties: [
    { id: "ginekologija", name: "Ginekologija", icon: Flower2, color: "oklch(0.65 0.14 350)" },
    { id: "pedijatrija", name: "Pedijatrija", icon: Baby, color: "oklch(0.68 0.14 80)" },
  ],

  services: [
    // ── Ginekologija ──
    {
      id: "gin-pregled",
      name: "Ginekološki pregled + ultrazvuk",
      description: "Kompletan pregled sa ultrazvučnom dijagnostikom karlice.",
      duration: 30,
      price: 4200,
      specialtyId: "ginekologija",
      providerIds: ["spec-gin"],
    },
    {
      id: "gin-trudnoca",
      name: "Konsultacija za trudnoću",
      description: "Praćenje i saveti u svakoj fazi trudnoće.",
      duration: 30,
      price: 3800,
      specialtyId: "ginekologija",
      providerIds: ["spec-gin"],
    },
    {
      id: "gin-ctg",
      name: "CTG",
      description: "Praćenje otkucaja bebe i kontrakcija.",
      duration: 30,
      price: 2500,
      specialtyId: "ginekologija",
      providerIds: ["spec-gin"],
    },
    {
      id: "gin-papa",
      name: "Papa test",
      description: "Bezbolno uzimanje brisa za ranu prevenciju.",
      duration: 15,
      price: 2000,
      specialtyId: "ginekologija",
      providerIds: ["spec-gin"],
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
      id: "ped-novorodjence",
      name: "Prvi pregled novorođenčeta",
      description: "Kompletan pregled bebe u prvim nedeljama života.",
      duration: 30,
      price: 4000,
      specialtyId: "pedijatrija",
      providerIds: ["spec-ped"],
    },
    {
      id: "ped-sistematski",
      name: "Sistematski pregled",
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
  ],

  providers: [
    { id: "spec-gin", name: "Spec. ginekologije i akušerstva", title: "Ginekolog-akušer" },
    { id: "spec-ped", name: "Spec. pedijatrije", title: "Pedijatar" },
  ],
  providerLabel: "Izaberite lekara",

  reviews: [
    {
      name: "Milica J.",
      service: "Konsultacija za trudnoću",
      text: "Pratim trudnoću ovde od početka — zakazivanje online mi je uštedelo bezbroj poziva.",
    },
    {
      name: "Stefan D.",
      service: "Prvi pregled novorođenčeta",
      text: "Prvi pregled bebe obavljen pažljivo i strpljivo. Doktorka odgovorila na sva pitanja.",
    },
    {
      name: "Tijana M.",
      service: "Ginekološki pregled + ultrazvuk",
      text: "Zakazala pregled u dva klika, bez neprijatnih poziva. Sve diskretno i profesionalno.",
    },
  ],
  rating: { average: "4.9", count: 221 },
  gallery: medGallery({ icon: Baby, label: "Mama i beba" }),
  trust: MEDICAL_TRUST,

  business: bgBiz(
    "+381 11 300 12 33",
    "kontakt@poligin.rs",
    "Njegoševa 40",
    "Pon – Sub 08 – 20h",
    "Mo-Sa 08:00-20:00",
  ),
  seo: {
    title: "Poligin — Zakažite pregled online · Beograd",
    description:
      "Ginekologija i pedijatrija u Beogradu. Izaberite specijalnost, lekara i termin — zakažite online.",
  },
};
