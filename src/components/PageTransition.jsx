"use client"

import {AnimatePresence, motion} from "motion/react"
import { usePathname } from "next/navigation"
export default function PageTransition({children}) {
    const pathname = usePathname()   


    return (
    <AnimatePresence>
        <div key={pathname}>
            <motion.div 
            initial={{opacity:1}}
            animate={{
                opacity:0,
                transition: {delay:1, duration:0.4, ease: "easeInOut"}
            }}
            className="h-screen w-screen pointer-events-none fixed top-0 bg-primary"
            />
        </div>
        {children}
    </AnimatePresence>
  )
}
