"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import MySkills from "../components/MySkills";
import AboutMe from "../components/AboutMeSection";
import Experience from "@/components/Experience/Experience";
export default function About() {



  const educations = [
    {
      degree: "Diploma in Pharmacy",
      institution: "SMMA IHT",
      location: "Kajipur, Sirajganj, Bangladesh",
      duration: "2019 - 2023"
    },
  ]

  const courses = [
    {
      name: "Web Development Complete Course",
      institution: "Programming Hero",
      duration: "June 2024 – January 2025",
      description: "Comprehensive web development course covering HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and full-stack project development."
    },
    {
      name: "Next Level Web Development",
      institution: "Programming Hero",
      duration: "April 2025 – November 2025",
      description: "Advanced web development course covering Next.js, TypeScript, PostgreSQL, Prisma ORM, Redis, and enterprise-level backend architecture."
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] container mx-auto flex items-center py-12 lg:py-0 px-5"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about-me"
          className="flex flex-col lg:flex-row mx-auto gap-44 lg:gap-6 lg:mx-0">
          <TabsList
            className="flex flex-col  items-center w-full lg:max-w-[380px] gap-4 "
          >
            <TabsTrigger value="about-me">About Me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full lg:px-10">
            {/* about */}
            <TabsContent value="about-me" className="w-full">
              <AboutMe/>
            </TabsContent>
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <Experience/>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <MySkills/>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">My Education</h1>
                <p className="mb-8 mt-2 text-muted-foreground">Academic background and qualifications.</p>
                <ScrollArea className="h-[350px]" >
                  <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
                    {
                      educations.map((education, idx) => <div key={idx}
                        className="bg-[#27272c] p-5 rounded-sm flex flex-col gap-4"
                      >
                        <h3 className="text-primaryColor">{education?.duration}</h3>
                        <h2 className="text-2xl font-semibold">{education?.degree}</h2>
                        <div>
                          <h3>{education?.institution}</h3>
                          <p>{education?.location}</p>
                        </div>
                      </div>)
                    }
                  </div>
                </ScrollArea>

              </div>
            </TabsContent>

            {/* Courses & Certification */}
            <TabsContent value="courses" className="w-full">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Courses & Certification</h1>
                <p className="mb-8 mt-2 text-muted-foreground">Professional development and certifications.</p>
                <ScrollArea className="h-[400px]">
                  <div className="flex flex-col gap-6">
                    {courses.map((course, idx) => (
                      <div key={idx} className="bg-[#27272c] p-5 rounded-sm flex flex-col gap-3">
                        <h3 className="text-primaryColor font-medium">{course.duration}</h3>
                        <h2 className="text-xl font-semibold">{course.name}</h2>
                        <p className="text-primaryColor/80 font-medium">{course.institution}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{course.description}</p>
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
  )
}
