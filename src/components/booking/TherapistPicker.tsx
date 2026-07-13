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
  // On mobile, a full "hero" card per doctor (large centered avatar) costs too
  // much scroll once there's a real list to compare. From sm: up this is
  // untouched — only the mobile (<640px) layout switches to a compact,
  // horizontal list-item row so 3+ providers can be scanned without scrolling
  // past each one individually.
  const compact = providers.length >= 3;
  return (
    <div className="-mx-6 mb-24 bg-sage/5 px-6 py-14 sm:mb-32 sm:py-20">
      <section className="mx-auto max-w-7xl">
        <StepHeading title={label} step={step} />
        <div
          className={
            compact
              ? "flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-10 md:grid-cols-3"
              : "grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3"
          }
        >
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
                className={
                  compact
                    ? "group flex items-center gap-4 rounded-2xl p-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage sm:flex-col sm:rounded-3xl sm:p-2 sm:text-center"
                    : "group rounded-3xl p-2 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                }
              >
                <div
                  className={
                    compact
                      ? selected
                        ? "size-20 shrink-0 rounded-full border-2 border-sage p-1.5 shadow-lg shadow-sage/20 transition-all sm:mx-auto sm:mb-6 sm:size-48 sm:p-2 sm:shadow-xl"
                        : "size-20 shrink-0 rounded-full border-2 border-transparent p-1.5 transition-all group-hover:border-clay sm:mx-auto sm:mb-6 sm:size-48 sm:p-2"
                      : selected
                        ? "mx-auto mb-6 size-28 rounded-full border-2 border-sage p-2 shadow-xl shadow-sage/20 transition-all sm:size-48"
                        : "mx-auto mb-6 size-28 rounded-full border-2 border-transparent p-2 transition-all group-hover:border-clay sm:size-48"
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
                {compact ? (
                  <div className="min-w-0 sm:contents">
                    <h4 className="overflow-hidden text-ellipsis whitespace-nowrap font-serif text-lg sm:mb-1 sm:overflow-visible sm:whitespace-normal sm:text-2xl">
                      {t.name}
                    </h4>
                    <p
                      className={
                        selected
                          ? "text-xs font-medium uppercase tracking-widest text-sage sm:text-sm"
                          : "text-xs font-medium uppercase tracking-widest text-clay sm:text-sm"
                      }
                    >
                      {t.title}
                    </p>
                  </div>
                ) : (
                  <>
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
                  </>
                )}
              </motion.button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
