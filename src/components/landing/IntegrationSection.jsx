
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function IntegrationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const codeSnippet = `const url = 'https://api.awafinance.com/savings/deposit/quote';
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>'},
  body: undefined
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="integration" className="relative px-6 lg:px-8 pt-20 lg:pt-32 pb-32 lg:pb-48">
      {/* Subtle orange glow from bottom right extending upward */}
      <div className="absolute bottom-0 right-0 left-0 h-[200vh] bg-gradient-to-tl from-[#ff9955]/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Header Content */}
        <div ref={ref} className="text-center mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-[#ff6900]/10 border border-[#ff6900]/30 rounded-full text-[#ff6900] text-sm font-semibold">
              No DeFi complexity
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ship new financial products
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#ff6900] via-[#ef8123] to-[#bf6037] bg-clip-text text-transparent">
              in minutes
            </span>
          </motion.h2>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#ff6900] to-[#ef8123] hover:from-[#ef8123] hover:to-[#ff6900] text-white px-8 py-6 rounded-full font-semibold text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://docs.awafinance.com/pages/getting-started/intro', '_blank')}
            >
              Start Building
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-32 items-end">
          {/* Left Side - Phone Mockup */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative max-w-[280px] sm:max-w-sm mx-auto">
              {/* iPhone Frame */}
              <div className="relative bg-gray-900 rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl shadow-orange-500/20 border-2 sm:border-4 border-gray-800">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 h-5 sm:h-7 bg-gray-900 rounded-b-2xl sm:rounded-b-3xl z-10"></div>
                
                {/* Screen */}
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-4 sm:px-8 pt-3 sm:pt-4 pb-1 sm:pb-2 text-white text-[10px] sm:text-xs">
                    <span className="font-semibold">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-2 sm:w-4 sm:h-3 border border-white rounded-sm"></div>
                      <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-white rounded-sm"></div>
                    </div>
                  </div>

                  {/* Lock Screen Content */}
                  <div className="px-4 sm:px-6 py-6 sm:py-8">
                    {/* Date */}
                    <motion.div
                      className="text-center mb-8 sm:mb-12"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <p className="text-white/80 text-xs sm:text-sm mb-1 sm:mb-2">Sunday, October 1</p>
                      <p className="text-white text-5xl sm:text-7xl font-light tracking-tight">9:41</p>
                    </motion.div>

                    {/* Notification Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl"
                    >
                      <div className="flex items-start gap-2 sm:gap-3">
                        {/* App Icon */}
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-gradient-to-br from-[#ff6900] to-[#ef8123] flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-base sm:text-lg font-bold">A</span>
                        </div>

                        {/* Notification Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-0.5 sm:mb-1">
                            <span className="text-gray-900 font-semibold text-xs sm:text-sm">Your App</span>
                            <span className="text-gray-500 text-[10px] sm:text-xs">now</span>
                          </div>
                          <p className="text-gray-900 font-medium text-sm sm:text-base mb-0.5 sm:mb-1">
                            Yield Earned
                          </p>
                          <p className="text-gray-600 text-xs sm:text-sm">
                            +$42.50 USDC at 5% APY
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Code Block */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Code Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              {/* Code Header */}
              <div className="flex items-center justify-between bg-gray-800/50 backdrop-blur-md border border-white/10 rounded-t-xl px-3 sm:px-4 py-2 sm:py-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-400 text-sm ml-3 font-mono">savings-deposit.js</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-xs text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-xs">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Content */}
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md border-x border-b border-white/10 rounded-b-xl p-3 sm:p-4 md:p-6 overflow-x-auto">
                <pre className="text-xs sm:text-sm font-mono">
                  <code className="text-gray-300">
                    <span className="text-purple-400">const</span> <span className="text-blue-300">url</span> <span className="text-gray-500">=</span> <span className="text-green-400">'https://api.awafinance.com/savings/deposit/quote'</span><span className="text-gray-500">;</span>
                    {'\n'}
                    <span className="text-purple-400">const</span> <span className="text-blue-300">options</span> <span className="text-gray-500">=</span> <span className="text-gray-500">{'{'}</span>
                    {'\n  '}
                    <span className="text-blue-300">method</span><span className="text-gray-500">:</span> <span className="text-green-400">'POST'</span><span className="text-gray-500">,</span>
                    {'\n  '}
                    <span className="text-blue-300">headers</span><span className="text-gray-500">:</span> <span className="text-gray-500">{'{'}</span><span className="text-blue-300">Authorization</span><span className="text-gray-500">:</span> <span className="text-green-400">'Bearer &lt;token&gt;'</span><span className="text-gray-500">{'}'}</span><span className="text-gray-500">,</span>
                    {'\n  '}
                    <span className="text-blue-300">body</span><span className="text-gray-500">:</span> <span className="text-orange-400">undefined</span>
                    {'\n'}<span className="text-gray-500">{'}'}</span><span className="text-gray-500">;</span>
                    {'\n\n'}
                    <span className="text-purple-400">try</span> <span className="text-gray-500">{'{'}</span>
                    {'\n  '}
                    <span className="text-purple-400">const</span> <span className="text-blue-300">response</span> <span className="text-gray-500">=</span> <span className="text-purple-400">await</span> <span className="text-yellow-300">fetch</span><span className="text-gray-500">(</span><span className="text-blue-300">url</span><span className="text-gray-500">,</span> <span className="text-blue-300">options</span><span className="text-gray-500">);</span>
                    {'\n  '}
                    <span className="text-purple-400">const</span> <span className="text-blue-300">data</span> <span className="text-gray-500">=</span> <span className="text-purple-400">await</span> <span className="text-blue-300">response</span><span className="text-gray-500">.</span><span className="text-yellow-300">json</span><span className="text-gray-500">();</span>
                    {'\n  '}
                    <span className="text-blue-300">console</span><span className="text-gray-500">.</span><span className="text-yellow-300">log</span><span className="text-gray-500">(</span><span className="text-blue-300">data</span><span className="text-gray-500">);</span>
                    {'\n'}<span className="text-gray-500">{'}'}</span> <span className="text-purple-400">catch</span> <span className="text-gray-500">(</span><span className="text-blue-300">error</span><span className="text-gray-500">)</span> <span className="text-gray-500">{'{'}</span>
                    {'\n  '}
                    <span className="text-blue-300">console</span><span className="text-gray-500">.</span><span className="text-yellow-300">error</span><span className="text-gray-500">(</span><span className="text-blue-300">error</span><span className="text-gray-500">);</span>
                    {'\n'}<span className="text-gray-500">{'}'}</span>
                  </code>
                </pre>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
