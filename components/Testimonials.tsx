'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Great company with strong work ethics and a spirit of Ubuntu. They transformed the way we handle our corporate compliance.",
      author: "Finance Director",
      company: "Leading Zambian SME",
    },
    {
      quote: "Professional team and excellent service delivery. HLB Zambia is prompt, highly accurate, and always ready to advise on complex tax matters.",
      author: "CEO",
      company: "Tech Startup, Lusaka",
    },
    {
      quote: "Having HLB Zambia handle our audits has given our board and investors immense peace of mind. Truly top-tier professionals.",
      author: "Board Member",
      company: "International NGO",
    }
  ];

  return (
    <section className="py-24 bg-[#0A2540] relative overflow-hidden">
      {/* Background Decorative Patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border-[20px] border-white" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border-[20px] border-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-bold tracking-wider text-blue-400 uppercase mb-4 block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              What Our Clients Say
            </h2>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Quote className="w-10 h-10 text-blue-400 mb-6 opacity-80" />
              <p className="text-slate-300 text-lg leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              <div className="mt-auto">
                <p className="text-white font-bold">{testimonial.author}</p>
                <p className="text-blue-400 text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
