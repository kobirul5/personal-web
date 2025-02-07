"use client"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBarsStaggered } from "react-icons/fa6";
const MobileNav = () => {
    const pathName = usePathname();
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
        <Sheet>
            <SheetTrigger className="flex justify-center items-center text-center">
                <FaBarsStaggered className="text-2xl font-bold text-primaryColor" />
            </SheetTrigger>
            <SheetContent>
                <div className="mt-20 mb-20 text-2xl text-center font-bold">Kobirul</div>
                <div>
                    <ul className="flex  flex-col justify-center items-center gap-8">
                        {
                            links.map((i, idx) => <li key={idx}><Link className={`font-medium text-xl hover:text-primaryColor capitalize  ${i.pathName === pathName && "text-primaryColor border-b-2 border-b-primaryColor"}`} href={i.pathName}>{i.name}</Link></li>)
                        }
                    </ul>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;