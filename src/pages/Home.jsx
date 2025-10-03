
import React, { useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import ParticleBackground from "../components/landing/ParticleBackground";
import NavigationHeader from "../components/landing/NavigationHeader";
import HeroSection from "../components/landing/HeroSection";
import AboutSection from "../components/landing/AboutSection";
import ArchitectureSection from "../components/landing/ArchitectureSection";
import PartnerEcosystem from "../components/landing/PartnerEcosystem";
import UseCasesSection from "../components/landing/UseCasesSection";
import KeyFeaturesSection from "../components/landing/KeyFeaturesSection";
import CustodySection from "../components/landing/CustodySection";
import CustomersSection from "../components/landing/CustomersSection";
import IntegrationSection from "../components/landing/IntegrationSection";
import Footer from "../components/landing/Footer";
import SectionWrapper from "../components/landing/SectionWrapper";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  // Create opacity transform that fades out the particle background
  // Starts fading at 400px scroll, fully faded by 800px
  const particleOpacity = useTransform(
    scrollY,
    [0, 400, 800],
    [1, 0.3, 0]
  );
  
  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
    return unsubscribe;
  }, [scrollY]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#210921] via-black to-[#4f185a] text-white overflow-x-hidden">
      {/* 3D Particle Background with fade out */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ opacity: particleOpacity }}
      >
        <ParticleBackground />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <NavigationHeader isScrolled={isScrolled} />
        
        {/* Hero - No wrapper needed, has its own animations */}
        <HeroSection />
        
        {/* Main Content Sections with consistent spacing */}
        <div className="space-y-32 md:space-y-40">
          <SectionWrapper>
            <AboutSection />
          </SectionWrapper>
          
          <SectionWrapper>
            <ArchitectureSection />
          </SectionWrapper>
          
          <SectionWrapper>
            <PartnerEcosystem />
          </SectionWrapper>
          
          <SectionWrapper>
            <UseCasesSection />
          </SectionWrapper>
          
          <SectionWrapper>
            <KeyFeaturesSection />
          </SectionWrapper>
          
          <SectionWrapper>
            <CustodySection />
          </SectionWrapper>
          
          <SectionWrapper>
            <CustomersSection />
          </SectionWrapper>
          
          <SectionWrapper>
            <IntegrationSection />
          </SectionWrapper>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
