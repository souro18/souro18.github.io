"use client";
import { githubUrl, linkedInUrl, links } from "@/lib/data";
import { useSectionInView } from "@/lib/useSectionInView";
import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Intro = () => {
  const { ref } = useSectionInView(links[0].hash);
  return (
    <div
      className="min-h-screen relative max-w-4xl m-auto px-6 flex justify-center items-center"
      ref={ref}
    >
      <div className="flex items-center flex-col z-10">
        <h1 className="text-6xl font-semibold text-center">
          Hi, I am{" "}
          <span className="text-blue-500 dark:text-blue-500">
            Sourajit Paul
          </span>
        </h1>
        <h2 className="text-3xl mt-6 text-center">
          I am a React developer, and I love what I do
        </h2>
        <div className="flex gap-3 mt-4 justify-start">
          <a
            as="button"
            className="p-3 rounded-full bg-blue-500"
            href={linkedInUrl}
            target="_blank"
            rel="noopener"
          >
            <BsLinkedin color="white" />
          </a>
          <a
            as="button"
            className="p-3 rounded-full bg-blue-500"
            target="_blank"
            rel="noopener"
            href={githubUrl}
          >
            <BsGithub color="white" />
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-[50%] -translate-x-2/4">
        <Image
          src={"/avatar.png"}
          width={200}
          height={200}
          alt="avatar"
          priority
        />
      </div>
    </div>
  );
};

export default Intro;
