import { Link, type LinkProps } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { DemoConfig } from "@/lib/demos";

const ctaClasses =
  "rounded-full bg-sage px-6 py-3 text-sm font-medium text-cream transition-all hover:scale-105 hover:bg-ink active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:px-8";

/** Where the logo / fallback CTA should link — the demo's own landing route. */
export type HomeLink = Pick<LinkProps, "to" | "params">;

export function SiteHeader({
  config,
  home,
  onCta,
}: {
  config: DemoConfig;
  home: HomeLink;
  onCta?: () => void;
}) {
  const { business } = config;
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-ink/5 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          {...home}
          className="rounded font-serif text-2xl font-bold tracking-tight text-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
        >
          {config.brand}
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 rounded text-sm text-ink/60 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-cream md:flex"
          >
            <Phone className="size-4" aria-hidden />
            {business.phone}
          </a>
          {onCta ? (
            <button onClick={onCta} className={ctaClasses}>
              Zakaži Termin
            </button>
          ) : (
            <Link {...home} className={ctaClasses}>
              Zakaži Termin
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export function SiteFooter({ config }: { config: DemoConfig }) {
  const { business } = config;
  return (
    <footer className="border-t border-ink/5 bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <p className="mb-3 font-serif text-2xl font-bold text-sage">{config.brand}</p>
          <p className="max-w-xs text-sm leading-relaxed text-ink/50">{config.description}</p>
        </div>
        <div className="text-sm">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink/40">
            Kontakt
          </h3>
          <a
            href={business.phoneHref}
            className="mb-3 flex items-center gap-2.5 text-ink/70 transition-colors hover:text-ink"
          >
            <Phone className="size-4 text-sage" aria-hidden />
            {business.phone}
          </a>
          <a
            href={`mailto:${business.email}`}
            className="flex items-center gap-2.5 text-ink/70 transition-colors hover:text-ink"
          >
            <Mail className="size-4 text-sage" aria-hidden />
            {business.email}
          </a>
        </div>
        <div className="text-sm">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink/40">
            Radno vreme i adresa
          </h3>
          <p className="mb-3 flex items-center gap-2.5 text-ink/70">
            <Clock className="size-4 text-sage" aria-hidden />
            {business.hours}
          </p>
          <p className="flex items-center gap-2.5 text-ink/70">
            <MapPin className="size-4 text-sage" aria-hidden />
            {business.address}
          </p>
        </div>
      </div>
      <div className="border-t border-ink/5 py-6">
        <p className="text-center text-sm text-ink/40">© 2026 {config.name}. Sva prava zadržana.</p>
      </div>
    </footer>
  );
}
