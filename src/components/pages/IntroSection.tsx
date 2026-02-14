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
      </div>
    </div>
  );
};
