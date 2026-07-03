import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      className="w-full"
    >
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
        About Me
      </h1>

      <div className="space-y-5 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 mx-auto text-justify">
        <p>
          My name is <span className="font-semibold">Kobirul Islam</span>, and I
          am a{" "}
          <span className="font-semibold text-primaryColor">Full Stack Developer</span>{" "}
          from Sirajganj, Bangladesh. I enjoy turning ideas into clean, useful, and
          scalable digital products that feel fast, reliable, and easy to use.
        </p>

        <p>
          My path into tech was not direct. I completed my Diploma in Pharmacy in
          2023, and for a while I worked at{" "}
          <span className="font-semibold">Popular Diagnostic</span>. That experience
          helped me understand responsibility and discipline, but deep down I knew
          my real interest was in programming, problem solving, and building things
          with code. Eventually, I made the decision to fully commit to{" "}
          <span className="font-bold">web development</span>, and that choice
          completely changed my direction.
        </p>

        <p>
          Since then, I have focused on learning and building with modern web
          technologies. I completed the{" "}
          <span className="font-bold">Web Development Complete Course</span> at
          Programming Hero and later continued with the{" "}
          <span className="font-bold">Next Level Web Development</span> course to
          strengthen my understanding of advanced frontend and backend concepts. At
          present, I am working as a{" "}
          <span className="font-semibold text-primaryColor">
            Backend Developer at SM Technology
          </span>
          , where I build scalable APIs, implement real-time WebSocket features,
          integrate payment gateways, and design database structures using Prisma
          ORM with MongoDB.
        </p>

        <p>
          What drives me most is the challenge of creating software that solves
          real problems. I care about writing maintainable code, learning
          continuously, and improving the user experience from both the technical
          and human side. I am always looking for opportunities to grow, contribute,
          and build meaningful products with a strong team.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutMe;
