
import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
export default function Header() {


    return (
        <header>
            <nav className="flex justify-between items-center p-5">
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
