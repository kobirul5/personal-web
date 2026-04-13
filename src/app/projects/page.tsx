"use client";

import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { projects } from "@/data/projectss";

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] container mx-auto flex flex-col justify-center py-12 mt-10 px-5 lg:py-0"
    >
      {projects?.map(
        (p, idx) =>
          p && (
            <div
              key={idx}
              className={`grid gap-10 my-10 lg:grid-cols-2 lg:items-start ${
                p?.rowSet ? "" : "lg:[direction:rtl]"
              }`}
            >
              <motion.div className="order-2 w-full self-start lg:order-1 lg:[direction:ltr]">
                <div className="flex flex-col gap-6">
                  {/* outline num ? */}
                  <div className="text-6xl leading-none text-transparent text-outline font-extrabold">
                    0{p?.id}
                  </div>
                  <h1 className="text-3xl font-bold leading-tight">{p?.title}</h1>
                  <p className="max-w-2xl text-white/80">{p?.description}</p>
                  <div className="space-y-4">
                    {p?.features?.length ? (
                      <div>
                        <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                          Features
                        </h2>
                        <ul className="space-y-2 text-sm text-white/75">
                          {p.features.slice(0, 6).map((feature, featureIndex) => (
                            <li
                              key={`${p.id}-feature-${featureIndex}`}
                              className="flex items-start gap-2"
                            >
                              <span className="mt-2 h-2 w-2 rounded-full bg-primaryColor" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {p?.technologies?.length ? (
                      <div>
                        <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                          Technologies
                        </h2>
                        <div className="flex flex-wrap gap-2">
                          {p.technologies.map((technology) => (
                            <span
                              key={`${p.id}-${technology}`}
                              className="rounded-full border border-primaryColor/20 bg-primaryColor/10 px-3 py-1 text-xs font-medium text-primaryColor"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                  {/* button */}
                  <div className="flex items-center gap-4">
                    {/* live link */}
                    <Link target="_blank" href={p?.link || "#"}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger
                            className="border border-primaryColor text-primaryColor hover:text-background hover:bg-primaryColor/90 p-2 px-5  rounded-3xl  flex justify-center items-center group  "
                          >
                            <BsArrowUpRight className="mr-2" />
                            Live
                          </TooltipTrigger>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                    {p?.github_client ? (
                      <Link target="_blank" href={p.github_client}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger
                              className="border border-primaryColor text-primaryColor hover:text-background hover:bg-primaryColor/90 p-2 px-5  rounded-3xl  flex justify-center items-center group  "
                            >
                              <FaGithub className="mr-2" />
                              client
                            </TooltipTrigger>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    ) : null}

                    {p?.github_server ? (
                      <Link target="_blank" href={p.github_server}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger
                              className="border border-primaryColor text-primaryColor hover:text-background hover:bg-primaryColor/90 p-2 px-5  rounded-3xl  flex justify-center items-center group  "
                            >
                              <FaGithub className="mr-2" />
                              Server
                            </TooltipTrigger>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    ) : null}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                }}
                className="order-1 z-10 w-full self-start lg:order-2 lg:[direction:ltr] rounded-2xl"
              >
                <ScrollArea className="h-132.5 rounded-2xl ">
                  <div className="flex flex-col gap-5 rounded-2xl ">
                    {(p?.images?.length ? p.images : [p?.image])
                      ?.filter(Boolean)
                      .map((image, imageIndex) => (
                        <div
                          key={`${p?.id}-${imageIndex}`}
                          className="relative w-full rounded-2xl"
                        >
                          <Image
                            src={image!}
                            alt={`${p?.title} screenshot ${imageIndex + 1}`}
                            width={1200}
                            height={1500}
                            className="object-cover w-full h-auto rounded-2xl"
                          />
                        </div>
                      ))}
                  </div>
                </ScrollArea>
              </motion.div>
            </div>
          )
      )}
    </motion.section>
  );
}
