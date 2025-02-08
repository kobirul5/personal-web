"use client"
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react"
export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 2.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex items-center mt-20 py-12 lg:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about-me"
          className="flex flex-col lg:flex-row mx-auto gap-6 lg:mx-0">
          <TabsList
            className="flex flex-col w-full max-w-[380px] gap-4 "
          >
            <TabsTrigger value="about-me">About Me</TabsTrigger>
            <TabsTrigger value="Skills">Skills</TabsTrigger>
            <TabsTrigger value="Education">Education</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="about-me" className="w-full">About Me</TabsContent>
            
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}
