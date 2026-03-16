import { Button } from "@/components/ui/button";
import Banner from "./components/Banner";
import MySkills from "./components/MySkills";
import Projects from "./projects/Projects";
import Link from "next/link";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import Heading from "@/components/Heading";

export const metadata = {
  title: "Md. Kobirul Islam | Full Stack Developer – Portfolio",
  description: "Welcome to Kobirul Islam's portfolio. Full Stack Developer & Backend Developer at SM Technology. Specializing in Node.js, Express.js, TypeScript, React.js, Next.js, MongoDB, and Prisma ORM. Based in Sirajganj, Bangladesh.",
  alternates: {
    canonical: "https://kobirul.dev",
  },
};

export default function Home() {
  return (
    <main className="h-full px-5 relative space-y-16">
      <section className="z-20"><Banner></Banner></section>
      <div className="absolute top-[200px] right-1/4 w-[400px] h-[400px] z-[-1] bg-primaryColor/50 rounded-[50px] blur-[100px] opacity-40 animate-pulse"></div>
      <section className="text-center ">
        <MySkills></MySkills>
      </section>
      <section className="relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] z-[-1] bg-primaryColor/50 rounded-[50px] blur-[100px] opacity-40 animate-pulse"></div>

        {/* projects */}
        <Heading
          subTitle="My Project"
          title1="Explore"
          title2="All Projects"
        />
        <Projects />
        <Link href={"/projects"} className=" flex justify-center text-center"><Button>See My All Projects</Button></Link>
      </section>
      <section className="relative">
        <Experience />
      </section>
    <Education/>

    </main>
  );
}

 
