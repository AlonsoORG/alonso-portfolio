import FullPageSection from "@/src/components/containers/FullPageSection";
import { IntroSection } from "@/src/components/pages/IntroSection";
import { AboutSection } from "@/src/components/pages/AboutSection";
import { WorkSection } from "@/src/components/pages/WorkSection";
import { SkillsSection } from "@/src/components/pages/SkillsSection";
import { ContactSection } from "@/src/components/pages/ContactSection";
import { Sidebar } from "@/src/components/navigation/Sidebar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen font-sans w-full">
      <Sidebar />
      {/**/}
      <FullPageSection id="intro">
        <IntroSection />
      </FullPageSection>

      <FullPageSection id="about">
        <AboutSection />
      </FullPageSection>

      <FullPageSection id="work" className="!h-auto">
        <WorkSection />
      </FullPageSection>

      <FullPageSection id="skills" className="!h-auto">
        <SkillsSection />
      </FullPageSection>

      <FullPageSection id="contact">
        <ContactSection />
      </FullPageSection>
    </main>
  );
}
