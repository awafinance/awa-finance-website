
import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { Wallet, Vault, CheckCircle2, ChevronDown } from 'lucide-react';

export default function CustodySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedItems, setExpandedItems] = useState([]); // Start with both retracted

  const custodyOptions = [
    {
      id: 'non-custodial',
      icon: Wallet,
      title: "Non-Custodial Framework",
      description: "Empower your users with self-custody through ERC-4337 Smart Accounts, maintaining full control of their assets while accessing DeFi services.",
      features: [
        "User-controlled private keys",
        "ERC-4337 Smart Accounts",
        "Self-sovereign identity",
        "Maximum security and privacy"
      ],
      gradient: "from-[#ff6900] to-[#ef8123]",
      bg: "from-[#ff6900]/5 to-[#ef8123]/5",
      iconBg: "from-[#ff6900] to-[#ef8123]",
      accentColor: "#ff6900"
    },
    {
      id: 'custodial',
      icon: Vault,
      title: "Custodial Framework",
      description: "Managed custodial model designed for enterprise partners to streamline asset management with institutional-grade security and compliance.",
      features: [
        "Institutional-grade custody",
        "Compliance and reporting",
        "Multi-signature security",
        "24/7 support"
      ],
      gradient: "from-[#4f185a] to-[#903939]",
      bg: "from-[#4f185a]/5 to-[#903939]/5",
      iconBg: "from-[#4f185a] to-[#903939]",
      accentColor: "#903939"
    }
  ];

  const toggleItem = (id) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Flexible to Work with
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#ff6900] via-[#ef8123] to-[#bf6037] bg-clip-text text-transparent">
              Any Custody Model
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Choose the custody model that fits your business
          </p>
        </motion.div>

        {/* Toggle List */}
        <div ref={ref} className="space-y-4">
          {custodyOptions.map((option, index) => {
            const isExpanded = expandedItems.includes(option.id);
            const Icon = option.icon;
            
            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Toggle Item Container */}
                <div
                  className={`relative overflow-hidden rounded-2xl border-2 backdrop-blur-md transition-all duration-300 ${
                    isExpanded
                      ? 'border-white/20 bg-gradient-to-br ' + option.bg + ' shadow-lg'
                      : 'border-white/10 bg-gray-900/30 hover:border-white/15 hover:bg-gray-900/40'
                  }`}
                >
                  {/* Decorative glow for expanded state */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 pointer-events-none"
                    >
                      <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${option.gradient} opacity-10 blur-3xl`}></div>
                    </motion.div>
                  )}

                  {/* Header - Always Visible */}
                  <button
                    onClick={() => toggleItem(option.id)}
                    className="w-full text-left relative z-10"
                  >
                    <div className="flex items-center justify-between p-6 md:p-8">
                      <div className="flex items-center gap-6 flex-1">
                        {/* Icon */}
                        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-r ${option.iconBg} flex items-center justify-center flex-shrink-0 shadow-lg transition-transform duration-300 ${
                          !isExpanded ? 'hover:scale-105' : ''
                        }`}>
                          <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        </div>

                        {/* Title and Description */}
                        <div className="flex-1 min-w-0">
                          <h3 className={`font-bold mb-2 transition-colors duration-300 ${
                            isExpanded ? 'text-white text-2xl md:text-3xl' : 'text-gray-200 text-xl md:text-2xl'
                          }`}>
                            {option.title}
                          </h3>
                          <p className={`text-gray-400 leading-relaxed transition-all duration-300 ${
                            isExpanded ? 'text-base md:text-lg' : 'text-sm md:text-base'
                          }`}>
                            {option.description}
                          </p>
                        </div>
                      </div>

                      {/* Toggle Icon */}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 ml-4"
                      >
                        <ChevronDown className={`w-6 h-6 transition-colors duration-300 ${
                          isExpanded ? 'text-white' : 'text-gray-400'
                        }`} />
                      </motion.div>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 relative z-10">
                          {/* Divider */}
                          <div className="mb-8">
                            <div className={`h-0.5 bg-gradient-to-r ${option.gradient} opacity-30`}></div>
                          </div>

                          {/* Features Grid */}
                          <div className="grid md:grid-cols-2 gap-4">
                            {option.features.map((feature, featureIndex) => (
                              <motion.div
                                key={featureIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + featureIndex * 0.05 }}
                                className="flex items-start bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300"
                              >
                                <CheckCircle2 
                                  className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" 
                                  style={{ color: option.accentColor }}
                                />
                                <span className="text-gray-200 text-base">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
