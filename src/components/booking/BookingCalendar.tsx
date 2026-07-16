import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { dayAbbrs, dayFullNames, monthNames, toISODate } from "@/lib/booking-data";
import { useLanguage } from "@/lib/i18n";

interface Props {
  selectedDate: string | null;
  onSelect: (iso: string) => void;
}

export function BookingCalendar({ selectedDate, onSelect }: Props) {
  const { lang, t } = useLanguage();
  const months = monthNames(lang);
  const days = dayAbbrs(lang);
  const daysFull = dayFullNames(lang);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const firstDay = new Date(viewYear, viewMonth, 1);
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  // Monday-first offset
  const offset = (firstDay.getDay() + 6) % 7;

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else setViewMonth((m) => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else setViewMonth((m) => m + 1);
  };

  const isPastMonth =
    viewYear < today.getFullYear() ||
    (viewYear === today.getFullYear() && viewMonth <= today.getMonth());

  return (
    <div className="rounded-3xl border border-ink/5 bg-card p-6 sm:p-10">
      <div className="mb-8 flex items-center justify-between">
        <AnimatePresence mode="wait">
          <motion.h3
            key={`${viewYear}-${viewMonth}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="font-serif text-2xl"
          >
            {months[viewMonth]} {viewYear}
          </motion.h3>
        </AnimatePresence>
        <div className="flex gap-3">
          <button
            onClick={prevMonth}
            disabled={isPastMonth}
            aria-label={t.prevMonth}
            className="grid size-10 place-items-center rounded-full border border-ink/10 transition-colors hover:bg-ink hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft className="size-4" aria-hidden />
          </button>
          <button
            onClick={nextMonth}
            aria-label={t.nextMonth}
            className="grid size-10 place-items-center rounded-full border border-ink/10 transition-colors hover:bg-ink hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
          >
            <ChevronRight className="size-4" aria-hidden />
          </button>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-7 gap-1 text-center text-xs font-bold text-ink/30 sm:gap-2">
        {days.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center sm:gap-2">
        {Array.from({ length: offset }).map((_, i) => (
          <div key={`e-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const date = new Date(viewYear, viewMonth, day);
          const iso = toISODate(date);
          const disabled = date < today;
          const selected = selectedDate === iso;
          return (
            <button
              key={day}
              disabled={disabled}
              onClick={() => onSelect(iso)}
              aria-pressed={selected}
              aria-label={
                lang === "sr"
                  ? `${daysFull[(date.getDay() + 6) % 7]}, ${day}. ${months[viewMonth].toLowerCase()} ${viewYear}.`
                  : `${daysFull[(date.getDay() + 6) % 7]}, ${months[viewMonth]} ${day}, ${viewYear}`
              }
              className={
                selected
                  ? "rounded-xl bg-sage py-3 text-cream shadow-lg shadow-sage/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink sm:py-4"
                  : disabled
                    ? "rounded-xl py-3 text-ink/20 sm:py-4"
                    : "rounded-xl py-3 transition-all hover:scale-105 hover:bg-sage/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage sm:py-4"
              }
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}