import { createFileRoute } from "@tanstack/react-router";
import { Play } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Conheça nossos Serviços | Hospital Porto Dias" },
      {
        name: "description",
        content:
          "Conheça as especialidades médicas do Hospital Porto Dias: Cardiologia, Ortopedia, Neurologia, Pediatria, Ginecologia, Dermatologia, Oftalmologia, Endocrinologia e Gastroenterologia.",
      },
      { property: "og:title", content: "Conheça nossos Serviços | Hospital Porto Dias" },
      {
        property: "og:description",
        content:
          "Especialidades médicas do Hospital Porto Dias.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const specialties = [
  { name: "Cardiologia", url: "https://www.hospitalportodias.com.br/cardiologia" },
  { name: "Ortopedia", url: "https://www.hospitalportodias.com.br/ortopedia" },
  { name: "Neurologia", url: "https://www.hospitalportodias.com.br/neurologia" },
  { name: "Pediatria", url: "https://www.hospitalportodias.com.br/pediatria" },
  { name: "Ginecologia", url: "https://www.hospitalportodias.com.br/ginecologia" },
  { name: "Dermatologia", url: "https://www.hospitalportodias.com.br/dermatologia" },
  { name: "Oftalmologia", url: "https://www.hospitalportodias.com.br/oftalmologia" },
  { name: "Endocrinologia", url: "https://www.hospitalportodias.com.br/endocrinologia" },
  { name: "Gastroenterologia", url: "https://www.hospitalportodias.com.br/gastroenterologia" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 flex flex-col items-center text-center">
          <img
            src="/logo.svg"
            alt="Hospital Porto Dias"
            className="mb-8 h-auto w-48 md:w-56"
          />
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Conheça nossos Serviços
          </h1>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            Nossas especialidades médicas preparadas para cuidar de você e da sua família.
          </p>
        </header>

        <section aria-label="Especialidades médicas">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((specialty) => (
              <a
                key={specialty.name}
                href={specialty.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Play size={28} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h2 className="text-lg font-semibold text-card-foreground">
                  {specialty.name}
                </h2>
                <span className="sr-only">(abre em nova aba)</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
