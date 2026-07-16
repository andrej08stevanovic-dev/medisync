import { useEffect, useState } from "react";
import { Link, type LinkProps } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { SiteHeader, SiteFooter, type HomeLink } from "@/components/SiteHeader";
import { formatDate, formatTime, formatPrice } from "@/lib/booking-data";
import { getConfigProvider, getConfigService, type DemoConfig } from "@/lib/demos";
import { useLanguage } from "@/lib/i18n";

export interface ReviewSelection {
  s: string;
  t: string;
  d: string;
  v: string;
  ime: string;
  tel: string;
  email: string;
}

interface Props {
  config: DemoConfig;
  home: HomeLink;
  selection: ReviewSelection;
  /** Link back to the booking page with the selection preserved. */
  backLink: Pick<LinkProps, "to" | "params" | "search">;
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-xs uppercase tracking-widest text-cream/50">{label}</span>
      <span className="font-serif text-lg sm:text-xl">{value}</span>
    </div>
  );
}

export function ReviewExperience({ config, home, selection, backLink }: Props) {
  const [confirmed, setConfirmed] = useState(false);
  const { lang, t } = useLanguage();

  // Uvek startuj sa vrha strane (dolazak sa skrolovane početne).
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const service = getConfigService(config, selection.s);
  const therapist = getConfigProvider(config, selection.t);
  const providerLabel = config.providerLabel || t.fallbackAppointment;

  if (!service || !selection.d || !selection.v || !selection.ime) {
    return (
      <div
        data-theme={config.theme}
        className="flex min-h-screen flex-col items-center justify-center gap-6 bg-cream px-6 text-center"
      >
        <h1 className="font-serif text-3xl text-ink">{t.reservationNotFound}</h1>
        <p className="text-ink/50">{t.missingDataRestart}</p>
        <Link
          {...home}
          className="rounded-full bg-sage px-8 py-3 font-medium text-cream transition-all hover:scale-105 hover:bg-ink"
        >
          {t.backHome}
        </Link>
      </div>
    );
  }

  return (
    <div
      data-theme={config.theme}
      className="min-h-screen bg-cream font-sans text-ink selection:bg-sage/20"
    >
      <SiteHeader config={config} home={home} />

      <main className="px-4 pb-6 pt-24 sm:px-6 sm:pb-24 sm:pt-32">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-ink p-6 text-cream shadow-2xl sm:rounded-[3rem] sm:p-12 lg:p-20">
            <div className="absolute right-0 top-0 size-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-sage/20 blur-3xl" />

            <div className="relative z-10">
              <AnimatePresence mode="wait">
                {!confirmed ? (
                  <motion.div
                    key="review"
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35 }}
                    className="flex max-h-[calc(100dvh-10.5rem)] flex-col sm:block sm:max-h-none"
                  >
                    <h1 className="shrink-0 mb-6 text-center font-serif text-2xl sm:mb-12 sm:text-4xl">
                      {t.bookingReview}
                    </h1>

                    <div className="mb-6 min-h-0 flex-1 space-y-4 overflow-y-auto border-y border-cream/10 py-6 sm:mb-12 sm:flex-none sm:space-y-8 sm:overflow-visible sm:py-12">
                      <Row label={t.rowService} value={`${service.name} (${service.duration} min)`} />
                      {therapist && (
                        <Row
                          label={providerLabel.replace(/^Izaberite\s+/i, "") || t.fallbackAppointment}
                          value={therapist.name}
                        />
                      )}
                      <Row label={t.rowDate} value={formatDate(selection.d, lang)} />
                      <Row label={t.rowTime} value={formatTime(selection.v, lang)} />
                      <Row label={t.rowClient} value={selection.ime} />
                      <Row label={t.rowPhone} value={selection.tel} />
                      <Row label={t.rowEmail} value={selection.email} />
                      <div className="flex flex-col gap-2 border-t border-cream/5 pt-6 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
                        <span className="font-bold uppercase tracking-widest text-clay">
                          {t.totalToPay}
                        </span>
                        <span className="font-serif text-3xl text-clay sm:text-4xl">
                          {formatPrice(service.price)}
                        </span>
                      </div>
                    </div>

                    <div className="shrink-0 flex flex-col items-center gap-3 sm:gap-4">
                      <button
                        onClick={() => setConfirmed(true)}
                        className="w-full max-w-sm rounded-2xl bg-clay py-4 text-lg font-bold text-ink transition-all hover:scale-105 hover:bg-cream active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:py-6"
                      >
                        {t.confirmBooking}
                      </button>
                      <Link
                        {...backLink}
                        className="text-sm text-cream/50 underline-offset-4 transition-colors hover:text-cream hover:underline"
                      >
                        {t.backToEdit}
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center py-12 text-center sm:py-16"
                  >
                    <div className="animate-check-pop mb-8 flex size-24 items-center justify-center rounded-full bg-sage/20">
                      <motion.svg
                        viewBox="0 0 52 52"
                        className="size-12 text-sage"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <motion.path
                          d="M14 27l8 8 16-18"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                        />
                      </motion.svg>
                    </div>
                    <motion.h2
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="mb-4 font-serif text-3xl sm:text-4xl"
                    >
                      {t.bookingSuccess}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.65, duration: 0.5 }}
                      className="mb-10 max-w-md text-cream/60"
                    >
                      {t.confirmationMessage(
                        selection.ime,
                        service.name.toLowerCase(),
                        therapist ? t.withProvider(therapist.name) : "",
                        formatDate(selection.d, lang),
                        formatTime(selection.v, lang),
                      )}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      <Link
                        {...home}
                        className="rounded-full bg-sage px-10 py-4 font-medium text-cream transition-all hover:scale-105 hover:bg-cream hover:text-ink active:scale-95"
                      >
                        {t.backHome}
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.section>
      </main>

      <SiteFooter config={config} />
    </div>
  );
}
