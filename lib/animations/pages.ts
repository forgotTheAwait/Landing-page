import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animatePages() {
  const pages = gsap.utils.toArray<HTMLElement>(".page");

  pages.forEach((page, index) => {
    if (index === pages.length - 1) return;

    gsap.to(page, {
      scale: 0.94,
      y: -60,
      opacity: 0.35,
      ease: "none",
      scrollTrigger: {
        trigger: page,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });
}