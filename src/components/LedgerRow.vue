<template>
    <div
        v-reveal
        class="reveal row"
        :class="{ 'is-current': entry.current }"
    >
        <span
            class="row__node"
            aria-hidden="true"
        />
        <div class="row__date">
            {{ entry.date }}
        </div>
        <div class="row__main">
            <div class="row__head">
                <h4 class="row__org">
                    {{ entry.org }}
                </h4>
                <span
                    v-if="entry.tag"
                    class="row__tag"
                    :class="{ 'row__tag--live': entry.current }"
                >
                    <span
                        v-if="entry.current"
                        class="row__dot"
                        aria-hidden="true"
                    />
                    {{ entry.tag }}
                </span>
            </div>
            <p class="row__role">
                {{ entry.role }}
            </p>
            <ul
                v-if="entry.details && entry.details.length"
                class="row__details"
            >
                <li
                    v-for="d in entry.details"
                    :key="d"
                >
                    {{ d }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
defineProps({
    entry: { type: Object, required: true },
});
</script>

<style scoped>
.row {
    position: relative;
    display: grid;
    grid-template-columns: 8.5rem minmax(0, 1fr);
    gap: 1.6rem;
    padding: 1.4rem 0;
    border-bottom: 1px solid var(--hairline);
}

.row__node {
    position: absolute;
    left: calc(-1.5rem - 0.5px);
    top: 1.7rem;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    border: 1px solid var(--accent);
    background: var(--bg-press);
    transform: translateX(-50%);
    transition: background-color 0.5s var(--ease), box-shadow 0.5s var(--ease);
}
.row.is-visible .row__node {
    background: var(--accent);
    box-shadow: 0 0 9px var(--glow);
}

.row__date {
    font-family: var(--font-mono);
    font-size: var(--fs-mono);
    letter-spacing: 0.06em;
    color: var(--ink-muted);
    font-variant-numeric: tabular-nums;
    padding-top: 0.35rem;
    white-space: nowrap;
}

.row__head {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.6rem 1rem;
}
.row__org {
    font-size: var(--fs-h3);
    letter-spacing: -0.01em;
}
.row__role {
    margin: 0.25rem 0 0;
    color: var(--ink-muted);
    font-size: var(--fs-small);
}

.row__tag {
    display: inline-flex;
    align-items: center;
    gap: 0.55ch;
    padding: 0.25rem 0.6rem;
    border: 1px solid var(--hairline-strong);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 0.625rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--ink-muted);
}
.row__tag--live {
    border-color: color-mix(in srgb, var(--accent) 50%, transparent);
    color: var(--accent);
}
.row__dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--status-ok);
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--status-ok) 60%, transparent);
    animation: live-pulse 2.4s var(--ease) infinite;
}
@keyframes live-pulse {
    0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--status-ok) 55%, transparent); }
    70%, 100% { box-shadow: 0 0 0 6px transparent; }
}

.row__details {
    margin: 0.8rem 0 0;
    padding-left: 1.1rem;
    color: var(--ink-muted);
    font-size: var(--fs-small);
}
.row__details li { margin-bottom: 0.3rem; }
.row__details li::marker { color: var(--accent); }

@media (max-width: 620px) {
    .row { grid-template-columns: 1fr; gap: 0.5rem; }
    .row__date { padding-top: 0; }
}
</style>
