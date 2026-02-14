"use client";

import { useState } from "react";
import ExperienceCard from "../ui/experienceCard";

const experiences = [
  {
    id: 1,
    title: "Protectio Full-Stack Developer",
    description:
      "Leading the design of the Protectio API backend, a critical component of the Onboard Wallet infrastructure. Focused on creating a seamless and secure experience for users while ensuring robust functionality and scalability. Integrating with third-party services and internal tools to provide a comprehensive solution for our users.",
    company: "Protectio",
    date: "2024 - Present",
    imageSrc: "/profile.png",
  },
  {
    id: 2,
    title: "Side Project - Healthy Day Mobile App",
    description:
      "Designed and developed a mobile application using Expo React Native that allows users to track their daily habits for android and IOS, set goals, and monitor their progress. Implemented features such as habit reminders, progress tracking, and data visualization to help users stay motivated and achieve their goals.",
    company: "Kiloki",
    date: "2025",
    imageSrc: "/profile.png",
  },

  {
    id: 3,
    title: "Side Project - Healthy Day Mobile App",
    description:
      "Designed and developed a mobile application using Expo React Native that allows users to track their daily habits for android and IOS, set goals, and monitor their progress. Implemented features such as habit reminders, progress tracking, and data visualization to help users stay motivated and achieve their goals.",
    company: "Kiloki",
    date: "2025",
    imageSrc: "/profile.png",
  },
];

export const WorkSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="flex justify-center flex-col h-screen ">
      <div className="flex flex-col justify-center items-center text-center h-full w-full gap-10 ">
        <h2 className="text-6xl font-semibold tracking-tight">
          Work & Projects
        </h2>

        <div className="max-w-2xl space-y-6">
          <p className="text-xl leading-8">
            Here are some of the projects I&apos;ve worked on
          </p>
        </div>

        <div className="w-full overflow-x-auto scrollbar-elegant scroll-smooth bg-amber-800">
          <div className="relative min-w-max h-[800px] flex items-center justify-start gap-8 px-8 md:px-16">
            {experiences.map((experience, index) => {
              const isHovered = hoveredCard === experience.id;

              return (
                <div
                  key={experience.id}
                  className="relative transition-all duration-500 ease-out flex-shrink-0"
                  style={{
                    transform: isHovered
                      ? "scale(1.05) translateY(-8px)"
                      : "scale(1)",
                    zIndex: isHovered ? 50 : experiences.length - index,
                    width: "500px",
                  }}
                  onMouseEnter={() => setHoveredCard(experience.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <ExperienceCard
                    id={experience.id}
                    title={experience.title}
                    description={experience.description}
                    company={experience.company}
                    date={experience.date}
                    imageSrc={experience.imageSrc}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
