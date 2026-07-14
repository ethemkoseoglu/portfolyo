import { HeroSection } from "@/components/hero/HeroSection";
import { LocalizedMarquee } from "@/components/ui/LocalizedMarquee";
import { PremiumImageBand } from "@/components/showcase/PremiumImageBand";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LocalizedMarquee />
      <PremiumImageBand />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <LocalizedMarquee />
      <ContactSection />
    </>
  );
}
