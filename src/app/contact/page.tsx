"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaLocationArrow, FaPhone, FaPaperPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const ContactMe = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("from_name"),
          email: formData.get("from_email"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Failed to send message.");
      }

      setIsSuccess(true);
      form.current?.reset();
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut" as const,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-10 mt-16 text-textColor"
      id="contact"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primaryColor mb-4">
            Let&apos;s Connect
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-primary rounded-xl border border-border p-6 shadow-lg shadow-slate-200/60 sm:p-8 lg:p-10 dark:shadow-black/20"
          >
            <h3 className="mb-6 text-2xl font-semibold text-primaryColor">
              Send me a message
            </h3>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >
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
                  rows={5}
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
                    "Sending..."
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
              {isSuccess ? (
                <div
                  role="alert"
                  className="flex items-center gap-2 rounded-md border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm font-medium text-green-600"
                >
                  <FiCheckCircle className="text-lg" />
                  Your message has been sent successfully.
                </div>
              ) : null}
              {errorMessage ? (
                <p role="alert" className="text-sm font-medium text-red-500">
                  {errorMessage}
                </p>
              ) : null}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-semibold text-textColor">
              Contact Details
            </h3>

            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 rounded-lg border border-border bg-primary p-4 shadow-sm transition-colors duration-300 hover:border-primaryColor/30"
            >
              <div className="p-3 bg-primaryColor/10 rounded-full text-primaryColor">
                <FaLocationArrow className="text-xl" />
              </div>
              <div>
                <h4 className="font-medium text-muted-foreground">Location</h4>
                <p className="text-lg text-textColor">Sirajganj, Bangladesh</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 rounded-lg border border-border bg-primary p-4 shadow-sm transition-colors duration-300 hover:border-primaryColor/30"
            >
              <div className="p-3 bg-primaryColor/10 rounded-full text-primaryColor">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <h4 className="font-medium text-muted-foreground">Phone</h4>
                <p className="text-lg text-textColor">+880 1990 955633</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 rounded-lg border border-border bg-primary p-4 shadow-sm transition-colors duration-300 hover:border-primaryColor/30"
            >
              <div className="p-3 bg-primaryColor/10 rounded-full text-primaryColor">
                <MdEmail className="text-xl" />
              </div>
              <div>
                <h4 className="font-medium text-muted-foreground">Email</h4>
                <p className="text-lg text-textColor">kobirul05j@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 rounded-xl border border-primaryColor/20 bg-primaryColor/5 p-6"
            >
              <h4 className="mb-3 text-lg font-medium text-textColor">
                Availability
              </h4>
              <p className="text-muted-foreground">
                I&apos;m currently available for full-time positions. If you have a
                project that needs my expertise, don&apos;t hesitate to reach out!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactMe;
