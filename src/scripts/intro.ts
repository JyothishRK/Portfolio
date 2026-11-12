import { gsap, MOTION_OK } from './motion';

// How long each greeting after the first stays on screen, in seconds.
const WORD_TIME = 0.17;

function play(panel: HTMLElement, onLift: () => void): void {
  const word = panel.querySelector<HTMLElement>('[data-intro-word]');
  const curve = panel.querySelector<HTMLElement>('[data-intro-curve]');
  const greetings = (panel.dataset.greetings ?? '').split('|').filter(Boolean);
  const root = document.documentElement;
  root.classList.add('intro-running');

  const tl = gsap.timeline({
    onComplete: () => {
      root.classList.remove('intro-running');
      panel.remove();
    },
  });

  if (word) {
    tl.from(word.parentElement, { opacity: 0, y: 12, duration: 0.5, ease: 'power2.out' }, 0.1);
    greetings.slice(1).forEach((text, i) => {
      tl.call(() => void (word.textContent = text), undefined, 0.75 + i * WORD_TIME);
    });
  }

  const lift = 0.75 + Math.max(greetings.length - 1, 0) * WORD_TIME + 0.25;
  tl.call(onLift, undefined, lift)
    .to(panel, { yPercent: -100, duration: 0.9, ease: 'power3.inOut' }, lift)
    // The lip flattens as the panel leaves, which reads as the edge straightening out.
    .to(curve, { scaleY: 0, duration: 0.9, ease: 'power2.in' }, lift);
}

/** Resolves when the intro screen starts to lift, or at once when there is no intro. */
export const introLifting = new Promise<void>((resolve) => {
  const panel = document.querySelector<HTMLElement>('[data-intro]');
  if (!panel || !window.matchMedia(MOTION_OK).matches) {
    resolve();
    return;
  }
  play(panel, resolve);
});
