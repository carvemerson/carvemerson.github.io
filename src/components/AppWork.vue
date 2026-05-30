<template>
    <section
        v-if="projects.length"
        id="work"
        class="folio-section work"
    >
        <section-heading
            folio="02"
            kicker="Selected Work"
            title="A feature well, not a card grid."
        />

        <p class="work__note">
            <span
                class="work__note-tick"
                aria-hidden="true"
            />
            Selected work — solo &amp; with teams.
        </p>

        <div class="work__list">
            <project-entry
                v-for="(project, i) in projects"
                :key="project.index"
                :project="project"
                :side="i % 2 === 0 ? 'left' : 'right'"
            />
        </div>

        <a
            class="work__more"
            href="https://www.linkedin.com/in/carvemerson/"
            target="_blank"
            rel="noopener"
            aria-label="More projects on LinkedIn (opens in new window)"
        >
            More projects on LinkedIn
            <span aria-hidden="true">↗</span>
        </a>
    </section>
</template>

<script setup>
import SectionHeading from './SectionHeading.vue';
import ProjectEntry from './ProjectEntry.vue';

// Real projects, condensed from Emerson's own descriptions. The three Cloud++
// platforms have no public URL (enterprise/internal); the two independent
// products link out. No fabricated metrics — `metric` is intentionally omitted.
const projects = [
    {
        index: 'P-01',
        title: 'AI-Orchestrated SDLC & Internal-Ops Platform',
        meta: 'Cloud++ · with team · 2026',
        standfirst:
            'A production internal-operations platform produced by a five-phase, spec-driven SDLC that orchestrates AI agents behind mandatory human approval gates. Per-persona Filament panels sharing zero code, type-safe enum authorization, UUIDv7 route keys, an immutable audit trail, multi-provider LLM failover — with architecture-as-code tests that fail CI on violation.',
        tags: ['Laravel 12', 'Filament', 'PostgreSQL', 'Laravel AI SDK', 'Pest'],
        href: '',
    },
    {
        index: 'P-02',
        title: 'Global B2B Sales CRM',
        meta: 'Cloud++ · with team · since 2017',
        standfirst:
            'One of the largest enterprise CRMs of its kind — the full sales lifecycle for a global manufacturer across many countries. A metadata-driven UI that renders entity screens from server layouts, a polymorphic approval & escalation engine, a no-code nested query builder, deep bi-directional ERP integration, and federated multi-region field- and row-level authorization.',
        tags: ['Laravel', 'Vue 3', 'TypeScript', 'PostgreSQL', 'Redis'],
        href: '',
    },
    {
        index: 'P-03',
        title: 'Multi-tenant B2B SaaS Platform',
        meta: 'Cloud++ · with team',
        standfirst:
            'A new multi-tenant SaaS with end-to-end type safety from database to UI: a server-driven data-table framework defined entirely in PHP that auto-generates type-safe Vue, an AI document-extraction pipeline with JSON-Schema output, and wildcard-subdomain tenancy propagated across requests and queue jobs.',
        tags: ['Laravel 12', 'Vue 3', 'Inertia', 'TypeScript', 'PostgreSQL'],
        href: '',
    },
    {
        index: 'P-04',
        title: 'Agenda SF — Appointment Scheduling SaaS',
        meta: 'Independent · solo · agendasf.com.br',
        standfirst:
            'A solo-built, mobile-first scheduling SaaS for service businesses — one Flutter codebase across iOS, Android and Web on an event-driven Firebase backend. Three roles, a friction-minimized booking funnel, exact-time reminders fanned across push & WhatsApp, and a server-enforced subscription system with data-preserving downgrades.',
        tags: ['Flutter', 'Dart', 'Firebase', 'Cloud Functions', 'TypeScript'],
        href: 'https://agendasf.com.br',
    },
    {
        index: 'P-05',
        title: 'Giro Mipibu — Cycling Event CRM',
        meta: 'Independent · solo · giro-mipibu.com.br',
        standfirst:
            'A complete event-management CRM built solo for a volunteer cycling community that had been running on spreadsheets and WhatsApp. Tiered time-based pricing with auto-opening registration windows, a full PIX payment flow with audit history, sponsor tiers, a merch store, and a real-time revenue & capacity dashboard — localized for Brazilian Portuguese.',
        tags: ['Laravel', 'Filament', 'Livewire', 'MySQL', 'Tailwind'],
        href: 'https://giro-mipibu.com.br/',
    },
];
</script>

<style scoped>
.work__note {
    display: flex;
    align-items: center;
    gap: 0.9ch;
    margin: -1rem 0 2rem;
    font-family: var(--font-mono);
    font-size: var(--fs-mono);
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--ink-muted);
}
.work__note-tick {
    width: 1.6rem;
    height: 1px;
    background: var(--accent);
}

.work__list { margin-top: 0.5rem; }

.work__more {
    display: inline-flex;
    align-items: center;
    gap: 0.6ch;
    margin-top: 2.4rem;
    font-family: var(--font-mono);
    font-size: var(--fs-mono);
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--ink);
    transition: color 0.2s var(--ease);
}
.work__more span { color: var(--accent); transition: transform 0.2s var(--ease); }
@media (hover: hover) {
    .work__more:hover { color: var(--accent); }
    .work__more:hover span { transform: translate(3px, -3px); }
}
</style>
