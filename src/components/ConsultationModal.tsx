/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, CheckCircle2, Copy, AlertCircle, Sparkles } from 'lucide-react';
import { services } from '../data';
import { Service } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  selectedService: Service | null;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  selectedService,
  onClose,
}) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceId: selectedService?.id || 's1',
    date: '2026-06-15',
    time: '10:00',
    therapist: 'Dr. Alexis Sterling (Dermatologist)',
    notes: '',
  });

  const [bookingRef, setBookingRef] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Auto-sync incoming service trigger
  React.useEffect(() => {
    if (selectedService) {
      setForm((prev) => ({ ...prev, serviceId: selectedService.id }));
    }
  }, [selectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate luxury appointment scheduling registry
    const ref = `CS-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
  };

  const copyRefCode = () => {
    if (bookingRef) {
      navigator.clipboard.writeText(bookingRef);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const currentService = services.find((s) => s.id === form.serviceId) || services[0];

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

        {/* Modal body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 180 }}
          className="relative bg-white w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border border-[#D6C5B4]/20 z-10 p-6 md:p-8 text-left"
        >
          {/* Close trigger button */}
          <button
            id="btn-close-consult"
            onClick={onClose}
            className="absolute right-4 top-4 z-20 w-8 h-8 rounded-full bg-[#F8F3EE] hover:bg-[#D6C5B4]/20 flex items-center justify-center border border-[#D6C5B4]/20 text-[#1F1F1F] transition-all"
          >
            <X size={15} />
          </button>

          {!bookingRef ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] tracking-widest text-[#C89B7B] font-bold uppercase flex items-center gap-1">
                  <Sparkles size={11} className="text-[#C89B7B]" /> Dermal Wellness Booking
                </span>
                <h3 className="text-xl md:text-2xl font-serif text-[#1F1F1F]">
                  Request a Private Ritual
                </h3>
                <p className="text-xs text-[#4A4A4A]/60">
                  Select your treatment and coordinate skin health checkups.
                </p>
              </div>

              {/* Service Selection */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#1F1F1F]">
                  Skincare Service
                </label>
                <select
                  value={form.serviceId}
                  onChange={(e) => setForm({ ...form, serviceId: e.target.value })}
                  className="w-full h-11 px-3 rounded-xl border border-[#D6C5B4]/30 bg-white text-xs focus:border-[#C89B7B] focus:ring-1 focus:ring-[#C89B7B] text-[#1F1F1F]"
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} (₹{s.price} - {s.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Email Group */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#1F1F1F]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Anastasia Vance"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full h-11 px-3 rounded-xl border border-[#D6C5B4]/30 bg-white text-xs focus:border-[#C89B7B] focus:ring-1 focus:ring-[#C89B7B] text-[#1F1F1F]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#1F1F1F]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="anastasia@glow.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full h-11 px-3 rounded-xl border border-[#D6C5B4]/30 bg-white text-xs focus:border-[#C89B7B] focus:ring-1 focus:ring-[#C89B7B] text-[#1F1F1F]"
                  />
                </div>
              </div>

              {/* Phone & Date Group */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#1F1F1F]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 782-9011"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full h-11 px-3 rounded-xl border border-[#D6C5B4]/30 bg-white text-xs focus:border-[#C89B7B] focus:ring-1 focus:ring-[#C89B7B] text-[#1F1F1F]"
                  />
                </div>
                <div className="space-y-1 text-left">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#1F1F1F]">
                    Appointment Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full h-11 px-3 rounded-xl border border-[#D6C5B4]/30 bg-white text-xs focus:border-[#C89B7B] focus:ring-1 focus:ring-[#C89B7B] text-[#1F1F1F]"
                    />
                  </div>
                </div>
              </div>

              {/* Specialist Selector & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#1F1F1F]">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    required
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full h-11 px-3 rounded-xl border border-[#D6C5B4]/30 bg-white text-xs focus:border-[#C89B7B] focus:ring-1 focus:ring-[#C89B7B] text-[#1F1F1F]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#1F1F1F]">
                    Practitioner
                  </label>
                  <select
                    value={form.therapist}
                    onChange={(e) => setForm({ ...form, therapist: e.target.value })}
                    className="w-full h-11 px-3 rounded-xl border border-[#D6C5B4]/30 bg-white text-xs focus:border-[#C89B7B] focus:ring-1 focus:ring-[#C89B7B] text-[#1F1F1F]"
                  >
                    <option>Dr. Alexis Sterling (Dermatologist)</option>
                    <option>Julian Pierce, Ph.D. (Active Biologist)</option>
                    <option>Elena Rostova (Lead Aesthetician)</option>
                  </select>
                </div>
              </div>

              {/* Short Symptom Note */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#1F1F1F]">
                  Dermal Notes / Sensitive Allergies
                </label>
                <textarea
                  placeholder="E.g., extreme dryness around eyes, reactive to certain essential oils..."
                  rows={2}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full p-3 rounded-xl border border-[#D6C5B4]/30 bg-white text-xs focus:border-[#C89B7B] focus:ring-1 focus:ring-[#C89B7B] text-[#1F1F1F] resize-none"
                />
              </div>

              {/* Consent alert */}
              <div className="bg-[#F8F3EE] p-3 rounded-xl flex items-start gap-2.5 text-[10px] text-[#4A4A4A]/80">
                <AlertCircle size={13} className="text-[#C89B7B] shrink-0 mt-0.5" />
                <span>
                  By booking, you reserve a priority studio cabin slot. Cancellations must be communicated 24 hours prior. We will send reminders via SMS and email.
                </span>
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-[#1F1F1F] hover:bg-black text-white text-xs font-semibold tracking-widest uppercase rounded-full flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                Schedule Private Session • ₹{currentService.price}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6 space-y-5"
            >
              <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                <CheckCircle2 size={32} />
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-serif text-[#1F1F1F]">
                  Appointment Reserved
                </h4>
                <p className="text-xs text-[#4A4A4A] max-w-sm mx-auto leading-relaxed">
                  Excellent, <strong>{form.name}</strong>. Your skin health session for <strong>{currentService.name}</strong> has been prioritised in our registry.
                </p>
              </div>

              {/* Receipt Plate */}
              <div className="p-5 rounded-2xl bg-[#F8F3EE] border border-[#D6C5B4]/30 max-w-sm mx-auto space-y-3 font-mono text-left">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#4A4A4A]/60">Booking ID:</span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-[#1F1F1F]">{bookingRef}</span>
                    <button
                      onClick={copyRefCode}
                      className="text-[#C89B7B] hover:text-[#C89B7B]/75 flex items-center"
                    >
                      <Copy size={12} />
                    </button>
                  </div>
                </div>
                {copied && <p className="text-[10px] text-right text-emerald-600 font-sans -mt-2">Copied block!</p>}
                
                <div className="border-t border-[#D6C5B4]/30 my-2 pt-2 space-y-1.5 text-[11px] text-[#4A4A4A]">
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-semibold text-right text-[#1F1F1F]">{form.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span className="font-semibold text-right text-[#1F1F1F]">{form.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dermatologist:</span>
                    <span className="font-semibold text-right text-[#1F1F1F] max-w-[180px] truncate">{form.therapist}</span>
                  </div>
                  <div className="flex justify-between border-t border-[#D6C5B4]/30 pt-1 text-xs">
                    <span className="font-medium text-[#1F1F1F]">Clinic Deposit:</span>
                    <span className="font-bold text-[#C89B7B]">₹{currentService.price}</span>
                  </div>
                </div>
              </div>

              <p className="text-[10px] text-[#4A4A4A]/50 max-w-xs mx-auto">
                A confirmation voucher and skin prep instructions have been dispatched to <strong>{form.email}</strong>.
              </p>

              <button
                onClick={() => {
                  setBookingRef(null);
                  onClose();
                }}
                className="px-8 py-3 bg-[#1F1F1F] hover:bg-[#1F1F1F]/90 text-white rounded-full text-xs font-semibold tracking-widest uppercase transition-all"
              >
                Dismiss Success Voucher
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
