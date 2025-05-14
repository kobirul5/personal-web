'use client'
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const Heading = ({subTitle, title1, title2}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="text-center mb-10"
    >
      <div className="inline-flex flex-col items-center">
        <span className="text-sm font-medium text-primaryColor mb-3 tracking-widest">{subTitle}</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryColor to-primaryColor/70">{title1}</span> {title2}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primaryColor to-transparent mt-6 rounded-full"></div>
      </div>
    </motion.div>
  )
}

export default Heading
