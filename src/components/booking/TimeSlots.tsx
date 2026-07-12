import { motion } from "framer-motion";
import { generateSlots } from "@/lib/booking-data";

interface Props {
  date: string;
  therapistId: string;
  selectedTime: string | null;
  onSelect: (time: string) => void;
}

export function TimeSlots({ date, therapistId, selectedTime, onSelect }: Props) {
  const slots = generateSlots(date, therapistId).filter((s) => s.available);

  return (
    <div>
      <h3 className="mb-8 font-serif text-2xl">Dostupni Termini</h3>
      {slots.length === 0 ? (
        <p className="text-ink/50">Nema slobodnih termina za ovaj dan. Izaberite drugi datum.</p>
      ) : (
        <div className="grid max-h-[420px] grid-cols-3 gap-3 overflow-y-auto pr-1 sm:grid-cols-4">
          {slots.map((slot, i) => {
            const selected = selectedTime === slot.time;
            return (
              <motion.button
                key={`${date}-${therapistId}-${slot.time}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: Math.min(i * 0.02, 0.4) }}
                onClick={() => onSelect(slot.time)}
                aria-pressed={selected}
                aria-label={`Termin u ${slot.time}`}
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