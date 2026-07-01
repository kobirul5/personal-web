import Link from "next/link";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
import { ReactNode } from "react";

interface SocialLink {
  icon: ReactNode;
  path: string;
  label: string;
}

const Social = () => {
  const socialLinks: SocialLink[] = [
    { icon: <FaGithub />, path: "https://github.com/kobirul5", label: "GitHub profile" },
    {
      icon: <LiaLinkedin />,
      path: "https://www.linkedin.com/in/kobirul-islam/",
      label: "LinkedIn profile",
    },
    {
      icon: <FaFacebook />,
      path: "https://www.facebook.com/kobirul0k",
      label: "Facebook profile",
    },
  ];

  return (
    <div className="flex justify-start pt-2 items-center gap-3">
      {socialLinks.map((i, idx) => (
        <Link
          key={idx}
          href={i.path}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={i.label}
          className="w-9 h-9 flex justify-center items-center text-xl border rounded-full border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white"
        >
          {i.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
