import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.2 }}
    >
      {/* Title */}

      <h1 className="text-4xl md:text-5xl font-bold  mb-6">About Me</h1>

      {/* Content */}
      <p className="text-lg  leading-relaxed  mx-auto text-justify">
        My name is <span className="font-semibold">Kobirul Islam</span>, a{" "}
        <span className="font-semibold text-primaryColor">Full Stack Developer</span>{" "}
        based in Sirajganj, Bangladesh. I completed my Diploma in Pharmacy in 2023,
        but my passion has always been in technology and computers.
        <br />
        <br />
        After completing my studies, I worked briefly at{" "}
        <span className="font-semibold">Popular Diagnostic</span> but realized that
        programming was my true calling. I decided to fully commit to{" "}
        <span className="font-bold">web development</span>, enrolling in the{" "}
        <span className="font-bold">Web Development Complete Course</span> at
        Programming Hero (June 2024 – January 2025), followed by the{" "}
        <span className="font-bold">Next Level Web Development</span> course (April
        2025 – November 2025).
        <br />
        <br />I am currently working as a{" "}
        <span className="font-semibold text-primaryColor">
          Backend Developer at SM Technology
        </span>{" "}
        (July 2025 – Present), where I build scalable APIs, implement real-time
        WebSocket features, integrate payment gateways, and manage database schemas
        using Prisma ORM with MongoDB.
      </p>
    </motion.div>
  );
};

export default AboutMe;
