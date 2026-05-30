<template>
    <section
        id="algorithms"
        class="folio-section algo"
    >
        <section-heading
            folio="05"
            kicker="Competitive Programming"
            title="A habit of hard problems."
        />

        <div class="algo__grid">
            <div class="algo__body">
                <p
                    v-reveal
                    class="reveal algo__lead"
                >
                    Before production systems, there were timed contests and
                    computational puzzles. Competitive programming is where I
                    learned to reason about complexity, weigh trade-offs under
                    tight constraints, and treat correctness and performance as
                    the problem itself — not an afterthought. It's the same
                    instinct behind my master's work on multi-objective
                    optimization, and it still shapes how I build.
                </p>

                <blockquote
                    v-reveal="120"
                    class="reveal algo__quote"
                >
                    <span
                        class="algo__quote-rule"
                        aria-hidden="true"
                    />
                    Constraints are the interesting part.
                </blockquote>
            </div>

            <ul class="algo__principles">
                <li
                    v-for="(p, i) in principles"
                    :key="p.label"
                    v-reveal="i * 80"
                    class="reveal algo__principle"
                >
                    <span class="algo__principle-label">
                        <span
                            class="algo__principle-tick"
                            aria-hidden="true"
                        />
                        {{ p.label }}
                    </span>
                    <span class="algo__principle-text">{{ p.text }}</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import SectionHeading from './SectionHeading.vue';

const principles = [
    { label: 'Complexity', text: 'Reason about cost before reaching for code.' },
    { label: 'Trade-offs', text: 'Optimize the objective that matters — rarely all at once.' },
    { label: 'Rigor', text: 'Edge cases are the spec; correctness is not negotiable.' },
];
</script>

<style scoped>
.algo__grid {
    display: grid;
    grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
    gap: clamp(2rem, 5vw, 4.5rem);
    align-items: start;
}

.algo__body { max-width: var(--measure); }

.algo__lead {
    margin: 0;
    font-size: var(--fs-lead);
    line-height: 1.55;
    color: var(--ink-muted);
}
.algo__lead :where(strong) { color: var(--ink); }

.algo__quote {
    position: relative;
    margin: 2.4rem 0 0;
    padding-top: 1.4rem;
    font-family: var(--font-display);
    font-style: italic;
    font-weight: 400;
    font-size: var(--fs-quote);
    line-height: 1.18;
    letter-spacing: -0.01em;
    max-width: 18ch;
    color: var(--ink);
}
.algo__quote-rule {
    position: absolute;
    top: 0;
    left: 0;
    width: 3rem;
    height: 2px;
    background: var(--accent);
}

.algo__principles {
    list-style: none;
    margin: 0;
    padding: 0;
}
.algo__principle {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding: 1.1rem 0;
    border-top: 1px solid var(--hairline);
}
.algo__principle:last-child { border-bottom: 1px solid var(--hairline); }
.algo__principle-label {
    display: flex;
    align-items: center;
    gap: 0.8ch;
    font-family: var(--font-mono);
    font-size: var(--fs-mono);
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--accent);
}
.algo__principle-tick {
    width: 1.4rem;
    height: 1px;
    background: var(--accent);
}
.algo__principle-text {
    font-size: var(--fs-small);
    color: var(--ink);
}

@media (max-width: 880px) {
    .algo__grid { grid-template-columns: 1fr; }
}
</style>
