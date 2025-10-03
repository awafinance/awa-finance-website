
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, ShieldCheck, Zap, Gem, ArrowRight } from 'lucide-react';

export default function KeyFeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Globe,
      title: "Multi-Chain Support",
      description: "Access to multiple blockchains through a single integration, eliminating the need to build and maintain separate connections for each chain.",
      stats: "15+ Chains"
    },
    {
      icon: ShieldCheck,
      title: "Compliance-Ready",
      description: "Built with institutional requirements in mind, including comprehensive reporting tools and risk management parameters.",
      stats: "Audit Ready"
    },
    {
      icon: Zap,
      title: "Fast Integration",
      description: "Reduce time-to-market from months to days with our developer-friendly APIs, comprehensive documentation, and sandbox environment.",
      stats: "< 24 Hours"
    },
    {
      icon: Gem,
      title: "RWA-First",
      description: "Optimized for tokenized real-world assets, with specialized endpoints for stablecoin yield, tokenized treasuries, and more.",
      stats: "Production Ready"
    }
  ];

  return (
    <section className="px-6 lg:px-8 py-20 lg:py-32 relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ff6900]/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Why Choose
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#ff6900] via-[#ef8123] to-[#bf6037] bg-clip-text text-transparent">
              Awa Finance
            </span>
          </h2>
        </motion.div>

        {/* Features - Vertical List Style */}
        <motion.div
          ref={ref}
          className="space-y-6 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative bg-gradient-to-r from-white/5 to-transparent border-l-4 border-[#ff6900] hover:border-[#ef8123] transition-all duration-300 rounded-r-xl overflow-hidden">
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff6900]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  {/* Left side - Icon and Content */}
                  <div className="flex items-start gap-6 flex-1">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#ff6900]/20 to-[#ef8123]/10 border border-[#ff6900]/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <feature.icon className="w-8 h-8 text-[#ff6900]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#ff6900] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Right side - Stats Badge */}
                  <div className="flex items-center gap-4 lg:flex-shrink-0">
                    <div className="px-6 py-3 bg-[#ff6900]/10 border border-[#ff6900]/30 rounded-full">
                      <span className="text-[#ff6900] font-bold text-sm md:text-base whitespace-nowrap">
                        {feature.stats}
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-[#ff6900] group-hover:translate-x-2 transition-all duration-300 hidden lg:block" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA or accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-lg">
            Built for scale. Optimized for enterprise.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

