"use client"
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
import Social from "./Social";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primaryColor/5 mt-10 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primaryColor">Kobirul Islam</h3>
            <p className="text-gray-400 mb-6">
              I’m a MERN Stack Developer, building responsive and scalable web apps with MongoDB, Express.js, React.js, and Node.js. Passionate about clean code and user-friendly design.
            </p>
            <div className="flex space-x-4">
              <Social/>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:ml-20"
          >
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-primaryColor transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primaryColor transition-colors">About</Link>
              </li>
              <li>
                <Link href="#education" className="text-gray-400 hover:text-primaryColor transition-colors">Education</Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-primaryColor transition-colors">Contact</Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MdLocationOn className="text-primaryColor mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Sirajganj, Bangladesh</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-primaryColor mr-3" />
                <span className="text-gray-400">+880 1990 955633</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primaryColor mr-3" />
                <span className="text-gray-400">kobirul05j@gmail.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to my newsletter for updates and insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primaryColor text-gray-900 w-full"
                required
              />
              <button
                type="submit"
                className="bg-primaryColor hover:bg-primaryColor/90 text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div> */}
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500"
        >
          <p>
            &copy; {currentYear} Kobirul Islam. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;