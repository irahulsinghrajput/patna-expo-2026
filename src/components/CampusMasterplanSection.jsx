import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, MapPin, Grid, Layers, AirVent, 
  Utensils, Store, Music, Sparkles, CheckCircle2,
  Maximize2, Eye, EyeOff, Info, Car, Building
} from 'lucide-react';
import './CampusMasterplanSection.css';

// Realistic Tree SVG Component for Gandhi Maidan Perimeter Boundary
function RealisticTree({ size = 36, variant = 1, delay = 0 }) {
  const gradId = `treeGrad-${variant}-${Math.floor(Math.random() * 1000)}`;
  return (
    <div 
      className="realistic-tree-node"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`
      }}
    >
      <div className="tree-spotlight-glow" />
      <svg viewBox="0 0 100 100" className="tree-svg">
        <defs>
          <radialGradient id={gradId} cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor={variant === 1 ? "#86efac" : variant === 2 ? "#6ee7b7" : "#bbf7d0"} />
            <stop offset="35%" stopColor={variant === 1 ? "#22c55e" : variant === 2 ? "#10b981" : "#16a34a"} />
            <stop offset="70%" stopColor={variant === 1 ? "#15803d" : variant === 2 ? "#047857" : "#14532d"} />
            <stop offset="100%" stopColor="#052e16" />
          </radialGradient>
        </defs>
        <g className="tree-canopy-group">
          {/* Layered Organic Canopy Lobes */}
          <circle cx="50" cy="52" r="42" fill={`url(#${gradId})`} />
          <circle cx="34" cy="38" r="22" fill={variant === 1 ? "#22c55e" : "#10b981"} opacity="0.65" />
          <circle cx="66" cy="36" r="20" fill={variant === 1 ? "#4ade80" : "#34d399"} opacity="0.6" />
          <circle cx="50" cy="64" r="24" fill={variant === 1 ? "#15803d" : "#047857"} opacity="0.75" />
          <circle cx="48" cy="40" r="14" fill="#bbf7d0" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

// Realistic Palm Tree Component
function RealisticPalm({ size = 34, delay = 0 }) {
  const palmId = `palmGrad-${Math.floor(Math.random() * 1000)}`;
  return (
    <div 
      className="realistic-palm-node"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`
      }}
    >
      <div className="palm-spotlight-glow" />
      <svg viewBox="0 0 100 100" className="palm-svg">
        <defs>
          <linearGradient id={palmId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="45%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>
        </defs>
        <g transform="translate(50, 50)">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <path
              key={i}
              d="M0,0 Q-8,-26 0,-44 Q8,-26 0,0"
              fill={`url(#${palmId})`}
              transform={`rotate(${angle})`}
            />
          ))}
          <circle cx="0" cy="0" r="6" fill="#78350f" />
        </g>
      </svg>
    </div>
  );
}

export default function CampusMasterplanSection({ onOpenBooking }) {
  const [activeZoneId, setActiveZoneId] = useState('P-1');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [showHotspots, setShowHotspots] = useState(true);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);

  // All extracted zones from Gandhi Maidan Masterplan 3D Image
  const allZones = [
    {
      id: 'P-1',
      code: 'P-1',
      name: 'P-1: Consumer & Shopping',
      category: 'PAVILION',
      stalls: '89 Stalls',
      size: '1-90 (no 68)',
      type: 'Fully AC Hangar',
      x: 24.5,
      y: 74,
      icon: Store,
      color: '#0ea5e9',
      desc: 'Prime South-West air-conditioned pavilion for garments, festive lifestyle, puja essentials, FMCG, and electronics.'
    },
    {
      id: 'P-2',
      code: 'P-2',
      name: 'P-2: Handloom & Handicraft',
      category: 'PAVILION',
      stalls: '86 Stalls',
      size: '1-87 (no 68)',
      type: 'Fully AC Hangar',
      x: 25.0,
      y: 53.5,
      icon: Store,
      color: '#f97316',
      desc: 'Dedicated artisanal pavilion showcasing authentic Bhagalpuri silk, Madhubani paintings, Sikki grass, Sujini embroidery, and heritage crafts.'
    },
    {
      id: 'P-3',
      code: 'P-3',
      name: 'P-3: Home Décor & Electrical',
      category: 'PAVILION',
      stalls: 'Open Hall',
      size: 'Large Open Format',
      type: 'Open AC Hall',
      x: 64.0,
      y: 24.5,
      icon: Grid,
      color: '#8b5cf6',
      desc: 'Spacious exhibition hall for festive furniture, smart home automation, kitchen appliances, and decorative Diwali illumination.'
    },
    {
      id: 'P-4',
      code: 'P-4',
      name: 'P-4: 3-Day Event Area (West)',
      category: 'PAVILION',
      stalls: '73 Stalls',
      size: '1-74 (no 68)',
      type: 'Covered Hangar',
      x: 77.0,
      y: 24.5,
      icon: Store,
      color: '#84cc16',
      desc: 'Dynamic short-run showcase arena designed for rotating regional startups, seasonal festive counters, and artisanal pop-ups.'
    },
    {
      id: 'P-5',
      code: 'P-5',
      name: 'P-5: 3-Day Event Area (East)',
      category: 'PAVILION',
      stalls: '73 Stalls',
      size: '1-74 (no 68)',
      type: 'Covered Hangar',
      x: 74.5,
      y: 53.5,
      icon: Store,
      color: '#ec4899',
      desc: 'Mid-campus trade hangar featuring rotating festive exhibits, regional state pavilions, and fast-moving retail counters.'
    },
    {
      id: 'P-6',
      code: 'P-6',
      name: 'P-6: Govt. Institute / PSU',
      category: 'PAVILION',
      stalls: 'Open Hall Stalls Grid',
      size: 'Visible Stall Grid Format',
      type: 'Open Hangar Grid',
      x: 76.0,
      y: 74.0,
      icon: Grid,
      color: '#10b981',
      desc: 'Structured exhibition stalls grid hosting state government initiatives, public sector undertakings, nationalized banks, and institutional drives.'
    },
    {
      id: 'P-7',
      code: 'P-7',
      name: 'P-7: Automobile & EVs',
      category: 'PAVILION',
      stalls: '86 Stalls',
      size: '400 Sq.Ft Pavilions',
      type: 'Special Auto Zone',
      x: 35.0,
      y: 62.0,
      icon: Car,
      color: '#06b6d4',
      desc: 'Dedicated automotive showcase for latest 4-wheelers, electric vehicles (EVs), motorbikes, on-ground test drives, and festival spot booking.'
    },
    {
      id: 'P-8',
      code: 'P-8',
      name: 'P-8: Real Estate & Plots',
      category: 'PAVILION',
      stalls: '89 Stalls',
      size: '1-90 (no 68)',
      type: 'Property Expo Zone',
      x: 65.0,
      y: 62.0,
      icon: Building,
      color: '#d97706',
      desc: 'Premier Bihar RERA-approved township developers, high-rise luxury apartments, commercial plots, and on-spot home loan sanction desks.'
    },
    {
      id: 'RIDES',
      code: 'RIDES',
      name: 'Fair & Mela Rides Zone',
      category: 'ENTERTAINMENT',
      stalls: 'Amusement Arena',
      size: 'North-West Ground',
      type: 'Family Fun Zone',
      x: 27.0,
      y: 24.5,
      icon: Sparkles,
      color: '#f59e0b',
      desc: 'Thrilling family amusement park featuring the iconic Giant Ferris Wheel, carousel, roller swings, jumping castles, and carnival games.'
    },
    {
      id: 'STAGE',
      code: 'STAGE',
      name: 'Main Event Stage (16.4 × 9.8 M)',
      category: 'ENTERTAINMENT',
      stalls: 'Mega Concert Stage',
      size: '16.4 × 9.8 M',
      type: 'Acoustic Arena',
      x: 50.0,
      y: 39.0,
      icon: Music,
      color: '#f43f5e',
      desc: 'High-tech concert stage with digital LED walls, pro line-array acoustics, hosting evening celebrity performances, folk music, and award ceremonies.'
    },
    {
      id: 'BACKSTAGE',
      code: 'BACKSTAGE',
      name: 'Backstage & VIP Operations',
      category: 'ENTERTAINMENT',
      stalls: 'Production Bay',
      size: 'VIP Green Rooms',
      type: 'Logistics Zone',
      x: 50.0,
      y: 24.0,
      icon: Layers,
      color: '#64748b',
      desc: 'Artist green rooms, celebrity VIP hospitality lounge, production OB vans, sound consoles, and campus command center.'
    },
    {
      id: 'FC-WEST',
      code: 'FC-WEST',
      name: 'Food Court (West)',
      category: 'DINING',
      stalls: 'Outdoor Dining Arena',
      size: 'West Plaza',
      type: 'Food & Beverage',
      x: 28.5,
      y: 41.5,
      icon: Utensils,
      color: '#ef4444',
      desc: 'Vibrant outdoor dining court with umbrella tables, family seating, authentic Bihari cuisines (Litti Chokha), and popular chaat counters.'
    },
    {
      id: 'FC-EAST',
      code: 'FC-EAST',
      name: 'Food Court (East)',
      category: 'DINING',
      stalls: 'Outdoor Dining Arena',
      size: 'East Plaza',
      type: 'Food & Beverage',
      x: 71.5,
      y: 41.5,
      icon: Utensils,
      color: '#ef4444',
      desc: 'East gastronomic plaza serving popular street eats, Chinese delicacies, ice cream parlors, beverage kiosks, and festive sweets.'
    },
    {
      id: 'FOOD-STALLS',
      code: 'FOOD STALLS',
      name: 'Boundary Food Stalls (F1–F20)',
      category: 'DINING',
      stalls: '20 Dedicated Stalls',
      size: 'Outer Perimeter Flank',
      type: 'F&B Retail',
      x: 14.0,
      y: 40.0,
      icon: Utensils,
      color: '#f97316',
      desc: 'Dual peripheral food lanes flanking the campus borders for fast snacks, quick bites, mineral water, and beverage counters.'
    },
    {
      id: 'INSTALLATION',
      code: 'LOTUS',
      name: 'Central Lotus Installation (Ø 9.4M)',
      category: 'PROMENADE',
      stalls: 'Center Monument',
      size: 'Ø 9.4 M Diameter',
      type: 'Sculptural Art',
      x: 50.0,
      y: 64.0,
      icon: Sparkles,
      color: '#d946ef',
      desc: 'Magnificent illuminated glowing Lotus art installation standing as the spiritual center and selfie icon of the central promenade.'
    },
    {
      id: 'KIOSKS',
      code: '4 KIOSKS',
      name: '4 Promenade Kiosks (6.6 × 6.6 M)',
      category: 'PROMENADE',
      stalls: '4 Prime Kiosks',
      size: '6.6 × 6.6 M Each',
      type: 'High-Footfall Kiosks',
      x: 41.0,
      y: 55.5,
      icon: Store,
      color: '#0284c7',
      desc: 'High-impact standalone kiosks strategically positioned along the main walking promenade for premium brand activations.'
    },
    {
      id: 'ENTRY-GATE',
      code: 'MAIN GATE',
      name: 'Grand South Entry Gate (16.1 × 7.9 M)',
      category: 'PROMENADE',
      stalls: 'Main Public Gateway',
      size: '16.1 × 7.9 M',
      type: 'Architectural Arch',
      x: 50.0,
      y: 88.0,
      icon: Compass,
      color: '#eab308',
      desc: 'Illuminated golden multi-arch portal with VIP red carpet corridor, multi-lane turnstiles, and security scanning points welcoming millions.'
    }
  ];

  const activeZone = allZones.find(z => z.id === activeZoneId) || allZones[0];

  const filteredZones = selectedCategory === 'ALL' 
    ? allZones 
    : allZones.filter(z => z.category === selectedCategory);

  // Generate Tree border rows
  const topTrees = Array.from({ length: 30 }, (_, i) => ({
    variant: (i % 3) + 1,
    size: 32 + (i % 4) * 3,
    delay: (i * 0.15) % 3
  }));

  const bottomTrees = Array.from({ length: 26 }, (_, i) => ({
    variant: ((i + 1) % 3) + 1,
    size: 34 + (i % 3) * 4,
    delay: (i * 0.18) % 3
  }));

  const sideTreesLeft = Array.from({ length: 22 }, (_, i) => ({
    variant: (i % 3) + 1,
    size: 33 + (i % 3) * 3,
    delay: (i * 0.2) % 3
  }));

  const sideTreesRight = Array.from({ length: 22 }, (_, i) => ({
    variant: ((i + 2) % 3) + 1,
    size: 33 + (i % 3) * 3,
    delay: (i * 0.22) % 3
  }));

  return (
    <section id="masterplan" className="masterplan-section">
      <div className="container">

        <div className="masterplan-header text-center">
          <div className="plan-badge">3D CAMPUS ARCHITECTURE &amp; MASTERPLAN</div>
          <h2 className="plan-title">
            Gandhi Maidan <span className="gradient-text-red-orange">Mega 3D Masterplan</span>
          </h2>
          <p className="plan-sub">
            Site dimension ~136.6 m × 163.9 m (448 × 538 ft) at Gandhi Maidan, Patna. 
            Engineered with a grand central promenade, dual food courts, dedicated entertainment stage, and fully air-conditioned hangars.
          </p>
          <div className="ac-announcement-pill">
            <AirVent size={16} />
            <span>ALL HANGARS INSIDE THE PATNA EXPO ARE FULLY AIR-CONDITIONED (AC)</span>
          </div>
        </div>

        {/* Masterplan Interactive Container */}
        <div className="masterplan-layout-card">

          {/* Masterplan Filter & View Controls */}
          <div className="map-toolbar-bar">
            <div className="filter-pill-group">
              {[
                { label: 'All Zones (17)', val: 'ALL' },
                { label: 'Pavilions P1–P8', val: 'PAVILION' },
                { label: 'Food & Dining', val: 'DINING' },
                { label: 'Entertainment & Rides', val: 'ENTERTAINMENT' },
                { label: 'Promenade & Gate', val: 'PROMENADE' }
              ].map(f => (
                <button
                  key={f.val}
                  type="button"
                  className={`filter-btn-pill ${selectedCategory === f.val ? 'active-pill' : ''}`}
                  onClick={() => setSelectedCategory(f.val)}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="map-view-actions">
              <button
                type="button"
                className={`action-btn-pill ${showHotspots ? 'active' : ''}`}
                onClick={() => setShowHotspots(!showHotspots)}
                title="Toggle Zone Pins"
              >
                {showHotspots ? <Eye size={15} /> : <EyeOff size={15} />}
                <span>{showHotspots ? 'Hotspots ON' : 'Clean 3D'}</span>
              </button>
            </div>
          </div>

          {/* 3D Architectural Viewport with Gandhi Maidan Realistic Tree Boundaries */}
          <div className="masterplan-viewport-container">

            {/* TOP BOUNDARY TREES */}
            <div className="tree-boundary-strip boundary-top">
              <div className="boundary-hedge-base" />
              <div className="trees-cluster-flex">
                {topTrees.map((t, idx) => (
                  <RealisticTree key={`top-${idx}`} size={t.size} variant={t.variant} delay={t.delay} />
                ))}
              </div>
            </div>

            {/* LEFT BOUNDARY TREES */}
            <div className="tree-boundary-strip boundary-left">
              <div className="boundary-hedge-base-v" />
              <div className="trees-cluster-flex-v">
                {sideTreesLeft.map((t, idx) => (
                  <RealisticTree key={`left-${idx}`} size={t.size} variant={t.variant} delay={t.delay} />
                ))}
              </div>
            </div>

            {/* RIGHT BOUNDARY TREES */}
            <div className="tree-boundary-strip boundary-right">
              <div className="boundary-hedge-base-v" />
              <div className="trees-cluster-flex-v">
                {sideTreesRight.map((t, idx) => (
                  <RealisticTree key={`right-${idx}`} size={t.size} variant={t.variant} delay={t.delay} />
                ))}
              </div>
            </div>

            {/* BOTTOM BOUNDARY TREES (with South Gate Clearance) */}
            <div className="tree-boundary-strip boundary-bottom">
              <div className="boundary-hedge-base" />
              <div className="bottom-trees-split-wrap">
                <div className="bottom-trees-half">
                  {bottomTrees.slice(0, 13).map((t, idx) => (
                    <RealisticTree key={`bot-l-${idx}`} size={t.size} variant={t.variant} delay={t.delay} />
                  ))}
                  <RealisticPalm size={36} delay={0.4} />
                </div>
                <div className="bottom-entry-clearance">
                  <span className="red-carpet-accent" />
                </div>
                <div className="bottom-trees-half">
                  <RealisticPalm size={36} delay={0.8} />
                  {bottomTrees.slice(13).map((t, idx) => (
                    <RealisticTree key={`bot-r-${idx}`} size={t.size} variant={t.variant} delay={t.delay} />
                  ))}
                </div>
              </div>
            </div>

            {/* Four Corner Foliage Clusters */}
            <div className="corner-foliage corner-tl">
              <RealisticTree size={44} variant={1} delay={0.1} />
              <RealisticTree size={36} variant={2} delay={0.4} />
            </div>
            <div className="corner-foliage corner-tr">
              <RealisticTree size={44} variant={2} delay={0.2} />
              <RealisticTree size={36} variant={1} delay={0.5} />
            </div>
            <div className="corner-foliage corner-bl">
              <RealisticTree size={44} variant={1} delay={0.3} />
              <RealisticTree size={36} variant={3} delay={0.6} />
            </div>
            <div className="corner-foliage corner-br">
              <RealisticTree size={44} variant={3} delay={0.2} />
              <RealisticTree size={36} variant={2} delay={0.5} />
            </div>

            {/* Interactive 3D Architectural Image Frame */}
            <div className="masterplan-canvas-frame">
              <img 
                src="/images/patna-expo-masterplan-3d.jpg" 
                alt="Gandhi Maidan Patna event venue and masterplan for Patna Expo 2026" 
                className="masterplan-3d-img"
              />

              {/* Interactive Dynamic Zone Hotspot Markers */}
              {showHotspots && (
                <div className="hotspots-overlay-layer">
                  {filteredZones.map((zone) => {
                    const isSelected = activeZoneId === zone.id;
                    const IconComp = zone.icon;
                    return (
                      <div
                        key={zone.id}
                        className={`zone-hotspot-marker ${isSelected ? 'is-selected' : ''}`}
                        style={{
                          left: `${zone.x}%`,
                          top: `${zone.y}%`,
                          '--zone-color': zone.color
                        }}
                        onClick={() => setActiveZoneId(zone.id)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Select ${zone.name}`}
                      >
                        {/* Glowing Beacon Pulse */}
                        <span className="beacon-ping" />
                        <span className="beacon-dot">
                          <IconComp size={11} />
                        </span>

                        {/* Zone Name Badge Tag */}
                        <div className="hotspot-badge-pill">
                          <strong>{zone.code}</strong>
                          <span className="badge-name">{zone.name.replace(/P-\d:\s*/, '')}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

          </div>

          {/* Quick Zone Chips Strip */}
          <div className="quick-zone-chips-strip">
            <span className="chips-label">SELECT ZONE:</span>
            <div className="chips-scroll-row">
              {allZones.map(z => (
                <button
                  key={z.id}
                  type="button"
                  className={`zone-chip-btn ${activeZoneId === z.id ? 'active' : ''}`}
                  onClick={() => setActiveZoneId(z.id)}
                >
                  <span className="chip-dot" style={{ background: z.color }} />
                  <span>{z.code}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Zone Specs & Inclusion Detail Box */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeZone.id}
              className="selected-pavilion-detail-box"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="pav-detail-head">
                <div>
                  <span className="pav-tag" style={{ borderLeft: `4px solid ${activeZone.color}` }}>
                    {activeZone.category} • {activeZone.type}
                  </span>
                  <h4 className="pav-title">{activeZone.name}</h4>
                </div>
                <div className="pav-capacity-badge">
                  <strong>{activeZone.stalls}</strong>
                  <span>Specification: {activeZone.size}</span>
                </div>
              </div>

              <p className="pav-description">{activeZone.desc}</p>

              <div className="pav-facilities-row">
                <div className="f-item">
                  <CheckCircle2 size={16} className="text-green" />
                  <span>Fully Air-Conditioned (AC) Hangars</span>
                </div>
                <div className="f-item">
                  <CheckCircle2 size={16} className="text-green" />
                  <span>Custom Fascia Name Board &amp; Spotlights</span>
                </div>
                <div className="f-item">
                  <CheckCircle2 size={16} className="text-green" />
                  <span>Dedicated Power Load &amp; Heavy Carpeted Flooring</span>
                </div>
                <div className="f-item">
                  <CheckCircle2 size={16} className="text-green" />
                  <span>24/7 CCTV Campus Surveillance &amp; Fire Safety</span>
                </div>
              </div>

              <div className="pav-btn-group">
                <button 
                  type="button" 
                  className="btn-primary"
                  onClick={() => onOpenBooking && onOpenBooking(`${activeZone.name}`)}
                >
                  Book Stall in {activeZone.code}
                </button>
                <span className="pav-note-text">
                  *Stalls allotted on first-come-first-serve basis upon payment confirmation.
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Total Campus Schedule Summary Bar */}
          <div className="campus-summary-strip">
            <div className="sum-item">
              <strong>496</strong>
              <span>Total Commercial Stalls</span>
            </div>
            <div className="sum-item">
              <strong>20</strong>
              <span>Food Stalls (F1–F20)</span>
            </div>
            <div className="sum-item">
              <strong>4</strong>
              <span>Promenade Kiosks</span>
            </div>
            <div className="sum-item">
              <strong>16.4 × 9.8 M</strong>
              <span>Main Event Stage</span>
            </div>
            <div className="sum-item">
              <strong>4,464 Sq.M</strong>
              <span>Total Stall Footprint</span>
            </div>
          </div>

        </div>

      </div>

      {/* Full Resolution Zoom Modal */}
      {isZoomModalOpen && (
        <div className="zoom-modal-overlay" onClick={() => setIsZoomModalOpen(false)}>
          <div className="zoom-modal-dialog" onClick={e => e.stopPropagation()}>
            <div className="zoom-modal-header">
              <h3>Dussehra Mela &amp; Patna Expo 2026 - Masterplan Architectural Blueprint</h3>
              <button 
                type="button" 
                className="close-zoom-btn"
                onClick={() => setIsZoomModalOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="zoom-modal-body">
              <img 
                src="/images/patna-expo-masterplan-3d.jpg" 
                alt="Gandhi Maidan Patna event venue and masterplan for Patna Expo 2026" 
                className="full-masterplan-img"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
