import { createFileRoute } from "@tanstack/react-router";
import { ReviewExperience, type ReviewSelection } from "@/components/demo/ReviewExperience";
import { DEMOS, DEFAULT_SLUG, demoMeta, getDemo } from "@/lib/demos";

export const Route = createFileRoute("/demo/$slug/pregled")({
  validateSearch: (search: Record<string, unknown>): ReviewSelection => ({
    s: String(search.s ?? ""),
    t: String(search.t ?? ""),
    d: String(search.d ?? ""),
    v: String(search.v ?? ""),
    ime: String(search.ime ?? ""),
    tel: String(search.tel ?? ""),
    email: String(search.email ?? ""),
  }),
  head: ({ params }) => {
    const config = getDemo(params.slug);
    return {
      // Base per-demo meta first (title/og/JSON-LD), then override title +
      // description with the review-page-specific copy and noindex it.
      meta: [
        ...(config ? demoMeta(config) : []),
        { title: config ? `Pregled rezervacije — ${config.name}` : "Pregled rezervacije" },
        { name: "description", content: "Proverite detalje vaše rezervacije pre potvrde termina." },
        { name: "robots", content: "noindex" },
      ],
    };
  },
  component: DemoReviewPage,
});

function DemoReviewPage() {
  const { slug } = Route.useParams();
  const selection = Route.useSearch();
  const config = getDemo(slug) ?? DEMOS[DEFAULT_SLUG];

  return (
    <ReviewExperience
      config={config}
      home={{ to: "/demo/$slug", params: { slug } }}
      selection={selection}
      backLink={{ to: "/demo/$slug", params: { slug }, search: selection }}
    />
  );
}
