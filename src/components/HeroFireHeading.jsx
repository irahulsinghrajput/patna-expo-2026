import React from 'react';
import { motion } from 'framer-motion';
import './HeroFireHeading.css';

export default function HeroFireHeading() {
  return (
    <motion.h2 
      className="hero-3d-title"
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <span className="flame-3d flame-left" aria-hidden="true">🔥</span>
      <span className="text-3d-content">The Biggest Shopping Carnival of Bihar</span>
      <span className="flame-3d flame-right" aria-hidden="true">🔥</span>
    </motion.h2>
  );
}
