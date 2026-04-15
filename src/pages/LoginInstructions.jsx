import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppDownloads from '../components/AppDownloads';
import bannerImg from '../assets/banner.png';
import { Link as LinkIcon } from 'lucide-react';

export default function LoginInstructions() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <Header />
      
      <main style={{ flex: 1, paddingBottom: '32px' }}>
        <img src={bannerImg} alt="Banner" className="banner-img" />

        <div className="content-container">
          <div className="form-column" style={{ paddingTop: '16px' }}>
            <p style={{ color: 'var(--wafd-dark)', marginBottom: '16px', lineHeight: '1.6', fontWeight: '600' }}>
              Once you Login:
            </p>
            
            <ul style={{ paddingLeft: '20px', color: 'var(--wafd-text)', marginBottom: '32px', lineHeight: '1.6', fontSize: '15px', listStyleType: 'circle' }}>
              <li style={{ marginBottom: '12px' }}>
                Set up alerts
                <ul style={{ paddingLeft: '24px', marginTop: '4px', listStyleType: 'square', color: 'var(--wafd-text)' }}>
                  <li>Navigate to the bell icon to setup notifications</li>
                </ul>
              </li>
              <li style={{ marginBottom: '12px' }}>
                Link your accounts
                <ul style={{ paddingLeft: '24px', marginTop: '4px', listStyleType: 'square', color: 'var(--wafd-text)' }}>
                  <li>Select <span style={{ fontStyle: 'italic', fontWeight: '600' }}>Link Account</span> to set up your accounts</li>
                </ul>
              </li>
              <li style={{ marginBottom: '12px' }}>
                Manage cards
                <ul style={{ paddingLeft: '24px', marginTop: '4px', listStyleType: 'square', color: 'var(--wafd-text)' }}>
                  <li>Click on <span style={{ fontStyle: 'italic', fontWeight: '600' }}>Manage Cards</span> to lock/unlock your debit card and update your PIN</li>
                </ul>
              </li>
            </ul>

            <AppDownloads campaign="onboarding" />

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
