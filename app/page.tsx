import FullPageSection from "@/src/components/containers/FullPageSection";
import { IntroSection } from "@/src/components/pages/IntroSection";
import { AboutSection } from "@/src/components/pages/AboutSection";
import { WorkSection } from "@/src/components/pages/WorkSection";
import { SkillsSection } from "@/src/components/pages/SkillsSection";
import { ContactSection } from "@/src/components/pages/ContactSection";
import { Sidebar } from "@/src/components/navigation/Sidebar";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col font-sans">
      <video
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/scene.webm" type="video/webm" />
      </video>
      <Sidebar />
      <div className="sm:pl-24 md:pl-32 lg:pl-0">
        <FullPageSection id="intro">
          <IntroSection />
        </FullPageSection>

        <FullPageSection id="about">
          <AboutSection />
        </FullPageSection>

        <FullPageSection id="work" className="h-auto!">
          <WorkSection />
        </FullPageSection>

        <FullPageSection id="skills" className="h-auto!">
          <SkillsSection />
        </FullPageSection>

        <FullPageSection id="contact">
          <ContactSection />
        </FullPageSection>
      </div>
    </main>
  );
}
