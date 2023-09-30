"use client";
import { links } from "@/lib/data";
import { useSectionInView } from "@/lib/useSectionInView";
import React from "react";

function ProjectList() {
  const { ref } = useSectionInView(links[2].hash);
  return (
    <div className="min-h-screen" id="projects" ref={ref}>
      ProjectList
    </div>
  );
}

export default ProjectList;
