import Link from "next/link";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
const Social = () => {

    const socialLinks = [
        {icon: <FaGithub/>, path: "https://github.com/kobirul5"},
        {icon: <LiaLinkedin/>, path: "https://www.linkedin.com/in/kobirul-islam/"},
        {icon:  <FaFacebook/>, path: "https://www.facebook.com/kobirul0k"},
    ]

    return (
        <div className="flex  justify-start items-center gap-3">
           {
            socialLinks.map((i, idx)=> <Link 
            key={idx} 
            href={i.path} 
            target="_blank"
            className="w-9 h-9 flex justify-center items-center text-xl border rounded-full border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-background"
            >
                {i.icon}
            </Link>)
           }
        </div>
    );
};

export default Social;