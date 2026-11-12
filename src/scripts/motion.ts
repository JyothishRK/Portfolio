import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const MOTION_OK = '(prefers-reduced-motion: no-preference)';
export const WIDE_MOTION = '(min-width: 768px) and (prefers-reduced-motion: no-preference)';
export const STACKED = '(max-width: 767px), (prefers-reduced-motion: reduce)';

/** Counts every `[data-count]` number inside `root` up from zero to its final value. */
export function countUp(root: Element): void {
  root.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const end = Number(el.dataset.count);
    const decimals = Number(el.dataset.decimals ?? 0);
    const prefix = el.dataset.prefix ?? '';
    const suffix = el.dataset.suffix ?? '';
    const state = { value: 0 };
    gsap.to(state, {
      value: end,
      duration: 1.3,
      ease: 'power2.out',
      onUpdate: () => {
        el.textContent = `${prefix}${state.value.toFixed(decimals)}${suffix}`;
      },
    });
  });
}

export { gsap, ScrollTrigger };
