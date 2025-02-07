"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
    const pathName = usePathname()
    const links = [
        {
            name: "Home",
            pathName: "/",
            scrollSection: "homeSection"
        },
        {
            name: "About",
            pathName: "/about",
            scrollSection: "aboutSection"
        },
        {
            name: "Skills",
            pathName: "/skills",
            scrollSection: "skillsSection"
        },
        {
            name: "projects",
            pathName: "/projects",
            scrollSection: "projectSection"
        },
        {
            name: "Contact me",
            pathName: "/contact",
            scrollSection: "hireMe"
        },

    ]
    return (
        <div>
            <ul className="flex gap-3">
                {
                    links.map((i, idx) => <li key={idx}><Link className={`font-medium hover:text-primaryColor capitalize  ${i.pathName === pathName && "text-primaryColor border-b border-b-primaryColor"}`} href={i.pathName}>{i.name}</Link></li>)
                }
            </ul>
        </div>
    );
};

export default Nav;