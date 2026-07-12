import { useRef, useState } from "react";

type Field = "ime" | "telefon" | "email";

interface Props {
  ime: string;
  telefon: string;
  email: string;
  onChange: (field: Field, value: string) => void;
  onSubmit: () => void;
  valid: boolean;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (field: Field, value: string): string | null => {
  switch (field) {
    case "ime":
      return value.trim().length >= 2 ? null : "Unesite ime i prezime.";
    case "telefon":
      return value.replace(/\D/g, "").length >= 6
        ? null
        : "Unesite ispravan broj telefona.";
    case "email":
      return EMAIL_RE.test(value.trim()) ? null : "Unesite ispravnu email adresu.";
  }
};

const FIELDS: { field: Field; label: string; type: string; autoComplete: string }[] = [
  { field: "ime", label: "Ime i prezime", type: "text", autoComplete: "name" },
  { field: "telefon", label: "Broj telefona", type: "tel", autoComplete: "tel" },
  { field: "email", label: "Email adresa", type: "email", autoComplete: "email" },
];

export function ContactForm({ ime, telefon, email, onChange, onSubmit, valid }: Props) {
  const values: Record<Field, string> = { ime, telefon, email };
  const [touched, setTouched] = useState<Record<Field, boolean>>({
    ime: false,
    telefon: false,
    email: false,
  });
  const [attempted, setAttempted] = useState(false);
  const inputRefs = useRef<Record<Field, HTMLInputElement | null>>({
    ime: null,
    telefon: null,
    email: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (valid) {
      onSubmit();
      return;
    }
    setAttempted(true);
    const firstInvalid = FIELDS.find(({ field }) => validate(field, values[field]));
    if (firstInvalid) inputRefs.current[firstInvalid.field]?.focus();
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-xl">
      <h3 className="mb-8 text-center font-serif text-3xl">Vaši Podaci</h3>
      <div className="space-y-6">
        {FIELDS.map(({ field, label, type, autoComplete }) => {
          const error = validate(field, values[field]);
          const showError = (touched[field] || attempted) && error;
          return (
            <div key={field}>
              <div className="relative">
                <input
                  ref={(el) => {
                    inputRefs.current[field] = el;
                  }}
                  id={`booking-${field}`}
                  type={type}
                  value={values[field]}
                  onChange={(e) => onChange(field, e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, [field]: true }))}
                  placeholder=" "
                  autoComplete={autoComplete}
                  aria-invalid={showError ? true : undefined}
                  aria-describedby={showError ? `booking-${field}-error` : undefined}
                  className={`peer w-full border-b bg-transparent pb-3 pt-6 outline-none transition-colors focus:border-sage ${
                    showError ? "border-destructive" : "border-ink/20"
                  }`}
                />
                <label
                  htmlFor={`booking-${field}`}
                  className="pointer-events-none absolute left-0 top-6 text-ink/40 transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:tracking-wide peer-focus:text-sage peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:tracking-wide"
                >
                  {label}
                </label>
              </div>
              {showError && (
                <p
                  id={`booking-${field}-error`}
                  role="alert"
                  className="mt-2 text-xs text-destructive"
                >
                  {error}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <button
        type="submit"
        className="mt-10 w-full rounded-2xl bg-sage py-5 text-lg font-bold text-cream transition-all hover:scale-[1.02] hover:bg-ink active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
      >
        Zakaži
      </button>
      {attempted && !valid && (
        <p role="alert" className="mt-3 text-center text-sm text-destructive">
          Proverite označena polja iznad.
        </p>
      )}
    </form>
  );
}
