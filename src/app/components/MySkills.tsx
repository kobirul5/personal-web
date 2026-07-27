"use client";

import { useRef, useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaServer } from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiNextdotjs, SiTailwindcss,
  SiRedux, SiTypescript, SiMongoose, SiReduxsaga,
  SiPrisma, SiPostgresql, SiJsonwebtokens, SiNginx, SiGithub,
} from "react-icons/si";
import { TbWebhook } from "react-icons/tb";
import { BsServer } from "react-icons/bs";
import { motion, useAnimationFrame } from "framer-motion";
import Heading from "@/components/Heading";

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
  color: string;
  darkColor?: string;
}

const skills: Skill[] = [
  { name: "React.js",      icon: <FaReact />,         category: "Frontend",   color: "#61DAFB" },
  { name: "Next.js",       icon: <SiNextdotjs />,     category: "Frontend",   color: "#1f252e", darkColor: "#ffffff" },
  { name: "TypeScript",    icon: <SiTypescript />,    category: "Frontend",   color: "#3178C6" },
  { name: "Redux Toolkit", icon: <SiRedux />,         category: "Frontend",   color: "#764ABC" },
  { name: "RTK Query",     icon: <SiReduxsaga />,     category: "Frontend",   color: "#A78BFA" },
  { name: "Tailwind CSS",  icon: <SiTailwindcss />,   category: "Frontend",   color: "#38BDF8" },
  { name: "Node.js",       icon: <FaNodeJs />,        category: "Backend",    color: "#6DBF4A" },
  { name: "Express.js",    icon: <SiExpress />,       category: "Backend",    color: "#40444b", darkColor: "#ffffff" },
  { name: "MongoDB",       icon: <SiMongodb />,       category: "Backend",    color: "#4DB33D" },
  { name: "Mongoose",      icon: <SiMongoose />,      category: "Backend",    color: "#EF4444" },
  { name: "Prisma ORM",    icon: <SiPrisma />,        category: "Backend",    color: "#2DD4BF" },
  { name: "PostgreSQL",    icon: <SiPostgresql />,    category: "Backend",    color: "#60A5FA" },
  { name: "JWT",           icon: <SiJsonwebtokens />, category: "Backend",    color: "#FBBF24" },
  { name: "WebSocket",     icon: <TbWebhook />,       category: "Backend",    color: "#FB923C" },
  { name: "Nginx",         icon: <SiNginx />,         category: "Deployment", color: "#4ADE80" },
  { name: "PM2",           icon: <FaServer />,        category: "Deployment", color: "#3d4046", darkColor: "#ffffff" },
  { name: "VPS",           icon: <BsServer />,        category: "Deployment", color: "#F472B6" },
  { name: "GitHub",        icon: <SiGithub />,        category: "Tools",      color: "#0d0d0e", darkColor: "#ffffff" },
];

// ── Carousel config ──────────────────────────────────────────────
const CARD_W       = 180;   // card width  (px)
const CARD_H       = 240;   // card height (px)
const CARD_GAP     = 260;   // horizontal distance between card centres
const ROTATE_Y_PER = 38;    // rotateY degrees per card position from centre
const Z_PER        = 60;    // translateZ reduction per card position
const VISIBLE      = 5;     // cards visible on each side of centre
const SPEED        = 0.0008; // offset units per ms
// ─────────────────────────────────────────────────────────────────

function FanCarousel() {
  const offsetRef = useRef(0);
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const n = skills.length;

  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const pausedRef = useRef(isPaused);
  pausedRef.current = isPaused || isDragging;

  useAnimationFrame((_, delta) => {
    if (pausedRef.current) return;
    offsetRef.current = (offsetRef.current + delta * SPEED) % n;
    // ensure positive offset for modulo arithmetic later
    if (offsetRef.current < 0) offsetRef.current += n;
    setOffset(offsetRef.current);
  });

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartOffset.current = offsetRef.current;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX.current;
    // 1 offset unit = CARD_GAP pixels
    let newOffset = dragStartOffset.current - deltaX / CARD_GAP;
    // Keep it wrapped smoothly around the ring
    newOffset = ((newOffset % n) + n) % n;
    offsetRef.current = newOffset;
    setOffset(newOffset);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    /* perspective container – full viewport width */
    <div
      className={`relative select-none w-full ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => { setIsPaused(false); setIsDragging(false); }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{
        height: CARD_H + 160,
        perspective: 1300,
        perspectiveOrigin: "50% 50%",
        overflow: "hidden",
      }}
    >
      {/* subtle centre glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 70% at 50% 60%, rgba(255,100,33,0.12) 0%, transparent 70%)",
        }}
      />

      {/* 3-D stage */}
      <div
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d" }}
      >
        {skills.map((skill, i) => {
          // relative position from the current centre card
          let rel = ((i - offset) % n + n) % n;
          if (rel > n / 2) rel -= n;           // range: -n/2 … +n/2

          if (Math.abs(rel) > VISIBLE + 0.8) return null;

          const x         = rel * CARD_GAP;
          const rotateY   = -rel * ROTATE_Y_PER;
          const tz        = -Math.abs(rel) * Z_PER;
          const absRel    = Math.abs(rel);
          const fadeStart = VISIBLE - 0.5;
          const opacity   = absRel < fadeStart
            ? 1 - absRel * 0.14
            : Math.max(0, 1 - (absRel - fadeStart) * 3);
          const zIdx      = Math.round((VISIBLE + 1 - absRel) * 10);
          const activeColor = (isDark && skill.darkColor) ? skill.darkColor : skill.color;

          return (
            <div
              key={skill.name}
              title={skill.name}
              style={{
                position:  "absolute",
                left:      "50%",
                top:       "50%",
                width:     CARD_W,
                height:    CARD_H,
                marginLeft: -CARD_W / 2,
                marginTop:  -CARD_H / 2,
                transform: `translateX(${x}px) translateZ(${tz}px) rotateY(${rotateY}deg)`,
                opacity,
                zIndex:    zIdx,
                willChange: "transform, opacity",
              }}
            >
              {/* Card face */}
              <div
                className="w-full h-full rounded-2xl border border-border bg-primary
                           flex flex-col items-center justify-center gap-3
                           transition-colors duration-200"
                style={{
                  boxShadow: `
                    0 8px 32px rgba(0,0,0,0.35),
                    0 0 0 1px rgba(255,255,255,0.06) inset,
                    0 0 28px 4px ${activeColor}28
                  `,
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    fontSize: 84,
                    color: activeColor,
                    filter: `drop-shadow(0 0 12px ${activeColor}cc)`,
                    lineHeight: 1,
                  }}
                >
                  {skill.icon}
                </div>

                {/* Name */}
                <span
                  className="font-semibold text-center leading-tight px-2"
                  style={{
                    fontSize: 15,
                    color: activeColor,
                    textShadow: `0 0 8px ${activeColor}aa`,
                    maxWidth: CARD_W - 12,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {skill.name}
                </span>

                {/* Category badge */}
                <span
                  className="text-[11px] uppercase tracking-widest font-bold px-3 py-1 rounded-full"
                  style={{
                    background: `${activeColor}18`,
                    border:     `1px solid ${activeColor}44`,
                    color:      activeColor,
                  }}
                >
                  {skill.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function MySkills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full"
    >
      <div className="container mx-auto">
        <Heading subTitle="Skills" title1="My" title2="Skills" />
      </div>

      <FanCarousel />
    </motion.section>
  );
}
