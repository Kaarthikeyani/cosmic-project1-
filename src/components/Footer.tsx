/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Instagram, Facebook, Youtube, Linkedin, Pin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="brand-footer" className="bg-[#1F1F1F] text-white pt-16 pb-8 border-t border-white/5 text-xs text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        
        {/* Brand Information column */}
        <div className="lg:col-span-4 space-y-4">
          <a
            href="#home"
            onClick={(e) => handleScrollToSection(e, '#home')}
            className="flex items-center gap-2 font-serif text-lg font-bold tracking-widest uppercase text-white"
          >
            <div className="w-7 h-7 rounded-full bg-[#C89B7B]/10 flex items-center justify-center border border-[#C89B7B]/20">
              <Sparkles size={12} className="text-[#C89B7B]" />
            </div>
            Cosmic
          </a>
          <p className="text-[#A4A4A4] leading-relaxed max-w-sm">
            Providing luxury botanical formulations designed to preserve cutaneous health and elevate your natural beauty daily.
          </p>
          <div className="flex gap-3">
            <a href="https://instagram.com" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#A4A4A4] hover:text-[#C89B7B] hover:border-[#C89B7B] transition-all">
              <Instagram size={13} />
            </a>
            <a href="https://facebook.com" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#A4A4A4] hover:text-[#C89B7B] hover:border-[#C89B7B] transition-all">
              <Facebook size={13} />
            </a>
            <a href="https://youtube.com" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#A4A4A4] hover:text-[#C89B7B] hover:border-[#C89B7B] transition-all">
              <Youtube size={13} />
            </a>
            <a href="https://linkedin.com" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#A4A4A4] hover:text-[#C89B7B] hover:border-[#C89B7B] transition-all">
              <Linkedin size={13} />
            </a>
          </div>
        </div>

        {/* Brand Columns */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-[10px] tracking-widest font-bold text-white uppercase border-b border-white/5 pb-1">
            Company
          </h4>
          <ul className="space-y-2 text-[#A4A4A4]">
            <li>
              <a href="#about" onClick={(e) => handleScrollToSection(e, '#about')} className="hover:text-[#C89B7B] transition-colors">
                Story & Mission
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleScrollToSection(e, '#services')} className="hover:text-[#C89B7B] transition-colors">
                Wellness Services
              </a>
            </li>
            <li>
              <a href="#products" onClick={(e) => handleScrollToSection(e, '#products')} className="hover:text-[#C89B7B] transition-colors">
                Chemical Formulations
              </a>
            </li>
            <li>
              <span className="cursor-not-allowed hover:text-white/50">
                Careers <span className="text-[8px] tracking-wide text-[#C89B7B] border border-[#C89B7B]/20 rounded-full px-1.5 py-0.5 ml-1 uppercase font-bold">Hiring</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-[10px] tracking-widest font-bold text-white uppercase border-b border-white/5 pb-1">
            Resources
          </h4>
          <ul className="space-y-2 text-[#A4A4A4]">
            <li>
              <span className="cursor-not-allowed hover:text-white/50">Cosmic Blog</span>
            </li>
            <li>
              <a href="#faqs" onClick={(e) => handleScrollToSection(e, '#faqs')} className="hover:text-[#C89B7B] transition-colors">
                FAQs & Delivery
              </a>
            </li>
            <li>
              <span className="cursor-not-allowed hover:text-white/50">Privacy Policy</span>
            </li>
            <li>
              <span className="cursor-not-allowed hover:text-white/50">Terms & Assurances</span>
            </li>
          </ul>
        </div>

        {/* Hours & Location column */}
        <div className="lg:col-span-4 space-y-3">
          <h4 className="text-[10px] tracking-widest font-bold text-white uppercase border-b border-white/5 pb-1">
            Cosmic Flagship Studio
          </h4>
          <p className="text-[#A4A4A4] leading-relaxed">
            782 Luxury Pavilions Blvd,<br />
            Level 2, Cutaneous Suites,<br />
            Beverly Hills, CA 90210
          </p>
          <div className="text-[11px] text-[#A4A4A4] pt-1">
            <span className="font-bold text-white block">Saturdays - Thursdays:</span>
            09:20 AM – 07:45 PM PST<br />
            <span className="font-bold text-white block mt-1">Fridays:</span>
            By Private Invitation Only
          </div>
        </div>

      </div>

      {/* Copyright area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[#A4A4A4] text-[10px]">
        <p>© 2026 Cosmic. All Rights Reserved.</p>
        <div className="flex gap-4">
          <span className="cursor-pointer hover:text-[#C89B7B]">Cookie Preference</span>
          <span className="cursor-pointer hover:text-[#C89B7B]">Supply Chain Transparency</span>
          <span className="cursor-pointer hover:text-[#C89B7B]">Certified Sustainable</span>
        </div>
      </div>
    </footer>
  );
};
