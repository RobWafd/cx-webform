import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppDownloads from '../components/AppDownloads';
import bannerImg from '../assets/banner.png';
import heroImg from '../assets/hero.png';
import { Link as LinkIcon, ChevronDown, ChevronUp } from 'lucide-react';

export default function Enrollment() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <Header />

      <main style={{ flex: 1, paddingBottom: '32px' }}>
        {/* Banner */}
        <img
          src={bannerImg}
          alt="People with arms raised outdoors"
          className="banner-img"
        />

        <div className="content-container">
          <div className="image-column">
            <img
              src={heroImg}
              alt="Mobile App View"
              style={{ width: '100%', borderRadius: '8px', marginBottom: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
            />
          </div>

          <div className="form-column">
            <h2 style={{ fontSize: '18px', marginBottom: '12px' }}>Skip the Line</h2>
            <p style={{ color: 'var(--wafd-text)', marginBottom: '16px', lineHeight: '1.5' }}>
              Enrollment is quick and simple! With online and mobile banking you can:
            </p>
            <ul style={{ paddingLeft: '20px', color: 'var(--wafd-text)', marginBottom: '24px', lineHeight: '1.6' }}>
              <li>View your account balance</li>
              <li>Pay your bills online</li>
              <li>Send money through Zelle&reg;</li>
            </ul>

            <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>Enroll to get started!</h3>

            <a
              href="https://online.wafdbank.com/index.html?utm_source=relay&utm_medium=sms&utm_campaign=checking_onboarding"
              style={{
                width: '100%',
                backgroundColor: 'var(--wafd-dark)',
                color: 'white',
                border: 'none',
                padding: '16px',
                borderRadius: '4px',
                fontWeight: '700',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
                marginBottom: '24px',
                textTransform: 'uppercase'
              }}
            >
              <LinkIcon size={20} />
              ENROLL NOW
            </a>

            <AppDownloads campaign="checking_onboarding" appleText="Download for Apple" androidText="Download for Android" />

            {/* Accordion */}
            <div style={{ borderTop: '1px solid var(--wafd-border)', paddingTop: '16px', marginBottom: '16px' }}>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  color: 'var(--wafd-dark)',
                  fontWeight: '600',
                  fontSize: '16px',
                  cursor: 'pointer',
                  padding: '8px 0'
                }}
              >
                What You Need to Enroll
                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              {isExpanded && (
                <div style={{ paddingTop: '16px', color: 'var(--wafd-text)' }}>
                  <ol style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li>Last Name</li>
                    <li>Social Security Number</li>
                    <li>Date of Birth</li>
                  </ol>
                </div>
              )}
            </div>


          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
