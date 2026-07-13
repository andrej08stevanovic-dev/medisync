import { Star } from "lucide-react";
import type { DemoReview } from "@/lib/demos";

interface Props {
  title: string;
  reviews: DemoReview[];
  rating: { average: string; count: number };
}

export function ReviewsSection({ title, reviews, rating }: Props) {
  return (
    <section aria-label="Recenzije klijenata" className="mx-auto mb-24 max-w-7xl">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-2 sm:mb-12">
        <h2 className="font-serif text-3xl sm:text-4xl">{title}</h2>
        <span className="text-sm font-medium uppercase tracking-widest text-clay">
          {rating.average} / 5 · {rating.count} recenzija
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {reviews.map((review) => (
          <figure key={review.name} className="rounded-2xl border border-ink/5 bg-card p-8">
            <div className="mb-4 flex gap-1 text-clay" aria-label="5 od 5 zvezdica">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" aria-hidden />
              ))}
            </div>
            <blockquote className="mb-6 line-clamp-3 text-sm leading-relaxed text-ink/70 sm:line-clamp-none">
              „{review.text}"
            </blockquote>
            <figcaption>
              <span className="font-medium">{review.name}</span>
              <span className="block text-xs uppercase tracking-widest text-ink/40">
                {review.service}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
