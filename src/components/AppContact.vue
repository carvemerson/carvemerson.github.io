<template>
    <section
        id="contact"
        class="folio-section contact"
    >
        <div
            class="contact__bloom"
            aria-hidden="true"
        />

        <section-heading
            folio="06"
            kicker="Contact"
            title="Let's set the next page."
        />

        <div class="contact__grid">
            <div class="contact__lead">
                <p class="contact__intro">
                    Have a product to build, a system to untangle, or a role to
                    fill? I'm open to interesting work.
                </p>

                <div class="contact__email">
                    <a
                        class="contact__email-link"
                        :href="`mailto:${email}`"
                    >{{ email }}</a>
                    <button
                        class="contact__copy"
                        type="button"
                        :aria-label="`Copy email address ${email}`"
                        @click="copyEmail"
                    >
                        <span aria-hidden="true">{{ copied ? 'Copied ✓' : 'Copy' }}</span>
                    </button>
                </div>
                <p
                    class="sr-only"
                    role="status"
                    aria-live="polite"
                >
                    {{ copied ? 'Email address copied to clipboard' : '' }}
                </p>
            </div>

            <ul class="contact__social">
                <li
                    v-for="link in socials"
                    :key="link.label"
                >
                    <a
                        class="contact__social-link"
                        :href="link.href"
                        target="_blank"
                        rel="noopener"
                        :aria-label="`${link.label}: ${link.handle} (opens in new window)`"
                    >
                        <span class="contact__social-label">{{ link.label }}</span>
                        <span
                            class="contact__social-handle"
                        >{{ link.handle }}</span>
                        <span
                            class="contact__social-arrow"
                            aria-hidden="true"
                        >↗</span>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { ref, onUnmounted } from 'vue';
import SectionHeading from './SectionHeading.vue';

const email = 'carvemerson@gmail.com';
const copied = ref(false);
let timer;

const copyEmail = async () => {
    try {
        await navigator.clipboard.writeText(email);
        copied.value = true;
        clearTimeout(timer);
        timer = setTimeout(() => { copied.value = false; }, 2200);
    } catch { /* clipboard unavailable — mailto link still works */ }
};

onUnmounted(() => clearTimeout(timer));

const socials = [
    { label: 'GitHub', handle: 'github.com/carvemerson', href: 'https://github.com/carvemerson' },
    { label: 'LinkedIn', handle: 'in/carvemerson', href: 'https://www.linkedin.com/in/carvemerson/' },
];
</script>

<style scoped>
.contact { position: relative; overflow: clip; }

.contact__bloom {
    position: absolute;
    inset: 0 -10% -20% -10%;
    z-index: -1;
    background:
        radial-gradient(38% 50% at 18% 80%, var(--glow), transparent 70%),
        radial-gradient(40% 50% at 88% 30%, color-mix(in srgb, var(--accent-warm) 18%, transparent), transparent 72%);
    filter: blur(40px);
}

.contact__grid {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
    gap: clamp(2rem, 5vw, 4rem);
    align-items: start;
}

.contact__intro {
    margin: 0 0 2rem;
    font-size: var(--fs-lead);
    color: var(--ink-muted);
    max-width: 36ch;
}

.contact__email {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.8rem 1.2rem;
    padding-bottom: 0.8rem;
    border-bottom: 2px solid var(--accent);
}
.contact__email-link {
    font-family: var(--font-display);
    font-size: clamp(1.4rem, 3.6vw, 2.4rem);
    letter-spacing: -0.01em;
    word-break: break-word;
    transition: color 0.2s var(--ease);
}
@media (hover: hover) {
    .contact__email-link:hover { color: var(--accent); }
}
.contact__copy {
    background: transparent;
    border: 1px solid var(--hairline-strong);
    border-radius: 2px;
    padding: 0.45rem 0.8rem;
    color: var(--ink-muted);
    cursor: pointer;
    font-family: var(--font-mono);
    font-size: var(--fs-mono);
    text-transform: uppercase;
    letter-spacing: 0.14em;
    transition: color 0.2s var(--ease), border-color 0.2s var(--ease);
}
@media (hover: hover) {
    .contact__copy:hover { color: var(--accent); border-color: var(--accent); }
}

.contact__social {
    list-style: none;
    margin: 0;
    padding: 0;
}
.contact__social-link {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: baseline;
    gap: 0.2rem 1rem;
    padding: 1rem 0;
    border-top: 1px solid var(--hairline);
}
.contact__social:last-child .contact__social-link { border-bottom: 1px solid var(--hairline); }
.contact__social-label {
    font-family: var(--font-mono);
    font-size: var(--fs-mono);
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--ink-muted);
}
.contact__social-handle {
    grid-column: 1;
    font-size: var(--fs-small);
    color: var(--ink);
    transition: color 0.2s var(--ease);
}
.contact__social-arrow {
    grid-row: 1 / span 2;
    grid-column: 2;
    align-self: center;
    color: var(--accent);
    transition: transform 0.2s var(--ease);
}
@media (hover: hover) {
    .contact__social-link:hover .contact__social-handle { color: var(--accent); }
    .contact__social-link:hover .contact__social-arrow { transform: translate(3px, -3px); }
}

@media (max-width: 760px) {
    .contact__grid { grid-template-columns: 1fr; }
}
</style>
