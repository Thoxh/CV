import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Tim Siebert",
  initials: "TS",
  location: "Brandenburg, Deutschland, GMT+1",
  locationLink: "https://maps.app.goo.gl/mA2sadBpbbZDUqyj6",
  about:
    "Full Stack Engineer concentrated on creating automated, digital solutions in various application domains",
  summary:
    "As a Full Stack Engineer, I focus on digitalization and Industry 4.0, integrating my interest in Artificial Intelligence research into the development of comprehensive digital systems. I have experience leading technology projects and a strong drive for exploring new technologies. Currently pursuing a Bachelor's in Business Informatics, I aim to complete my degree by mid-2024 and plan for a Master's by 2026.",
  avatarUrl: "https://cloud.thoxh.de/s/GFZc25MgZc8gFa4/download",
  personalWebsiteUrl: "https://www.thoxh.de/",
  contact: {
    email: "mail@thoxh.de",
    tel: "+4915128727949",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Thoxh",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tim-siebert-79a731281/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/Thoxh",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Technische Hochschule Brandenburg",
      degree: "Bachelor's Degree in Business Informatics",
      start: "2021",
      end: "2024",
    },
    {
      school: "von Saldern-Gymnasium Europaschule",
      degree: "A-levels",
      start: "2019",
      end: "2021",
    },
  ],
  work: [
    {
      company: "ZF Getriebe Brandenburg GmbH",
      link: "https://www.zf.com",
      badges: ["Dual Student"],
      title: "Digitalization and Industry 4.0",
      start: "2021",
      end: "",
      description:
        "Development of digital solutions in line with Industry 4.0 to optimize and automate processes. Research into the application of AI to business processes. Technologies: Flutter, Python, Visual Basic, Node.js",
    },
  ],
  skills: [
    "Flutter",
    "Python",
    "Java",
    "SQL",
    "Git",
    "Figma",
    "Adobe Creative Cloud",
    "Wordpress",
  ],
  projects: [
    {
      title: "Websnack",
      techStack: [
        "Side Project",
        "Flutter",
        "Directus",
        "Python",
        "Webflow",
      ],
      description: "A platform to host visualizations of vending machine inventories for operators",
      // logo: Placeholder,
      link: {
        label: "websnack.de",
        href: "https://websnack.de",
      },
    },
  ],
} as const;
