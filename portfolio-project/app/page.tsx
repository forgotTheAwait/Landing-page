"use client";

import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";
import { animatePages } from "@/lib/animations/pages";

export default function Home() {
  useEffect(() => {
    animatePages();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <CursorGlow />
      <Navbar />

      <div id="home" className="page">
        <Hero />
      </div>

      <div className="page">
        <Projects />
      </div>

      <div className="page">
        <About />
      </div>

      <div className="page">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}