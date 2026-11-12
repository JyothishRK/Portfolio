import { gsap, ScrollTrigger, MOTION_OK } from './motion';

gsap.matchMedia().add(MOTION_OK, () => {
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  const strip = document.querySelector<HTMLElement>('[data-hero-marquee-inner]');
  if (!hero || !strip) return;

  const entrance = gsap.timeline({ defaults: { ease: 'power3.out' } });
  entrance
    .from('[data-hero-portrait]', { yPercent: 12, opacity: 0, duration: 1.3 }, 0)
    .from('[data-hero-marquee]', { yPercent: 60, opacity: 0, duration: 1.2 }, 0.15)
    .from('[data-hero-pill]', { xPercent: -100, duration: 1 }, 0.5)
    .from('[data-hero-fade]', { opacity: 0, y: 20, duration: 1, stagger: 0.1 }, 0.6);

  // The strip holds four copies, so moving it by half its width loops seamlessly.
  const slide = gsap.to(strip, { xPercent: -50, duration: 26, ease: 'none', repeat: -1 });
  // Start far from zero so the strip can also run backwards when the page scrolls up.
  slide.totalTime(slide.duration() * 200);
  const followScroll = ScrollTrigger.create({
    onUpdate: (self) => {
      gsap.to(slide, { timeScale: self.direction, duration: 0.5, overwrite: true });
    },
  });

  const scrub = { trigger: hero, start: 'top top', end: 'bottom top', scrub: true };
  gsap.to('[data-hero-portrait]', {
    y: () => hero.offsetHeight * 0.12,
    ease: 'none',
    scrollTrigger: scrub,
  });
  gsap.to('[data-hero-marquee]', {
    y: () => -hero.offsetHeight * 0.06,
    ease: 'none',
    scrollTrigger: scrub,
  });

  return () => followScroll.kill();
});
