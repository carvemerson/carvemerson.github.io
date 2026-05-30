<template>
    <a
        class="sm"
        :class="{ 'sm--large': large }"
        :href="skill.href"
        target="_blank"
        rel="noopener"
        :aria-label="`${skill.name} (opens in new window)`"
    >
        <span
            class="sm__mark"
            aria-hidden="true"
        >
            <svg
                v-if="path"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                role="presentation"
            >
                <path
                    :d="path"
                    fill="currentColor"
                />
            </svg>
            <span
                v-else
                class="sm__dot"
            />
        </span>
        <span class="sm__name">{{ skill.name }}</span>
    </a>
</template>

<script setup>
import { computed } from 'vue';
import { icons } from '../icons.js';

const props = defineProps({
    skill: { type: Object, required: true },
    large: { type: Boolean, default: false },
});

const path = computed(() => (icons[props.skill.icon] || {}).path || '');
</script>

<style scoped>
.sm {
    display: inline-flex;
    align-items: center;
    gap: 0.7ch;
    color: var(--ink);
    transition: color 0.22s var(--ease);
}
.sm__mark {
    display: inline-flex;
    font-size: 1.05rem;
    color: var(--ink-muted);
    transition: color 0.22s var(--ease), transform 0.22s var(--ease);
}
.sm__name {
    font-size: var(--fs-small);
}
.sm__dot {
    display: inline-block;
    width: 0.5em;
    height: 0.5em;
    background: currentColor;
    transform: rotate(45deg);
}

.sm--large {
    gap: 1ch;
}
.sm--large .sm__mark { font-size: 2.4rem; }
.sm--large .sm__name {
    font-family: var(--font-display);
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    letter-spacing: -0.01em;
}

@media (hover: hover) {
    .sm:hover { color: var(--accent); }
    .sm:hover .sm__mark {
        color: var(--accent);
        transform: scale(1.06);
    }
}
</style>
