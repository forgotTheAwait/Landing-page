"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern developer portfolio built with Next.js, Tailwind CSS, and smooth animations.",
      tech: ["Next.js", "TypeScript", "Tailwind"],
    },
    {
      title: "Terminal Game",
      description:
        "A Python terminal game focused on logic, OOP concepts, and clean code structure.",
      tech: ["Python", "OOP"],
    },
    {
      title: "Future Project",
      description:
        "Something new is being built. More details coming soon.",
      tech: ["Coming Soon"],
    },
  ];
    useEffect(() => {
    gsap.fromTo(
        ".project-card",
        {
        y: 80,
        opacity: 0,
        },
        {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
            trigger: "#projects",
            start: "top 90%",
        },
        }
    );
    }, []);


  return (
    <section
    id="projects"
    className="min-h-screen flex items-center py-32"
    >
      <div className="mx-auto w-[90%] max-w-7xl">

        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-zinc-500">
          PROJECTS
        </p>

        <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
          Things I've built.
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.title}
              className="
                project-card
                group
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-purple-500/40
                hover:bg-white/[0.08]
                hover:shadow-[0_20px_80px_rgba(168,85,247,0.15)]
              "
            >

              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      bg-white/10
                      px-3
                      py-1
                      text-sm
                      text-zinc-300
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}