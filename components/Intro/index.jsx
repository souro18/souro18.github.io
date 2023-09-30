"use client";
import { links } from "@/lib/data";
import { useSectionInView } from "@/lib/useSectionInView";
import Image from "next/image";

const Intro = () => {
  const { ref } = useSectionInView(links[0].hash);
  return (
    <div className="min-h-screen relative max-w-4xl m-auto px-6" ref={ref}>
      <div className="flex items-center flex-col pt-36 ">
        <h1 className="text-6xl font-semibold text-center">
          Hi, I am{" "}
          <span className="text-blue-500 dark:text-blue-500">
            Sourajit Paul
          </span>
        </h1>
        <h3 className="text-3xl mt-8 text-center">
          I am a React developer, and I love what I do
        </h3>
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
