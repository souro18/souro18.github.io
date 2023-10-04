import projectMemoryImage from '@/public/memory-game.png';
import projectReadsApp from '@/public/my-reads.png';

export const linkedInUrl = 'https://www.linkedin.com/in/sourajit-paul-890a70134/';
export const githubUrl = 'https://github.com/souro18/';
export const links = [
    {
      name: "Home",
      hash: "home",
    },
    {
      name: "About",
      hash: "about",
    },
    {
      name: "Projects",
      hash: "projects",
    },
    {
      name: "Skills",
      hash: "skills",
    },
    {
      name: "Contact",
      hash: "contact",
    },
  ];

  export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript / ES6",
    "TypeScript",
    "React",
    "Next.js",
    "Web Optimization",
    "React Native",
    "React Query",
    "SCSS",
    "Git",
    "Tailwind",
    "Redux",
    "GraphQL",
    "Python",
    
  ];

  export const projectsData = [
    {
      title: "Memory Game",
      description:
        "A captivating game that challenges your memory and cognitive skills while you search for matching tiles with the fewest steps possible.",
      tags: ["javascript", "CSS"],
      imageUrl: projectMemoryImage,
      gitUrl: "https://github.com/souro18/fend-project-memory-game",
      demoUrl: 'https://souro18.github.io/fend-project-memory-game/'
    },
    {
      title: "My Reads App",
      description:
        "A comprehensive application that enables users to easily store and track their wish-lists, while providing features to manage books across various categories.",
      tags: ["React", "SCSS", "Node", "MongoDB"],
      imageUrl: projectReadsApp,
      gitUrl: "https://github.com/souro18/reactnd-project-myreads-starter",
      demoUrl: 'https://souro18.github.io/reactnd-project-myreads-starter/#/login'
    },
    
  ];