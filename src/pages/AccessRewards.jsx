import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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

            <div style={{ marginBottom: '32px' }}>
              <a href="https://apps.apple.com/us/app/wafd-bank/id1054549841?utm_source=relay&utm_medium=sms&utm_campaign=ck_onboarding" className="link-copy" style={{ textDecoration: 'none' }}>
                <span>Mobile App for Apple</span>
                <LinkIcon size={18} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.washingtonfederal.mobilebanking&hl=en_US&utm_source=relay&utm_medium=sms&utm_campaign=ck_onboarding" className="link-copy" style={{ textDecoration: 'none' }}>
                <span>Mobile App for Android</span>
                <LinkIcon size={18} />
              </a>
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
