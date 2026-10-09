import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Calendar, MapPin, MessageCircle, Mail,
  ShoppingCart, Building, GraduationCap, Gem, Car, Tractor, Laptop, Activity, HeartPulse, Landmark, Hammer, Armchair, Tv
} from 'lucide-react';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './index.css';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState(''); // '', 'submitting', 'success', 'error'
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 }); // Start off-screen

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
    { name: "Real Estate & Plots", icon: Building, grad: "card-grad-1" },
    { name: "Banking & Insurance Industry", icon: Landmark, grad: "card-grad-2" },
    { name: "IT", icon: Laptop, grad: "card-grad-3" },
    { name: "Automobiles", icon: Car, grad: "card-grad-4" },
    { name: "Educational Institutes", icon: GraduationCap, grad: "card-grad-5" },
    { name: "HealthCare", icon: HeartPulse, grad: "card-grad-1" },
    { name: "MedTech", icon: Activity, grad: "card-grad-2" },
    { name: "Jewellers", icon: Gem, grad: "card-grad-3" },
    { name: "Agriculture", icon: Tractor, grad: "card-grad-4" },
    { name: "Building Material", icon: Hammer, grad: "card-grad-5" },
    { name: "Consumers", icon: ShoppingCart, grad: "card-grad-1" },
    { name: "Home Decor and Interior", icon: Armchair, grad: "card-grad-2" },
    { name: "Electronics", icon: Tv, grad: "card-grad-3" }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setFormStatus(''); // Reset status on close
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.target);
    
    // Prepare data for Google Sheets
    const data = new URLSearchParams();
    data.append("Name", formData.get("name"));
    data.append("Phone", formData.get("phone"));
    data.append("Category", formData.get("category"));
    data.append("Timestamp", new Date().toLocaleString());

    try {
      // Google Apps Script Web App URL for expopatna@gmail.com Google Sheet
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyKu5wrLuV3Awz8C6JcZx__QLEZ_9DvNbjI8AiM6umicb7g_6v7jAhHMiUEeuLOhrs/exec";
      
      // We use no-cors to bypass cross-origin restrictions on Google Scripts
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: data,
        mode: "no-cors"
      });

      console.log("🔥 Request sent to Google Sheets 🔥");
      setFormStatus('success');
      e.target.reset();
    } catch (err) {
      console.error(err);
      setFormStatus('error');
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Floating Social Media Bar (Left) */}
      <div className="floating-socials">
        <a href="https://www.instagram.com/bobisgroup/" target="_blank" rel="noreferrer" className="social-icon instagram" title="Instagram"><FaInstagram size={22} /></a>
        <a href="https://www.facebook.com/BobisGroup" target="_blank" rel="noreferrer" className="social-icon facebook" title="Facebook"><FaFacebookF size={22} /></a>
        <a href="https://www.youtube.com/@bobisgroup" target="_blank" rel="noreferrer" className="social-icon youtube" title="YouTube"><FaYoutube size={22} /></a>
      </div>

      {/* Custom Interactive Cursor Trailer */}
      <motion.div 
        className="cursor-dot"
        animate={{ x: mousePos.x - 5, y: mousePos.y - 5 }}
        transition={{ type: "tween", duration: 0 }}
      />
      <motion.div 
        className="cursor-outline"
        animate={{ x: mousePos.x - 20, y: mousePos.y - 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.5 }}
      />

      {/* Floating WhatsApp Widget */}
      <a href="https://wa.me/917903670000" target="_blank" rel="noreferrer" className="floating-widget">
        <MessageCircle size={28} />
        <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>790367 0000</span>
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
              <h2 className="section-heading" style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary-red)' }}>Book Your Stall</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Fill out your details and our team will contact you instantly.</p>
              <form onSubmit={handleBookingSubmit}>
                <div className="form-group">
                  <label>Full Name / Company</label>
                  <input type="text" name="name" className="form-control" placeholder="Bobis Entertainment" required />
                </div>
                <div className="form-group">
                  <label>Industry Category</label>
                  <select name="category" className="form-control" required defaultValue="">
                    <option value="" disabled>Select an industry...</option>
                    {categories.map((c, i) => <option key={i} value={c.name}>{c.name}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" className="form-control" placeholder="+91 00000 00000" required />
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary" 
                  style={{ width: '100%', marginTop: '10px', opacity: formStatus === 'submitting' ? 0.7 : 1 }}
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Sending Request...' : 'Submit Request'}
                </button>

                {formStatus === 'success' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#25D366', marginTop: '15px', fontWeight: 'bold', fontSize: '0.9rem', textAlign: 'center' }}>
                    ✅ Request sent successfully! We will contact you soon.
                  </motion.div>
                )}
                {formStatus === 'error' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: 'red', marginTop: '15px', fontWeight: 'bold', fontSize: '0.9rem', textAlign: 'center' }}>
                    ❌ Something went wrong. Please ensure you added the Access Key in App.jsx.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <nav className="navbar">
        <h1 className="logo" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ color: 'var(--primary-red)' }}>PATNA</span>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="gradient-text-red-orange" style={{ letterSpacing: '-1px' }}>EX</span>
            <span className="gradient-text-blue-purple" style={{ letterSpacing: '-1px' }}>PO</span>
          </span>
        </h1>
        
        {/* Desktop Nav */}
        <div className="nav-links desktop-only">
          <a href="#about">About</a>
          <a href="#categories">Sectors</a>
          <a href="#contact">Contact</a>
          <button className="btn-primary" style={{ padding: '8px 20px', fontSize: '1rem' }} onClick={openModal}>Book Stall</button>
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
            <a href="#about" onClick={toggleMenu}>About</a>
            <a href="#categories" onClick={toggleMenu}>Sectors</a>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
            <button className="btn-primary" style={{ marginTop: '10px' }} onClick={() => { toggleMenu(); openModal(); }}>Book Stall</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          {/* Left Content */}
          <motion.div 
            className="hero-text-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <motion.img 
              src="/images/expo-logo-1.png" 
              alt="Patna Expo 2026 Logo"
              initial={{ scale: 0.8, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
              whileHover={{ scale: 1.03, rotate: 1 }}
              style={{ 
                width: '100%', 
                maxWidth: '700px', 
                filter: 'drop-shadow(0px 15px 35px rgba(0,0,0,0.2))',
                cursor: 'pointer'
              }}
            />
            
            <motion.h2 
              className="hero-subtitle"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginTop: '10px' }}
            >
              The Biggest Shopping Carnival of Bihar 🔥
            </motion.h2>
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
              <button className="btn-primary" style={{ marginTop: '30px', width: '100%' }} onClick={openModal}>Book Your Stall Now</button>
            </div>
          </motion.div>

        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section-padding" style={{ background: 'white', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <motion.div 
          className="container center-text"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading" style={{ color: 'var(--text-dark)' }}>
            A Grand Celebration of <span className="gradient-text-red-orange">Business & Entertainment</span>
          </h2>
          <p className="section-text">
            Get ready for Patna Expo 2026 — a grand celebration of business, shopping, entertainment and opportunities, happening from 25 October to 6 November 2026 at Gandhi Maidan, Patna.
          </p>
          <p className="section-text">
            From Automobiles, Real Estate, Education, IT, Healthcare, Agriculture, Handloom & Handicrafts, Jewellery and more, Patna Expo brings diverse industries and consumers together under one roof.
          </p>
        </motion.div>
      </section>

      {/* Body / Categories Section */}
      <section id="categories" className="section-padding" style={{ background: 'var(--bg-cream)' }}>
        <div className="container">
          <motion.h2 
            className="section-heading center-text" style={{ color: 'var(--primary-purple)' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Diverse Industries Under One Roof
          </motion.h2>
          
          <div className="category-grid">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                >
                  <Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05} transitionSpeed={400} className={`category-card ${cat.grad}`}>
                    {/* Curtain SVG */}
                    <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="card-curtain">
                      <path d="M0,0 L100,0 L100,10 Q83,35 66,10 Q50,35 33,10 Q16,35 0,10 Z" />
                    </svg>
                    <div className="card-icon-wrapper">
                      <Icon size={48} color="white" strokeWidth={1.5} />
                    </div>
                    <h4 className="category-title" style={{ color: 'white' }}>{cat.name}</h4>
                  </Tilt>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bobis Entertainment Section */}
      <section className="section-padding" style={{ background: 'white', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <motion.div 
            className="glass-panel" style={{ textAlign: 'center' }}
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <h2 className="section-heading" style={{ color: 'var(--text-dark)' }}>
              Conceptualised, Planned & Executed by <span style={{ color: 'var(--primary-red)' }}>Bobis Entertainment</span>
            </h2>
            <p className="section-text">
              Patna Expo 2026 is a vision brought to life by Team Bobis — from the initial ideation and planning to complete event management and execution.
            </p>
            <p className="section-text">
              With extensive experience in large-scale events, event production, brand activations, and on-ground execution, Bobis Entertainment is bringing together the scale, creativity, and expertise needed to create a landmark expo experience in Patna.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration / Google Form Section */}
      <section id="register" className="section-padding" style={{ background: 'var(--bg-cream)' }}>
        <div className="container">
          <motion.h2 
            className="section-heading center-text" style={{ color: 'var(--text-dark)' }}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            Register Your <span style={{ color: 'var(--primary-red)' }}>Interest</span>
          </motion.h2>
          <p className="section-text center-text" style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
            Ready to showcase your brand at the biggest shopping carnival in Bihar? Fill out the official registration form below to secure your spot at Patna Expo 2026.
          </p>

          <motion.div 
            className="glass-panel"
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            style={{ padding: '0', overflow: 'hidden', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.1)', background: 'white' }}
          >
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdPFmKqWUMI_ieJLl9hhz-xAw9abIPpia6w3ZL7BZV-E4z-tw/viewform?embedded=true" 
              width="100%" 
              height="800" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              title="Google Registration Form"
              style={{ display: 'block', background: 'transparent' }}
            >
              Loading…
            </iframe>
          </motion.div>
        </div>
      </section>

      {/* Interactive Map & Contact Section */}
      <section id="contact" className="section-padding" style={{ background: 'white', borderTop: '2px solid rgba(226, 43, 34, 0.1)', textAlign: 'center' }}>
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
            <Phone fill="var(--primary-red)" color="var(--primary-red)" size={24} className="contact-icon" />
            <div className="contact-numbers">
              <span>790367 0000</span> <span className="desktop-pipe">|</span>
              <span>790377 0000</span> <span className="desktop-pipe">|</span>
              <span>9308357668</span> <span className="desktop-pipe">|</span>
              <span>8340487341</span>
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

          {/* Expanded Footer Grid */}
          <div className="footer-grid">
            <div className="footer-col">
              <h1 className="logo" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginBottom: '15px' }}>
                <span style={{ color: 'var(--primary-red)' }}>PATNA</span>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="gradient-text-red-orange" style={{ letterSpacing: '-1px' }}>EX</span>
                  <span className="gradient-text-blue-purple" style={{ letterSpacing: '-1px' }}>PO</span>
                </span>
              </h1>
              <p>
                Patna Expo 2026 is Bihar's largest shopping carnival—a grand celebration of business, shopping, entertainment, and opportunities under one roof. Conceptualised and executed by Bobis Entertainment.
              </p>
              <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                <a href="https://www.instagram.com/bobisgroup/" target="_blank" rel="noreferrer" style={{ color: 'var(--primary-purple)' }}><FaInstagram size={24} /></a>
                <a href="https://www.facebook.com/BobisGroup" target="_blank" rel="noreferrer" style={{ color: 'var(--primary-blue)' }}><FaFacebookF size={24} /></a>
                <a href="https://www.youtube.com/@bobisgroup" target="_blank" rel="noreferrer" style={{ color: 'var(--primary-red)' }}><FaYoutube size={24} /></a>
              </div>
            </div>
            <div className="footer-col footer-col-contact">
              <h3>Contact Information</h3>
              <div className="contact-item">
                <MapPin size={20} color="var(--primary-red)" />
                <span>Gandhi Maidan, Patna, Bihar</span>
              </div>
              <div className="contact-item">
                <Mail size={20} color="var(--primary-cyan)" />
                <a href="mailto:expopatna@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>expopatna@gmail.com</a>
              </div>
              <div className="contact-item">
                <Phone size={20} color="var(--primary-purple)" />
                <span>790367 0000 / 790377 0000</span>
              </div>
            </div>
          </div>

          <p style={{ marginTop: '50px', color: '#888', fontSize: '0.9rem', lineHeight: '1.8' }}>
            © 2026 Patna Expo. Executed by Bobis Entertainment. All rights reserved.<br />
            Website created by <a href="https://www.brandmarksolutions.site/" target="_blank" rel="noreferrer" style={{ color: 'var(--primary-red)', textDecoration: 'none', fontWeight: 600 }}>Brandmark Solutions</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
