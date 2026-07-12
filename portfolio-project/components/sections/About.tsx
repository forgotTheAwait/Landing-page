export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-32"
    >
      <div className="mx-auto w-[90%] max-w-7xl">

        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-zinc-500">
          ABOUT
        </p>

        <h2 className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
          Building with curiosity and attention to detail.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          I'm Alireza, a Computer Science student who enjoys creating modern
          interfaces, experimenting with technology, and turning ideas into
          polished digital experiences.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <h3 className="text-xl font-semibold">
              Frontend
            </h3>
            <p className="mt-3 text-zinc-400">
              Next.js, React, TypeScript, Tailwind CSS
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <h3 className="text-xl font-semibold">
              Backend
            </h3>
            <p className="mt-3 text-zinc-400">
              Python, APIs, databases, system design
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <h3 className="text-xl font-semibold">
              Philosophy
            </h3>
            <p className="mt-3 text-zinc-400">
              Clean code, good design, constant improvement
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}