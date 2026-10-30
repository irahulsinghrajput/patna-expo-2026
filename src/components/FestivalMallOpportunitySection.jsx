import React from 'react';
import { motion } from 'framer-motion';
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

      </div>
    </section>
  );
}
