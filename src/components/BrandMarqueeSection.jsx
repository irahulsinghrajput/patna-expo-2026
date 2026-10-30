import React from 'react';
import { motion } from 'framer-motion';
import { Store } from 'lucide-react';
import './BrandMarqueeSection.css';

// Participating Brands & Exhibitors Collection (10 Confirmed Brands)
export const EXHIBITOR_BRANDS = [
  {
    id: 1,
    name: "Mahindra",
    category: "Automobiles & SUVs",
    logo: "/images/brands/brand-mahindra.jpg",
    alt: "Mahindra official stall at Patna Expo 2026"
  },
  {
    id: 2,
    name: "Royal Enfield",
    category: "Iconic Motorcycles",
    logo: "/images/brands/brand-royal-enfield.png",
    alt: "Royal Enfield motorcycles at Patna Expo 2026"
  },
  {
    id: 3,
    name: "KTM",
    category: "Two-Wheelers & Racing",
    logo: "/images/brands/brand-ktm.webp",
    alt: "KTM Motorcycles at Patna Expo 2026"
  },
  {
    id: 4,
    name: "TVS Motor",
    category: "Two-Wheelers & EVs",
    logo: "/images/brands/brand-tvs-motor.jpg",
    alt: "TVS Motor Company at Patna Expo 2026"
  },
  {
    id: 5,
    name: "River EV",
    category: "Electric Scooters & Mobility",
    logo: "/images/brands/brand-river-ev.jpg",
    alt: "River EV scooters at Patna Expo 2026"
  },
  {
    id: 6,
    name: "Kanha Furniture",
    category: "Home Furniture & Electronics",
    logo: "/images/brands/brand-kanha-furniture.jpg",
    alt: "Kanha Furniture Company & Electronics at Patna Expo"
  },
  {
    id: 7,
    name: "Sudha Dairy",
    category: "Dairy & Pure Milk Products",
    logo: "/images/brands/brand-sudha-dairy.jpg",
    alt: "Sudha Dairy COMFED Bihar at Patna Expo 2026"
  },
  {
    id: 8,
    name: "Ching's Secret",
    category: "Desi Chinese & FMCG",
    logo: "/images/brands/brand-chings-secret.jpg",
    alt: "Ching's Secret food counter at Patna Expo 2026"
  },
  {
    id: 9,
    name: "KFC",
    category: "Food Court & Global Dining",
    logo: "/images/brands/brand-kfc.jpg",
    alt: "KFC food stall at Patna Expo 2026"
  },
  {
    id: 10,
    name: "Pizza Hut",
    category: "Food Court & Gourmet Treats",
    logo: "/images/brands/brand-pizza-hut.jpg",
    alt: "Pizza Hut stall at Patna Expo 2026"
  }
];

export default function BrandMarqueeSection() {
  // Duplicate list to produce seamless, stutter-free infinite scroll
  const marqueeItems = [...EXHIBITOR_BRANDS, ...EXHIBITOR_BRANDS];

  return (
    <section id="brands" className="brand-marquee-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="brand-marquee-header text-center">
          <div className="brand-marquee-badge">
            <Store size={14} />
            <span>CONFIRMED BRANDS &amp; EXHIBITORS</span>
          </div>
          <h2 className="brand-marquee-title">
            Top Brands You Will Meet at <span className="gradient-text-red-orange">Patna Expo 2026</span>
          </h2>
          <p className="brand-marquee-sub">
            Leading automobile manufacturers, two-wheeler giants, lifestyle furnishings, dairy icons, and international food court partners 
            ready to welcome shoppers at Gandhi Maidan, Patna.
          </p>
        </div>

      </div>

      {/* Full-width Infinite Moving Marquee Track */}
      <div className="marquee-wrapper">
        <div className="marquee-fade-left" aria-hidden="true"></div>
        
        <div className="marquee-track">
          {marqueeItems.map((brand, idx) => (
            <div key={`${brand.id}-${idx}`} className="brand-card">
              <div className="brand-logo-frame">
                <img 
                  src={brand.logo} 
                  alt={brand.alt} 
                  className="brand-logo-img" 
                  loading="lazy"
                />
              </div>
              <div className="brand-info">
                <strong className="brand-name">{brand.name}</strong>
                <span className="brand-category">{brand.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="marquee-fade-right" aria-hidden="true"></div>
      </div>
    </section>
  );
}
