import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { 
  Camera, Maximize2, X, ChevronLeft, ChevronRight, 
  Sparkles, Eye, Play, Pause, Grid, Layers, MapPin
} from 'lucide-react';
import './PhotoGallerySection.css';

// Initial gallery collection (Extensible when more photos arrive)
export const galleryPhotos = [
  {
    id: 1,
    title: "Grand Entrance Arch & Festive Illumination",
    category: "Grand Entrance",
    desc: "Grand illuminated entry gate welcoming visitors and shoppers into the Patna Expo festival grounds at Gandhi Maidan.",
    src: "/images/gallery/gallery-2-grand-entry-gate.jpg",
    tag: "Dussehra to Dhanteras",
    aspect: "featured" // takes prominent space in grid
  },
  {
    id: 2,
    title: "Mega Celebrity Concert & Packed Crowd",
    category: "Live Concerts",
    desc: "Electrifying live musical evening with thousands of festival-goers enjoying cultural performances under the open sky.",
    src: "/images/gallery/gallery-3-mega-celebrity-concert.jpg",
    tag: "Cultural Evenings",
    aspect: "featured"
  },
  {
    id: 3,
    title: "Royal Dry Fruits & Festive Gourmet Stalls",
    category: "Food & Stalls",
    desc: "Brisk shopping at the dry fruit and gourmet food counters showcasing authentic heritage delicacies.",
    src: "/images/gallery/gallery-1-dryfruits-stall.jpg",
    tag: "Food & Delicacies",
    aspect: "standard"
  },
  {
    id: 4,
    title: "Official Dignitaries & Leadership Ground Tour",
    category: "VIP & Dignitaries",
    desc: "Government officials, key dignitaries, and event organizers reviewing pavilions and visitor amenities on-ground.",
    src: "/images/gallery/gallery-4-dignitaries-officials.jpg",
    tag: "VIP Visit",
    aspect: "standard"
  },
  {
    id: 5,
    title: "Festive Handloom, Silk & Lifestyle Pavilions",
    category: "Handloom & Shopping",
    desc: "Shoppers exploring handcrafted Kashmiri shawls, traditional silks, and festive ethnic apparel inside covered hangars.",
    src: "/images/gallery/gallery-5-handloom-shopping.jpg",
    tag: "Handloom & Craft",
    aspect: "standard"
  },
  {
    id: 6,
    title: "Live Celebrity Stage Performance & Musical Fest",
    category: "Live Concerts",
    desc: "Renowned artist enthralling the massive festival audience from the grand central stage at Gandhi Maidan.",
    src: "/images/gallery/gallery-6-celebrity-stage-performance.jpg",
    tag: "Star Artist Live",
    aspect: "featured"
  },
  {
    id: 7,
    title: "Executive Ground Inspection & Dignitary Delegation",
    category: "VIP & Dignitaries",
    desc: "Leadership and administration delegates reviewing campus operations and security across the festive pavilions.",
    src: "/images/gallery/gallery-7-leadership-walkthrough.jpg",
    tag: "Organizers & VIPs",
    aspect: "featured"
  }
];

const categories = [
  "All Photos",
  "Grand Entrance",
  "Live Concerts",
  "Food & Stalls",
  "VIP & Dignitaries",
  "Handloom & Shopping"
];

export default function PhotoGallerySection() {
  const [activeCategory, setActiveCategory] = useState("All Photos");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'carousel'
  const [activeSlide, setActiveSlide] = useState(0);

  // Filtered Photos
  const filteredPhotos = activeCategory === "All Photos" 
    ? galleryPhotos 
    : galleryPhotos.filter(p => p.category === activeCategory);

  // Lightbox Navigation
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsPlaying(false);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setIsPlaying(false);
  };

  const nextPhoto = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length);
    }
  }, [lightboxIndex, filteredPhotos.length]);

  const prevPhoto = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  }, [lightboxIndex, filteredPhotos.length]);

  // Slideshow auto-advance in lightbox
  useEffect(() => {
    if (!isPlaying || lightboxIndex === null) return;
    const interval = setInterval(() => {
      nextPhoto();
    }, 3500);
    return () => clearInterval(interval);
  }, [isPlaying, lightboxIndex, nextPhoto]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying(p => !p);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextPhoto, prevPhoto]);

  return (
    <section id="gallery" className="photo-gallery-section">
      <div className="container">

        {/* Section Header */}
        <div className="gallery-header text-center">
          <div className="gallery-badge">
            <Camera size={14} />
            <span>LIVE ON-GROUND MOMENTS</span>
          </div>
          <h2 className="gallery-title">
            Photo Gallery • <span className="gradient-text-red-orange">Glimpses of Patna Expo</span>
          </h2>
          <p className="gallery-sub">
            Witness the grand festive vibe, 500+ buzzing commercial stalls, packed celebrity concert nights, 
            and vibrant shopping pavilions live from Gandhi Maidan, Patna.
          </p>

          {/* View Switcher Controls */}
          <div className="gallery-toolbar">
            {/* Category Pills */}
            <div className="category-pills-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`cat-pill ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat);
                    setActiveSlide(0);
                  }}
                >
                  {cat}
                  {cat === "All Photos" && <span className="cat-count">{galleryPhotos.length}</span>}
                </button>
              ))}
            </div>

            {/* Layout Mode Switcher */}
            <div className="view-mode-toggle">
              <button 
                type="button"
                className={`mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="Grid Gallery View"
              >
                <Grid size={16} />
                <span className="mode-btn-text">Grid</span>
              </button>
              <button 
                type="button"
                className={`mode-btn ${viewMode === 'carousel' ? 'active' : ''}`}
                onClick={() => setViewMode('carousel')}
                title="Cinematic Showcase View"
              >
                <Layers size={16} />
                <span className="mode-btn-text">Showcase</span>
              </button>
            </div>
          </div>
        </div>

        {/* ==============================================================
            MODE 1: INTERACTIVE BENTO MASONRY GRID VIEW
            ============================================================== */}
        {viewMode === 'grid' && (
          <motion.div 
            className="gallery-bento-grid"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo, idx) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className={`gallery-grid-item ${photo.aspect === 'featured' ? 'is-featured' : ''}`}
                >
                  <Tilt
                    tiltMaxAngleX={6}
                    tiltMaxAngleY={6}
                    perspective={1000}
                    scale={1.02}
                    transitionSpeed={600}
                    glareEnable={true}
                    glareMaxOpacity={0.25}
                    glareColor="#ffffff"
                    glarePosition="all"
                    className="gallery-tilt-card"
                  >
                    <div 
                      className="gallery-card-inner"
                      onClick={() => openLightbox(idx)}
                    >
                      <img 
                        src={photo.src} 
                        alt={photo.title}
                        className="gallery-card-img"
                        loading="lazy"
                      />

                      {/* Top Badges */}
                      <div className="card-top-badges">
                        <span className="card-cat-badge">
                          <Sparkles size={12} />
                          {photo.tag}
                        </span>
                        <button 
                          type="button" 
                          className="card-zoom-btn"
                          aria-label={`View ${photo.title} in full screen`}
                          title="Click to expand"
                        >
                          <Maximize2 size={15} />
                        </button>
                      </div>

                      {/* Bottom Caption Overlay */}
                      <div className="card-caption-overlay">
                        <div className="card-caption-content">
                          <span className="card-cat-name">{photo.category}</span>
                          <h3 className="card-photo-title">{photo.title}</h3>
                          <p className="card-photo-desc">{photo.desc}</p>
                          <div className="card-location-meta">
                            <MapPin size={13} />
                            <span>Gandhi Maidan, Patna</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* ==============================================================
            MODE 2: CINEMATIC SHOWCASE / SLIDER VIEW
            ============================================================== */}
        {viewMode === 'carousel' && (
          <div className="gallery-showcase-wrapper">
            <div className="showcase-main-frame">
              <AnimatePresence mode="wait">
                <motion.div
                  key={filteredPhotos[activeSlide]?.id || activeSlide}
                  className="showcase-slide"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  onClick={() => openLightbox(activeSlide)}
                >
                  <img 
                    src={filteredPhotos[activeSlide]?.src} 
                    alt={filteredPhotos[activeSlide]?.title} 
                    className="showcase-slide-img"
                  />
                  <div className="showcase-slide-overlay">
                    <div className="showcase-slide-caption">
                      <span className="showcase-pill">{filteredPhotos[activeSlide]?.category}</span>
                      <h3 className="showcase-title">{filteredPhotos[activeSlide]?.title}</h3>
                      <p className="showcase-desc">{filteredPhotos[activeSlide]?.desc}</p>
                      <button 
                        type="button"
                        className="showcase-expand-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          openLightbox(activeSlide);
                        }}
                      >
                        <Maximize2 size={16} />
                        <span>View High-Res Photo</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Arrows */}
              <button 
                type="button"
                className="showcase-nav-btn prev"
                onClick={() => setActiveSlide(prev => (prev - 1 + filteredPhotos.length) % filteredPhotos.length)}
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                type="button"
                className="showcase-nav-btn next"
                onClick={() => setActiveSlide(prev => (prev + 1) % filteredPhotos.length)}
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="showcase-thumb-strip">
              {filteredPhotos.map((photo, idx) => (
                <button
                  key={photo.id}
                  type="button"
                  className={`showcase-thumb-btn ${activeSlide === idx ? 'active' : ''}`}
                  onClick={() => setActiveSlide(idx)}
                >
                  <img src={photo.src} alt={photo.title} />
                  <span className="thumb-title-cut">{photo.category}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Footer Note */}
        <div className="gallery-footer-note">
          <p>
            📸 <strong>Live Patna Expo Moments</strong> — All photographs captured on-site during event celebrations at Gandhi Maidan, Patna.
          </p>
        </div>

      </div>

      {/* ==============================================================
          CINEMATIC LIGHTBOX MODAL WITH FULLSCREEN & SLIDESHOW
          ============================================================== */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
          <motion.div 
            className="gallery-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            <div 
              className="gallery-lightbox-modal"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox Controls Top Bar */}
              <div className="lightbox-top-bar">
                <div className="lightbox-photo-counter">
                  <Camera size={16} />
                  <span>{lightboxIndex + 1} / {filteredPhotos.length}</span>
                  <span className="lightbox-counter-cat">• {filteredPhotos[lightboxIndex].category}</span>
                </div>

                <div className="lightbox-actions-group">
                  <button 
                    type="button" 
                    className={`lightbox-action-btn ${isPlaying ? 'is-playing' : ''}`}
                    onClick={() => setIsPlaying(p => !p)}
                    title={isPlaying ? "Pause Slideshow (Space)" : "Play Slideshow (Space)"}
                  >
                    {isPlaying ? <Pause size={17} /> : <Play size={17} />}
                    <span className="action-btn-label">{isPlaying ? 'Pause' : 'Autoplay'}</span>
                  </button>

                  <button 
                    type="button" 
                    className="lightbox-close-btn"
                    onClick={closeLightbox}
                    title="Close (Esc)"
                    aria-label="Close Lightbox"
                  >
                    <X size={22} />
                  </button>
                </div>
              </div>

              {/* Main Image Stage */}
              <div className="lightbox-stage">
                <button 
                  type="button"
                  className="lightbox-arrow-btn prev"
                  onClick={prevPhoto}
                  aria-label="Previous photo"
                  title="Previous (Left Arrow)"
                >
                  <ChevronLeft size={30} />
                </button>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={filteredPhotos[lightboxIndex].id}
                    className="lightbox-image-wrap"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <img 
                      src={filteredPhotos[lightboxIndex].src} 
                      alt={filteredPhotos[lightboxIndex].title} 
                      className="lightbox-main-img"
                    />
                  </motion.div>
                </AnimatePresence>

                <button 
                  type="button"
                  className="lightbox-arrow-btn next"
                  onClick={nextPhoto}
                  aria-label="Next photo"
                  title="Next (Right Arrow)"
                >
                  <ChevronRight size={30} />
                </button>
              </div>

              {/* Lightbox Caption Bar */}
              <div className="lightbox-caption-bar">
                <div className="lightbox-caption-text">
                  <span className="lightbox-tag-pill">{filteredPhotos[lightboxIndex].tag}</span>
                  <h3 className="lightbox-title-text">{filteredPhotos[lightboxIndex].title}</h3>
                  <p className="lightbox-desc-text">{filteredPhotos[lightboxIndex].desc}</p>
                </div>
                <div className="lightbox-venue-pill">
                  <MapPin size={14} />
                  <span>Gandhi Maidan, Patna</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
