export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-black py-32"
    >
      <div className="mx-auto w-[90%] max-w-7xl">

        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-zinc-500">
          CONTACT
        </p>

        <h2 className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
          Let's build something together.
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
          Have an idea, project, or opportunity? Feel free to reach out.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="mailto:your@email.com"
            className="rounded-full bg-white px-7 py-3 font-semibold !text-black transition hover:scale-105"
          >
            Email Me
          </a>

          <a
            href="https://github.com"
            className="rounded-full border border-zinc-700 px-7 py-3 font-semibold transition hover:border-white"
          >
            <span className="inline-flex items-center gap-1">
              GitHub
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </span>
          </a>

        </div>

        <div className="mt-8 flex flex-wrap gap-4">

    <a
        href="https://instagram.com/alireza.codes"
        className="rounded-full border border-zinc-700 px-7 py-3 font-semibold transition hover:border-white hover:bg-white/10"
    >
            <span className="inline-flex items-center gap-1">
            Instagram
            <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
            </svg>
            </span>
    </a>

    <a
        href="https://tiktok.com/@alireza.codes"
        className="rounded-full border border-zinc-700 px-7 py-3 font-semibold transition hover:border-white hover:bg-white/10"
    >
            <span className="inline-flex items-center gap-1">
            TikTok
            <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
            </svg>
            </span>
    </a>

    <a
        href="https://x.com/AkbariCodes"
        className="rounded-full border border-zinc-700 px-7 py-3 font-semibold transition hover:border-white hover:bg-white/10"
    >
            <span className="inline-flex items-center gap-1">
            X
            <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
            </svg>
            </span>
    </a>

    </div>
      </div>
    </section>
  );
}