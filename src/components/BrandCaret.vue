<template>
    <span
        class="caret"
        :class="{ 'caret--solid': solid }"
        aria-hidden="true"
    />
</template>

<script setup>
import { computed } from 'vue';
import { useReducedMotion } from '../composables/useReducedMotion.js';

const props = defineProps({
    // The brand pulse blinks by default; pass force-solid for resting states
    // (e.g. the footer). Reduced-motion always freezes it solid.
    forceSolid: { type: Boolean, default: false },
});

const reduced = useReducedMotion();
const solid = computed(() => props.forceSolid || reduced.value);
</script>

<style scoped>
.caret {
    display: inline-block;
    width: 0.12em;
    height: 0.82em;
    margin-left: 0.16em;
    background: var(--accent);
    transform: translateY(-0.02em);
    border-radius: 0.5px;
    /* authentic terminal cadence: hard on/off, no fade */
    animation: caret-blink 1.06s step-end infinite;
}

.caret--solid {
    animation: none;
    opacity: 1;
}
</style>
