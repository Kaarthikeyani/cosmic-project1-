/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: 'Serums' | 'Creams' | 'Elixirs' | 'Protection' | 'Cleansers';
  description: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  benefits: string[];
  ingredients: string[];
  usage: string;
  isBestSeller?: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  icon: string; // lucide icon name
  duration: string;
  price: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  category: 'Acne Care' | 'Anti-Aging' | 'Hydration' | 'Brightening';
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
  results: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
