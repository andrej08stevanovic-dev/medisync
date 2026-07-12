import therapistElena from "@/assets/therapist-elena.jpg";
import therapistMarko from "@/assets/therapist-marko.jpg";
import therapistSofija from "@/assets/therapist-sofija.jpg";

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

export const SR_DAYS = ["PON", "UTO", "SRE", "ČET", "PET", "SUB", "NED"];
/** Full day names, Monday-first (same order as SR_DAYS). */
export const SR_DAYS_FULL = [
  "ponedeljak",
  "utorak",
  "sreda",
  "četvrtak",
  "petak",
  "subota",
  "nedelja",
];
export const SR_MONTHS = [
  "Januar",
  "Februar",
  "Mart",
  "April",
  "Maj",
  "Jun",
  "Jul",
  "Avgust",
  "Septembar",
  "Oktobar",
  "Novembar",
  "Decembar",
];

export const toISODate = (d: Date) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};

export const formatDateSr = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d}. ${SR_MONTHS[m - 1]} ${y}.`;
};

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

export const generateSlots = (isoDate: string, therapistId: string): Slot[] => {
  const slots: Slot[] = [];
  for (let hour = 9; hour < 18; hour++) {
    for (let min = 0; min < 60; min += 15) {
      const time = `${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
      const available = hash(`${isoDate}|${therapistId}|${time}`) % 10 < 6;
      slots.push({ time, available });
    }
  }
  return slots;
};