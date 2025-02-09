import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
        >
            {/* Title */}
           
            <h1 className="text-4xl md:text-5xl font-bold  mb-6">
                About Me
            </h1>
           

            {/* Content */}
            <p
                className="text-lg  leading-relaxed  mx-auto text-justify"
            >
                My name is <span className="font-semibold ">Kobirul Islam</span>. I completed my diploma in
                Pharmacy in 2023. However, I have always been passionate about computers. After completing my studies,
                I started a job in October 2023 at <span className="font-semibold ">Popular Diagnostic</span>
                and worked there until February 2024. Unfortunately, I didn&apos;t enjoy the job and realized it wasn&apos;t the
                right path for me.

                <br /><br />

                During this time, I discovered my interest in
                <span className="font-bold "> programming</span>,
                which gave me a sense of
                <span className="font-bold "> excitement</span> and
                <span className="font-bold "> fulfillment</span>.

                I decided to quit my job, return home, and fully focus on learning
                <span className="font-bold "> web development</span>.
                Since then, I have been
                <span className="font-bold "> pursuing MERN stack development</span>,
                and it has been an incredible journey of growth and learning.
            </p>
            
        </motion.div>
    );
};

export default AboutMe;