import gsap from "gsap";

export function animateHero() {
  const tl = gsap.timeline();

  tl.from(".hero-label", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power4.out",
  })
    .from(
      ".hero-line",
      {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      },
      "-=0.4"
    )
    .from(
      ".hero-description",
      {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power4.out",
      },
      "-=0.5"
    )
    .from(
      ".hero-buttons",
      {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power4.out",
      },
      "-=0.4"
    );
}