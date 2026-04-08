"use client"
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
import Social from "./Social";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/80 border-t border-white/5 py-12 mt-20">
      <div className="container mx-auto px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true }}
           className="flex flex-col items-center text-center"
        >
          {/* Logo/Name */}
          <h3 className="text-3xl font-bold mb-4 tracking-tight text-white">
            Kobirul <span className="text-primaryColor">Islam</span>
          </h3>
          
          {/* Tagline */}
          <p className="text-textColor/70 max-w-md mb-8 text-sm sm:text-base leading-relaxed">
            Full Stack Developer specializing in high-performance web applications and seamless user experiences.
          </p>

          {/* Social Links */}
          <div className="mb-10">
            <Social />
          </div>

          {/* Divider & Copyright */}
          <div className="w-full max-w-xs h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
          
          <p className="text-textColor/40 text-xs sm:text-sm">
            &copy; {currentYear} <span className="text-textColor/60">Kobirul Islam</span>. Built with passion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;