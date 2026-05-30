<template>
    <section
        id="about"
        class="folio-section about"
    >
        <section-heading
            folio="01"
            kicker="About"
            title="Engineering as authored craft."
        />

        <div class="about__grid">
            <div class="about__body">
                <p
                    v-reveal
                    class="reveal about__lead"
                >
                    <span
                        class="about__dropcap"
                        aria-hidden="true"
                    >E</span>ight years building software for the
                    web — currently at <strong>Cloud Plus Plus</strong>, where I
                    design and ship Laravel and Vue products for customers
                    across the globe. I hold a BSc and an MSc in Computer Science from
                    UFRN, where my research centred on multi-objective
                    optimization and algorithm optimization.
                </p>
                <p
                    v-reveal="80"
                    class="reveal about__para"
                >
                    A competitive-programming background taught me to treat
                    performance as a first-class feature rather than an
                    afterthought — to reason about cost, measure honestly, and
                    let the data settle the argument.
                </p>

                <blockquote
                    v-reveal="120"
                    class="reveal about__quote"
                >
                    <span
                        class="about__quote-rule"
                        aria-hidden="true"
                    />
                    I build systems to be measured, not guessed.
                </blockquote>
            </div>

            <aside class="about__aside">
                <photo-plate
                    v-reveal
                    class="reveal"
                    src="/images/photo.jpg"
                    alt="Emerson Carvalho"
                    caption="Fig. 01 — E. Carvalho · RN, BR"
                />

                <dl class="about__facts">
                    <div
                        v-for="(fact, i) in facts"
                        :key="fact.label"
                        v-reveal="i * 70"
                        class="reveal about__fact"
                    >
                        <dt class="about__fact-label">
                            {{ fact.label }}
                        </dt>
                        <dd class="about__fact-value">
                            <a
                                v-if="fact.href"
                                class="link-wipe"
                                :href="fact.href"
                            >{{ fact.value }}</a>
                            <template v-else>
                                {{ fact.value }}
                            </template>
                        </dd>
                    </div>
                </dl>
            </aside>
        </div>
    </section>
</template>

<script setup>
import SectionHeading from './SectionHeading.vue';
import PhotoPlate from './PhotoPlate.vue';

const facts = [
    { label: 'Email', value: 'carvemerson@gmail.com', href: 'mailto:carvemerson@gmail.com' },
    { label: 'Location', value: 'São José de Mipibu, RN, Brazil' },
    { label: 'Languages', value: 'Portuguese (PT-BR), English' },
    { label: 'Currently', value: 'Cloud Plus Plus' },
];
</script>

<style scoped>
.about__grid {
    display: grid;
    grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
    gap: clamp(2rem, 5vw, 4.5rem);
    align-items: start;
}

.about__body { max-width: var(--measure); }

.about__lead {
    margin: 0 0 1.5rem;
    font-size: var(--fs-lead);
    line-height: 1.55;
}

.about__dropcap {
    float: left;
    font-family: var(--font-display);
    font-weight: 560;
    font-size: 4.6rem;
    line-height: 0.78;
    padding: 0.1em 0.14em 0 0;
    color: var(--accent);
}

.about__para {
    margin: 0 0 1.5rem;
    color: var(--ink-muted);
}

.about__quote {
    position: relative;
    margin: 2.4rem 0 0;
    padding-top: 1.4rem;
    font-family: var(--font-display);
    font-style: italic;
    font-weight: 400;
    font-size: var(--fs-quote);
    line-height: 1.18;
    letter-spacing: -0.01em;
    max-width: 22ch;
}
.about__quote-rule {
    position: absolute;
    top: 0;
    left: 0;
    width: 3rem;
    height: 2px;
    background: var(--accent);
}

.about__aside {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
}

.about__facts {
    margin: 0;
    display: flex;
    flex-direction: column;
}
.about__fact {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding: 0.85rem 0;
    border-top: 1px solid var(--hairline);
}
.about__fact:last-child { border-bottom: 1px solid var(--hairline); }
.about__fact-label {
    font-family: var(--font-mono);
    font-size: var(--fs-mono);
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--ink-muted);
}
.about__fact-value {
    margin: 0;
    font-size: var(--fs-small);
    color: var(--ink);
    word-break: break-word;
}

@media (max-width: 880px) {
    .about__grid { grid-template-columns: 1fr; }
    .about__aside { order: -1; }
}
</style>
