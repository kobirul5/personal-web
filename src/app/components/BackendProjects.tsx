"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { backendProjects, type BackendProject } from "@/data/backendProjects";
import { FaServer, FaGithub, FaImages, FaGooglePlay, FaApple } from "react-icons/fa";
import { TbPlugConnected } from "react-icons/tb";
import { HiExternalLink } from "react-icons/hi";
import { MdJoinFull } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

type TabType = "overview" | "screenshots";

export default function BackendProjects() {
  const [activeProject, setActiveProject] = useState<BackendProject>(backendProjects[0]);
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  const hasScreenshots = activeProject.screenshots && activeProject.screenshots.length > 0;
  const isTogether = activeProject.appType === "together";

  return (
    <section className="container mx-auto py-8 px-5 relative">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 z-[-1] bg-primaryColor/20 rounded-full blur-[120px] opacity-30 animate-pulse" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-3 flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1 px-3">
            Select Project
          </h3>
          {backendProjects.map((proj) => (
            <button
              key={proj.id}
              onClick={() => {
                setActiveProject(proj);
                setActiveTab("overview");
              }}
              className={`text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-3 ${
                activeProject.id === proj.id
                  ? "border-primaryColor bg-primaryColor/10 text-primaryColor shadow-[0_0_15px_rgba(255,100,33,0.1)]"
                  : "border-border bg-primary/40 hover:bg-primary/80 text-textColor"
              }`}
            >
              {proj.appType === "together" ? (
                <MdJoinFull className="text-xl flex-shrink-0" />
              ) : (
                <FaServer className="text-lg flex-shrink-0" />
              )}
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-semibold text-sm leading-tight truncate">
                    {proj.title.split(" - ")[0]}
                  </h4>
                  {proj.appType === "together" && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-primaryColor/20 text-primaryColor border border-primaryColor/30 whitespace-nowrap">
                      Together
                    </span>
                  )}
                </div>
                <span className="text-xs text-muted-foreground">
                  {proj.techStack.slice(0, 2).join(" · ")}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Details Panel */}
        <div className="lg:col-span-9 flex flex-col border border-border bg-primary/20 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl">

          {/* Header */}
          <div className="p-5 border-b border-border bg-primary/40 flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                  Live
                </span>
                {isTogether ? (
                  <span className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full bg-primaryColor/15 text-primaryColor border border-primaryColor/25">
                    <MdJoinFull /> Together App
                  </span>
                ) : (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                    Backend Only
                  </span>
                )}
              </div>
              <h3 className="text-lg md:text-xl font-bold leading-tight">{activeProject.title}</h3>
              <p className="text-muted-foreground text-sm mt-1 leading-relaxed max-w-xl">
                {activeProject.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
              {activeProject.live && (
                <Link href={activeProject.live} target="_blank"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-primaryColor text-white hover:bg-primaryColor/85 transition-all duration-300">
                  <HiExternalLink /> Live
                </Link>
              )}
              {activeProject.githubClient && (
                <Link href={activeProject.githubClient} target="_blank"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-border text-textColor hover:border-primaryColor hover:text-primaryColor transition-all duration-300">
                  <FaGithub /> Client
                </Link>
              )}
              {activeProject.github && (
                <Link href={activeProject.github} target="_blank"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-border text-textColor hover:border-primaryColor hover:text-primaryColor transition-all duration-300">
                  <FaGithub /> {isTogether ? "Server" : "Repository"}
                </Link>
              )}
              {activeProject.playStore && (
                <Link href={activeProject.playStore} target="_blank"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-emerald-500/30 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all duration-300">
                  <FaGooglePlay /> Play Store
                </Link>
              )}
              {activeProject.appStore && (
                <Link href={activeProject.appStore} target="_blank"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-sky-500/30 text-sky-400 hover:bg-sky-500 hover:text-white transition-all duration-300">
                  <FaApple /> App Store
                </Link>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-border bg-primary/10">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-4 px-6 text-sm font-semibold border-b-2 transition-all duration-300 flex items-center gap-2 ${
                activeTab === "overview"
                  ? "border-primaryColor text-primaryColor bg-primaryColor/5"
                  : "border-transparent text-muted-foreground hover:text-textColor"
              }`}
            >
              <TbPlugConnected /> Overview
            </button>
            {hasScreenshots && (
              <button
                onClick={() => setActiveTab("screenshots")}
                className={`py-4 px-6 text-sm font-semibold border-b-2 transition-all duration-300 flex items-center gap-2 ${
                  activeTab === "screenshots"
                    ? "border-primaryColor text-primaryColor bg-primaryColor/5"
                    : "border-transparent text-muted-foreground hover:text-textColor"
                }`}
              >
                <FaImages /> Screenshots
              </button>
            )}
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 flex-1 min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab + activeProject.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                {/* OVERVIEW */}
                {activeTab === "overview" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
                        {isTogether ? "App Overview" : "System Overview"}
                      </h4>
                      <p className="text-textColor/85 text-sm leading-relaxed mb-5">
                        {activeProject.overview}
                      </p>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2.5">
                        {activeProject.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-textColor/90">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primaryColor flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.techStack.map((tech) => (
                          <span key={tech}
                            className="rounded-lg border border-primaryColor/15 bg-primaryColor/5 px-3 py-1.5 text-xs font-semibold text-primaryColor hover:bg-primaryColor hover:text-white transition-all duration-300 cursor-default">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* SCREENSHOTS */}
                {activeTab === "screenshots" && hasScreenshots && (
                  <div>
                    <p className="text-muted-foreground text-sm mb-5">
                      UI previews for{" "}
                      <span className="text-primaryColor font-semibold">
                        {activeProject.title.split(" - ")[0]}
                      </span>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto pr-1">
                      {activeProject.screenshots!.map((src, i) => (
                        <div key={i} className="relative rounded-xl overflow-hidden border border-border/60 group">
                          <Image
                            src={src}
                            alt={`${activeProject.title} screenshot ${i + 1}`}
                            width={600}
                            height={400}
                            className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
