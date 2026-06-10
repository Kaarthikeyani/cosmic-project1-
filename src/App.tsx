/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ShoppingBag,
  Star,
  Heart,
  ArrowRight,
  ChevronRight,
  Plus,
  ShieldCheck,
  Award,
  Leaf,
  Clock,
  MapPin,
  Mail,
  Phone,
  ArrowUp,
  MessageCircle,
  TrendingUp,
  ChevronDown
} from 'lucide-react';

import { useCart, CartProvider } from './context/CartContext';
import { products, services, testimonials, faqs } from './data';
import { Product, Service } from './types';

// Child components import
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { SkinAnalysis } from './components/SkinAnalysis';
import { QuickViewModal } from './components/QuickViewModal';
import { ConsultationModal } from './components/ConsultationModal';
import { CartDrawer } from './components/CartDrawer';

function CosmicAppContent() {
  const { addToCart } = useCart();
  
  // App UX States
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [productFilter, setProductFilter] = useState<string>('All');
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [bookingService, setBookingService] = useState<Service | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Forms
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [contactSuccess, setContactSuccess] = useState(false);

  // Initialize Loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsBackToTopVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Toggle Wishlist
  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((pId) => pId !== id) : [...prev, id]
    );
  };

  const handleBookConsultation = (service?: Service) => {
    if (service) {
      setBookingService(service);
    } else {
      setBookingService(null);
    }
    setIsBookingOpen(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
      setContactForm({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterSuccess(false);
      setNewsletterEmail('');
    }, 4000);
  };

  // Filter products
  const filteredProducts = productFilter === 'All'
    ? products
    : products.filter((p) => p.category === productFilter);

  // Render Service Icon
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ScanFace':
        return <Sparkles className="text-[#C89B7B]" size={22} />;
      case 'Sparkles':
        return <Sparkles className="text-[#C89B7B]" size={22} />;
      case 'Activity':
        return <TrendingUp className="text-[#C89B7B]" size={22} />;
      case 'Droplets':
        return <TrendingUp className="text-[#C89B7B]" size={22} />;
      case 'Sun':
        return <Sparkles className="text-[#C89B7B]" size={22} />;
      case 'Heart':
        default:
        return <Heart className="text-[#C89B7B]" size={22} />;
    }
  };

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className={`min-h-screen bg-[#F8F3EE] dark:bg-[#121212] text-[#4A4A4A] dark:text-gray-300 transition-colors duration-500 overflow-x-hidden ${isDarkMode ? 'dark' : ''}`}>
      
      {/* 1. Full Screen Introspective Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            id="loading-curtain"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 bg-[#1F1F1F] flex flex-col items-center justify-center p-4 text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-4"
            >
              <div className="relative w-20 h-20 mx-auto">
                {/* Brand glowing orb */}
                <div className="absolute inset-0 rounded-full bg-[#C89B7B]/10 blur-xl animate-pulse"></div>
                <div className="absolute inset-0 rounded-full border border-[#C89B7B]/30 flex items-center justify-center">
                  <Sparkles size={28} className="text-[#C89B7B] animate-spin" style={{ animationDuration: '4s' }} />
                </div>
              </div>
              <h2 className="font-serif text-3xl font-bold tracking-widest text-white uppercase mt-4">
                COSMIC
              </h2>
              <p className="text-[10px] tracking-widest text-[#D6C5B4] uppercase font-semibold">
                Reveal Yours Natural Glow
              </p>
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C89B7B] to-transparent mx-auto mt-2"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container */}
      {!loading && (
        <div className="flex flex-col min-h-screen">
          
          {/* Sticky Header Nav */}
          <Navbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />

          {/* 2. Full Screen Premium Hero Section */}
          <header id="home" className="relative pt-24 md:pt-32 pb-16 min-h-[95vh] flex items-center bg-gradient-to-b from-[#F8F3EE] via-[#F3ECE6] to-white dark:from-[#121212] dark:via-[#161616] dark:to-[#121212] overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-20 right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#C89B7B]/5 dark:bg-[#C89B7B]/2 blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-10 left-[-5%] w-[35vw] h-[35vw] rounded-full bg-[#D6C5B4]/10 dark:bg-[#D6C5B4]/3 blur-[80px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Headline details */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block"
                >
                  <span className="text-[10px] uppercase tracking-[0.4em] bg-white dark:bg-[#1F1F1F] px-3.5 py-1.5 border border-[#D6C5B4] dark:border-white/10 text-[#C89B7B] font-medium rounded-xs">
                    Scientific Pure Excellence
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-[1.1] text-[#1F1F1F] dark:text-white"
                >
                  Reveal Your<br /><span className="italic font-light text-[#C89B7B]">Natural Glow</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-base sm:text-lg leading-relaxed text-[#4A4A4A] dark:text-gray-300 max-w-md opacity-80"
                >
                  Premium skincare solutions designed to nourish, protect, and enhance your skin's intrinsic radiance through cosmic-inspired science.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap gap-4 pt-2"
                >
                  <a
                    href="#products"
                    className="bg-[#1F1F1F] dark:bg-[#C89B7B] text-white px-8 md:px-10 py-4 text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-[#C89B7B] dark:hover:bg-[#C89B7B]/80 transition-colors shadow-md"
                  >
                    Shop Now
                  </a>
                  <button
                    id="btn-hero-consult"
                    onClick={() => handleBookConsultation()}
                    className="border border-[#1F1F1F] dark:border-white/40 px-8 md:px-10 py-4 text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-[#D6C5B4]/15 dark:hover:bg-white/5 text-[#1F1F1F] dark:text-white transition-all"
                  >
                    Book Consultation
                  </button>
                </motion.div>

                {/* Key Stats from Clean Minimalism theme */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="flex gap-12 mt-16 pt-8 border-t border-[#D6C5B4]/50 text-left"
                >
                  <div>
                    <div className="text-2xl font-serif text-[#C89B7B]">50k+</div>
                    <div className="text-[9px] uppercase tracking-widest opacity-60 dark:text-gray-400">Happy Users</div>
                  </div>
                  <div>
                    <div className="text-2xl font-serif text-[#C89B7B]">98%</div>
                    <div className="text-[9px] uppercase tracking-widest opacity-60 dark:text-gray-400">Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-serif text-[#C89B7B]">10+</div>
                    <div className="text-[9px] uppercase tracking-widest opacity-60 dark:text-gray-400">Years Research</div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Visual Showcase Grid (from Clean Minimalism design HTML) */}
              <div className="lg:col-span-6 flex flex-col justify-center mt-8 lg:mt-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="grid grid-cols-2 grid-rows-3 gap-4 max-w-lg w-full"
                >
                  {/* Row span 2 image container */}
                  <div className="row-span-2 bg-[#D6C5B4] rounded-[40px] md:rounded-[60px] overflow-hidden relative group">
                    <img
                      src="/src/assets/images/cosmic_hero_banner_1781080274730.png"
                      alt="Featured Product Cosmic Glow Serum"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#1F1F1F]/60 via-[#C89B7B]/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white text-left">
                      <div className="text-[10px] uppercase tracking-widest mb-1.5 opacity-90">Featured Product</div>
                      <div className="text-lg md:text-xl font-serif">Cosmic Glow Serum</div>
                    </div>
                  </div>

                  {/* Skin Analysis teaser card */}
                  <a
                    href="#skin-analysis"
                    className="bg-white dark:bg-[#1F1F1F] border border-[#D6C5B4] dark:border-white/10 rounded-[30px] md:rounded-[40px] p-5 flex flex-col justify-center items-center text-center hover:border-[#C89B7B] transition-all"
                  >
                    <div className="w-9 h-9 rounded-full border border-[#C89B7B] mb-2.5 flex items-center justify-center text-[#C89B7B] font-semibold text-xs">
                      01
                    </div>
                    <div className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-[#1F1F1F] dark:text-white">
                      Skin Analysis
                    </div>
                    <p className="text-[9px] md:text-[10px] mt-1.5 opacity-70 text-[#4A4A4A] dark:text-gray-300">
                      Personalized AI-driven skin assessments.
                    </p>
                  </a>

                  {/* Quick Quote card */}
                  <div className="bg-[#C89B7B] rounded-[30px] md:rounded-[40px] p-5 flex flex-col justify-between text-left">
                    <div className="text-white/80 uppercase text-[8px] md:text-[9px] tracking-widest font-bold">
                      Recent Review
                    </div>
                    <p className="text-xs md:text-sm text-white italic leading-snug my-2">
                       "My skin has never felt more alive and hydrated. Truly transformative!"
                    </p>
                    <div className="text-[9px] md:text-[10px] text-white/70 font-bold">
                      — Elena R.
                    </div>
                  </div>

                  {/* Certified badge bottom row */}
                  <div className="col-span-2 bg-white dark:bg-[#1F1F1F] border border-[#D6C5B4] dark:border-white/10 rounded-[30px] md:rounded-[40px] p-5 flex items-center justify-between text-left">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 md:w-11 md:h-11 bg-[#F8F3EE] dark:bg-[#2C2C2C] rounded-full flex items-center justify-center text-[#C89B7B] shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-[#1F1F1F] dark:text-white">
                          Dermatologist Tested
                        </div>
                        <div className="text-[9px] md:text-[10px] opacity-70 text-[#4A4A4A] dark:text-gray-300">
                          Clinically proven results for sensitive skin
                        </div>
                      </div>
                    </div>
                    <a
                      href="#about"
                      className="text-xs text-[#C89B7B] underline underline-offset-4 hover:opacity-80 transition-opacity"
                    >
                      Learn More
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </header>

          {/* 3. About Cosmic Section */}
          <section id="about" className="py-20 bg-white dark:bg-[#161616] border-y border-[#D6C5B4]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Image layout container block */}
                <div className="lg:col-span-6 relative flex justify-center">
                  <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/src/assets/images/cosmic_aesthetic_glowing_skin_1781080320444.png"
                      alt="Organic Skin glow"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    
                    {/* Embedded Statistics overlay inside layout */}
                    <div className="absolute left-6 bottom-6 bg-white/80 dark:bg-[#1F1F1F]/85 backdrop-blur-md p-4 rounded-xl border border-[#D6C5B4]/30 shadow-lg text-left max-w-[200px]">
                      <span className="block text-2xl font-serif font-bold text-[#C89B7B]">50K+</span>
                      <span className="block text-[10px] text-[#1F1F1F] dark:text-white font-bold tracking-widest uppercase">
                        Happy Customers
                      </span>
                    </div>
                  </div>
                </div>

                {/* About copy blocks */}
                <div className="lg:col-span-6 space-y-6 text-left">
                  <div className="space-y-2">
                    <span className="text-xs font-bold tracking-widest text-[#C89B7B] uppercase block">
                      Our Philosophy
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-[#1F1F1F] dark:text-white tracking-tight">
                      Reveal Your Natural Glow
                    </h2>
                  </div>

                  <p className="text-sm text-[#4A4A4A] dark:text-gray-300 leading-relaxed">
                    At Cosmic, we believe that truly sustainable skin luxury shouldn’t involve safety trade-offs. We exist to build professional skincare rituals that align clinical dermatological science with wild botanical chemistry.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold tracking-widest uppercase text-[#1F1F1F] dark:text-white flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C89B7B]"></span> Mission
                      </h4>
                      <p className="text-[11px] text-[#4A4A4A]/85 dark:text-gray-400 leading-relaxed">
                        To manufacture clean, bio-identical skin formulations that deliver glowing cellular nourishment while respecting global ethical targets.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-xs font-bold tracking-widest uppercase text-[#1F1F1F] dark:text-white flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C89B7B]"></span> vision
                      </h4>
                      <p className="text-[11px] text-[#4A4A4A]/85 dark:text-gray-400 leading-relaxed">
                        To build the worlds premier dermo-botanical ecosystem, transparently demonstrating that luxury styling and ecological recycling exist as one.
                      </p>
                    </div>
                  </div>

                  {/* Core statistics cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#D6C5B4]/20">
                    <div className="text-center p-3 rounded-xl bg-[#F8F3EE]/40 dark:bg-[#1F1F1F]/50">
                      <span className="block text-xl font-serif font-bold text-[#C89B7B]">100+</span>
                      <span className="block text-[8px] text-[#4A4A4A]/60 dark:text-gray-400 uppercase tracking-widest font-bold mt-1">
                        Formulations
                      </span>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-[#F8F3EE]/40 dark:bg-[#1F1F1F]/50">
                      <span className="block text-xl font-serif font-bold text-[#C89B7B]">98%</span>
                      <span className="block text-[8px] text-[#4A4A4A]/60 dark:text-gray-400 uppercase tracking-widest font-bold mt-1">
                        Satisfaction
                      </span>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-[#F8F3EE]/40 dark:bg-[#1F1F1F]/50">
                      <span className="block text-xl font-serif font-bold text-[#C89B7B]">10+</span>
                      <span className="block text-[8px] text-[#4A4A4A]/60 dark:text-gray-400 uppercase tracking-widest font-bold mt-1">
                        Years Exp.
                      </span>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-[#F8F3EE]/40 dark:bg-[#1F1F1F]/50">
                      <span className="block text-xl font-serif font-bold text-[#C89B7B]">12</span>
                      <span className="block text-[8px] text-[#4A4A4A]/60 dark:text-gray-400 uppercase tracking-widest font-bold mt-1">
                        Intl Awards
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* 4. Services Section */}
          <section id="services" className="py-20 bg-[#F3ECE6]/40 dark:bg-[#121212] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="text-xs font-bold tracking-widest text-[#C89B7B] uppercase block">
                  Dermal Clinical Spa
                </span>
                <h2 className="text-3xl font-serif text-[#1F1F1F] dark:text-white mt-2">
                  Premium Skincare Services
                </h2>
                <p className="text-xs text-[#4A4A4A]/60 dark:text-gray-400 mt-2">
                  Coordinate targeted wellness sessions designed to diagnose, refresh, and clear your unique cutaneous complexion.
                </p>
              </div>

              {/* Service Cards grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((item) => (
                  <div
                    key={item.id}
                    id={`service-card-${item.id}`}
                    className="p-6 md:p-8 rounded-2xl bg-white dark:bg-[#1F1F1F] border border-[#D6C5B4]/15 hover:border-[#C89B7B]/50 hover:shadow-xl dark:shadow-none transition-all duration-300 transform hover:-translate-y-1 space-y-4 group text-left flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-11 h-11 bg-[#C89B7B]/10 dark:bg-[#C89B7B]/20 rounded-xl flex items-center justify-center text-[#C89B7B] group-hover:scale-110 transition-transform">
                        {getServiceIcon(item.icon)}
                      </div>
                      
                      <h3 className="text-lg font-medium text-[#1F1F1F] dark:text-white">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#4A4A4A]/80 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>

                      <ul className="text-[10px] text-[#4A4A4A]/60 dark:text-gray-400 space-y-1 border-t border-[#D6C5B4]/10 pt-2">
                        {item.benefits.map((b, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#C89B7B]"></span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between border-t border-[#D6C5B4]/10 pt-4 mt-4">
                      <span className="text-xs text-[#4A4A4A]/50 font-bold tracking-wider">
                        {item.duration} • ₹{item.price.toLocaleString('en-IN')}
                      </span>
                      <button
                        onClick={() => handleBookConsultation(item)}
                        className="text-xs text-[#C89B7B] font-bold group-hover:text-[#1F1F1F] dark:group-hover:text-white flex items-center gap-1 hover:underline transition-colors focus:outline-none"
                      >
                        Reserve Session <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. Featured Products Section */}
          <section id="products" className="py-20 bg-white dark:bg-[#161616]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 text-left">
                <div>
                  <span className="text-xs font-bold tracking-widest text-[#C89B7B] uppercase block">
                    Our Collection
                  </span>
                  <h2 className="text-3xl font-serif text-[#1F1F1F] dark:text-white mt-1">
                    Featured Formulations
                  </h2>
                </div>

                {/* Filters Row */}
                <div className="flex flex-wrap gap-2.5">
                  {['All', 'Serums', 'Creams', 'Elixirs', 'Protection', 'Cleansers'].map((cat) => (
                    <button
                      key={cat}
                      id={`filter-${cat.toLowerCase()}`}
                      onClick={() => setProductFilter(cat)}
                      className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                        productFilter === cat
                          ? 'bg-[#1F1F1F] dark:bg-[#C89B7B] text-white'
                          : 'bg-[#F8F3EE] hover:bg-[#D6C5B4]/20 text-[#4A4A4A]/80 dark:bg-[#1F1F1F]/50 dark:text-gray-300'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((p) => {
                  const isWishlisted = wishlist.includes(p.id);
                  return (
                    <div
                      key={p.id}
                      id={`product-card-${p.id}`}
                      className="group relative bg-[#F8F3EE]/40 dark:bg-[#1D1D1D] rounded-3xl border border-[#D6C5B4]/15 hover:border-[#C89B7B]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden text-left hover:shadow-lg"
                    >
                      {/* Ribbon banner */}
                      {p.isBestSeller && (
                        <span className="absolute left-4 top-4 bg-[#C89B7B] text-white text-[8px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full z-10 flex items-center gap-1">
                          <Sparkles size={10} /> Best
                        </span>
                      )}

                      {/* Wishlist Icon action */}
                      <button
                        id={`btn-wishlist-${p.id}`}
                        onClick={() => toggleWishlist(p.id)}
                        className={`absolute right-4 top-4 z-10 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors border shadow-xs ${
                          isWishlisted
                            ? 'bg-rose-50 border-rose-100 text-rose-500'
                            : 'bg-white/80 backdrop-blur-md border-[#D6C5B4]/20 text-gray-400 hover:text-rose-500 hover:bg-white'
                        }`}
                      >
                        <Heart size={14} fill={isWishlisted ? 'currentColor' : 'none'} />
                      </button>

                      {/* Cover Product Photo */}
                      <div className="p-8 pb-4 flex items-center justify-center relative cursor-pointer" onClick={() => setQuickViewProduct(p)}>
                        <img
                          src={p.image}
                          alt={p.name}
                          referrerPolicy="no-referrer"
                          className="w-full max-w-[200px] aspect-square object-contain rounded-2xl transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Texts block */}
                      <div className="p-6 md:p-8 pt-2 space-y-2 flex-grow flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-[#C89B7B] tracking-widest">
                            {p.category}
                          </span>
                          <h4 className="text-base font-medium text-[#1F1F1F] dark:text-white mt-0.5 leading-snug">
                            {p.name}
                          </h4>
                          
                          {/* Rating counts */}
                          <div className="flex items-center gap-1 text-[11px] text-amber-500 overflow-hidden pt-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} size={11} fill={i < Math.floor(p.rating) ? 'currentColor' : 'none'} />
                            ))}
                            <span className="text-[#4A4A4A]/50 dark:text-gray-300 font-semibold ml-1">{p.rating}</span>
                          </div>

                          <p className="text-xs text-[#4A4A4A]/85 dark:text-gray-300 mt-2 leading-relaxed line-clamp-2">
                            {p.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between border-t border-[#D6C5B4]/10 pt-4 mt-4">
                          <span className="text-sm font-semibold text-[#1F1F1F] dark:text-white">
                            ₹{p.price.toLocaleString('en-IN')}
                          </span>

                          <div className="flex items-center gap-1.5">
                            <button
                              id={`btn-qv-${p.id}`}
                              onClick={() => setQuickViewProduct(p)}
                              className="px-3 h-8 border border-[#D6C5B4]/40 hover:bg-gray-50 dark:hover:bg-white/5 rounded-full text-[10px] font-bold tracking-wider text-[#4A4A4A] dark:text-gray-300 uppercase transition-all"
                            >
                              Details
                            </button>
                            <button
                              id={`btn-add-cart-${p.id}`}
                              onClick={() => addToCart(p)}
                              className="px-3.5 h-8 bg-[#C89B7B] hover:bg-[#C89B7B]/90 text-white rounded-full text-[10px] font-bold tracking-wider uppercase transition-all"
                            >
                              Add
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 6. Expertise Section */}
          <section className="py-20 bg-[#F8F3EE]/60 dark:bg-[#121212] border-t border-[#D6C5B4]/10 overflow-hidden text-left">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left side benchmarks narrative */}
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-xs font-bold tracking-widest text-[#C89B7B] uppercase block">
                    Our Expertise
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#1F1F1F] dark:text-white leading-tight">
                    Scientifically Approved, Biodegradable Standard
                  </h2>
                  <p className="text-xs text-[#4A4A4A]/80 dark:text-gray-300 leading-relaxed">
                    Cosmic is backed by decades of laboratory molecular audits. We ensure clinical integrity, selecting stabilized prebiotic agents to optimize your skin biome profile safely.
                  </p>
                  
                  {/* Small certifications showcase */}
                  <div className="pt-4 flex gap-3 flex-wrap">
                    <span className="px-3 py-1.5 bg-white dark:bg-[#1F1F1F] rounded-full text-[9px] font-bold tracking-widest uppercase border border-[#D6C5B4]/20 flex items-center gap-1 text-[#4A4A4A]">
                      ✓ FDA Laboratory Audited
                    </span>
                    <span className="px-3 py-1.5 bg-white dark:bg-[#1F1F1F] rounded-full text-[9px] font-bold tracking-widest uppercase border border-[#D6C5B4]/20 flex items-center gap-1 text-[#4A4A4A]">
                      ✓ EcoCert Ingredients
                    </span>
                  </div>
                </div>

                {/* Right side progressive trackers */}
                <div className="lg:col-span-7 space-y-5">
                  
                  {/* Dermatology Research */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-white">
                      <span>Dermatology Research</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full h-2 bg-[#D6C5B4]/20 rounded-full overflow-hidden">
                      <div className="h-full bg-[#C89B7B] transition-all duration-1000" style={{ width: '95%' }}></div>
                    </div>
                  </div>

                  {/* Product Innovation */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-white">
                      <span>Product Innovation</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full h-2 bg-[#D6C5B4]/20 rounded-full overflow-hidden">
                      <div className="h-full bg-[#C89B7B] transition-all duration-1000" style={{ width: '92%' }}></div>
                    </div>
                  </div>

                  {/* Customer Satisfaction */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-white">
                      <span>Customer Satisfaction</span>
                      <span>98%</span>
                    </div>
                    <div className="w-full h-2 bg-[#D6C5B4]/20 rounded-full overflow-hidden">
                      <div className="h-full bg-[#C89B7B] transition-all duration-1000" style={{ width: '98%' }}></div>
                    </div>
                  </div>

                  {/* Sustainability */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-white">
                      <span>Sustainability Quotient</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full h-2 bg-[#D6C5B4]/20 rounded-full overflow-hidden">
                      <div className="h-full bg-[#C89B7B] transition-all duration-1000" style={{ width: '90%' }}></div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </section>

          {/* 7. Portfolio / Results Swipeable Gallery Area */}
          <section className="py-20 bg-white dark:bg-[#161616] border-y border-[#D6C5B4]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-xl mx-auto mb-10">
                <span className="text-xs font-bold tracking-widest text-[#C89B7B] uppercase block">
                  Cutaneous Progress Gallery
                </span>
                <h2 className="text-3xl font-serif text-[#1F1F1F] dark:text-white mt-1">
                  Proven Clinical Transformations
                </h2>
                <p className="text-xs text-[#4A4A4A]/60 dark:text-gray-400 mt-2">
                  Verify the physical effectiveness of Cosmic daily rituals through audited before-and-after portrait records.
                </p>
              </div>

              <BeforeAfterSlider />
            </div>
          </section>

          {/* Interactive Skin Assessment Questionnaire Container */}
          <section className="py-20 bg-[#F3ECE6]/40 dark:bg-[#121212]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SkinAnalysis />
            </div>
          </section>

          {/* 8. Why Choose Cosmic Section */}
          <section className="py-20 bg-white dark:bg-[#161616] overflow-hidden text-left">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="text-xs font-bold tracking-widest text-[#C89B7B] uppercase block">
                  Dermal Safeguards
                </span>
                <h2 className="text-3xl font-serif text-[#1F1F1F] dark:text-white mt-1">
                  Why Beautys Choose Cosmic
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Clinically Tested */}
                <div className="p-6 rounded-2xl border border-[#D6C5B4]/20 bg-[#F8F3EE]/15 dark:bg-[#1F1F1F] space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#C89B7B]/10 dark:bg-[#C89B7B]/25 flex items-center justify-center text-[#C89B7B]">
                    <ShieldCheck size={20} />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-white">
                    Clinically Tested formulation
                  </h4>
                  <p className="text-xs text-[#4A4A4A]/80 dark:text-gray-300 leading-relaxed">
                    Tested on sensory models locally under strict clinical dermatologist control to guarantee absolute zero allergic flare-ups.
                  </p>
                </div>

                {/* Dermatologist Approved */}
                <div className="p-6 rounded-2xl border border-[#D6C5B4]/20 bg-[#F8F3EE]/15 dark:bg-[#1F1F1F] space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#C89B7B]/10 dark:bg-[#C89B7B]/25 flex items-center justify-center text-[#C89B7B]">
                    <Sparkles size={20} />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-white">
                    Dermatologist Vetted
                  </h4>
                  <p className="text-xs text-[#4A4A4A]/80 dark:text-gray-300 leading-relaxed">
                    Recommended internationally by lead plastic and Cutaneous Specialist centers as a highly stable post-peel maintenance care.
                  </p>
                </div>

                {/* Cruelty Free */}
                <div className="p-6 rounded-2xl border border-[#D6C5B4]/20 bg-[#F8F3EE]/15 dark:bg-[#1F1F1F] space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#C89B7B]/10 dark:bg-[#C89B7B]/25 flex items-center justify-center text-[#C89B7B]">
                    <Award size={20} />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-white">
                    100% Cruelty Free
                  </h4>
                  <p className="text-xs text-[#4A4A4A]/80 dark:text-gray-300 leading-relaxed">
                    Zero raw molecules or final emulsions are tested on animals. Fully certified under standard Leaping Bunny guidelines.
                  </p>
                </div>

                {/* Natural Ingredients */}
                <div className="p-6 rounded-2xl border border-[#D6C5B4]/20 bg-[#F8F3EE]/15 dark:bg-[#1F1F1F] space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#C89B7B]/10 dark:bg-[#C89B7B]/25 flex items-center justify-center text-[#C89B7B]">
                    <Leaf size={20} />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-white">
                    Stabilized Natural Essentials
                  </h4>
                  <p className="text-xs text-[#4A4A4A]/80 dark:text-gray-300 leading-relaxed">
                    Hand-harvested active botanicals integrated at optimal biochemical concentrations to balance skin microbiome assets.
                  </p>
                </div>

                {/* Sustainable Packaging */}
                <div className="p-6 rounded-2xl border border-[#D6C5B4]/20 bg-[#F8F3EE]/15 dark:bg-[#1F1F1F] space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#C89B7B]/10 dark:bg-[#C89B7B]/25 flex items-center justify-center text-[#C89B7B]">
                    <Award size={20} />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-white">
                    Meltable Eco Packaging
                  </h4>
                  <p className="text-xs text-[#4A4A4A]/80 dark:text-gray-300 leading-relaxed">
                    Shipped inside recycled frosted bio-glass and biodegradable bamboo boxes to reduce plastic waste indexes to zero.
                  </p>
                </div>

                {/* Fast Customer Support */}
                <div className="p-6 rounded-2xl border border-[#D6C5B4]/20 bg-[#F8F3EE]/15 dark:bg-[#1F1F1F] space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#C89B7B]/10 dark:bg-[#C89B7B]/25 flex items-center justify-center text-[#C89B7B]">
                    <Clock size={20} />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#1F1F1F] dark:text-white">
                    24/7 Skin Coach Guide
                  </h4>
                  <p className="text-xs text-[#4A4A4A]/80 dark:text-gray-300 leading-relaxed">
                    Access dedicated skin experts through our interactive live dashboard, offering custom routing recommendations always.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* 9. Testimonials Carousel Section */}
          <section id="testimonials" className="py-20 bg-[#F3ECE6]/40 dark:bg-[#121212] relative overflow-hidden text-center">
            {/* Ambient elements */}
            <div className="absolute top-0 right-10 w-48 h-48 bg-[#C89B7B]/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
              <div className="space-y-1">
                <span className="text-xs font-bold tracking-widest text-[#C89B7B] uppercase block">
                  Press & Verified Reviews
                </span>
                <h2 className="text-3xl font-serif text-[#1F1F1F] dark:text-white">
                  Loved Internationally
                </h2>
              </div>

              {/* Slider wrapper */}
              <div className="relative p-8 md:p-12 rounded-3xl glassmorphism border border-[#D6C5B4]/30 shadow-2xl space-y-6 max-w-2xl mx-auto flex flex-col items-center">
                
                {/* Score */}
                <div className="flex text-amber-500 justify-center">
                  {Array.from({ length: testimonials[testimonialIndex].rating }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm md:text-base italic font-serif text-[#1F1F1F] dark:text-white leading-relaxed">
                  " {testimonials[testimonialIndex].text} "
                </p>

                {/* Reviewer Details */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonials[testimonialIndex].image}
                    alt={testimonials[testimonialIndex].name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#C89B7B] shrink-0"
                  />
                  <div className="text-left">
                    <span className="block text-xs font-bold text-[#1F1F1F] dark:text-white">
                      {testimonials[testimonialIndex].name}
                    </span>
                    <span className="block text-[10px] text-[#C89B7B] uppercase tracking-widest font-semibold mt-0.5">
                      {testimonials[testimonialIndex].role}
                    </span>
                  </div>
                </div>

                {/* Left/Right actions */}
                <div className="flex justify-center gap-3 pt-4 border-t border-[#D6C5B4]/10 w-full">
                  <button
                    id="btn-testi-prev"
                    onClick={prevTestimonial}
                    className="w-8 h-8 rounded-full border border-[#D6C5B4]/40 flex items-center justify-center text-[#1F1F1F] dark:text-white hover:bg-[#C89B7B] hover:text-white hover:border-[#C89B7B] transition-all focus:outline-none"
                  >
                    ‹
                  </button>
                  <span className="text-[11px] font-medium text-gray-500 self-center">
                    {testimonialIndex + 1} of {testimonials.length}
                  </span>
                  <button
                    id="btn-testi-next"
                    onClick={nextTestimonial}
                    className="w-8 h-8 rounded-full border border-[#D6C5B4]/40 flex items-center justify-center text-[#1F1F1F] dark:text-white hover:bg-[#C89B7B] hover:text-white hover:border-[#C89B7B] transition-all focus:outline-none"
                  >
                    ›
                  </button>
                </div>
              </div>

            </div>
          </section>

          {/* 10. FAQ Accordion Section */}
          <section id="faqs" className="py-20 bg-white dark:bg-[#161616] overflow-hidden text-left">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="text-xs font-bold tracking-widest text-[#C89B7B] uppercase block">
                  Information Centre
                </span>
                <h2 className="text-3xl font-serif text-[#1F1F1F] dark:text-white mt-1">
                  Frequently Asked Questions
                </h2>
              </div>

              {/* FAQ Accordions lists */}
              <div className="space-y-4 max-w-2xl mx-auto">
                {faqs.map((faq) => {
                  const isOpen = activeFaq === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="border border-[#D6C5B4]/30 rounded-2xl overflow-hidden bg-[#F8F3EE]/10 dark:bg-[#1F1F1F]/20"
                    >
                      <button
                        id={`faq-trigger-${faq.id}`}
                        onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                        className="w-full p-5 flex justify-between items-center text-left text-[#1F1F1F] dark:text-white focus:outline-none select-none hover:bg-[#F8F3EE]/30 dark:hover:bg-white/5"
                      >
                        <span className="text-xs md:text-sm font-semibold tracking-wide">
                          {faq.question}
                        </span>
                        <ChevronDown size={15} className={`text-[#C89B7B] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="p-5 pt-0 text-[11px] md:text-xs text-[#4A4A4A] dark:text-gray-300 border-t border-[#D6C5B4]/15 bg-white dark:bg-[#1C1C1C] leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>

          {/* 11. Contact Section */}
          <section id="contact" className="py-20 bg-[#F3ECE6]/40 dark:bg-[#121212] overflow-hidden text-left">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Contact Information & Map placeholder */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-bold tracking-widest text-[#C89B7B] uppercase block">
                      Get In Touch
                    </span>
                    <h2 className="text-3xl font-serif text-[#1F1F1F] dark:text-white leading-tight">
                      We Invite You To Connect
                    </h2>
                    <p className="text-xs text-[#4A4A4A] dark:text-gray-300 max-w-sm leading-relaxed">
                      Reach our flagship suites or customer care teams with any formulation questions.
                    </p>
                  </div>

                  {/* Info list */}
                  <div className="space-y-3 pt-2 text-xs">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#C89B7B]/10 dark:bg-[#C89B7B]/20 flex items-center justify-center text-[#C89B7B] shrink-0">
                        <MapPin size={13} />
                      </div>
                      <div className="text-left">
                        <span className="block font-bold text-[#1F1F1F] dark:text-white">Flagship Suites</span>
                        <span className="text-[#4A4A4A]/80 dark:text-gray-400 mt-0.5 block leading-tight">
                          782 Luxury Pavilions Blvd, level 2, Beverly Hills, CA 90210
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#C89B7B]/10 dark:bg-[#C89B7B]/20 flex items-center justify-center text-[#C89B7B] shrink-0">
                        <Mail size={13} />
                      </div>
                      <div className="text-left">
                        <span className="block font-bold text-[#1F1F1F] dark:text-white">Email Address</span>
                        <span className="text-[#4A4A4A]/80 dark:text-gray-400 mt-0.5 block">
                          concierge@cosmicskincare.com
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#C89B7B]/10 dark:bg-[#C89B7B]/20 flex items-center justify-center text-[#C89B7B] shrink-0">
                        <Phone size={13} />
                      </div>
                      <div className="text-left">
                        <span className="block font-bold text-[#1F1F1F] dark:text-white">Direct Phone</span>
                        <span className="text-[#4A4A4A]/80 dark:text-gray-400 mt-0.5 block">
                          +1 (310) 902-8822
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 11. Interactive Styled Google Map Placeholder */}
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#D6C5B4]/30 bg-[#F8F3EE] dark:bg-[#1D1D1D] shadow-inner flex items-center justify-center text-center p-4">
                    {/* Visual pattern representing map */}
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C89B7B_1.5px,transparent_1.5px)] [background-size:16px_16px]"></div>
                    <div className="relative z-10 space-y-1">
                      <MapPin size={18} className="text-[#C89B7B] mx-auto animate-bounce" />
                      <span className="block text-xs font-bold text-[#1F1F1F] dark:text-white uppercase tracking-wider">
                        Beverly Hills Plaza Map
                      </span>
                      <span className="block text-[10px] text-gray-500 max-w-xs mx-auto">
                        Interactive map loaded. Standard GPS coordinates locked at Cutaneous Suite 205.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contact Intake Intake Form area */}
                <div className="lg:col-span-7 bg-white dark:bg-[#1F1F1F] border border-[#D6C5B4]/20 p-6 md:p-8 rounded-3xl shadow-sm relative">
                  <AnimatePresence mode="wait">
                    {!contactSuccess ? (
                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold tracking-widest text-[#1F1F1F] dark:text-white">
                              Full Name
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Anastasia Vance"
                              value={contactForm.name}
                              onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                              className="w-full h-11 px-3 rounded-xl border border-[#D6C5B4]/30 bg-[#F8F3EE]/15 dark:bg-[#121212] text-xs focus:border-[#C89B7B] focus:ring-1 focus:ring-[#C89B7B]"
                            />
                          </div>
                          
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold tracking-widest text-[#1F1F1F] dark:text-white">
                              Email Address
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="anastasia@glow.com"
                              value={contactForm.email}
                              onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                              className="w-full h-11 px-3 rounded-xl border border-[#D6C5B4]/30 bg-[#F8F3EE]/15 dark:bg-[#121212] text-xs focus:border-[#C89B7B] focus:ring-1 focus:ring-[#C89B7B]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold tracking-widest text-[#1F1F1F] dark:text-white">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              placeholder="+1 (555) 782-9011"
                              value={contactForm.phone}
                              onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                              className="w-full h-11 px-3 rounded-xl border border-[#D6C5B4]/30 bg-[#F8F3EE]/15 dark:bg-[#121212] text-xs focus:border-[#C89B7B]"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold tracking-widest text-[#1F1F1F] dark:text-white">
                              Message Subject
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="E.g., Ingredient allergen query..."
                              value={contactForm.subject}
                              onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                              className="w-full h-11 px-3 rounded-xl border border-[#D6C5B4]/30 bg-[#F8F3EE]/15 dark:bg-[#121212] text-xs focus:border-[#C89B7B]"
                            />
                          </div>
                        </div>

                        <div className="space-y-1 text-left">
                          <label className="text-[10px] uppercase font-bold tracking-widest text-[#1F1F1F] dark:text-white">
                            Your Message
                          </label>
                          <textarea
                            required
                            placeholder="Tell us about your cutaneous focus or treatment requirements..."
                            rows={3}
                            value={contactForm.message}
                            onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                            className="w-full p-3 rounded-xl border border-[#D6C5B4]/30 bg-[#F8F3EE]/15 dark:bg-[#121212] text-xs focus:border-[#C89B7B] resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full h-12 bg-[#1F1F1F] hover:bg-black dark:bg-[#C89B7B] dark:hover:bg-[#C89B7B]/95 text-white text-xs font-semibold tracking-widest uppercase rounded-full flex items-center justify-center gap-2 shadow-lg transition-all"
                        >
                          Send Message
                        </button>
                      </form>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="py-12 text-center space-y-4"
                      >
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                          <ShieldCheck size={24} />
                        </div>
                        <h4 className="text-lg font-serif text-[#1F1F1F] dark:text-white">Message Dispatched</h4>
                        <p className="text-xs text-[#4A4A4A] dark:text-gray-300 max-w-sm mx-auto leading-relaxed">
                          Thank you, <strong>{contactForm.name}</strong>. We have securely catalogued your inquiry. A skin care advisor will contact you shortly.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </div>
          </section>

          {/* 12. Newsletter Subscription Area */}
          <section className="py-16 bg-[#F8F3EE] dark:bg-[#161616] border-y border-[#D6C5B4]/25 overflow-hidden text-center">
            <div className="max-w-xl mx-auto px-4 space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#C89B7B] uppercase block">
                Join the Cosmic Beauty Community
              </span>
              <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
                Subscribe to coordinate priority product pre-orders, and obtain laboratory treatment insights once a week.
              </p>

              <AnimatePresence mode="wait">
                {!newsletterSuccess ? (
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter email address (e.g. anastasia@glow.com)"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="flex-grow h-11 px-4 border border-[#D6C5B4]/40 bg-white text-xs rounded-full text-[#1F1F1F] focus:border-[#C89B7B]"
                    />
                    <button
                      type="submit"
                      className="h-11 px-8 bg-[#1F1F1F] hover:bg-black dark:bg-[#C89B7B] dark:hover:bg-[#C89B7B]/95 text-white text-xs font-semibold tracking-widest uppercase rounded-full shadow-lg transition-all shrink-0"
                    >
                      Subscribe
                    </button>
                  </form>
                ) : (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-emerald-600 font-semibold pt-2"
                  >
                    ✓ Welcome! Check your inbox for your 15% VIP invite code.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* 13. Footer */}
          <Footer />

          {/* 14. Floating Widget Actions Trigger: WhatsApp support float button */}
          <a
            id="floating-whatsapp-widget"
            href="https://wa.me/13109028822"
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 left-6 z-30 w-12 h-12 bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-emerald-200 transition-all cursor-pointer"
            aria-label="Direct Live Advice"
          >
            <MessageCircle size={22} fill="currentColor" />
          </a>

          {/* Floating Widget Actions Trigger: Back To Top */}
          <AnimatePresence>
            {isBackToTopVisible && (
              <motion.button
                id="btn-back-to-top"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-6 right-6 z-30 w-10 h-10 bg-white dark:bg-[#1F1F1F] hover:bg-[#F8F3EE] dark:hover:bg-[#2A2A2A] text-[#1F1F1F] dark:text-white rounded-full flex items-center justify-center border border-[#D6C5B4]/30 shadow-lg cursor-pointer transition-all"
                aria-label="Scroll back upwards"
              >
                <ArrowUp size={14} />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Modals & Slide Drawers Elements */}
          <QuickViewModal
            product={quickViewProduct}
            onClose={() => setQuickViewProduct(null)}
          />

          <ConsultationModal
            isOpen={isBookingOpen}
            selectedService={bookingService}
            onClose={() => setIsBookingOpen(false)}
          />

          <CartDrawer />

        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <CosmicAppContent />
    </CartProvider>
  );
}
