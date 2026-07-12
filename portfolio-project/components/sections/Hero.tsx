"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { animateHero } from "@/lib/animations/hero";

export default function Hero() {
  useEffect(() => {
    animateHero();

    const glow = gsap.to("#hero-glow", {
      x: 150,
      y: 80,
      scale: 1.15,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      glow.kill();
    };
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-visible pt-24">

      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          id="hero-glow"
          className="absolute left-1/2 top-[-200px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-500/30 blur-[140px]"
        />
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">

        <p className="hero-label mb-6 text-sm font-medium uppercase tracking-[0.35em] text-zinc-500">
          COMPUTER SCIENCE STUDENT
        </p>

        <h1 className="hero-title max-w-5xl text-7xl font-black leading-[1.2] tracking-[-0.03em] md:text-8xl xl:text-[9rem]">
          <span className="hero-line block pb-3">
            Building things
          </span>

          <span className="hero-line block text-gradient">
            until they feel right.
          </span>
        </h1>

        <p className="hero-description mt-10 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
          I'm Alireza — a Computer Science student focused on creating modern,
          fast, and thoughtfully designed web experiences.
        </p>

        <div className="hero-buttons mt-12 flex flex-wrap gap-4">

          <button className="rounded-full bg-white px-7 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]">
            View Projects
          </button>

          <button className="rounded-full border border-zinc-700 px-7 py-3 font-semibold transition-all duration-300 hover:border-white hover:bg-white/5">
            GitHub
          </button>

        </div>

      </div>
    </section>
  );
}