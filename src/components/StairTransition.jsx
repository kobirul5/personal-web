"use client"
import { AnimatePresence, motion } from "motion/react"
import { usePathname } from "next/navigation"
import Stair from "./Stair"
export default function StairTransition() {
    const pathname = usePathname()


    return (<>
        <AnimatePresence mode="wait">
            <div key={pathname}>
                <div className="w-screen h-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex ">
                    <Stair></Stair>
                </div>

                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: { delay: 1, duration: 0.4, ease: "easeInOut" }
                    }}
                    className="w-screen h-screen fixed top-0 bg-primary pointer-events-none" />
            </div>
        </AnimatePresence>
    </>
    )
}
