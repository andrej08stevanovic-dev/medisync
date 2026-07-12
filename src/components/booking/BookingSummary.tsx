import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { formatDateSr, formatPrice } from "@/lib/booking-data";
import type { DemoProvider, DemoService } from "@/lib/demos";

interface Props {
  service: DemoService | undefined;
  therapist: DemoProvider | undefined;
  date: string | null;
  time: string | null;
  nextLabel: string;
  onNext: () => void;
}

export function BookingSummary({ service, therapist, date, time, nextLabel, onNext }: Props) {
  const parts = service
    ? ([
        service.name,
        therapist?.name,
        date ? formatDateSr(date) : null,
        time ? `${time}h` : null,
      ].filter(Boolean) as string[])
    : [];

  return (
    <AnimatePresence>
      {service && (
        <motion.aside
          initial={{ y: 96, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 96, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Pregled izbora"
          aria-live="polite"
          className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 sm:px-6"
        >
          <div className="mx-auto flex max-w-4xl flex-col gap-3 rounded-3xl border border-cream/10 bg-ink/95 px-6 py-4 text-cream shadow-2xl shadow-ink/30 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:rounded-full sm:px-8">
            <div className="flex min-w-0 items-baseline gap-3">
              <p className="min-w-0 truncate text-sm text-cream/80">{parts.join(" · ")}</p>
              <span className="shrink-0 font-serif text-base text-clay">
                {formatPrice(service.price)}
              </span>
            </div>
            <button
              onClick={onNext}
              className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:bg-cream active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              {nextLabel}
              <ArrowRight className="size-4" aria-hidden />
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
