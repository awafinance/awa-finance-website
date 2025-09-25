
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Monitor, Globe, CheckCircle2 } from 'lucide-react';

export default function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const solutions = [
    {
      icon: Smartphone,
      title: "Wallets & Exchanges",
      description: "Enable seamless DeFi integrations for your users with our comprehensive API suite",
      features: ["Multi-chain support", "Real-time pricing", "Advanced analytics", "White-label solutions"],
      gradient: "from-[#4f185a] to-[#903939]"
    },
    {
      icon: Monitor,
      title: "Fintechs",
      description: "Bridge traditional finance with DeFi through our institutional-grade infrastructure",
      features: ["Regulatory compliance", "Risk management", "Liquidity optimization", "Custom integrations"],
      gradient: "from-[#591737] to-[#b38a94]"
    },
    {
      icon: Globe,
      title: "Financial Institutions",
      description: "Enterprise solutions for banks and financial institutions entering the DeFi space",
      features: ["Enterprise security", "Audit trails", "Institutional custody", "24/7 support"],
      gradient: "from-[#903939] to-[#4f185a]"
    }
  ];

  return (
    <section id="solutions" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
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

        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 group hover:scale-105 h-full">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#b38a94] transition-colors duration-300">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
