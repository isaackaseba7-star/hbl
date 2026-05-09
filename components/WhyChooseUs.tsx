'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Award, Clock, ThumbsUp, Building2 } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Award className="w-6 h-6 text-white" />,
      title: 'Experienced Professionals',
      description: 'Our team comprises highly qualified chartered accountants and business advisors.',
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-white" />,
      title: 'Trusted by Businesses',
      description: 'A proven track record of delivering excellence to startups, SMEs, and large corporates across Zambia.',
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: 'Client-Focused Approach',
      description: 'We prioritize responsiveness, clear communication, and tailored solutions for every client.',
    },
    {
      icon: <Building2 className="w-6 h-6 text-white" />,
      title: 'Modern Work Environment',
      description: 'Equipped with the latest technology to ensure maximum efficiency and security for your financial data.',
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
                alt="Modern corporate office interior"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Overlay Stats Box */}
            <div className="absolute -bottom-8 -right-8 bg-[#0A2540] text-white p-8 rounded-xl shadow-xl hidden md:block">
              <div className="flex gap-12">
                <div>
                  <p className="text-4xl font-bold text-blue-400 mb-1">15+</p>
                  <p className="text-sm text-slate-300 uppercase tracking-wider">Years Exp.</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue-400 mb-1">500+</p>
                  <p className="text-sm text-slate-300 uppercase tracking-wider">Clients</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block mb-4">
              <span className="text-sm font-bold tracking-wider text-blue-600 uppercase">Why Choose HLB Zambia</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6 tracking-tight">
              Empowering your business with unmatched professionalism.
            </h2>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We go beyond the numbers. By combining deep local insights with global accounting standards, we provide strategic foresight that helps you mitigate risks and capitalize on opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                    {reason.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2">{reason.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
