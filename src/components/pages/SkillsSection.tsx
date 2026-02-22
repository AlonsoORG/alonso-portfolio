export const SkillsSection = () => {
  const skills = [
    {
      category: "Design & SEO",
      items: [
        "Figma",
        "Sketch",
        "Google Analytics",
        "SEO Best Practices",
        "Google Tag Manager",
      ],
    },
    {
      category: "Development",
      items: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Express",
        "Nest.js",
        "SQL and No SQL Databases",
      ],
    },
    {
      category: "Testing & Integration",
      items: [
        "Unit Testing",
        "Integration Testing",
        "CI/CD Pipelines",
        "E2E Testing",
        "Jest",
      ],
    },
    {
      category: "Tools",
      items: ["Git", "Notion", "Jira", "Vim", "Docker", "GitHub Actions"],
    },
  ];

  return (
    <div className="flex justify-center flex-col min-h-screen h-auto">
      <div className="flex flex-col items-center text-center w-full py-20 gap-10">
        <h2 className="text-6xl font-semibold tracking-tight">Skills</h2>

        <div className="max-w-2xl space-y-6">
          <p className="text-xl leading-8">
            Here are some of my favorite the skills and tools I&apos;ve acquired
            and honed over the years:
          </p>
        </div>
        <div className="max-w-4xl grid gap-8 md:grid-cols-2 w-full">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="text-left">
              <h3 className="text-2xl font-semibold mb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-lg text-foreground/80">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
