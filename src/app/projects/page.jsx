"use client"

import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "motion/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { useState } from "react";
import Image from "next/image";
import SwiperProjectBtns from "@/components/ui/SwiperProjectBtns";
export default function Projects() {

  const projects = [
    {
      id: 1,
      title: "Work Nest- Employee Management System",
      description: "A web application for monitoring employee workload, salaries, and HR management. Employees can post workflow updates, HR executives can verify and pay employees, and admins can manage user roles and payroll.",
      technologies: ["React", "Node.js", "MongoDB", "Firebase", "Express.js", "Tailwind CSS", "Daisy UI", "JWT"],
      features: [
        "Role-based authentication (Employee, HR, Admin)",
        "Private dashboard for employees, HR, and admins",
        "Employees can log work hours and view payment history",
        "HR can verify employees and process salary payments",
        "Admin can promote employees to HR and adjust salaries",
        "Secure API routes with JWT authentication",
        "SweetAlert/Toast notifications for all CRUD operations",
        "Responsive design for mobile, tablet, and desktop",
        "Dashboard with table and card grid toggle view"
      ],
      image: "https://i.ibb.co/BKsS5Dh9/worknest.jpg",
      link: "https://worknest-50eb0.web.app/",
      github_client: "https://github.com/kobirul5/work-nest",
      github_server: "https://github.com/kobirul5/work-nest-server",
      admin_email: "admin@example.com",
      admin_password: "Admin@123"
    },
    {
      id: 2,
      title: "Dine Divine- Restaurant Management System",
      description: "A full-stack restaurant management website that allows users to browse food items, place orders, and manage restaurant operations efficiently. The system includes user authentication, food management, order tracking, and a secure payment system.",
      technologies: ["React", "Node.js", "MongoDB", "Firebase", "Express.js", "Tailwind CSS", "Daisy UI", "JWT"],
      features: [
        "Public pages for viewing and purchasing food items",
        "Food quantity management and purchase limitations",
        "Search and filter functionality for food items",
        "Theme toggling for light/dark mode",
        "Food order management with purchase functionality",
        "Food gallery with interactive image lightbox",
        "CRUD operations for food items (Add, Edit, Delete)",
        "Responsive design for mobile, tablet, and desktop",
        "JWT Authentication for private routes",
        "Google/GitHub login integration"
      ],
      image: "https://i.ibb.co/kJR8Js6/rasturen.jpg",
      link: "https://assignment-11-client-1cccb.web.app/",
      github_client: "https://github.com/kobirul5/Dine-Divine",
      github_server: "https://github.com/kobirul5/Dine-Divine-Server"
    },
    {
      id: 3,
      title: "GearUp Sports - Sports Equipment Store",
      description: "EquiSports is a responsive e-commerce website for purchasing sports accessories and gear. Customers can browse products, view details, and manage their own equipment listings. The platform includes authentication, product management, and a user-friendly experience.",
      technologies: ["React", "Node.js", "MongoDB", "Firebase", "Express.js", "Tailwind CSS", "Daisy UI"],
      features: [
        "User authentication with email/password and social login",
        "Add, update, and delete equipment (private routes)",
        "Sort sports equipment by price (ascending/descending)",
        "Dark/Light theme toggle",
        "Responsive design for mobile, tablet, and desktop",
        "Loading spinner while fetching data",
        "Error handling with toast/sweet alert notifications"
      ],
      image: "https://i.ibb.co/5TV3NxB/spots.jpg",
      link: "https://assignment-10-45e67.web.app/",
      github_client: "https://github.com/kobirul5/gear-up-sports",
      github_server: "https://github.com/kobirul5/Gear-Up-Sports-Server"
    },
    {
      id: 4,
      title: "CareerClimb - Your Career Partner",
      description: "A dedicated platform offering expert career guidance, professional development services, and resources to help individuals unlock their career potential and achieve their goals.",
      technologies: ["React", "Tailwind CSS", "Daisy UI", "Firebase"],
      image: "https://i.ibb.co/hsNKGM6/career-Climb.jpg",
      link: "https://assignment-9-11085.web.app/",
      github: "https://github.com/kobirul5/career-climb"
    }
  ];
  const [project, setProject] = useState(projects[0])
  const handleChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0"
    >
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" }

    }}
      className="flex flex-col lg:flex-row lg:gap-8 ">
        <motion.div className="w-full lg:w-1/2 lg:h-[468px] order-2 lg:order-none">
          <div className="flex flex-col gap-6">
            {/* outline num ? */}
            <div className="text-8xl leading-none text-transparent text-outline font-extrabold  text-outline ">0{project?.id}</div>
            <h1 className="text-3xl font-bold">{project?.title}</h1>
            <p>{project?.description}</p>
            {/* button */}
            <div className="flex items-center gap-4">
              {/* live link */}
              <Link href={""}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                      Live Link

                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </Link>

            </div>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{
              opacity: 1,
              transition: { delay: 2, duration: 0.4, ease: "easeIn" }

          }}
          className="lg:w-1/2 z-10">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="lg:h-[520px]"
            onSlideChange={handleChange}
          >
            {
              projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-[450px] z-20 relative flex justify-center items-center bg-pink-50/20 ">
                      {/* overlay */}
                      <div></div>
                      <div className="relative w-full h-full object-cover ">
                        <Image src={project?.image} fill  alt="project" />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }

            {/* wiper btn */}
            <SwiperProjectBtns containerStyle={"flex gap-2 absolute right-0 top-1/2 justify-between  lg:justify-end z-20 w-full lg:top-[470px] "} btnStyle={"text-5xl bg-primaryColor text-background"} />
          </Swiper>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
