"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import MySkills from "../components/MySkills";
import AboutMe from "../components/AboutMeSection";
export default function About() {



  const educations = [
    {
      degree: "Diploma in Pharmacy",
      institution: "SMMA IHT",
      location: "Kajipur, Sirajganj, Bangladesh",
      duration: "2019 - 2023"
    },
    {
      degree: "HSC",
      institution: "Sirajganj Sadar Technical and Business management institute",
      location: "Sirajganj, Bangladesh",
      duration: "2019 - 2021",
      grade: "4.58/5.00",
    },
    {
      degree: "SSC",
      institution: "Chor-Khokshabari High School",
      location: "Sirajganj, Bangladesh",
      duration: '2016 - 2028',
      grade: "4.39/5.00",
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
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full lg:px-10">
            {/* about */}
            <TabsContent value="about-me" className="w-full">
              <AboutMe/>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <MySkills/>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">My Education</h1>
                <p className="mb-8">Throughout my academic journey, I have gained knowledge and experience in various fields, shaping my skills and expertise. Here are the institutions I have studied at and the qualifications I have earned.</p>
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

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}
