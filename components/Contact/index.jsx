"use client";

import React from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { useSectionInView } from "@/lib/useSectionInView";
import { links } from "@/lib/data";
import { sendEmail } from "@/actions";
import { BsFillSendFill } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";
import { toastConfig } from "@/lib/utils";

export default function Contact() {
  const { ref } = useSectionInView(links[4].hash);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28  justify-center items-center flex-col max-w-2xl text-center m-auto"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="w-[min(100%,38rem)] ">
        <h3 className="text-3xl font-bold mb-6">Contact Me</h3>

        <form
          className="mt-10 flex flex-col dark:text-black justify-center"
          action={async (formData) => {
            const { error } = await sendEmail(formData);
            console.log(error);
            if (error) {
              toast.error(error, toastConfig);
              return;
            }
            console.log("succss");
            toast.success("Email sent successfully!", toastConfig);
          }}
        >
          <input
            className="h-14 px-4 rounded-lg borderBlack dark:bg-secondary-dark transition-all dark:text-color-dark outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-secondary-dark  transition-all outline-none dark:text-color-dark"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <button
            type="submit"
            className="px-6 py-2 max-w-xs bg-blue-500 text-white  m-auto rounded flex items-center"
          >
            <BsFillSendFill />
            <p className="ml-2 text-white">Send</p>
          </button>
        </form>
        <ToastContainer />
      </div>
    </motion.section>
  );
}
