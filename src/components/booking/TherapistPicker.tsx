import { motion } from "framer-motion";
import type { DemoProvider } from "@/lib/demos";
import { ProviderAvatar } from "@/components/demo/DemoVisuals";
import { StepHeading } from "./StepHeading";

interface Props {
  providers: DemoProvider[];
  label: string;
  selectedId: string | null;
  onSelect: (id: string) => void;
  step?: string;
  /** oklch color used for the avatar fill (multi-specialty demos only). */
  accentColor?: string;
}

export function TherapistPicker({
  providers,
  label,
  selectedId,
  onSelect,
  step = "02",
  accentColor,
}: Props) {
  return (
    <div className="-mx-6 mb-24 bg-sage/5 px-6 py-14 sm:mb-32 sm:py-20">
      <section className="mx-auto max-w-7xl">
        <StepHeading title={label} step={step} />
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {providers.map((t, i) => {
            const selected = selectedId === t.id;
            return (
              <motion.button
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => onSelect(t.id)}
                aria-pressed={selected}
                className="group rounded-3xl p-2 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
              >
                <div
                  className={
                    selected
                      ? "mx-auto mb-6 size-40 rounded-full border-2 border-sage p-2 shadow-xl shadow-sage/20 transition-all sm:size-48"
                      : "mx-auto mb-6 size-40 rounded-full border-2 border-transparent p-2 transition-all group-hover:border-clay sm:size-48"
                  }
                >
                  <ProviderAvatar
                    name={t.name}
                    color={accentColor}
                    className={
                      selected ? "" : "opacity-90 transition-opacity group-hover:opacity-100"
                    }
                  />
                </div>
                <h4 className="mb-1 font-serif text-2xl">{t.name}</h4>
                <p
                  className={
                    selected
                      ? "text-sm font-medium uppercase tracking-widest text-sage"
                      : "text-sm font-medium uppercase tracking-widest text-clay"
                  }
                >
                  {t.title}
                </p>
              </motion.button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
