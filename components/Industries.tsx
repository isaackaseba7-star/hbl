'use client';

import { motion } from 'motion/react';
import { Building, Store, Globe2, Rocket } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      name: 'Corporates',
      icon: <Building className="w-8 h-8 group-hover:text-white text-blue-600 transition-colors" />,
      description: 'Comprehensive audit and tax strategies designed for large-scale operations and multinationals.',
    },
    {
      name: 'SMEs',
      icon: <Store className="w-8 h-8 group-hover:text-white text-blue-600 transition-colors" />,
      description: 'Scalable accounting and advisory solutions to fuel growth and ensure strict compliance.',
    },
    {
      name: 'NGOs',
      icon: <Globe2 className="w-8 h-8 group-hover:text-white text-blue-600 transition-colors" />,
      description: 'Specialized fund accountability, grant audits, and financial reporting for non-profits.',
    },
    {
      name: 'Startups',
      icon: <Rocket className="w-8 h-8 group-hover:text-white text-blue-600 transition-colors" />,
      description: 'Foundational financial structuring, forecasting, and investment-ready advisory.',
    },
  ];

  return (
    <section id="industries" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <span className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-4 block">Industries We Serve</span>
             <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] tracking-tight">
               Tailored Expertise for Every Sector
             </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:bg-blue-600 transition-all duration-300 group cursor-pointer text-center"
            >
              <div className="w-16 h-16 bg-blue-50 group-hover:bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                {ind.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] group-hover:text-white mb-3 transition-colors">{ind.name}</h3>
              <p className="text-slate-600 group-hover:text-blue-50 text-sm leading-relaxed transition-colors">
                {ind.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
