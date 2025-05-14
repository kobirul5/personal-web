"use client"
import { motion, useInView } from "framer-motion"
import { FaGraduationCap, FaCalendarAlt, FaAward } from "react-icons/fa"
import { IoLocationSharp } from "react-icons/io5"
import { useRef } from "react"

const educations = [
  {
    degree: "Diploma in Pharmacy",
    institution: "SMMA IHT",
    location: "Kajipur, Sirajganj, Bangladesh",
    duration: "2019 - 2023",
    grade: "Passed",
    description: "Specialized in pharmaceutical sciences with hands-on hospital experience."
  },
  {
    degree: "HSC",
    institution: "Sirajganj Sadar Technical and Business Management Institute",
    location: "Sirajganj, Bangladesh",
    duration: "2019 - 2021",
    grade: "4.58/5.00",
    description: "Focus on business management and technical education."
  },
  {
    degree: "SSC",
    institution: "Chor-Khokshabari High School",
    location: "Sirajganj, Bangladesh",
    duration: '2016 - 2018',
    grade: "4.39/5.00",
    description: "Completed secondary education with science concentration."
  },
]

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { 
      y: 40,
      opacity: 0,
      rotateX: 15
    },
    show: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section className="relative pb-10  overflow-hidden" id="education" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex flex-col items-center">
            <span className="text-sm font-medium text-primaryColor mb-3 tracking-widest">ACADEMIC BACKGROUND</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryColor to-primaryColor/70">Education</span> Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primaryColor to-transparent mt-6 rounded-full"></div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="relative container mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-primaryColor/30 to-transparent hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
          </div>

          <div className="space-y-16 md:space-y-24">
            {educations.map((edu, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="relative group"
                whileHover={{ scale: 1.02 }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-background border-4 border-primaryColor/80 items-center justify-center z-10 shadow-lg">
                  <div className={`w-2 h-2 rounded-full bg-primaryColor ${index === 0 ? 'animate-pulse' : ''}`}></div>
                </div>

                <div className="flex flex-col md:flex-row">
                  {/* Date (mobile) */}
                  <div className="md:hidden mb-4 flex items-center text-sm font-medium text-muted-foreground">
                    <FaCalendarAlt className="mr-2 text-primaryColor" />
                    {edu.duration}
                  </div>
                  
                  {/* Card */}
                  <div className={`relative bg-background rounded-3xl border border-border/30 shadow-lg hover:shadow-xl transition-all duration-500 p-8 md:p-10 w-full 
                    ${index % 2 === 0 ? 'md:mr-auto md:pr-20 md:pl-14' : 'md:ml-auto md:pl-20 md:pr-14'}
                    overflow-hidden group-hover:border-primaryColor/40`}
                  >
                    {/* Card glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primaryColor/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row gap-8">
                      {/* Institution Logo */}
                      <div className="w-20 h-20 rounded-2xl bg-primaryColor/10 flex items-center justify-center shrink-0 border border-primaryColor/10 shadow-inner">
                        <FaGraduationCap className="text-3xl text-primaryColor" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">{edu.degree}</h3>
                            <p className="text-lg md:text-xl text-primaryColor font-medium mt-1">{edu.institution}</p>
                          </div>
                          
                          {/* Date (desktop) */}
                          <div className="hidden md:flex items-center text-sm font-medium text-muted-foreground bg-muted px-4 py-2 rounded-full">
                            <FaCalendarAlt className="mr-2 text-primaryColor" />
                            {edu.duration}
                          </div>
                        </div>
                        
                        <div className="flex items-center mt-3 text-muted-foreground">
                          <IoLocationSharp className="mr-2 text-primaryColor" />
                          <span>{edu.location}</span>
                        </div>
                        
                        {edu.description && (
                          <p className="mt-4 text-muted-foreground leading-relaxed">
                            {edu.description}
                          </p>
                        )}
                        
                        {/* Grade */}
                        {edu.grade && (
                          <div className="mt-6 inline-flex items-center px-5 py-2.5 rounded-full bg-primaryColor/10 text-primaryColor border border-primaryColor/20">
                            <FaAward className="mr-3 text-lg" />
                            <span className="font-medium">GPA: {edu.grade}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education