
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

function AnimatedCounter({ value, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const increment = value / 50; // Adjust for smoother animation, larger values
        const counter = setInterval(() => {
          setCount(prev => {
            if (prev < value) {
              return Math.min(prev + increment, value);
            }
            clearInterval(counter);
            return value;
          });
        }, 30); // Adjust interval speed
        return () => clearInterval(counter);
      }, 200); // Delay start of animation
      return () => clearTimeout(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{Math.floor(count).toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 25000000, suffix: "+", prefix: "$", label: "Transacted volume" },
    { value: 20, suffix: "+", label: "Blockchain Networks" },
    { value: 12, suffix: "+", label: "Partner Protocols" },
    { value: 99.9, suffix: "%", label: "Uptime" }
  ];

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#ff6900] to-[#ef8123] bg-clip-text text-transparent mb-2">
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>
              <div className="text-gray-400 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
