import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { BookingExperience, type BookingSearch } from "@/components/demo/BookingExperience";
import { DEMOS, DEFAULT_SLUG, demoMeta, getDemo } from "@/lib/demos";

const str = (v: unknown) => (typeof v === "string" && v ? v : undefined);

export const Route = createFileRoute("/demo/$slug/")({
  validateSearch: (search: Record<string, unknown>): BookingSearch => ({
    s: str(search.s),
    t: str(search.t),
    d: str(search.d),
    v: str(search.v),
    ime: str(search.ime),
    tel: str(search.tel),
    email: str(search.email),
    location: str(search.location),
  }),
  head: ({ params }) => {
    const config = getDemo(params.slug);
    // Full per-demo meta (title/description/og/twitter/JSON-LD) — without this
    // the page would silently inherit the root's AURA Wellness Studio defaults.
    return config ? { meta: demoMeta(config) } : {};
  },
  component: DemoBookingPage,
});

function DemoBookingPage() {
  const { slug } = Route.useParams();
  const search = Route.useSearch();
  const navigate = useNavigate();
  // The layout guarantees a valid slug before this renders.
  const config = getDemo(slug) ?? DEMOS[DEFAULT_SLUG];

  return (
    <BookingExperience
      config={config}
      home={{ to: "/demo/$slug", params: { slug } }}
      search={search}
      onReview={(sel) => navigate({ to: "/demo/$slug/pregled", params: { slug }, search: sel })}
    />
  );
}
