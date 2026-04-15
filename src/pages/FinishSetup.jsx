import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bannerImg from '../assets/banner.png';
import feedLifestyleImg from '../assets/feed_lifestyle.png';
import { Link as LinkIcon, ChevronRight } from 'lucide-react';

export default function FinishSetup() {
  const [searchParams] = useSearchParams();

  // Retrieve dynamic fields or default to placeholders if not provided
  const firstName = searchParams.get('first_name') || 'Customer';

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
              src={feedLifestyleImg} 
              alt="People making mobile payment" 
              style={{ width: '100%', borderRadius: '8px', marginBottom: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
            />
          </div>

          <div className="form-column">
            <h2 style={{ fontSize: '18px', marginBottom: '12px' }}>Finish Setting up Your New Account!</h2>
            <p style={{ color: 'var(--wafd-text)', marginBottom: '16px', lineHeight: '1.5' }}>
              Nice start, {firstName}! Take a minute to prepare your new account. Here's a short checklist to get you started:
            </p>
            <ul style={{ paddingLeft: '20px', color: 'var(--wafd-text)', marginBottom: '24px', lineHeight: '1.6' }}>
              <li style={{ marginBottom: '8px' }}>
                <span style={{ fontWeight: '600' }}>Set up Direct Deposit</span> - Automatically deposit your paycheck to your account for easy access to your funds.
              </li>
              <li style={{ marginBottom: '8px' }}>
                <span style={{ fontWeight: '600' }}>Add WaFd to Your Digital Wallet</span> - Make fast and easy contactless payments with your mobile device.
              </li>
              <li>
                <span style={{ fontWeight: '600' }}>Connect Your Accounts</span> - Connect your accounts from any bank to see everything in one place.
              </li>
            </ul>

            <a 
              href="https://www.wafdbank.com/blog/banking-101/how-to-set-up-direct-deposit?utm_source=relay&utm_medium=sms&utm_campaign=onboarding"
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
              <LinkIcon size={20} />
              SET UP DIRECT DEPOSIT
            </a>

            <div style={{ marginBottom: '32px' }}>
              <a href="https://www.wafdbank.com/personal-banking/debit-cards/digital-debit-card?utm_source=relay&utm_medium=sms&utm_campaign=onboarding" className="link-copy">
                <span>Add WaFd to Your Digital Wallet</span>
                <LinkIcon size={18} />
              </a>
              <Link to="/connect-accounts" className="link-copy">
                <span>How to Connect Your Accounts</span>
                <ChevronRight size={18} />
              </Link>
            </div>

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
