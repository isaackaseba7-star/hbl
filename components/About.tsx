'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Target, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: 'The Spirit of Ubuntu',
      description: 'We believe in shared growth, deep collaboration, and treating our clients as partners in success.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: 'Uncompromising Ethics',
      description: 'Our reputation is built on transparency, integrity, and strict adherence to international accounting standards.',
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: 'Targeted Expertise',
      description: 'Deep understanding of the Zambian business landscape combined with global methodologies.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <span className="text-sm font-bold tracking-wider text-blue-600 uppercase">Who We Are</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6 tracking-tight">
              A trusted partner for corporate growth and compliance in Zambia.
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              HLB Zambia is a premier accounting and advisory firm based in Lusaka. We deliver world-class audit, tax, and financial consulting services tailored to the unique needs of corporate clients, SMEs, and NGOs operating in Zambia.
            </p>

            <div className="space-y-8 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0A2540] mb-2">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 py-4 px-6 bg-slate-50 rounded-lg border border-slate-100">
              <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0" />
              <p className="text-sm text-slate-700 font-medium font-mono uppercase tracking-wide">
                Committed to delivering professional excellence and peace of mind.
              </p>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: '-100px' }}
             transition={{ duration: 0.6 }}
             className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
                alt="African corporate professionals in a meeting"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/95 backdrop-blur shadow-xl rounded-xl p-6 border-l-4 border-blue-600">
                  <p className="text-[#0A2540] font-bold text-xl mb-1">Decades of Experience</p>
                  <p className="text-slate-600 text-sm">Empowering Zambian businesses</p>
                </div>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-slate-100 rounded-full blur-3xl opacity-50" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
