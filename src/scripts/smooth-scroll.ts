import Lenis from 'lenis';
import { gsap, ScrollTrigger, MOTION_OK } from './motion';

gsap.matchMedia().add(MOTION_OK, () => {
  const lenis = new Lenis({ lerp: 0.09, anchors: true });
  lenis.on('scroll', ScrollTrigger.update);
  const tick = (time: number): void => lenis.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(tick);
    lenis.destroy();
  };
});

// Pin distances are measured in pixels, and late-loading fonts change them.
void document.fonts.ready.then(() => ScrollTrigger.refresh());
