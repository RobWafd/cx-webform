import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppDownloads from '../components/AppDownloads';
import bannerImg from '../assets/banner.png';
import { Link as LinkIcon } from 'lucide-react';

export default function AccessRewards() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <Header />
      
      <main style={{ flex: 1, paddingBottom: '32px' }}>
        <img src={bannerImg} alt="Banner" className="banner-img" />

        <div className="content-container">
          <div className="form-column" style={{ paddingTop: '16px' }}>
            <p style={{ color: 'var(--wafd-dark)', marginBottom: '16px', lineHeight: '1.6', fontWeight: '600' }}>
              Access your Rewards Using:
            </p>
            
            <ul style={{ paddingLeft: '20px', color: 'var(--wafd-text)', marginBottom: '32px', lineHeight: '1.6', fontSize: '15px', listStyleType: 'circle' }}>
              <li style={{ marginBottom: '12px' }}>
                <span style={{ fontWeight: '500' }}>Mobile Banking:</span>
                <ol style={{ paddingLeft: '24px', marginTop: '4px', color: 'var(--wafd-text)' }}>
                  <li>Login</li>
                  <li>In your top navigation, swipe left and click on the Rewards tile</li>
                </ol>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <span style={{ fontWeight: '500' }}>Online Banking:</span>
                <ol style={{ paddingLeft: '24px', marginTop: '4px', color: 'var(--wafd-text)' }}>
                  <li>Login</li>
                  <li>Click on an eligible account</li>
                  <li>Select Rewards on the Actions menu</li>
                </ol>
              </li>
            </ul>

            <AppDownloads campaign="ck_onboarding" />

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
