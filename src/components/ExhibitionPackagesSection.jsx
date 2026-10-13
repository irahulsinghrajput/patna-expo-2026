import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { 
  Crown, Gem, Award, Sparkles, Maximize2, MapPin, Users,
  Presentation, Coffee, Trophy, CheckCircle2, ArrowRight,
  Phone, ShieldCheck, Layers, Car, Bike, Building, AirVent, Tent, X
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './ExhibitionPackagesSection.css';

// Premium Packages Data Extracted Directly from Patna Expo 2026 PDF (Pages 6-10)
const PREMIUM_PACKAGES = [
  {
    id: 'platinum',
    name: 'Platinum Package',
    badgeText: 'Supreme Sponsorship Tier',
    price: '₹25 Lakh',
    priceNumeric: 2500000,
    priceNote: 'Exclusive Mega Sponsorship',
    boothSize: '30 ft. × 30 ft.',
    boothSqFt: '900 Sq. Ft.',
    emblemImg: '/images/platinum-badge.png',
    boothImg: '/images/platinum-booth.jpg',
    primeLocation: 'Exhibitor booth beside main stage',
    tagline: 'Top-tier supreme sponsorship with prime main-stage presence & VVIP privileges.',
    accentColor: '#cbd5e1',
    keyBullets: [
      'Mega 30 × 30 ft. custom exhibition pavilion',
      'Prime location directly beside main stage',
      '1-on-1 private meetings with Ministers & Delegates',
      'Special Recognition awarded by Govt Chief Guest'
    ],
    features: [
      {
        icon: Maximize2,
        title: 'Booth Size',
        desc: '30 ft. × 30 ft. (900 sq. ft.) mega high-visibility customized pavilion structure'
      },
      {
        icon: MapPin,
        title: 'Prime Location',
        desc: 'Exhibitor booth beside main stage for maximum footfall & stage-facing visibility'
      },
      {
        icon: Users,
        title: 'Exclusive Meetings',
        desc: 'One to one private meetings with Government Ministers, dignitaries and Trade Delegates'
      },
      {
        icon: Presentation,
        title: 'Product Presentations',
        desc: 'Dedicated opportunity to showcase products/services live on stage & at central demo area'
      },
      {
        icon: Coffee,
        title: '10 Days Hospitality Pass',
        desc: 'VIP dinner and lunch hospitality pass for 10 days for designated company representatives'
      },
      {
        icon: Trophy,
        title: 'Special Recognition',
        desc: 'Official felicitation & award presented by Special Government Chief Guest on stage'
      }
    ],
    inclusions: [
      'Shell scheme structure with customized company fascia / name board',
      '3 tables / executive counters and 6 luxury sofas',
      '3 focused spotlights & premium carpeted flooring',
      '3 power outlets (5/15 amp socket)',
      '3 waste paper baskets',
      'VIP Event & Gala passes'
    ]
  },
  {
    id: 'diamond',
    name: 'Diamond Package',
    badgeText: 'High-Visibility Crystal Tier',
    price: '₹15 Lakh',
    priceNumeric: 1500000,
    priceNote: 'Prestigious Brand Partnership',
    boothSize: '20 ft. × 20 ft.',
    boothSqFt: '400 Sq. Ft.',
    emblemImg: '/images/diamond-badge.png',
    boothImg: '/images/diamond-booth.jpg',
    primeLocation: 'Exhibitor booth near main stage',
    tagline: 'High-visibility crystal tier pavilion with executive stage access & hospitality.',
    accentColor: '#38bdf8',
    keyBullets: [
      '20 × 20 ft. prime exhibition pavilion',
      'High-impact location near the main stage',
      '1-on-1 private meetings with Ministers & Delegates',
      '10 Days executive lunch & dinner hospitality passes'
    ],
    features: [
      {
        icon: Maximize2,
        title: 'Booth Size',
        desc: '20 ft. × 20 ft. (400 sq. ft.) spacious prime exhibition pavilion space'
      },
      {
        icon: MapPin,
        title: 'Prime Location',
        desc: 'Exhibitor booth positioned near main stage for exceptional attendee engagement'
      },
      {
        icon: Users,
        title: 'Exclusive Meetings',
        desc: 'One to one meeting with Government Ministers, dignitaries and Key Industry Delegates'
      },
      {
        icon: Presentation,
        title: 'Product Presentations',
        desc: 'Opportunity to showcase your products/services on the main stage & interactive demo area'
      },
      {
        icon: Coffee,
        title: '10 Days Hospitality Pass',
        desc: 'Dinner and lunch pass for 10 full days for designated company representatives'
      },
      {
        icon: Award,
        title: 'Executive Recognition',
        desc: 'High-profile brand acknowledgment across official expo platforms and stage ceremonies'
      }
    ],
    inclusions: [
      'Shell scheme structure with branded company fascia / name board',
      '2 tables / counters and 4 sofas',
      '2 spotlights & carpeted flooring',
      '2 power outlets (5/15 amp socket)',
      '2 waste paper baskets',
      'VIP Event passes'
    ]
  },
  {
    id: 'gold',
    name: 'Gold Package',
    badgeText: 'Stage-Facing Luxury Tier',
    price: '₹10 Lakh',
    priceNumeric: 1000000,
    priceNote: 'Prime Exhibition Opportunity',
    boothSize: '10 ft. × 10 ft.',
    boothSqFt: '100 Sq. Ft.',
    emblemImg: '/images/gold-badge.png',
    boothImg: '/images/gold-booth.jpg',
    primeLocation: 'Exhibitor booth near stage area',
    tagline: 'Prominent stage-area exhibition suite offering prime visibility & live demo slots.',
    accentColor: '#fbbf24',
    keyBullets: [
      '10 × 10 ft. elegant stage-area booth',
      'Exhibitor stall positioned near stage area',
      'Live product demonstration slot on stage',
      '10 Days complete lunch & dinner hospitality passes'
    ],
    features: [
      {
        icon: Maximize2,
        title: 'Booth Size',
        desc: '10 ft. × 10 ft. (100 sq. ft.) prominent exhibition stall with modular setup'
      },
      {
        icon: MapPin,
        title: 'Prime Location',
        desc: 'Exhibitor booth situated near stage area with consistent, high-density visitor traffic'
      },
      {
        icon: Users,
        title: 'B2B & B2C Engagement',
        desc: 'Direct interaction with thousands of festive shoppers, trade partners & entrepreneurs'
      },
      {
        icon: Presentation,
        title: 'Product Presentations',
        desc: 'Opportunity to showcase your products/services live on stage & demo area'
      },
      {
        icon: Coffee,
        title: '10 Days Hospitality Pass',
        desc: 'Dinner and lunch hospitality pass for 10 days for designated brand representatives'
      },
      {
        icon: ShieldCheck,
        title: 'Partner Recognition',
        desc: 'Official Patna Expo 2026 Gold Partner acknowledgement across event collateral'
      }
    ],
    inclusions: [
      'Shell scheme structure with company fascia / name board',
      '1 table / counter and 2 sofas',
      '2 spotlights & carpeted flooring',
      '1 power outlet (5/15 amp socket)',
      '1 waste paper basket',
      'VIP Event passes'
    ]
  }
];

// Standard Categories Data (Preserving exact prices, sizes & order with newly uploaded images)
const STANDARD_PACKAGES = [
  { 
    title: "Automobile Exhibit", 
    details: "20 × 10 FT", 
    price: "₹6 Lakh", 
    icon: Car,
    img: "/images/stall-automobile.jpg" 
  },
  { 
    title: "Two Wheeler Exhibit", 
    details: "20 × 10 FT", 
    price: "₹6 Lakh", 
    icon: Bike,
    img: "/images/stall-two-wheeler.jpg" 
  },
  { 
    title: "Real Estate Exhibit", 
    details: "10 × 10 FT", 
    price: "₹5 Lakh", 
    icon: Building,
    img: "/images/stall-real-estate.jpg" 
  },
  { 
    title: "AC Hanger Stall", 
    details: "10 × 10 FT", 
    price: "₹2 Lac", 
    icon: AirVent,
    img: "/images/stall-ac-hanger.jpg" 
  },
  { 
    title: "Non-AC Hanger Stall", 
    details: "10 × 10 FT", 
    price: "₹1.5 Lac", 
    icon: Tent,
    img: "/images/stall-non-ac-hanger.jpg" 
  }
];

export default function ExhibitionPackagesSection({ onBookPackage }) {
  const [activeTier, setActiveTier] = useState(null);

  const selectedPkg = activeTier ? PREMIUM_PACKAGES.find(p => p.id === activeTier) : null;

  useEffect(() => {
    if (activeTier) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setActiveTier(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeTier]);

  const handleSelectTier = (tierId) => {
    setActiveTier(tierId);
  };

  const handleBook = (pkgName) => {
    setActiveTier(null); // Close the details modal when user clicks to reserve/book
    if (onBookPackage) {
      onBookPackage(pkgName);
    }
  };

  return (
    <section 
      id="packages" 
      className={`premium-packages-section theme-${activeTier || 'none'}`}
      aria-label="Exhibition Package Details"
    >
      <div className="container">
        
        {/* ==================================================================
            A. SECTION INTRODUCTION
            ================================================================== */}
        <div className="pkg-header-container">
          <motion.div 
            className="pkg-eyebrow"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles size={14} />
            EXCLUSIVE EXHIBITION OPPORTUNITIES
          </motion.div>

          <motion.h2 
            className="pkg-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Choose Your <span className="pkg-title-gradient">Premium Package</span>
          </motion.h2>

          <motion.p 
            className="pkg-subtitle"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Accelerate your brand presence at Bihar's largest festive trade & shopping carnival. 
            Our premium sponsorship suites deliver unmatched prime visibility beside the main stage, 
            exclusive VVIP ministerial networking, stage presentation privileges, and full 10-day hospitality.
          </motion.p>

          <div className="pkg-click-hint">
            <Sparkles size={15} />
            <span>Click on any package card below to view 3D booth architecture & detailed inclusions</span>
          </div>
        </div>

        {/* Quick Tier Tab Switcher */}
        <div className="pkg-tab-switcher" role="tablist" aria-label="Package selector tabs">
          {PREMIUM_PACKAGES.map((pkg) => {
            const isActive = activeTier === pkg.id;
            return (
              <button
                key={pkg.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${pkg.id}`}
                className={`pkg-tab-btn ${isActive ? `active-${pkg.id}` : ''}`}
                onClick={() => handleSelectTier(pkg.id)}
              >
                {pkg.id === 'platinum' && <Crown size={16} />}
                {pkg.id === 'diamond' && <Gem size={16} />}
                {pkg.id === 'gold' && <Award size={16} />}
                <span>{pkg.name.split(' ')[0]} ({pkg.price})</span>
              </button>
            );
          })}
        </div>

        {/* ==================================================================
            B. PREMIUM PACKAGE SELECTOR (3 LUXURY CARDS)
            ================================================================== */}
        <div className="premium-cards-grid">
          {PREMIUM_PACKAGES.map((pkg, idx) => {
            const isActive = activeTier === pkg.id;
            return (
              <motion.div
                key={pkg.id}
                className={`pkg-card card-${pkg.id} ${isActive ? 'is-active' : ''}`}
                onClick={() => handleSelectTier(pkg.id)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSelectTier(pkg.id); }}
                aria-label={`Select ${pkg.name}`}
              >
                {/* Top Badge & Booth Pill */}
                <div className="pkg-card-top">
                  <div className="pkg-emblem-wrap">
                    <img 
                      src={pkg.emblemImg} 
                      alt={`${pkg.name} – Patna Expo 2026 exhibitor and sponsorship pavilion booking`} 
                      className="pkg-emblem-img" 
                    />
                  </div>
                  <div className="pkg-booth-pill">
                    <Maximize2 size={13} />
                    <span>{pkg.boothSize}</span>
                  </div>
                </div>

                {/* Name & Tagline */}
                <h3 className="pkg-card-name">{pkg.name}</h3>
                <p className="pkg-card-tagline">{pkg.tagline}</p>

                {/* Price Display */}
                <div className="pkg-price-row">
                  <span className="pkg-price-val">{pkg.price}</span>
                  <span className="pkg-price-sub">/ Complete 13 Days</span>
                </div>

                {/* Key Highlight Bullets */}
                <ul className="pkg-card-bullets">
                  {pkg.keyBullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="pkg-card-bullet">
                      <CheckCircle2 size={16} className="bullet-icon" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Select / Active Button */}
                <button 
                  type="button"
                  className="pkg-select-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectTier(pkg.id);
                  }}
                >
                  <span>View Full Details & Inclusions</span>
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* ==================================================================
            C. SELECTED PACKAGE DETAILS MODAL POPUP (RENDERED TO BODY VIA PORTAL)
            ================================================================== */}
        {typeof document !== 'undefined' && createPortal(
          <AnimatePresence>
            {selectedPkg && (
              <motion.div 
                className={`pkg-modal-overlay theme-${selectedPkg.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveTier(null)}
              >
                <motion.div 
                  key={selectedPkg.id}
                  id={`panel-${selectedPkg.id}`}
                  role="dialog"
                  aria-modal="true"
                  aria-label={`${selectedPkg.name} Details`}
                  className="pkg-modal-content"
                  initial={{ y: 50, scale: 0.92, opacity: 0 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  exit={{ y: 30, scale: 0.92, opacity: 0 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button 
                    type="button"
                    className="pkg-modal-close"
                    onClick={() => setActiveTier(null)}
                    title="Close details popup"
                    aria-label="Close details popup"
                  >
                    <X size={22} />
                  </button>

              {/* Showcase Top Bar */}
              <div className="showcase-topbar">
                <div className="showcase-title-area">
                  <img 
                    src={selectedPkg.emblemImg} 
                    alt={`${selectedPkg.name} – Patna Expo 2026 exhibitor and sponsorship pavilion booking`} 
                    className="showcase-emblem" 
                  />
                  <div>
                    <h3 className="showcase-name">{selectedPkg.name} — Comprehensive Inclusions</h3>
                    <div className="showcase-specs">
                      <span><strong>Booth Size:</strong> {selectedPkg.boothSize} ({selectedPkg.boothSqFt})</span>
                      <span>•</span>
                      <span><strong>Location:</strong> {selectedPkg.primeLocation}</span>
                    </div>
                  </div>
                </div>

                <div className="showcase-price-tag">
                  <div className="showcase-price-amount">{selectedPkg.price}</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Exclusive Sponsorship Suite</div>
                </div>
              </div>

              {/* Showcase Main Content (Booth Visual + Executive Privileges) */}
              <div className="showcase-content-grid">
                
                {/* 3D Booth Architectural Preview */}
                <div className="booth-preview-card">
                  <div className="booth-preview-header">
                    <span className="booth-preview-title">
                      <Layers size={18} />
                      Exhibitor Booth Architecture
                    </span>
                    <span className="booth-size-badge">{selectedPkg.boothSize}</span>
                  </div>
                  <div className="booth-img-container">
                    <img 
                      src={selectedPkg.boothImg} 
                      alt={`${selectedPkg.name} 3D Architecture – Patna Expo 2026 exhibitor and sponsorship pavilion booking`} 
                      className="booth-img" 
                    />
                  </div>
                  <p className="booth-desc">
                    Official architectural concept render for {selectedPkg.name}. Features prime fascia branding, 
                    carpeted flooring, luxury seating lounge, dedicated spotlighting, and prime positioning 
                    for maximum brand prestige at Gandhi Maidan, Patna.
                  </p>
                </div>

                {/* Core Executive Privileges Grid */}
                <div className="benefits-cards-grid">
                  {selectedPkg.features.map((feat, fIdx) => {
                    const IconComp = feat.icon;
                    return (
                      <div key={fIdx} className="benefit-feature-box">
                        <div className="benefit-icon-box">
                          <IconComp size={20} />
                        </div>
                        <div className="benefit-info">
                          <h4>{feat.title}</h4>
                          <p>{feat.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Stall Infrastructure & Furnishing Inclusions */}
              <div className="inclusions-strip">
                <div className="inclusions-strip-header">
                  <ShieldCheck size={20} color="#16a34a" />
                  <span>Stall Infrastructure & On-Ground Inclusions (Page 6–10 Verified)</span>
                </div>
                <div className="inclusions-pills-list">
                  {selectedPkg.inclusions.map((item, iIdx) => (
                    <span key={iIdx} className="inclusion-pill">
                      <CheckCircle2 size={15} />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action CTAs */}
              <div className="showcase-actions">
                <button 
                  type="button"
                  className="showcase-btn-primary"
                  onClick={() => handleBook(selectedPkg.name)}
                >
                  <span>Reserve {selectedPkg.name} ({selectedPkg.price})</span>
                  <ArrowRight size={18} />
                </button>

                <a 
                  href={`https://wa.me/919821070563?text=${encodeURIComponent(`Hello, I am interested in booking the ${selectedPkg.name} (${selectedPkg.price}) for Patna Expo 2026. Please share further booking details.`)}`}
                  target="_blank" 
                  rel="noreferrer"
                  className="showcase-btn-secondary"
                >
                  <FaWhatsapp size={20} />
                  <span>Executive WhatsApp Enquiry</span>
                </a>

                <div className="showcase-helpline">
                  <span>VIP Executive Hotline:</span>
                  <strong style={{ color: 'var(--text-dark, #1A1A1A)' }}>+91 982107 0563</strong>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}

        {/* ==================================================================
            D. TRANSITION TO STANDARD EXHIBITION STALLS
            ================================================================== */}
        <div className="standard-stalls-divider">
          <span className="standard-eyebrow">GERMAN HANGAR SPACES & STALLS</span>
          <h3 className="standard-title">Standard Exhibition Categories</h3>
          <p className="standard-subtitle">
            Dedicated exhibition stalls within German Hangar infrastructure featuring modular SYMA board construction, 
            wooden flooring with premium carpeting, company name fascia header, tables, chairs, electrical sockets & drop lighting.
          </p>
        </div>

        {/* Standard 5 Stalls Grid (With the uploaded high-res 3D graphic cards) */}
        <div className="standard-categories-grid">
          {STANDARD_PACKAGES.map((p, i) => (
            <motion.div 
              key={i} 
              className={`standard-graphic-card ${i === 4 ? 'standard-card-centered' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => handleBook(p.title)}
            >
              <img 
                src={p.img} 
                alt={`${p.title} - ${p.details} – Patna Expo 2026 exhibitor and sponsorship pavilion booking`} 
                className="standard-graphic-img" 
                loading="lazy" 
              />
              <div className="standard-graphic-overlay">
                <button 
                  type="button" 
                  className="standard-graphic-book-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBook(p.title);
                  }}
                >
                  <span>Book {p.title}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
