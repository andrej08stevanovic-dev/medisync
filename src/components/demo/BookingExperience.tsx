import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteHeader, SiteFooter, type HomeLink } from "@/components/SiteHeader";
import { ServiceGrid } from "@/components/booking/ServiceGrid";
import { SpecialtyPicker } from "@/components/booking/SpecialtyPicker";
import { TherapistPicker } from "@/components/booking/TherapistPicker";
import { BookingCalendar } from "@/components/booking/BookingCalendar";
import { TimeSlots } from "@/components/booking/TimeSlots";
import { ContactForm } from "@/components/booking/ContactForm";
import { StepHeading } from "@/components/booking/StepHeading";
import { BookingSummary } from "@/components/booking/BookingSummary";
import { FlowBreadcrumb } from "@/components/booking/FlowBreadcrumb";
import { TrustStrip } from "@/components/TrustStrip";
import { ReviewsSection } from "@/components/ReviewsSection";
import { HeroArt, GalleryStrip } from "@/components/demo/DemoVisuals";
import {
  getConfigProvider,
  getConfigService,
  getSpecialty,
  hasProviderStep,
  hasSpecialties,
  providersForService,
  servicesForSpecialty,
  type DemoConfig,
  type DemoService,
} from "@/lib/demos";

export interface BookingSearch {
  s?: string;
  t?: string;
  d?: string;
  v?: string;
  ime?: string;
  tel?: string;
  email?: string;
}

interface Props {
  config: DemoConfig;
  /** Landing route for the logo / header link. */
  home: HomeLink;
  /** Previously chosen values (from URL) so "Nazad na izmenu" restores them. */
  search: BookingSearch;
  /** Navigate to the review page carrying the full selection. */
  onReview: (search: Required<BookingSearch>) => void;
}

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

/** Synthetic provider id used when a demo has no provider step (e.g. lab). */
const NO_PROVIDER = "_default";

export function BookingExperience({ config, home, search, onReview }: Props) {
  const multiSpecialty = hasSpecialties(config);

  /**
   * Whether a given service needs the provider step at all. Reduces to the
   * old config-level `hasProviderStep` for every single-specialty demo.
   * Multi-specialty demos (poliklinika) can additionally skip it per service —
   * a lab draw (`noProviderStep`) or a service with exactly one provider
   * (auto-assigned, nothing to choose).
   */
  const providerStepNeeded = (svc: DemoService | undefined): boolean => {
    if (!hasProviderStep(config) || !svc || svc.noProviderStep) return false;
    if (!multiSpecialty) return true;
    return providersForService(config, svc).length > 1;
  };

  // Rekonstruiši prethodni izbor iz URL-a (dolazak sa "Nazad na izmenu"),
  // ali samo ako je validan — pogrešni parametri ne smeju da slome stranicu.
  const svc0 = getConfigService(config, search.s);
  const initService = svc0 ? search.s! : null;
  const initSpecialty = multiSpecialty ? (svc0?.specialtyId ?? null) : null;
  const svc0Providers = svc0 ? providersForService(config, svc0) : [];
  const initTherapist = !initService
    ? null
    : !hasProviderStep(config)
      ? NO_PROVIDER
      : !providerStepNeeded(svc0)
        ? svc0Providers.length === 1
          ? svc0Providers[0].id
          : NO_PROVIDER
        : search.t && svc0Providers.some((p) => p.id === search.t)
          ? search.t
          : null;
  const initDate = initTherapist && search.d ? search.d : null;
  const initTime = initDate && search.v ? search.v : null;

  const [specialtyId, setSpecialtyId] = useState<string | null>(initSpecialty);
  const [serviceId, setServiceId] = useState<string | null>(initService);
  const [therapistId, setTherapistId] = useState<string | null>(initTherapist);
  const [date, setDate] = useState<string | null>(initDate);
  const [time, setTime] = useState<string | null>(initTime);
  const [ime, setIme] = useState(initService ? (search.ime ?? "") : "");
  const [telefon, setTelefon] = useState(initService ? (search.tel ?? "") : "");
  const [email, setEmail] = useState(initService ? (search.email ?? "") : "");

  const specialty = getSpecialty(config, specialtyId ?? undefined);
  const service = getConfigService(config, serviceId ?? undefined);
  const therapist = getConfigProvider(config, therapistId ?? undefined);
  const serviceProviders = service ? providersForService(config, service) : [];
  const withProvider = providerStepNeeded(service);
  const visibleServices = multiSpecialty
    ? specialtyId
      ? servicesForSpecialty(config, specialtyId)
      : []
    : config.services;
  const showServiceStep = !multiSpecialty || !!specialtyId;
  // The sticky FlowBreadcrumb sits below the fixed header on multi-specialty
  // demos, so scrolled-to sections need extra top clearance to not tuck under it.
  const scrollMt = multiSpecialty ? "scroll-mt-44" : "scroll-mt-28";
  const stepOffset = multiSpecialty ? 1 : 0;
  const stepNum = (base: number) => String(base + stepOffset).padStart(2, "0");

  const specialtyRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const therapistRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const timeSlotsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  };

  // Prati prethodne vrednosti da auto-skrol reaguje samo na korisnikovu promenu
  // — da se ne okine na hidrataciji iz URL-a.
  const prevSpecialty = useRef(specialtyId);
  const prevService = useRef(serviceId);
  const prevTherapist = useRef(therapistId);
  const prevDate = useRef(date);
  const prevTime = useRef(time);

  useEffect(() => {
    if (specialtyId && specialtyId !== prevSpecialty.current) scrollTo(servicesRef);
    prevSpecialty.current = specialtyId;
  }, [specialtyId]);
  useEffect(() => {
    if (serviceId && serviceId !== prevService.current)
      scrollTo(withProvider ? therapistRef : calendarRef);
    prevService.current = serviceId;
  }, [serviceId, withProvider]);
  useEffect(() => {
    if (therapistId && therapistId !== prevTherapist.current && withProvider) scrollTo(calendarRef);
    prevTherapist.current = therapistId;
  }, [therapistId, withProvider]);
  useEffect(() => {
    if (date && date !== prevDate.current && window.matchMedia("(max-width: 1023px)").matches)
      scrollTo(timeSlotsRef);
    prevDate.current = date;
  }, [date]);
  useEffect(() => {
    if (time && time !== prevTime.current) scrollTo(formRef);
    prevTime.current = time;
  }, [time]);

  // Povratak iz pregleda sa popunjenim izborom: spusti do sekcije sa uslugama.
  useEffect(() => {
    if (initService) scrollTo(servicesRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectSpecialty = (id: string) => {
    if (id === specialtyId) return;
    setSpecialtyId(id);
    setServiceId(null);
    setTherapistId(null);
    setDate(null);
    setTime(null);
  };

  const selectService = (id: string) => {
    if (id === serviceId) return;
    setServiceId(id);
    const svc = getConfigService(config, id);
    const providers = svc ? providersForService(config, svc) : [];
    if (!hasProviderStep(config)) {
      // Demos with no provider step at all (e.g. laboratorija) — unchanged.
      setTherapistId(NO_PROVIDER);
      setTime(null);
      return;
    }
    if (!providerStepNeeded(svc)) {
      // Multi-specialty per-service skip: a lab service, or exactly one provider.
      setTherapistId(providers.length === 1 ? providers[0].id : NO_PROVIDER);
      setDate(null);
      setTime(null);
      return;
    }
    if (therapistId && !providers.some((p) => p.id === therapistId)) {
      setTherapistId(null);
      setDate(null);
      setTime(null);
    } else {
      setTime(null);
    }
  };

  const selectTherapist = (id: string) => {
    if (id === therapistId) return;
    setTherapistId(id);
    setTime(null);
  };

  const selectDate = (iso: string) => {
    if (iso === date) return;
    setDate(iso);
    setTime(null);
  };

  const formValid =
    ime.trim().length >= 2 &&
    telefon.replace(/\D/g, "").length >= 6 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const nextStep =
    withProvider && !therapistId
      ? { label: config.providerLabel, ref: therapistRef }
      : !date
        ? { label: "Izaberite datum", ref: calendarRef }
        : !time
          ? { label: "Izaberite vreme", ref: calendarRef }
          : { label: "Popunite podatke", ref: formRef };

  const goToReview = () => {
    if (!serviceId || !therapistId || !date || !time || !formValid) return;
    onReview({
      s: serviceId,
      t: therapistId,
      d: date,
      v: time,
      ime: ime.trim(),
      tel: telefon.trim(),
      email: email.trim(),
    });
  };

  const reviewsTitle = config.theme === "medical" ? "Šta kažu pacijenti" : "Šta kažu klijenti";

  return (
    <div
      data-theme={config.theme}
      className={`min-h-screen bg-cream font-sans text-ink selection:bg-sage/20 ${
        serviceId ? "pb-36 sm:pb-24" : ""
      }`}
    >
      <SiteHeader
        config={config}
        home={home}
        onCta={() =>
          (multiSpecialty ? specialtyRef : servicesRef).current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      />

      {multiSpecialty && (
        <FlowBreadcrumb
          steps={[
            {
              key: "specialty",
              label: "Specijalnost",
              complete: !!specialtyId,
              reachable: true,
              onNavigate: () =>
                specialtyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
            },
            {
              key: "service",
              label: "Usluga",
              complete: !!serviceId,
              reachable: !!specialtyId,
              onNavigate: () =>
                servicesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
            },
            ...(withProvider
              ? [
                  {
                    key: "provider",
                    label: "Lekar",
                    complete: !!therapistId,
                    reachable: !!serviceId,
                    onNavigate: () =>
                      therapistRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
                  },
                ]
              : []),
            {
              key: "term",
              label: "Termin",
              complete: !!date && !!time,
              reachable: !!therapistId,
              onNavigate: () =>
                calendarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
            },
          ]}
        />
      )}

      <main className={`px-6 pt-32 ${serviceId ? "pb-48" : "pb-24"}`}>
        {/* Hero */}
        <div className="mx-auto mb-24 max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-clay">
                {config.category}
              </p>
              <h1 className="mb-8 font-serif text-5xl leading-[1.1] sm:text-6xl lg:text-7xl">
                {config.hero.lead} <br />
                <span className="italic text-clay">{config.hero.emphasis}</span>
              </h1>
              <p className="mb-10 max-w-md text-lg leading-relaxed text-ink/60">
                {config.hero.subtext}
              </p>
              <button
                onClick={() =>
                  (multiSpecialty ? specialtyRef : servicesRef).current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="animate-breathe rounded-full bg-sage px-10 py-4 font-medium text-cream transition-all hover:scale-105 hover:bg-ink hover:[animation-play-state:paused] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              >
                Zakaži Termin
              </button>
              <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
                {config.hero.stats.map(([value, label]) => (
                  <div key={label}>
                    <p className="font-serif text-2xl">{value}</p>
                    <p className="text-xs uppercase tracking-widest text-ink/40">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-tr from-sage/25 via-clay/15 to-transparent blur-2xl"
              />
              <HeroArt config={config} />
            </motion.div>
          </div>
        </div>

        {/* Trust strip */}
        <TrustStrip items={config.trust} />

        {/* Step 0 (multi-specialty demos only): specialty */}
        {multiSpecialty && (
          <div ref={specialtyRef} className={scrollMt}>
            <SpecialtyPicker
              specialties={config.specialties!}
              selectedId={specialtyId}
              onSelect={selectSpecialty}
            />
          </div>
        )}

        {/* Step 1: services */}
        {multiSpecialty ? (
          <AnimatePresence>
            {showServiceStep && (
              <motion.div key="services" {...sectionAnim} ref={servicesRef} className={scrollMt}>
                <ServiceGrid
                  services={visibleServices}
                  selectedId={serviceId}
                  onSelect={selectService}
                  title={specialty ? `Izaberite Uslugu — ${specialty.name}` : "Izaberite Uslugu"}
                  step={stepNum(1)}
                  accentColor={specialty?.color}
                />
              </motion.div>
            )}
          </AnimatePresence>
        ) : (
          <div ref={servicesRef} className="scroll-mt-28">
            <ServiceGrid
              services={visibleServices}
              selectedId={serviceId}
              onSelect={selectService}
            />
          </div>
        )}

        {/* Step 2: providers (skipped when the demo/service has none) */}
        <AnimatePresence>
          {withProvider && service && (
            <motion.div key="therapists" {...sectionAnim} ref={therapistRef} className={scrollMt}>
              <TherapistPicker
                providers={serviceProviders}
                label={config.providerLabel}
                selectedId={therapistId}
                onSelect={selectTherapist}
                step={stepNum(2)}
                accentColor={specialty?.color}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 3: calendar + slots */}
        <AnimatePresence>
          {service && therapistId && (
            <motion.div key="calendar" {...sectionAnim} ref={calendarRef} className={scrollMt}>
              <section className="mx-auto mb-24 max-w-7xl sm:mb-32">
                <StepHeading title="Datum i Vreme" step={withProvider ? stepNum(3) : stepNum(2)} />
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                  <BookingCalendar selectedDate={date} onSelect={selectDate} />
                  <div ref={timeSlotsRef} className={scrollMt}>
                    {date ? (
                      <TimeSlots
                        date={date}
                        therapistId={therapistId}
                        selectedTime={time}
                        onSelect={setTime}
                      />
                    ) : (
                      <div className="flex h-full min-h-48 items-center justify-center rounded-3xl border border-dashed border-ink/15 text-ink/40">
                        Prvo izaberite datum u kalendaru
                      </div>
                    )}
                  </div>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 4: contact */}
        <AnimatePresence>
          {service && therapistId && date && time && (
            <motion.div key="form" {...sectionAnim} ref={formRef} className={scrollMt}>
              <section className="mx-auto mb-16 max-w-7xl">
                <StepHeading
                  title="Kontakt Detalji"
                  step={withProvider ? stepNum(4) : stepNum(3)}
                />
                <ContactForm
                  ime={ime}
                  telefon={telefon}
                  email={email}
                  onChange={(field, value) => {
                    if (field === "ime") setIme(value);
                    else if (field === "telefon") setTelefon(value);
                    else setEmail(value);
                  }}
                  onSubmit={goToReview}
                  valid={formValid}
                />
              </section>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gallery */}
        <GalleryStrip config={config} />

        {/* Social proof */}
        <ReviewsSection title={reviewsTitle} reviews={config.reviews} rating={config.rating} />
      </main>

      <BookingSummary
        service={service}
        therapist={therapist}
        date={date}
        time={time}
        nextLabel={nextStep.label}
        onNext={() => nextStep.ref.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
      />

      <SiteFooter config={config} />
    </div>
  );
}
