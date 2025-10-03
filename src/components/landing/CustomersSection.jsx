
import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, Monitor, Globe, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CustomersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(1); // Start with Fintechs (middle)

  const segments = [
    {
      icon: Smartphone,
      title: "Wallets & Exchanges",
      description: "Enable seamless DeFi integrations for your users with our comprehensive API suite",
      features: [
        "Multi-chain support",
        "Real-time pricing",
        "Advanced analytics",
        "White-label solutions"
      ],
      gradient: "from-[#4f185a] to-[#903939]"
    },
    {
      icon: Monitor,
      title: "Fintechs",
      description: "Bridge traditional finance with DeFi through our institutional-grade infrastructure",
      features: [
        "Regulatory compliance",
        "Risk management",
        "Liquidity optimization",
        "Custom integrations"
      ],
      gradient: "from-[#ff6900] to-[#ef8123]"
    },
    {
      icon: Globe,
      title: "Financial Institutions",
      description: "Enterprise solutions for banks and financial institutions entering the DeFi space",
      features: [
        "Enterprise security",
        "Audit trails",
        "Institutional custody",
        "24/7 support"
      ],
      gradient: "from-[#903939] to-[#4f185a]"
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? segments.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === segments.length - 1 ? 0 : prev + 1));
  };

  const getPosition = (index) => {
    const diff = index - currentIndex;
    if (diff === 0) return 'center';
    if (diff === -1 || (currentIndex === 0 && index === segments.length - 1)) return 'left';
    if (diff === 1 || (currentIndex === segments.length - 1 && index === 0)) return 'right';
    return 'hidden';
  };

  return (
    <section id="customers" className="py-20 lg:py-32 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Built for Everyone
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Tailored solutions for different segments of the financial ecosystem
          </p>
        </motion.div>

        {/* Carousel */}
        <div ref={ref} className="relative h-[700px] sm:h-[650px] md:h-[600px] lg:h-[580px] flex items-center justify-center">
          <AnimatePresence initial={false}>
            {segments.map((segment, index) => {
              const position = getPosition(index);
              if (position === 'hidden') return null;

              const variants = {
                center: {
                  x: '-50%',
                  scale: window.innerWidth < 640 ? 1 : 1.1, // Reduce scale on mobile
                  opacity: 1,
                  zIndex: 3,
                  filter: 'blur(0px)'
                },
                left: {
                  x: window.innerWidth < 640 ? '-150%' : '-135%', // Move further on mobile to hide
                  scale: window.innerWidth < 640 ? 0.7 : 0.8,
                  opacity: window.innerWidth < 640 ? 0 : 0.4, // Hide on mobile
                  zIndex: 1,
                  filter: 'blur(0.5px)'
                },
                right: {
                  x: window.innerWidth < 640 ? '50%' : '35%', // Move further on mobile to hide
                  scale: window.innerWidth < 640 ? 0.7 : 0.8,
                  opacity: window.innerWidth < 640 ? 0 : 0.4, // Hide on mobile
                  zIndex: 1,
                  filter: 'blur(0.5px)'
                }
              };

              return (
                <motion.div
                  key={index}
                  className="absolute top-0 left-1/2 w-full max-w-lg px-2 sm:px-4"
                  variants={variants}
                  animate={position}
                  initial="center"
                  transition={{
                    duration: 0.7,
                    type: "spring",
                    stiffness: 100,
                    damping: 25
                  }}
                >
                  <div className={`relative overflow-hidden rounded-2xl ${position === 'center' ? 'bg-[#222222] border-white/30' : 'bg-[#1a1a1a] border-white/10'} border p-6 sm:p-8 md:p-10 transition-all duration-500`}>
                    {/* Icon - With Accent Color */}
                    <motion.div
                      className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-[#ff6900]/10 border border-[#ff6900]/30 flex items-center justify-center mb-4 sm:mb-6"
                      animate={position === 'center' ? { scale: [1, 1.02, 1] } : {}}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <segment.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff6900]" />
                    </motion.div>

                    {/* Title - With Accent Color */}
                    <h3 className="relative text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3 sm:mb-4">
                      {segment.title}
                    </h3>

                    {/* Description */}
                    <p className="relative text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
                      {segment.description}
                    </p>

                    {/* Features - Minimal Design */}
                    <div className="relative space-y-3">
                      {segment.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          className="flex items-start text-gray-200 transition-all duration-200"
                          initial={{ opacity: 0, x: -10 }}
                          animate={position === 'center' ? { opacity: 1, x: 0 } : { opacity: 0.5, x: -10 }}
                          transition={{ delay: featureIndex * 0.05 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm md:text-base">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Navigation Arrows - Minimal Design */}
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between items-center px-2 sm:px-0 lg:px-4 z-10 pointer-events-none">
            <motion.button
              onClick={handlePrevious}
              className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center justify-center backdrop-blur-sm transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
            </motion.button>

            <motion.button
              onClick={handleNext}
              className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center justify-center backdrop-blur-sm transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
            </motion.button>
          </div>

          {/* Dots Indicator - Minimal Design */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {segments.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-white/20 hover:bg-white/40 w-1.5'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
