"use client";

import Container from "@/components/ui/container";

const links = [
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "GitHub",
    href: "https://github.com",
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50">
      <Container>
        <nav
          className="
            flex
            items-center
            justify-between
            rounded-full
            border
            border-white/10
            bg-white/5
            px-6
            py-3
            backdrop-blur-xl
          "
        >
          <a
            href="/"
            className="
              text-lg
              font-semibold
              tracking-tight
              text-white
            "
          >
            ALIREZA
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  text-sm
                  text-white/70
                  transition
                  hover:text-white
                "
              >
                {link.name}
              </a>
            ))}
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-white/10
              px-3
              py-1.5
              text-sm
              text-white
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-green-400
                animate-pulse
              "
            />

            Available
          </div>
        </nav>
      </Container>
    </header>
  );
}