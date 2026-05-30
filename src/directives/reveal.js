// v-reveal — fire-once IntersectionObserver reveal.
//   v-reveal            → reveal on enter
//   v-reveal="120"      → stagger delay in ms
// Content is visible by default if JS/IO is unavailable (progressive
// enhancement): we only ADD the hidden state once we're sure we can reveal it.

const prefersReduced = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const reveal = (el) => el.classList.add('is-visible');

export const revealDirective = {
    mounted(el, binding) {
        if (typeof binding.value === 'number') {
            el.style.setProperty('--reveal-delay', `${binding.value}ms`);
        }

        if (prefersReduced() || !('IntersectionObserver' in window)) {
            reveal(el);
            return;
        }

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        reveal(entry.target);
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
        );

        observer.observe(el);
        el._revealObserver = observer;
    },

    unmounted(el) {
        if (el._revealObserver) {
            el._revealObserver.disconnect();
            delete el._revealObserver;
        }
    },
};
