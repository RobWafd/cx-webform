import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bannerImg from '../assets/banner.png';
import feedLifestyleImg from '../assets/feed_lifestyle.png';
import { Link2, Minus, Plus } from 'lucide-react';

export default function Feed() {
  const [searchParams] = useSearchParams();
  const firstname = searchParams.get('firstname') || 'Customer';
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  const enrollLink = "https://online.wafdbank.com/index.html?utm_source=relay&utm_medium=sms&utm_campaign=checking_onboarding";

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <Header />
      
      <main style={{ flex: 1 }}>
        {/* Banner */}
        <img 
          src={bannerImg} 
          alt="People with arms raised outdoors" 
          className="banner-img"
        />

        {/* Content Container */}
        <div className="content-container">
          <div className="image-column">
            <img 
              src={feedLifestyleImg} 
              alt="Happy couple looking at phone" 
              style={{ width: '100%', borderRadius: '8px', marginBottom: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
            />
          </div>

          <div className="form-column">
            <h2 style={{ fontSize: '18px', marginBottom: '16px' }}>Welcome to Your WaFd Mobile Feed!</h2>
            
            <p style={{ color: 'var(--wafd-dark)', marginBottom: '16px', lineHeight: '1.6', fontWeight: '500' }}>
              {firstname}, congratulations on opening your new checking account.
            </p>

            <p style={{ color: 'var(--wafd-text)', marginBottom: '24px', lineHeight: '1.6' }}>
              This welcome feed provides information about your account features and tips to help you get the most out of it. (Tip: Save this number in your contacts as WaFd Bank SMS.)
            </p>

            <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Jump in and manage your account online</h3>
            <p style={{ color: 'var(--wafd-text)', marginBottom: '24px', lineHeight: '1.6' }}>
              We've made it easy and secure for you to do your banking anytime, anywhere.
            </p>

            <a 
              href={enrollLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '100%',
                backgroundColor: 'var(--wafd-green)',
                color: 'white',
                border: 'none',
                padding: '16px',
                borderRadius: '4px',
                fontWeight: '700',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                cursor: 'pointer',
                textTransform: 'uppercase',
                textDecoration: 'none',
                marginBottom: '32px'
              }}
            >
              <Link2 size={20} />
              ENROLL NOW
            </a>

            {/* Accordion */}
            <div style={{ borderTop: '1px solid var(--wafd-border)', borderBottom: '1px solid var(--wafd-border)' }}>
              <button 
                onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  padding: '16px 0',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'var(--wafd-dark)',
                  cursor: 'pointer'
                }}
              >
                What You'll Need
                {isAccordionOpen ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              
              {isAccordionOpen && (
                <div style={{ paddingBottom: '16px', color: 'var(--wafd-text)' }}>
                  <p style={{ marginBottom: '12px', lineHeight: '1.6' }}>
                    We've streamlined the enrollment process for online banking. All you need is:
                  </p>
                  <ul style={{ paddingLeft: '24px', lineHeight: '1.6' }}>
                    <li>Last Name</li>
                    <li>Social Security Number</li>
                    <li>Date of Birth</li>
                  </ul>
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
