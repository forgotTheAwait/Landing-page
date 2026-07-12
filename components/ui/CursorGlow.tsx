"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorGlow() {
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      gsap.to(glow.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={glow}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[100]
        h-64
        w-64
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-purple-500/10
        blur-3xl
      "
    />
  );
}