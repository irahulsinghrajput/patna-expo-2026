import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building, CreditCard, Phone, CheckCircle2, 
  Copy, Check, Calendar, MapPin, ArrowRight 
} from 'lucide-react';
import './FoundingExhibitorAndBankSection.css';

export default function FoundingExhibitorAndBankSection({ onOpenBooking }) {
  const [copiedField, setCopiedField] = useState(null);

  const bankDetails = {
    bankName: 'ICICI Bank Ltd.',
    accountName: 'BOBIS ENTERTAINMENT PVT LTD',
    accountNumber: '040405006162',
    branch: 'BORING ROAD, PATNA',
    ifscCode: 'ICIC0000404'
  };

  const handleCopy = (field, text) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const bookingSteps = [
    { step: '1', title: 'Call Booking Desk', desc: 'Connect with our executive desk or submit the exhibitor form.' },
    { step: '2', title: 'Choose Pavilion & Stall', desc: 'Select from Pavilions 1–8 according to your industry category.' },
    { step: '3', title: 'Confirm with Payment', desc: 'Transfer fee directly to official Bobis Entertainment ICICI Bank account.' },
    { step: '4', title: 'Receive Allotment', desc: 'Get official allotment letter, fascia layout, and move-in pass.' }
  ];

  return (
    <section id="booking-desk" className="founding-bank-section">
      <div className="container">

        {/* Section Header */}
        <div className="founding-header text-center" style={{ marginBottom: '36px' }}>
          <div className="founding-badge">OFFICIAL BANKING &amp; ALLOTMENT DESK</div>
          <h2 className="founding-title">
            Direct Stall Booking &amp; <span className="gradient-text-red-orange">Official Payment Desk</span>
          </h2>
          <p className="founding-sub">
            Direct official credentials and step-by-step guidance to secure your exhibition stall or commercial pavilion at Gandhi Maidan, Patna.
          </p>
        </div>

        {/* ==============================================================
            OFFICIAL BANKING DETAILS & 4 STEPS TO BOOK
            ============================================================== */}
        <div className="payment-and-steps-grid">
          
          {/* Left Col: Official ICICI Bank Account */}
          <div className="bank-account-card">
            <div className="bank-card-top">
              <div className="icici-logo-badge">
                <CreditCard size={20} />
                <span>OFFICIAL PAYMENT CREDENTIALS</span>
              </div>
            </div>

            <div className="bank-logo-wrap">
              <img 
                src="/images/icici-bank-logo-trimmed.png" 
                alt="ICICI Bank" 
                className="bank-card-logo-img" 
              />
            </div>
            <p className="bank-subtext">
              Direct official account for stall allocation and sponsorship settlements.
            </p>

            <div className="bank-rows-list">
              <div className="bank-row">
                <span className="b-label">Account Name</span>
                <div className="b-val-group">
                  <strong>{bankDetails.accountName}</strong>
                  <button 
                    type="button" 
                    className="copy-btn"
                    onClick={() => handleCopy('accName', bankDetails.accountName)}
                    title="Copy Account Name"
                  >
                    {copiedField === 'accName' ? <Check size={14} className="text-green" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              <div className="bank-row">
                <span className="b-label">Account Number</span>
                <div className="b-val-group">
                  <strong className="acc-number-text">{bankDetails.accountNumber}</strong>
                  <button 
                    type="button" 
                    className="copy-btn"
                    onClick={() => handleCopy('accNum', bankDetails.accountNumber)}
                    title="Copy Account Number"
                  >
                    {copiedField === 'accNum' ? <Check size={14} className="text-green" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              <div className="bank-row">
                <span className="b-label">IFSC Code</span>
                <div className="b-val-group">
                  <strong className="ifsc-text">{bankDetails.ifscCode}</strong>
                  <button 
                    type="button" 
                    className="copy-btn"
                    onClick={() => handleCopy('ifsc', bankDetails.ifscCode)}
                    title="Copy IFSC Code"
                  >
                    {copiedField === 'ifsc' ? <Check size={14} className="text-green" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              <div className="bank-row">
                <span className="b-label">Branch</span>
                <div className="b-val-group">
                  <strong>{bankDetails.branch}</strong>
                </div>
              </div>
            </div>

            <div className="bank-terms-note">
              <small>
                *Stall confirmation issued upon receipt of payment. Applicable GST charged as per statutory rules.
              </small>
            </div>
          </div>

          {/* Right Col: 4 Steps to Take Your Place */}
          <div className="steps-to-book-card">
            <span className="steps-pill">EASY 4-STEP ONBOARDING</span>
            <h3 className="steps-title">Take Your Place in Patna’s Festival Mall</h3>

            <div className="four-steps-stack">
              {bookingSteps.map((s, idx) => (
                <div key={idx} className="stack-step-item">
                  <div className="step-circle">{s.step}</div>
                  <div>
                    <strong className="step-heading">Step {s.step}: {s.title}</strong>
                    <p className="step-details">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Booking Desk Contacts */}
            <div className="booking-helpline-box">
              <span className="helpline-title">STALL BOOKING &amp; ENQUIRIES:</span>
              <div className="helpline-numbers-list">
                <a href="tel:7903670000">79036 70000</a>
                <span>•</span>
                <a href="tel:7903770000">79037 70000</a>
                <span>•</span>
                <a href="tel:9308357668">93083 57668</a>
                <span>•</span>
                <a href="tel:8340487341">83404 87341</a>
              </div>
            </div>

            <button 
              type="button" 
              className="btn-primary" 
              style={{ width: '100%', marginTop: '20px' }}
              onClick={() => onOpenBooking && onOpenBooking('Exhibitor Application')}
            >
              <span>Submit Exhibitor Application Form</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
