import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bannerImg from '../assets/banner.png';
import feedLifestyleImg from '../assets/feed_lifestyle.png'; 
import { ChevronRight, Link as LinkIcon } from 'lucide-react';

export default function RewardsBenefits() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <Header />
      
      <main style={{ flex: 1, paddingBottom: '32px' }}>
        <img src={bannerImg} alt="Banner" className="banner-img" />

        <div className="content-container">
          <div className="image-column">
            <img 
              src={feedLifestyleImg} 
              alt="Person pumping gas" 
              style={{ width: '100%', borderRadius: '8px', marginBottom: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
            />
          </div>

          <div className="form-column">
            <h2 style={{ fontSize: '18px', marginBottom: '16px', fontWeight: '700', color: 'var(--wafd-dark)' }}>
              Don't Miss Out on Your Benefits!
            </h2>
            <p style={{ color: 'var(--wafd-text)', marginBottom: '16px', lineHeight: '1.6' }}>
              Have you tapped into the money saving perks that come with your checking account? Your benefits include:
            </p>
            <ul style={{ paddingLeft: '20px', color: 'var(--wafd-text)', marginBottom: '32px', lineHeight: '1.6' }}>
              <li>Fuel Savings</li>
              <li>Mobile Phone Protection</li>
              <li>Shopping Discounts</li>
              <li>Travel and Leisure Discounts</li>
              <li>Identity Theft Monitoring and more</li>
            </ul>

            <Link 
              to="/access-rewards"
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
                textTransform: 'uppercase',
                textDecoration: 'none'
              }}
            >
              <ChevronRight size={20} />
              VIEW REWARDS
            </Link>

            <a href="https://www.wafdbank.com/personal-banking/rewards-checking-faq?utm_source=relay&utm_medium=sms&utm_campaign=ck_onboarding" className="link-copy" style={{ textDecoration: 'none', paddingLeft: '4px', paddingRight: '4px', borderTop: '1px solid var(--wafd-border)' }}>
              <span>Frequently Asked Question</span>
              <LinkIcon size={18} />
            </a>

            <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '32px' }}>
              03/31/2025 01:15 PM
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
