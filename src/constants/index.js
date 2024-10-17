import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full-stack engineer with a strong focus on building scalable web applications and integrating Machine Learning into practical solutions. With over 2 years of industry experience, I have developed expertise in back-end technologies such as Spring Boot, Laravel, Django, MySQL, and MongoDB, alongside front-end tools like ReactJS, HTML5, and CSS. I have also worked on multiple Machine Learning projects, with some of my work being published in IEEE. My goal is to leverage this combined expertise in software engineering and machine learning to create innovative, data-driven solutions that drive business growth and deliver impactful results.`;

export const ABOUT_TEXT = `Currently working as a Software Engineer at JP Morgan Chase, I have a strong passion for solving problems and crafting efficient web applications. With over 2 years of professional experience, my skillsets and flexibility allows me to adapt to any work culture and team and I aim to expand my collaboration, communication, and emerging technology competencies. Apart from coding, I'm an avid film buff/ cinephile, I also enjoy working out, exploring new technologies, and yeah, am always up for a game of table tennis :)`;

export const EXPERIENCES = [
  {
    year: "July 2023 - Present",  
    role: "Software Engineer 1",
    company: "JP Morgan Chase & Co.",
    description: `Working on a leading Front Office Trading application as a Full stack developer in the Asset and Wealth Management division,
    leveraging tech such as Spring Boot, React, MySQL, Grafana etc.`,
    technologies: ["Spring Boot", "ReactJs", "MySQL", "AWS", "Terraform", "Grafana"],
  },
  {
    year: "Feb 2023 - June 2023",
    role: "Software Engineer Intern",
    company: "JP Morgan Chase & Co.",
    description: `Designed, developed, tested, and implemented application code and streamlined application deployment using Jenkins CI/CD.
    Made standard modifications to existing software infrastructure in accordance with high-level specifications, application
    support, and industry standards.`,
    technologies: ["Spring Boot", "ReactJs", "MySQL"],
  },
  {
    year: "Jan 2022 - June 2022",
    role: "Software Engineer Trainee",
    company: "BDO India LLP",
    description: `Engineered an online EGST portal using Laravel and KendoUI Libraries streamlining the process of GST and tax filing processes
    for multinational corporations and delivered personalized client solutions, optimizing application performance according to client benchmarks.`,
    technologies: ["Laravel", "MySQL", "Reactjs", "HTML5"],
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website.",
    technologies: ["HTML", "CSS", "React", "Php", "Laravel"],
  },
  {
    title: "Employee Management App",
    image: project2,
    description:
      "An application for managing list of employees, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blockchain Based Skill Verification Portal",
    image: project4,
    description:
      "A completely decentralized skill verification platform using ReactJS, Ethereum APIs via Infura, and Solidity-based Smart Contracts to authenticate certifications and automate skillset validation.",
    technologies: ["Infura", "Reactjs", "Solidity", "Smart Contracts", "Ethereum"],
  },
];

export const CONTACT = {
  address: "Mumbai,  Maharastra",
  phoneNo: "+91 8169086405",
  email: "damani.jai73@gmail.com",
};
