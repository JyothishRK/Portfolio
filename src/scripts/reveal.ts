import { gsap, ScrollTrigger, MOTION_OK, countUp } from './motion';

// Content is visible by default; this only adds entrances when motion is welcome.
gsap.matchMedia().add(MOTION_OK, () => {
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((group) => {
    const items = group.dataset.reveal === 'children' ? Array.from(group.children) : [group];
    gsap.from(items, {
      y: 44,
      opacity: 0,
      duration: 1,
      stagger: 0.09,
      ease: 'power3.out',
      scrollTrigger: { trigger: group, start: 'top 82%', once: true },
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-count-group]').forEach((group) => {
    ScrollTrigger.create({
      trigger: group,
      start: 'top 85%',
      once: true,
      onEnter: () => countUp(group),
    });
  });
});
