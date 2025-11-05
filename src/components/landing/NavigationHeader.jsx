
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function NavigationHeader({ isScrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About Us", href: "about" },
    { label: "Platform", href: "architecture" },
    { label: "Use Cases", href: "use-cases" },
    { label: "Customers", href: "customers" },
    { label: "Integration", href: "integration" }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.getElementById(href);
    if (element) {
      const headerOffset = 80; // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img 
              src="/images/Awa-logo-no-background.png" 
              alt="AWA Finance Logo" 
              className="h-12 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center space-x-8 flex-1">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Action Buttons - Right Side */}
          <div className="hidden lg:flex gap-3">
            <Button
              variant="outline"
              className="border-2 border-[#ff6900] text-[#ff6900] hover:bg-[#ff6900] hover:text-white px-6 py-2 rounded-full font-semibold transition-all duration-300"
              onClick={() => window.open('https://docs.awafinance.com', '_blank')}
            >
              View Docs
            </Button>
            <Button
              className="bg-gradient-to-r from-[#ff6900] to-[#ef8123] hover:from-[#ef8123] hover:to-[#ff6900] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://app.awafinance.com/signin', '_blank')}
            >
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setMobileMenuOpen(false);
                  }}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
                >
                  {item.label}
                </a>
              ))}
              <Button
                variant="outline"
                className="w-full border-2 border-[#ff6900] text-[#ff6900] hover:bg-[#ff6900] hover:text-white py-3 rounded-full font-semibold mt-4"
                onClick={() => window.open('https://docs.awafinance.com', '_blank')}
              >
                View Docs
              </Button>
              <Button
                className="w-full bg-gradient-to-r from-[#ff6900] to-[#ef8123] hover:from-[#ef8123] hover:to-[#ff6900] text-white py-3 rounded-full font-semibold"
                onClick={() => window.open('https://app.awafinance.com/signin', '_blank')}
              >
                Sign In
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
