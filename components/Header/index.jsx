"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-2xl shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[26rem] sm:rounded-full dark:bg-secondary-dark dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 ">
        <ul className="flex w-[16rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-color-light sm:w-[initial] sm:flex-nowrap sm:gap-4">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative flex-1"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-600 transition dark:text-color-dark dark:hover:text-gray-300 font-bold",
                  {
                    "text-color-light dark:text-color-dark":
                      activeSection === link.hash,
                  }
                )}
                href={`#${link.hash}`}
                onClick={() => {
                  setActiveSection(link.hash);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.hash === activeSection && (
                  <motion.span
                    className="bg-primary-light rounded-full absolute inset-0 -z-10 dark:bg-primary-dark"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
