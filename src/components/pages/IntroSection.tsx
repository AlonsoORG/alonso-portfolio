import Image from "next/image";

export const IntroSection = () => {
  return (
    <div className="flex justify-center flex-col h-screen">
      <div className="flex flex-3 flex-col items-center text-center w-full py-20 gap-10">
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/profile.png"
            alt="Vercel logomark"
            width={186}
            height={186}
          />
          <h1 className="text-8xl font-semibold  tracking-tight">
            Alonso Huayta
          </h1>
        </div>
        <p className="max-w-md text-2xl leading-8">
          Full-Stack Developer passionate about crafting efficient and scalable
          web applications.
        </p>
      </div>
      <div className="flex flex-1 gap-4 text-base font-medium  items-center justify-center relative">
        <div className="absolute -bottom-30">
          <Image
            className=""
            src="/profile_back.png"
            alt="Vercel logomark"
            width={900}
            height={186}
          />
        </div>
        {/* <a */}
        {/*   className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]" */}
        {/*   href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" */}
        {/*   target="_blank" */}
        {/*   rel="noopener noreferrer" */}
        {/* > */}
        {/*   Deploy Now */}
        {/* </a> */}
        {/* <a */}
        {/*   className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]" */}
        {/*   href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" */}
        {/*   target="_blank" */}
        {/*   rel="noopener noreferrer" */}
        {/* > */}
        {/*   Documentation */}
        {/* </a> */}
      </div>
    </div>
  );
};
