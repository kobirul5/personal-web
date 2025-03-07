import { Button } from "@/components/ui/button";
import Banner from "./components/Banner";
import MySkills from "./components/MySkills";
import Projects from "./projects/Projects";
import Link from "next/link";

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
        <div>
          <h2 className="text-3xl md:text-4xl font-bold  text-center ">My Project</h2>
          <p className="mt-2 mx-auto text-center lg:w-[80%] my-10">Here are some of the projects I've worked on, showcasing my skills in full-stack development using the MERN stack. From dynamic web applications to feature-rich management systems, these projects demonstrate my ability to build efficient and user-friendly solutions</p>
        </div>
        <Projects />
        <Link href={"/projects"} className=" flex justify-center text-center"><Button>See My All Projects</Button></Link>
      </section>
    </main>
  );
}

 
