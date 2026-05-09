'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-4 block">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4 tracking-tight">
              Ready to elevate your business?
            </h2>
            <p className="text-lg text-slate-600">
              Contact our advisory team today for a confidential consultation.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-[#0A2540] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0A2540] mb-1">Office Location</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      2nd Floor, Saturnia House<br/>
                      Dunduza, Chisidza Crescent<br/>
                      Lusaka, Zambia
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0A2540] mb-1">Phone Number</p>
                    <a href="tel:+260955336061" className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                      +260 95 5336061
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                     <p className="font-semibold text-[#0A2540] mb-1">Email Address</p>
                     <a href="mailto:info@hlb.co.zm" className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                       info@hlb.co.zm
                     </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden h-64 border border-slate-200 shadow-sm relative">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15383.04780287402!2d28.2754652!3d-15.4208571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f35a0ce51da3%3A0x6bba847c1ba42be4!2sLusaka%2C%20Zambia!5e0!3m2!1sen!2sus!4v1714571829377!5m2!1sen!2sus" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="HLB Zambia Office Location"
                 className="absolute inset-0"
               ></iframe>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-8 md:p-10 h-full">
              <h3 className="text-2xl font-bold text-[#0A2540] mb-6">Send us a message</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                   <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                   <input 
                     type="text" 
                     id="subject" 
                     className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                     placeholder="How can we help you?"
                   />
                </div>

                <div>
                   <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                   <textarea 
                     id="message" 
                     rows={5}
                     className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                     placeholder="Please provide details about your inquiry..."
                   ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-600/30"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
