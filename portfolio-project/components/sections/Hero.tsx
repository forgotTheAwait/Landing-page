export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <div className="mx-auto w-[90%] max-w-7xl">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-zinc-500">
          COMPUTER SCIENCE STUDENT
        </p>

        <h1 className="max-w-5xl text-6xl font-black leading-[0.9] tracking-tight md:text-8xl xl:text-9xl">
          Building things
          <br />
          <span className="text-gradient">until they feel right.</span>
        </h1>

        <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
          I'm Alireza — a Computer Science student focused on creating modern,
          fast, and thoughtfully designed web experiences.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <button className="rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:scale-105">
            View Projects
          </button>

          <button className="rounded-full border border-zinc-700 px-7 py-3 font-semibold transition hover:border-white">
            GitHub
          </button>
        </div>
      </div>
    </section>
  );
}