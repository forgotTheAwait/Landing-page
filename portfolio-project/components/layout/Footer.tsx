export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex w-[90%] max-w-7xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">

        <p>
          © {new Date().getFullYear()} Alireza. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="#"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="#"
            className="transition hover:text-white"
          >
            Instagram
          </a>

          <a
            href="#"
            className="transition hover:text-white"
          >
            X
          </a>
        </div>

      </div>
    </footer>
  );
}