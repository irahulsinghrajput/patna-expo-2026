import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award } from 'lucide-react';
import './HeroOrganizerBadge.css';

export default function HeroOrganizerBadge() {
  return (
    <motion.div 
      className="hero-organizer-wrapper"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
    >
      <div className="hero-organizer-container">
        {/* Government Organizer Badge */}
        <div className="organizer-cell govt-cell">
          <div className="organizer-eyebrow">
            <ShieldCheck size={16} className="organizer-badge-icon" />
            <span>PRESENTED & ORGANISED BY</span>
          </div>
          <div className="organizer-body">
            <img 
              src="/images/govt-bihar-commissioner-logo.png" 
              alt="Divisional Commissioner's Office, Patna and Shri Krishna Smarak Vikas Samiti - Government of Bihar"
              className="govt-official-logo"
            />
            <div className="organizer-text-info govt-text-info">
              <h3 className="organizer-main-title">
                Divisional Commissioner's Office, Patna
              </h3>
              <p className="organizer-sub-title">
                and Shri Krishna Smarak Vikas Samiti - Government of Bihar
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Divider Line */}
        <div className="organizer-divider-line" aria-hidden="true">
          <span className="divider-dot"></span>
        </div>

        {/* Event Management Badge */}
        <div className="organizer-cell bobis-cell">
          <div className="organizer-eyebrow">
            <Award size={16} className="organizer-badge-icon" />
            <span>CONCEPTUALISED & MANAGED BY</span>
          </div>
          <div className="organizer-body">
            <img 
              src="/images/bobis-logo.png" 
              alt="Bobis Entertainment Private Limited" 
              className="bobis-official-logo" 
            />
            <div className="organizer-text-info bobis-text-info">
              <h3 className="organizer-main-title">
                Bobis Entertainment Private Limited
              </h3>
              <div className="bobis-secondary-row">
                <span className="bobis-registered-tag">Bobis Entertainment Pvt. Ltd.</span>
                <span className="bobis-separator">•</span>
                <span className="bobis-enterprise-tag">Premier Event & Entertainment Enterprise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
