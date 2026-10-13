import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Calendar, MapPin, TrendingUp, Users, ShoppingBag, 
  Store, Award, ArrowRight, ShieldCheck, CheckCircle2 
} from 'lucide-react';
import './GrandComebackSection.css';

export default function GrandComebackSection({ onOpenBooking }) {
  return (
    <section id="comeback" className="comeback-section">
      <div className="container">
        
        {/* =========================================================
            1. EXHIBITOR & SPONSORSHIP PROPOSAL BANNER (PAGE 1 CALLOUT)
            ========================================================= */}
        <motion.div 
          className="proposal-banner-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="proposal-content-wrapper">
            <div className="proposal-badge-pill">
              <Sparkles size={16} />
              <span>OFFICIAL TRADE & SPONSORSHIP INVITATION</span>
            </div>
            <h2 className="proposal-headline">
              EXHIBITOR &amp; SPONSORSHIP PROPOSAL
            </h2>
            <p className="proposal-subheadline">
              Partner with us to Showcase Your Brand &amp; Unlock Exceptional Commercial Opportunities!
            </p>
            <div className="proposal-cta-group">
              <button 
                type="button" 
                className="btn-proposal-primary"
                onClick={() => onOpenBooking && onOpenBooking('Exhibitor & Sponsorship Proposal')}
              >
                <span>Book Your Stall / Counter Now</span>
                <ArrowRight size={18} />
              </button>
              <a href="#trade-partner" className="btn-proposal-secondary">
                Read Official Trade Invitation
              </a>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            2. GRAND COMEBACK AFTER 8 YEARS (PAGE 2 OF PDF)
            ========================================================= */}
        <div className="comeback-grid">
          
          {/* Left Column: The 8-Year Return Story */}
          <motion.div 
            className="comeback-text-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="tag-pill-highlight">
              <Calendar size={15} />
              <span>8 YEARS LATER, THE MAGIC RETURNS!</span>
            </div>

            <h2 className="comeback-title">
              Grand Comeback after 8 Years <br />
              <span className="gradient-text-red-orange">Gandhi Maidan Celebrates Again!</span>
            </h2>

            <p className="comeback-motto">
              Reborn with Grandeur, Driven by a New Vision!
            </p>

            <div className="comeback-tag-banner">
              <strong>Dussehra Mela &amp; Patna EXPO 2026</strong>
              <span>25 October to 6 November 2026 • Historic Gandhi Maidan</span>
            </div>

            <div className="comeback-paragraphs">
              <p>
                The historic <strong>Gandhi Maidan in Patna</strong> is all set to welcome a spectacular world of 
                celebrations, shopping, entertainment, and festive joy once again! After a gap of nearly 
                <strong> eight years</strong>, the return of the Dussehra Fair marks more than just the revival of an 
                event—it represents the rekindling of Patna’s festive traditions, cherished memories, and the 
                vibrant fair culture that has been an integral part of the city’s identity.
              </p>
              <p>
                Dussehra, a festival symbolising the victory of good over evil, brings with it a spirit of hope, 
                happiness, and new beginnings. The return of the Dussehra Fair to Gandhi Maidan promises to 
                make the festive season even more special for the people of Patna and beyond. In the past, 
                Gandhi Maidan would come alive during Dussehra with dazzling lights, colourful stalls, thrilling rides, 
                delicious food, traditional handicrafts, and a wide range of entertainment. Visiting the fair with family, 
                enjoying rides with children, shopping for favourite products, and experiencing cultural performances 
                became cherished memories associated with the festive season.
              </p>
            </div>

            {/* Quick Proof Highlights */}
            <div className="comeback-quick-stats">
              <div className="quick-stat-item">
                <span className="stat-val">8 Years</span>
                <span className="stat-lbl">Cherished Hiatus Ends</span>
              </div>
              <div className="quick-stat-item">
                <span className="stat-val">13 Days</span>
                <span className="stat-lbl">Dussehra to Dhanteras</span>
              </div>
              <div className="quick-stat-item">
                <span className="stat-val">10 Lakh+</span>
                <span className="stat-lbl">Projected Footfall</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Festive Season Buyers & Businesses (Page 3 of PDF) */}
          <motion.div 
            className="comeback-business-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Stamp Card Header */}
            <div className="festive-stamp-header">
              <span className="stamp-sub">THIS FESTIVE SEASON</span>
              <h3 className="stamp-main">BUYERS AND BUSINESSES</h3>
              <div className="stamp-ribbon">THE BIGGEST CELEBRATION</div>
            </div>

            <div className="business-content-box">
              <p>
                Now, after years of anticipation, this beloved tradition has an opportunity to return with a renewed identity. 
                The proposed <strong>Dussehra Fair &amp; Patna Expo 2026</strong> envisions a grand, well-organised, and multifaceted 
                celebration that seamlessly brings together tradition and modernity.
              </p>

              <div className="feature-check-list">
                <div className="check-item">
                  <CheckCircle2 size={18} className="check-icon" />
                  <span><strong>Comprehensive Shopping Destination:</strong> Diverse handicrafts, household essentials, fashion, automobiles, electronics &amp; luxury goods.</span>
                </div>
                <div className="check-item">
                  <CheckCircle2 size={18} className="check-icon" />
                  <span><strong>Peak Season Timing:</strong> Spanning from Dussehra to Dhanteras (25 Oct – 6 Nov), capturing the highest annual retail spend of Bihar.</span>
                </div>
                <div className="check-item">
                  <CheckCircle2 size={18} className="check-icon" />
                  <span><strong>High-Energy Entertainment:</strong> Nightly cultural programmes, celebrity artists, rides, children's zones &amp; grand food courts.</span>
                </div>
                <div className="check-item">
                  <CheckCircle2 size={18} className="check-icon" />
                  <span><strong>Government-Backed Credibility:</strong> Under the aegis of the Divisional Commissioner's Office, Patna &amp; Shri Krishna Smarak Vikas Samiti.</span>
                </div>
              </div>

              <div className="heritage-quote-box">
                <p>
                  "Gandhi Maidan holds a special place in the historical, cultural, and social identity of Patna. 
                  The return of the Dussehra Fair offers an unprecedented opportunity to revive nostalgic memories while 
                  introducing a new generation to the charm of traditional fairs—creating a vibrant destination for joy, 
                  commerce, and community participation."
                </p>
              </div>

              {/* Tagline Footer */}
              <div className="expo-signature-banner">
                <div className="signature-title">Dussehra Mela &amp; Patna EXPO 2026</div>
                <div className="signature-subtitle">
                  Reviving Traditions • Celebrating Togetherness • Creating a World of Shopping &amp; Festive Experiences!
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
