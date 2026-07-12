import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animatePages() {
  const pages = gsap.utils.toArray<HTMLElement>(".page");

  pages.forEach((page, index) => {
    if (index === pages.length - 1) return;

    gsap.to(page, {
      scale: 0.92,
      y: -80,
      opacity: 0,
      filter: "blur(10px)",
      scrollTrigger: {
        trigger: page,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  gsap.utils.toArray<HTMLElement>(".page").forEach((page) => {
    gsap.from(page, {
      y: 80,
      opacity: 0,
      filter: "blur(10px)",
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: page,
        start: "top 80%",
      },
    });
  });
}