
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ProductShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Mobile Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative max-w-sm mx-auto">
              {/* Phone Frame */}
              <div className="bg-gray-900 rounded-[3rem] p-4 shadow-2xl shadow-orange-500/20">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-1">
                  <div className="bg-gradient-to-br from-[#4f185a]/50 to-[#903939]/50 rounded-[2rem] overflow-hidden">
                    {/* Screen Content */}
                    <div className="p-6 text-white">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold">Portfolio</h3>
                        <div className="w-6 h-6 bg-[#ff6900] rounded-full"></div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold mb-1">$24,837.92</div>
                          <div className="text-green-400 text-sm">+12.5% this week</div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {["Ethereum", "Bitcoin", "Polygon"].map((crypto, i) => (
                          <div key={crypto} className="flex items-center justify-between bg-white/5 rounded-xl p-3">
                            <div className="flex items-center">
                              <div className={`w-8 h-8 rounded-full mr-3 ${
                                i === 0 ? 'bg-[#ff6900]' : i === 1 ? 'bg-orange-500' : 'bg-purple-500'
                              }`}></div>
                              <span className="font-medium">{crypto}</span>
                            </div>
                            <div className="text-right">
                              <div className="font-medium">${(1000 + i * 500).toLocaleString()}</div>
                              <div className="text-sm text-green-400">+5.2%</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-[#ef8123] rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-[#903939] rounded-full"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Embed Custom
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#ff6900] via-[#ef8123] to-[#bf6037] bg-clip-text text-transparent">
                Earn Products
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Give your users access to the best yield opportunities in DeFi through our 
              white-label solutions. Seamlessly integrate earning products that match your 
              brand and user experience.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Real-time yield optimization",
                "Multi-protocol aggregation", 
                "Automated risk management",
                "Custom UI components"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-white mr-4 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#ff6900] to-[#ef8123] hover:from-[#ef8123] hover:to-[#ff6900] text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-orange-500/25 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
