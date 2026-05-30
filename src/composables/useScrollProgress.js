import { ref, onMounted, onUnmounted } from 'vue';

// rAF-throttled scroll progress (0..1). This is intentionally the ONLY
// scroll-bound work on the page — the folio rule fill reads from it.
export function useScrollProgress() {
    const progress = ref(0);
    let ticking = false;

    const compute = () => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        progress.value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        ticking = false;
    };

    const onScroll = () => {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(compute);
        }
    };

    onMounted(() => {
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        compute();
    });
    onUnmounted(() => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
    });

    return progress;
}
