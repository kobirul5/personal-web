"use client";

import { motion, useInView } from "framer-motion";
import { 
  FaCalendarAlt, 
  FaAward, 
  FaSchool, 
  FaBookOpen,
  FaBriefcaseMedical
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { useRef } from "react";

interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const educations: Education[] = [
    {
      degree: "BA/BSS",
      institution: "Bangladesh Open University",
      location: "Sirajganj Govt. College, Sirajganj, Bangladesh",
      duration: "2025 - Present",
      grade: "Running",
      description:
        "Currently pursuing higher education through Bangladesh Open University, expanding understanding in human behavior, social structures, and liberal arts.",
      icon: <FaBookOpen className="text-2xl text-primaryColor" />,
      tags: ["Social Sciences", "Liberal Arts", "Humanities", "Open Learning"],
    },
    {
      degree: "Diploma in Pharmacy",
      institution: "SMMA IHT",
      location: "Kajipur, Sirajganj, Bangladesh",
      duration: "2019 - 2023",
      grade: "Passed",
      description:
        "Specialized in pharmaceutical sciences, medical chemistry, pharmacology, and clinical therapeutics, completed with hands-on hospital pharmacy training.",
      icon: <FaBriefcaseMedical className="text-2xl text-primaryColor" />,
      tags: ["Pharmacology", "Pharmaceutics", "Clinical Practice", "Hospital Training"],
    },
    {
      degree: "HSC",
      institution: "Sirajganj Sadar Technical and Business Management Institute",
      location: "Sirajganj, Bangladesh",
      duration: "2019 - 2021",
      grade: "GPA 4.58 / 5.00",
      description:
        "Completed Higher Secondary Certificate with a focus on business management, accounting principles, and computer application systems.",
      icon: <FaSchool className="text-2xl text-primaryColor" />,
      tags: ["Business Management", "Accounting", "Technical Education", "IT Systems"],
    },
    {
      degree: "SSC",
      institution: "Chor-Khokshabari High School",
      location: "Sirajganj, Bangladesh",
      duration: "2016 - 2018",
      grade: "GPA 4.39 / 5.00",
      description:
        "Completed Secondary School Certificate focusing on science concentration, including physics, chemistry, biology, and higher mathematics.",
      icon: <FaAward className="text-2xl text-primaryColor" />,
      tags: ["General Science", "Higher Mathematics", "Physics & Chemistry", "Biology"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="education"
      ref={ref}
      className="relative overflow-hidden py-20 md:py-28 bg-background/50"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-[-10%] h-[400px] w-[400px] rounded-full bg-primaryColor/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] h-[400px] w-[400px] rounded-full bg-primaryColor/8 blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-3xl text-center md:mb-24"
        >
          <div className="inline-flex flex-col items-center">
            <span className="text-sm font-semibold tracking-[0.25em] text-primaryColor uppercase mb-3">
              Academic Journey
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              My{" "}
              <span className="bg-linear-to-r from-primaryColor to-primaryColor/70 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-primaryColor to-transparent mt-5 rounded-full" />
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
              A comprehensive view of my academic qualifications, fields of study, and technical concentrations.
            </p>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative mx-auto max-w-5xl">
          {/* Vertical Timeline Line - Centered on desktop, left-aligned on mobile */}
          <div className="absolute left-8 md:left-1/2 top-2 bottom-2 w-[2px] -translate-x-1/2 bg-linear-to-b from-primaryColor via-primaryColor/40 to-transparent" />

          {/* Timeline Cards Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="space-y-12 md:space-y-20"
          >
            {educations.map((edu, index) => {
              const isCurrent = edu.grade === "Running";
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={edu.degree}
                  variants={itemVariants}
                  className="relative flex flex-col md:flex-row w-full pl-16 md:pl-0 group"
                >
                  {/* Timeline Indicator Dot */}
                  <div className="absolute left-8 md:left-1/2 top-10 md:top-12 -translate-x-1/2 z-20">
                    <div
                      className={`relative flex h-6 w-6 items-center justify-center rounded-full bg-background border-2 transition-all duration-500 group-hover:scale-110 ${
                        isCurrent
                          ? "border-primaryColor shadow-[0_0_12px_rgba(255,100,33,0.4)]"
                          : "border-border group-hover:border-primaryColor"
                      }`}
                    >
                      <div
                        className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                          isCurrent
                            ? "bg-primaryColor animate-pulse"
                            : "bg-muted-foreground group-hover:bg-primaryColor"
                        }`}
                      />
                      {isCurrent && (
                        <div className="absolute inset-0 rounded-full bg-primaryColor/30 animate-ping pointer-events-none" />
                      )}
                    </div>
                  </div>

                  {/* Horizontal Connector Line (Desktop Only) */}
                  {isEven ? (
                    <div className="absolute right-[50%] top-[60px] w-[40px] h-[1.5px] bg-linear-to-l from-primaryColor/5 to-primaryColor/60 group-hover:from-primaryColor/20 group-hover:to-primaryColor transition-all duration-500 pointer-events-none hidden md:block" />
                  ) : (
                    <div className="absolute left-[50%] top-[60px] w-[40px] h-[1.5px] bg-linear-to-r from-primaryColor/60 to-primaryColor/5 group-hover:from-primaryColor group-hover:to-primaryColor/20 transition-all duration-500 pointer-events-none hidden md:block" />
                  )}

                  {/* Card Block */}
                  <div
                    className={`relative rounded-3xl border border-border/40 bg-background/40 backdrop-blur-md p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-primaryColor/30 transition-all duration-500 overflow-hidden group-hover:-translate-y-1 w-full md:w-[calc(50%-40px)] ${
                      isEven ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    {/* Inner Hover Glow */}
                    <div className="absolute inset-0 bg-linear-to-br from-primaryColor/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10">
                      {/* Top Row: Icon, Titles, and Meta info */}
                      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 justify-between">
                        <div className="flex items-start gap-4 md:gap-6">
                          {/* Icon Container */}
                          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primaryColor/10 flex items-center justify-center shrink-0 border border-primaryColor/15 shadow-inner transition-transform duration-500 group-hover:rotate-6">
                            {edu.icon}
                          </div>

                          <div>
                            {/* Degree Name */}
                            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primaryColor transition-colors duration-300">
                              {edu.degree}
                            </h3>
                            {/* Institution */}
                            <p className="text-base md:text-lg font-semibold text-foreground/80 mt-1">
                              {edu.institution}
                            </p>
                            {/* Location */}
                            <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-2">
                              <IoLocationSharp className="text-primaryColor shrink-0 text-base" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Status/Grade and Duration Badge */}
                        <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-3 mt-4 md:mt-0 shrink-0">
                          {/* Result/Grade Pill */}
                          <span
                            className={`rounded-full px-3.5 py-1 text-xs font-semibold tracking-wide uppercase ${
                              isCurrent
                                ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                                : "bg-primaryColor/10 border border-primaryColor/15 text-primaryColor"
                            }`}
                          >
                            {isCurrent ? "Current Study" : edu.grade}
                          </span>

                          {/* Duration Badge */}
                          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                            <FaCalendarAlt className="text-primaryColor" />
                            <span>{edu.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed md:pl-[80px]">
                        {edu.description}
                      </p>

                      {/* Course tags/Concentration areas */}
                      <div className="mt-6 flex flex-wrap gap-2 md:pl-[80px]">
                        {edu.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-xl text-xs font-medium bg-muted/65 border border-border/50 text-muted-foreground transition-all duration-300 group-hover:bg-primaryColor/10 group-hover:text-primaryColor group-hover:border-primaryColor/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
