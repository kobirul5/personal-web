"use client";

import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "motion/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import Image from "next/image";
import SwiperProjectBtns from "@/components/ui/SwiperProjectBtns";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { ScrollArea } from "@/components/ui/scroll-area";
import { projects, type Project } from "@/data/projectss";

export default function Projects() {
  const [project, setProject] = useState<Project>(projects[0]);
  const handleChange = (swiper: { activeIndex: number }) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className=" container mx-auto flex flex-col justify-center py-12 px-5 lg:py-0"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
        }}
        className="grid gap-8 lg:grid-cols-2 lg:items-start"
      >
        <motion.div className="order-2 w-full self-start lg:order-1">
          <div className="flex flex-col   gap-6">
            {/* outline num ? */}
            <h1 className="text-2xl md:text-3xl font-bold leading-tight">
              {project?.title}
            </h1>
            <p className="max-w-2xl text-justify text-white/80">
              {project?.description}
            </p>
            {/* button */}
            <div className="flex flex-wrap items-center gap-3">
              {/* live link */}
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      target="_blank"
                      href={project?.link || "#"}
                      className="border border-primaryColor text-primaryColor hover:text-background hover:bg-primaryColor/90 px-4 py-2 rounded-3xl flex justify-center items-center group"
                    >
                      <BsArrowUpRight className="mr-2" />
                      Live
                    </Link>
                  </TooltipTrigger>
                </Tooltip>
              </TooltipProvider>
              {project?.github_client ? (
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        target="_blank"
                        href={project.github_client}
                        className="border border-primaryColor text-primaryColor hover:text-background hover:bg-primaryColor/90 px-4 py-2 rounded-3xl flex justify-center items-center group"
                      >
                        <FaGithub className="mr-2" />
                        Client
                      </Link>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              ) : null}

              {project?.github_server ? (
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        target="_blank"
                        href={project.github_server}
                        className="border border-primaryColor text-primaryColor hover:text-background hover:bg-primaryColor/90 px-4 py-2 rounded-3xl flex justify-center items-center group"
                      >
                        <FaGithub className="mr-2" />
                        Server
                      </Link>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              ) : null}
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                  Features
                </h2>
                <ul className="space-y-2 text-sm text-white/75">
                  {project?.features?.slice(0, 4).map((feature, featureIndex) => (
                    <li
                      key={`${project.id}-feature-${featureIndex}`}
                      className="flex items-start gap-2"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-primaryColor" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                  Technology Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project?.technologies?.map((technology) => (
                    <span
                      key={`${project.id}-${technology}`}
                      className="rounded-full border border-primaryColor/20 bg-primaryColor/10 px-3 py-1 text-xs font-medium text-primaryColor"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
          className="order-1 z-10 w-full self-start lg:order-2 rounded-2xl"
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="lg:h-auto"
            onSlideChange={handleChange}
          >
            {projects?.slice(0, 3).map((project, index) => {
              const projectImages = (
                project?.images?.length ? project.images : [project?.image]
              ).filter(Boolean);

              return (
                <SwiperSlide key={index}>
                  <ScrollArea className="max-h-[70vh] pr-3">
                    <div className="flex flex-col gap-5">
                      {projectImages.map((image, imageIndex) => (
                        <div
                          key={`${project?.id}-${imageIndex}`}
                          className="relative w-full"
                        >
                          <Image
                            src={image!}
                            alt={`${project?.title} screenshot ${imageIndex + 1}`}
                            width={1200}
                            height={1500}
                            className="object-cover w-full h-auto rounded-2xl"
                          />
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </SwiperSlide>
              );
            })}

            {/* wiper btn */}
            <SwiperProjectBtns
              containerStyle={
                "flex gap-2 absolute right-0 top-1/2 lg:top-[200px] justify-between z-20 w-full px-3"
              }
              btnStyle={
                "text-5xl bg-primaryColor  hover:bg-primaryColor/70 text-white rounded-xl text-background"
              }
            />
          </Swiper>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
