<template>
    <span class="dim">
        <span
            class="dim__b"
            aria-hidden="true"
        >|&#8592;</span>
        <span class="dim__v">{{ value }}</span>
        <span
            class="dim__b"
            aria-hidden="true"
        >&#8594;|</span>
    </span>
</template>

<script setup>
// A measured figure, as if Emerson dimensioned his own career.
// Used sparingly — only for real numbers.
defineProps({
    value: { type: String, required: true },
});
</script>

<style scoped>
.dim {
    display: inline-flex;
    align-items: center;
    gap: 0.6ch;
    font-family: var(--font-mono);
    font-size: var(--fs-mono);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ink-muted);
    white-space: nowrap;
}

.dim__b { color: var(--accent); }
.dim__v { color: var(--ink); }
</style>
