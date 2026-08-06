"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  pathName: string;
}

const links: NavLink[] = [
  { name: "Home", pathName: "/" },
  { name: "About", pathName: "/about" },
  { name: "Projects", pathName: "/projects" },
  { name: "Contact me", pathName: "/contact" },
];

const MobileNav = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="flex items-center justify-center w-10 h-10 rounded-full border border-border/60 bg-background/60 backdrop-blur-sm transition-all hover:border-primaryColor/50 hover:text-primaryColor"
        aria-label="Open navigation menu"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </SheetTrigger>

      <SheetContent side="right" className="w-70 p-0 border-l border-border/50">
        <div className="flex flex-col h-full bg-background/95 backdrop-blur-2xl">
          {/* Header */}
          <div className="flex items-center justify-center py-12 px-6 border-b border-border/30">
            <span className="logo-font text-xl font-semibold uppercase tracking-[0.4em] text-primaryColor">
              Kobirul
            </span>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col flex-1 px-6 py-10 gap-2">
            {links.map((link, idx) => {
              const isActive = link.pathName === pathName;
              return (
                <Link
                  key={idx}
                  href={link.pathName}
                  onClick={() => setOpen(false)}
                  className={`relative flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium capitalize transition-all duration-200 group
                    ${
                      isActive
                        ? "text-primaryColor bg-primaryColor/10 border border-primaryColor/20"
                        : "text-foreground/70 hover:text-foreground hover:bg-muted"
                    }`}
                >
                  {/* Active indicator bar */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 rounded-r-full bg-primaryColor" />
                  )}

                  {/* Index number */}
                  <span
                    className={`text-xs font-mono ${
                      isActive ? "text-primaryColor" : "text-muted-foreground"
                    }`}
                  >
                    0{idx + 1}
                  </span>

                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="px-6 py-8 border-t border-border/30">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-full py-3 rounded-xl bg-primaryColor text-white text-sm font-semibold tracking-wide transition-all hover:bg-primaryColor/90 hover:shadow-[0_0_20px_rgba(255,100,33,0.4)]"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;