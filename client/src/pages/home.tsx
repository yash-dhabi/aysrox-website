import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";
import { ProgramsServices } from "@/components/sections/ProgramsServices";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import WhatsAppButton from "@/components/sections/WhatsAppButton";
import { SituationsSection } from "@/components/sections/SituationsSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { BoundarySection } from "@/components/sections/BoundarySection";
import { WhenToEngageSection } from "@/components/sections/WhenToEngageSection";
import { FitCheckSection } from "@/components/sections/FitCheckSection";
import { ClosingSection } from "@/components/sections/ClosingSection";
import CoreSection from "@/components/sections/CoreSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      <main>
        <Hero />
        <SituationsSection />
        <CoreSection />
        <WhatWeDoSection />
        {/* <BoundarySection /> */}
        <WhoWeWorkWith />
        <ProgramsServices />
        <ProcessSection />
        {/* <WhenToEngageSection /> */}
        <FitCheckSection />
        <TrustSection />
        <ResultsSection />
        <FAQSection />
        <ClosingSection />
        <ContactSection />
        <WhatsAppButton
          phoneNumber="message/7E46DN2O6RGTF1"
          prefillText="Hi! I'm interested in your service."
        />
      </main>
      <Footer />
    </div>
  );
}
