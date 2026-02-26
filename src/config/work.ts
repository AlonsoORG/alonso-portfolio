import { IExperience } from "../types/work";

export const experiences: IExperience[] = [
  {
    id: 1,
    title: "Protectio Full-Stack Developer",
    description:
      "Led development of scalable full-stack applications, supporting APIs and user/admin interfaces with Next.js and Express. Converted Figma designs into production-ready components, integrated external platforms (Salesforce, Zoom, Google Analytics, OpenAI), established CI/CD pipelines, and ensured reliability through unit, integration, and E2E testing of key workflows. ",
    company: "Protectio",
    date: "2024 - Present",
    imageSrc: "/work/protectio.png",
    detailPageUrl: "/work/protectio", // This card has a detail page
    fulldescription: "",
    techStack: [
      "Next.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Google Cloud Platform",
      "Salesforce API",
      "Zoom API",
      "Google Analytics API",
      "OpenAI API",
    ],
  },
  {
    id: 2,
    title: "Side Project - Healthy Day Mobile App",
    description:
      "Designed and developed a mobile application using Expo React Native that allows users to track their daily habits for android and IOS, set goals, and monitor their progress. Implemented features such as habit reminders, progress tracking, and data visualization to help users stay motivated and achieve their goals.",
    company: "Kiloki",
    date: "2025",
    imageSrc: "/work/healthyday.png",

    techStack: ["Next.js"],
    // No detailPageUrl - this card won't have a detail page
  },

  // {
  //   id: 3,
  //   title: "Side Project - Healthy Day Mobile App",
  //   description:
  //     "Designed and developed a mobile application using Expo React Native that allows users to track their daily habits for android and IOS, set goals, and monitor their progress. Implemented features such as habit reminders, progress tracking, and data visualization to help users stay motivated and achieve their goals.",
  //   company: "Kiloki",
  //   date: "2025",
  //   imageSrc: "/profile.png",
  // },
  //
  // {
  //   id: 4,
  //   title: "Side Project - Healthy Day Mobile App",
  //   description:
  //     "Designed and developed a mobile application using Expo React Native that allows users to track their daily habits for android and IOS, set goals, and monitor their progress. Implemented features such as habit reminders, progress tracking, and data visualization to help users stay motivated and achieve their goals.",
  //   company: "Kiloki",
  //   date: "2025",
  //   imageSrc: "/profile.png",
  // },
];
