<template>
    <footer class="colophon">
        <div class="colophon__inner u-pad-x">
            <div
                class="colophon__block"
                aria-hidden="true"
            >
                <div
                    v-for="cell in titleBlock"
                    :key="cell.k"
                    class="colophon__cell"
                >
                    <span class="colophon__k">{{ cell.k }}</span>
                    <span class="colophon__v">{{ cell.v }}</span>
                </div>
            </div>

            <div class="colophon__baseline">
                <p class="colophon__set">
                    Set in Fraunces, Newsreader &amp; JetBrains Mono.
                </p>
                <p class="colophon__run">
                    © {{ year }} Emerson Carvalho
                    <span class="colophon__sep">/</span>
                    Folio MMXXVI
                    <brand-caret force-solid />
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import BrandCaret from './BrandCaret.vue';

const year = new Date().getFullYear();

const titleBlock = [
    { k: 'Drawn by', v: 'E. Carvalho' },
    { k: 'Scale', v: '1 : 1' },
    { k: 'Sheet', v: '07 of 07' },
    { k: 'Date', v: '2026' },
    { k: 'Location', v: 'RN, BR' },
    { k: 'Rev.', v: 'A' },
];
</script>

<style scoped>
.colophon {
    position: relative;
    z-index: 1;
    border-top: 1px solid var(--hairline);
    background: var(--bg-stock);
    padding-block: clamp(2.5rem, 5vw, 4rem);
}

.colophon__block {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    border: 1px solid var(--hairline);
    border-radius: 2px;
    overflow: hidden;
}
.colophon__cell {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    padding: 0.9rem 1rem;
    border-right: 1px solid var(--hairline);
}
.colophon__cell:last-child { border-right: 0; }
.colophon__k {
    font-family: var(--font-mono);
    font-size: 0.625rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--ink-muted);
}
.colophon__v {
    font-family: var(--font-mono);
    font-size: var(--fs-small);
    color: var(--ink);
}

.colophon__baseline {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem 2rem;
    margin-top: 1.6rem;
}
.colophon__set {
    margin: 0;
    max-width: 48ch;
    font-size: var(--fs-small);
    color: var(--ink-muted);
}
.colophon__run {
    margin: 0;
    display: inline-flex;
    align-items: center;
    font-family: var(--font-mono);
    font-size: var(--fs-mono);
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--ink-muted);
}
.colophon__sep { margin: 0 0.8ch; color: var(--accent); }

@media (max-width: 760px) {
    .colophon__block { grid-template-columns: repeat(2, 1fr); }
    .colophon__cell:nth-child(2n) { border-right: 0; }
    .colophon__cell { border-bottom: 1px solid var(--hairline); }
    .colophon__cell:nth-last-child(-n + 2) { border-bottom: 0; }
}
</style>
