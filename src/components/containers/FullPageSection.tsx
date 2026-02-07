import Image from "next/image";
export default function FullPageSection({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen w-full max-w-3xl flex-col  justify-between py-32 px-16 sm:items-start">
      {/* <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start"> */}
      {/* <Image */}
      {/*   className="dark:invert" */}
      {/*   src="/next.svg" */}
      {/*   alt="Next.js logo" */}
      {/*   width={100} */}
      {/*   height={20} */}
      {/*   priority */}
      {/* /> */}
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-8xl font-semibold  tracking-tight">
          Alonso Huayta
        </h1>
        <p className="max-w-md text-2xl leading-8">
          Currently a lead product designer at Nestcoin - Onboard Wallet Team.
          Experimenting with Behind the Ship and other hobbies. More about my
          work
        </p>
      </div>
      <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
        <a
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={16}
            height={16}
          />
          Deploy Now
        </a>
        <a
          className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </a>
      </div>
    </section>
  );
}
