import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroBottle from "@/assets/perfume-hero.webp";
import notesImage from "@/assets/notes.webp";
import sarkarLogo from "@/assets/sarkar-logo.png.asset.json";
import lifestyle1 from "@/assets/perfume-lifestyle-1.jpg.asset.json";
import detail1 from "@/assets/perfume-detail-1.jpg.asset.json";
import ambassador from "@/assets/brand-ambassador.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sable Nuit (100ml) — Sarkar Parfums" },
      {
        name: "description",
        content:
          "Sable Nuit by Sarkar: blue bergamot and pink pepper over lavender, cedar and ambroxan. A fresh-ambré parfum for nights out. 100ml, ₹5,000.",
      },
      { property: "og:title", content: "Sable Nuit (100ml) — Sarkar Parfums" },
      {
        property: "og:description",
        content: "It smells like cold citrus, smoke and a long night ahead. Fresh-ambré parfum, 100ml.",
      },
    ],
    links: [{ rel: "preload", as: "image", href: heroBottle, fetchpriority: "high" }],
  }),
  component: ProductLanding,
});

const notes = [
  { stage: "Top Notes", items: "Blue Bergamot, Pink Pepper, Grapefruit Zest" },
  { stage: "Heart Notes", items: "Provence Lavender, Geranium, Elemi Resin" },
  { stage: "Base Notes", items: "Ambroxan, Virginia Cedar, Vetiver, Grey Amber" },
];

const pillars = [
  { title: "12h+ Wear", copy: "24% concentration, cold-macerated for six weeks." },
  { title: "Clean Composition", copy: "IFRA compliant, vegan, no dyes, never tested on animals." },
  { title: "Launch Edition", copy: "Numbered run of 500 flacons, engraved on the base." },
];

function ProductLanding() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary py-2 text-center text-[0.68rem] tracking-[0.2em] uppercase text-primary-foreground">
        Claim two 7ml freebies with every order
      </div>

      <header className="sticky top-0 z-10 border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <nav className="hidden gap-7 text-[0.7rem] tracking-[0.18em] uppercase text-muted-foreground md:flex">
            <a href="#description" className="transition-colors hover:text-foreground">
              Description
            </a>
            <a href="#notes" className="transition-colors hover:text-foreground">
              Notes
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              FAQ
            </a>
          </nav>
          <img
            src={sarkarLogo.url}
            alt="Sarkar"
            width={120}
            height={24}
            className="h-6 w-auto object-contain"
          />
          <Button className="rounded-none px-6 text-[0.7rem] tracking-[0.18em] uppercase">Buy Now</Button>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-10 lg:grid-cols-[1.1fr_1fr] lg:py-14">
        <div className="space-y-4">
          <div className="surface-stage flex items-center justify-center border border-border p-10">
            <img
              src={heroBottle}
              alt="Sable Nuit parfum in a chess-king shaped emerald green glass flacon engraved Sarkar"
              width={388}
              height={949}
              fetchPriority="high"
              decoding="async"
              sizes="(max-width: 1024px) 80vw, 320px"
              className="w-full max-w-xs drop-shadow-[var(--shadow-flacon)]"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="surface-stage border border-border p-3">
              <img
                src={lifestyle1.url}
                alt="Sable Nuit emerald green flacon on white marble"
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="surface-stage border border-border p-3">
              <img
                src={detail1.url}
                alt="Close-up of the Sable Nuit gunmetal cap and engraved base"
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="surface-stage border border-border p-3">
              <img
                src={ambassador.url}
                alt="Brand ambassador holding Sable Nuit"
                width={1024}
                height={1280}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="lg:pt-6">
          <h1 className="text-4xl tracking-tight uppercase md:text-5xl">
            Sable Nuit <span className="text-2xl text-muted-foreground md:text-3xl">(100ml)</span>
          </h1>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="chip">Unisex</span>
            <span className="chip">Fresh-Ambré</span>
            <span className="chip">Parfum</span>
          </div>

          <p className="mt-5 text-[0.72rem] tracking-[0.16em] uppercase">
            Late dinners · City nights · The after-party
          </p>
          <p className="mt-2 text-lg text-muted-foreground">
            It smells like cold citrus, smoke and a long night ahead.
          </p>

          <p className="mt-6 text-3xl font-medium">₹ 5,000</p>
          <p className="mt-1 text-xs text-muted-foreground">Incl. of all taxes</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="rounded-none px-10 tracking-[0.18em] uppercase">
              Add To Cart
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-none border-input bg-transparent px-8 tracking-[0.18em] uppercase"
            >
              Sample 7ml
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">* Ships within 24-36 hours of ordering.</p>

          <div className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title}>
                <h3 className="text-sm tracking-[0.12em] uppercase">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="description" className="border-y border-border bg-card">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-3xl uppercase">Product Description</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Blue bergamot opens cold and metallic, struck against pink pepper. Lavender and geranium
            settle the sharpness while ambroxan, smoked cedar and grey amber leave a warm, skin-close
            trail that lasts long after the room empties.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Sable Nuit is the fresh-ambré signature for the ones who start their evening when
            everyone else is finishing theirs.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
          <img
            src={ambassador.url}
            alt="Brand ambassador holding Sable Nuit"
            width={1024}
            height={1280}
            loading="lazy"
            decoding="async"
            className="w-full border border-border object-cover"
          />
          <div>
            <p className="eyebrow">Brand Ambassador</p>
            <h2 className="mt-4 text-3xl uppercase md:text-4xl">Worn by the night</h2>
            <blockquote className="mt-6 text-xl leading-relaxed text-muted-foreground md:text-2xl">
              “Sable Nuit is that rare fresh scent that actually owns the evening. I reach for it when
              the night is just getting started.”
            </blockquote>
            <p className="mt-6 text-[0.7rem] tracking-[0.2em] uppercase text-muted-foreground">
              Bhuvan Bam · Creator & Performer
            </p>
          </div>
        </div>
      </section>

      <section id="notes" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
        <img
          src={notesImage}
          alt="Bergamot, pink peppercorns, lavender, cedarwood and ambroxan crystals on slate"
          width={1280}
          height={912}
          loading="lazy"
          decoding="async"
          className="w-full border border-border object-cover"
        />
        <div>
          <p className="eyebrow">The Composition</p>
          <h2 className="mt-4 text-3xl uppercase md:text-4xl">Three movements</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {notes.map((n) => (
              <div key={n.stage} className="py-5">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{n.stage}</p>
                <p className="mt-2 text-lg">{n.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <blockquote className="text-2xl leading-snug md:text-3xl">
            “It opens like citrus on cold metal, then turns into skin. This is the fresh I actually
            wanted to wear at night.”
          </blockquote>
          <p className="mt-6 text-[0.7rem] tracking-[0.2em] uppercase text-muted-foreground">
            Early wear-test panel · Batch No. 001
          </p>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl px-6 py-16">
        <p className="eyebrow">Details</p>
        <h2 className="mt-4 text-3xl uppercase">Good to know</h2>
        <Accordion type="single" collapsible className="mt-8">
          <AccordionItem value="a">
            <AccordionTrigger className="text-left text-base">What does it smell like?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              A fresh-ambré profile: bright bergamot and pink pepper up top, lavender in the middle,
              and a smoky ambroxan-cedar drydown that leans darker than most daytime freshies.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="b">
            <AccordionTrigger className="text-left text-base">When does it ship?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Orders ship within 24-36 hours from Ahmedabad, with free shipping across India. Samples
              ship immediately.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="c">
            <AccordionTrigger className="text-left text-base">Sizes and refills?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Launch edition is 100 ml, with a 7 ml travel sample. A refill flacon follows the first
              restock.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-2xl px-6 py-16 text-center">
          <h2 className="text-3xl uppercase md:text-4xl">Wear the night first</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            500 flacons. Numbered. Once the batch closes, the next maceration takes six weeks.
          </p>
          <Button size="lg" className="mt-8 rounded-none px-12 tracking-[0.2em] uppercase">
            Add To Cart
          </Button>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 text-[0.68rem] tracking-[0.18em] uppercase text-muted-foreground md:flex-row">
        <span>Sarkar Parfums</span>
        <span>Made in India · © 2026</span>
      </footer>
    </div>
  );
}
