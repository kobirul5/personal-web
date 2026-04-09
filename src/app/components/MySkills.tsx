"use client";

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
import { motion } from "framer-motion";
import Heading from "@/components/Heading";

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
}

export default function MySkills() {
  const skills: Skill[] = [
    // Front-End
    {
      name: "React.js",
      icon: <FaReact className="text-blue-500" />,
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-white" />,
      category: "Frontend",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500" />,
      category: "Frontend",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-400" />,
      category: "Backend",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500" />,
      category: "Backend",
    },
    {
      name: "Redux Toolkit",
      icon: <SiRedux className="text-purple-500" />,
      category: "Frontend",
    },
    {
      name: "RTK Query",
      icon: <SiReduxsaga className="text-purple-500" />,
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-blue-400" />,
      category: "Frontend",
    },
    // Back-End
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-600" />,
      category: "Backend",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-400" />,
      category: "Backend",
    },
    {
      name: "Mongoose",
      icon: <SiMongoose className="text-red-500" />,
      category: "Backend",
    },
    {
      name: "Prisma ORM",
      icon: <SiPrisma className="text-teal-400" />,
      category: "Backend",
    },
    {
      name: "JWT",
      icon: <SiJsonwebtokens className="text-yellow-400" />,
      category: "Backend",
    },
    {
      name: "WebSocket",
      icon: <TbWebhook className="text-orange-400" />,
      category: "Backend",
    },
    // Deployment
    {
      name: "Nginx",
      icon: <SiNginx className="text-green-400" />,
      category: "Deployment",
    },
    {
      name: "PM2",
      icon: <FaServer className="text-gray-400" />,
      category: "Deployment",
    },
    {
      name: "GitHub",
      icon: <SiGithub className="text-white" />,
      category: "Tools",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="">
        <Heading subTitle="Skills" title1="My" title2="Skills"></Heading>
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-4 bg-[#27272c]  flex flex-col items-center gap-2"
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="text-textColor font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
