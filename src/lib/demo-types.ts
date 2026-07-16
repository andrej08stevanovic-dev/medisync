/**
 * Types and shared helpers for demo configurations.
 *
 * Extracted from demos.ts so that per-clinic config files (in ./clinics/) can
 * import types and helpers without creating circular dependencies.
 */

import {
  CalendarCheck,
  Gem,
  HeartHandshake,
  Microscope,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { DemoIcon } from "@/components/demo-icons";

// ── Re-export DemoIcon so clinic files only need one import path ─────────────
export type { DemoIcon };

// ── Types ────────────────────────────────────────────────────────────────────

export type ThemeName = "medical" | "beauty" | "wellness";

/** One working block for a day (e.g. { start: "08:00", end: "13:00" }). */
export interface ScheduleBlock {
  start: string;
  end: string;
}

export interface DemoService {
  id: string;
  name: string;
  description: string;
  duration: number; // minutes
  price: number; // RSD
  /** Providers offering this service. Omit → offered by every provider. */
  providerIds?: string[];
  /** Groups this service under a DemoConfig.specialties entry (multi-specialty demos only). */
  specialtyId?: string;
  /** Force-skip the provider step for this service even if the demo has providers (e.g. a lab draw). */
  noProviderStep?: boolean;
}

export interface DemoSpecialty {
  id: string;
  name: string;
  icon: DemoIcon;
  /** oklch() accent color for this specialty's cards/avatars — scoped via inline style, not the global theme. */
  color: string;
  /** Locations/entities where this specialty is offered. Omit → offered at every location. */
  locationIds?: string[];
}

/** A location or entity (city branch, hospital/clinic/dom zdravlja, etc.) selectable before specialty. */
export interface DemoLocation {
  id: string;
  name: string;
  icon?: DemoIcon;
  color?: string;
  phone?: string;
  address?: string;
  hours?: ScheduleBlock[];
}

export interface DemoProvider {
  id: string;
  name: string;
  title: string;
}

export interface DemoReview {
  name: string;
  service: string;
  text: string;
}

export interface DemoTrust {
  icon: DemoIcon;
  title: string;
  text: string;
}

export interface DemoGalleryItem {
  icon: DemoIcon;
  label: string;
}

export interface DemoConfig {
  slug: string;
  /** Short word shown as the logo in header/footer (e.g. NOVA, AURA). */
  brand: string;
  /** Uppercase eyebrow above the hero heading. */
  category: string;
  /** Full business name (schema.org, footer). */
  name: string;
  description: string;
  hero: {
    lead: string;
    emphasis: string;
    subtext: string;
    icon: DemoIcon;
    stats: [string, string][];
  };
  services: DemoService[];
  providers: DemoProvider[];
  /** Label for the provider step. Empty string hides the step entirely. */
  providerLabel: string;
  /** Optional specialty grouping (e.g. a multi-department poliklinika). Adds a step before service selection. */
  specialties?: DemoSpecialty[];
  /** Optional location/entity grouping (e.g. a multi-branch clinic network). Adds a step before specialty selection. */
  locations?: DemoLocation[];
  reviews: DemoReview[];
  rating: { average: string; count: number };
  gallery: DemoGalleryItem[];
  trust: DemoTrust[];
  theme: ThemeName;
  /**
   * Working blocks used to generate bookable slots (see generateSlots in
   * booking-data.ts). Omit for the default single 09:00–18:00 block — every
   * existing demo keeps its current behavior unchanged. Set to multiple
   * blocks (e.g. 08:00–13:00 and 16:00–20:00) for a split schedule with a
   * midday break; no slots are generated in the gap between blocks.
   */
  bookingHours?: ScheduleBlock[];
  business: {
    phone: string;
    phoneHref: string;
    email: string;
    street: string;
    postalCode: string;
    city: string;
    address: string;
    hours: string;
    openingHoursSchema: string;
  };
  seo: { title: string; description: string };
}

// ── Shared presets ──────────────────────────────────────────────────────────

export const medStats = (patients: string, years: string): [string, string][] => [
  [patients, "zadovoljnih pacijenata"],
  ["4.9 ★", "prosečna ocena"],
  [years, "godina iskustva"],
];

export const beautyStats = (clients: string, years: string): [string, string][] => [
  [clients, "zadovoljnih klijenata"],
  ["4.9 ★", "prosečna ocena"],
  [years, "godina iskustva"],
];

export const MEDICAL_TRUST: DemoTrust[] = [
  {
    icon: CalendarCheck,
    title: "Zakazivanje za 30 sekundi",
    text: "Bez čekanja na telefonu. Izaberite slobodan termin online, bilo kada.",
  },
  {
    icon: Microscope,
    title: "Savremena dijagnostika",
    text: "Moderna oprema za precizan nalaz i brzu, pouzdanu dijagnozu.",
  },
  {
    icon: ShieldCheck,
    title: "Sterilno okruženje",
    text: "Sterilizacija instrumenata po najvišim evropskim standardima.",
  },
];

export const BEAUTY_TRUST: DemoTrust[] = [
  {
    icon: CalendarCheck,
    title: "Online zakazivanje 24/7",
    text: "Bez DM-ova i čekanja na odgovor — izaberite termin kad god poželite.",
  },
  {
    icon: Sparkles,
    title: "Vrhunski proizvodi",
    text: "Radimo isključivo sa proverenim, profesionalnim brendovima.",
  },
  {
    icon: ShieldCheck,
    title: "Higijena na prvom mestu",
    text: "Sterilan alat i besprekorna čistoća pre svakog tretmana.",
  },
];

export const medGallery = (extra: DemoGalleryItem): DemoGalleryItem[] => [
  { icon: HeartHandshake, label: "Naš tim" },
  extra,
  { icon: ShieldCheck, label: "Sterilizacija" },
];

export const beautyGallery = (extra: DemoGalleryItem): DemoGalleryItem[] => [
  { icon: HeartHandshake, label: "Naš tim" },
  extra,
  { icon: Gem, label: "Premium nega" },
];

/** Business info builder for Belgrade demos. */
export const bgBiz = (phone: string, email: string, street: string, hours: string, schema: string) => ({
  phone,
  phoneHref: `tel:${phone.replace(/[^\d+]/g, "")}`,
  email,
  street,
  postalCode: "11000",
  city: "Beograd",
  address: `${street}, 11000 Beograd`,
  hours,
  openingHoursSchema: schema,
});

/** Business info builder for any city (Niš, Vranje, etc.). */
export const cityBiz = (
  phone: string,
  email: string,
  street: string,
  postalCode: string,
  city: string,
  hours: string,
  schema: string,
) => ({
  phone,
  phoneHref: `tel:${phone.replace(/[^\d+]/g, "")}`,
  email,
  street,
  postalCode,
  city,
  address: `${street}, ${postalCode} ${city}`,
  hours,
  openingHoursSchema: schema,
});

export const MED_HOURS = "Pon – Sub 08 – 20h";
export const MED_SCHEMA = "Mo-Sa 08:00-20:00";
export const BEAUTY_HOURS = "Pon – Sub 09 – 21h";
export const BEAUTY_SCHEMA = "Mo-Sa 09:00-21:00";
