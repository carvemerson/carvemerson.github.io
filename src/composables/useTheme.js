import { ref } from 'vue';

const STORAGE_KEY = 'folio-theme';

// Module-level singleton so every consumer shares one source of truth.
// The initial value is whatever the pre-paint inline script already set.
const initial =
    (typeof document !== 'undefined' &&
        document.documentElement.getAttribute('data-theme')) ||
    'dark';

const theme = ref(initial);

function syncMetaThemeColor() {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;
    const press = getComputedStyle(document.documentElement)
        .getPropertyValue('--bg-press')
        .trim();
    if (press) meta.setAttribute('content', press);
}

function apply(next) {
    theme.value = next;
    document.documentElement.setAttribute('data-theme', next);
    document.documentElement.style.colorScheme = next;
    try {
        localStorage.setItem(STORAGE_KEY, next);
    } catch { /* private mode — non-fatal */ }
    // wait a frame so the new tokens are committed before sampling
    requestAnimationFrame(syncMetaThemeColor);
}

export function useTheme() {
    const toggle = () => {
        const next = theme.value === 'dark' ? 'light' : 'dark';
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // The "stock flip": a View-Transitions wipe swaps the stock underneath
        // while the folio rule (named view-transition) stays constant.
        // Never block the toggle on the API.
        if (!reduced && typeof document.startViewTransition === 'function') {
            document.startViewTransition(() => apply(next));
        } else {
            apply(next);
        }
    };

    return { theme, toggle };
}
