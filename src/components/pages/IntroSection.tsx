import Image from "next/image";

export const IntroSection = () => {
  return (
    <div className="flex justify-center flex-col h-screen">
      <div className="flex flex-3 w-full items-center justify-center md:grid md:grid-cols-2">
        {/* <div className="flex flex-col items-center gap-6"> */}
        {/* <Image */}
        {/*   src="/profile.png" */}
        {/*   alt="Vercel logomark" */}
        {/*   width={186} */}
        {/*   height={186} */}
        {/* /> */}
        {/*   <h1 className="text-8xl font-semibold  tracking-tight"> */}
        {/*     Alonso Huayta */}
        {/*   </h1> */}
        {/* </div> */}
        <p className="w-full max-w-md text-center text-2xl leading-8 md:col-start-2 md:justify-self-start md:text-left">
          Full-Stack Developer passionate about crafting efficient and scalable applications.
        </p>
      </div>
      <div className="relative">
        <p className="max-w-md text-lg leading-8 text-left text-[#73675e] font-bold uppercase">
          Based In Victoria BC
        </p>
        <div className="border-[#ccc] border-2"></div>
        <Image
          className="h-auto w-full py-4"
          src="/alonso_display.svg"
          alt="Alonso Huayta Title"
          width={200}
          height={100}
        />

        {/*   <div className="absolute -bottom-30"> */}
        {/*     <Image */}
        {/*       className="" */}
        {/*       src="/profile_back.png" */}
        {/*       alt="Vercel logomark" */}
        {/*       width={900} */}
        {/*       height={186} */}
        {/**/}
        {/**/}
        {/*     /> */}
        {/*   </div> */}
      </div>
    </div>
  );
};
