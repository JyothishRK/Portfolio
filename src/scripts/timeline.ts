import { gsap, ScrollTrigger, WIDE_MOTION, STACKED, countUp } from './motion';

// Where on the screen a stop switches on, as a share of the viewport width.
const ARRIVE_AT = 0.72;

const route = document.querySelector<HTMLElement>('[data-route]');
const track = document.querySelector<HTMLElement>('[data-route-track]');
const fill = document.querySelector<HTMLElement>('[data-route-fill]');
const stops = gsap.utils.toArray<HTMLElement>('[data-route-stop]');

function arrive(stop: HTMLElement, animate: boolean): void {
  if (stop.classList.contains('on')) return;
  stop.classList.add('on');
  if (animate) countUp(stop);
}

if (route && track && fill) {
  const mm = gsap.matchMedia();

  // Wide screens: the section pins and vertical scrolling moves the stops sideways.
  mm.add(WIDE_MOTION, () => {
    const distance = (): number => track.scrollWidth - window.innerWidth;
    // Keeps the lit line's tip at the same screen position where stops switch on.
    const tip = (scrolled: number): number =>
      Math.min(1, (scrolled + window.innerWidth * ARRIVE_AT) / track.scrollWidth);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: route,
        start: 'top top',
        end: () => `+=${distance()}`,
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    });
    tl.to(track, { x: () => -distance(), ease: 'none' }, 0).fromTo(
      fill,
      { scaleX: () => tip(0) },
      { scaleX: () => tip(distance()), ease: 'none' },
      0,
    );
    tl.eventCallback('onUpdate', () => {
      const line = window.innerWidth * ARRIVE_AT;
      stops.forEach((stop) => {
        if (stop.getBoundingClientRect().left < line) arrive(stop, true);
      });
    });

    return () => gsap.set([track, fill], { clearProps: 'all' });
  });

  // Phones and reduced motion: a plain vertical list; numbers only count when motion is welcome.
  mm.add(STACKED, () => {
    const animate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    stops.forEach((stop) => {
      ScrollTrigger.create({
        trigger: stop,
        start: 'top 80%',
        once: true,
        onEnter: () => arrive(stop, animate),
      });
    });
  });
}
