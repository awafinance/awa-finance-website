import React from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function PartnerEcosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const partners = [
    { name: "AAVE", logo: "/images/aave.png", size: 120 },
    { name: "Balancer", logo: "/images/balancer.png", size: 112 },
    { name: "Compound", logo: "/images/compound.svg", size: 105 },
    { name: "CowSwap", logo: "/images/cowswap.png", size: 112 },
    { name: "Curve", logo: "/images/curve.svg", size: 120 },
    { name: "DeBridge", logo: "/images/debridge.png", size: 112 },
    { name: "Maker", logo: "/images/maker.svg", size: 128 },
    { name: "Morpho", logo: "/images/morpho.png", size: 105 },
    { name: "sDAI", logo: "/images/sDAI.png", size: 112 },
    { name: "Uniswap", logo: "/images/uniswap.png", size: 135 },
    { name: "USDC", logo: "/images/usdc.png", size: 105 },
    { name: "Yearn", logo: "/images/yearn.png", size: 112 }
  ];

  return (
    <section 
        ref={ref}
        className="px-6 lg:px-8 relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
        {/* Centered Text */}
        <motion.div
          className="text-center z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Connected by Awa
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-xl mx-auto leading-relaxed">
            Connect to all relevant protocols with a single API, no hassle, just simple integration.
          </p>
        </motion.div>

        {/* Floating Partner Logos */}
        <div className="absolute inset-0 w-full h-full z-0">
          {partners.map((partner, index) => {
            // Create a circular arrangement around the center
            const angle = (index / partners.length) * 2 * Math.PI;
            const baseRadius = 250; // Base distance from center in pixels
            
            // INVERTED: Use scroll progress to animate convergence toward center
            const x = useTransform(scrollYProgress, [0, 0.5, 1], [
              Math.cos(angle) * (baseRadius * 2.2), // Start far from center
              Math.cos(angle) * (baseRadius * 1.5), // Move closer
              Math.cos(angle) * baseRadius          // End at comfortable distance
            ]);
            
            const y = useTransform(scrollYProgress, [0, 0.5, 1], [
              Math.sin(angle) * (baseRadius * 2.2),
              Math.sin(angle) * (baseRadius * 1.5),
              Math.sin(angle) * baseRadius
            ]);

            return (
              <motion.div
                key={partner.name}
                className="absolute top-1/2 left-1/2 flex items-center justify-center rounded-full shadow-lg backdrop-blur-sm bg-white/10 border border-white/20 p-3"
                style={{
                  width: partner.size,
                  height: partner.size,
                  x: x,
                  y: y,
                  translateX: '-50%',
                  translateY: '-50%'
                }}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={isInView ? {
                  opacity: 0.8,
                  scale: 1,
                  rotate: [0, 5, -5, 0], // Gentle floating rotation
                } : {}}
                transition={{
                  duration: 1.5,
                  delay: index * 0.1,
                  rotate: {
                    duration: 6 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{
                  scale: 1.1,
                  opacity: 1
                }}
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="w-3/4 h-3/4 object-contain"
                />
              </motion.div>
            );
          })}
        </div>
    </section>
  );
}