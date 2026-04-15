import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bannerImg from '../assets/banner.png';
import feedLifestyleImg from '../assets/feed_lifestyle.png'; 
import { ChevronRight } from 'lucide-react';

export default function ProTips() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <Header />
      
      <main style={{ flex: 1, paddingBottom: '32px' }}>
        <img src={bannerImg} alt="Banner" className="banner-img" />

        <div className="content-container">
          <div className="image-column">
            <img 
              src={feedLifestyleImg} 
              alt="Person paying with card" 
              style={{ width: '100%', borderRadius: '8px', marginBottom: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
            />
          </div>

          <div className="form-column">
            <h2 style={{ fontSize: '18px', marginBottom: '12px', fontWeight: '700', color: 'var(--wafd-dark)' }}>
              Pro Tips
            </h2>
            <p style={{ color: 'var(--wafd-text)', marginBottom: '16px', lineHeight: '1.6' }}>
              Banking just got a whole lot easier.
            </p>
            <ul style={{ paddingLeft: '20px', color: 'var(--wafd-text)', marginBottom: '32px', lineHeight: '1.6' }}>
              <li style={{ marginBottom: '12px' }}>
                <span style={{ fontWeight: '600' }}>Set Up Alerts</span> - Stay on top of your finances with notifications on low balances, large expenses and more.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <span style={{ fontWeight: '600' }}>Link Your Accounts</span> - Connect accounts from any bank to see everything in one place.
              </li>
              <li>
                <span style={{ fontWeight: '600' }}>Manage Cards</span> - Lock/unlock it as needed and update your PIN.
              </li>
            </ul>

            <Link 
              to="/login-instructions"
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
              GET STARTED
            </Link>

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
