/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, ArrowLeft, CheckCircle, RefreshCw, ShoppingCart } from 'lucide-react';
import { products } from '../data';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface Question {
  id: number;
  title: string;
  subtitle: string;
  options: { value: string; label: string; desc: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    title: 'What is your primary skincare focus?',
    subtitle: 'Choose the concern you would like to target most effectively.',
    options: [
      { value: 'dryness', label: 'Dehydration & Flakiness', desc: 'Desire deep water saturation' },
      { value: 'acne', label: 'Blemishes & Active Breakouts', desc: 'Need deep clearing and calming care' },
      { value: 'aging', label: 'Fine Lines & Loss of Firmness', desc: 'Target aging and cellular recovery' },
      { value: 'dullness', label: 'Dullness & Dark Spot Pigmentation', desc: 'Reveal instant radiant brightness' }
    ]
  },
  {
    id: 2,
    title: 'How would you describe your skin type?',
    subtitle: 'This helps adjust the weight and texture of our suggestions.',
    options: [
      { value: 'dry', label: 'Extremely Dry / Tight', desc: 'Gently flakes or feels tight after washing' },
      { value: 'oily', label: 'Oily / Glossy', desc: 'Prone to shine and visible enlarged pores' },
      { value: 'sensitive', label: 'Highly Sensitive / Reactive', desc: 'Sensitized, prone to red flare-ups' },
      { value: 'combination', label: 'Combination (T-Zone Oily)', desc: 'Oily forehead/nose, dry-normal cheeks' }
    ]
  },
  {
    id: 3,
    title: 'Select your preferred formulation texture:',
    subtitle: 'How do you like your products to feel upon application?',
    options: [
      { value: 'milky', label: 'Creamy and Richly Nourishing', desc: 'Leaves a long-lasting cashmere veil' },
      { value: 'lightweight', label: 'Lightweight & Absorbs Instantly', desc: 'Cooling fluid that leaves zero residue' },
      { value: 'concentrated', label: 'Highly Concentrated Serum', desc: 'Fast penetrative booster oil/water essence' }
    ]
  }
];

export const SkinAnalysis: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [analyzing, setAnalyzing] = useState(false);
  const [recommendedProductIds, setRecommendedProductIds] = useState<string[]>([]);
  const { addToCart } = useCart();

  const handleSelect = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const nextStep = () => {
    if (currentStep < questions.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      triggerAnalysis();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const triggerAnalysis = () => {
    setAnalyzing(true);
    // Simulate premium cosmetic scanning physics and algorithm calculation
    setTimeout(() => {
      calculateRecommendation();
      setAnalyzing(false);
      setCurrentStep(questions.length + 1); // final result step
    }, 2000);
  };

  const calculateRecommendation = () => {
    const focus = answers['1'];
    const type = answers['2'];
    const recs: string[] = [];

    // Base Cleanser for almost everyone
    recs.push('6'); // Cleanser

    // Primary treatments based on focus
    if (focus === 'dryness') {
      recs.push('2'); // Hydrating Cream
      recs.push('1'); // Glow Serum
    } else if (focus === 'acne') {
      recs.push('4'); // Night Repair (retinol clears)
      recs.push('2'); // Hydrating Cream (restores barrier)
    } else if (focus === 'aging') {
      recs.push('4'); // Night Repair
      recs.push('1'); // Glow Serum
    } else if (focus === 'dullness') {
      recs.push('3'); // Vitamin C Elixir
      recs.push('1'); // Glow Serum
    }

    // Protection for day routine
    if (type !== 'oily') {
      recs.push('5'); // Sunscreen SPF 50
    }

    // Unique filter
    const uniqueRecs = Array.from(new Set(recs));
    setRecommendedProductIds(uniqueRecs);
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(1);
    setRecommendedProductIds([]);
  };

  const getRecommendedProducts = (): Product[] => {
    return products.filter((p) => recommendedProductIds.includes(p.id));
  };

  const addAllToCart = () => {
    const recs = getRecommendedProducts();
    recs.forEach((p) => addToCart(p));
  };

  const activeQuestion = questions.find((q) => q.id === currentStep);
  const isSelected = activeQuestion ? !!answers[activeQuestion.id] : false;

  return (
    <div id="skin-analysis" className="bg-[#F8F3EE]/60 border border-[#D6C5B4]/20 rounded-3xl p-6 md:p-10 max-w-4xl mx-auto shadow-sm">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-xs font-semibold tracking-widest text-[#C89B7B] uppercase flex items-center justify-center gap-1.5 mb-2">
          <Sparkles size={14} className="animate-spin text-[#C89B7B]" />
          Instant Cutaneous Audit
        </span>
        <h3 className="text-2xl md:text-3xl font-serif text-[#1F1F1F]">
          Cosmic Personalized Skin Analyzer
        </h3>
        <p className="text-xs text-[#4A4A4A]/70 mt-2">
          Our adaptive system formulates an elegant skin profile and target solutions in real-time.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {/* Step Loader/Analyzing */}
        {analyzing && (
          <motion.div
            key="analyzing"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="py-16 text-center space-y-4"
          >
            <div className="relative w-16 h-16 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-[#C89B7B]/20"></div>
              <div className="absolute inset-0 rounded-full border-4 border-t-[#C89B7B] animate-spin"></div>
            </div>
            <p className="text-xs font-bold tracking-widest text-[#C89B7B] uppercase animate-pulse">
              Calibrating Bio-Dermal Affinities...
            </p>
            <p className="text-xs text-[#4A4A4A]/50 max-w-xs mx-auto">
              Mapping acid mantle stability indices and selecting optimized botanical concentrates.
            </p>
          </motion.div>
        )}

        {/* Step Questionnaire */}
        {!analyzing && currentStep <= questions.length && activeQuestion && (
          <motion.div
            key={`question-${currentStep}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Steps indicator */}
            <div className="flex justify-between items-center text-xs text-[#4A4A4A]/50 font-medium">
              <span>Step {currentStep} of {questions.length}</span>
              <div className="w-1/3 h-1 bg-[#D6C5B4]/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#C89B7B] transition-all duration-300"
                  style={{ width: `${(currentStep / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="text-left">
              <h4 className="text-lg md:text-xl font-medium text-[#1F1F1F]">
                {activeQuestion.title}
              </h4>
              <p className="text-xs text-[#4A4A4A]/70 mt-1">
                {activeQuestion.subtitle}
              </p>
            </div>

            {/* Options grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeQuestion.options.map((opt) => {
                const isCurrentSelected = answers[activeQuestion.id] === opt.value;
                return (
                  <button
                    key={opt.value}
                    id={`opt-${activeQuestion.id}-${opt.value}`}
                    onClick={() => handleSelect(activeQuestion.id, opt.value)}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                      isCurrentSelected
                        ? 'border-[#C89B7B] bg-white ring-1 ring-[#C89B7B]'
                        : 'border-[#D6C5B4]/30 bg-white/70 hover:border-[#C89B7B]/50 hover:bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <span className="block text-sm font-medium text-[#1F1F1F] group-hover:text-[#C89B7B] transition-colors">
                          {opt.label}
                        </span>
                        <span className="block text-xs text-[#4A4A4A]/60 mt-1">
                          {opt.desc}
                        </span>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                        isCurrentSelected ? 'border-[#C89B7B] bg-[#C89B7B]' : 'border-[#D6C5B4]'
                      }`}>
                        {isCurrentSelected && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between items-center pt-4 border-t border-[#D6C5B4]/15">
              <button
                id="btn-analysis-prev"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase transition-colors ${
                  currentStep === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-[#4A4A4A] hover:text-[#C89B7B]'
                }`}
              >
                <ArrowLeft size={14} /> Back
              </button>

              <button
                id="btn-analysis-next"
                onClick={nextStep}
                disabled={!isSelected}
                className={`flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-semibold tracking-widest uppercase transition-all ${
                  isSelected
                    ? 'bg-[#C89B7B] text-white hover:bg-[#C89B7B]/90 shadow-lg shadow-[#C89B7B]/15'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {currentStep === questions.length ? 'Calculate Regimen' : 'Continue'} <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step Results */}
        {currentStep > questions.length && !analyzing && (
          <motion.div
            key="analysis-results"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 text-left"
          >
            <div className="bg-emerald-50 border border-emerald-100/50 rounded-2xl p-5 flex items-start gap-4">
              <div className="p-2 bg-emerald-500 rounded-full text-white">
                <CheckCircle size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-emerald-900 tracking-tight">
                  Cutaneous Blueprint Assembled
                </h4>
                <p className="text-xs text-emerald-800/80 mt-1 leading-relaxed">
                  Excellent. Based on raw diagnostic metrics—focusing on <strong>{questions[0].options.find(o => o.value === answers['1'])?.label}</strong> and matching your <strong>{questions[1].options.find(o => o.value === answers['2'])?.label}</strong> profile—we have designed a comprehensive 3-step active therapy schedule.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-[#1F1F1F] mb-4">
                Your Bespoke Recommended Regime
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {getRecommendedProducts().map((p, index) => (
                  <div
                    key={p.id}
                    id={`rec-prod-${p.id}`}
                    className="bg-white border border-[#D6C5B4]/20 rounded-2xl p-4 flex flex-col items-center text-center relative hover:shadow-lg transition-all"
                  >
                    <span className="absolute left-3 top-3 w-5 h-5 rounded-full bg-[#C89B7B] text-white text-[10px] font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <img
                      src={p.image}
                      alt={p.name}
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 object-contain rounded-lg mb-3"
                    />
                    <span className="text-[9px] tracking-widest text-[#C89B7B] font-bold uppercase mb-1">
                      {p.category}
                    </span>
                    <h5 className="text-sm font-medium text-[#1F1F1F] mb-1">
                      {p.name}
                    </h5>
                    <p className="text-[11px] text-[#4A4A4A]/60 flex-grow leading-tight line-clamp-2">
                      {p.description}
                    </p>
                    <div className="mt-3 pt-2 border-t border-[#D6C5B4]/10 w-full flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#1F1F1F]">
                        ₹{p.price.toLocaleString('en-IN')}
                      </span>
                      <button
                        onClick={() => addToCart(p)}
                        className="text-[10px] text-[#C89B7B] hover:text-[#C89B7B]/75 font-semibold tracking-wider uppercase flex items-center gap-1"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#D6C5B4]/15">
              <button
                id="btn-analysis-reset"
                onClick={handleReset}
                className="flex items-center justify-center gap-1.5 px-6 py-3 border border-[#D6C5B4]/50 rounded-full text-xs font-semibold text-[#4A4A4A] hover:bg-[#F8F3EE] tracking-widest uppercase transition-all"
              >
                <RefreshCw size={14} /> Restart Test
              </button>

              <button
                id="btn-add-all-analysis"
                onClick={addAllToCart}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#C89B7B] text-white hover:bg-[#C89B7B]/95 rounded-full text-xs font-semibold tracking-widest hover:shadow-lg hover:shadow-[#C89B7B]/20 uppercase flex-1 transition-all"
              >
                <ShoppingCart size={14} /> Add Entire Treatment to Cart
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
