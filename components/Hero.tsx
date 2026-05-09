'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0A2540]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
          alt="Lusaka Skyline Corporate Building"
          fill
          className="object-cover object-center opacity-30"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/80 to-transparent mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Leading Accounting & Advisory Firm in Lusaka
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
              Trusted <span className="text-blue-400">Accounting & Advisory</span> Services in Zambia
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-10 max-w-2xl leading-relaxed">
              Delivering audit, tax, and financial expertise to help your business grow with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-base font-semibold rounded hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30 gap-2 group"
              >
                Request Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="tel:+260955336061"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white text-base font-semibold rounded hover:bg-white/20 border border-white/20 transition-all gap-2"
              >
                <PhoneCall className="w-5 h-5" />
                Call +260 95 5336061
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
