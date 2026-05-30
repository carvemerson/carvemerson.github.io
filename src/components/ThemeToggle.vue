<template>
    <button
        class="toggle"
        type="button"
        :aria-label="label"
        :aria-pressed="theme === 'light'"
        @click="toggle"
    >
        <span
            class="toggle__icon"
            aria-hidden="true"
        >
            <svg
                v-if="theme === 'dark'"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
            <svg
                v-else
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <circle
                    cx="12"
                    cy="12"
                    r="4"
                />
                <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19" />
            </svg>
        </span>
        <span class="toggle__label">{{ theme === 'dark' ? 'DARK' : 'LIGHT' }}</span>
    </button>
</template>

<script setup>
import { computed } from 'vue';
import { useTheme } from '../composables/useTheme.js';

const { theme, toggle } = useTheme();
const label = computed(() =>
    `Switch to ${theme.value === 'dark' ? 'light' : 'dark'} theme`
);
</script>

<style scoped>
.toggle {
    display: inline-flex;
    align-items: center;
    gap: 0.55ch;
    padding: 0.4rem 0.7rem;
    background: transparent;
    border: 1px solid var(--hairline);
    border-radius: 2px;
    color: var(--ink-muted);
    cursor: pointer;
    font-family: var(--font-mono);
    font-size: var(--fs-mono);
    letter-spacing: 0.16em;
    line-height: 1;
    transition: color 0.2s var(--ease), border-color 0.2s var(--ease);
}

.toggle__icon {
    display: inline-flex;
    font-size: 0.95rem;
    color: var(--accent);
}

@media (hover: hover) {
    .toggle:hover {
        color: var(--ink);
        border-color: var(--hairline-strong);
    }
}

@media (max-width: 540px) {
    .toggle__label { display: none; }
    .toggle { padding: 0.45rem; }
}
</style>
