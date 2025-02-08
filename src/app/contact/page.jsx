"use client"
import { Input, } from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea"
import { motion } from "motion/react"
import { useRef } from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";



const ContactMe = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_1cwh7ah', 'template_xw07nfm', form.current, {
                publicKey: 'gsRLxFOjLeCYZW5IM',
            })
            .then(
                (res) => {
                    console.log(res)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" }
      }}
      className="mt-10"
        >
            <div className="container mx-auto px-6 mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
                {/* Left - Contact Form */}
                <div className=" rounded-2xl shadow-lg  ">
                    <h2 className="text-3xl mb-5 text-primaryColor font-bold text-center -6">
                        Get In Touch
                    </h2>
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div className=" grid  grid-cols-1 gap-5">
                            <Input
                                type="text"
                                name="from_name"
                                placeholder="Enter your name"
                                required
                            />
                            <Input
                                type="email"
                                name="from_email"
                                placeholder="Enter your email"
                                
                                required
                            />
                            <Textarea
                                name="message"
                                placeholder="Write your message..."
                                
                                required
                            />
                            <Button
                            variant="outline"
                     size="lg"
                             >
                                Send Message
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Right - Contact Details */}
                <div className="space-y-6 ">
                    <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left text-primaryColor">
                        Contact Information
                    </h2>
                    <p className="flex items-center gap-3 text-lg">
                        <FaLocationArrow className=" text-2xl text-primaryColor" /> Sirajganj, Bangladesh
                    </p>
                    <p className="flex items-center gap-3 text-lg">
                        <FaPhone className="text-2xl  text-primaryColor" /> +880 1990 955633
                    </p>
                    <p className="flex items-center gap-3 text-lg">
                        <MdEmail className=" text-2xl text-primaryColor" /> kobirul05j@gmail.com
                    </p>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactMe;