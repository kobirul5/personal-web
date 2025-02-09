"use client"

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFirebase, SiNextdotjs, SiTailwindcss, SiDaisyui } from "react-icons/si";
import { motion } from "framer-motion";



export default function MySkills () {

    const skills = [
        { name: "React.js", icon: <FaReact className="text-blue-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
        { name: "DaisyUI", icon: <SiDaisyui className="text-purple-500" /> },

    ];

    return (
            <section>
                <div className="">
                    <h2 className="text-3xl md:text-4xl font-bold  ">My Skills</h2>
                    <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis quaerat id ad commodi, excepturi officia fugiat dignissimos dicta ipsa!</p>
                </div>

                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="p-4 bg-[#27272c]  flex flex-col items-center gap-2"
                            whileHover={{ scale: 1.1 }}
                        >
                            <div className="text-4xl">{skill.icon}</div>
                            <p className="text-textColor font-medium">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
    );
};

