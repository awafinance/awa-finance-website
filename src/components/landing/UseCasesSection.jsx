
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Shuffle, CreditCard, Building2 } from 'lucide-react';

export default function UseCasesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const useCases = [
    {
      icon: TrendingUp,
      title: "Yield & Savings",
      description: "Unlock stablecoin yield and offer DeFi-powered savings accounts across chains securely and effortlessly. Access vetted protocols with institutional-grade security, transparent yield sources, and no smart contract maintenance.",
      gradient: "from-[#ff6900] to-[#ef8123]"
    },
    {
      icon: Shuffle,
      title: "Cross-Chain Swaps",
      description: "Seamless swaps across networks with deep liquidity and long-tail asset support — without the overhead of managing bridges or liquidity fragmentation.",
      gradient: "from-[#ef8123] to-[#bf6037]"
    },
    {
      icon: CreditCard,
      title: "Backed-Crypto Loans",
      description: "Lend and borrow with full transparency. Tap into overcollateralized loans secured by crypto — without counterparty risks or rehypothecation.",
      gradient: "from-[#bf6037] to-[#903939]"
    },
    {
      icon: Building2,
      title: "Tokenised Stocks",
      description: "Access traditional equity markets through blockchain technology. Trade tokenized securities with the transparency and efficiency of DeFi infrastructure.",
      gradient: "from-[#903939] to-[#591737]"
    }
  ];

  return (
    <section id="use-cases" className="px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              One Integration.
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#ff6900] via-[#ef8123] to-[#bf6037] bg-clip-text text-transparent">
              Multiple DeFi Use Cases.
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From yield to swaps to tokenised stocks — unlock trusted strategies across chains.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#ff6900]/70 transition-all duration-500 group hover:scale-105 h-full">
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${useCase.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#ff6900] transition-colors duration-300">
                    {useCase.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

