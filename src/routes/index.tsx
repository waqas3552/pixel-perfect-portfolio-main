import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
  Code2,
  ShoppingCart,
  Gauge,
  Bug,
  Wrench,
  Search,
  MoveRight,
  Globe,
  Star,
  CheckCircle2,
  Sparkles,
  Trophy,
  Users,
  Clock,
  Quote,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
} from "@/components/ui/dialog";
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
      { title: "Muhammad Waqas — Senior WordPress Developer | 5+ Years Experience" },
      {
        name: "description",
        content:
          "Senior WordPress developer specializing in WooCommerce, custom themes, Elementor, ACF, performance & SEO. Hire a proven WP expert.",
      },
    ],
  }),
  component: Portfolio,
});

const skills = [
  "WordPress",
  "WooCommerce",
  "Elementor Pro",
  "PHP",
  "HTML5",
  "CSS3",
  "JavaScript",
  "MySQL",
  "ACF",
  "WPBakery",
  "SEO Optimization",
  "Performance Optimization",
  "Website Migration",
  "cPanel & Hosting",
];

const services = [
  {
    icon: Code2,
    title: "Custom WordPress Development",
    desc: "Tailored themes & plugins built to your exact spec — clean, secure, scalable code.",
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce Stores",
    desc: "High-converting online stores with payments, shipping, subscriptions and analytics.",
  },
  {
    icon: Sparkles,
    title: "Elementor Website Design",
    desc: "Pixel-perfect Elementor Pro builds with custom widgets and global styles.",
  },
  {
    icon: Gauge,
    title: "Speed Optimization",
    desc: "Sub-1.5s LCP, 90+ Core Web Vitals, caching, image & query optimization.",
  },
  {
    icon: Bug,
    title: "Bug Fixes & Debugging",
    desc: "Fast resolution of plugin conflicts, white screens, broken layouts and errors.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Updates, backups, security hardening and uptime monitoring — handled monthly.",
  },
  {
    icon: Search,
    title: "SEO Setup",
    desc: "Yoast/Rank Math configuration, schema, sitemaps and on-page optimization.",
  },
  {
    icon: Globe,
    title: "Website Migration",
    desc: "Zero-downtime moves between hosts, domains or staging environments.",
  },
];

type Project = {
  img: string;
  title: string;
  category: string;
  desc: string;
  tech: string[];
  span?: string;
  client: string;
  year: string;
  duration: string;
  role: string;
  liveUrl: string;
  challenge: string;
  solution: string;
  features: string[];
  stats: { value: string; label: string }[];
  gallery: string[];
};

const projects: Project[] = [
  {
    img: p1,
    title: "Lumen Apparel",
    category: "WooCommerce",
    desc: "Fashion store with a polished commerce experience and faster checkout.",
    tech: ["WooCommerce", "ACF", "Stripe"],
    span: "md:col-span-2 md:row-span-2",
    client: "Lumen Apparel",
    year: "2024",
    duration: "8 weeks",
    role: "Lead Developer",
    liveUrl: "https://lumenapparel.example",
    challenge:
      "The existing store was slow, hard to navigate, and losing customers during checkout.",
    solution:
      "Rebuilt the WooCommerce experience with optimized filtering, a slick cross-sell flow, and mobile-first performance improvements.",
    features: [
      "Fast product discovery with filters",
      "One-click quick buy experience",
      "Optimized checkout flow",
      "Responsive hero merchandising",
    ],
    stats: [
      { value: "240%", label: "Revenue lift" },
      { value: "94+", label: "Lighthouse" },
      { value: "3x", label: "Add to cart rate" },
    ],
    gallery: [p1, p2, p3],
  },
  {
    img: p2,
    title: "Saunity SaaS",
    category: "Landing Page",
    desc: "Conversion-focused SaaS landing page with strong visual storytelling.",
    tech: ["Elementor Pro", "GSAP"],
    client: "Saunity",
    year: "2023",
    duration: "6 weeks",
    role: "Frontend & Optimization",
    liveUrl: "https://saunity.example",
    challenge:
      "The product story was unclear and visitor attention dropped before signup.",
    solution:
      "Crafted a conversion-led layout with polished animations, trust elements, and clear CTA hierarchy.",
    features: [
      "Animated onboarding sections",
      "Sticky CTA panel",
      "Case study testimonials",
      "Performance-first asset loading",
    ],
    stats: [
      { value: "+32%", label: "Signup rate" },
      { value: "85%", label: "Engagement" },
      { value: "70+", label: "Accessibility" },
    ],
    gallery: [p2, p4, p6],
  },
  {
    img: p3,
    title: "Letsinclay Bistro",
    category: "Restaurant",
    desc: "Reservation-first restaurant website built for higher bookings.",
    tech: ["WordPress", "OpenTable"],
    client: "Letsinclay Bistro",
    year: "2023",
    duration: "7 weeks",
    role: "WordPress Lead",
    liveUrl: "https://letsinclay.example",
    challenge:
      "The old menu site was static, slow, and did not support online reservations well.",
    solution:
      "Delivered a fresh editorial layout with booking integration, menu highlights, and local SEO improvements.",
    features: [
      "Reservations with OpenTable",
      "Menu spotlight sections",
      "Editorial recipe showcase",
      "Local SEO enhancements",
    ],
    stats: [
      { value: "3x", label: "Reservations" },
      { value: "98%", label: "Mobile score" },
      { value: "2x", label: "Pageviews" },
    ],
    gallery: [p3, p5, p8],
  },
  {
    img: p4,
    title: "Ertel Consulting",
    category: "Corporate",
    desc: "Multilingual corporate site with CRM and enterprise polish.",
    tech: ["Custom Theme", "WPML"],
    client: "Ertel Consulting",
    year: "2023",
    duration: "9 weeks",
    role: "Theme Architect",
    liveUrl: "https://ertel.example",
    challenge:
      "The legacy corporate site was outdated, slow, and did not support multiple languages.",
    solution:
      "Built a flexible WPML-powered site with HubSpot CRM capture, polished brand moments, and fast performance.",
    features: [
      "Multilingual content system",
      "HubSpot lead capture",
      "Custom case study layout",
      "Enterprise performance tuning",
    ],
    stats: [
      { value: "+48%", label: "Conversions" },
      { value: "25%", label: "Bounce down" },
      { value: "96+", label: "Lighthouse" },
    ],
    gallery: [p4, p1, p7],
  },
  {
    img: p5,
    title: "Redagry Realty",
    category: "Real Estate",
    desc: "IDX-integrated property portal with modern search and listings.",
    tech: ["WooCommerce", "Mapbox"],
    span: "md:col-span-2",
    client: "Redagry Realty",
    year: "2024",
    duration: "10 weeks",
    role: "Props & Search Lead",
    liveUrl: "https://redagry.example",
    challenge:
      "The previous property portal was hard to search and did not highlight featured listings.",
    solution:
      "Delivered map-led search, featured property cards, and fast image loading for luxury listings.",
    features: [
      "Mapbox property search",
      "Featured listing galleries",
      "Custom agent profile pages",
      "Mobile-first property filters",
    ],
    stats: [
      { value: "2x", label: "Leads" },
      { value: "80%", label: "Search usage" },
      { value: "91", label: "Lighthouse" },
    ],
    gallery: [p5, p6, p2],
  },
  {
    img: p6,
    title: "TKTravel Journal",
    category: "Magazine",
    desc: "Editorial travel magazine scaled to 1.2M monthly readers.",
    tech: ["Gutenberg", "AMP"],
    client: "TKTravel Media",
    year: "2023",
    duration: "12 weeks",
    role: "Performance Engineer",
    liveUrl: "https://tktravel.example",
    challenge:
      "The old magazine stack could not handle peak readership or ad traffic efficiently.",
    solution:
      "Migrated to AMP templates, integrated Cloudflare APO, and optimized editorial workflows for speed and scale.",
    features: [
      "AMP article templates",
      "Cloudflare APO caching",
      "Editorial workflow improvements",
      "Programmatic ad ops integration",
    ],
    stats: [
      { value: "1.2M", label: "Readers" },
      { value: "-72%", label: "TTFB" },
      { value: "+45%", label: "Ad RPM" },
    ],
    gallery: [p6, p8, p3],
  },
  {
    img: p7,
    title: "Fitnesm Gym",
    category: "Membership",
    desc: "Member portal and booking site for a modern fitness brand.",
    tech: ["MemberPress", "ACF"],
    client: "Fitnesm Gym",
    year: "2024",
    duration: "7 weeks",
    role: "Membership Specialist",
    liveUrl: "https://fitnesm.example",
    challenge:
      "The gym needed a seamless class booking experience and membership dashboard.",
    solution:
      "Built a member portal with recurring subscriptions, booking flows, and branded training pages.",
    features: [
      "Recurring subscription checkout",
      "Class booking dashboard",
      "Member-only resources",
      "Branded workout pages",
    ],
    stats: [
      { value: "+28%", label: "Memberships" },
      { value: "4.8", label: "Rating" },
      { value: "93", label: "Lighthouse" },
    ],
    gallery: [p7, p2, p4],
  },
  {
    img: p8,
    title: "Dacorladie Photo",
    category: "Portfolio",
    desc: "Award-winning photographer portfolio with elegant gallery blocks.",
    tech: ["Custom Theme", "GraphQL"],
    client: "Dacorladie Photography",
    year: "2024",
    duration: "5 weeks",
    role: "Portfolio Designer",
    liveUrl: "https://dacorladie.example",
    challenge:
      "The portfolio needed a beautiful visual presentation with fast image loading.",
    solution:
      "Designed a lightweight theme with immersive gallery layouts and optimized image delivery.",
    features: [
      "Full-screen galleries",
      "Gallery filtering",
      "Optimized image loading",
      "Minimal portfolio layout",
    ],
    stats: [
      { value: "+50%", label: "Engagement" },
      { value: "98", label: "Lighthouse" },
      { value: "12", label: "Featured awards" },
    ],
    gallery: [p8, p1, p5],
  },
];

const experience = [
  {
    period: "2021 — Present",
    role: "Senior WordPress Developer",
    company: "Emaan Creation",
    points: [
      "Delivered 60+ WooCommerce & custom theme projects for clients across 14 countries",
      "Average Lighthouse score lift from 42 → 94 across migrations",
      "Maintained 98% client satisfaction and 70% repeat-business rate",
    ],
  },
  {
    period: "2021 — 2021",
    role: "WordPress Developer",
    company: "Web Hunter",
    points: [
      "Built bespoke Elementor & Gutenberg sites for agency clients ($5k–$50k range)",
      "Led migration of legacy WP Bakery sites to modern Elementor Pro stack",
      "Implemented CI/CD with WP-CLI, GitHub Actions and staging workflows",
    ],
  },
  {
    period: "2020 — 2021",
    role: "Junior WordPress Developer",
    company: "1Dot Digital",
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
  {
    name: "Sarah Chen",
    role: "Founder, Lumen Apparel",
    quote:
      "Alex rebuilt our WooCommerce store from the ground up. Revenue doubled in 4 months and the site finally feels premium. Worth every penny.",
  },
  {
    name: "Marcus Holt",
    role: "CMO, Ertel Consulting",
    quote:
      "The most reliable WP developer we've worked with. Clear communication, ships on time, and his code is genuinely clean. Already booked him for our next project.",
  },
  {
    name: "Priya Raman",
    role: "Owner, Letsinclay Bistro",
    quote:
      "He took our outdated site and turned it into something we're proud to share. Reservations up 3x and zero downtime during the migration.",
  },
  {
    name: "David Okafor",
    role: "Editor, TKTravel",
    quote:
      "Scaling to over a million readers required serious WordPress chops. Alex handled caching, CDN, and Core Web Vitals like a pro.",
  },
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
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            M
          </span>
          <span className="hidden sm:inline">Muhammad Waqas</span>
        </a>
        <ul className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
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
      <div className="absolute inset-0" style={{ background: "var(--grad-hero)" }} />
      <div className="absolute left-1/2 top-1/3 -z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1fr_auto]">
        <div className="min-w-0 animate-fade-in">
          <Badge className="glass rounded-full border-0 px-4 py-1.5 text-xs font-medium text-foreground">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary" /> Available for
            new projects · June 2026
          </Badge>
          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm Waqas.
            <br />
            <span className="text-gradient">Senior WordPress</span>
            <br />
            Developer.
          </h1>
          <p className="mt-4 text-base font-semibold text-primary">
            WordPress Developer · 5+ Years Experience
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I build fast, secure, conversion-focused WordPress &amp; WooCommerce sites — from custom
            themes and plugins to performance tuning and on-page SEO. Trusted by 60+ founders,
            agencies and editors worldwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact">
              <Button size="lg" className="glow-ring rounded-xl">
                Hire Me <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
            <a href="#projects">
              <Button size="lg" variant="secondary" className="rounded-xl">
                View Projects
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="ghost" className="rounded-xl">
                <Download className="mr-1 h-4 w-4" /> Download CV
              </Button>
            </a>
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
              I'm a senior WordPress developer with{" "}
              <span className="font-semibold text-foreground">5+ years</span> of professional
              experience designing, developing and maintaining WordPress websites for founders,
              agencies and publishers around the world. My focus is clean code, measurable
              performance and delivering on time — every time.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Day to day I work across{" "}
              <span className="text-foreground">
                Elementor Pro, Gutenberg, WooCommerce, Advanced Custom Fields (ACF), custom theme
                &amp; plugin development, page-speed optimization and website security
              </span>
              . I treat every project as if it were my own business — from initial architecture to
              launch and beyond.
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
        <SectionHeader
          kicker="Stack"
          title="Tools I use every day"
          sub="From custom PHP to pixel-perfect Elementor builds — the full WordPress toolkit."
        />
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
                  <Badge variant="secondary" className="rounded-full">
                    {e.period}
                  </Badge>
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
  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null);

  return (
    <Dialog
      open={selectedProject !== null}
      onOpenChange={(open) => {
        if (!open) setSelectedProject(null);
      }}
    >
      <section id="projects" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            kicker="Selected Work"
            title="Recent WordPress projects"
            sub="A bento-grid sampling of stores, blogs and corporate sites I've shipped."
          />
          <div className="grid auto-rows-[220px] grid-cols-1 gap-5 md:grid-cols-4">
            {projects.map((p) => (
              <DialogTrigger asChild key={p.title}>
                <button
                  type="button"
                  onClick={() => setSelectedProject(p)}
                  className={`group glass relative overflow-hidden rounded-3xl text-left ${p.span ?? ""}`}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                      {p.category}
                    </div>
                    <h3 className="mt-1 text-lg font-bold leading-tight">{p.title}</h3>
                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{p.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    <MoveRight className="h-4 w-4" />
                  </div>
                </button>
              </DialogTrigger>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <DialogPortal>
          <DialogOverlay />
          <DialogContent className="max-w-6xl rounded-[2rem] border border-border p-6 shadow-2xl sm:p-8">
            <div className="grid gap-8 xl:grid-cols-[1.8fr_1.2fr]">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="rounded-full border-0 px-4 py-2 text-sm">{selectedProject.category}</Badge>
                  <Badge variant="secondary" className="rounded-full px-4 py-2 text-sm">
                    {selectedProject.year}
                  </Badge>
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                    {selectedProject.title}
                  </h2>
                  <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                    {selectedProject.desc}
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Client", value: selectedProject.client },
                    { label: "Duration", value: selectedProject.duration },
                    { label: "Role", value: selectedProject.role },
                    { label: "Location", value: "Remote" },
                  ].map((item) => (
                    <div key={item.label} className="glass rounded-3xl border border-border p-6">
                      <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="mt-3 text-xl font-semibold text-foreground">{item.value}</div>
                    </div>
                  ))}
                </div>
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="glass rounded-3xl border border-border p-6">
                    <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      The challenge
                    </div>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{selectedProject.challenge}</p>
                  </div>
                  <div className="glass rounded-3xl border border-border p-6">
                    <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      The solution
                    </div>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{selectedProject.solution}</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="glass rounded-3xl border border-border p-6">
                    <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      What I built
                    </div>
                    <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                      {selectedProject.features.map((feature) => (
                        <li key={feature} className="flex gap-3">
                          <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-primary">
                            <CheckCircle2 className="h-4 w-4" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="glass rounded-3xl border border-border p-6">
                    <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Tech used</div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border bg-background px-3 py-2 text-sm text-foreground/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="h-[420px] overflow-hidden rounded-[2rem] border border-border bg-muted">
                  <img
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {selectedProject.stats.map((stat) => (
                    <div key={stat.label} className="glass rounded-3xl border border-border p-6 text-center">
                      <div className="text-3xl font-black text-foreground">{stat.value}</div>
                      <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="glass rounded-[2rem] border border-border p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">A closer look</div>
                      <h3 className="text-xl font-bold">Gallery</h3>
                    </div>
                    <div className="text-xs text-muted-foreground">Scroll for more</div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {selectedProject.gallery.map((img, index) => (
                      <div key={index} className="overflow-hidden rounded-3xl border border-border bg-background">
                        <img src={img} alt={`${selectedProject.title} screenshot ${index + 1}`} className="h-32 w-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                Visit live site
              </a>
              <DialogClose asChild>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl border border-input bg-background px-5 py-3 text-sm font-medium text-foreground transition hover:bg-accent"
                >
                  Close
                </button>
              </DialogClose>
            </div>
          </DialogContent>
        </DialogPortal>
      )}
    </Dialog>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader kicker="Services" title="How I can help you" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass group rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-primary/50"
            >
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
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                {c.year}
              </div>
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
                  {t.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
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
    { icon: Mail, label: "Email", value: "codewithsmith86@gmail.com", href: "mailto:codewithsmith86@gmail.com" },
    { icon: Phone, label: "Phone", value: "+92 318-7559-232", href: "tel:03187559232" },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: "https://wa.me/14155550199",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "www.linkedin.com/in/waqas2552",
      href: "www.linkedin.com/in/waqas2552",
    },
    { icon: Github, label: "GitHub", value: "https://github.com/waqas3552", href: "https://github.com/waqas3552" },
    { icon: MapPin, label: "Based in", value: "Johar Town Lahore" },
  ];

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          kicker="Contact"
          title="Let's build something great."
          sub="Tell me about your WordPress project — I usually reply within 24 hours."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <form onSubmit={onSubmit} className="glass-strong space-y-4 rounded-3xl p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-muted-foreground">Name</label>
                <Input
                  required
                  placeholder="Your name"
                  className="mt-1.5 h-11 rounded-xl bg-background/50"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Email</label>
                <Input
                  required
                  type="email"
                  placeholder="you@company.com"
                  className="mt-1.5 h-11 rounded-xl bg-background/50"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Subject</label>
              <Input
                placeholder="New WooCommerce store, redesign, etc."
                className="mt-1.5 h-11 rounded-xl bg-background/50"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Project details</label>
              <Textarea
                required
                rows={5}
                placeholder="Tell me about goals, timeline and budget…"
                className="mt-1.5 rounded-xl bg-background/50"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={sending}
              className="glow-ring w-full rounded-xl"
            >
              {sending ? (
                "Sending…"
              ) : (
                <>
                  Send message <Send className="ml-1 h-4 w-4" />
                </>
              )}
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
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="truncate text-sm font-semibold">{c.value}</div>
                  </div>
                  {c.href && (
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  )}
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
          <a href="#" className="hover:text-foreground">
            <Github className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-foreground">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#contact" className="hover:text-foreground">
            <Mail className="h-4 w-4" />
          </a>
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
