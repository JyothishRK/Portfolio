import { gsap } from './motion';

// How far the button follows the cursor, as a share of the cursor's offset from its centre.
const PULL = 0.35;

// Only where there is a real cursor and motion is welcome; touch screens get a plain button.
gsap
  .matchMedia()
  .add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
    const controller = new AbortController();
    const { signal } = controller;

    gsap.utils.toArray<HTMLElement>('[data-magnetic]').forEach((el) => {
      el.addEventListener(
        'mousemove',
        (event) => {
          const box = el.getBoundingClientRect();
          gsap.to(el, {
            x: (event.clientX - box.left - box.width / 2) * PULL,
            y: (event.clientY - box.top - box.height / 2) * PULL,
            duration: 0.4,
          });
        },
        { signal },
      );
      el.addEventListener(
        'mouseleave',
        () => gsap.to(el, { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, 0.35)' }),
        { signal },
      );
    });

    return () => controller.abort();
  });
