"use client";
import { motion, useInView } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { useRef } from "react";

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Backend Developer",
    company: "SM Technology",
    location: "Bangladesh",
    duration: "July 2025 – Present",
    type: "Full-time",
    description:
      "Developing and maintaining scalable backend systems with real-time features and secure payment integrations.",
    responsibilities: [
      "Implemented real-time features using WebSocket for live updates, notifications, and user interactions.",
      "Integrated Stripe payment gateway for secure payment processing, subscriptions, and transaction handling.",
      "Designed and managed database schemas using Prisma ORM with MongoDB.",
      "Implemented JWT-based authentication and role-based authorization for secure access control.",
      "Collaborated with frontend developers to ensure seamless API integration and performance optimization.",
      "Developed and maintained scalable backend APIs using Node.js, Express.js, and TypeScript.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Prisma",
      "WebSocket",
      "Stripe",
      "JWT",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 40, opacity: 0, rotateX: 15 },
    show: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      className="relative pb-10 overflow-hidden"
      id="experience"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex flex-col items-center">
            <span className="text-sm font-medium text-primaryColor mb-3 tracking-widest">
              PROFESSIONAL JOURNEY
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryColor to-primaryColor/70">
                Work
              </span>{" "}
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primaryColor to-transparent mt-6 rounded-full"></div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="relative container mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-primaryColor/30 to-transparent hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
          </div>

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative group"
                whileHover={{ scale: 1.01 }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-background border-4 border-primaryColor/80 items-center justify-center z-10 shadow-lg">
                  <div
                    className={`w-2 h-2 rounded-full bg-primaryColor ${
                      index === 0 ? "animate-pulse" : ""
                    }`}
                  ></div>
                </div>

                <div className="flex flex-col md:flex-row">
                  {/* Date (mobile) */}
                  <div className="md:hidden mb-4 flex items-center text-sm font-medium text-muted-foreground">
                    <FaCalendarAlt className="mr-2 text-primaryColor" />
                    {exp.duration}
                  </div>

                  {/* Card */}
                  <div
                    className={`relative bg-background rounded-3xl border border-border/30 shadow-lg hover:shadow-xl transition-all duration-500 p-8 md:p-10 w-full
                      ${
                        index % 2 === 0
                          ? "md:mr-auto md:pr-20 md:pl-14"
                          : "md:ml-auto md:pl-20 md:pr-14"
                      }
                      overflow-hidden group-hover:border-primaryColor/40`}
                  >
                    {/* Card glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primaryColor/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-8">
                      {/* Icon */}
                      <div className="w-20 h-20 rounded-2xl bg-primaryColor/10 flex items-center justify-center shrink-0 border border-primaryColor/10 shadow-inner">
                        <FaBriefcase className="text-3xl text-primaryColor" />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                              {exp.title}
                            </h3>
                            <p className="text-lg md:text-xl text-primaryColor font-medium mt-1">
                              {exp.company}
                            </p>
                          </div>

                          {/* Date (desktop) */}
                          <div className="hidden md:flex items-center text-sm font-medium text-muted-foreground bg-muted px-4 py-2 rounded-full">
                            <FaCalendarAlt className="mr-2 text-primaryColor" />
                            {exp.duration}
                          </div>
                        </div>

                        <div className="flex items-center mt-3 text-muted-foreground">
                          <IoLocationSharp className="mr-2 text-primaryColor" />
                          <span>{exp.location}</span>
                          <span className="mx-3">·</span>
                          <span className="text-primaryColor/80 text-sm font-medium">
                            {exp.type}
                          </span>
                        </div>

                        <p className="mt-4 text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Responsibilities */}
                        <ul className="mt-5 space-y-2">
                          {exp.responsibilities.map((resp, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-muted-foreground text-sm"
                            >
                              <span className="mt-1.5 w-2 h-2 rounded-full bg-primaryColor shrink-0"></span>
                              {resp}
                            </li>
                          ))}
                        </ul>

                        {/* Tech stack */}
                        <div className="mt-6 flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-primaryColor/10 text-primaryColor border border-primaryColor/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
