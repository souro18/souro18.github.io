"use client";
import { links } from "@/lib/data";
import { useSectionInView } from "@/lib/useSectionInView";
import React from "react";

function About() {
  const { ref } = useSectionInView(links[1].hash);
  return (
    <section
      className="min-h-screen flex justify-center items-center flex-col max-w-2xl text-center leading-8 mx-8 lg:m-auto"
      id={links[1].hash}
      ref={ref}
    >
      <h3 className="text-3xl font-bold mb-6">About Me</h3>
      <p className="mb-4">
        A seasoned React developer with five years of hands-on experience in
        crafting web applications that are both visually stunning and highly
        functional. My journey in the world of web development has been an
        exciting and dynamic one, allowing me to continually refine my skills
        and stay up-to-date with the latest trends in the ever-evolving React
        ecosystem.
      </p>
      <p>
        Embarked on my career in web development with a strong passion for
        creating seamless user experiences. Over the years, I&apos;ve had the
        privilege to work on a diverse range of projects, from small startups to
        large enterprises. This experience has provided me with valuable
        insights into the nuances of software development and the ability to
        adapt to various project requirements.
      </p>
    </section>
  );
}

export default About;
