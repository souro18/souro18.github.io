"use client";

import React from "react";
import { links, skillsData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useSectionInView";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView(links[3].hash);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-3xl min-h-[75vh] flex justify-center items-center flex-col text-center sm:mb-40 mx-6 lg:m-auto"
    >
      <h3 className="text-3xl font-bold mb-6">My Skills</h3>
      <ul className="flex flex-wrap justify-center gap-3 text-lg text-color-light overflow-hidden">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-secondary-light border rounded px-4 py-2 dark:bg-secondary-dark dark:text-color-dark"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
