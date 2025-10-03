
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, AlertCircle, Shield as ShieldAlert, Users, TrendingUp, CheckCircle, Shield, Blocks } from 'lucide-react';

export default function AboutSection() {
  const headerRef = useRef(null);
  const problemRef = useRef(null);
  const solutionRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isProblemInView = useInView(problemRef, { once: true, margin: "-100px" });
  const isSolutionInView = useInView(solutionRef, { once: true, margin: "-200px", amount: 0.3 });

  return (
    <section id="about" className="py-20 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Headline */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              About Us
            </span>
          </h2>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="max-w-5xl mx-auto mb-32 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            We abstract DeFi complexity into production-ready financial APIs, enabling businesses to embed crypto financial services through{" "}
            <span className="text-[#ff6900] font-semibold">one simple integration</span>.
          </p>
        </motion.div>

        {/* PROBLEM SECTION */}
        <motion.div
          ref={problemRef}
          className="mb-32"
          initial={{ opacity: 0, y: 50 }}
          animate={isProblemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold uppercase tracking-wider">
                The Problem
              </span>
            </div>

            {/* Title */}
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Building DeFi integrations
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                takes months
              </span>
            </h3>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
              Complex protocols, security risks, and constant maintenance drain your engineering resources
            </p>

            {/* Problem Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
              {[
                { icon: AlertCircle, text: 'Smart contract audits cost $50k+' },
                { icon: Clock, text: 'Waste of protocol integration' },
                { icon: ShieldAlert, text: 'Continuous security monitoring' },
                { icon: Users, text: 'Multiple blockchain expertise needed' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl border border-red-500/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isProblemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base text-gray-300 text-left">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SOLUTION SECTION */}
        <motion.div
          ref={solutionRef}
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isSolutionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Glowing background effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -z-10" />

            {/* Badge */}
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold uppercase tracking-wider">
                Our Solution
              </span>
            </div>

            {/* Title */}
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                One Unified{" "}
              </span>
              <span className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 bg-clip-text text-transparent">
                API
              </span>
            </h3>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
              Access all DeFi protocols across multiple chains through one simple integration
            </p>

            {/* Solution Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
              {[
                { icon: TrendingUp, text: 'Reduced time to market' },
                { icon: CheckCircle, text: 'Multi-chain & Multi-protocol' },
                { icon: Shield, text: 'Institutional-grade security' },
                { icon: Blocks, text: 'Widget for simple UI Integration' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl border border-green-500/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isSolutionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base text-gray-300 text-left">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
