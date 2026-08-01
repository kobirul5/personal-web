"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "py-0 bg-background/80 backdrop-blur-2xl shadow-lg border-b border-border/40"
          : "py-2 bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 xl:px-0 py-3">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Kobirul Islam - Home"
          className="group relative logo-font cursor-pointer text-lg font-semibold uppercase tracking-[0.4em] text-primaryColor"
        >
          Kobirul
          <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-primaryColor transition-all duration-300 group-hover:w-full rounded-full" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/contact">
            <Button className="relative overflow-hidden rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,100,33,0.4)]">
              Hire Me
            </Button>
          </Link>
          <div className="flex lg:hidden">
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  );
}
