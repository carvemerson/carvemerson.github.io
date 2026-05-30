<template>
    <section
        id="experience"
        class="folio-section exp"
    >
        <section-heading
            folio="03"
            kicker="Experience"
            title="A career ledger."
        />

        <div class="exp__grid">
            <div class="exp__col">
                <p class="exp__running">
                    Professional
                </p>
                <div class="ledger">
                    <ledger-row
                        v-for="entry in experience"
                        :key="entry.org"
                        :entry="entry"
                    />
                </div>
            </div>

            <div class="exp__col">
                <p class="exp__running">
                    Education
                </p>
                <div class="ledger">
                    <ledger-row
                        v-for="entry in education"
                        :key="entry.org"
                        :entry="entry"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import SectionHeading from './SectionHeading.vue';
import LedgerRow from './LedgerRow.vue';

const experience = [
    {
        date: '2017 — Present',
        org: 'Cloud Plus Plus',
        role: 'Software Engineer',
        current: true,
        tag: 'Current',
        details: ['Designing and shipping Laravel & Vue products for customers worldwide.'],
    },
    {
        date: 'Jul — Sep 2017',
        org: 'Synco',
        role: 'Software Engineer',
    },
];

const education = [
    {
        date: '2015 — 2017',
        org: 'MSc, Computer Systems',
        role: 'UFRN — Federal University of Rio Grande do Norte',
        tag: 'thesis · multi-objective optimization',
    },
    {
        date: '2011 — 2015',
        org: 'BSc, Computer Science',
        role: 'UFRN — Federal University of Rio Grande do Norte',
    },
    {
        date: '2010 — 2011',
        org: 'Programmer Training',
        role: 'UFRN · Metrópole Digital',
    },
];
</script>

<style scoped>
.exp__grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(2rem, 6vw, 5rem);
    align-items: start;
}

.exp__col { min-width: 0; }

.exp__running {
    margin: 0 0 1.6rem;
    font-family: var(--font-mono);
    font-size: var(--fs-mono);
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--ink-muted);
}

.ledger {
    position: relative;
    padding-left: 1.5rem;
}
.ledger::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.6rem;
    bottom: 0.6rem;
    width: 1px;
    background: var(--hairline);
}

@media (max-width: 880px) {
    .exp__grid { grid-template-columns: 1fr; gap: 3rem; }
}
</style>
