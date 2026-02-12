export const AboutSection = () => {
  return (
    <div className="flex justify-center flex-col h-screen">
      <div className="flex flex-col items-center text-center w-full py-20 gap-10">
        <h2 className="text-6xl font-semibold tracking-tight">About Me</h2>
        <div className="max-w-2xl space-y-6">
          <p className="text-xl leading-8">
            I&apos;m a web developer who enjoys working on new projects,
            exploring different tools and areas of development, and takes pride
            in my work and curiosity to keep learning.
          </p>
          <p className="text-xl leading-8">
            Currently a Full-Stack Developer at Protectio, I also take on
            occasional client work and build side projects such as tools for my
            favorite games, while actively contributing to open-source projects
            I enjoy.
          </p>
        </div>
      </div>
    </div>
  );
};
