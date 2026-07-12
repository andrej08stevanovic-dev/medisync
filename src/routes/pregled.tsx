import { createFileRoute } from "@tanstack/react-router";
import { ReviewExperience, type ReviewSelection } from "@/components/demo/ReviewExperience";
import { DEMOS, DEFAULT_SLUG, demoMeta } from "@/lib/demos";

export const Route = createFileRoute("/pregled")({
  validateSearch: (search: Record<string, unknown>): ReviewSelection => ({
    s: String(search.s ?? ""),
    t: String(search.t ?? ""),
    d: String(search.d ?? ""),
    v: String(search.v ?? ""),
    ime: String(search.ime ?? ""),
    tel: String(search.tel ?? ""),
    email: String(search.email ?? ""),
  }),
  head: () => ({
    meta: [
      ...demoMeta(config),
      { title: `Pregled rezervacije — ${config.name}` },
      { name: "description", content: "Proverite detalje vaše rezervacije pre potvrde termina." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ReviewPage,
});

const config = DEMOS[DEFAULT_SLUG];

function ReviewPage() {
  const selection = Route.useSearch();
  return (
    <ReviewExperience
      config={config}
      home={{ to: "/" }}
      selection={selection}
      backLink={{ to: "/", search: selection }}
    />
  );
}
