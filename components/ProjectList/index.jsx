"use client";

import React from "react";
import { useSectionInView } from "@/lib/useSectionInView";
import { links, projectsData } from "@/lib/data";
import Project from "../Project";

export default function Projects() {
  const { ref } = useSectionInView(links[2].hash, 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28  flex justify-center items-center flex-col mx-6 lg:m-auto"
    >
      <h3 className="text-3xl font-bold mb-6">My Projects</h3>
      <div>
        {projectsData.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </section>
  );
}
