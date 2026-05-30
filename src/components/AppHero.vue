<template>
    <section
        id="home"
        class="hero"
    >
        <div
            class="hero__bloom"
            aria-hidden="true"
        />
        <span
            class="hero__watermark"
            aria-hidden="true"
        >26</span>

        <div class="hero__grid u-pad-x">
            <div class="hero__main">
                <p class="hero__kicker">
                    Folio 00 — Cover · Issue MMXXVI
                </p>

                <h1 class="hero__headline">
                    <span
                        v-reveal="60"
                        class="clip hero__line"
                    ><span>Software,</span></span>
                    <span
                        v-reveal="150"
                        class="clip hero__line"
                    ><span>engineered with</span></span>
                    <span class="hero__line hero__line--last">
                        <span
                            v-reveal="240"
                            class="clip"
                        ><span><em>precision.</em></span></span>
                        <brand-caret class="hero__caret" />
                    </span>
                </h1>

                <div class="hero__cta">
                    <a
                        class="btn btn--primary"
                        href="#work"
                    >View work ↓</a>
                    <a
                        class="btn btn--ghost"
                        href="#contact"
                    >Get in touch</a>
                    <a
                        class="btn btn--ghost"
                        href="https://www.linkedin.com/in/carvemerson/"
                        target="_blank"
                        rel="noopener"
                        aria-label="View CV on LinkedIn (opens in new window)"
                    >View CV ↗</a>
                </div>
            </div>

            <aside class="hero__aside">
                <dimension-figure value="8+ yrs" />
                <p class="hero__standfirst">
                    Emerson Carvalho — software engineer with 8+ years building
                    Laravel &amp; Vue products. MSc in Computer Science, UFRN; a
                    competitive-programming and multi-objective-optimization
                    background that shows up as systems built to be
                    <em>measured, not guessed.</em>
                </p>
            </aside>
        </div>

        <a
            class="hero__scroll"
            href="#about"
            aria-label="Scroll to about"
        >
            <span>Scroll</span>
            <span
                class="hero__scroll-line"
                aria-hidden="true"
            />
        </a>
    </section>
</template>

<script setup>
import BrandCaret from './BrandCaret.vue';
import DimensionFigure from './DimensionFigure.vue';
</script>

<style scoped>
.hero {
    position: relative;
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: var(--masthead-h);
    overflow: clip;
}

.hero__bloom {
    position: absolute;
    inset: -10% -10% 0 -10%;
    z-index: -1;
    background:
        radial-gradient(40% 50% at 22% 32%, var(--glow), transparent 70%),
        radial-gradient(38% 46% at 82% 78%, color-mix(in srgb, var(--accent-warm) 22%, transparent), transparent 72%);
    filter: blur(36px);
    animation: bloom-drift 24s ease-in-out infinite;
}

.hero__watermark {
    position: absolute;
    right: -0.06em;
    bottom: -0.18em;
    z-index: -1;
    font-family: var(--font-display);
    font-weight: 340;
    font-size: clamp(14rem, 40vw, 34rem);
    line-height: 0.8;
    color: var(--ink-faint);
    opacity: 0.12;
    pointer-events: none;
    user-select: none;
}

.hero__grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) clamp(15rem, 26vw, 21rem);
    gap: clamp(2rem, 5vw, 4.5rem);
    align-items: end;
    width: 100%;
}

.hero__kicker {
    margin: 0 0 1.6rem;
    font-family: var(--font-mono);
    font-size: var(--fs-mono);
    text-transform: uppercase;
    letter-spacing: 0.22em;
    color: var(--ink-muted);
}

.hero__headline {
    font-size: var(--fs-hero);
    font-weight: 340;
    line-height: 0.95;
    letter-spacing: -0.02em;
}

.hero__line { display: block; }
.hero__line--last {
    display: flex;
    align-items: flex-end;
}
.hero__headline em {
    font-style: italic;
    font-weight: 400;
    color: var(--accent);
}
.hero__caret { align-self: center; }

.hero__cta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.9rem;
    margin-top: clamp(2rem, 4vw, 3rem);
}

.hero__aside {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
    padding-bottom: 0.6rem;
    border-left: 1px solid var(--hairline);
    padding-left: 1.4rem;
}

.hero__standfirst {
    margin: 0;
    font-size: var(--fs-lead);
    line-height: 1.5;
    color: var(--ink-muted);
    max-width: 34ch;
}
.hero__standfirst em {
    font-style: italic;
    color: var(--ink);
}

.hero__scroll {
    position: absolute;
    left: var(--page-pad-l);
    bottom: 1.8rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-family: var(--font-mono);
    font-size: 0.625rem;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    color: var(--ink-muted);
}
.hero__scroll-line {
    width: 3rem;
    height: 1px;
    background: var(--hairline-strong);
    position: relative;
    overflow: hidden;
}
.hero__scroll-line::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 40%;
    background: var(--accent);
    animation: scroll-cue 2.4s var(--ease) infinite;
}
@keyframes scroll-cue {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(320%); }
}

@media (max-width: 880px) {
    .hero__grid {
        grid-template-columns: 1fr;
        align-items: start;
        gap: 2rem;
    }
    .hero__aside {
        border-left: 0;
        border-top: 1px solid var(--hairline);
        padding-left: 0;
        padding-top: 1.4rem;
    }
    .hero__scroll { display: none; }
}
</style>
