import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroBottle from "@/assets/perfume-hero.jpg";
import notesImage from "@/assets/notes.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sable Nuit Eau de Parfum — Sarkar Parfums" },
      {
        name: "description",
        content:
          "Sable Nuit, a new eau de parfum by Sarkar Parfums: bergamot and pink pepper over lavender, cedar and ambroxan. 50ml launch edition.",
      },
      { property: "og:title", content: "Sable Nuit Eau de Parfum — Sarkar Parfums" },
      {
        property: "og:description",
        content: "A smoky, radiant bergamot-ambroxan signature. Launch edition of 500 flacons.",
      },
    ],
  }),
  component: ProductLanding,
});

const notes = [
  { stage: "Top", items: "Calabrian Bergamot · Pink Pepper · Grapefruit Zest" },
  { stage: "Heart", items: "Provence Lavender · Geranium · Elemi Resin" },
  { stage: "Base", items: "Ambroxan · Virginia Cedar · Vetiver · Grey Amber" },
];

const pillars = [
  { title: "12h+ Wear", copy: "24% concentration, cold-macerated for six weeks." },
  { title: "Clean Composition", copy: "IFRA compliant, vegan, no dyes, never tested on animals." },
  { title: "Launch Edition", copy: "Numbered run of 500 flacons, engraved on the base." },
];

function ProductLanding() {
  return (
    <main className="surface-noir min-h-screen">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="font-display text-lg tracking-[0.35em] uppercase">Sarkar</span>
          <nav className="hidden gap-8 text-xs tracking-[0.2em] uppercase text-muted-foreground md:flex">
            <a href="#story" className="transition-colors hover:text-foreground">
              Story
            </a>
            <a href="#notes" className="transition-colors hover:text-foreground">
              Notes
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              FAQ
            </a>
          </nav>
          <span className="text-xs tracking-[0.2em] uppercase text-primary">Launching Soon</span>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="eyebrow">New · Eau de Parfum</p>
          <h1 className="mt-6 text-5xl leading-[1.05] md:text-7xl">
            Sable <span className="text-gold">Nuit</span>
          </h1>
          <div className="hairline mt-8 w-24" />
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            A fresh-ambré signature in the spirit of Dior Sauvage — cut sharper, worn darker. Blue
            bergamot struck against pink pepper, resting on a smoked ambroxan trail that follows you
            long after the room empties.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div>
              <p className="font-display text-3xl">₹3,450</p>
              <p className="mt-1 text-xs tracking-[0.2em] uppercase text-muted-foreground">50 ml · Extrait fresh</p>
            </div>
            <div className="flex gap-3">
              <Button size="lg" className="rounded-none px-8 tracking-[0.2em] uppercase">
                Reserve Yours
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-none border-border bg-transparent px-8 tracking-[0.2em] uppercase"
              >
                Sample 5ml
              </Button>
            </div>
          </div>
          <p className="mt-6 text-xs tracking-[0.15em] uppercase text-muted-foreground">
            Free shipping in India · Ships from Ahmedabad
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-x-8 top-10 bottom-10 rounded-full bg-accent/25 blur-3xl" />
          <img
            src={heroBottle}
            alt="Sable Nuit eau de parfum in a chess-king shaped emerald green glass flacon engraved Sarkar"
            width={928}
            height={1152}
            className="relative mx-auto w-full max-w-sm mix-blend-screen shadow-[var(--shadow-flacon)]"
          />

        </div>
      </section>

      <section id="story" className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title}>
              <h3 className="text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="notes" className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-2">
        <img
          src={notesImage}
          alt="Bergamot, pink peppercorns, lavender, cedarwood and ambroxan crystals on dark slate"
          width={1280}
          height={912}
          loading="lazy"
          className="w-full object-cover"
        />
        <div>
          <p className="eyebrow">The Composition</p>
          <h2 className="mt-5 text-4xl md:text-5xl">Three movements</h2>
          <div className="mt-10 space-y-8">
            {notes.map((n) => (
              <div key={n.stage} className="border-l border-border pl-6">
                <p className="text-xs tracking-[0.3em] uppercase text-primary">{n.stage}</p>
                <p className="mt-2 text-lg text-foreground/90">{n.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <blockquote className="text-3xl leading-snug md:text-4xl">
            “It opens like citrus on cold metal, then turns into skin. This is the fresh I actually
            wanted to wear at night.”
          </blockquote>
          <p className="mt-8 text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Early wear-test panel · Batch No. 001
          </p>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
        <p className="eyebrow">Details</p>
        <h2 className="mt-5 text-4xl">Good to know</h2>
        <Accordion type="single" collapsible className="mt-10">
          <AccordionItem value="a">
            <AccordionTrigger className="text-left text-base">Is this a Dior Sauvage clone?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              It is inspired by that fresh-ambré family, not a copy. Sable Nuit keeps the bergamot and
              ambroxan spine but pushes smoked cedar and grey amber further for a darker, more
              evening-ready drydown.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="b">
            <AccordionTrigger className="text-left text-base">When does it ship?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Reservations ship in order of placement within 10 days of launch. Samples ship
              immediately.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="c">
            <AccordionTrigger className="text-left text-base">Sizes and refills?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Launch edition is 50 ml, with a 5 ml travel sample. A 100 ml refill flacon follows the
              first restock.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center">
          <h2 className="text-4xl md:text-5xl">Wear the night first</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            500 flacons. Numbered. Once the batch closes, the next maceration takes six weeks.
          </p>
          <Button size="lg" className="mt-10 rounded-none px-12 tracking-[0.25em] uppercase">
            Reserve Sable Nuit
          </Button>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-10 text-xs tracking-[0.2em] uppercase text-muted-foreground md:flex-row">
        <span>Sarkar Parfums</span>
        <span>Made in India · © 2026</span>
      </footer>
    </main>
  );
}
