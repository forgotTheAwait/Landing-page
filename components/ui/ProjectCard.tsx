"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string[];
};

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(0, {
    stiffness: 220,
    damping: 22,
  });

  const rotateY = useSpring(0, {
    stiffness: 220,
    damping: 22,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateXValue = -((y / rect.height) - 0.5) * 14;
    const rotateYValue = ((x / rect.width) - 0.5) * 14;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);

    mouseX.set(x);
    mouseY.set(y);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
      whileHover={{
        y: -10,
        scale: 1.025,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.05]
        p-8
        backdrop-blur-xl
        shadow-[0_20px_70px_rgba(0,0,0,.35)]
        transition-all
        duration-300
        hover:border-purple-500/40
      "
    >
      {/* Purple glow */}

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: mouseX && mouseY
            ? mouseX.on
            : undefined,
        }}
      />

      {/* Shine */}

      <motion.div
        className="absolute inset-0"
        initial={{ x: "-120%" }}
        whileHover={{ x: "120%" }}
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
        style={{
          background:
            "linear-gradient(110deg,transparent 40%,rgba(255,255,255,.12) 50%,transparent 60%)",
        }}
      />

      <div className="relative z-10">

        <h3 className="text-2xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                bg-white/10
                px-3
                py-1
                text-sm
                text-zinc-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
}