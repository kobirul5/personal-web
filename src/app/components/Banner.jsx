import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa6";
import BannerPhoto from "./BannerPhoto";

const Banner = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className=" flex-1 flex flex-col">
                <p className="text-xl font-semibold">MERN Stack Web Developer</p>
                <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold mb-6 mt-2">Hi, I'm <br />  <span className="text-primaryColor">Kobirul Islam</span></h1>
                <p className="mb-9">I’m a MERN Stack Developer, building responsive and scalable web apps with MongoDB, Express.js, React.js, and Node.js. Passionate about clean code and user-friendly design. </p>
                <div className="space-y-5">
                    <Button
                     variant="outline"
                     size="lg"
                    >
                        <span>Download CV</span>
                        <FaDownload></FaDownload>
                    </Button>
                    <div>
                    <Social></Social>
                    </div>
                </div>

            </div>
            <div className="flex-1">
                <BannerPhoto/>
            </div>
        </div>
    );
};

export default Banner;