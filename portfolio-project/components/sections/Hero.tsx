export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <div className="mx-auto w-[90%] max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Computer Science Student
        </p>

        <h1 className="max-w-4xl text-6xl font-bold leading-none md:text-8xl">
          Building things
          <br />
          until they feel right.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          I'm Alireza. I build modern web experiences with a focus on clean
          design, performance, and attention to detail.
        </p>

        <div className="mt-12 flex gap-4">
          <button className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-105">
            View Projects
          </button>

          <button className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-zinc-500">
            GitHub
          </button>
        </div>
      </div>
    </section>
  );
}