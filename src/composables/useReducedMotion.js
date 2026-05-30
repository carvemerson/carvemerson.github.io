import { ref, onMounted, onUnmounted } from 'vue';

// Reactive prefers-reduced-motion gate, consumed by every motion-bearing component.
export function useReducedMotion() {
    const reduced = ref(
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );

    let mq;
    const update = () => { reduced.value = mq.matches; };

    onMounted(() => {
        mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        mq.addEventListener('change', update);
    });
    onUnmounted(() => {
        if (mq) mq.removeEventListener('change', update);
    });

    return reduced;
}
