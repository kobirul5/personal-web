import { Button } from "@/components/ui/button";
import Banner from "./components/Banner";
import MySkills from "./components/MySkills";
import GithubCalendarSection from "./components/GithubCalendarSection";
import Projects from "./projects/Projects";
import Link from "next/link";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import Heading from "@/components/Heading";
import BackendProjects from "./components/BackendProjects";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Md. Kobirul Islam | Full Stack Developer – Portfolio",
  description:
    "Welcome to Kobirul Islam's portfolio. Full Stack Developer & Backend Developer at SM Technology. Specializing in Node.js, Express.js, TypeScript, React.js, Next.js, MongoDB, and Prisma ORM. Based in Sirajganj, Bangladesh.",
  path: "/",
});

export default function Home() {
  return (
    <main className="h-full relative space-y-16 overflow-x-hidden">
      <section className="z-20 bg-background pt-10 px-5 ">
        <Banner></Banner>
      </section>
      <div className="px-5">
        <section className="text-center mb10 ">
          <MySkills></MySkills>
        </section>
        <section className="mb-10">
          <GithubCalendarSection />
        </section>
        <section className="relative">
          <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 z-[-1] bg-primaryColor/50 rounded-full blur-[70px] md:blur-[100px] opacity-40 animate-pulse"></div>
          {/* projects */}
          <Heading
            subTitle="My Project"
            title1="Explore"
            title2="All Projects"
          />
          <Projects />
          <Link href={"/projects"} className=" flex justify-center text-center">
            <Button>See My All Projects</Button>
          </Link>
        </section>
        {/* Backend API Projects */}
        <section className="relative">
          <div className="absolute top-1/2 left-0 w-48 h-48 md:w-80 md:h-80 z-[-1] bg-primaryColor/30 rounded-full blur-[70px] md:blur-[100px] opacity-30 animate-pulse"></div>
          <Heading
            subTitle="Server Side Systems"
            title1="Backend"
            title2="API Projects"
          />
          <BackendProjects />
        </section>
        <section className="relative">
          <Experience />
        </section>
        <Education />
      </div>
    </main>
  );
}
