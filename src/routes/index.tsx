import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { BookingExperience, type BookingSearch } from "@/components/demo/BookingExperience";
import { DEMOS, DEFAULT_SLUG, demoMeta } from "@/lib/demos";

const str = (v: unknown) => (typeof v === "string" && v ? v : undefined);

export const Route = createFileRoute("/")({
  // Optional search params let "Nazad na izmenu" (na strani pregleda) vrati
  // korisnika ovde sa svim već izabranim vrednostima umesto praznog formulara.
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
  head: () => ({ meta: demoMeta(config) }),
  component: Index,
});

/** "/" is the original wellness demo, now driven by the shared config system. */
const config = DEMOS[DEFAULT_SLUG];

function Index() {
  const navigate = useNavigate();
  const search = Route.useSearch();

  return (
    <BookingExperience
      config={config}
      home={{ to: "/" }}
      search={search}
      onReview={(sel) => navigate({ to: "/pregled", search: sel })}
    />
  );
}
