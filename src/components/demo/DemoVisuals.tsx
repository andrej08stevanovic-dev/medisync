import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2, Star } from "lucide-react";
import type { DemoConfig } from "@/lib/demos";
import type { DemoIcon } from "@/components/demo-icons";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Self-contained premium visuals rendered from theme colors (no photos). The
 * whole set re-skins automatically inside a `data-theme` wrapper because every
 * fill uses the palette variables (sage/clay/cream/ink) via Tailwind classes.
 */

const initials = (name: string) =>
  name
    .replace(/^dr\.?\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

/**
 * The large hero panel — a deep gradient card carrying the specialty's line-art
 * motif plus floating "next slot / confirmed / rating" chips, mirroring the
 * reference design. Purely decorative, so it's aria-hidden.
 */
export function HeroArt({ config }: { config: DemoConfig }) {
  const Icon = config.hero.icon;
  const firstService = config.services[0];
  const firstProvider = config.providers[0];

  return (
    <div
      aria-hidden
      className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-sage to-ink shadow-2xl shadow-ink/20"
    >
      {/* soft light bloom */}
      <div className="absolute -right-16 -top-16 size-64 rounded-full bg-cream/10 blur-3xl" />
      {/* watermark line-art motif */}
      <Icon className="absolute -bottom-10 -right-6 size-72 text-cream/10 sm:size-80" />

      {/* next free slot */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-5 top-5 flex items-center gap-3 rounded-2xl border border-cream/15 bg-cream/10 px-4 py-3 backdrop-blur-md sm:left-7 sm:top-7"
      >
        <div className="grid size-9 place-items-center rounded-xl bg-cream/15 text-cream">
          <CalendarDays className="size-4" />
        </div>
        <div className="text-cream">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-cream/60">
            Sledeći slobodan termin
          </p>
          <p className="font-serif text-base leading-tight">Danas u 14:30</p>
        </div>
      </motion.div>

      {/* confirmed booking */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-5 top-1/2 flex -translate-y-1/2 items-center gap-3 rounded-2xl border border-cream/15 bg-cream/10 px-4 py-3 backdrop-blur-md sm:right-7"
      >
        <CheckCircle2 className="size-6 text-clay" />
        <div className="text-cream">
          <p className="text-sm font-semibold leading-tight">Termin potvrđen</p>
          {firstService && (
            <p className="text-xs text-cream/60">
              {firstService.name}
              {firstProvider ? ` · ${firstProvider.name}` : ""}
            </p>
          )}
        </div>
      </motion.div>

      {/* rating */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-5 left-5 rounded-2xl border border-cream/15 bg-cream/10 px-4 py-3 backdrop-blur-md sm:bottom-7 sm:left-7"
      >
        <div className="mb-1 flex gap-0.5 text-clay">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-current" />
          ))}
        </div>
        <p className="text-xs text-cream/80">
          {config.rating.average} · {config.rating.count} recenzija
        </p>
      </motion.div>
    </div>
  );
}

/**
 * Gradient monogram avatar used for providers (no stock photos). An optional
 * `color` (oklch string) overrides the gradient with a flat specialty color —
 * used by multi-department demos to tint each doctor by their department.
 */
export function ProviderAvatar({
  name,
  className,
  color,
}: {
  name: string;
  className?: string;
  color?: string;
}) {
  return (
    <div
      className={`grid size-full place-items-center rounded-full ${color ? "" : "bg-gradient-to-br from-sage to-ink"} ${className ?? ""}`}
      style={color ? { backgroundColor: color } : undefined}
      aria-hidden
    >
      <span className="font-serif text-3xl text-cream sm:text-4xl">{initials(name)}</span>
    </div>
  );
}

function GalleryTile({
  icon: Icon,
  label,
  i,
  animate,
}: {
  icon: DemoIcon;
  label: string;
  i: number;
  animate: boolean;
}) {
  return (
    <motion.figure
      initial={animate ? { opacity: 0, y: 24 } : false}
      whileInView={animate ? { opacity: 1, y: 0 } : undefined}
      viewport={animate ? { once: true, margin: "-40px" } : undefined}
      transition={
        animate ? { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } : undefined
      }
      className="group relative flex aspect-[16/10] w-[78%] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-br from-sage to-ink p-6 shadow-lg shadow-ink/10 sm:aspect-[4/5] sm:w-auto sm:shrink sm:snap-align-none"
    >
      <div className="absolute -right-6 -top-6 size-40 rounded-full bg-cream/10 blur-2xl" />
      <Icon className="absolute right-4 top-4 size-24 text-cream/10 transition-transform duration-500 group-hover:scale-110 sm:size-28" />
      <figcaption className="relative font-serif text-xl text-cream">{label}</figcaption>
    </motion.figure>
  );
}

/**
 * Themed gallery strip driven by config.gallery. On mobile this is a
 * horizontal snap-scroll carousel (peeking next card) instead of three
 * stacked full-width cards — those ate ~3 screens of scroll for three short
 * facts. Untouched from sm: up (still the original 3-column grid).
 */
export function GalleryStrip({ config }: { config: DemoConfig }) {
  const isMobile = useIsMobile(640);
  if (config.gallery.length === 0) return null;
  return (
    <section aria-label="Galerija" className="mx-auto mb-24 max-w-7xl">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-2 sm:mb-12">
        <h2 className="font-serif text-3xl sm:text-4xl">Naš prostor</h2>
        <span className="text-sm font-medium uppercase tracking-widest text-clay">
          {config.category.split("·")[0]?.trim()}
        </span>
      </div>
      <motion.div
        key={isMobile ? "mobile" : "desktop"}
        initial={isMobile ? { opacity: 0 } : false}
        whileInView={isMobile ? { opacity: 1 } : undefined}
        viewport={isMobile ? { once: true, margin: "-40px" } : undefined}
        transition={isMobile ? { duration: 0.2 } : undefined}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:pb-0"
      >
        {config.gallery.map((item, i) => (
          <GalleryTile
            key={item.label}
            icon={item.icon}
            label={item.label}
            i={i}
            animate={!isMobile}
          />
        ))}
      </motion.div>
    </section>
  );
}
