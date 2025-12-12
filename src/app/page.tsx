import { Navbar } from '@/components/navigation/Navbar';
import { HeroSection } from '@/components/hero/HeroSection';
import { AboutSection } from '@/components/about/AboutSection';
// import { JourneySection } from '@/components/journey/JourneySection';
// import { DifferentiatorSection } from '@/components/differentiator/DifferentiatorSection';
import { ServicesSection } from '@/components/services/ServicesSection';
// import { CaseStudiesSection } from '@/components/case-studies/CaseStudiesSection';
// import { TargetAudienceSection } from '@/components/target-audience/TargetAudienceSection';
// import { CTASection } from '@/components/cta/CTASection';
// import { ContactSection } from '@/components/contact/ContactSection';
// import { Footer } from '@/components/footer/Footer';
import { Nav } from '@/components/Nav';
import { ProcessFlowSection, ProcessFlowExample } from '@/components/process/ProcessFlowSection';
import { PROCESS_STEPS } from '@/constants';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* <JourneySection /> */}
      {/* <DifferentiatorSection /> */}
      <ServicesSection />
      {/* <ProcessFlowSection />
       */}
<ProcessFlowSection   steps={PROCESS_STEPS}  title="Our Process"  subtitle="How we work"/>
      <TestimonialsSection />
      {/* <CaseStudiesSection /> */}
      {/* <TargetAudienceSection /> */}
      {/* <CTASection /> */}
      {/* <ContactSection /> */}
      {/* <Footer /> */}
    </div>
  );
}
