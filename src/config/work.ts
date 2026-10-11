import { IExperience } from "../types/work";

export const experiences: IExperience[] = [
  {
    id: 1,
    title: "Protectio Full-Stack Developer",
    description:
      "Led development of scalable applications, supporting APIs and user/admin interfaces with Next.js and Express. Converted Figma designs into production-ready components, integrated external platforms (Salesforce, Zoom, Google Analytics, OpenAI), established CI/CD pipelines, and ensured reliability through unit, integration, and E2E testing of key workflows. ",
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
      "Redux",
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

    techStack: [
      "Nest.js",
      "Expo.js",
      "React Native",
      "TypeScript",
      "Firebase",
      "Redux",
    ],
  },

  {
    id: 3,
    title: "Full-Stack Developer",
    detailPageUrl: "/work/enrollmentresource", // This card has a detail page
    description:
      // "Designed and developed a mobile application using Expo React Native that allows users to track their daily habits for android and IOS, set goals, and monitor their progress. Implemented features such as habit reminders, progress tracking, and data visualization to help users stay motivated and achieve their goals.",
      `

    - Worked on SEO and marketing for multiple clients with Semrush, Google Search Console, Google Analytics and
      Google Tag Manager, growing organic traﬀic and running marketing tests.
    - Tracked traﬀic across client sites with more than 1 million views a day.
    - Built client websites in WordPress and Next.js, including home sites and landing pages.
    - Worked on Google and social media marketing improvements for client career schools.
    - Built Puppeteer, Node.js and OpenAI crawler services that monitored website content across multiple clients,
      evaluating AI-generated copy for accuracy and consistency and flagging discrepancies for human review.
    - Developed services for dynamic script injection and event-based triggers on multi-client platforms.
    - Owned deployments independently across client environments with GitHub Actions, Docker and AWS.`,
    company: "Enrollment Resources",
    date: "2025",
    imageSrc: "/work/er.png",

    techStack: [
      "Nest.js",
      "Expo.js",
      "React Native",
      "TypeScript",
      "Firebase",
      "Redux",
    ],
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
