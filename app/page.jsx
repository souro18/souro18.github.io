import About from "@/components/About";
import Intro from "@/components/Intro";
import ProjectList from "@/components/ProjectList";
import Skills from "@/components/Skills";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="">
      <Intro />
      <About />
      <ProjectList />
      <Skills />
      <ThemeSwitcher />
    </main>
  );
}
