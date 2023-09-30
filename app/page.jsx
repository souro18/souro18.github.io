import About from "@/components/About";
import Intro from "@/components/Intro";
import ProjectList from "@/components/ProjectList";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { links } from "@/lib/data";

export default function Home() {
  return (
    <main className="">
      <Intro />
      <About />
      <ProjectList />
      <ThemeSwitcher />
      <div className="py-40" />
    </main>
  );
}
