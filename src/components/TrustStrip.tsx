import type { DemoTrust } from "@/lib/demos";

export function TrustStrip({ items }: { items: DemoTrust[] }) {
  return (
    <div className="mx-auto mb-24 max-w-7xl">
      <div className="grid gap-8 rounded-3xl border border-ink/5 bg-card p-8 sm:grid-cols-3 sm:gap-6 sm:p-10">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex gap-4">
            <div className="grid size-11 shrink-0 place-items-center rounded-full bg-sage/10 text-sage">
              <Icon className="size-5" aria-hidden />
            </div>
            <div>
              <h3 className="mb-1 font-serif text-lg">{title}</h3>
              <p className="text-sm leading-relaxed text-ink/50">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
