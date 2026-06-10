/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag, Sun, Moon, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, onToggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'Analyzer', href: '#skin-analysis' },
    { label: 'Results', href: '#results-gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-[#1F1F1F]/85 backdrop-blur-md shadow-sm border-b border-[#D6C5B4]/15 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleScrollToSection(e, '#home')}
          className="flex items-center gap-2 focus:outline-none group"
        >
          <div className="relative w-7 h-7 rounded-full bg-[#C89B7B]/10 dark:bg-[#C89B7B]/20 flex items-center justify-center border border-[#C89B7B]/25">
            <Sparkles size={12} className="text-[#C89B7B] group-hover:rotate-45 transition-transform" />
          </div>
          <span className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase text-[#1F1F1F] dark:text-white">
            COSMIC
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollToSection(e, item.href)}
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#4A4A4A] dark:text-gray-300 opacity-80 hover:opacity-100 hover:text-[#C89B7B] dark:hover:text-[#C89B7B] transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Icon Trigger Buttons */}
        <div className="flex items-center gap-3">
          {/* Dark Mode toggle */}
          <button
            id="btn-darkmode-toggle"
            onClick={onToggleDarkMode}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#4A4A4A] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none border border-[#D6C5B4]/15"
            aria-label="Toggle visual theme"
          >
            {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Cart Icon */}
          <button
            id="btn-cart-drawer-trigger"
            onClick={() => setIsCartOpen(true)}
            className="w-10 h-10 rounded-full flex items-center justify-center relative hover:bg-[#C89B7B]/10 text-[#4A4A4A] dark:text-white hover:text-[#C89B7B] transition-colors border border-[#D6C5B4]/20"
          >
            <ShoppingBag size={15} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#C89B7B] text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white dark:ring-[#1F1F1F]">
                {cartCount}
              </span>
            )}
          </button>

          {/* Hamburger button */}
          <button
            id="btn-mobile-menu-trigger"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-[#1F1F1F] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 border border-[#D6C5B4]/15 focus:outline-none"
          >
            {isOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </div>

      {/* Mobile drop-down Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-[#1F1F1F] border-b border-[#D6C5B4]/20 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-2 mt-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className="block py-2.5 px-4 text-xs font-bold tracking-widest text-[#4A4A4A] dark:text-gray-300 hover:text-[#C89B7B] dark:hover:text-[#C89B7B] uppercase rounded-xl hover:bg-[#F8F3EE]/50 dark:hover:bg-white/5 transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
