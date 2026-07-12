import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { DEMOS, getDemo } from "@/lib/demos";

/**
 * Layout for every specialty demo. It only resolves the slug → config and shows
 * a friendly 404 for unknown slugs; the actual pages render in <Outlet />.
 */
export const Route = createFileRoute("/demo/$slug")({
  component: DemoLayout,
});

function DemoLayout() {
  const { slug } = Route.useParams();
  const config = getDemo(slug);

  if (!config) {
    const suggestions = Object.values(DEMOS).slice(0, 6);
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
        <div className="max-w-lg text-center">
          <p className="font-serif text-6xl font-bold text-foreground">404</p>
          <h1 className="mt-4 text-xl font-semibold text-foreground">Demo „{slug}" ne postoji</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Izaberite jednu od dostupnih ordinacija i salona:
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {suggestions.map((c) => (
              <Link
                key={c.slug}
                to="/demo/$slug"
                params={{ slug: c.slug }}
                className="rounded-full border border-input bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                {c.brand}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <Outlet />;
}
