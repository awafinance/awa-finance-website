import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function PartnerEcosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  const partners = [
    { name: "Ethereum", size: 60, color: "#ff6900" },
    { name: "Polygon", size: 50, color: "#ef8123" },
    { name: "Arbitrum", size: 45, color: "#bf6037" },
    { name: "Optimism", size: 65, color: "#903939" },
    { name: "Avalanche", size: 55, color: "#591737" },
    { name: "Solana", size: 70, color: "#4f185a" },
    { name: "Chainlink", size: 50, color: "#b38a94" },
    { name: "Uniswap", size: 60, color: "#ff6900" },
    { name: "AAVE", size: 40, color: "#ef8123" },
    { name: "MakerDAO", size: 65, color: "#903939" },
    { name: "Curve", size: 55, color: "#bf6037" },
    { name: "1inch", size: 45, color: "#591737" },
    { name: "SushiSwap", size: 50, color: "#ef8123"},
    { name: "Balancer", size: 60, color: "#ff6900"}
  ];

  return (
    <section 
        ref={ref}
        className="py-24 px-6 lg:px-8 relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
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
              Powered by AWA
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-xl mx-auto leading-relaxed">
            Enterprises connect with AWA to power any lending or borrowing use case at scale.
          </p>
        </motion.div>

        {/* Floating Partner "Logos" */}
        <div className="absolute inset-0 w-full h-full z-0">
          {partners.map((partner, index) => {
            const duration = 25 + Math.random() * 20; // 25-45 seconds for a full orbit
            const radiusX = (30 + Math.random() * 20) * (Math.random() > 0.5 ? 1 : -1); // 30-50% of width
            const radiusY = (25 + Math.random() * 20) * (Math.random() > 0.5 ? 1 : -1); // 25-45% of height
            const startAngle = Math.random() * 2 * Math.PI;

            return (
              <motion.div
                key={partner.name + index}
                className="absolute top-1/2 left-1/2 flex items-center justify-center rounded-full shadow-lg text-white font-bold text-xl"
                style={{
                  width: partner.size,
                  height: partner.size,
                  backgroundColor: partner.color,
                }}
                initial={{
                  x: '-50%',
                  y: '-50%',
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={isInView ? {
                  opacity: [0, 0.7, 0.7, 0],
                  transform: [
                    `translate3d(${Math.cos(startAngle) * radiusX}vw, ${Math.sin(startAngle) * radiusY}vh, 0px) scale(0.7)`,
                    `translate3d(${Math.cos(startAngle + Math.PI/2) * radiusX}vw, ${Math.sin(startAngle + Math.PI/2) * radiusY}vh, 0px) scale(1)`,
                    `translate3d(${Math.cos(startAngle + Math.PI) * radiusX}vw, ${Math.sin(startAngle + Math.PI) * radiusY}vh, 0px) scale(0.7)`,
                    `translate3d(${Math.cos(startAngle + 3*Math.PI/2) * radiusX}vw, ${Math.sin(startAngle + 3*Math.PI/2) * radiusY}vh, 0px) scale(0.5)`,
                    `translate3d(${Math.cos(startAngle + 2*Math.PI) * radiusX}vw, ${Math.sin(startAngle + 2*Math.PI) * radiusY}vh, 0px) scale(0.7)`,
                  ]
                } : {}}
                transition={{
                  duration: duration,
                  ease: "linear",
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                {partner.name[0]}
              </motion.div>
            );
          })}
        </div>
    </section>
  );
}