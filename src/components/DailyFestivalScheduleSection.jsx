import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Star, Tv, Share2, Megaphone, Trophy, 
  Sparkles, CheckCircle2, Music, Video, Palette, Heart 
} from 'lucide-react';
import './DailyFestivalScheduleSection.css';

export default function DailyFestivalScheduleSection() {
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);

  const scheduleDays = [
    { date: '25 OCT', day: 'SUN', title: 'Grand Opening', desc: 'Official VIP inauguration, ceremonial lighting, and star-studded opening-night cultural show.' },
    { date: '26 OCT', day: 'MON', title: 'Painting Competition', desc: 'Schools and young artists competition on campus, followed by evening folk artists.' },
    { date: '27 OCT', day: 'TUE', title: 'Photography & Folk Night', desc: 'Photography competition opens + Grand Folk night celebrating Bhojpuri & Maithili music.' },
    { date: '28 OCT', day: 'WED', title: 'Women Entrepreneurs’ Day', desc: 'Empowerment showcase & women startup awards, alongside state dance competition heats.' },
    { date: '29 OCT', day: 'THU', title: 'Reel-Making Competition', desc: 'Creator & influencer reel-making contest across booths, with youth music on main stage.' },
    { date: '30 OCT', day: 'FRI', title: 'Business Day & Trade Meets', desc: 'Exclusive B2B investor summits, supplier matchmaking, and official exhibitor awards.' },
    { date: '31 OCT', day: 'SAT', title: 'Dog Show & Talent Contests', desc: 'Patna Grand Dog Show in the open arena, plus auditions for daily youth talent competitions.' },
    { date: '1 NOV', day: 'SUN', title: 'Family Mega Sunday', desc: 'Massive festive family footfall, kids carnival, and state dance competition finals.' },
    { date: '2 NOV', day: 'MON', title: 'Kids’ Day & AI Zone', desc: 'Interactive robotics, futuristic AI Zone tech challenges, and play-zone activities.' },
    { date: '3 NOV', day: 'TUE', title: 'Health & Wellness Day', desc: 'Free public diagnostic camps, doctor consultations, wellness talks, and artists’ evening.' },
    { date: '4 NOV', day: 'WED', title: 'Farmers & Food Day', desc: 'Makhana & agro-entrepreneur conventions, plus special "Taste of Bihar" culinary festival.' },
    { date: '5 NOV', day: 'THU', title: 'Grand Cultural & Talent Finale', desc: 'Grand stage finale, celebrity jury, and statewide competition prize ceremonies.' },
    { date: '6 NOV', day: 'FRI', title: 'Auspicious Dhanteras', desc: 'Dhanteras Delivery Moments & Shubh Bookings on stage, late-night shopping, and closing gala.' }
  ];

  const campaigns = [
    {
      icon: Megaphone,
      title: 'Public Hoardings',
      desc: 'High-impact outdoor hoardings positioned across Patna’s prime arterial roads, roundabouts, and commercial retail corridors.'
    },
    {
      icon: Tv,
      title: 'Local News Channels',
      desc: 'Extensive prime-time TV coverage, live broadcast feeds, daily press releases, and on-ground Dhanteras delivery ceremonies.'
    },
    {
      icon: Share2,
      title: 'Viral Social Media',
      desc: 'Daily Instagram reels, creator collaborations, participant taggings, and live broadcasts reaching over 50 Lakh+ impressions.'
    }
  ];

  return (
    <section id="schedule" className="festival-schedule-section">
      <div className="container">

        {/* ==============================================================
            A. 13 DAYS DAY-BY-DAY FESTIVAL CALENDAR (PAGE 33 & 34)
            ============================================================== */}
        <div className="schedule-header text-center">
          <div className="sched-badge">EVERY DAY A NEW REASON TO COME BACK</div>
          <h2 className="sched-title">
            Thirteen Days of Festival <br />
            <span className="gradient-text-red-orange">For the Whole Family</span>
          </h2>
          <p className="sched-sub">
            Malls learned long ago that people come for the experience and stay to buy. 
            Patna Expo is designed with daily headline attractions so every visit is longer and visitors return repeatedly.
          </p>
        </div>

        {/* Days Horizontal Timeline Selector */}
        <div className="timeline-strip-container">
          <div className="timeline-strip">
            {scheduleDays.map((d, idx) => (
              <button 
                key={idx}
                type="button"
                className={`timeline-day-btn ${selectedDayIdx === idx ? 'active-day' : ''}`}
                onClick={() => setSelectedDayIdx(idx)}
              >
                <span className="t-date">{d.date}</span>
                <span className="t-day">{d.day}</span>
                <span className="t-title">{d.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Day Spotlight Card */}
        <motion.div 
          key={selectedDayIdx}
          className="day-spotlight-card"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="spotlight-date-badge">
            <Calendar size={18} />
            <strong>{scheduleDays[selectedDayIdx].date} ({scheduleDays[selectedDayIdx].day})</strong>
          </div>
          <h3 className="spotlight-title">{scheduleDays[selectedDayIdx].title}</h3>
          <p className="spotlight-desc">{scheduleDays[selectedDayIdx].desc}</p>
          <div className="spotlight-features">
            <span>• Cultural Stage &amp; Live Performances every evening</span>
            <span>• Food courts &amp; Amusement rides open all day</span>
            <span>• AI Zone &amp; Interactive stalls active 10:00 AM – 10:00 PM</span>
          </div>
        </motion.div>

        {/* ==============================================================
            B. THE WHOLE CITY WILL KNOW - MARKETING CAMPAIGN (PAGE 35)
            ============================================================== */}
        <div className="marketing-campaign-wrapper">
          <div className="camp-header text-center">
            <span className="camp-pill">PROMOTION ENGINE</span>
            <h3 className="camp-title">The Whole City Will Know</h3>
            <p className="camp-desc">
              Patna Expo 2026 is promoted across the three channels Patna watches most, turning every visitor into a promoter.
            </p>
          </div>

          <div className="campaign-channels-grid">
            {campaigns.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div key={idx} className="campaign-channel-card">
                  <div className="c-icon-wrap">
                    <Icon size={26} />
                  </div>
                  <h4 className="c-title">{c.title}</h4>
                  <p className="c-desc">{c.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Campaign Phase Strip */}
          <div className="campaign-phases-strip">
            <div className="phase-cell">
              <span className="phase-period">ANNOUNCE (Now – 24 Oct)</span>
              <strong>Hoardings, News &amp; Reveals</strong>
            </div>
            <div className="phase-cell">
              <span className="phase-period">OPEN (25 Oct)</span>
              <strong>Grand Opening Across Media</strong>
            </div>
            <div className="phase-cell">
              <span className="phase-period">LIVE (26 Oct – 3 Nov)</span>
              <strong>Daily Shows &amp; Viral Reels</strong>
            </div>
            <div className="phase-cell highlight-phase">
              <span className="phase-period">COUNTDOWN (4 – 6 Nov)</span>
              <strong>Dhanteras Mega Shopping Push</strong>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
