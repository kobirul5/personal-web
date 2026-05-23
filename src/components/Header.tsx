import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 z-20 w-full px-5 border-b border-border/70 bg-background/85 backdrop-blur-2xl">
      <nav className="container mx-auto flex items-center justify-between py-2">
        <div>
          <Link
            href="/"
            className="logo-font cursor-pointer text-xl font-semibold uppercase tracking-[0.5em] text-primaryColor"
          >
            Kobirul
          </Link>
        </div>
        <div className="hidden lg:block">
          <Nav />
        </div>
        <div className="flex items-center justify-center gap-3">
          <ThemeToggle />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
          <div className="flex p-5 lg:hidden">
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  );
}
