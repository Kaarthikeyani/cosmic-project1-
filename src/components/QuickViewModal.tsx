/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Check, Sparkles, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'benefits' | 'ingredients' | 'usage'>('benefits');
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1F1F1F]/70 backdrop-blur-sm"
        />

        {/* Modal panel body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 180 }}
          className="relative bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-[#D6C5B4]/20 flex flex-col md:flex-row z-10"
        >
          {/* Close trigger button */}
          <button
            id="btn-close-quickview"
            onClick={onClose}
            className="absolute right-4 top-4 z-20 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md hover:bg-[#F8F3EE] flex items-center justify-center border border-[#D6C5B4]/20 text-[#1F1F1F] transition-all"
          >
            <X size={15} />
          </button>

          {/* Left Block: Image */}
          <div className="md:w-1/2 bg-[#F8F3EE]/60 p-8 flex items-center justify-center relative">
            {product.isBestSeller && (
              <span className="absolute left-6 top-6 bg-[#C89B7B] text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full flex items-center gap-1">
                <Sparkles size={10} /> Bestseller
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full max-w-[240px] aspect-square object-contain mix-blend-darken rounded-2xl"
            />
          </div>

          {/* Right Block: Product Details */}
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col max-h-[100vw] md:max-h-[500px] overflow-y-auto text-left">
            <span className="text-[10px] uppercase tracking-widest text-[#C89B7B] font-bold">
              {product.category}
            </span>
            <h3 className="text-xl md:text-2xl font-serif text-[#1F1F1F] mt-1">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mt-2">
              <div className="flex text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                ))}
              </div>
              <span className="text-xs font-semibold text-[#1F1F1F]">
                {product.rating}
              </span>
              <span className="text-xs text-[#4A4A4A]/50">
                ({product.reviewsCount} verified reviews)
              </span>
            </div>

            {/* Price */}
            <div className="text-lg font-semibold text-[#1F1F1F] mt-3">
              ₹{product.price.toLocaleString('en-IN')}
            </div>

            {/* Description */}
            <p className="text-xs text-[#4A4A4A] mt-2 leading-relaxed">
              {product.description}
            </p>

            {/* Deep Tabs */}
            <div className="flex border-b border-[#D6C5B4]/15 mt-5">
              {(['benefits', 'ingredients', 'usage'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 pb-2 text-xs font-bold tracking-widest uppercase border-b-2 transition-all ${
                    activeTab === tab
                      ? 'border-[#C89B7B] text-[#1F1F1F]'
                      : 'border-transparent text-[#4A4A4A]/50 hover:text-[#4A4A4A]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content Display based on activeTab */}
            <div className="flex-grow py-4">
              <AnimatePresence mode="wait">
                {activeTab === 'benefits' && (
                  <motion.ul
                    key="benefits"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="space-y-1.5 text-xs text-[#4A4A4A]"
                  >
                    {product.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check size={12} className="text-emerald-500 mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}

                {activeTab === 'ingredients' && (
                  <motion.div
                    key="ingredients"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="space-y-2"
                  >
                    <p className="text-[11px] font-bold text-[#1F1F1F] uppercase tracking-wider">
                      Core Active Biochemistry:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.ingredients.map((ing, i) => (
                        <span key={i} className="text-[10px] bg-[#F8F3EE] border border-[#D6C5B4]/20 px-2.5 py-1 rounded-full text-[#4A4A4A] font-medium">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'usage' && (
                  <motion.p
                    key="usage"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-[#4A4A4A] leading-relaxed italic"
                  >
                    {product.usage}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Footer triggers: Quantity Counter & Cart button */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#D6C5B4]/15 mt-auto">
              <div className="flex items-center border border-[#D6C5B4]/40 rounded-full h-11 px-3">
                <button
                  id="btn-qv-qty-down"
                  disabled={quantity <= 1}
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-5 h-5 flex items-center justify-center text-[#4A4A4A]/60 hover:text-[#1F1F1F] text-sm disabled:opacity-30"
                >
                  -
                </button>
                <span className="w-8 text-center text-xs font-semibold text-[#1F1F1F]">
                  {quantity}
                </span>
                <button
                  id="btn-qv-qty-up"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-5 h-5 flex items-center justify-center text-[#4A4A4A]/60 hover:text-[#1F1F1F] text-sm"
                >
                  +
                </button>
              </div>

              <button
                id="btn-add-qv-cart"
                onClick={handleAddToCart}
                className="flex-grow bg-[#C89B7B] hover:bg-[#C89B7B]/90 text-white h-11 rounded-full text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 transition-all shadow-md shadow-[#C89B7B]/15"
              >
                <ShoppingBag size={14} /> Add {quantity > 1 ? `(${quantity})` : ''} to Ritual
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
