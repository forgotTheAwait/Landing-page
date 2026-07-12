"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    gsap.from("header", {
      y: -40,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  return (
    <header className="fixed inset-x-0 top-6 z-50">
      <nav className="mx-auto flex w-[90%] max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 shadow-2xl backdrop-blur-2xl">

        <a
          href="#home"
          className="text-sm font-semibold tracking-[0.2em]"
        >
          ALIREZA
        </a>

        {/* Desktop */}
        <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 flex-col justify-center gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-5 bg-white" />
          <span className="h-0.5 w-5 bg-white" />
        </button>

        <div className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-sm md:flex">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Available
        </div>

      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-4 w-[90%] rounded-3xl border border-white/10 bg-black/80 p-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5 text-zinc-400">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="transition hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}

    </header>
  );
}