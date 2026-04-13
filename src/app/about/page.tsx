"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import MySkills from "../components/MySkills";
import AboutMe from "../components/AboutMeSection";
import Experience from "@/components/Experience/Experience";

interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  description: string;
}

interface Course {
  name: string;
  institution: string;
  duration: string;
  description: string;
}

export default function About() {
  const educations: Education[] = [
    {
      degree: "Diploma in Pharmacy",
      institution: "SMMA IHT",
      location: "Kajipur, Sirajganj, Bangladesh",
      duration: "2019 - 2023",
      grade: "Passed",
      description:
        "Specialized in pharmaceutical sciences with hands-on hospital experience.",
    },
    {
      degree: "HSC",
      institution: "Sirajganj Sadar Technical and Business Management Institute",
      location: "Sirajganj, Bangladesh",
      duration: "2019 - 2021",
      grade: "4.58/5.00",
      description: "Focus on business management and technical education.",
    },
    {
      degree: "SSC",
      institution: "Chor-Khokshabari High School",
      location: "Sirajganj, Bangladesh",
      duration: "2016 - 2018",
      grade: "4.39/5.00",
      description: "Completed secondary education with science concentration.",
    },
  ];

  const courses: Course[] = [
    {
      name: "Web Development Complete Course",
      institution: "Programming Hero",
      duration: "June 2024 - January 2025",
      description:
        "Comprehensive web development course covering HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and full-stack project development.",
    },
    {
      name: "Next Level Web Development",
      institution: "Programming Hero",
      duration: "April 2025 - November 2025",
      description:
        "Advanced web development course covering Next.js, TypeScript, PostgreSQL, Prisma ORM, Redis, and enterprise-level backend architecture.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] container mx-auto mt-20 flex items-start py-8 lg:py-0 px-4 sm:px-5 overflow-x-hidden"
    >
      <div className="container mx-auto w-full">
        <Tabs
          defaultValue="about-me"
          className="flex flex-col lg:flex-row mx-auto gap-10 lg:gap-6 lg:mx-0 w-full"
        >
          <TabsList className="flex flex-col items-stretch w-full lg:max-w-[380px] gap-3 shrink-0">
            <TabsTrigger value="about-me">About Me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full lg:px-10 pt-2 lg:pt-0">
            <TabsContent value="about-me" className="w-full mt-0">
              <AboutMe />
            </TabsContent>
            <TabsContent value="experience" className="w-full mt-0">
              <Experience />
            </TabsContent>
            <TabsContent value="skills" className="w-full mt-0">
              <MySkills />
            </TabsContent>
            <TabsContent value="education" className="w-full mt-0">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  My Education
                </h1>
                <p className="mb-6 md:mb-8 mt-2 text-sm sm:text-base text-muted-foreground">
                  Academic background and qualifications.
                </p>
                <ScrollArea className="h-[320px] sm:h-[350px]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pr-3">
                    {educations.map((education, idx) => (
                      <div
                        key={idx}
                        className="bg-[#27272c] p-4 sm:p-5 rounded-sm flex flex-col gap-3 sm:gap-4 h-full"
                      >
                        <h3 className="text-primaryColor font-medium text-sm sm:text-base">
                          {education.duration}
                        </h3>
                        <h2 className="text-xl sm:text-2xl font-semibold leading-tight">
                          {education.degree}
                        </h2>
                        <div>
                          <h3 className="text-sm sm:text-base">{education.institution}</h3>
                          <p className="text-sm sm:text-base text-muted-foreground">
                            {education.location}
                          </p>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {education.description}
                        </p>
                        <div className="inline-flex items-center px-3 py-2 rounded-full bg-primaryColor/10 text-primaryColor border border-primaryColor/20 w-fit text-sm">
                          GPA: {education.grade}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="courses" className="w-full mt-0">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Courses & Certification
                </h1>
                <p className="mb-6 md:mb-8 mt-2 text-sm sm:text-base text-muted-foreground">
                  Professional development and certifications.
                </p>
                <ScrollArea className="h-[340px] sm:h-[400px]">
                  <div className="flex flex-col gap-4 sm:gap-6 pr-3">
                    {courses.map((course, idx) => (
                      <div
                        key={idx}
                        className="bg-[#27272c] p-4 sm:p-5 rounded-sm flex flex-col gap-3"
                      >
                        <h3 className="text-primaryColor font-medium text-sm sm:text-base">
                          {course.duration}
                        </h3>
                        <h2 className="text-lg sm:text-xl font-semibold leading-tight">
                          {course.name}
                        </h2>
                        <p className="text-primaryColor/80 font-medium text-sm sm:text-base">
                          {course.institution}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {course.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
