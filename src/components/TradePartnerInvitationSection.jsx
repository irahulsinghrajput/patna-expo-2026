import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, Users, Store, CalendarRange, Network, 
  Eye, Rocket, TrendingUp, MailCheck, ArrowRight, ShieldCheck 
} from 'lucide-react';
import './TradePartnerInvitationSection.css';

export default function TradePartnerInvitationSection({ onOpenBooking }) {
  const reasons = [
    {
      num: '1',
      icon: Building2,
      title: 'Prime Exhibition Venue',
      desc: 'Showcase your brand at the iconic Gandhi Maidan, Patna — the heart and commercial nerve center of Bihar.',
      image: '/images/reason-prime-venue.jpg'
    },
    {
      num: '2',
      icon: Users,
      title: 'Massive Consumer Reach',
      desc: 'Connect directly with a projected festive audience of 10 Lakh+ high-intent shoppers and visitors.',
      image: '/images/reason-massive-reach.jpg'
    },
    {
      num: '3',
      icon: Store,
      title: '500+ Exhibitor Booths',
      desc: 'Join a vibrant, comprehensive marketplace featuring 14+ diverse industries, leading brands, and innovators.',
      image: '/images/reason-exhibitor-booths.jpg'
    },
    {
      num: '4',
      icon: CalendarRange,
      title: 'Festive Shopping Advantage',
      desc: 'Capitalize on Bihar’s highest annual buying wave during the peak Dussehra and Dhanteras shopping season.',
      image: '/images/reason-festive-advantage.jpg'
    },
    {
      num: '5',
      icon: Network,
      title: 'Strategic Business Networking',
      desc: 'Engage with key entrepreneurs, corporate retailers, trade buyers, government institutions, and prospective partners.',
      image: '/images/reason-business-networking.jpg'
    },
    {
      num: '6',
      icon: Eye,
      title: 'Enhanced Brand Visibility',
      desc: 'Strengthen statewide brand recognition through prime on-ground pavilions, media hoardings, and digital campaigns.',
      image: '/images/reason-brand-visibility.jpg'
    },
    {
      num: '7',
      icon: Rocket,
      title: 'Product & Innovation Showcase',
      desc: 'Launch and demonstrate your latest products, services, cutting-edge technologies, and consumer solutions live on stage.',
      image: '/images/reason-product-showcase.jpg'
    },
    {
      num: '8',
      icon: TrendingUp,
      title: 'Business Growth Opportunities',
      desc: 'Generate thousands of qualified leads, capture instant spot bookings, and expand your regional market distribution.',
      image: '/images/reason-business-growth.jpg'
    }
  ];

  return (
    <section id="trade-partner" className="trade-invitation-section">
      <div className="container">

        {/* ==============================================================
            A. OFFICIAL LETTER TO ESTEEMED TRADE PARTNERS (PAGE 6 OF PDF)
            ============================================================== */}
        <motion.div 
          className="invitation-letter-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Top Banner Tag */}
          <div className="letter-header-tag">
            <span>8 YEARS LATER, A NEW ERA OF BUSINESS BEGINS!</span>
          </div>

          <h2 className="letter-main-title">
            BIGGER OPPORTUNITIES • GRAND CONNECTIONS!
          </h2>

          <h3 className="letter-subtitle-red">
            WHY PARTICIPATE IN PATNA EXPO 2026?
          </h3>

          <div className="letter-scroll-paper">
            <div className="letter-salutation">
              <strong>Dear Esteemed Trade Partner,</strong>
              <p>Greetings from the Organizing Team of Dussehra Mela &amp; Patna Expo 2026!</p>
            </div>

            <div className="letter-body-paragraphs">
              <p>
                We are delighted to invite your esteemed organization to be part of one of Patna’s most anticipated 
                festive and business gatherings, taking place at the historic <strong>Gandhi Maidan, Patna</strong>, 
                from <strong>25th October to 6th November 2026</strong>.
              </p>
              <p>
                Returning after nearly eight years, <strong>Dussehra Mela &amp; Patna Expo 2026</strong> marks the revival of a 
                cherished tradition with a renewed identity, a grander vision, and exciting commercial opportunities for 
                businesses and brands.
              </p>
              <p>
                Presented by the <strong>Divisional Commissioner’s Office, Patna</strong>, through 
                <strong> Shri Krishna Smarak Vikas Samiti, Government of Bihar</strong>, and managed by 
                <strong> Bobis Entertainment Pvt. Ltd.</strong>, the event aims to bring together leading brands, 
                manufacturers, wholesalers, retailers, entrepreneurs, startups, and consumers on one dynamic platform.
              </p>
              <p>
                Coinciding with the peak festive shopping season from <strong>Dussehra to Dhanteras</strong>, the Expo offers a 
                valuable opportunity to showcase your products and services, engage directly with potential customers, expand 
                market reach, strengthen brand visibility, generate high-quality business leads, and build meaningful commercial partnerships.
              </p>
              <p>
                With its diverse shopping experience, lifestyle exhibitions, consumer-focused attractions, food and 
                entertainment zones, and cultural programmes, the event is envisioned as a vibrant destination where 
                business meets opportunity, brands connect with buyers, and celebrations create lasting impressions.
              </p>
              <p>
                We invite you to join us as an exhibitor or sponsor and become part of this exciting new chapter in Patna’s 
                festive and commercial landscape.
              </p>
            </div>

            {/* Letter Sign-off */}
            <div className="letter-conclusion-box">
              <div className="sign-off-motto">
                Dussehra Mela &amp; Patna Expo 2026 — A Grand Return. A New Identity. Endless Opportunities.
              </div>
              <div className="organizing-signatories">
                <div className="signatory-item">
                  <ShieldCheck size={20} className="sig-icon" />
                  <div>
                    <strong>Divisional Commissioner's Office, Patna</strong>
                    <span>Shri Krishna Smarak Vikas Samiti, Govt. of Bihar</span>
                  </div>
                </div>
                <div className="signatory-item">
                  <span className="sig-divider">•</span>
                  <div>
                    <strong>Bobis Entertainment Pvt. Ltd.</strong>
                    <span>Event Management Desk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ==============================================================
            B. 8 POWERFUL REASONS TO PARTICIPATE (PAGE 7 OF PDF)
            ============================================================== */}
        <div className="eight-reasons-header">
          <div className="reasons-pill">8 POWERFUL REASONS</div>
          <h2 className="reasons-title">
            Why Participate, <span className="gradient-text-red-orange">Connect &amp; Grow!</span>
          </h2>
          <p className="reasons-subtitle">
            Everything your brand needs to capture Bihar’s high-spending festive buyers under one prestigious roof.
          </p>
        </div>

        <div className="eight-reasons-grid">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <motion.div 
                key={idx}
                className="reason-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
              >
                {r.image ? (
                  <div className="reason-img-container">
                    <img src={r.image} alt={r.title} className="reason-photo" />
                    <div className="reason-img-overlay" />
                    <span className="reason-number-circle on-img">{r.num}</span>
                    <div className="reason-icon-floating">
                      <Icon size={18} />
                    </div>
                  </div>
                ) : (
                  <div 
                    className="reason-img-container reason-img-placeholder"
                    style={{ background: r.placeholderGrad || 'linear-gradient(135deg, #1e1b4b, #312e81)' }}
                  >
                    <div className="reason-img-overlay" />
                    <span className="reason-number-circle on-img">{r.num}</span>
                    <div className="reason-placeholder-center">
                      <Icon size={46} className="placeholder-icon" />
                    </div>
                  </div>
                )}
                <div className="reason-card-body">
                  <h3 className="reason-card-title">{r.title}</h3>
                  <p className="reason-card-desc">{r.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick CTA to Form */}
        <div className="reasons-bottom-cta">
          <div className="cta-banner-text">
            <strong>Ready to secure your counter at Gandhi Maidan?</strong>
            <span>Prime stalls in Pavilion 1-8 are allotted on a first-confirmed basis.</span>
          </div>
          <button 
            type="button" 
            className="btn-primary"
            onClick={() => onOpenBooking && onOpenBooking('Trade Partner Registration')}
          >
            <span>Book Your Stall Space</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
