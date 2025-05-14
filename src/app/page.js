import { Button } from "@/components/ui/button";
import Banner from "./components/Banner";
import MySkills from "./components/MySkills";
import Projects from "./projects/Projects";
import Link from "next/link";
import Education from "@/components/Education/Education";
import Heading from "@/components/Heading";

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
    <Education/>

    </main>
  );
}

 
