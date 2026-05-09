'use client';

import { motion } from 'motion/react';
import { FileSearch, Calculator, LineChart, Briefcase, Landmark, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: <FileSearch className="w-8 h-8 text-blue-600" />,
      title: 'Audit & Assurance',
      description: 'Independent, objective assessments ensuring financial statements are robust and fully transparent.',
    },
    {
      icon: <Calculator className="w-8 h-8 text-blue-600" />,
      title: 'Tax Advisory',
      description: 'Navigating complex Zambian tax regulations to optimize your tax position while ensuring 100% compliance.',
    },
    {
      icon: <LineChart className="w-8 h-8 text-blue-600" />,
      title: 'Financial Consulting',
      description: 'Strategic forecasting, risk management, and financial restructuring to drive sustainable profitability.',
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: 'Business Advisory',
      description: 'Actionable insights and strategic guidance for market entry, mergers, and operational efficiency.',
    },
    {
      icon: <Landmark className="w-8 h-8 text-blue-600" />,
      title: 'Accounting Services',
      description: 'End-to-end bookkeeping, payroll processing, and management account preparation.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-4 block">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6 tracking-tight">
              Comprehensive Financial Expertise
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We offer a full suite of professional services designed to safeguard your assets, ensure compliance, and unlock growth opportunities.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {service.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-slate-50 inline-flex items-center text-sm font-semibold text-blue-600 justify-start opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
          
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: services.length * 0.1 }}
            className="bg-[#0A2540] rounded-xl p-8 shadow-lg flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-bl-full blur-2xl" />
            
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Need a custom solution?</h3>
            <p className="text-blue-100 mb-8 leading-relaxed relative z-10">
              Contact our advisory team to discuss your specific corporate requirements.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#0A2540] text-sm font-bold rounded hover:bg-slate-100 transition-colors w-fit relative z-10"
            >
              Request Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
