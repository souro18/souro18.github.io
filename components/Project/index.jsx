"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

export default function Project({ title, description, tags, imageUrl }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-secondary-light max-w-2xl border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:min-h-[20rem] transition  dark:text-white dark:bg-secondary-dark">
        <div className="pt-5 pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-7 sm:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/90">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex gap-4 mt-12">
            <a
              as="button"
              className="py-2 px-4 rounded bg-blue-500 text-white flex gap-1 items-center"
              href="#"
              rel="noopener"
              target="_blank"
              aria-label="open github"
            >
              <BsGithub color="white" /> Code
            </a>
            <a
              as="button"
              className="py-2 px-4 rounded bg-blue-500 text-white flex gap-1 items-center"
              href="#"
              rel="noopener"
              target="_blank"
              aria-label="live demo"
            >
              <FiExternalLink color="white" /> Live Demo
            </a>
          </div>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block bottom-0 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.15]
        group-hover:-translate-x-2
        group-hover:-translate-y-5 group-hover:-rotate-2"
        />
      </section>
    </motion.div>
  );
}
