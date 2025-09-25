
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Menu, 
  X,
  Wallet,
  Send,
  TrendingUp,
  Building2,
  CreditCard,
  Settings,
  ArrowUpRight,
  ArrowDownRight,
  Smartphone,
  Monitor,
  Globe
} from "lucide-react";

import ParticleBackground from "../components/landing/ParticleBackground";
import NavigationHeader from "../components/landing/NavigationHeader";
import HeroSection from "../components/landing/HeroSection";
import ProductsGrid from "../components/landing/ProductsGrid";
import PartnerEcosystem from "../components/landing/PartnerEcosystem";
import SolutionsSection from "../components/landing/SolutionsSection";
import ProductShowcase from "../components/landing/ProductShowcase";
import StatsSection from "../components/landing/StatsSection";
import Footer from "../components/landing/Footer";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
    return unsubscribe;
  }, [scrollY]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#210921] via-black to-[#4f185a] text-white overflow-x-hidden">
      {/* 3D Particle Background */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <NavigationHeader isScrolled={isScrolled} />
        <HeroSection />
        <StatsSection />
        <ProductsGrid />
        <PartnerEcosystem />
        <SolutionsSection />
        <ProductShowcase />
        <Footer />
      </div>
    </div>
  );
}
