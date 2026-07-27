"use client";

import { useRef, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaServer,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiMongoose,
  SiReduxsaga,
  SiPrisma,
  SiPostgresql,
  SiJsonwebtokens,
  SiNginx,
  SiGithub,
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
}

const skills: Skill[] = [
  { name: "React.js",      icon: <FaReact />,          category: "Frontend",   color: "#61DAFB" },
  { name: "Next.js",       icon: <SiNextdotjs />,      category: "Frontend",   color: "#e2e8f0" },
  { name: "TypeScript",    icon: <SiTypescript />,     category: "Frontend",   color: "#3178C6" },
  { name: "Redux Toolkit", icon: <SiRedux />,          category: "Frontend",   color: "#764ABC" },
  { name: "RTK Query",     icon: <SiReduxsaga />,      category: "Frontend",   color: "#A78BFA" },
  { name: "Tailwind CSS",  icon: <SiTailwindcss />,    category: "Frontend",   color: "#38BDF8" },
  { name: "Node.js",       icon: <FaNodeJs />,         category: "Backend",    color: "#6DBF4A" },
  { name: "Express.js",    icon: <SiExpress />,        category: "Backend",    color: "#9CA3AF" },
  { name: "MongoDB",       icon: <SiMongodb />,        category: "Backend",    color: "#4DB33D" },
  { name: "Mongoose",      icon: <SiMongoose />,       category: "Backend",    color: "#EF4444" },
  { name: "Prisma ORM",    icon: <SiPrisma />,         category: "Backend",    color: "#2DD4BF" },
  { name: "PostgreSQL",    icon: <SiPostgresql />,     category: "Backend",    color: "#60A5FA" },
  { name: "JWT",           icon: <SiJsonwebtokens />,  category: "Backend",    color: "#FBBF24" },
  { name: "WebSocket",     icon: <TbWebhook />,        category: "Backend",    color: "#FB923C" },
  { name: "Nginx",         icon: <SiNginx />,          category: "Deployment", color: "#4ADE80" },
  { name: "PM2",           icon: <FaServer />,         category: "Deployment", color: "#9CA3AF" },
  { name: "VPS",           icon: <BsServer />,         category: "Deployment", color: "#F472B6" },
  { name: "GitHub",        icon: <SiGithub />,         category: "Tools",      color: "#E2E8F0" },
];

const INNER_SKILLS = skills.slice(0, 9);
const OUTER_SKILLS = skills.slice(9);

function OrbitRing({
  items,
  radius,
  tiltDeg,
  speed,
  iconSize = 36,
  cardSize = 76,
  reverse = false,
}: {
  items: Skill[];
  radius: number;
  tiltDeg: number;
  speed: number;
  iconSize?: number;
  cardSize?: number;
  reverse?: boolean;
}) {
  const angleRef = useRef(0);
  const [angles, setAngles] = useState<number[]>(
    items.map((_, i) => (360 / items.length) * i)
  );

  useAnimationFrame((_, delta) => {
    const step = (speed * delta) / 1000;
    angleRef.current += reverse ? -step : step;
    setAngles(items.map((_, i) => angleRef.current + (360 / items.length) * i));
  });

  const tiltRad = (tiltDeg * Math.PI) / 180;

  return (
    <>
      {items.map((skill, i) => {
        const rad = (angles[i] * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const zRaw = Math.sin(rad) * radius;

        // tilt: compress y-axis to simulate 3-D perspective
        const y = zRaw * Math.sin(tiltRad);
        const normZ = (zRaw + radius) / (2 * radius); // 0 → back, 1 → front
        const scale  = 0.6 + normZ * 0.55;
        const opacity = 0.3 + normZ * 0.7;
        const zIndex  = Math.round(normZ * 200);

        return (
          <motion.div
            key={skill.name}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: cardSize,
              height: cardSize,
              marginLeft: -cardSize / 2,
              marginTop: -cardSize / 2,
              x,
              y,
              scale,
              opacity,
              zIndex,
            }}
            whileHover={{ scale: scale * 1.3, opacity: 1, zIndex: 300 }}
            className="cursor-pointer"
            title={skill.name}
          >
            <div
              className="w-full h-full rounded-2xl border border-border bg-primary flex flex-col items-center justify-center gap-1 transition-all duration-200 hover:border-white/40"
              style={{ boxShadow: `0 0 20px 4px ${skill.color}40, inset 0 1px 0 rgba(255,255,255,0.08)` }}
            >
              <div
                style={{
                  fontSize: iconSize,
                  color: skill.color,
                  filter: `drop-shadow(0 0 8px ${skill.color}bb)`,
                }}
              >
                {skill.icon}
              </div>
              <span
                className="font-semibold leading-none text-center px-1"
                style={{
                  fontSize: 13,
                  color: skill.color,
                  textShadow: `0 0 6px ${skill.color}99`,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: cardSize - 8,
                }}
              >
                {skill.name}
              </span>
            </div>
          </motion.div>
        );
      })}
    </>
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

      {/* ── Orbit Stage — full viewport width ── */}
      <div
        className="relative mt-2 select-none overflow-hidden"
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          height: 800,
        }}
      >
        {/* ambient radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 38% at 50% 50%, rgba(255,100,33,0.13) 0%, transparent 75%)",
          }}
        />

        {/* SVG dashed orbit rings */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid meet"
        >
          <ellipse cx="600" cy="300" rx="290" ry="105"
            fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray="7 5" />
          <ellipse cx="600" cy="300" rx="460" ry="166"
            fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" strokeDasharray="7 5" />
        </svg>

        {/* 3-D scene */}
        <div className="absolute inset-0" style={{ perspective: 1000 }}>
          <div className="relative w-full h-full " style={{ transformStyle: "preserve-3d" }}>
            {/* Outer ring — 8 skills, slow, forward */}
            <OrbitRing items={OUTER_SKILLS} radius={650} tiltDeg={18} speed={11} iconSize={60} cardSize={140} />
            {/* Inner ring — 9 skills, faster, reverse */}
            <OrbitRing items={INNER_SKILLS} radius={400} tiltDeg={18} speed={19} iconSize={64} cardSize={140} reverse />
          </div>
        </div>

      </div>

      {/* ── Category legend ── */}
      {/* <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
        {(["Frontend", "Backend", "Deployment", "Tools"] as const).map((cat) => {
          const catSkills = skills.filter((s) => s.category === cat);
          return (
            <div key={cat} className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                {cat}
              </span>
              <div className="flex gap-1 flex-wrap">
                {catSkills.map((s) => (
                  <span
                    key={s.name}
                    title={s.name}
                    className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-1"
                    style={{ color: s.color, fontSize: 15 }}
                  >
                    {s.icon}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div> */}
    </motion.section>
  );
}
