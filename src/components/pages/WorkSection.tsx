"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
    detailPageUrl: "/work/protectio", // This card has a detail page
  },
  {
    id: 2,
    title: "Side Project - Healthy Day Mobile App",
    description:
      "Designed and developed a mobile application using Expo React Native that allows users to track their daily habits for android and IOS, set goals, and monitor their progress. Implemented features such as habit reminders, progress tracking, and data visualization to help users stay motivated and achieve their goals.",
    company: "Kiloki",
    date: "2025",
    imageSrc: "/profile.png",
    // No detailPageUrl - this card won't have a detail page
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

  {
    id: 4,
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
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  // Responsive card dimensions
  const CARD_WIDTH = isMobile ? 300 : 500;
  const PEEK_WIDTH = isMobile ? 100 : 350; // Amount of card visible when stacked

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Restore scroll position when returning from detail page
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem(
      "workSectionScrollPosition",
    );
    if (savedScrollPosition) {
      const scrollY = parseInt(savedScrollPosition, 10);
      window.scrollTo({ top: scrollY, behavior: "instant" });
      sessionStorage.removeItem("workSectionScrollPosition");
    }
  }, []);

  const handleCardClick = (experience: (typeof experiences)[0]) => {
    if (experience.detailPageUrl) {
      // Save current scroll position before navigating
      sessionStorage.setItem(
        "workSectionScrollPosition",
        window.scrollY.toString(),
      );
      router.push(experience.detailPageUrl);
    } else {
      setSelectedCard(selectedCard === experience.id ? null : experience.id);
    }
  };

  return (
    <div className="flex justify-center flex-col min-h-[150vh] py-20">
      <div className="flex flex-col justify-center items-center text-center w-full gap-10 pb-20">
        <h2 className="text-6xl font-semibold tracking-tight">
          Work & Projects
        </h2>

        <div className="max-w-2xl space-y-6">
          <p className="text-xl leading-8">
            Here are some of the projects I&apos;ve worked on
          </p>
        </div>

        <div className="w-full max-w-6xl">
          <div className="w-full overflow-x-auto scrollbar-elegant scroll-smooth overflow-y-hidden">
            <div className="relative h-[600px] md:h-[800px] flex items-center justify-center  px-8 md:px-16">
              {experiences.map((experience, index) => {
                const isActive =
                  hoveredCard === experience.id ||
                  selectedCard === experience.id;
                const activeIndex = experiences.findIndex(
                  (exp) => exp.id === (hoveredCard || selectedCard),
                );

                // Calculate position based on whether there's an active card
                let translateX = 0;
                if (activeIndex !== -1) {
                  if (index < activeIndex) {
                    // Cards before active card
                    translateX = index * PEEK_WIDTH;
                  } else if (index === activeIndex) {
                    // Active card
                    translateX = activeIndex * PEEK_WIDTH;
                  } else {
                    // Cards after active card
                    translateX =
                      activeIndex * PEEK_WIDTH +
                      CARD_WIDTH +
                      (index - activeIndex - 1) * PEEK_WIDTH;
                  }
                } else {
                  // No active card, stack them normally
                  translateX = index * PEEK_WIDTH;
                }

                return (
                  <div
                    key={experience.id}
                    className="absolute transition-all duration-500 ease-out cursor-pointer"
                    style={{
                      transform: isActive
                        ? `translateX(${translateX}px) scale(1.05) translateY(-8px)`
                        : `translateX(${translateX}px)`,
                      zIndex: isActive ? 50 : experiences.length - index,
                      width: `${CARD_WIDTH}px`,
                    }}
                    onMouseEnter={() => setHoveredCard(experience.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => handleCardClick(experience)}
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
    </div>
  );
};
