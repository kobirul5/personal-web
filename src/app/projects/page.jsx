"use client"

import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "motion/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { useState } from "react";
import Image from "next/image";
import SwiperProjectBtns from "@/components/ui/SwiperProjectBtns";
import { BsArrowUpRight } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa6";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Projects() {

    const projects = [
        {
            id: 1,
            title: "SwiftLearn - Minimal LMS System (Frontend)",
            description: "SwiftLearn is a modern and responsive Learning Management System (LMS) frontend built with Next.js (TypeScript) and Tailwind CSS. It provides a seamless experience for both Admins and Users with dynamic course management, module-wise lecture navigation, embedded video player, and secure role-based access.",
            technologies: ["Next.js (TypeScript)", "Tailwind CSS", "Redux Toolkit", "RTK Query"],
            features: [
                "Admin Panel with secure login",
                "Admin can upload, edit, and delete courses with thumbnails, prices, and descriptions",
                "Manage Modules & Lectures with YouTube links and lecture notes",
                "Filter and view lecture lists easily",
                "User Panel with dynamic Course Detail and Lecture Pages",
                "Expandable modules and sequential locked lectures",
                "Embedded YouTube video player for lectures",
                "Visual progress tracker for course completion",
                "Responsive design optimized for mobile, tablet, and desktop"
            ],
            image: "/projects/swiftlearn.jpg", 
            link: "https://swift-learn-nu.vercel.app/",
            github_client: "https://github.com/kobirul5/Swift-Learn",
            github_server: "https://github.com/kobirul5/Swift-Learn-Server", 
            admin_email: "kobirul@gmail.com",
            admin_password: "12345678",
            user_email: "kobirul2@gmail.com",
            user_password: "12345678",
            rowSet: false
        }
        ,
        {
            id: 2,
            title: "EzyTicket -Online Ticket Booking Website",
            description: "EzyTicket is an online ticket booking platform that allows users to purchase travel, event, and movie tickets with secure payments via SSLCommerz. The system features role-based dashboards (user, manager, and admin) with full CRUD functionality for comprehensive management.",
            technologies: ["React", "Node.js", "MongoDB", "Firebase", "Express.js", "Tailwind CSS", "JWT", "Redux Toolkit"],
            features: [
                "Role-based access for Admin, 3 types of Managers and User with secure login and access control",
                "Private dashboard for User, All Managers, and admins",
                "Manager can add, update, and track their listings, while users can browse and buy Travel, Events and Movie Tickets",
                "Users can update his information choose seat and complete payments securely.",
                "Secure API routes with JWT authentication",
                "SweetAlert/Toast notifications for all CRUD operations",
                "Responsive design for mobile, tablet, and desktop",
            ],
            image: "https://i.ibb.co/1tvQzvBZ/ezyticket.jpg",
            link: "https://ezyticket-7198b.web.app/",
            github_client: "https://github.com/mazharul90007/ezyTicket-client",
            github_server: "https://github.com/mazharul90007/ezyTicket-server",
            admin_email: "admin@example.com",
            admin_password: "Admin@123",
            rowSet: true
        },
        // --------------
        {
            id: 3,
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
            image: "https://i.ibb.co/NgV64VY2/worknest.jpg",
            link: "https://worknest-50eb0.web.app/",
            github_client: "https://github.com/kobirul5/work-nest",
            github_server: "https://github.com/kobirul5/work-nest-server",
            admin_email: "admin@example.com",
            admin_password: "Admin@123",
            rowSet: false
        },
        {
            id: 4,
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
            image: "https://i.ibb.co/hx8q4jCw/dine-divine.jpg",
            link: "https://dine-divine-0.web.app/",
            github_client: "https://github.com/kobirul5/Dine-Divine",
            github_server: "https://github.com/kobirul5/Dine-Divine-Server",
            rowSet: true
        },
        {
            id: 5,
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
            github_server: "https://github.com/kobirul5/Gear-Up-Sports-Server",
            rowSet: false
        },
        {
            id: 6,
            title: "CareerClimb - Your Career Partner",
            description: "A dedicated platform offering expert career guidance, professional development services, and resources to help individuals unlock their career potential and achieve their goals.",
            technologies: ["React", "Tailwind CSS", "Daisy UI", "Firebase"],
            image: "https://i.ibb.co/hsNKGM6/career-Climb.jpg",
            link: "https://assignment-9-11085.web.app/",
            github_client: "https://github.com/kobirul5/career-climb",
            github_server: "https://github.com/kobirul5/career-climb",
            rowSet: true
        }
    ];
    //   const [project, setProject] = useState(projects)
    //   const handleChange = (swiper) => {
    //     const currentIndex = swiper.activeIndex;
    //     setProject(projects[currentIndex])
    //   }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-[80vh] container mx-auto flex flex-col justify-center py-12 px-5 lg:py-0"
        >
            {
                projects?.map((p, idx) =>
                    <div
                        key={idx}
                        className={`flex flex-col  my-10 ${p?.rowSet ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 `}
                    >
                        <motion.div className="w-full lg:w-1/2 lg:h-[468px] order-2 lg:order-none">
                            <div className="flex flex-col gap-6">
                                {/* outline num ? */}
                                <div className="text-8xl leading-none text-transparent text-outline font-extrabold  text-outline ">0{p?.id}</div>
                                <h1 className="text-3xl font-bold">{p?.title}</h1>
                                <p>{p?.description}</p>
                                {/* button */}
                                <div className="flex items-center gap-4">
                                    {/* live link */}
                                    <Link target="_blank" href={p?.link}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger
                                                    variant="outline"
                                                    className="border border-primaryColor text-primaryColor hover:text-background hover:bg-primaryColor/90 p-2 px-5  rounded-3xl  flex justify-center items-center group  ">
                                                    <BsArrowUpRight className="mr-2" />
                                                    Live
                                                </TooltipTrigger>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                    <Link target="_blank" href={p?.github_client}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger
                                                    variant="outline"
                                                    className="border border-primaryColor text-primaryColor hover:text-background hover:bg-primaryColor/90 p-2 px-5  rounded-3xl  flex justify-center items-center group  ">
                                                    <FaGithub className="mr-2" />
                                                    client
                                                </TooltipTrigger>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>

                                    <Link target="_blank" href={p?.github_server}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger
                                                    variant="outline"
                                                    className="border border-primaryColor text-primaryColor hover:text-background hover:bg-primaryColor/90 p-2 px-5  rounded-3xl  flex justify-center items-center group  ">
                                                    <FaGithub className="mr-2" />
                                                    Server
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

                            <ScrollArea className="h-[450px] overflow-y-auto">
                                <div className="relative w-full">
                                    <Image
                                        src={p?.image}
                                        alt="project"
                                        width={800} // set your desired width
                                        height={1500} // taller than 450px to allow scrolling
                                        className="object-cover w-full"
                                    />
                                </div>
                            </ScrollArea>


                        </motion.div>
                    </div>)
            }
        </motion.section>
    )
}
