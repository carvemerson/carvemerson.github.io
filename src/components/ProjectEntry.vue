<template>
    <article
        class="pe"
        :class="`pe--${side}`"
    >
        <div
            v-reveal
            class="reveal pe__well"
            aria-hidden="true"
        >
            <span class="pe__well-index">{{ project.index }}</span>
            <span class="pe__well-mark" />
        </div>

        <div class="pe__body">
            <span class="pe__index">{{ project.index }}</span>
            <h3 class="pe__title">
                <component
                    :is="project.href ? 'a' : 'span'"
                    class="pe__title-link"
                    :href="project.href || undefined"
                    :target="project.href ? '_blank' : undefined"
                    :rel="project.href ? 'noopener' : undefined"
                    :aria-label="project.href ? `${project.title} (opens in new window)` : undefined"
                >
                    {{ project.title }}
                    <span
                        v-if="project.href"
                        class="pe__view"
                        aria-hidden="true"
                    >→ View</span>
                </component>
            </h3>
            <p class="pe__standfirst">
                {{ project.standfirst }}
            </p>
            <dimension-figure
                v-if="project.metric"
                :value="project.metric"
            />
            <ul class="pe__tags">
                <li
                    v-for="tag in project.tags"
                    :key="tag"
                >
                    {{ tag }}
                </li>
            </ul>
        </div>
    </article>
</template>

<script setup>
import DimensionFigure from './DimensionFigure.vue';

defineProps({
    project: { type: Object, required: true },
    side: { type: String, default: 'left' },
});
</script>

<style scoped>
.pe {
    display: grid;
    grid-template-columns: clamp(8rem, 22vw, 16rem) minmax(0, 1fr);
    gap: clamp(1.5rem, 4vw, 3.5rem);
    align-items: center;
    padding: clamp(2rem, 4vw, 3rem) 0;
    border-top: 1px solid var(--hairline);
}
.pe:last-child { border-bottom: 1px solid var(--hairline); }
.pe--right .pe__well { order: 2; }

.pe__well {
    position: relative;
    display: grid;
    place-items: center;
    aspect-ratio: 4 / 3;
    border: 1px solid var(--hairline);
    background: var(--bg-stock);
    overflow: hidden;
    transition: border-color 0.3s var(--ease);
}
.pe__well-index {
    font-family: var(--font-mono);
    font-size: clamp(1.4rem, 3vw, 2.2rem);
    letter-spacing: 0.1em;
    color: var(--ink-faint);
    transition: color 0.3s var(--ease);
    z-index: 1;
}
.pe__well-mark {
    position: absolute;
    inset: 0;
    background: radial-gradient(60% 60% at 50% 120%, var(--glow), transparent 70%);
    opacity: 0;
    transition: opacity 0.4s var(--ease);
}

.pe__body { min-width: 0; }
.pe__index {
    font-family: var(--font-mono);
    font-size: var(--fs-mono);
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--accent);
}
.pe__title {
    margin: 0.5rem 0 0.7rem;
    font-size: var(--fs-h3);
    letter-spacing: -0.01em;
}
.pe__title-link {
    position: relative;
    display: inline-flex;
    align-items: baseline;
    gap: 0.8ch;
    transition: transform 0.26s var(--ease);
}
.pe__view {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    color: var(--accent);
    opacity: 0;
    transform: translateX(-6px);
    transition: opacity 0.26s var(--ease), transform 0.26s var(--ease);
}
.pe__standfirst {
    margin: 0 0 1rem;
    color: var(--ink-muted);
    max-width: 52ch;
}
.pe__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1.1rem;
    margin: 1rem 0 0;
    padding: 0;
    list-style: none;
}
.pe__tags li {
    font-family: var(--font-mono);
    font-size: var(--fs-mono);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--ink-muted);
}
.pe__tags li::before {
    content: "·";
    margin-right: 0.9ch;
    color: var(--accent);
}

@media (hover: hover) {
    .pe:hover .pe__well { border-color: var(--accent); }
    .pe:hover .pe__well-index { color: var(--accent); }
    .pe:hover .pe__well-mark { opacity: 1; }
    .pe__title-link:hover { transform: translateX(10px); color: var(--accent); }
    .pe__title-link:hover .pe__view { opacity: 1; transform: translateX(0); }
}

@media (max-width: 760px) {
    .pe { grid-template-columns: 1fr; gap: 1.4rem; }
    .pe--right .pe__well { order: 0; }
    .pe__well { aspect-ratio: 16 / 9; }
}
</style>
