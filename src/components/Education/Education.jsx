"use client"
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaAward } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const educations = [
  {
    degree: "Diploma in Pharmacy",
    institution: "SMMA IHT",
    location: "Kajipur, Sirajganj, Bangladesh",
    duration: "2019 - 2023"
  },
  {
    degree: "HSC",
    institution: "Sirajganj Sadar Technical and Business Management Institute",
    location: "Sirajganj, Bangladesh",
    duration: "2019 - 2021",
    grade: "4.58/5.00",
  },
  {
    degree: "SSC",
    institution: "Chor-Khokshabari High School",
    location: "Sirajganj, Bangladesh",
    duration: '2016 - 2018',
    grade: "4.39/5.00",
  },
];

const Education = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="py-10 relative overflow-hidden" id="education">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-primaryColor blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primaryColor blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center justify-center relative">
            <div className="absolute -inset-4 rounded-full bg-primaryColor/10"></div>
            <FaGraduationCap className="text-3xl text-primaryColor mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primaryColor to-primaryColor/80">
              Academic Journey
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            My educational qualifications and achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primaryColor/20 via-primaryColor to-primaryColor/20 hidden md:block"></div>

          <div className="space-y-12 md:space-y-16">
            {educations.map((edu, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="relative group"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute top-6 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-background border-4 border-primaryColor items-center justify-center z-10">
                  <div className={`w-2 h-2 rounded-full bg-primaryColor ${index === 0 ? 'animate-ping' : ''}`}></div>
                </div>

                <div className="flex flex-col md:flex-row">
                  {/* Date (mobile) */}
                  <div className="md:hidden mb-3 flex items-center text-sm text-muted-foreground">
                    <FaCalendarAlt className="mr-2 text-primaryColor" />
                    {edu.duration}
                  </div>
                  
                  {/* Card */}
                  <div className={`bg-background rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 p-6 md:p-8 w-full 
                    ${index % 2 === 0 ? 'md:mr-auto md:pr-16 md:pl-12' : 'md:ml-auto md:pl-16 md:pr-12'}
                    group-hover:border-primaryColor/30 group-hover:bg-primaryColor/5`}
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Institution Logo Placeholder */}
                      <div className="w-16 h-16 rounded-xl bg-primaryColor/10 flex items-center justify-center shrink-0">
                        <FaGraduationCap className="text-2xl text-primaryColor" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground">{edu.degree}</h3>
                        <p className="text-lg text-primaryColor font-medium mt-1">{edu.institution}</p>
                        
                        <div className="flex items-center mt-2 text-muted-foreground">
                          <IoLocationSharp className="mr-2 text-primaryColor" />
                          <span>{edu.location}</span>
                        </div>
                        
                        {/* Date (desktop) */}
                        <div className="hidden md:flex items-center mt-3 text-sm text-muted-foreground">
                          <FaCalendarAlt className="mr-2 text-primaryColor" />
                          {edu.duration}
                        </div>
                        
                        {/* Grade */}
                        {edu.grade && (
                          <div className="mt-4 inline-flex items-center px-4 py-2 rounded-full bg-primaryColor/10 text-primaryColor">
                            <FaAward className="mr-2" />
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
  );
};

export default Education;