import { motion } from "framer-motion";
import type { DemoSpecialty } from "@/lib/demos";
import { useIsMobile } from "@/hooks/use-mobile";
import { StepHeading } from "./StepHeading";

interface Props {
  specialties: DemoSpecialty[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

/** First step for multi-department demos (e.g. poliklinika) — one colored card per specialty. */
export function SpecialtyPicker({ specialties, selectedId, onSelect }: Props) {
  // On mobile, a per-card scroll-triggered stagger reads as a glitch (cards can
  // re-enter the viewport after a layout shift and "pop" instead of animating).
  // Swap it for a single, one-shot section fade instead of animating per card.
  const isMobile = useIsMobile(640);
  return (
    <section className="mx-auto mb-24 max-w-7xl sm:mb-32" id="specijalnosti">
      <StepHeading title="Izaberite Specijalnost" step="01" />
      <motion.div
        key={isMobile ? "mobile" : "desktop"}
        initial={isMobile ? { opacity: 0 } : false}
        whileInView={isMobile ? { opacity: 1 } : undefined}
        viewport={isMobile ? { once: true, margin: "-40px" } : undefined}
        transition={isMobile ? { duration: 0.2 } : undefined}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
      >
        {specialties.map((sp, i) => {
          const selected = selectedId === sp.id;
          const Icon = sp.icon;
          return (
            <motion.button
              key={sp.id}
              initial={isMobile ? false : { opacity: 0, y: 24 }}
              whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
              viewport={isMobile ? undefined : { once: true, margin: "-40px" }}
              transition={
                isMobile ? undefined : { duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }
              }
              onClick={() => onSelect(sp.id)}
              aria-pressed={selected}
              className="group relative flex flex-col items-center gap-4 rounded-2xl border p-6 text-center transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              style={{
                borderColor: selected
                  ? sp.color
                  : `color-mix(in oklch, ${sp.color} 30%, transparent)`,
                backgroundColor: selected
                  ? `color-mix(in oklch, ${sp.color} 12%, white)`
                  : "var(--color-card)",
                boxShadow: selected
                  ? `0 8px 24px -8px color-mix(in oklch, ${sp.color} 40%, transparent)`
                  : undefined,
              }}
            >
              <div
                className="grid size-14 place-items-center rounded-full transition-colors sm:size-16"
                style={{
                  backgroundColor: selected
                    ? sp.color
                    : `color-mix(in oklch, ${sp.color} 15%, white)`,
                  color: selected ? "white" : sp.color,
                }}
              >
                <Icon className="size-6 sm:size-7" />
              </div>
              <h3 className="font-serif text-base sm:text-lg">{sp.name}</h3>
            </motion.button>
          );
        })}
      </motion.div>
    </section>
  );
}
