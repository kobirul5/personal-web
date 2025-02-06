
import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
export default function Header() {

 
    return (
        <header>
            <nav className="hidden lg:flex justify-between items-center p-5">
                <div><h2 className="text-lg font-semibold">Kobirul</h2></div>
                <div>
                    <Nav></Nav>
                </div>
                <div><Link href="/contact"><Button>Hire Me</Button></Link></div>
            </nav>
                <div className="flex lg:hidden p-5">mobile nav</div>
        </header>
    )
}
