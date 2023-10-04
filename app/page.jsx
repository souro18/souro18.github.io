import About from "@/components/About";
import Contact from "@/components/Contact";
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
      <Contact />
      <ThemeSwitcher />
    </main>
  );
}
