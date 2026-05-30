<template>
    <article
        class="pe"
        :class="`pe--${side}`"
    >
        <div
            v-reveal
            class="reveal pe__well"
            :class="{ 'pe__well--shot': project.thumb }"
            aria-hidden="true"
        >
            <img
                v-if="project.thumb"
                class="pe__shot"
                :src="project.thumb"
                alt=""
                loading="lazy"
                decoding="async"
            >
            <span
                v-else
                class="pe__well-empty"
            >
                <span class="pe__well-index">{{ project.index }}</span>
                <span class="pe__well-note">{{ project.preview || 'No public preview' }}</span>
            </span>
            <span class="pe__well-mark" />
        </div>

        <div class="pe__body">
            <p class="pe__meta">
                <span class="pe__index">{{ project.index }}</span>
                <span
                    v-if="project.meta"
                    class="pe__context"
                >{{ project.meta }}</span>
            </p>
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
    --well-w: clamp(9rem, 22vw, 18rem);
    display: grid;
    /* a compact text+thumbnail pair, not a full-bleed row — no central void */
    grid-template-columns: var(--well-w) minmax(0, 54ch);
    justify-content: start;
    gap: clamp(1.5rem, 4vw, 3.5rem);
    align-items: center;
    padding: clamp(2rem, 4vw, 3rem) 0;
    border-top: 1px solid var(--hairline);
}
.pe:last-child { border-bottom: 1px solid var(--hairline); }

/* alternating rhythm: mirror the columns and pack to the opposite edge,
   so the whitespace lands on the outer margin instead of mid-row */
.pe--right {
    grid-template-columns: minmax(0, 54ch) var(--well-w);
    justify-content: end;
}
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

/* screenshot wells: duotone at rest, full colour on hover */
.pe__shot {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    filter: grayscale(1) contrast(1.04) brightness(0.92);
    transition: filter 0.5s var(--ease), transform 0.6s var(--ease);
}
.pe__well--shot::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--accent-deep), transparent 62%);
    mix-blend-mode: var(--duotone-mix);
    opacity: var(--duotone-opacity, 0.6);
    transition: opacity 0.5s var(--ease);
    pointer-events: none;
}

.pe__well-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;
    z-index: 1;
}
.pe__well-index {
    font-family: var(--font-mono);
    font-size: clamp(1.4rem, 3vw, 2.2rem);
    letter-spacing: 0.1em;
    color: var(--ink-faint);
    transition: color 0.3s var(--ease);
}
.pe__well-note {
    font-family: var(--font-mono);
    font-size: 0.625rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--ink-faint);
}
.pe__well-mark {
    position: absolute;
    inset: 0;
    background: radial-gradient(60% 60% at 50% 120%, var(--glow), transparent 70%);
    opacity: 0;
    transition: opacity 0.4s var(--ease);
}

.pe__body { min-width: 0; }
.pe__meta {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 0.4rem 1ch;
    margin: 0;
}
.pe__index {
    font-family: var(--font-mono);
    font-size: var(--fs-mono);
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--accent);
}
.pe__context {
    font-family: var(--font-mono);
    font-size: var(--fs-mono);
    letter-spacing: 0.1em;
    color: var(--ink-muted);
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
    .pe:hover .pe__shot { filter: none; transform: scale(1.03); }
    .pe:hover .pe__well--shot::after { opacity: 0; }
    .pe__title-link:hover { transform: translateX(10px); color: var(--accent); }
    .pe__title-link:hover .pe__view { opacity: 1; transform: translateX(0); }
}

@media (max-width: 760px) {
    .pe,
    .pe--right { grid-template-columns: 1fr; gap: 1.4rem; }
    .pe--right .pe__well { order: 0; }
    .pe__well { aspect-ratio: 16 / 9; }
}
</style>
