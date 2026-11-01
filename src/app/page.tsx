import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Check,
  CheckCheck,
  ChevronDown,
  Activity,
  Database,
  Layers3,
  LockKeyhole,
  Package,
  Plug,
  Search,
  Server,
  Terminal,
  Workflow,
  ChartNoAxesCombined,
} from "lucide-react";
import { TechnologyLogo } from "@/components/shared/technology-logo";
import { HeroBackground } from "@/components/shared/hero-background";
import { BrandMark } from "@/components/shared/brand-mark";
import { FeatureCatalog } from "@/components/shared/feature-catalog";
import { Button } from "@/components/ui/button";
import { appConfig, presets, type Preset } from "@/config/app";
import manifest from "../../package.json";

const stack = [
  { name: "Next.js", slug: "nextdotjs" },
  { name: "React", slug: "react" },
  { name: "TypeScript", slug: "typescript" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Prisma", slug: "prisma" },
  { name: "Better Auth", slug: "betterauth" },
];
const supportingStack = [
  { name: "Radix UI", slug: "radixui" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "React Hook Form", slug: "reacthookform" },
  { name: "Zod", slug: "zod" },
  { name: "TanStack", slug: "tanstack" },
  { name: "Vitest", slug: "vitest" },
  { name: "Playwright", slug: "playwright" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Docker", slug: "docker" },
];
const providers = [
  { name: "Stripe", slug: "stripe" },
  { name: "OpenAI", slug: "openai" },
  { name: "Anthropic", slug: "anthropic" },
  { name: "Google Gemini", slug: "googlegemini" },
];
const extensions = [
  {
    title: "Search",
    icon: Search,
    tools: [
      {
        name: "Meilisearch",
        slug: "meilisearch",
        url: "https://www.meilisearch.com/",
      },
      { name: "Algolia", slug: "algolia", url: "https://www.algolia.com/" },
    ],
  },
  {
    title: "Background jobs",
    icon: Workflow,
    tools: [
      { name: "Inngest", slug: "inngest", url: "https://www.inngest.com/" },
    ],
  },
  {
    title: "Observability",
    icon: Activity,
    tools: [
      { name: "Sentry", slug: "sentry", url: "https://sentry.io/" },
      {
        name: "OpenTelemetry",
        slug: "opentelemetry",
        url: "https://opentelemetry.io/",
      },
    ],
  },
  {
    title: "Analytics",
    icon: ChartNoAxesCombined,
    tools: [
      { name: "PostHog", slug: "posthog", url: "https://posthog.com/" },
      { name: "Plausible", slug: "plausible", url: "https://plausible.io/" },
    ],
  },
  {
    title: "Cache & rate limits",
    icon: Server,
    tools: [
      { name: "Redis", slug: "redis", url: "https://redis.io/" },
      { name: "Upstash", slug: "upstash", url: "https://upstash.com/" },
    ],
  },
  {
    title: "Managed PostgreSQL",
    icon: Database,
    tools: [
      { name: "Neon", slug: "neon", url: "https://neon.com/" },
      { name: "Supabase", slug: "supabase", url: "https://supabase.com/" },
    ],
  },
];
export default function Home() {
  const configured = process.env.NEXT_PUBLIC_PRESET ?? "standard";
  const currentPreset: Preset =
    configured in presets ? (configured as Preset) : "standard";
  return (
    <div className="landing dark">
      <header className="landing-header landing-container">
        <Link
          href="/"
          className="landing-brand"
          aria-label={`${appConfig.name} home`}
        >
          <BrandMark size={32} />
          {appConfig.name}
          <span className="brand-divider">/</span>
          <span className="brand-caption">boilerplate</span>
        </Link>
        <nav aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#stack">Stack</a>
          <a href="#integrations">Integrations</a>
          <Link href="/docs">
            Docs <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </nav>
        <Button asChild variant="outline" className="landing-login">
          <Link href="/login">
            Log in <ArrowUpRight size={17} />
          </Link>
        </Button>
      </header>
      <main id="main">
        <div className="hero-stage">
          <HeroBackground />
          <section className="landing-hero landing-container">
            <div className="hero-copy">
              <div className="landing-eyebrow">
                <span className="accent-dot" /> Open source. Fully yours.
              </div>
              <h1>
                Your next SaaS.
                <br />
                <span>Minus the setup.</span>
              </h1>
              <p>
                <strong>
                  Don’t waste time or tokens rebuilding the basics.
                </strong>{" "}
                Start with auth, data and teams already connected.
              </p>
              <div className="hero-actions">
                <Button asChild className="landing-primary">
                  <Link href="/register">
                    Start building <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="landing-secondary">
                  <a href="https://github.com/kyracnh/ModuSaaS">
                    <TechnologyLogo
                      slug="github"
                      name="GitHub"
                      size={20}
                      label={false}
                    />{" "}
                    Explore the code
                  </a>
                </Button>
              </div>
              <div className="hero-assurances">
                <span>
                  <Check size={16} /> MIT core
                </span>
                <span>
                  <Check size={16} /> No paid keys for core
                </span>
                <span>
                  <Check size={16} /> One application
                </span>
              </div>
            </div>
            <div
              className="hero-blueprint"
              aria-label="Boilerplate architecture"
            >
              <div className="blueprint-heading">
                <span>
                  <Blocks size={19} /> Your product
                </span>
              </div>
              <div className="blueprint-main">
                <div className="blueprint-app">
                  <span className="blueprint-icon">
                    <Layers3 size={31} strokeWidth={1.5} />
                  </span>
                  <h2>Build the idea.</h2>
                </div>
                <div className="blueprint-connector" />
                <div className="blueprint-modules">
                  {[
                    [LockKeyhole, "Auth"],
                    [Database, "Data"],
                    [Blocks, "UI"],
                  ].map(([Icon, name]) => {
                    const Component = Icon as typeof Database;
                    return (
                      <div key={String(name)}>
                        <Component size={23} strokeWidth={1.5} />
                        <span>{String(name)}</span>
                        <CheckCheck size={17} />
                      </div>
                    );
                  })}
                </div>
                <div className="blueprint-optional">
                  <Plug size={18} />
                  <span>Teams · Payments · AI · Storage</span>
                </div>
              </div>
              <div className="blueprint-terminal">
                <Terminal size={18} />
                <code>pnpm run setup &amp;&amp; pnpm dev</code>
                <span className="accent-dot" />
              </div>
            </div>
          </section>
        </div>
        <div className="foundation-strip landing-container">
          <div>
            {stack.map(({ name, slug }) => (
              <TechnologyLogo key={slug} name={name} slug={slug} size={24} />
            ))}
          </div>
        </div>
        <section id="features" className="landing-section landing-container">
          <div className="section-heading">
            <div>
              <h2>Choose your features.</h2>
            </div>
          </div>
          <FeatureCatalog currentPreset={currentPreset} />
        </section>
        <section id="stack" className="landing-section stack-section">
          <div className="landing-container">
            <div className="section-heading">
              <div>
                <h2>The installed stack.</h2>
              </div>
            </div>
            <div className="stack-grid">
              {stack.map(({ name, slug }) => (
                <article key={slug}>
                  <TechnologyLogo name={name} slug={slug} size={40} />
                </article>
              ))}
            </div>
            <div className="stack-extras">
              {supportingStack.map(({ name, slug }) => (
                <TechnologyLogo key={slug} name={name} slug={slug} size={23} />
              ))}
            </div>
            <div className="provider-stack">
              <span className="provider-label">
                <Plug size={18} aria-hidden="true" /> Optional providers
              </span>
              {providers.map(({ name, slug }) => (
                <TechnologyLogo key={slug} name={name} slug={slug} size={25} />
              ))}
            </div>
            <div className="dependency-list">
              {[
                ["Runtime dependencies", manifest.dependencies],
                ["Development dependencies", manifest.devDependencies],
              ].map(([title, packages]) => (
                <details key={String(title)}>
                  <summary>
                    <span>
                      <Package size={21} />
                      {String(title)}{" "}
                      <span className="dependency-count">
                        {Object.keys(packages).length}
                      </span>
                    </span>
                    <ChevronDown size={20} />
                  </summary>
                  <div className="dependency-grid">
                    {Object.entries(packages)
                      .sort(([a], [b]) => a.localeCompare(b))
                      .map(([name, version]) => (
                        <div key={name}>
                          <code>{name}</code>
                          <span>{version}</span>
                        </div>
                      ))}
                  </div>
                </details>
              ))}
            </div>
            <p className="catalog-note">
              All packages stay installed across presets. Providers require
              configuration.
            </p>
          </div>
        </section>
        <section
          id="integrations"
          className="landing-section landing-container"
        >
          <div className="section-heading">
            <div>
              <h2>More possibilities.</h2>
            </div>
            <p>Possible integrations. Implementation required.</p>
          </div>
          <div className="integration-grid">
            {extensions.map(({ title, tools, icon: Icon }) => (
              <article key={title}>
                <h3>
                  <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                  {title}
                </h3>
                <div className="integration-brands">
                  {tools.map(({ name, slug, url }) => (
                    <a href={url} key={slug}>
                      <TechnologyLogo name={name} slug={slug} size={29} />
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="landing-cta landing-container">
          <h2>
            Make it <span>your own.</span>
          </h2>
          <Button asChild className="landing-primary">
            <Link href="/register">
              Start building <ArrowRight size={20} />
            </Link>
          </Button>
          <Link href="/docs" className="cta-docs">
            Read the documentation <ArrowUpRight size={18} />
          </Link>
        </section>
      </main>
      <footer className="landing-footer landing-container">
        <Link href="/" className="landing-brand">
          <BrandMark size={27} />
          {appConfig.name}
        </Link>
        <p>MIT core · Engineering preview</p>
        <div>
          <Link href="/docs">Documentation</Link>
          <a href="https://github.com/kyracnh/ModuSaaS">
            GitHub <ArrowUpRight size={16} />
          </a>
        </div>
      </footer>
    </div>
  );
}
