/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Service, Testimonial, PortfolioItem, FAQItem } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Cosmic Glow Serum with Kashmiri Saffron',
    category: 'Serums',
    description: 'A stellar luxury serum housed in gold-embossed heavy frosted glass. Blends pure hand-harvested Kashmiri saffron and hyaluronic acids to plump and deliver an exquisite dewiness.',
    price: 4800,
    rating: 4.9,
    reviewsCount: 342,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600&h=600',
    benefits: [
      'Delivers an instant glowing dewy finish with real Kashmiri saffron essence',
      'Plumps fine lines with dual-weight hyaluronic acid',
      'Smoothes skin texture within 7 days of use',
      'Nestled in handcrafted premium amber bottles with solid brass pipettes'
    ],
    ingredients: [
      'Kashmiri Saffron Extract',
      'Hyaluronic Acid (2.5%)',
      'Rose Gold Ferment',
      'Centella Asiatica extract'
    ],
    usage: 'Apply 3-4 drops directly to cleansed face and neck morning and evening. Gently press into the skin until completely absorbed.',
    isBestSeller: true
  },
  {
    id: '2',
    name: 'Cosmic Hydrating Cream with Himalayan Dew',
    category: 'Creams',
    description: 'A cashmere-soft, ultra-chic facial soufflé presented in a heavy double-chambered glass jar with a brass spatula. Delivers 48 hours of intense hydration.',
    price: 3800,
    rating: 4.8,
    reviewsCount: 219,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600&h=600',
    benefits: [
      'Deeply nourishes and repairs the skin mantle with Himalayan herbs',
      'Provides micro-encapsulated persistent hydration',
      'Presented in luxurious heavy solid glass jars with a protective magnetic lid',
      'Leaves skin silky soft with zero heavy residues'
    ],
    ingredients: [
      'Himalayan Glacier Mineral Complex',
      'Ceramide NP, AP, EOP',
      'Sacred Jasmine Essential Oil',
      'Panthenol (Vitamin B5)'
    ],
    usage: 'Warm a pearl-sized amount between fingertips and sweep upwards over face, neck, and décolleté as the final step of your skin ritual.',
    isBestSeller: true
  },
  {
    id: '3',
    name: 'Cosmic Vitamin C Elixir with Nagpur Orange Blossom',
    category: 'Elixirs',
    description: 'A maximum-potency brightening nectar in a black UV-shielded apothecary bottle. Unifies uneven tone and protects against city pollution.',
    price: 4900,
    rating: 4.7,
    reviewsCount: 184,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600&h=600',
    benefits: [
      'Fades dark sunspots and urban pollution marks',
      'Enriched with sweet blossom hydrosols from organic groves',
      'Housed in high-density UV-filtered amber glass to prevent oxidation',
      'Shields from extreme environmental skin fatigue'
    ],
    ingredients: [
      'L-Ascorbic Acid (15%)',
      'Nagpur Orange Blossom Hydrosol',
      'Ferulic Acid (0.5%)',
      'Vitamin E (Tocopherol)'
    ],
    usage: 'Apply 2-3 drops onto clean, dry skin every morning. Follow with SPF 50. Avoid storage in direct sunlight.',
    isBestSeller: false
  },
  {
    id: '4',
    name: 'Cosmic Night Repair Serum with Bakuchiol',
    category: 'Serums',
    description: 'An advanced Ayurvedic-biotech overnight treatment in an upscale cobalt glass droplet bottle. Refines textures and promotes cell rebirth.',
    price: 5800,
    rating: 4.9,
    reviewsCount: 275,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600&h=600',
    benefits: [
      'Accelerates cellular-turnover for brand new skin morning feel',
      'Formulated with cold-pressed Indian Bakuchiol seed extracts',
      'Sealed with standard custom glass pipettes for precise dosing',
      'Buffers typical retinol dryness with deep nourishing plant lipics'
    ],
    ingredients: [
      'Encapsulated Retinol (1.2%)',
      'Himalayan Rosehip Seed Oil',
      'Indian Bakuchiol Extract',
      'Tri-Peptide Complex'
    ],
    usage: 'Massage 3 drops into clean skin at night. Start 2-3 times a week, gradually increasing frequency as tolerated.',
    isBestSeller: true
  },
  {
    id: '5',
    name: 'Cosmic Sunscreen SPF 50 with Sandalwood',
    category: 'Protection',
    description: 'An ultra-light mineral shield scent-infused with Mysore sandalwood. Housed in a travel-luxe matte squeeze flask for flawless, dry protection.',
    price: 2400,
    rating: 4.6,
    reviewsCount: 156,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600&h=600',
    benefits: [
      'Provides high-level photoprotection SPF 50 PA++++',
      'Zero white cast, formulated perfectly for Indian skin tones',
      'Infused with royal calming Mysore Sandalwood',
      'Elegant matte luxury packaging with double closure seal'
    ],
    ingredients: [
      'Non-Nano Zinc Oxide (20%)',
      'Mysore Sandalwood Extract',
      'Alpine Edelweiss Extract',
      'Prebiotics'
    ],
    usage: 'Shake well. Apply liberally as your daily shield twenty minutes before sun exposure. Reapply every two hours.',
    isBestSeller: false
  },
  {
    id: '6',
    name: 'Cosmic Face Cleanser with Kashmiri Rose',
    category: 'Cleansers',
    description: 'A comforting cream-to-milk cleanser pairing organic Kashmiri rosewater with nourishing oils. Encased in a frosted heavy pump decanter.',
    price: 1800,
    rating: 4.8,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600&h=600',
    benefits: [
      'Gently dissolves stubborn elements and heavy city pollutants',
      'Enriched with precious steam-distilled Kashmiri Rosewater',
      'Encased in an elegant heavy glass flacon with a secure gold-brushed pump lock',
      'Preserves dry skin barrier perfectly'
    ],
    ingredients: [
      'Kashmiri Rose Hydrosol',
      'Sweet Almond Oil',
      'Colloidal Oat Flour',
      'Glycerin'
    ],
    usage: 'Massage 2 pumps onto damp skin with circular motions. Rinse thoroughly with lukewarm water. Use morning and night.',
    isBestSeller: false
  },
  {
    id: '7',
    name: 'Cosmic Salicylic Clarifying Wash with Neem & BHA',
    category: 'Cleansers',
    description: 'An advanced Ayurvedic gel wash blending salicylic acid (BHA) with cooling organic Neem distillate. Enclosed in a heavy recycled amber glass pump bottle.',
    price: 1900,
    rating: 4.7,
    reviewsCount: 112,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600&h=600',
    benefits: [
      'Deeply purifies facial pores and sweeps away urban dust',
      'Infused with raw organic Neem oil for botanical protection',
      'Encased in thick, durable amber glass with a lockable brass pump',
      'Lifts dirt and excess oil while balancing the skin barrier'
    ],
    ingredients: [
      'Salicylic Acid (BHA 2.0%)',
      'Organic Neem Extract',
      'Tea Tree Oil',
      'Aloe Vera Hydrosol'
    ],
    usage: 'Massage 1 pump of wash onto damp face for 60 seconds, paying priority attention to the T-zone. Rinse completely with cool water.',
    isBestSeller: false
  },
  {
    id: '8',
    name: 'Cosmic Vitamin C Energizing Cleanser with Kakadu Plum',
    category: 'Cleansers',
    description: 'A brightening foam wash featuring stabilized Vitamin C and rich Kakadu plum. Offered in an exquisite gold-foiled satin box.',
    price: 2100,
    rating: 4.8,
    reviewsCount: 89,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600&h=600',
    benefits: [
      'Dissolves heavy atmospheric dust and water-resistant cosmetics',
      'Brightens skin dullness with pure plant ascorbic acids',
      'Housed in standard premium brushed glass with a golden security seal',
      'Maintains natural hydration without tightening'
    ],
    ingredients: [
      '3-O-Ethyl Ascorbic Acid (Vitamin C)',
      'Australian Kakadu Plum',
      'Sweet Wild Orange Distillate',
      'Pro-Vitamin B5'
    ],
    usage: 'With water, whip a dime-sized dollop into a rich frothy lather. Gentle rub-down over wet face. Wash off with warm water.',
    isBestSeller: false
  },
  {
    id: '9',
    name: 'Cosmic Niacinamide Calm Cream with Sacred Cica',
    category: 'Creams',
    description: 'An elite, lightweight botanical emulsion formulated with niacinamide and calming Cica. Encased in a frosted luxury glass apothecary flask.',
    price: 3400,
    rating: 4.9,
    reviewsCount: 145,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600&h=600',
    benefits: [
      'Regulates hyper-active sebum secretion levels',
      'Shrinks the appearance of open pores within 10 days',
      'Infused with Centella Asiatica (Cica) to comfort skin irritation',
      'Protected inside thick frosted glass to preserve biological activity'
    ],
    ingredients: [
      'Niacinamide (5.0%)',
      'Centella Asiatica (Cica) Distillate',
      'Cold-Pressed Grape Seed Oil',
      'Allantoin Hydrosol'
    ],
    usage: 'Smooth gently over face and neckline during your moisturizing ritual. Excellent skin-priming layer underneath cosmetics.',
    isBestSeller: true
  },
  {
    id: '10',
    name: 'Cosmic Kojic Acid Glow Cream with Licorice Root',
    category: 'Creams',
    description: 'A high-luxury skin-brightening cream combining kojic acid and alpha arbutin. Housed in an elegant amber glass pot with a heavy metal script seal.',
    price: 3800,
    rating: 4.7,
    reviewsCount: 93,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600&h=600',
    benefits: [
      'Fades old dark blemishes and solar tan spots',
      'Brings deep moisture and a satin, velvety facial glow',
      'Premium heavy apothecary jar with hand-poured quality',
      'Polishes and unifies skin transparency'
    ],
    ingredients: [
      'Kojic Acid (1.5%)',
      'Alpha Arbutin (1.0%)',
      'Indian Licorice Root Extract',
      'Pure Shea Butter'
    ],
    usage: 'Massage evenly into face, focusing on hyperpigmented zones. Use morning and night. Always pair with SPF block in the morning.',
    isBestSeller: false
  },
  {
    id: '11',
    name: 'Cosmic Retinol Renewal Cream with Rosehip',
    category: 'Creams',
    description: 'A stellar night moisturizer matching gold-standard retinol with wild Himalayan rosehip oil. Crowned with an ivory-feel secure seal cap.',
    price: 4400,
    rating: 4.8,
    reviewsCount: 167,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600&h=600',
    benefits: [
      'Accelerates healthy skin structure turn-around overnight',
      'Fills out fine lines and softens heavy stress creases',
      'Housed in double-chambered lightproof premium glass jars',
      'Combines Ceramides to balance natural retinol sensitivity'
    ],
    ingredients: [
      'Pure Retinol (0.5%)',
      'Himalayan Rosehip Oil',
      'Ceramide Lipid Complex',
      'Vegetal Squalane'
    ],
    usage: 'Apply a pea-sized dot to clean, completely dry skin as part of your nocturnal ritual. Start 2 times a week, building slowly.',
    isBestSeller: true
  },
  {
    id: '12',
    name: 'Cosmic Tinted Mineral Sunshield SPF 40 with Squalane',
    category: 'Protection',
    description: 'A stellar daily sunshield that delivers high physical SPF 40 block with a custom warm tint for Indian skin. Set in a gold-capped squeeze dispenser.',
    price: 2800,
    rating: 4.9,
    reviewsCount: 204,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600&h=600',
    benefits: [
      'Broad physical defense against harmful UVA and UVB Rays',
      'Self-adjusting warm tint covers white cast flawlessly',
      'Cased in a deluxe gold-trimmed travel bottle with precise nozzle',
      'Enriched with antioxidant active green tea'
    ],
    ingredients: [
      'Non-Nano Zinc Oxide (15%)',
      'Iron Oxide Tint Pigments',
      'Green Tea Polyphenols',
      'Organic Squalane Oil'
    ],
    usage: 'Spread generously over clean face and neck 15 minutes before daily sunlight exposure. Excellent used standalone as a skin-perfecting tint.',
    isBestSeller: true
  },
  {
    id: '13',
    name: 'Cosmic Niacinamide Clarifying Elixir with Zinc PCA',
    category: 'Elixirs',
    description: 'A powerful double-strength pore-reducing elixir in a custom-engineered heavy black glass flask with a gold pipette top.',
    price: 4200,
    rating: 4.8,
    reviewsCount: 178,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600&h=600',
    benefits: [
      'Visibly reduces pore circumference within weeks',
      'Formulated in an oil-free weightless nectar consistency',
      'Cased in thick double-walled apothecary glass with gold embossing',
      'Balances oil secretions and controls sweat-zone congestion'
    ],
    ingredients: [
      'Niacinamide (10%)',
      'Zinc PCA (1.0%)',
      'Organic Calendula Extract',
      'Kombucha Active Ferment'
    ],
    usage: 'Dispense 3 drops into palms and warm. Gently press over face morning and evening. Follow with cream locks.',
    isBestSeller: false
  },
  {
    id: '14',
    name: 'Cosmic Kojic Brightening Elixir with Tranexamic Acid',
    category: 'Elixirs',
    description: 'An advanced dark-spot correcting night elixir blending Kojic Acid and Tranexamic. Housed in a prestigious dark violet dropper flask.',
    price: 4500,
    rating: 4.6,
    reviewsCount: 72,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600&h=600',
    benefits: [
      'Targets advanced solar damage spots and stubborn brown pigments',
      'Crystalline serum texture absorbs instantly into the skin layers',
      'Arrives in velvet-lined gift boxes with gold leaf detailing',
      'Brightens skin to reveal an inner natural glow'
    ],
    ingredients: [
      'Kojic Acid (2.0%)',
      'Tranexamic Acid (1.5%)',
      'Alpha Arbutin (1.0%)',
      'Morus Alba (Mulberry) Root'
    ],
    usage: 'Pat 3 drops across clean, dry patches morning or night. Focus on spot spots. Always pair with sunscreen protection in daylight.',
    isBestSeller: false
  },
  {
    id: '15',
    name: 'Cosmic Salicylic Refining Serum with Willow Bark',
    category: 'Serums',
    description: 'A powerful deep-pore clarifying concentrate ideal for climate-stressed skin. Housed in a durable amber glass dropper.',
    price: 3900,
    rating: 4.7,
    reviewsCount: 104,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600&h=600',
    benefits: [
      'Penetrates sebum wells to melt down sticky congestions',
      'Soothes skin redness with gentle botanical hydrates',
      'Premium heavy amber pharmaceutical container to secure stability',
      'Brings deep clarify and skin barrier ease'
    ],
    ingredients: [
      'Salicylic Acid (BHA 2.0%)',
      'Willow Bark Botanical Extract',
      'Niacinamide (2.0%)',
      'Chamomile Flower Water'
    ],
    usage: 'Distribute a thin layer to clean skin areas needing deep correction. Best used 3-4 times weekly at night.',
    isBestSeller: false
  }
];

export const services: Service[] = [
  {
    id: 's1',
    name: 'Royal Skin Analysis',
    description: 'Personalized premium three-dimensional cutaneous analysis using advanced digital scanning technology to chart subsurface sun damage, hydration, and sebum levels.',
    benefits: [
      'High-definition dermal spectroscopy mapping',
      'Customized 12-week formulation timeline',
      'Personalized premium regime recommendation',
      'Follow-up assessment credits included'
    ],
    icon: 'ScanFace',
    duration: '45 mins',
    price: 2500
  },
  {
    id: 's2',
    name: 'Tejas Acne Treatment',
    description: 'A deep clarifying medical-grade facial combining exfoliating BHA acids, expert modern extractions, and healing blue light therapy sessions.',
    benefits: [
      'Purging blemish-causing microbes with blue-light bio-photons',
      'Decongesting clogged pores gently and safely',
      'Cured with custom-blended Neelibhringadi cold compresses',
      'Restores perfect dermal moisture levels'
    ],
    icon: 'Sparkles',
    duration: '60 mins',
    price: 3500
  },
  {
    id: 's3',
    name: 'Kanti Anti-Aging CARE',
    description: 'Our premier sculpting & firming treatment using non-invasive microcurrent combined with high-performance gold-infused Cosmic peptide creams.',
    benefits: [
      'Advanced face muscle lifting and contour definition',
      'Deep infusion of biological peptide nectars',
      'Gold foil dermal massage to stimulate cellular collagen',
      'Instant reduction in heavy fatigue lines'
    ],
    icon: 'Activity',
    duration: '75 mins',
    price: 4500
  },
  {
    id: 's4',
    name: 'Amrita Hydration Therapy',
    description: 'A highly refreshing pressurized oxygen facial that sprays an intensely hydrating low-molecular hyaluronic nutrient mist over the neck and face.',
    benefits: [
      'Intense, rapid water saturation into dry cellular levels',
      'Plumps up facial structure from the inside out',
      'Soothes red, tired, sun-sensitized skin textures',
      'Delivers cooling immediate refreshment'
    ],
    icon: 'Droplets',
    duration: '60 mins',
    price: 3800
  },
  {
    id: 's5',
    name: 'Shuddhi Brightening Treatment',
    description: 'An advanced peel fusing mild lactic acids and Nagpur Vitamin C boosters to exfoliate dead cells and vanish stubborn pigmentations.',
    benefits: [
      'Quickly sweeps away dark blemishes and melasma patches',
      'Imparts a healthy dewy silk complexion glow',
      'Forces rapid cellular replacement cycles',
      'Minimizes visible skin pores extensively'
    ],
    icon: 'Sun',
    duration: '50 mins',
    price: 3600
  },
  {
    id: 's6',
    name: 'Royal Skincare Consultation',
    description: 'One-on-one expert wellness session with our Head Skin Chemist to isolate dermal allergens, analyze ingredient synergy, and build a bespoke regime.',
    benefits: [
      'Comprehensive lifestyle, water, and diet assessment',
      'Personal ingredients collision analysis',
      'One bespoke apothecary custom-blend formulation',
      'Unlimited digital feedback and guidance access'
    ],
    icon: 'Heart',
    duration: '30 mins',
    price: 1900
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'p1',
    category: 'Acne Care',
    beforeImage: 'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&q=80&w=400&h=400',
    afterImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400&h=400',
    title: 'Acne Shuddhi & Sebum Balance Therapy',
    description: 'An 8-week structured protocol utilising the Salicylic Cleanser, Niacinamide Calm Cream with Sacred Cica, and professional blue light therapy sessions in our flagship lounge.',
    results: '94% reduction in stubborn flare-ups, completely decongested T-zone, and balanced oil secretion under severe Indian monsoon humidity.'
  },
  {
    id: 'p2',
    category: 'Anti-Aging',
    beforeImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=400&h=400',
    afterImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400',
    title: 'Kanti Wrinkle-Smooth Retinol Protocol',
    description: 'A 12-week luxury home-care ritual combining the Retinol Renewal Cream with wild Himalayan Rosehip and Kanti Peptide moisturizer twice daily.',
    results: 'Significant lifting of early expression lines, smoother cutaneous texture, and a dramatic boost in skin density.'
  },
  {
    id: 'p3',
    category: 'Hydration',
    beforeImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
    afterImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400',
    title: 'Amrita Moisture & Dew Complexion Revival',
    description: '3 private pressurized oxygen therapy sessions at our flagship studio, reinforced with a home ritual of Bakuchiol Elixir and Himalayan Dew cream.',
    results: 'Dermal hydration index leaped from 22% to 80%, completely eliminating flaky patches and revealing a premium glossy, healthy look.'
  },
  {
    id: 'p4',
    category: 'Brightening',
    beforeImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400',
    afterImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400',
    title: 'Tejas Unifying & Pigment Correction Ritual',
    description: '6 weeks of combining our Nagpur Orange Vitamin C Elixir in the morning with the Tinted Mineral Sunshield (SPF 40) for protection against harsh tropical solar rays.',
    results: 'Stubborn sun spots faded significantly, overall complexion brightness improved, and skin tone variance aligned beautifully.'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Avantika Dev',
    role: 'Grazia India Editor',
    rating: 5,
    text: 'Cosmic behaves like actual liquid gold. The Saffron Radiant Elixir has clarified my skin beautifully in less than two weeks. My skin looks completely refreshed and radiant!',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 't2',
    name: 'Dr. Reyansh Kapur',
    role: 'Senior Ayurvedic Clinical Dermatologist',
    rating: 5,
    text: 'What sets Cosmic apart is their rigorous fusion of modern molecular active sciences and prized Ayurvedic botanicals. They safely prevent skin barrier exhaustion without standard irritation risks.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 't3',
    name: 'Meera Nair',
    role: 'Luxury Wellness Director',
    rating: 5,
    text: 'Cruelty-free, clean, housed in incredible gold-embossed amber glassware. I use the Himalayan Dew morning and night, and my skin has never felt more protected and nourished.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 't4',
    name: 'Kabir Malhotra',
    role: 'GQ India Grooming Editor',
    rating: 5,
    text: 'I struggle with post-grooming razor bumps and active sebum. The Nagpur Orange Wash combined with their Niacinamide Calm Cream completely revolutionized my routine. Elegant and oil-free.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 't5',
    name: 'Dr. Ananya Sen',
    role: 'Biotech Formulation Scientist',
    rating: 5,
    text: 'As a chemist, I am deep-diving into Cosmic formulas. Their stabilization of direct plant Vitamin C and bio-retinol inside premium UV-shielded amber apothecary jars is exceptionally advanced.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 't6',
    name: 'Rohan Mehra',
    role: 'High Fashion Creative & Model',
    rating: 5,
    text: 'Under heavy studio lights and hot tropical shoots, the face undergoes massive stress. Cosmic Tinted SPF 40 delivers a beautiful matte base while establishing a reliable daily barrier.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200&h=200'
  }
];

export const faqs: FAQItem[] = [
  {
    id: 'f1',
    question: 'Are Cosmic formulations customized for the tropical Indian climate?',
    answer: 'Absolutely. Our products are engineered specifically to navigate high humidity, heavy monsoonal rain shifts, and intense UV exposure. They perform with light weight, absorbing completely without leaving heavy greasy residues or clogging pore networks.'
  },
  {
    id: 'f2',
    question: 'How do you marry modern active ingredients with classic Ayurvedic botanicals?',
    answer: 'We craft our formulas in small bespoke batches, marrying proven clinical molecules—like Retinol, Salicylic Acid, and Niacinamide—with potent Certified Organic Himalayan Actives, Kashmiri Saffron, organic Neem, and Mysore Sandalwood to maximize radiance while protecting the skin barrier.'
  },
  {
    id: 'f3',
    question: 'Why does Cosmic use premium amber glass and brass seals?',
    answer: 'Our biological active molecules are sensitive to daylight and photo-oxidation. We store our elixirs inside luxury, UV-filtered premium heavy amber glass custom pots, equipped with solid brass seals, preserving active purity naturally and eliminating plastic toxic leaches.'
  },
  {
    id: 'f4',
    question: 'How long does dispatch take to locations within India?',
    answer: 'We dispatch all bespoke requests within 24 hours from our premium labs. Delivery is complimentary across standard Tier-1 and Tier-2 metropolitan zones, reaching Delhi-NCR, Mumbai, Bengaluru, Pune, Hyderabad, and Kolkata within 2 to 3 delivery days.'
  },
  {
    id: 'f5',
    question: 'Are Cosmic premium formulations dermatologically tested and safe?',
    answer: 'Yes. Every batch is rigorously clinically tested on humans in certified clinical centers across India. Our formulas are completely vegan, cruelty-free, paraben-free, and carefully engineered for deep biological compatibility.'
  }
];
