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
];

export const WorkSection = () => {
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
        <div className="max-w-4xl grid gap-8 md:grid-cols-2">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              id={experience.id}
              title={experience.title}
              description={experience.description}
              company={experience.company}
              date={experience.date}
              imageSrc={experience.imageSrc}
            />
          ))}
          {/* <ExperienceCard /> */}
          {/* <ExperienceCard /> */}
        </div>
      </div>
    </div>
  );
};
