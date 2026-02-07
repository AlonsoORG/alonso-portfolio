import FullPageSection from "@/src/components/containers/FullPageSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen font-sans items-center  ">
      <main className="flex min-h-screen font-sans items-center w-screen justify-center">
        <FullPageSection />
      </main>
    </div>
  );
}
