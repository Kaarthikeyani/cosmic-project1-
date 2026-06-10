/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ArrowRight, Sparkles, CheckCircle, CreditCard, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
    clearCart,
  } = useCart();

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'paying' | 'success'>('cart');
  const [shippingForm, setShippingForm] = useState({
    name: '',
    address: '',
    city: '',
    card: '',
  });

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === 'GLOW26') {
      setDiscount(0.15); // 15% discount
      setPromoApplied(true);
    } else {
      alert('Invalid promo code. Try "GLOW26" for 15% luxury discount.');
    }
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('paying');
    setTimeout(() => {
      setCheckoutStep('success');
    }, 1800);
  };

  const finalTotal = cartTotal * (1 - discount);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Background backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsCartOpen(false);
              setCheckoutStep('cart');
            }}
            className="absolute inset-0 bg-[#1F1F1F]/60 backdrop-blur-xs"
          />

          {/* Drawer container panel body */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="w-screen max-w-md bg-white border-l border-[#D6C5B4]/20 flex flex-col shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-[#D6C5B4]/15 flex justify-between items-center bg-[#F8F3EE]/40">
                <div className="flex items-center gap-2">
                  <ShoppingBag size={18} className="text-[#C89B7B]" />
                  <h3 className="font-serif text-lg font-medium text-[#1F1F1F]">
                    Your Skincare Ritual ({cartItems.length})
                  </h3>
                </div>
                <button
                  id="btn-close-cart"
                  onClick={() => {
                    setIsCartOpen(false);
                    setCheckoutStep('cart');
                  }}
                  className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-[#1F1F1F]"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-grow overflow-y-auto p-6 space-y-5">
                {checkoutStep === 'cart' && (
                  <>
                    {cartItems.length === 0 ? (
                      <div className="h-4/5 flex flex-col items-center justify-center text-center space-y-4">
                        <div className="w-14 h-14 bg-[#F8F3EE] rounded-full flex items-center justify-center text-[#C89B7B]">
                          <ShoppingBag size={24} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#1F1F1F]">Your cart is empty.</p>
                          <p className="text-[11px] text-[#4A4A4A]/60 max-w-xs mt-1">
                            Discover botanical formulations and skin boosting elixirs to initialize a radiant regimen.
                          </p>
                        </div>
                        <button
                          onClick={() => setIsCartOpen(false)}
                          className="px-6 py-2.5 bg-[#C89B7B] text-white hover:bg-[#C89B7B]/90 rounded-full text-xs font-semibold tracking-wider uppercase transition-all"
                        >
                          Explore Formulations
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {cartItems.map((item) => (
                          <div
                            key={item.product.id}
                            className="flex gap-4 p-3.5 border border-[#D6C5B4]/15 rounded-2xl bg-[#F8F3EE]/20 hover:bg-white transition-all relative overflow-hidden"
                          >
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              referrerPolicy="no-referrer"
                              className="w-16 h-16 object-contain rounded-lg mix-blend-darken bg-[#F8F3EE]/50 shrink-0"
                            />

                            <div className="flex-grow space-y-1 text-left">
                              <span className="text-[9px] uppercase tracking-wider text-[#C89B7B] font-bold">
                                {item.product.category}
                              </span>
                              <h4 className="text-xs font-medium text-[#1F1F1F] leading-snug">
                                {item.product.name}
                              </h4>
                              <p className="text-xs font-semibold text-[#1F1F1F]">
                                ₹{item.product.price.toLocaleString('en-IN')}
                              </p>

                              {/* Quantity selection */}
                              <div className="flex items-center gap-1.5 pt-1.5">
                                <div className="flex items-center border border-[#D6C5B4]/30 rounded-full h-7 px-2 bg-white">
                                  <button
                                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                    className="w-4 h-4 text-xs font-bold text-gray-500 flex items-center justify-center hover:text-[#1F1F1F]"
                                  >
                                    -
                                  </button>
                                  <span className="w-5 text-center text-[11px] font-semibold text-[#1F1F1F]">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                    className="w-4 h-4 text-xs font-bold text-gray-500 flex items-center justify-center hover:text-[#1F1F1F]"
                                  >
                                    +
                                  </button>
                                </div>

                                <button
                                  onClick={() => removeFromCart(item.product.id)}
                                  className="text-gray-400 hover:text-red-500 ml-auto transition-colors focus:outline-none"
                                >
                                  <Trash2 size={13} />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {checkoutStep === 'paying' && (
                  <div className="h-4/5 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="relative w-12 h-12">
                      <div className="absolute inset-0 rounded-full border-4 border-[#C89B7B]/20"></div>
                      <div className="absolute inset-0 rounded-full border-4 border-t-[#C89B7B] animate-spin"></div>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-[#C89B7B] uppercase animate-pulse">
                        Encrypting Ledger Vault...
                      </p>
                      <p className="text-[10px] text-[#4A4A4A]/50 max-w-xs mx-auto">
                        Your transaction session is being catalogued securely on our premium server nodes.
                      </p>
                    </div>
                  </div>
                )}

                {checkoutStep === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-4/5 flex flex-col items-center justify-center text-center space-y-5"
                  >
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center border border-emerald-100">
                      <CheckCircle size={28} />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-lg font-serif text-[#1F1F1F]">
                        Order Placed, Anastasia
                      </h4>
                      <p className="text-xs text-[#4A4A4A]/75 max-w-xs mx-auto leading-relaxed">
                        We have logged your order and prepared your custom package for priority shipment.
                      </p>
                    </div>

                    <div className="p-4 bg-[#F8F3EE]/80 border border-[#D6C5B4]/30 rounded-2xl w-full text-left font-mono text-[10px] space-y-2">
                      <div className="flex justify-between">
                        <span>EST. DISPATCH:</span>
                        <span className="font-bold">TODAY, 15:00 UTC</span>
                      </div>
                      <div className="flex justify-between">
                        <span>DELIVERY TYPE:</span>
                        <span className="font-bold">EXPRESS METROPOLITAN</span>
                      </div>
                      <div className="flex justify-between border-t border-[#D6C5B4]/20 pt-1.5 text-xs text-[#1F1F1F] font-semibold">
                        <span>CHARGE ACQUIRED:</span>
                        <span className="text-[#C89B7B]">₹{finalTotal.toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        clearCart();
                        setCheckoutStep('cart');
                        setDiscount(0);
                        setPromoApplied(false);
                        setIsCartOpen(false);
                      }}
                      className="px-8 py-3 bg-[#1F1F1F] hover:bg-black text-white rounded-full text-xs font-semibold tracking-widest uppercase transition-all"
                    >
                      Return to Brand Showcase
                    </button>
                  </motion.div>
                )}
              </div>

              {/* Drawer Footer (Cart Subtotal & Checkout Forms) */}
              {cartItems.length > 0 && checkoutStep === 'cart' && (
                <div className="p-6 border-t border-[#D6C5B4]/15 space-y-4 bg-[#F8F3EE]/10">
                  {/* Coupon form */}
                  {!promoApplied ? (
                    <form onSubmit={handleApplyPromo} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="GLOW26 (15% off coupon)"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-grow h-9 px-3 border border-[#D6C5B4]/30 bg-white text-xs rounded-lg uppercase font-mono tracking-wider focus:border-[#C89B7B]"
                      />
                      <button
                        type="submit"
                        className="h-9 px-4 border border-[#C89B7B] text-[#C89B7B] hover:bg-[#C89B7B]/10 rounded-lg text-[10px] font-bold tracking-widest uppercase transition-all"
                      >
                        Apply
                      </button>
                    </form>
                  ) : (
                    <div className="flex justify-between items-center bg-emerald-50 border border-emerald-100 p-2 rounded-lg text-emerald-800 text-[10px] font-medium">
                      <span>GLOW26 – 15% discount applied!</span>
                      <X
                        size={12}
                        className="cursor-pointer text-emerald-600 hover:text-emerald-900"
                        onClick={() => {
                          setPromoApplied(false);
                          setDiscount(0);
                        }}
                      />
                    </div>
                  )}

                  {/* Summary math */}
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-[#4A4A4A]">
                      <span>Ritual Subtotal:</span>
                      <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                    </div>
                    {promoApplied && (
                      <div className="flex justify-between text-emerald-600 font-medium">
                        <span>15% Special Discount:</span>
                        <span>-₹{(cartTotal * discount).toLocaleString('en-IN')}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-[#4A4A4A]">
                      <span>Eco-Sustainable Shipping:</span>
                      <span className="text-emerald-600 font-semibold uppercase text-[10px]">Complimentary</span>
                    </div>
                    <div className="flex justify-between text-[#1F1F1F] font-bold text-sm pt-2 border-t border-[#D6C5B4]/10">
                      <span>Total:</span>
                      <span className="text-[#C89B7B]">₹{finalTotal.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  {/* Checkout Shipping Form Accordion Accordance */}
                  <form onSubmit={handleCheckout} className="space-y-3 pt-2 text-left">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#1F1F1F] border-b border-[#D6C5B4]/10 pb-1 flex items-center gap-1">
                      <CreditCard size={12} /> Fast Secure Checkout
                    </p>
                    <div className="space-y-2">
                      <input
                        type="text"
                        required
                        placeholder="Shipping Recipient (e.g. Anastasia Vance)"
                        value={shippingForm.name}
                        onChange={(e) => setShippingForm({ ...shippingForm, name: e.target.value })}
                        className="w-full h-8 px-2.5 border border-[#D6C5B4]/30 bg-white text-[11px] rounded-lg focus:border-[#C89B7B]"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Secure Glass Shipping Address"
                        value={shippingForm.address}
                        onChange={(e) => setShippingForm({ ...shippingForm, address: e.target.value })}
                        className="w-full h-8 px-2.5 border border-[#D6C5B4]/30 bg-white text-[11px] rounded-lg focus:border-[#C89B7B]"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          required
                          placeholder="City / State"
                          value={shippingForm.city}
                          onChange={(e) => setShippingForm({ ...shippingForm, city: e.target.value })}
                          className="w-full h-8 px-2.5 border border-[#D6C5B4]/30 bg-white text-[11px] rounded-lg focus:border-[#C89B7B]"
                        />
                        <input
                          type="text"
                          required
                          placeholder="Card: 4111 •••• •••• 1025"
                          value={shippingForm.card}
                          onChange={(e) => setShippingForm({ ...shippingForm, card: e.target.value })}
                          className="w-full h-8 px-2.5 border border-[#D6C5B4]/30 bg-white text-[11px] rounded-lg focus:border-[#C89B7B]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full h-11 bg-[#1F1F1F] hover:bg-black text-white text-[11px] font-semibold tracking-widest uppercase rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-gray-300 transition-all"
                    >
                      Authorize Transaction • ₹{finalTotal.toLocaleString('en-IN')} <ArrowRight size={13} />
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
