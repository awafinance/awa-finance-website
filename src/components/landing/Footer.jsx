
import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const footerLinks = {
    "Products": ["Multi-Currency Accounts", "Remittances", "Earn Yield", "Tokenized Stocks"],
    "Solutions": ["Wallets & Exchanges", "Fintechs", "Financial Institutions", "Enterprise"],
    "Resources": ["Documentation", "API Reference", "Support", "Community"],
    "Company": ["About", "Careers", "Blog", "Contact"]
  };

  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="/images/Awa-logo-no-background.png" 
                alt="AWA Finance Logo" 
                className="h-12 w-auto mr-3"
              />
              <span className="text-1xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                
              </span>
            </motion.div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Your Gateway to DeFi.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'Discord', 'GitHub', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <span className="text-white text-sm font-medium">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold text-lg mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 AWA Finance. All rights reserved.
          </div>
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
