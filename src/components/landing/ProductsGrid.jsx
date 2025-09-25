
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Wallet, 
  Send, 
  TrendingUp, 
  Building2, 
  CreditCard, 
  Settings,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

export default function ProductsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      icon: Wallet,
      title: "Multi-Currency Accounts",
      description: "Seamlessly manage multiple digital currencies in one unified interface",
      gradient: "from-[#ff6900] to-[#ef8123]"
    },
    {
      icon: Send,
      title: "Remittances",
      description: "Cross-border payments with minimal fees and instant settlement",
      gradient: "from-[#4f185a] to-[#903939]"
    },
    {
      icon: TrendingUp,
      title: "Earn Yield",
      description: "Generate passive income through optimized lending protocols",
      gradient: "from-[#bf6037] to-[#ef8123]"
    },
    {
      icon: Building2,
      title: "Tokenized Stocks",
      description: "Access traditional equity markets through blockchain technology",
      gradient: "from-[#903939] to-[#bf6037]"
    },
    {
      icon: CreditCard,
      title: "Borrowing",
      description: "Collateralized lending with competitive rates and flexible terms",
      gradient: "from-[#591737] to-[#4f185a]"
    },
    {
      icon: Settings,
      title: "Order Management",
      description: "Advanced trading tools and portfolio management features",
      gradient: "from-[#b38a94] to-[#903939]"
    },
    {
      icon: ArrowUpRight,
      title: "On-Ramp",
      description: "Convert fiat currency to crypto with seamless user experience",
      gradient: "from-[#ef8123] to-[#ff6900]"
    },
    {
      icon: ArrowDownRight,
      title: "Off-Ramp",
      description: "Cash out your crypto holdings to traditional banking systems",
      gradient: "from-[#903939] to-[#591737]"
    }
  ];

  return (
    <section id="products" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Products
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive DeFi infrastructure designed for the next generation of financial applications
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#ff6900] transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {product.description}
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
