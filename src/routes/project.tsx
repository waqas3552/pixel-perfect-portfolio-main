import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, LayoutGrid, Sparkles, Zap, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import p1 from "@/assets/project-1.jpg";

export const Route = createFileRoute("/project")({
  head: () => ({
    meta: [
      { title: "Lumen Apparel — WordPress & WooCommerce Case Study" },
      {
        name: "description",
        content:
          "Modern WooCommerce redesign for a fashion brand, with improved conversions, speed, and merchandising.",
      },
    ],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <section className="glass mx-auto max-w-7xl rounded-[2rem] border border-border px-6 py-8 shadow-2xl backdrop-blur-2xl sm:px-10 lg:px-14">
        <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
          <div className="max-w-2xl space-y-6">
            <div className="flex flex-wrap gap-3">
              <Badge className="rounded-full border-0 px-4 py-2 text-sm">Case Study</Badge>
              <Badge variant="secondary" className="rounded-full px-4 py-2 text-sm">
                WooCommerce
              </Badge>
              <Badge variant="secondary" className="rounded-full px-4 py-2 text-sm">
                WordPress
              </Badge>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
                Lumen Apparel — premium WooCommerce redesign
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                A modern commerce-focused storefront built on WordPress and WooCommerce,
                designed to convert more traffic, simplify the checkout flow, and
                deliver a polished mobile experience.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/">
                <Button variant="ghost" size="lg" className="rounded-2xl">
                  <ArrowLeft className="h-4 w-4" /> Back to portfolio
                </Button>
              </Link>
              <Button size="lg" className="rounded-2xl">
                Contact me
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Revenue", value: "240%" },
                { label: "Lighthouse", value: "94+" },
                { label: "Launch", value: "8 weeks" },
              ].map((item) => (
                <div key={item.label} className="glass rounded-3xl border border-border p-5">
                  <div className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                    {item.label}
                  </div>
                  <div className="mt-3 text-3xl font-black text-foreground">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-muted p-1 shadow-xl">
            <img
              src={p1}
              alt="Lumen Apparel WooCommerce project"
              className="h-[420px] w-full min-w-[320px] rounded-[1.75rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl space-y-10 px-6 pb-24 sm:px-10">
        <div className="grid gap-8 xl:grid-cols-[1.75fr_1fr]">
          <div className="space-y-8">
            <article className="glass rounded-3xl border border-border p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                Project overview
              </div>
              <h2 className="mt-4 text-3xl font-bold">A modern store built to sell faster</h2>
              <p className="mt-5 leading-8 text-muted-foreground">
                Lumen Apparel was rebuilt around a clean, editorial-first product experience.
                The launch included a custom product grid, size and color filters, simplified
                checkout, and full performance optimization across mobile and desktop.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: LayoutGrid,
                    title: "Catalog optimization",
                    description:
                      "Product discovery with better filtering, quick views, and merchandising blocks.",
                  },
                  {
                    icon: Sparkles,
                    title: "Design polish",
                    description:
                      "Soft gradients, glass cards, and refined spacing for a premium fashion feel.",
                  },
                  {
                    icon: Zap,
                    title: "Speed tuning",
                    description:
                      "Image optimization, caching, and lean theme code for fast time-to-interactive.",
                  },
                  {
                    icon: Award,
                    title: "Conversion-first",
                    description:
                      "Sticky add-to-cart, cross-sells, and trust signals built to increase checkout rate.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl border border-border bg-background p-6">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <aside className="space-y-6">
            <div className="glass rounded-3xl border border-border p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                Project details
              </div>
              <dl className="mt-6 space-y-5 text-sm text-foreground/90">
                <div>
                  <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Client</dt>
                  <dd className="mt-2 font-semibold">Lumen Apparel</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Role</dt>
                  <dd className="mt-2 font-semibold">Lead WordPress Developer</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Services</dt>
                  <dd className="mt-2 font-semibold">WordPress, WooCommerce, Performance, UI/UX</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Timeline</dt>
                  <dd className="mt-2 font-semibold">8 weeks</dd>
                </div>
              </dl>
            </div>

            <div className="glass rounded-3xl border border-border p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                Tech stack
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["WordPress", "WooCommerce", "ACF", "Elementor", "PHP", "JavaScript"].map((tech) => (
                  <span key={tech} className="rounded-full border border-border bg-background px-3 py-2 text-sm text-foreground/90">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <section className="glass rounded-3xl border border-border p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Outcome</p>
              <h3 className="mt-4 text-3xl font-bold">A modern commerce experience with lasting results</h3>
            </div>
            <Button size="lg" className="rounded-2xl">
              Start your project
            </Button>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                stat: "+240%",
                label: "Revenue growth",
              },
              {
                stat: "94+",
                label: "Lighthouse score",
              },
              {
                stat: "Mobile first",
                label: "Responsive design",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-border bg-background p-6">
                <p className="text-3xl font-black text-foreground">{item.stat}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
