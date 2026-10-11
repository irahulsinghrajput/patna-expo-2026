import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Sparkles, Building, Mail, Phone, Tag, FileText, User } from 'lucide-react';
import './BookingForm.css';

const DEFAULT_CATEGORIES = [
  "Real Estate & Plots",
  "Banking & Insurance Industry",
  "IT & Tech Services",
  "Automobiles & Electric Vehicles",
  "Educational Institutes",
  "HealthCare & Hospitals",
  "MedTech & Diagnostics",
  "Jewellers & Gold/Diamond",
  "Agriculture & Agro Equipment",
  "Building Material & Construction",
  "Consumers & Retail",
  "Home Decor and Interior",
  "Electronics & Home Appliances",
  "Food & Beverages",
  "Handicrafts & Handlooms",
  "Fashion & Apparel",
  "Other Commercial Exhibitor"
];

const PACKAGES_OPTIONS = [
  "General Exhibition Stall",
  "Platinum Package (₹25 Lakh)",
  "Diamond Package (₹15 Lakh)",
  "Gold Package (₹10 Lakh)",
  "Auto Expo / Commercial Vehicles (₹60,000)",
  "Real Estate & Corporate Pavilion (₹60,000)",
  "AC German Hangar (₹50,000)",
  "Semi-Hangar AC Stalls (₹35,000)",
  "Open Space / Food Zone (₹30,000)",
  "Non-AC Hangar Stall (₹25,000)"
];

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyKu5wrLuV3Awz8C6JcZx__QLEZ_9DvNbjI8AiM6umicb7g_6v7jAhHMiUEeuLOhrs/exec";

export default function BookingForm({ 
  isModal = false, 
  selectedPackage = '', 
  categories = DEFAULT_CATEGORIES,
  onSuccess
}) {
  const [formStatus, setFormStatus] = useState(''); // '', 'submitting', 'success', 'error'
  const [chosenPackage, setChosenPackage] = useState(selectedPackage || 'General Exhibition Stall');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.target;
    const formData = new FormData(form);

    const payload = new URLSearchParams();
    payload.append("Name", formData.get("name") || "");
    payload.append("Email", formData.get("email") || "");
    payload.append("Phone", formData.get("phone") || "");
    payload.append("Category", formData.get("category") || "");
    payload.append("Enterprise", formData.get("enterprise") || "");
    payload.append("Description", formData.get("description") || "");
    payload.append("Package", formData.get("package") || chosenPackage || "General Exhibition Stall");
    payload.append("Timestamp", new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: payload,
        mode: "no-cors"
      });

      console.log("🔥 Booking registration transmitted to Google Sheets 🔥");
      setFormStatus('success');
      form.reset();
      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      console.error("Submission error:", err);
      setFormStatus('error');
    }
  };

  return (
    <div className="booking-form-wrap">
      {/* Selected Package Banner if pre-chosen */}
      {selectedPackage && (
        <div className="selected-tier-banner">
          <div>
            <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Reserved Stall Tier:</span>{' '}
            <strong>{selectedPackage}</strong>
          </div>
          <Sparkles size={18} color="#e11d48" />
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate={false}>
        <div className="booking-form-grid">

          {/* 1. Name * */}
          <div className="form-field-group">
            <label className="field-label" htmlFor={isModal ? "modal-name" : "page-name"}>
              <User size={15} color="#e11d48" />
              <span>Name</span>
              <span className="field-req-star">*</span>
            </label>
            <span className="field-req-sub">This is a required question</span>
            <input 
              id={isModal ? "modal-name" : "page-name"}
              type="text" 
              name="name" 
              className="field-input" 
              placeholder="e.g. Rahul Sharma" 
              required 
            />
          </div>

          {/* 2. Registered Email * */}
          <div className="form-field-group">
            <label className="field-label" htmlFor={isModal ? "modal-email" : "page-email"}>
              <Mail size={15} color="#e11d48" />
              <span>Registered Email</span>
              <span className="field-req-star">*</span>
            </label>
            <span className="field-req-sub">This is a required question</span>
            <input 
              id={isModal ? "modal-email" : "page-email"}
              type="email" 
              name="email" 
              className="field-input" 
              placeholder="e.g. contact@enterprise.com" 
              required 
            />
          </div>

          {/* 3. Phone Number * */}
          <div className="form-field-group">
            <label className="field-label" htmlFor={isModal ? "modal-phone" : "page-phone"}>
              <Phone size={15} color="#e11d48" />
              <span>Phone Number</span>
              <span className="field-req-star">*</span>
            </label>
            <span className="field-req-sub">This is a required question</span>
            <input 
              id={isModal ? "modal-phone" : "page-phone"}
              type="tel" 
              name="phone" 
              className="field-input" 
              placeholder="e.g. +91 79036 70000" 
              required 
            />
          </div>

          {/* 4. Business Category * */}
          <div className="form-field-group">
            <label className="field-label" htmlFor={isModal ? "modal-cat" : "page-cat"}>
              <Tag size={15} color="#e11d48" />
              <span>Business Category</span>
              <span className="field-req-star">*</span>
            </label>
            <span className="field-req-sub">This is a required question</span>
            <select 
              id={isModal ? "modal-cat" : "page-cat"}
              name="category" 
              className="field-select" 
              required 
              defaultValue=""
            >
              <option value="" disabled>Select your business sector...</option>
              {categories.map((c, i) => {
                const catName = typeof c === 'string' ? c : c.name;
                return <option key={i} value={catName}>{catName}</option>;
              })}
            </select>
          </div>

          {/* 5. Name of the Enterprise * */}
          <div className="form-field-group form-field-full">
            <label className="field-label" htmlFor={isModal ? "modal-enterprise" : "page-enterprise"}>
              <Building size={15} color="#e11d48" />
              <span>Name of the Enterprise</span>
              <span className="field-req-star">*</span>
            </label>
            <span className="field-req-sub">This is a required question</span>
            <input 
              id={isModal ? "modal-enterprise" : "page-enterprise"}
              type="text" 
              name="enterprise" 
              className="field-input" 
              placeholder="e.g. Bobis Entertainment Pvt. Ltd. / Brand Name" 
              required 
            />
          </div>

          {/* Package Selection (if not locked in modal) */}
          <div className="form-field-group form-field-full">
            <label className="field-label" htmlFor={isModal ? "modal-pkg" : "page-pkg"}>
              <Sparkles size={15} color="#e11d48" />
              <span>Exhibition Stall / Sponsorship Tier</span>
            </label>
            <select 
              id={isModal ? "modal-pkg" : "page-pkg"}
              name="package" 
              className="field-select" 
              value={chosenPackage}
              onChange={(e) => setChosenPackage(e.target.value)}
            >
              {PACKAGES_OPTIONS.map((pkg, idx) => (
                <option key={idx} value={pkg}>{pkg}</option>
              ))}
            </select>
          </div>

          {/* 6. Description * */}
          <div className="form-field-group form-field-full">
            <label className="field-label" htmlFor={isModal ? "modal-desc" : "page-desc"}>
              <FileText size={15} color="#e11d48" />
              <span>Description</span>
              <span className="field-req-star">*</span>
            </label>
            <span className="field-req-sub">This is a required question</span>
            <textarea 
              id={isModal ? "modal-desc" : "page-desc"}
              name="description" 
              rows={3} 
              className="field-textarea" 
              placeholder="Provide a brief description of your enterprise, products, stall setup, or specific space requirements..."
              required
            />
          </div>

        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="booking-submit-btn" 
          disabled={formStatus === 'submitting'}
        >
          <Send size={18} />
          <span>{formStatus === 'submitting' ? 'Submitting Registration...' : 'Submit Booking Registration'}</span>
        </button>

        {/* Success Alert */}
        {formStatus === 'success' && (
          <motion.div 
            className="form-alert-success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CheckCircle2 size={24} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>Registration Submitted Successfully!</strong>
              <div style={{ marginTop: '4px', fontSize: '0.9rem' }}>
                Your enterprise details have been recorded directly in our official registry. Our team will contact you via WhatsApp / Phone shortly. For immediate assistance, call <strong>790367 0000</strong>.
              </div>
            </div>
          </motion.div>
        )}

        {/* Error Alert */}
        {formStatus === 'error' && (
          <motion.div 
            className="form-alert-error"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AlertCircle size={24} color="#dc2626" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>Transmission issue encountered.</strong>
              <div style={{ marginTop: '4px', fontSize: '0.9rem' }}>
                Please reach out to our executive desk directly at <strong>790367 0000 / 790377 0000</strong> or connect via WhatsApp.
              </div>
            </div>
          </motion.div>
        )}
      </form>
    </div>
  );
}
