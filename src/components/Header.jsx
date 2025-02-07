
import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
export default function Header() {


    return (
        <header>
            <nav className="flex justify-between items-center p-5">
                <div><h2 className="text-lg font-semibold">Kobirul</h2></div>
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
