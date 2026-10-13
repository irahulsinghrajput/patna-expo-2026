import React from 'react';
import { motion } from 'framer-motion';
import './HeroFireHeading.css';

export default function HeroFireHeading() {
  return (
    <motion.div 
      className="hero-fire-container"
      initial={{ opacity: 0, scale: 0.92, y: -12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="hero-fire-banner">
        {/* Flaming Fire Heading */}
        <h2 className="flaming-fire-heading">
          <span className="flame-icon flame-icon-left" aria-hidden="true">🔥</span>
          <span className="flaming-fire-text">The Biggest Shopping Carnival of Bihar</span>
          <span className="flame-icon flame-icon-right" aria-hidden="true">🔥</span>
        </h2>
      </div>
    </motion.div>
  );
}
