import therapistElena from "@/assets/therapist-elena.jpg";
import therapistMarko from "@/assets/therapist-marko.jpg";
import therapistSofija from "@/assets/therapist-sofija.jpg";
import type { Lang } from "./i18n";
import type { ScheduleBlock } from "./demo-types";

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  therapistIds: string[];
}

export interface Therapist {
  id: string;
  name: string;
  title: string;
  image: string;
}

export const THERAPISTS: Therapist[] = [
  {
    id: "elena",
    name: "Elena Marković",
    title: "Deep Tissue Specijalista",
    image: therapistElena,
  },
  {
    id: "marko",
    name: "Marko Jovanović",
    title: "Relax & Sportska",
    image: therapistMarko,
  },
  {
    id: "sofija",
    name: "Sofija Lukić",
    title: "Aroma & Holistička",
    image: therapistSofija,
  },
];

export const SERVICES: Service[] = [
  {
    id: "relax",
    name: "Relax Masaža",
    description: "Nežni pokreti za potpuno opuštanje i bolju cirkulaciju.",
    duration: 60,
    price: 4500,
    therapistIds: ["marko", "sofija"],
  },
  {
    id: "deep",
    name: "Deep Tissue",
    description: "Intenzivna masaža za duboko opuštanje mišića.",
    duration: 75,
    price: 5800,
    therapistIds: ["elena", "marko"],
  },
  {
    id: "sport",
    name: "Sportska Masaža",
    description: "Oporavak i fleksibilnost za aktivne osobe.",
    duration: 60,
    price: 5200,
    therapistIds: ["elena", "marko"],
  },
  {
    id: "aroma",
    name: "Aroma Terapija",
    description: "Eterična ulja za balans uma i tela.",
    duration: 60,
    price: 4800,
    therapistIds: ["sofija"],
  },
  {
    id: "kamenje",
    name: "Vrelo Kamenje",
    description: "Terapija vulkanskim kamenjem za duboku relaksaciju.",
    duration: 90,
    price: 6500,
    therapistIds: ["elena", "sofija"],
  },
  {
    id: "refleks",
    name: "Refleksologija",
    description: "Masaža stopala koja stimuliše vitalne tačke tela.",
    duration: 45,
    price: 3900,
    therapistIds: ["marko", "sofija"],
  },
  {
    id: "parcijalna",
    name: "Parcijalna Masaža",
    description: "Fokus na vrat, ramena i leđa — brzo olakšanje.",
    duration: 30,
    price: 2500,
    therapistIds: ["elena", "marko", "sofija"],
  },
];

export interface Review {
  name: string;
  service: string;
  text: string;
}

export const REVIEWS: Review[] = [
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
];

export const RATING = { average: "4.9", count: 214 };

export const getService = (id: string) => SERVICES.find((s) => s.id === id);
export const getTherapist = (id: string) => THERAPISTS.find((t) => t.id === id);

export const formatPrice = (price: number) =>
  `${price.toLocaleString("sr-RS")} RSD`;

const localeFor = (lang: Lang) => (lang === "sr" ? "sr-Latn-RS" : "en-US");
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
/** Jan 3, 2000 is a Monday — anchor date for Monday-first weekday ordering. */
const MONDAY_ANCHOR = new Date(2000, 0, 3);

/** Full month names for the given language, capitalized (index 0 = January). */
export const monthNames = (lang: Lang): string[] =>
  Array.from({ length: 12 }, (_, m) =>
    capitalize(new Intl.DateTimeFormat(localeFor(lang), { month: "long" }).format(new Date(2000, m, 1))),
  );

/** 3-letter uppercase weekday abbreviations, Monday-first. */
export const dayAbbrs = (lang: Lang): string[] =>
  Array.from({ length: 7 }, (_, i) => {
    const d = new Date(MONDAY_ANCHOR);
    d.setDate(d.getDate() + i);
    return new Intl.DateTimeFormat(localeFor(lang), { weekday: "short" }).format(d).toUpperCase().slice(0, 3);
  });

/** Full weekday names, Monday-first (same order as dayAbbrs). */
export const dayFullNames = (lang: Lang): string[] =>
  Array.from({ length: 7 }, (_, i) => {
    const d = new Date(MONDAY_ANCHOR);
    d.setDate(d.getDate() + i);
    return new Intl.DateTimeFormat(localeFor(lang), { weekday: "long" }).format(d);
  });

export const toISODate = (d: Date) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};

export const formatDate = (iso: string, lang: Lang) => {
  const [y, m, d] = iso.split("-").map(Number);
  const month = monthNames(lang)[m - 1];
  return lang === "sr" ? `${d}. ${month} ${y}.` : `${month} ${d}, ${y}`;
};

/** "10:00h" in Serbian (colloquial for "at 10:00 hours"), "10:00" in English. */
export const formatTime = (time: string, lang: Lang) => (lang === "sr" ? `${time}h` : time);

/** Deterministic pseudo-random availability so slots feel real but stay stable. */
const hash = (str: string) => {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
};

export interface Slot {
  time: string;
  available: boolean;
}

/** Legacy default for demos without `bookingHours` — identical to the original hardcoded 09:00–18:00 loop. */
const DEFAULT_SCHEDULE: ScheduleBlock[] = [{ start: "09:00", end: "18:00" }];

const parseTimeToMinutes = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

/** Generates 15-min slots within each working block, skipping any gap between blocks (e.g. a midday break). */
export const generateSlots = (
  isoDate: string,
  therapistId: string,
  schedule: ScheduleBlock[] = DEFAULT_SCHEDULE,
): Slot[] => {
  const slots: Slot[] = [];
  for (const block of schedule) {
    const startMin = parseTimeToMinutes(block.start);
    const endMin = parseTimeToMinutes(block.end);
    for (let m = startMin; m < endMin; m += 15) {
      const time = `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
      const available = hash(`${isoDate}|${therapistId}|${time}`) % 10 < 6;
      slots.push({ time, available });
    }
  }
  return slots;
};