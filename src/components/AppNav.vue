<template>
    <header
        class="mast"
        :class="{ 'mast--condensed': condensed }"
    >
        <div class="mast__inner u-pad-x">
            <a
                class="mast__brand"
                href="#home"
                @click="closeDrawer"
            >
                <span class="mast__name">Emerson Carvalho</span>
                <span class="mast__colophon">Software Engineer — RN, BR</span>
            </a>

            <nav
                class="mast__nav"
                aria-label="Sections"
            >
                <ul class="mast__links">
                    <li
                        v-for="link in links"
                        :key="link.id"
                    >
                        <a
                            class="mast__link"
                            :class="{ 'is-active': activeId === link.id }"
                            :href="link.href"
                            :aria-current="activeId === link.id ? 'true' : undefined"
                        >
                            <span class="mast__link-num">{{ link.num }}</span>
                            <span class="mast__link-label">{{ link.label }}</span>
                            <brand-caret v-if="activeId === link.id" />
                        </a>
                    </li>
                </ul>
            </nav>

            <div class="mast__actions">
                <theme-toggle />
                <button
                    ref="menuBtn"
                    class="mast__menu"
                    type="button"
                    :aria-expanded="drawerOpen"
                    :aria-label="drawerOpen ? 'Close contents' : 'Open contents'"
                    @click="drawerOpen = !drawerOpen"
                >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </button>
            </div>
        </div>

        <transition name="drawer">
            <div
                v-if="drawerOpen"
                class="drawer"
            >
                <button
                    class="drawer__scrim"
                    type="button"
                    aria-label="Close contents"
                    @click="closeDrawer"
                />
                <nav
                    ref="panel"
                    class="drawer__panel"
                    aria-label="Contents"
                    @keydown="onPanelKeydown"
                >
                    <p class="drawer__head">
                        Contents
                    </p>
                    <a
                        v-for="link in links"
                        :key="link.id"
                        class="drawer__link"
                        :href="link.href"
                        @click="closeDrawer"
                    >
                        <span class="drawer__num">{{ link.num }}</span>
                        <span>{{ link.label }}</span>
                    </a>
                </nav>
            </div>
        </transition>
    </header>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue';
import BrandCaret from './BrandCaret.vue';
import ThemeToggle from './ThemeToggle.vue';

const links = [
    { num: '01', id: 'about', href: '#about', label: 'About' },
    { num: '02', id: 'work', href: '#work', label: 'Work' },
    { num: '03', id: 'experience', href: '#experience', label: 'Experience' },
    { num: '04', id: 'skills', href: '#skills', label: 'Skills' },
    { num: '05', id: 'algorithms', href: '#algorithms', label: 'Algorithms' },
    { num: '06', id: 'contact', href: '#contact', label: 'Contact' },
];

const spyIds = ['home', 'about', 'work', 'experience', 'skills', 'algorithms', 'contact'];
const activeId = ref('home');
const drawerOpen = ref(false);
const condensed = computed(() => activeId.value !== 'home');

const menuBtn = ref(null);
const panel = ref(null);

let observer;
const closeDrawer = () => { drawerOpen.value = false; };
const onKeydown = (e) => { if (e.key === 'Escape') closeDrawer(); };

const focusablesInPanel = () =>
    (panel.value ? panel.value.querySelectorAll('a[href], button') : []);

// Trap Tab within the open drawer.
const onPanelKeydown = (e) => {
    if (e.key !== 'Tab') return;
    const f = focusablesInPanel();
    if (!f.length) return;
    const first = f[0];
    const last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
    }
};

// Move focus into the drawer on open; restore it to the trigger on close.
watch(drawerOpen, async (open) => {
    if (open) {
        await nextTick();
        const f = focusablesInPanel();
        if (f.length) f[0].focus();
    } else if (menuBtn.value) {
        menuBtn.value.focus();
    }
});

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) activeId.value = entry.target.id;
            });
        },
        { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    spyIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });
    window.addEventListener('keydown', onKeydown);
});

onUnmounted(() => {
    if (observer) observer.disconnect();
    window.removeEventListener('keydown', onKeydown);
});
</script>

<style scoped>
.mast {
    position: fixed;
    inset: 0 0 auto 0;
    z-index: 60;
    height: var(--masthead-h);
    background: color-mix(in srgb, var(--bg-stock) 86%, transparent);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--hairline);
    transition: height 0.3s var(--ease), background-color 0.48s var(--ease);
}

.mast__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    height: 100%;
}

.mast__brand {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    line-height: 1;
}

.mast__name {
    font-family: var(--font-display);
    font-size: 1.12rem;
    font-weight: 560;
    letter-spacing: 0.01em;
    font-variant-caps: small-caps;
    transition: font-size 0.3s var(--ease);
}

.mast--condensed .mast__name { font-size: 1rem; }

.mast__colophon {
    font-family: var(--font-mono);
    font-size: 0.625rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--ink-muted);
}

.mast__links {
    display: flex;
    align-items: center;
    gap: clamp(1rem, 2.2vw, 2.2rem);
    list-style: none;
    margin: 0;
    padding: 0;
}

.mast__link {
    position: relative;
    display: inline-flex;
    align-items: baseline;
    gap: 0.5ch;
    padding: 0.35rem 0;
    font-family: var(--font-mono);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--ink-muted);
    transition: color 0.2s var(--ease);
}

.mast__link-num { color: var(--ink-faint); }

.mast__link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 1px;
    background: var(--accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.26s var(--ease);
}

@media (hover: hover) {
    .mast__link:hover { color: var(--ink); }
    .mast__link:hover::after { transform: scaleX(1); }
}

.mast__link.is-active {
    color: var(--ink);
}
.mast__link.is-active .mast__link-num { color: var(--accent); }
.mast__link.is-active::after { transform: scaleX(1); }

.mast__actions {
    display: flex;
    align-items: center;
    gap: 0.9rem;
}

.mast__menu {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 2.25rem;
    height: 2.25rem;
    padding: 0;
    background: transparent;
    border: 1px solid var(--hairline);
    border-radius: 2px;
    cursor: pointer;
}
.mast__menu span {
    display: block;
    width: 1.1rem;
    height: 1.5px;
    margin-inline: auto;
    background: var(--ink);
}

/* mobile drawer */
.drawer { position: fixed; inset: 0; z-index: 70; }
.drawer__scrim {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
    background: color-mix(in srgb, var(--bg-press) 70%, transparent);
    backdrop-filter: blur(3px);
    cursor: pointer;
}
.drawer__panel {
    position: absolute;
    inset: 0 0 0 auto;
    width: min(78vw, 22rem);
    height: 100%;
    padding: calc(var(--masthead-h) + 1.5rem) 2rem 2rem;
    background: var(--bg-stock);
    border-left: 1px solid var(--hairline);
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}
.drawer__head {
    margin: 0 0 1.25rem;
    font-family: var(--font-mono);
    font-size: var(--fs-mono);
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--ink-muted);
}
.drawer__link {
    display: flex;
    align-items: baseline;
    gap: 0.8ch;
    padding: 0.85rem 0;
    border-bottom: 1px solid var(--hairline);
    font-family: var(--font-display);
    font-size: 1.4rem;
}
.drawer__num {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--accent);
}

.drawer-enter-active,
.drawer-leave-active { transition: opacity 0.25s var(--ease); }
.drawer-enter-active .drawer__panel,
.drawer-leave-active .drawer__panel { transition: transform 0.32s var(--ease); }
.drawer-enter-from,
.drawer-leave-to { opacity: 0; }
.drawer-enter-from .drawer__panel,
.drawer-leave-to .drawer__panel { transform: translateX(100%); }

@media (max-width: 880px) {
    .mast__nav { display: none; }
    .mast__menu { display: flex; }
}
</style>
