/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioItems } from '../data';
import { Sparkles, ArrowRightLeft, CheckCircle2 } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'Acne Care' | 'Anti-Aging' | 'Hydration' | 'Brightening'>('Acne Care');
  const [sliderPosition, setSliderPosition] = useState(50); // percentage
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const activeItem = portfolioItems.find((item) => item.category === selectedCategory) || portfolioItems[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleStart = () => {
    isDragging.current = true;
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const onMouseUp = () => handleEnd();
    const onMouseMove = (e: MouseEvent) => handleMouseMove(e);
    const onTouchMove = (e: TouchEvent) => handleTouchMove(e);

    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchend', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchend', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  const triggerClickMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  return (
    <div id="results-gallery" className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {(['Acne Care', 'Anti-Aging', 'Hydration', 'Brightening'] as const).map((cat) => (
          <button
            key={cat}
            id={`tab-${cat.toLowerCase().replace(' ', '-')}`}
            onClick={() => {
              setSelectedCategory(cat);
              setSliderPosition(50);
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
              selectedCategory === cat
                ? 'bg-[#C89B7B] text-white shadow-lg shadow-[#C89B7B]/20'
                : 'bg-white hover:bg-[#F8F3EE] text-[#4A4A4A] border border-[#D6C5B4]/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Slider Element */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div
            ref={containerRef}
            onMouseDown={handleStart}
            onTouchStart={handleStart}
            onClick={triggerClickMove}
            className="relative w-full aspect-[4/3] max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-white/50 cursor-ew-resize select-none bg-[#F8F3EE]"
          >
            {/* After Image (Full Base) */}
            <img
              src={activeItem.afterImage}
              alt="After Clinical Treatment"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute right-4 bottom-4 bg-emerald-500/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-white uppercase flex items-center gap-1.5">
              <CheckCircle2 size={12} /> Radiant After
            </div>

            {/* Before Image (Clipping Layer) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={activeItem.beforeImage}
                alt="Before Treatment"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current ? containerRef.current.offsetWidth : 450 }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute left-4 bottom-4 bg-red-500/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-white uppercase">
                Before Care
              </div>
            </div>

            {/* Sliding handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none cursor-ew-resize flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-white text-[#C89B7B] shadow-2xl flex items-center justify-center border border-[#D6C5B4] focus:outline-none focus:ring-2 focus:ring-[#C89B7B]">
                <ArrowRightLeft size={14} className="animate-pulse" />
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-[#4A4A4A]/60 mt-4 flex items-center gap-1.5">
            <Sparkles size={13} className="text-[#C89B7B]" />
            Drag handle left or right to inspect the cutaneous transformation.
          </p>
        </div>

        {/* Narrative / Context details */}
        <div className="lg:col-span-5 space-y-5 text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C89B7B] bg-[#C89B7B]/10 px-3 py-1 rounded-full">
                {activeItem.category}
              </span>
              <h3 className="text-2xl font-serif font-medium text-[#1F1F1F] tracking-tight">
                {activeItem.title}
              </h3>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">
                {activeItem.description}
              </p>
              
              <div className="p-5 rounded-2xl bg-white border border-[#D6C5B4]/20 space-y-2 shadow-sm">
                <h4 className="text-xs font-bold tracking-widest text-[#1F1F1F] uppercase">
                  Verified Clinical Results
                </h4>
                <p className="text-sm font-medium text-[#C89B7B]">
                  {activeItem.results}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <div className="h-[1px] flex-grow bg-gradient-to-r from-[#D6C5B4]/40 to-transparent"></div>
                <span className="text-[10px] tracking-widest text-[#4A4A4A]/50 uppercase font-bold">
                  Dermatologically Confirmed
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
