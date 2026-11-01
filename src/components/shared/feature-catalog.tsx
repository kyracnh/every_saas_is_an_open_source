"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  PanelsTopLeft,
  Terminal,
  Bell,
  Bot,
  Check,
  CircleDashed,
  CreditCard,
  Database,
  Files,
  FolderKanban,
  KeyRound,
  Mail,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { presets, type Preset } from "@/config/app";

const features: {
  name: string;
  description: string;
  icon: LucideIcon;
  module?: keyof typeof presets.full;
  setup: string;
}[] = [
  {
    name: "UI & forms",
    description:
      "Radix components, validated forms, tables, charts and dark mode.",
    icon: PanelsTopLeft,
    setup:
      "Included in every preset. React Hook Form and Zod validate input; a development gallery shows components.",
  },
  {
    name: "Developer tooling",
    description:
      "Local scaffold generator, test suites and Node/Docker deployment.",
    icon: Terminal,
    setup:
      "Included in every preset. Generate minimal, standard or full projects locally; run Vitest and Playwright checks.",
  },
  {
    name: "Authentication",
    description: "Email & password, sessions, recovery and account settings.",
    icon: KeyRound,
    setup: "Included in every preset. Recovery and verification require SMTP.",
  },
  {
    name: "Database",
    description: "PostgreSQL, Prisma models and committed migrations.",
    icon: Database,
    setup: "Included in every preset. Connect your PostgreSQL database.",
  },
  {
    name: "Projects & CRUD",
    description: "Search, filters, pagination and plan limits.",
    icon: FolderKanban,
    setup: "Included in every preset. Data is scoped to the user or team.",
  },
  {
    name: "Authorization",
    description: "Protected routes and owner, admin and member permissions.",
    icon: ShieldCheck,
    setup:
      "Included in every preset. Team permissions apply when teams are enabled.",
  },
  {
    name: "Teams",
    description: "Shared workspaces, invitations and role-based access.",
    icon: Users,
    module: "organizations",
    setup:
      "Enable with standard or full. Advanced team management UI is still incomplete.",
  },
  {
    name: "Notifications",
    description: "Persistent in-app notifications with read states.",
    icon: Bell,
    module: "notifications",
    setup: "Enable with standard or full. No external provider required.",
  },
  {
    name: "Payments",
    description: "Stripe checkout, customer portal and webhook handling.",
    icon: CreditCard,
    module: "billing",
    setup:
      "Enable with full. Configure Stripe secret, webhook and price IDs. Live payments need validation.",
  },
  {
    name: "AI studio",
    description: "Streaming chat, structured output and request quotas.",
    icon: Bot,
    module: "ai",
    setup:
      "Enable with full. Configure an OpenAI, Anthropic or Google API key. Live providers need validation.",
  },
  {
    name: "File storage",
    description: "Private uploads with local storage or an S3 adapter.",
    icon: Files,
    module: "storage",
    setup:
      "Enable with full. Local storage works without a provider; S3 requires credentials and validation.",
  },
  {
    name: "Transactional email",
    description: "SMTP delivery and React Email templates.",
    icon: Mail,
    setup:
      "Available in every preset, independently of module flags. Configure SMTP to send email.",
  },
];

export function FeatureCatalog({ currentPreset }: { currentPreset: Preset }) {
  const [preset, setPreset] = useState<Preset>(currentPreset);
  const [filter, setFilter] = useState("All features");
  const selected = presets[preset];
  const enabled = (feature: (typeof features)[number]) =>
    !feature.module || selected[feature.module];
  const shown = features.filter(
    (feature) =>
      filter === "All features" ||
      (filter === "Included" ? enabled(feature) : !enabled(feature)),
  );
  return (
    <div className="feature-catalog">
      <div className="catalog-toolbar">
        <div
          className="catalog-filters"
          role="group"
          aria-label="Filter features"
        >
          {["All features", "Included", "Optional"].map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={filter === value}
              onClick={() => setFilter(value)}
            >
              {value}
            </button>
          ))}
        </div>
        <label className="preset-select">
          Preview preset{" "}
          <select
            value={preset}
            onChange={(event) => setPreset(event.target.value as Preset)}
          >
            {Object.keys(presets).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p className="catalog-note" role="status">
        Preview only · Running preset: {currentPreset}. Provider configuration
        is separate.
      </p>
      <div className="feature-grid">
        {shown.map(({ name, description, icon: Icon, module, setup }) => {
          const active = !module || selected[module];
          const provider = [
            "Payments",
            "AI studio",
            "Transactional email",
          ].includes(name);
          return (
            <article className="feature-card" key={name}>
              <Icon
                className="feature-card-watermark"
                size={152}
                strokeWidth={1}
                aria-hidden="true"
                focusable="false"
              />
              <div className="feature-card-top">
                <Icon size={26} strokeWidth={1.6} aria-hidden="true" />
                <span
                  className={`feature-status ${active ? "is-included" : ""}`}
                >
                  {active ? (
                    <Check size={15} aria-hidden="true" />
                  ) : (
                    <CircleDashed size={15} aria-hidden="true" />
                  )}
                  {active
                    ? provider
                      ? "Needs provider"
                      : "Included"
                    : "Optional"}
                </span>
              </div>
              <h3>{name}</h3>
              <p>{description}</p>
              <details>
                <summary>
                  Setup details <ArrowUpRight size={17} aria-hidden="true" />
                </summary>
                <p>{setup}</p>
              </details>
            </article>
          );
        })}
      </div>
      {shown.length === 0 && (
        <p className="catalog-empty">
          All modules are included in the full preset. Provider setup may still
          be required.
        </p>
      )}
      <div className="catalog-footnote">
        <span>
          <CircleDashed size={20} aria-hidden="true" /> Not available as a
          switch
        </span>
        <p>
          Magic links, two-factor UI, background jobs and paid team billing
          require development.
        </p>
      </div>
    </div>
  );
}
