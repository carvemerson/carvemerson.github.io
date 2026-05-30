<template>
    <figure class="plate">
        <div class="plate__frame">
            <img
                :src="src"
                :alt="alt"
                loading="lazy"
                decoding="async"
            />
            <span
                class="plate__corner plate__corner--tl"
                aria-hidden="true"
            />
            <span
                class="plate__corner plate__corner--tr"
                aria-hidden="true"
            />
            <span
                class="plate__corner plate__corner--bl"
                aria-hidden="true"
            />
            <span
                class="plate__corner plate__corner--br"
                aria-hidden="true"
            />
        </div>
        <figcaption class="plate__cap">
            {{ caption }}
        </figcaption>
    </figure>
</template>

<script setup>
defineProps({
    src: { type: String, required: true },
    alt: { type: String, required: true },
    caption: { type: String, default: '' },
});
</script>

<style scoped>
.plate { margin: 0; }

.plate__frame {
    position: relative;
    overflow: hidden;
    border: 1px solid var(--hairline);
}

.plate__frame img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    filter: grayscale(1) contrast(1.04) brightness(0.92);
    transition: filter 0.5s var(--ease), transform 0.5s var(--ease);
}

/* crimson duotone wash */
.plate__frame::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--accent-deep), transparent 62%);
    mix-blend-mode: var(--duotone-mix);
    opacity: var(--duotone-opacity, 0.6);
    transition: opacity 0.5s var(--ease);
    pointer-events: none;
}

.plate__corner {
    position: absolute;
    width: 12px;
    height: 12px;
    border: 1px solid var(--accent);
}
.plate__corner--tl { top: 8px; left: 8px; border-right: 0; border-bottom: 0; }
.plate__corner--tr { top: 8px; right: 8px; border-left: 0; border-bottom: 0; }
.plate__corner--bl { bottom: 8px; left: 8px; border-right: 0; border-top: 0; }
.plate__corner--br { bottom: 8px; right: 8px; border-left: 0; border-top: 0; }

.plate__cap {
    margin-top: 0.7rem;
    font-family: var(--font-mono);
    font-size: var(--fs-mono);
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--ink-muted);
}

@media (hover: hover) {
    .plate__frame:hover img {
        filter: grayscale(0) contrast(1) brightness(1);
        transform: scale(1.02);
    }
    .plate__frame:hover::after { opacity: 0; }
}
</style>
