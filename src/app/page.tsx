import HeroSection from '@/components/Ishika/HeroSection';
import MarqueeSection from '@/components/Ishika/MarqueeSection';
import AboutSection from '@/components/Ishika/AboutSection';
import ContributionSection from '@/components/Ishika/ContributionSection';
import ProjectsSection from '@/components/Ishika/ProjectsSection';
import ExperienceEducationSection from '@/components/Ishika/ExperienceEducationSection';
import CertificationsSection from '@/components/Ishika/CertificationsSection';
import SkillsSection from '@/components/Ishika/SkillsSection';
import AchievementsSection from '@/components/Ishika/AchievementsSection';
import ContactFooter from '@/components/Ishika/ContactFooter';

export default function Home() {
  return (
    <main className="bg-[#0C0C0C] text-[#D7E2EA] overflow-x-clip min-h-screen">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ContributionSection />
      <ProjectsSection />
      <ExperienceEducationSection />
      <CertificationsSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactFooter />
    </main>
  );
}
