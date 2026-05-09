'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#0A2540] flex items-center justify-center rounded-sm">
                <span className="text-white font-bold text-xl tracking-tighter">HLB</span>
              </div>
              <span className="font-bold text-2xl text-[#0A2540] hidden sm:block tracking-tight">
                Zambia
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-[#0A2540] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+260955336061"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#0A2540] text-white text-sm font-medium rounded hover:bg-[#081d32] transition-colors gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-slate-600 hover:text-[#0A2540] focus:outline-none p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white border-t border-slate-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-[#0A2540] hover:bg-slate-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+260955336061"
                className="mt-4 flex items-center justify-center w-full px-5 py-3 bg-[#0A2540] text-white text-base font-medium rounded hover:bg-[#081d32] transition-colors gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-5 h-5" />
                <span>+260 95 5336061</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
