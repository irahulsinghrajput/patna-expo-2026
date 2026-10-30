import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Calendar, MapPin, Mail,
  ShoppingCart, Building, GraduationCap, Gem, Car, Tractor, Laptop, HeartPulse, Landmark, Hammer, Armchair, Tv,
  PartyPopper, Lightbulb, Utensils, Palette,
  ShieldCheck, Home, Building2, Sparkles
} from 'lucide-react';
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import HeroFireHeading from './components/HeroFireHeading';
import HeroOrganizerBadge from './components/HeroOrganizerBadge';
import GrandComebackSection from './components/GrandComebackSection';
import BehindGrandExpoSection from './components/BehindGrandExpoSection';
import TradePartnerInvitationSection from './components/TradePartnerInvitationSection';
import FestivalMallOpportunitySection from './components/FestivalMallOpportunitySection';
import CampusMasterplanSection from './components/CampusMasterplanSection';
import ExhibitionPackagesSection from './components/ExhibitionPackagesSection';
import PhotoGallerySection from './components/PhotoGallerySection';
import BookingForm from './components/BookingForm';
import './index.css';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackageForModal, setSelectedPackageForModal] = useState('');
  
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  useEffect(() => {
    const targetDate = new Date('October 25, 2026 00:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { name: "Consumer & Shopping", icon: ShoppingCart, grad: "card-grad-1", image: "/images/sector-consumer-shopping.jpg" },
    { name: "Automobiles & Bike", icon: Car, grad: "card-grad-2", image: "/images/sector-automobiles.png" },
    { name: "Real Estate & Plots", icon: Building, grad: "card-grad-3", image: "/images/sector-real-estate.png" },
    { name: "Handloom & Accessories", icon: Palette, grad: "card-grad-4", image: "/images/sector-handloom.png" },
    { name: "Handicrafts & Art", icon: Sparkles, grad: "card-grad-5", image: "/images/sector-handicrafts.png" },
    { name: "Banking & Finance", icon: Landmark, grad: "card-grad-1", image: "/images/sector-banking.png" },
    { name: "Insurance Industry", icon: ShieldCheck, grad: "card-grad-2", image: "/images/sector-insurance.png" },
    { name: "Education & Coaching", icon: GraduationCap, grad: "card-grad-3", image: "/images/sector-education.png" },
    { name: "Educational Institutions", icon: Building2, grad: "card-grad-4", image: "/images/sector-education.png" },
    { name: "Furniture & Living", icon: Armchair, grad: "card-grad-5", image: "/images/sector-furniture.png" },
    { name: "Home Decor", icon: Lightbulb, grad: "card-grad-1", image: "/images/sector-home-decor.png" },
    { name: "Home Interiors", icon: Home, grad: "card-grad-2", image: "/images/sector-home-interiors.png" },
    { name: "Building Materials", icon: Hammer, grad: "card-grad-3", image: "/images/sector-building-materials.png" },
    { name: "Jewelry, Fashion & Beauty", icon: Gem, grad: "card-grad-4", image: "/images/sector-jewelry.png" },
    { name: "Healthcare & Medtech", icon: HeartPulse, grad: "card-grad-5", image: "/images/sector-healthcare.png" },
    { name: "IT & Computers", icon: Laptop, grad: "card-grad-1", image: "/images/sector-it-computers.png" },
    { name: "Electronics & Appliances", icon: Tv, grad: "card-grad-2", image: "/images/sector-electronics.png" },
    { name: "Agriculture & Equipment", icon: Tractor, grad: "card-grad-3", image: "/images/sector-agriculture.png" },
    { name: "Fun & Entertainment", icon: PartyPopper, grad: "card-grad-4", image: "/images/sector-entertainment.png" },
    { name: "Food & Beverage Stalls", icon: Utensils, grad: "card-grad-5", image: "/images/sector-food-beverage.png" }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = (pkgName) => {
    if (typeof pkgName === 'string') {
      setSelectedPackageForModal(pkgName);
    } else {
      setSelectedPackageForModal('');
    }
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackageForModal('');
  };

  return (
    <div className="min-h-screen">
      {/* Continuous All-Time Falling Confetti Across Entire Website */}
      {windowWidth > 0 && windowHeight > 0 && (
        <Confetti 
          width={windowWidth} 
          height={windowHeight} 
          recycle={true}
          run={true}
          numberOfPieces={120} 
          gravity={0.06} 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none', 
            zIndex: 40, 
            opacity: 0.8 
          }} 
        />
      )}

      {/* Floating Social Media Bar (Left) */}
      <div className="floating-socials">
        <a href="https://www.instagram.com/bobisgroup/" target="_blank" rel="noreferrer" className="social-icon instagram" title="Instagram"><FaInstagram size={22} /></a>
        <a href="https://www.facebook.com/BobisGroup" target="_blank" rel="noreferrer" className="social-icon facebook" title="Facebook"><FaFacebookF size={22} /></a>
        <a href="https://www.youtube.com/@bobisgroup" target="_blank" rel="noreferrer" className="social-icon youtube" title="YouTube"><FaYoutube size={22} /></a>
      </div>

      {/* Floating WhatsApp Widget */}
      <a 
        href="https://wa.me/917903670000" 
        target="_blank" 
        rel="noreferrer" 
        className="floating-widget" 
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp (+91 790367 0000)"
      >
        <FaWhatsapp size={35} />
      </a>

      {/* Glassmorphism Booking Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <motion.div 
              className="modal-content"
              initial={{ y: 50, scale: 0.9, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <button className="close-modal" onClick={closeModal}><X size={20} /></button>
              <h2 className="section-heading" style={{ fontSize: '1.85rem', marginBottom: '10px', color: 'var(--primary-red)' }}>Book Your Exhibition Space</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '22px', fontSize: '0.95rem' }}>Fill out your enterprise details and our executive team will contact you promptly.</p>
              
              <BookingForm 
                isModal={true} 
                selectedPackage={selectedPackageForModal} 
                categories={categories} 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <nav className="navbar">
        <a href="#" className="logo-link" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
          <img 
            src="/images/patna-expo-header-clean-transparent.png" 
            alt="Patna Expo 2026" 
            className="navbar-brand-logo" 
          />
        </a>
        
        {/* Desktop Nav */}
        <div className="nav-links desktop-only">
          <a href="#behind-expo">Vision</a>
          <a href="#trade-partner">Why Participate</a>
          <a href="#packages">Packages</a>
          <a href="#gallery">Gallery</a>
          <a href="#register">Register</a>
          <button className="btn-primary" style={{ padding: '8px 22px', fontSize: '0.95rem' }} onClick={() => openModal()}>Book Stall</button>
        </div>

        {/* Mobile Hamburger */}
        <div className="mobile-only">
          <button onClick={toggleMenu} style={{ background: 'none', border: 'none', color: 'var(--text-dark)', cursor: 'pointer' }}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <a href="#behind-expo" onClick={toggleMenu}>Vision &amp; Management</a>
            <a href="#trade-partner" onClick={toggleMenu}>Why Participate (8 Reasons)</a>
            <a href="#packages" onClick={toggleMenu}>Sponsorship &amp; Stalls</a>
            <a href="#gallery" onClick={toggleMenu}>Photo Gallery</a>
            <a href="#register" onClick={toggleMenu}>Registration &amp; Booking</a>
            <button className="btn-primary" style={{ marginTop: '10px' }} onClick={() => { toggleMenu(); openModal(); }}>Book Stall</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          {/* 1st: The Fire Flaming Headline in Middle */}
          <HeroFireHeading />

          {/* 2nd: 89% Transparent Organizer & Management Div in Middle */}
          <HeroOrganizerBadge />

          <div className="hero-main-columns">
            {/* Left Content */}
            <motion.div 
              className="hero-text-container"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <h1 className="sr-only">
                Patna Expo 2026 – Bihar’s Festive Shopping &amp; Business Exhibition at Gandhi Maidan
              </h1>

              <motion.img 
                src="/images/patna-expo-hero-emblem-transparent.png" 
                alt="Patna Expo 2026 exhibition at Gandhi Maidan, Patna"
                title="Patna Expo 2026"
                initial={{ scale: 0.8, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                whileHover={{ scale: 1.03, rotate: 1 }}
                style={{ 
                  width: '100%', 
                  maxWidth: '650px', 
                  filter: 'drop-shadow(0px 15px 35px rgba(0,0,0,0.18))',
                  cursor: 'pointer'
                }}
              />
            </motion.div>

            {/* Right Content (Countdown) */}
            <motion.div 
              className="countdown-container"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="countdown-panel">
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '20px', letterSpacing: '2px', textAlign: 'center' }}>
                  EXPO STARTS IN
                </h3>
                <div className="countdown-grid">
                  <div className="countdown-box">
                    <div className="countdown-value">{String(timeLeft.days).padStart(2, '0')}</div>
                    <div className="countdown-label">Days</div>
                  </div>
                  <div className="countdown-box">
                    <div className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="countdown-label">Hours</div>
                  </div>
                  <div className="countdown-box">
                    <div className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="countdown-label">Mins</div>
                  </div>
                  <div className="countdown-box">
                    <div className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="countdown-label">Secs</div>
                  </div>
                </div>
                <button className="btn-primary" style={{ marginTop: '30px', width: '100%' }} onClick={() => openModal()}>Book Your Stall Now</button>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* 1. Grand Comeback (Pages 1, 2 & 3 of PDF) */}
      <GrandComebackSection onOpenBooking={openModal} />

      {/* 2. Behind The Grand Dussehra Mela & Patna Expo (Page 5 of PDF - Bobis Entertainment Vision & Credentials) */}
      <BehindGrandExpoSection />

      {/* 3. Official Letter To Esteemed Trade Partners & 8 Powerful Reasons (Pages 6 & 7 of PDF) */}
      <TradePartnerInvitationSection onOpenBooking={openModal} />

      {/* 4. The Festival Mall Advantage, Bihar Richest Market & Historical Proof (Pages 12 to 16 of PDF) */}
      <FestivalMallOpportunitySection onOpenBooking={openModal} />

      {/* 5. Campus Masterplan & 8 Pavilions Layout (Pages 10 & 11 of PDF) */}
      <CampusMasterplanSection onOpenBooking={openModal} />

      {/* 7. Hello Patna - 500+ Exhibitors Across 20 Key Industry Sectors (Pages 8 & 9 of PDF) */}
      <section id="categories" className="section-padding" style={{ position: 'relative', zIndex: 1, background: 'transparent' }}>
        <div className="container">
          <div className="hello-patna-banner">
            <span className="hello-patna-badge">HELLO PATNA</span>
            <h2 className="hello-patna-title">
              500+ EXHIBITORS • EVERYTHING UNDER ONE ROOF
            </h2>
            <p className="hello-patna-sub">
              The Biggest Business Gathering for the First Time at Gandhi Maidan • Your World of Shopping, Business &amp; Entertainment!
            </p>
          </div>
          
          <div className="category-grid">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.03 }}
                >
                  <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.05} transitionSpeed={400} className={`category-card ${cat.image ? 'has-sector-img' : cat.grad}`}>
                    {cat.image ? (
                      <>
                        <img 
                          src={cat.image} 
                          alt={`${cat.name} – Festive shopping stalls and consumer brands at Patna Expo`} 
                          className="sector-full-bg-img" 
                        />
                        <div className="sector-overlay-gradient"></div>
                        <span className="sector-corner-badge" title={cat.name}>
                          <Icon size={16} />
                        </span>
                        <h4 className="category-title sector-full-title">{cat.name}</h4>
                      </>
                    ) : (
                      <>
                        {/* Curtain SVG */}
                        <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="card-curtain">
                          <path d="M0,0 L100,0 L100,10 Q83,35 66,10 Q50,35 33,10 Q16,35 0,10 Z" />
                        </svg>
                        <div className="card-icon-wrapper">
                          <Icon size={44} color="white" strokeWidth={1.5} />
                        </div>
                        <h4 className="category-title" style={{ color: 'white' }}>{cat.name}</h4>
                      </>
                    )}
                  </Tilt>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Key Highlights Section */}
      <section className="section-padding" style={{ position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.9)' }}>
        <div className="container">
          <motion.h2 className="section-heading center-text" style={{ color: 'var(--primary-red)' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Key Highlights
          </motion.h2>
          <motion.div 
            style={{ marginTop: '40px', textAlign: 'center', background: 'white', padding: '40px 20px', borderRadius: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <img 
              src="/images/key-highlights.png" 
              alt="Key Highlights of Patna Expo" 
              style={{ width: '100%', maxWidth: '1000px', height: 'auto', margin: '0 auto', display: 'block' }} 
            />
          </motion.div>
        </div>
      </section>

      {/* 9. Premium Sponsorship Suites & Standard Stalls (Pages 36 & 37 of PDF) */}
      <ExhibitionPackagesSection onBookPackage={openModal} />

      {/* 10. Photo Gallery - Live Glimpses of Patna Expo at Gandhi Maidan */}
      <PhotoGallerySection />

      {/* Registration & Stall Booking Section */}
      <section id="register" className="section-padding" style={{ position: 'relative', zIndex: 1, background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(252,250,242,0.95))' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.h2 
            className="section-heading center-text" style={{ color: 'var(--text-dark)' }}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            Book Your Stall / <span className="gradient-text-red-orange">Register Your Interest</span>
          </motion.h2>
          <p className="section-text center-text" style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 40px', fontSize: '1.15rem' }}>
            Ready to showcase your brand at Bihar's largest trade & shopping carnival? Fill out the official registration form below to secure your space at Gandhi Maidan, Patna.
          </p>

          <motion.div 
            className="onpage-form-card"
            initial={{ opacity: 0, scale: 0.98, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="onpage-card-header">
              <h3 className="onpage-card-title">Official Exhibitor Registration Application</h3>
              <p className="onpage-card-subtitle">
                Official booking desk for Patna Expo 2026. All submissions are directly recorded and processed by our event executive desk.
              </p>
            </div>

            <BookingForm isModal={false} categories={categories} />
          </motion.div>
        </div>
      </section>

      {/* Interactive Map & Contact Section */}
      <section id="contact" className="section-padding" style={{ position: 'relative', zIndex: 1, background: 'rgba(252,250,242,0.95)', borderTop: '2px solid rgba(226, 43, 34, 0.1)', textAlign: 'center' }}>
        <div className="container">
          <motion.h2 
            className="footer-heading"
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          >
            Contact Us Today & Book Your Stall
          </motion.h2>
          
          <motion.div 
            className="contact-bar"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div className="contact-numbers">
              <span className="contact-number-item">
                <Phone fill="var(--primary-red)" color="var(--primary-red)" size={20} className="single-phone-icon" />
                <a href="tel:7903670000" style={{ color: 'inherit', textDecoration: 'none' }}>790367 0000</a>
              </span>
              <span className="desktop-pipe">|</span>
              <span className="contact-number-item">
                <Phone fill="var(--primary-red)" color="var(--primary-red)" size={20} className="single-phone-icon" />
                <a href="tel:7903770000" style={{ color: 'inherit', textDecoration: 'none' }}>790377 0000</a>
              </span>
              <span className="desktop-pipe">|</span>
              <span className="contact-number-item">
                <Phone fill="var(--primary-red)" color="var(--primary-red)" size={20} className="single-phone-icon" />
                <a href="tel:9308357668" style={{ color: 'inherit', textDecoration: 'none' }}>930835 7668</a>
              </span>
              <span className="desktop-pipe">|</span>
              <span className="contact-number-item">
                <Phone fill="var(--primary-red)" color="var(--primary-red)" size={20} className="single-phone-icon" />
                <a href="tel:8340487341" style={{ color: 'inherit', textDecoration: 'none' }}>834048 7341</a>
              </span>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div 
            className="map-container"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            <iframe 
              title="Gandhi Maidan Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.688177309995!2d85.1396145150247!3d25.615283483701625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed585ceab1e155%3A0x6bba4cd7fde732cb!2sGandhi%20Maidan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="site-footer">
        <div className="container">
          {/* Dussehra Banner */}
          <div style={{ width: '100%', marginBottom: '50px' }}>
            <img 
              src="/images/dussehra-banner.png" 
              alt="Dussehra to Dhanteras" 
              style={{ width: '100%', height: 'auto', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
            />
          </div>
          {/* Expanded Footer Grid */}
          <div className="footer-grid">
            <div className="footer-col footer-col-brand">
              <a href="#" className="footer-brand-logo-link" title="Patna Expo 2026">
                <img 
                  src="/images/patna-expo-footer-emblem-trimmed.png" 
                  alt="Dussehra Mela & Patna Expo 2026" 
                  className="footer-brand-emblem" 
                />
              </a>
              <p className="footer-brand-text">
                Patna Expo 2026 is Bihar's largest shopping carnival—a grand celebration of business, shopping, entertainment, and opportunities under one roof. Conceptualised and executed by Bobis Entertainment.
              </p>
              <div className="footer-social-links">
                <a href="https://www.instagram.com/bobisgroup/" target="_blank" rel="noreferrer" className="footer-social-icon social-insta" title="Instagram"><FaInstagram size={18} /></a>
                <a href="https://www.facebook.com/BobisGroup" target="_blank" rel="noreferrer" className="footer-social-icon social-fb" title="Facebook"><FaFacebookF size={18} /></a>
                <a href="https://www.youtube.com/@bobisgroup" target="_blank" rel="noreferrer" className="footer-social-icon social-yt" title="YouTube"><FaYoutube size={18} /></a>
              </div>
            </div>
            <div className="footer-col footer-col-contact">
              <div className="footer-contact-wrapper">
                <div className="contact-details-list">
                  <h3>Venue & Contact</h3>
                  <a 
                    href="https://www.google.com/maps/place/Gandhi+Maidan/@25.6175504,85.1425353,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed58598eb52405:0x7f6d196ac3dce5ce!8m2!3d25.6175504!4d85.1451102!16zL20vMDdoa196?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="contact-item"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <MapPin size={22} color="var(--primary-red)" style={{ flexShrink: 0 }} />
                    <div>
                      <strong style={{ display: 'block', color: 'var(--text-dark)', fontSize: '1.05rem' }}>Gandhi Maidan</strong>
                      <span style={{ color: 'var(--text-muted)' }}>Patna, Bihar, India</span>
                    </div>
                  </a>
                  <div className="contact-item">
                    <Mail size={20} color="var(--primary-cyan)" style={{ flexShrink: 0 }} />
                    <a href="mailto:info@patnaexpo.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@patnaexpo.com</a>
                  </div>
                  <div className="contact-item">
                    <Phone size={20} color="var(--primary-purple)" style={{ flexShrink: 0 }} />
                    <span>790367 0000 / 790377 0000</span>
                  </div>
                </div>

                <motion.a 
                  href="https://www.google.com/maps/place/Gandhi+Maidan/@25.6175504,85.1425353,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed58598eb52405:0x7f6d196ac3dce5ce!8m2!3d25.6175504!4d85.1451102!16zL20vMDdoa196?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-venue-card"
                  title="Open Gandhi Maidan on Google Maps"
                  whileHover={{ scale: 1.04, y: -4 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <div className="venue-img-wrap">
                    <img 
                      src="/images/gandhi-maidan-patna.jpg" 
                      alt="Gandhi Maidan, Patna - Official Venue for Patna Expo 2026" 
                      className="venue-img"
                    />
                    <div className="venue-overlay-shine"></div>
                    <div className="venue-badge">
                      <MapPin size={14} className="venue-pin-pulse" />
                      <span>View on Google Maps</span>
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>
          </div>

          <p className="footer-copyright">
            © 2026 Patna Expo. Executed by Bobis Entertainment. All rights reserved.<br />
            Website created by <a href="https://www.brandmarksolutions.site/" target="_blank" rel="noreferrer" style={{ color: 'var(--primary-red)', textDecoration: 'none', fontWeight: 600 }}>Brandmark Solutions</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
