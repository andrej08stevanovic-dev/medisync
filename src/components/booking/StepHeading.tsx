export function StepHeading({ title, step }: { title: string; step: string }) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-2 sm:mb-12">
      <h2 className="font-serif text-3xl sm:text-4xl">{title}</h2>
      <span className="text-sm font-medium uppercase tracking-widest text-clay">
        Korak {step}
      </span>
    </div>
  );
}