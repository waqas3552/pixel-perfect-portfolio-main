import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, Download, Mail, Phone, MapPin, Github, Linkedin, MessageCircle,
  Code2, ShoppingCart, Gauge, Bug, Wrench, Search, MoveRight, Globe,
  Star, CheckCircle2, Sparkles, Trophy, Users, Clock, Quote, Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import headshot from "@/assets/headshot.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import p7 from "@/assets/project-7.jpg";
import p8 from "@/assets/project-8.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Morgan — Senior WordPress Developer | 5+ Years Experience" },
      { name: "description", content: "Senior WordPress developer specializing in WooCommerce, custom themes, Elementor, ACF, performance & SEO. Hire a proven WP expert." },
    ],
  }),
  component: Portfolio,
});

const skills = [
  "WordPress", "WooCommerce", "Elementor Pro", "PHP", "HTML5", "CSS3",
  "JavaScript", "MySQL", "ACF", "WPBakery", "SEO Optimization",
  "Performance Optimization", "Website Migration", "cPanel & Hosting",
];

const services = [
  { icon: Code2, title: "Custom WordPress Development", desc: "Tailored themes & plugins built to your exact spec — clean, secure, scalable code." },
  { icon: ShoppingCart, title: "WooCommerce Stores", desc: "High-converting online stores with payments, shipping, subscriptions and analytics." },
  { icon: Sparkles, title: "Elementor Website Design", desc: "Pixel-perfect Elementor Pro builds with custom widgets and global styles." },
  { icon: Gauge, title: "Speed Optimization", desc: "Sub-1.5s LCP, 90+ Core Web Vitals, caching, image & query optimization." },
  { icon: Bug, title: "Bug Fixes & Debugging", desc: "Fast resolution of plugin conflicts, white screens, broken layouts and errors." },
  { icon: Wrench, title: "Website Maintenance", desc: "Updates, backups, security hardening and uptime monitoring — handled monthly." },
  { icon: Search, title: "SEO Setup", desc: "Yoast/Rank Math configuration, schema, sitemaps and on-page optimization." },
  { icon: Globe, title: "Website Migration", desc: "Zero-downtime moves between hosts, domains or staging environments." },
];

const projects = [
  { img: p1, title: "Lumen Apparel", category: "WooCommerce", desc: "Fashion store with 240% revenue lift in 6 months.", tech: ["WooCommerce", "ACF", "Stripe"], span: "md:col-span-2 md:row-span-2" },
  { img: p2, title: "Saunity SaaS", category: "Landing Page", desc: "Conversion-focused SaaS site with A/B testing.", tech: ["Elementor Pro", "GSAP"] },
  { img: p3, title: "Letsinclay Bistro", category: "Restaurant", desc: "Reservations, menu & ordering for a Michelin-recommended bistro.", tech: ["WordPress", "OpenTable"] },
  { img: p4, title: "Ertel Consulting", category: "Corporate", desc: "Multilingual corporate site with HubSpot CRM sync.", tech: ["Custom Theme", "WPML"] },
  { img: p5, title: "Redagry Realty", category: "Real Estate", desc: "IDX-integrated property portal with map search.", tech: ["WooCommerce", "Mapbox"], span: "md:col-span-2" },
  { img: p6, title: "TKTravel Journal", category: "Magazine", desc: "Editorial travel blog scaled to 1.2M monthly readers.", tech: ["Gutenberg", "AMP"] },
  { img: p7, title: "Fitnesm Gym", category: "Membership", desc: "Class booking + member portal with Stripe subscriptions.", tech: ["MemberPress", "ACF"] },
  { img: p8, title: "Dacorladie Photo", category: "Portfolio", desc: "Award-winning photographer portfolio with lazy gallery.", tech: ["Custom Theme", "GraphQL"] },
];

const experience = [
  {
    period: "2023 — Present",
    role: "Senior WordPress Developer",
    company: "Freelance · Remote",
    points: [
      "Delivered 60+ WooCommerce & custom theme projects for clients across 14 countries",
      "Average Lighthouse score lift from 42 → 94 across migrations",
      "Maintained 98% client satisfaction and 70% repeat-business rate",
    ],
  },
  {
    period: "2021 — 2023",
    role: "WordPress Developer",
    company: "Pixelforge Digital Agency",
    points: [
      "Built bespoke Elementor & Gutenberg sites for agency clients ($5k–$50k range)",
      "Led migration of legacy WP Bakery sites to modern Elementor Pro stack",
      "Implemented CI/CD with WP-CLI, GitHub Actions and staging workflows",
    ],
  },
  {
    period: "2020 — 2021",
    role: "Junior WordPress Developer",
    company: "Nimbus Studio",
    points: [
      "Customized themes & plugins, integrated ACF and built reusable blocks",
      "Owned page-speed optimization track — average TTFB cut by 60%",
    ],
  },
];

const certs = [
  { title: "WooCommerce Specialist", org: "Automattic", year: "2024" },
  { title: "Yoast SEO for WordPress", org: "Yoast Academy", year: "2023" },
  { title: "Elementor Expert Designer", org: "Elementor", year: "2023" },
  { title: "BSc Computer Science", org: "State University", year: "2019" },
];

const testimonials = [
  { name: "Sarah Chen", role: "Founder, Lumen Apparel", quote: "Alex rebuilt our WooCommerce store from the ground up. Revenue doubled in 4 months and the site finally feels premium. Worth every penny." },
  { name: "Marcus Holt", role: "CMO, Ertel Consulting", quote: "The most reliable WP developer we've worked with. Clear communication, ships on time, and his code is genuinely clean. Already booked him for our next project." },
  { name: "Priya Raman", role: "Owner, Letsinclay Bistro", quote: "He took our outdated site and turned it into something we're proud to share. Reservations up 3x and zero downtime during the migration." },
  { name: "David Okafor", role: "Editor, TKTravel", quote: "Scaling to over a million readers required serious WordPress chops. Alex handled caching, CDN, and Core Web Vitals like a pro." },
];

function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Work" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[min(96%,1100px)] -translate-x-1/2">
      <nav className="glass-strong flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">A</span>
          <span className="hidden sm:inline">Alex Morgan</span>
        </a>
        <ul className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-foreground">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact">
          <Button size="sm" className="rounded-xl">
            Hire Me <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--grad-hero)" }}
      />
      <div className="absolute left-1/2 top-1/3 -z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1fr_auto]">
        <div className="min-w-0 animate-fade-in">
          <Badge className="glass rounded-full border-0 px-4 py-1.5 text-xs font-medium text-foreground">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary" /> Available for new projects · June 2026
          </Badge>
          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm Alex.<br />
            <span className="text-gradient">Senior WordPress</span><br />
            Developer.
          </h1>
          <p className="mt-4 text-base font-semibold text-primary">
            WordPress Developer · 5+ Years Experience
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I build fast, secure, conversion-focused WordPress &amp; WooCommerce sites — from custom themes and plugins to performance tuning and on-page SEO. Trusted by 60+ founders, agencies and editors worldwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact"><Button size="lg" className="glow-ring rounded-xl">Hire Me <ArrowRight className="ml-1 h-4 w-4" /></Button></a>
            <a href="#projects"><Button size="lg" variant="secondary" className="rounded-xl">View Projects</Button></a>
            <a href="#contact"><Button size="lg" variant="ghost" className="rounded-xl"><Download className="mr-1 h-4 w-4" /> Download CV</Button></a>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
            {[
              { v: "5+", l: "Years" },
              { v: "60+", l: "Projects" },
              { v: "98%", l: "Client CSAT" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="text-2xl font-black sm:text-3xl">{s.v}</dt>
                <dd className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative mx-auto">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/50 to-blue-400/20 blur-2xl" />
          <div className="glass-strong relative overflow-hidden rounded-[2rem] p-2">
            <img
              src={headshot}
              alt="Alex Morgan — senior WordPress developer"
              width={420}
              height={520}
              className="h-auto w-[280px] rounded-[1.5rem] object-cover sm:w-[360px]"
            />
          </div>
          <div className="glass-strong absolute -bottom-5 -left-6 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary/15 text-primary">
              <Trophy className="h-5 w-5" />
            </div>
            <div className="text-xs">
              <div className="font-semibold">Top-rated</div>
              <div className="text-muted-foreground">Upwork &amp; Fiverr</div>
            </div>
          </div>
          <div className="glass-strong absolute -right-6 top-12 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary/15 text-primary">
              <Gauge className="h-5 w-5" />
            </div>
            <div className="text-xs">
              <div className="font-semibold">94+ Lighthouse</div>
              <div className="text-muted-foreground">Average score</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{kicker}</div>
      <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader kicker="About" title="Building WordPress sites that actually perform." />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass rounded-3xl p-8 md:col-span-2">
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm a senior WordPress developer with <span className="font-semibold text-foreground">5+ years</span> of professional experience designing, developing and maintaining WordPress websites for founders, agencies and publishers around the world. My focus is clean code, measurable performance and delivering on time — every time.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Day to day I work across <span className="text-foreground">Elementor Pro, Gutenberg, WooCommerce, Advanced Custom Fields (ACF), custom theme &amp; plugin development, page-speed optimization and website security</span>. I treat every project as if it were my own business — from initial architecture to launch and beyond.
            </p>
          </div>
          <div className="glass space-y-5 rounded-3xl p-8">
            {[
              { icon: Users, v: "60+", l: "Happy clients worldwide" },
              { icon: Clock, v: "5+ yrs", l: "WordPress experience" },
              { icon: Star, v: "4.9 / 5", l: "Average client rating" },
            ].map((s) => (
              <div key={s.l} className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xl font-bold">{s.v}</div>
                  <div className="text-sm text-muted-foreground">{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader kicker="Stack" title="Tools I use every day" sub="From custom PHP to pixel-perfect Elementor builds — the full WordPress toolkit." />
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((s) => (
            <span
              key={s}
              className="glass rounded-full px-5 py-2.5 text-sm font-medium text-foreground/90 transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader kicker="Journey" title="5 years building WordPress at scale" />
        <div className="relative space-y-8 pl-8 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-px before:bg-border">
          {experience.map((e) => (
            <div key={e.role} className="relative">
              <div className="absolute -left-[1.4rem] top-2 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-background" />
              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{e.role}</h3>
                    <div className="text-sm text-primary">{e.company}</div>
                  </div>
                  <Badge variant="secondary" className="rounded-full">{e.period}</Badge>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader kicker="Selected Work" title="Recent WordPress projects" sub="A bento-grid sampling of stores, blogs and corporate sites I've shipped." />
        <div className="grid auto-rows-[220px] grid-cols-1 gap-5 md:grid-cols-4">
          {projects.map((p) => (
            <a
              key={p.title}
              href="#"
              className={`group glass relative overflow-hidden rounded-3xl ${p.span ?? ""}`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-primary">{p.category}</div>
                <h3 className="mt-1 text-lg font-bold leading-tight">{p.title}</h3>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium">{t}</span>
                  ))}
                </div>
              </div>
              <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                <MoveRight className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader kicker="Services" title="How I can help you" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="glass group rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-primary/50">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certs() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader kicker="Education" title="Certifications &amp; background" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((c) => (
            <div key={c.title} className="glass rounded-3xl p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">{c.year}</div>
              <h3 className="mt-2 font-bold leading-snug">{c.title}</h3>
              <div className="mt-1 text-sm text-muted-foreground">{c.org}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader kicker="Testimonials" title="What clients say" />
        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-3xl p-7">
              <Quote className="h-7 w-7 text-primary/60" />
              <p className="mt-3 text-base leading-relaxed text-foreground/90">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                  {t.name.split(" ").map((w) => w[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sending, setSending] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent — I'll reply within 24h.");
    }, 800);
  };
  const channels = [
    { icon: Mail, label: "Email", value: "alex@morgandev.com", href: "mailto:alex@morgandev.com" },
    { icon: Phone, label: "Phone", value: "+1 (415) 555-0199", href: "tel:+14155550199" },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/14155550199" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/alexmorgan", href: "https://linkedin.com" },
    { icon: Github, label: "GitHub", value: "github.com/alexmorgan", href: "https://github.com" },
    { icon: MapPin, label: "Based in", value: "San Francisco · Remote worldwide" },
  ];

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader kicker="Contact" title="Let's build something great." sub="Tell me about your WordPress project — I usually reply within 24 hours." />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <form onSubmit={onSubmit} className="glass-strong space-y-4 rounded-3xl p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-muted-foreground">Name</label>
                <Input required placeholder="Your name" className="mt-1.5 h-11 rounded-xl bg-background/50" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Email</label>
                <Input required type="email" placeholder="you@company.com" className="mt-1.5 h-11 rounded-xl bg-background/50" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Subject</label>
              <Input placeholder="New WooCommerce store, redesign, etc." className="mt-1.5 h-11 rounded-xl bg-background/50" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Project details</label>
              <Textarea required rows={5} placeholder="Tell me about goals, timeline and budget…" className="mt-1.5 rounded-xl bg-background/50" />
            </div>
            <Button type="submit" size="lg" disabled={sending} className="glow-ring w-full rounded-xl">
              {sending ? "Sending…" : <>Send message <Send className="ml-1 h-4 w-4" /></>}
            </Button>
          </form>
          <div className="space-y-3">
            {channels.map((c) => {
              const Comp = c.href ? "a" : "div";
              return (
                <Comp
                  key={c.label}
                  href={c.href}
                  className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="truncate text-sm font-semibold">{c.value}</div>
                  </div>
                  {c.href && <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />}
                </Comp>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
        <div>© 2026 Alex Morgan. Crafted with WordPress &amp; care.</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
          <a href="#" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
          <a href="#contact" className="hover:text-foreground"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Certs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
