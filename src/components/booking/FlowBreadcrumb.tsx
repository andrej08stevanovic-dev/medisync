import { useLanguage } from "@/lib/i18n";

interface BreadcrumbStep {
  key: string;
  label: string;
  complete: boolean;
  reachable: boolean;
  onNavigate: () => void;
}

/**
 * Sticky progress trail for multi-step flows that gain an extra step (e.g. the
 * specialty picker on poliklinika). Only rendered for demos with specialties —
 * single-specialty demos rely on the existing sticky BookingSummary instead.
 */
export function FlowBreadcrumb({ steps }: { steps: BreadcrumbStep[] }) {
  const { t } = useLanguage();
  return (
    <nav
      aria-label={t.bookingProgress}
      className="sticky top-20 z-30 w-full border-b border-ink/5 bg-cream/90 px-6 py-3 backdrop-blur-md"
    >
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-2 gap-y-1">
        {steps.map((step, i) => (
          <li key={step.key} className="flex items-center gap-2">
            {i > 0 && <span className="text-ink/20">/</span>}
            <button
              type="button"
              disabled={!step.reachable}
              onClick={step.onNavigate}
              aria-current={!step.complete && step.reachable ? "step" : undefined}
              className={
                step.complete
                  ? "rounded text-xs font-semibold uppercase tracking-widest text-sage transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                  : step.reachable
                    ? "rounded text-xs font-semibold uppercase tracking-widest text-clay transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                    : "text-xs font-semibold uppercase tracking-widest text-ink/25"
              }
            >
              {step.label}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
