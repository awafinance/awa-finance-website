import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, ArrowLeftRight, PiggyBank, LineChart, Code2, Package, Puzzle } from 'lucide-react';

export default function ArchitectureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: PiggyBank,
      title: "Yield",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: ArrowLeftRight,
      title: "Swaps",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: TrendingUp,
      title: "Lending",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      icon: LineChart,
      title: "Stocks",
      gradient: "from-purple-600 to-purple-700"
    }
  ];

  const chains = [
    { name: "Ethereum", color: "#627EEA", logo: "Ξ" },
    { name: "Polygon", color: "#8247E5", logo: "◆" },
    { name: "Arbitrum", color: "#28A0F0", logo: "◊" },
    { name: "Optimism", color: "#FF0420", logo: "◯" },
    { name: "Base", color: "#0052FF", logo: "▲" },
    { name: "Avalanche", color: "#E84142", logo: "▼" },
    { name: "BSC", color: "#F3BA2F", logo: "◆" },
    { name: "Solana", color: "#14F195", logo: "◬" },
    { name: "Polkadot", color: "#E6007A", logo: "●" },
    { name: "Cosmos", color: "#6F7390", logo: "⬢" },
  ];

  const protocols = [
    { name: "Aave" },
    { name: "Compound" },
    { name: "Uniswap" },
    { name: "Curve" },
    { name: "Balancer" },
    { name: "Yearn" },
    { name: "MakerDAO" },
    { name: "1inch" },
    { name: "0x" },
    { name: "CoW Protocol" },
  ];

  return (
    <section id="architecture" className="relative px-6 lg:px-8 py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff6900]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-[#ff6900]/10 border border-[#ff6900]/30 rounded-full text-[#ff6900] text-sm font-semibold">
              Platform Architecture
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              The AWA Finance Platform
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Built on a robust 4-layer architecture
          </motion.p>
        </div>

        {/* Architecture Diagram */}
        <div className="relative max-w-6xl mx-auto">
          {/* Top Layer - AWA Finance Platform */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mb-8"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md border-2 border-[#ff6900] rounded-3xl p-8 md:p-12 shadow-2xl shadow-[#ff6900]/20">
              <div className="text-center">
                
                {/* 3 Subdivisions: API, SDK, Widget */}
                <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="relative group"
                  >
                    <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#ff6900]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6900]/10">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff6900] to-[#ef8123] flex items-center justify-center mb-4 mx-auto">
                        <Code2 className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-white font-semibold text-lg text-center">API</h4>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="relative group"
                  >
                    <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#ff6900]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6900]/10">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff6900] to-[#ef8123] flex items-center justify-center mb-4 mx-auto">
                        <Package className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-white font-semibold text-lg text-center">SDK</h4>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="relative group"
                  >
                    <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#ff6900]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6900]/10">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff6900] to-[#ef8123] flex items-center justify-center mb-4 mx-auto">
                        <Puzzle className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-white font-semibold text-lg text-center">Widget</h4>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff6900] via-[#ef8123] to-[#ff6900] rounded-3xl blur-2xl opacity-10 -z-10" />
          </motion.div>

          {/* Platform Description - Outside Container */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center text-gray-300 text-base md:text-lg mb-8"
          >
            Smart Routing • Risk Management • Compliance Tools
          </motion.p>

          {/* Connection Lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="relative h-16 mb-8"
          >
            {/* Vertical lines from platform to services */}
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className="absolute top-0 w-0.5 h-full bg-gradient-to-b from-[#ff6900]/50 to-transparent"
                style={{
                  left: `${(index + 0.5) * 25}%`,
                  transform: 'translateX(-50%)'
                }}
              />
            ))}
          </motion.div>

          {/* Middle Layer - Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#ff6900]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6900]/10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 mx-auto`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg text-center">{service.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Connection Lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="relative h-16 mb-8"
          >
            {/* Single vertical line from platform to protocols */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#ff6900]/50 to-transparent" />
          </motion.div>

          {/* Bottom Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="text-center mb-6"
          >
            <span className="text-gray-400 text-sm font-semibold tracking-wider uppercase">
              Chains & Protocols
            </span>
          </motion.div>

          {/* Bottom Layer - Chains */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="relative"
          >
            {/* Chains Container */}
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-white/5 rounded-3xl p-8">
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {chains.map((chain, index) => (
                  <motion.div
                    key={chain.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 1.5 + index * 0.05 }}
                    className="group relative"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      style={{
                        backgroundColor: `${chain.color}20`,
                        borderColor: chain.color
                      }}
                    >
                      <span
                        className="text-xl font-bold"
                        style={{ color: chain.color }}
                      >
                        {chain.logo}
                      </span>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <span className="text-xs text-gray-400 whitespace-nowrap bg-gray-900 px-2 py-1 rounded">
                        {chain.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6" />

              {/* Protocols Container */}
              <div className="flex flex-wrap justify-center gap-3">
                {protocols.map((protocol, index) => (
                  <motion.div
                    key={protocol.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 1.8 + index * 0.05 }}
                  >
                    <div className="px-4 py-2 bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-white/10 rounded-full hover:border-[#ff6900]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6900]/10">
                      <span className="text-gray-300 text-sm font-medium">{protocol.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Architecture Layers Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              layer: "Layer 01",
              title: "Protocol Aggregation",
              description: "Connect to Aave, Compound, Uniswap, Curve, Maker and more across Ethereum, Base, Arbitrum, Polygon, Avalanche, and Solana."
            },
            {
              layer: "Layer 02",
              title: "RWA Optimization Engine",
              description: "Specialized endpoints for stablecoin yield, tokenized securities lending, automated treasury management, and cross-protocol strategies."
            },
            {
              layer: "Layer 03",
              title: "Business Logic Layer",
              description: "Built-in compliance tools, risk management, smart routing for best execution, and gas optimization algorithms."
            },
            {
              layer: "Layer 04",
              title: "API & SDKs",
              description: "RESTful APIs, SDKs for major languages, webhook system for async operations, and comprehensive sandbox environment."
            }
          ].map((item, index) => (
            <motion.div
              key={item.layer}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 2.1 + index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#ff6900]/30 transition-all duration-300"
            >
              <div className="text-[#ff6900] text-sm font-semibold mb-2">{item.layer}</div>
              <h4 className="text-white font-bold text-lg mb-3">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
