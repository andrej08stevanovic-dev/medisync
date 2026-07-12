import { motion } from "framer-motion";
import { formatPrice } from "@/lib/booking-data";
import type { DemoService } from "@/lib/demos";
import { StepHeading } from "./StepHeading";

interface Props {
  services: DemoService[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  title?: string;
  step?: string;
  /** oklch color used for the duration label / hover dot (multi-specialty demos only). */
  accentColor?: string;
}

export function ServiceGrid({
  services,
  selectedId,
  onSelect,
  title = "Izaberite Uslugu",
  step = "01",
  accentColor,
}: Props) {
  return (
    <section className="mx-auto mb-24 max-w-7xl sm:mb-32" id="usluge">
      <StepHeading title={title} step={step} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => {
          const selected = selectedId === service.id;
          return (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => onSelect(service.id)}
              aria-pressed={selected}
              className={
                selected
                  ? "group relative rounded-2xl bg-sage p-8 text-left text-cream shadow-xl shadow-sage/25 ring-2 ring-sage ring-offset-2 ring-offset-cream transition-all duration-300 focus-visible:outline-none focus-visible:ring-ink"
                  : "group relative rounded-2xl border border-ink/5 bg-card p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-clay hover:shadow-xl hover:shadow-clay/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              }
            >
              <span
                className={
                  selected
                    ? "mb-4 block text-xs font-semibold uppercase tracking-widest text-cream/60"
                    : "mb-4 block text-xs font-semibold uppercase tracking-widest text-clay"
                }
                style={!selected && accentColor ? { color: accentColor } : undefined}
              >
                {service.duration} Min
              </span>
              <h3 className="mb-2 font-serif text-xl">{service.name}</h3>
              <p className={selected ? "mb-6 text-sm text-cream/70" : "mb-6 text-sm text-ink/50"}>
                {service.description}
              </p>
              <span className="text-lg font-medium">{formatPrice(service.price)}</span>
              <div
                className={
                  selected
                    ? "absolute right-4 top-4 flex size-6 items-center justify-center rounded-full bg-cream text-sage"
                    : "absolute right-4 top-4 size-2 rounded-full bg-clay opacity-0 transition-opacity group-hover:opacity-100"
                }
                style={!selected && accentColor ? { backgroundColor: accentColor } : undefined}
              >
                {selected && (
                  <svg
                    viewBox="0 0 24 24"
                    className="size-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
