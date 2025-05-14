"use client"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaLocationArrow, FaPhone, FaPaperPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";

const ContactMe = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
console.log(isSubmitting)
    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm('service_1cwh7ah', 'template_xw07nfm', form.current, {
                publicKey: 'gsRLxFOjLeCYZW5IM',
            })
            .then(
                (res) => {
                    console.log(res);
                    setIsSuccess(true);
                    setIsSubmitting(false);
                    form.current.reset();
                    setTimeout(() => setIsSuccess(false), 3000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setIsSubmitting(false);
                },
            );
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                ease: "easeOut",
                duration: 0.5
            }
        }
    };

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="py-10"
            id="contact"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    variants={itemVariants}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primaryColor mb-4">
                        Let's Connect
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind or want to chat? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Contact Form */}
                    <motion.div 
                        variants={itemVariants}
                        className="bg-background rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 border"
                    >
                        <h3 className="text-2xl font-semibold text-foreground mb-6 text-primaryColor">
                            Send me a message
                        </h3>
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <motion.div variants={itemVariants}>
                                <Input
                                    type="text"
                                    name="from_name"
                                    placeholder="Your name"
                                    required
                                    
                                />
                            </motion.div>
                            
                            <motion.div variants={itemVariants}>
                                <Input
                                    type="email"
                                    name="from_email"
                                    placeholder="Your email"
                                    required
                                    
                                />
                            </motion.div>
                            
                            <motion.div variants={itemVariants}>
                                <Textarea
                                    name="message"
                                    placeholder="Your message..."
                                    rows="5"
                                    required
                                />
                            </motion.div>
                            
                            <motion.div variants={itemVariants}>
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full py-6 text-lg font-medium bg-primaryColor hover:bg-primaryColor/90 transition-all duration-300"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        'Sending...'
                                    ) : isSuccess ? (
                                        <span className="flex items-center gap-2">
                                            <FiCheckCircle className="text-xl" /> Sent Successfully!
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            <FaPaperPlane /> Send Message
                                        </span>
                                    )}
                                </Button>
                            </motion.div>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div 
                        variants={itemVariants}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-semibold text-foreground">
                            Contact Details
                        </h3>
                        
                        <motion.div 
                            variants={itemVariants}
                            className="flex items-start gap-4 p-4 bg-muted rounded-lg hover:bg-muted/50 transition-colors duration-300"
                        >
                            <div className="p-3 bg-primaryColor/10 rounded-full text-primaryColor">
                                <FaLocationArrow className="text-xl" />
                            </div>
                            <div>
                                <h4 className="font-medium text-muted-foreground">Location</h4>
                                <p className="text-lg text-foreground">Sirajganj, Bangladesh</p>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            variants={itemVariants}
                            className="flex items-start gap-4 p-4 bg-muted rounded-lg hover:bg-muted/50 transition-colors duration-300"
                        >
                            <div className="p-3 bg-primaryColor/10 rounded-full text-primaryColor">
                                <FaPhone className="text-xl" />
                            </div>
                            <div>
                                <h4 className="font-medium text-muted-foreground">Phone</h4>
                                <p className="text-lg text-foreground">+880 1990 955633</p>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            variants={itemVariants}
                            className="flex items-start gap-4 p-4 bg-muted rounded-lg hover:bg-muted/50 transition-colors duration-300"
                        >
                            <div className="p-3 bg-primaryColor/10 rounded-full text-primaryColor">
                                <MdEmail className="text-xl" />
                            </div>
                            <div>
                                <h4 className="font-medium text-muted-foreground">Email</h4>
                                <p className="text-lg text-foreground">kobirul05j@gmail.com</p>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            variants={itemVariants}
                            className="mt-8 p-6 bg-primaryColor/5 rounded-xl border border-primaryColor/20"
                        >
                            <h4 className="font-medium text-lg text-foreground mb-3">Availability</h4>
                            <p className="text-muted-foreground">
                                I'm currently available for full-time positions. If you have a project that needs my expertise, don't hesitate to reach out!
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactMe;