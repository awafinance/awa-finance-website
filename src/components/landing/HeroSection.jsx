
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-[#e5dcd6] to-[#b38a94] bg-clip-text text-transparent">
              Your Gateway to
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#ff6900] via-[#ef8123] to-[#bf6037] bg-clip-text text-transparent">
              On-Chain Finance
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          One integration. Endless possibilities.{" "}
          <span className="text-[#ff6900] font-medium">Think Plaid for DeFi.</span>
          <br />
          Connect, transact, and scale with the most comprehensive DeFi infrastructure.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#ff6900] to-[#ef8123] hover:from-[#ef8123] hover:to-[#ff6900] text-white px-8 py-4 rounded-full font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://docs.awafinance.com', '_blank')}
          >
            View Docs
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8 py-4 rounded-full font-semibold backdrop-blur-sm transition-all duration-300"
          >
            <Play className="mr-2 w-5 h-5" />
            Explore Products
          </Button>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-10 w-2 h-2 bg-[#ef8123] rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div
            className="absolute top-1/3 right-20 w-1 h-1 bg-[#903939] rounded-full"
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-[#bf6037] rounded-full"
            animate={{
              y: [0, -25, 0],
              opacity: [0.4, 0.9, 0.4]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2
            }}
          />
        </div>
      </div>
    </section>
  );
}
