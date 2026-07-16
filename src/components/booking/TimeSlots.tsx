import { motion } from "framer-motion";
import { generateSlots } from "@/lib/booking-data";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/lib/i18n";
import type { ScheduleBlock } from "@/lib/demo-types";

interface Props {
  date: string;
  therapistId: string;
  selectedTime: string | null;
  onSelect: (time: string) => void;
  /** Working blocks for slot generation. Omit for the default 09:00–18:00 block. */
  schedule?: ScheduleBlock[];
}

export function TimeSlots({ date, therapistId, selectedTime, onSelect, schedule }: Props) {
  const { t } = useLanguage();
  const slots = generateSlots(date, therapistId, schedule).filter((s) => s.available);
  // This is the last screen before conversion — on mobile, any entrance stagger
  // here reads as friction/glitch at the exact moment intent to book is highest.
  // Show the grid instantly and keep only tap feedback.
  const isMobile = useIsMobile(640);

  return (
    <div>
      <h3 className="mb-8 font-serif text-2xl">{t.availableSlots}</h3>
      {slots.length === 0 ? (
        <p className="text-ink/50">{t.noSlotsForDay}</p>
      ) : (
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
          {slots.map((slot, i) => {
            const selected = selectedTime === slot.time;
            return (
              <motion.button
                key={`${date}-${therapistId}-${slot.time}-${isMobile ? "m" : "d"}`}
                initial={isMobile ? false : { opacity: 0, scale: 0.9 }}
                animate={isMobile ? undefined : { opacity: 1, scale: 1 }}
                whileTap={isMobile ? { scale: 0.97 } : undefined}
                transition={
                  isMobile ? undefined : { duration: 0.25, delay: Math.min(i * 0.02, 0.4) }
                }
                onClick={() => onSelect(slot.time)}
                aria-pressed={selected}
                aria-label={t.slotAt(slot.time)}
                className={
                  selected
                    ? "rounded-xl border-2 border-sage bg-sage/5 px-2 py-4 text-sm font-bold text-sage shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                    : "rounded-xl border border-ink/10 px-2 py-4 text-sm font-medium transition-all hover:scale-105 hover:border-sage hover:text-sage active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                }
              >
                {slot.time}
              </motion.button>
            );
          })}
        </div>
      )}
    </div>
  );
}
