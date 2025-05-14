
import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
export default function Header() {


    return (
        <header className=" fixed top-0 w-full backdrop-blur-2xl z-20 px-5">
            <nav className="flex justify-between items-center  py-2 container mx-auto">
                <div><Link href="/" className="text-xl font-semibold  uppercase text-primaryColor hover:cursor-pointer  logo-font tracking-[0.5em]">Kobirul</Link></div>
                <div className="hidden lg:block">
                    <Nav></Nav>
                </div>
                <div className="flex justify-center items-center">
                    <Link href="/contact"><Button>Hire Me</Button></Link>
                    <div className="flex lg:hidden p-5">
                        <MobileNav />
                    </div>
                </div>
            </nav>
        </header>
    )
}
