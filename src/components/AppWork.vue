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
            Selected engagements — full case studies on request.
        </p>

        <div class="work__list">
            <project-entry
                v-for="(project, i) in projects"
                :key="project.index"
                :project="project"
                :side="i % 2 === 0 ? 'left' : 'right'"
            />
        </div>
    </section>
</template>

<script setup>
import SectionHeading from './SectionHeading.vue';
import ProjectEntry from './ProjectEntry.vue';

// TODO(emerson): replace these capability entries with real projects —
// add { title, standfirst, tags, href, metric, thumb } per item. Leaving
// `metric` out keeps the dimensioned figure hidden (no fabricated numbers);
// empty this array and the whole section hides itself.
const projects = [
    {
        index: 'P-01',
        title: 'Laravel platforms at scale',
        standfirst:
            'Domain-rich back-ends, API design and data modelling for enterprise web applications — built to be maintained as they grow.',
        tags: ['Laravel', 'PHP', 'MySQL'],
        href: '',
    },
    {
        index: 'P-02',
        title: 'Vue product front-ends',
        standfirst:
            'Component systems and reactive interfaces built for clarity, accessibility and speed, from design tokens up.',
        tags: ['Vue', 'TypeScript', 'Vite'],
        href: '',
    },
    {
        index: 'P-03',
        title: 'Cloud-native delivery',
        standfirst:
            'Containerised services and pipelines that ship reliably and stay observable in production.',
        tags: ['Docker', 'CI/CD', 'Cloud'],
        href: '',
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
</style>
