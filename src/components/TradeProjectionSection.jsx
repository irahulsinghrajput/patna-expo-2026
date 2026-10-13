import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, DollarSign, Car, Gem, Tv, ShoppingBag, 
  Home, Sofa, Palette, Hammer, Bike, Utensils, GraduationCap, 
  HeartPulse, Tractor, Building2, CreditCard, ShieldCheck 
} from 'lucide-react';
import './TradeProjectionSection.css';

export default function TradeProjectionSection() {
  const [filterType, setFilterType] = useState('all');

  const categoriesTrade = [
    { name: "Cars & SUVs", amount: "₹63 cr", val: 63, type: "orders", note: "~700 bookings at avg ~₹9 lakh", icon: Car, color: "#E22B22" },
    { name: "Jewellery, Gold & Silver", amount: "₹55 cr", val: 55, type: "spot", note: "Dhanteras coin & bridal wedding pre-orders", icon: Gem, color: "#f59e0b" },
    { name: "Electronics, Appliances & IT", amount: "₹45 cr", val: 45, type: "spot", note: "TVs, phones, laptops, AI zone & smart home", icon: Tv, color: "#0284c7" },
    { name: "Consumer Goods & Lifestyle", amount: "₹40 cr", val: 40, type: "spot", note: "Utensils, apparel, puja items, gifts & FMCG", icon: ShoppingBag, color: "#ec4899" },
    { name: "Real Estate & Plots", amount: "₹35 cr", val: 35, type: "orders", note: "~70 bookings at avg ~₹50 lakh", icon: Home, color: "#10b981" },
    { name: "Home Décor & Furniture", amount: "₹34 cr", val: 34, type: "orders", note: "Diwali furnishings, lighting & measured orders", icon: Sofa, color: "#8b5cf6" },
    { name: "Handloom & Handicrafts", amount: "₹15 cr", val: 15, type: "spot", note: "6 GI crafts, Bhagalpuri silk, Madhubani art", icon: Palette, color: "#f97316" },
    { name: "Building Materials", amount: "₹15 cr", val: 15, type: "orders", note: "Post-festive building orders, tiles, steel, solar", icon: Hammer, color: "#64748b" },
    { name: "Two-Wheelers & EVs", amount: "₹12 cr", val: 12, type: "orders", note: "~1,200 bookings at avg ~₹1 lakh", icon: Bike, color: "#06b6d4" },
    { name: "Food & Beverages", amount: "₹10 cr", val: 10, type: "spot", note: "20 food court stalls & 'Taste of Bihar' counters", icon: Utensils, color: "#ef4444" },
    { name: "Education & Coaching", amount: "₹4 cr", val: 4, type: "spot", note: "Admissions, course enrollments & student credit", icon: GraduationCap, color: "#3b82f6" },
    { name: "Healthcare & MedTech", amount: "₹4 cr", val: 4, type: "spot", note: "Health packages, screening camps & devices", icon: HeartPulse, color: "#14b8a6" },
    { name: "Agriculture & Allied", amount: "₹4 cr", val: 4, type: "spot", note: "Makhana gifting, equipment & organic inputs", icon: Tractor, color: "#84cc16" },
    { name: "Government & PSU", amount: "₹4 cr", val: 4, type: "spot", note: "Direct citizen schemes & institutional drives", icon: Building2, color: "#6366f1" }
  ];

  const filteredCategories = filterType === 'all' 
    ? categoriesTrade 
    : categoriesTrade.filter(c => c.type === filterType);

  return (
    <section id="projection" className="projection-section">
      <div className="container">

        {/* ==============================================================
            A. HOW WE ARRIVE AT ₹340 CRORE (PAGE 17 OF PDF)
            ============================================================== */}
        <div className="projection-header text-center">
          <div className="proj-badge">MACRO-ECONOMIC PROJECTION MODEL</div>
          <h2 className="proj-title">
            What the Ground Can Trade: <span className="gradient-text-red-orange">₹340 Crore</span>
          </h2>
          <p className="proj-sub">
            Projected total business at Patna Expo 2026 across 13 festive days — including on-ground spot sales, 
            advance orders, and festival deliveries booked directly at stalls.
          </p>
        </div>

        {/* 3 Steps Model */}
        <div className="three-steps-model-grid">
          <div className="model-step-card">
            <span className="step-tag">STEP 1 • BASE ESTIMATE</span>
            <div className="step-big-val">₹7,500 Cr</div>
            <p>Patna’s total festive-season spend spanning from Navratri to Diwali.</p>
          </div>

          <div className="model-step-card">
            <span className="step-tag">STEP 2 • THE 13-DAY PEAK</span>
            <div className="step-big-val">₹3,375 Cr</div>
            <p>About 45% of total festive budget is spent in the 13 days ending on Dhanteras.</p>
          </div>

          <div className="model-step-card highlight-step">
            <span className="step-tag tag-gold">STEP 3 • 10% TARGET SHARE</span>
            <div className="step-big-val text-gold">₹340 Cr</div>
            <p>The conservative 10% market share Patna Expo captures on one unified campus.</p>
          </div>
        </div>

        {/* Four Engines Behind the 10% */}
        <div className="four-engines-banner">
          <h4 className="engines-heading">FOUR ENGINES BEHIND THE 10% MARKET SHARE</h4>
          <div className="engines-grid">
            <div className="engine-card">
              <strong>The Festival Mall</strong>
              <p>8 pavilions and 14+ categories in one walk: the one-roof comfort that pulls families to malls.</p>
            </div>
            <div className="engine-card">
              <strong>A City-Wide Campaign</strong>
              <p>Public hoardings, local news channels and viral social media, from launch to Dhanteras.</p>
            </div>
            <div className="engine-card">
              <strong>A Reason to Come Daily</strong>
              <p>Evening culture, celebrity performances, daily events, amusement rides and food courts.</p>
            </div>
            <div className="engine-card">
              <strong>Trust &amp; Timing</strong>
              <p>A Government of Bihar platform, with festive bookings handed over on auspicious Dhanteras.</p>
            </div>
          </div>
        </div>

        {/* ==============================================================
            B. WHERE THE ₹340 CRORE FLOWS (PAGE 18 OF PDF)
            ============================================================== */}
        <div className="flows-container">
          <div className="flows-header">
            <div>
              <h3 className="flows-title">Where the ₹340 Crore Flows</h3>
              <p className="flows-sub">
                The projection is distributed across the Expo’s sectors in line with how Patna spends during the festive season.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flows-filters">
              <button 
                type="button" 
                className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
                onClick={() => setFilterType('all')}
              >
                All Sectors (14)
              </button>
              <button 
                type="button" 
                className={`filter-btn ${filterType === 'spot' ? 'active' : ''}`}
                onClick={() => setFilterType('spot')}
              >
                Spot Sales
              </button>
              <button 
                type="button" 
                className={`filter-btn ${filterType === 'orders' ? 'active' : ''}`}
                onClick={() => setFilterType('orders')}
              >
                Bookings &amp; Orders
              </button>
            </div>
          </div>

          {/* Visual Sector Bar List */}
          <div className="sector-bars-list">
            {filteredCategories.map((cat, idx) => {
              const Icon = cat.icon;
              const pct = (cat.val / 63) * 100; // max is 63 cr
              return (
                <div key={idx} className="sector-row-card">
                  <div className="sector-info-head">
                    <div className="sector-title-wrap">
                      <div className="sector-icon-box" style={{ color: cat.color, background: `${cat.color}15` }}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <strong className="sector-name">{cat.name}</strong>
                        <span className="sector-note">{cat.note}</span>
                      </div>
                    </div>
                    <div className="sector-amount-wrap">
                      <span className="sector-amount">{cat.amount}</span>
                      <span className={`sector-pill ${cat.type}`}>
                        {cat.type === 'spot' ? 'Spot Sales' : 'Bookings & Orders'}
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="sector-bar-track">
                    <motion.div 
                      className="sector-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.04 }}
                      style={{ background: cat.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Insights: Big Tickets & Banking Rides On It */}
          <div className="projection-bottom-callouts">
            <div className="callout-box big-tickets">
              <h4>Behind the Big Tickets</h4>
              <p>
                <strong>Cars:</strong> ~700 bookings at ~₹9 Lakh average • 
                <strong> Two-wheelers:</strong> ~1,200 bookings at ~₹1 Lakh average • 
                <strong> Real Estate:</strong> ~70 bookings at ~₹50 Lakh average.
              </p>
            </div>

            <div className="callout-box banking-spot">
              <h4>
                <CreditCard size={18} />
                <span>Banking Rides on All of It</span>
              </h4>
              <p>
                <strong>₹244 Crore</strong> of cars, two-wheelers, property, jewellery, electronics, and furniture sold: 
                <strong> each sale is a loan, credit card, or insurance policy executed on the spot!</strong>
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
