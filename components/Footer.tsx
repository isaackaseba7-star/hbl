'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2540] text-slate-300 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 flex items-center justify-center rounded-sm">
                <span className="text-white font-bold text-xl tracking-tighter">HLB</span>
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">
                Zambia
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Delivering professional audit, tax, and advisory services with uncompromising integrity and regional expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="#industries" className="hover:text-white transition-colors">Industries Served</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>Audit & Assurance</li>
              <li>Tax Advisory</li>
              <li>Financial Consulting</li>
              <li>Business Advisory</li>
              <li>Accounting Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                 2nd Floor, Saturnia House<br/>
                 Dunduza, Chisidza Crescent<br/>
                 Lusaka, Zambia
              </li>
              <li>
                <a href="tel:+260955336061" className="hover:text-white transition-colors">+260 95 5336061</a>
              </li>
              <li>
                <a href="mailto:info@hlb.co.zm" className="hover:text-white transition-colors">info@hlb.co.zm</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
           <p>&copy; {currentYear} HLB Zambia. All rights reserved.</p>
           <div className="flex gap-6 relative z-10">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           </div>
        </div>

      </div>
    </footer>
  );
}
