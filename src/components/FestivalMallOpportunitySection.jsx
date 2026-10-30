import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, TrendingUp, DollarSign, Sparkles, MapPin, 
  Calendar, Check, X, Shield, ArrowRight, BarChart3, ShoppingCart 
} from 'lucide-react';
import './FestivalMallOpportunitySection.css';

export default function FestivalMallOpportunitySection({ onOpenBooking }) {
  const metrics = [
    { num: '13 Days', label: '25 Oct – 6 Nov 2026', sub: 'Ending on Dhanteras' },
    { num: '8', label: 'Themed Pavilions', sub: 'On one festive campus' },
    { num: '14+', label: 'Industry Categories', sub: 'Under one roof' },
    { num: '10 Lakh+', label: 'Expected Visitors', sub: 'Over 13 festive days' },
    { num: '₹340 Cr', label: 'Projected Business', sub: 'At the Expo ground' },
    { num: 'Every Day', label: 'Culture & Entertainment', sub: 'Competitions & Food Courts' },
  ];

  return (
    <section id="opportunity" className="opportunity-section">
      <div className="container">
        
        {/* ==============================================================
            1. ONE GROUND THIRTEEN DAYS KEY METRICS (PAGE 12 OF PDF)
            ============================================================== */}
        <div className="metrics-banner-header text-center">
          <div className="metrics-badge">THE MEGA FESTIVAL MARKETPLACE</div>
          <h2 className="metrics-title">
            One Ground • Thirteen Days • <span className="gradient-text-red-orange">Every Festive Purchase</span>
          </h2>
          <p className="metrics-subtitle">
            Every festive season Patna buys more than at any other time of the year — but it buys across a scattered 
            city of bazaars, showrooms and malls. <strong>Patna Expo 2026 gathers that entire buying power into one place: 
            a government-backed festival mall at Gandhi Maidan.</strong>
          </p>
        </div>

        <div className="metrics-grid">
          {metrics.map((m, idx) => (
            <motion.div 
              key={idx}
              className="metric-card"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div className="metric-number">{m.num}</div>
              <div className="metric-label">{m.label}</div>
              <div className="metric-sub">{m.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* ==============================================================
            2. A MEGA MALL FOR EVERY SELLER (PAGE 13 OF PDF)
            ============================================================== */}
        <div className="mega-mall-container">
          <div className="mega-mall-header">
            <span className="mall-pill">RETHINK RETAIL INVESTMENT</span>
            <h3 className="mall-title">A Mega Mall for Every Seller</h3>
            <p className="mall-desc">
              Malls won festive shopping with one promise: everything under one roof, with comfort, food and entertainment. 
              But a high-street store requires a 3–5 year lease, huge security deposit, and expensive fit-outs. 
              <strong> Patna Expo gives that same luxury mall footfall to every independent seller, for the 13 days that matter most.</strong>
            </p>
          </div>

          <div className="comparison-three-cols">
            
            {/* Col 1: What Shoppers Love */}
            <div className="comp-card comp-shoppers">
              <div className="comp-badge-header shoppers-hdr">WHAT SHOPPERS LOVE IN A MALL</div>
              <ul className="comp-list">
                <li><Check size={16} className="text-green" /> <span><strong>Every category in one walk</strong></span></li>
                <li><Check size={16} className="text-green" /> <span><strong>Comfort to browse as a family</strong></span></li>
                <li><Check size={16} className="text-green" /> <span><strong>Food, fun and entertainment</strong></span></li>
                <li><Check size={16} className="text-green" /> <span><strong>Festive offers side by side</strong></span></li>
                <li><Check size={16} className="text-green" /> <span><strong>Air-conditioned ambiance &amp; wide walkways</strong></span></li>
                <li><Check size={16} className="text-green" /> <span><strong>Safe, celebratory evening family outing</strong></span></li>
                <li><Check size={16} className="text-green" /> <span><strong>Central location with festive vibe</strong></span></li>
              </ul>
            </div>

            {/* Col 2: What It Costs a Seller in a Mall */}
            <div className="comp-card comp-costs">
              <div className="comp-badge-header costs-hdr">WHAT IT COSTS A SELLER IN A MALL</div>
              <ul className="comp-list">
                <li><X size={16} className="text-red" /> <span><strong>Year-round rent in prime locations</strong></span></li>
                <li><X size={16} className="text-red" /> <span><strong>Heavy deposits &amp; long locked leases</strong></span></li>
                <li><X size={16} className="text-red" /> <span><strong>Massive fit-out cost before the first sale</strong></span></li>
                <li><X size={16} className="text-red" /> <span><strong>Top floors reserved only for multinational brands</strong></span></li>
                <li><X size={16} className="text-red" /> <span><strong>High monthly CAM &amp; utility charges</strong></span></li>
                <li><X size={16} className="text-red" /> <span><strong>Fixed overheads during off-peak lean months</strong></span></li>
                <li><X size={16} className="text-red" /> <span><strong>Zero flexibility for short festive pop-ups</strong></span></li>
              </ul>
            </div>

            {/* Col 3: What Patna Expo Gives */}
            <div className="comp-card comp-gives">
              <div className="comp-badge-header gives-hdr">WHAT PATNA EXPO GIVES YOU</div>
              <ul className="comp-list">
                <li><Check size={16} className="text-gold" /> <span><strong>Mall-style comfort on one festive ground</strong></span></li>
                <li><Check size={16} className="text-gold" /> <span><strong>Covered hangar stalls, AC or Non-AC</strong></span></li>
                <li><Check size={16} className="text-gold" /> <span><strong>Peak season only: Zero long lease, zero deposit</strong></span></li>
                <li><Check size={16} className="text-gold" /> <span><strong>A government-backed footfall drive</strong></span></li>
                <li><Check size={16} className="text-gold" /> <span><strong>Huge Lead Generation scope</strong></span></li>
                <li><Check size={16} className="text-gold" /> <span><strong>Mega Footfall for B2B and B2C clients</strong></span></li>
                <li><Check size={16} className="text-gold" /> <span><strong>Grand Advertising and Brands</strong></span></li>
              </ul>
            </div>

          </div>

          {/* 4 Steps How the Festival Mall Works */}
          <div className="mall-engine-banner">
            <h4 className="engine-title">MALL COMFORT. MELA SPIRIT. PEAK-SEASON TIMING.</h4>
            <div className="engine-steps-grid">
              <div className="engine-step">
                <span className="step-num">1</span>
                <strong>The City is Told</strong>
                <p>Hoardings, local news, and social media bring hundreds of thousands of families in.</p>
              </div>
              <div className="engine-step">
                <span className="step-num">2</span>
                <strong>One Walk, Every Purchase</strong>
                <p>14+ categories, from an SUV or flat to jewellery, appliances, and Madhubani gifts.</p>
              </div>
              <div className="engine-step">
                <span className="step-num">3</span>
                <strong>Reasons to Stay</strong>
                <p>Evening culture, competitions, food courts, and Funfair lengthen every family's visit.</p>
              </div>
              <div className="engine-step">
                <span className="step-num">4</span>
                <strong>Dhanteras Closes the Deal</strong>
                <p>Bookings made during the Expo are celebrated &amp; handed over on auspicious Dhanteras (6 Nov).</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
