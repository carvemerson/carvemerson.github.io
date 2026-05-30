<template>
    <header class="sh">
        <span
            class="sh__ghost"
            aria-hidden="true"
        >{{ folio }}</span>
        <span
            class="sh__cut"
            aria-hidden="true"
        />
        <p class="sh__kicker">
            <span class="sh__num">{{ folio }}</span>
            <span
                class="sh__sep"
                aria-hidden="true"
            >&mdash;</span>
            <span>{{ kicker }}</span>
        </p>
        <h2
            v-reveal
            class="sh__title clip"
        >
            <span>{{ title }}</span>
        </h2>
    </header>
</template>

<script setup>
defineProps({
    folio: { type: String, required: true },
    kicker: { type: String, required: true },
    title: { type: String, required: true },
});
</script>

<style scoped>
.sh {
    position: relative;
    margin-bottom: clamp(2rem, 5vw, 3.25rem);
}

.sh__ghost {
    position: absolute;
    top: -0.32em;
    right: 0;
    z-index: -1;
    font-family: var(--font-mono);
    font-weight: 500;
    font-size: clamp(3.5rem, 11vw, 8rem);
    line-height: 1;
    letter-spacing: 0.02em;
    color: var(--ink-faint);
    opacity: 0.26;
    pointer-events: none;
    user-select: none;
}

.sh__kicker {
    display: flex;
    align-items: center;
    gap: 0.7ch;
    margin: 0 0 1.1rem;
    font-family: var(--font-mono);
    font-size: var(--fs-mono);
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--ink-muted);
}

.sh__num { color: var(--accent); }
.sh__sep { color: var(--ink-faint); }

/* cut-mark: binds the heading to the folio rule across the gutter */
.sh__cut {
    position: absolute;
    top: 0.5rem;
    left: calc(-1 * var(--gap-rule));
    width: var(--gap-rule);
    height: 1px;
    background: var(--accent);
}
.sh__cut::before {
    content: "";
    position: absolute;
    left: 0;
    top: -2px;
    width: 1px;
    height: 5px;
    background: var(--accent);
}

.sh__title {
    font-size: var(--fs-h2);
    letter-spacing: -0.015em;
    max-width: 20ch;
}

@media (max-width: 768px) {
    .sh__ghost {
        font-size: 4rem;
        opacity: 0.16;
    }
}
</style>
