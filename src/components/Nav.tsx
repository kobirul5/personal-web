"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, MotionConfig } from "motion/react";

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

const Nav = () => {
  const pathName = usePathname();

  return (
    <MotionConfig transition={{ type: "spring", stiffness: 400, damping: 30 }}>
      <ul className="flex items-center gap-1">
        {links.map((link, idx) => {
          const isActive = link.pathName === pathName;
          return (
            <li key={idx}>
              <Link
                href={link.pathName}
                className={`relative inline-flex items-center px-4 py-2 rounded-full text-sm font-medium capitalize group
                  ${
                    isActive
                      ? "text-primaryColor"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
              >
                {/* Sliding pill — layoutId makes it glide smoothly between links */}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-primaryColor/10 border border-primaryColor/25"
                  />
                )}

                {/* Hover background */}
                {!isActive && (
                  <span className="absolute inset-0 rounded-full bg-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                )}

                {/* Link text */}
                <span className="relative z-10 transition-colors duration-200">
                  {link.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </MotionConfig>
  );
};

export default Nav;