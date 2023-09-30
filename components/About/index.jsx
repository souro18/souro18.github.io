"use client";
import { links } from "@/lib/data";
import { useSectionInView } from "@/lib/useSectionInView";
import React from "react";

function About() {
  const { ref } = useSectionInView(links[1].hash);
  return (
    <div className="min-h-screen" id={links[1].hash} ref={ref}>
      About
    </div>
  );
}

export default About;
