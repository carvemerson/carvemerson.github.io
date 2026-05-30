<template>
    <div
        class="folio-rule folio-rule-vt"
        :class="{ 'is-drawing': animate }"
        aria-hidden="true"
    >
        <div class="folio-rule__track" />
        <div
            class="folio-rule__fill"
            :style="{ transform: `scaleY(${progress})` }"
        />
        <span class="folio-rule__cut folio-rule__cut--top" />
        <span class="folio-rule__cut folio-rule__cut--bot" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useScrollProgress } from '../composables/useScrollProgress.js';
import { useReducedMotion } from '../composables/useReducedMotion.js';

// THE signature: one crimson hairline that is spine, scroll-progress and
// section binding all at once. Single source of truth so it never drifts.
const progress = useScrollProgress();
const reduced = useReducedMotion();
const animate = ref(false);

onMounted(() => {
    // draw down on load (skipped under reduced-motion → appears already drawn)
    if (!reduced.value) animate.value = true;
});
</script>

<style scoped>
.folio-rule {
    position: fixed;
    left: var(--rule-x);
    top: var(--masthead-h);
    bottom: 0;
    width: 1px;
    z-index: 40;
    transform-origin: top;
    pointer-events: none;
}

.folio-rule.is-drawing {
    animation: rule-draw 0.7s var(--ease) both;
}

.folio-rule__track {
    position: absolute;
    inset: 0;
    background: var(--hairline-strong);
}

.folio-rule__fill {
    position: absolute;
    inset: 0;
    background: var(--accent);
    transform-origin: top;
    transform: scaleY(0);
    box-shadow: 0 0 12px var(--glow);
}

/* cut-marks where the rule opens and closes the issue */
.folio-rule__cut {
    position: absolute;
    left: 0;
    width: 0.9rem;
    height: 1px;
    background: var(--accent);
}
.folio-rule__cut--top { top: 0; }
.folio-rule__cut--bot { bottom: 0; }
</style>
