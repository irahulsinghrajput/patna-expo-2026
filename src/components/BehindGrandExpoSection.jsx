import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { 
  Award, Globe, Mail, CheckCircle2, Star, Sparkles, 
  Users, Target, Layers, ArrowUpRight, Phone 
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import './BehindGrandExpoSection.css';

export default function BehindGrandExpoSection() {
  return (
    <section id="behind-expo" className="behind-expo-section">
      <div className="container">
        <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} perspective={1200} scale={1.01} transitionSpeed={800}>
          <motion.div 
            className="behind-expo-glass-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Header Badge */}
            <div className="behind-badge-pill">
              <Sparkles size={16} />
              <span>THE FORCE BEHIND THE FESTIVAL • THE VISION BEHIND THE EXPERIENCE</span>
            </div>

            {/* Main Section Headings */}
            <h2 className="behind-expo-title">
              BEHIND THE GRAND DUSSEHRA MELA &amp; PATNA EXPO 2026 <br />
              <span className="behind-vision-red">THE VISION, THE TEAM &amp; THE TRUST</span>
            </h2>

            <p className="behind-expo-tagline">
              Meet the Experts Turning a Grand Vision into Reality.
            </p>

            {/* Management Tagline */}
            <div className="behind-managed-banner">
              <span className="managed-label">Dussehra Mela &amp; Patna EXPO 2026 Managed by</span>
              <div className="managed-identity">
                <img 
                  src="/images/bobis-logo.png" 
                  alt="Bobis Entertainment Private Limited Logo" 
                  className="managed-bobis-img" 
                />
                <strong>Bobis Entertainment Private Limited</strong>
              </div>
            </div>

            {/* Corporate Narrative Body */}
            <div className="behind-narrative-grid">
              <div className="narrative-col-left">
                <p className="narrative-lead">
                  <strong>BOBIS Entertainment Pvt. Ltd.</strong> is a leading entertainment and event management 
                  company in India, specializing in delivering world-class experiences across diverse domains 
                  of the industry.
                </p>
                <p>
                  With expertise across entertainment events (celebrity and artist management, live concerts, 
                  arena events, large-scale award functions, brand management, and corporate networking), 
                  we provide end-to-end solutions tailored to client needs.
                </p>
                <p>
                  It has been creating impact for brands through iconic, culture-changing, value-driving ideas. 
                  It builds on that rich legacy through <strong>Borderless Creativity</strong> — innovating at the 
                  intersections of its advertising, public relations, relationship design, consulting, and 
                  health capabilities with experts collaborating seamlessly.
                </p>
              </div>

              <div className="narrative-col-right">
                <div className="patna-hq-callout">
                  <h4 className="hq-title">
                    <Award size={20} className="hq-icon" />
                    <span>Headquartered in Patna — Regional Pioneer</span>
                  </h4>
                  <p>
                    Headquartered in Patna, <strong>BOBIS</strong> has established itself as the premier event enterprise in the region, 
                    renowned for its professionalism, innovation, and flawless execution. Our team of experts combines 
                    strategic planning with creative vision to design events that not only engage but also create lasting impressions.
                  </p>
                  <p className="commitment-text">
                    <em>
                      "At BOBIS, we understand that every event represents a unique opportunity to connect, celebrate, 
                      and inspire. Our commitment is to transform ideas into seamless experiences, ensuring excellence 
                      at every stage — from concept to execution."
                    </em>
                  </p>
                </div>
              </div>
            </div>

            {/* Official Bobis Contact & Connectivity Bar (From Page 5 of PDF) */}
            <div className="bobis-official-footer-bar">
              <div className="bobis-contact-item">
                <Mail size={18} className="bobis-c-icon" />
                <a href="mailto:infobobis@gmail.com">infobobis@gmail.com</a>
              </div>

              <div className="bobis-contact-item">
                <Phone size={18} className="bobis-c-icon" />
                <span className="bobis-phone-links">
                  <a href="tel:+917903670000">790367 0000</a>, <a href="tel:+917903770000">790377 0000</a>
                </span>
              </div>

              <div className="bobis-social-channels">
                <span className="social-label">Follow BobisGroup:</span>
                <div className="social-links-group">
                  <a href="https://www.facebook.com/BobisGroup" target="_blank" rel="noreferrer" title="Facebook"><FaFacebookF /></a>
                  <a href="https://www.instagram.com/bobisgroup/" target="_blank" rel="noreferrer" title="Instagram"><FaInstagram /></a>
                  <a href="https://www.youtube.com/@bobisgroup" target="_blank" rel="noreferrer" title="YouTube"><FaYoutube /></a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedinIn /></a>
                </div>
              </div>
            </div>

          </motion.div>
        </Tilt>
      </div>
    </section>
  );
}
