import Banner from "./components/Banner";
import MySkills from "./components/MySkills";

export default function Home() {
  return ( 
    <main className="h-full px-5 relative">
        <section className="z-20"><Banner></Banner></section>
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] z-[-1] bg-primaryColor/50 rounded-[50px] blur-[100px] opacity-40 animate-pulse"></div>
        <section className="text-center mt-10">
          <MySkills></MySkills>
        </section>
    </main>
  );
}
