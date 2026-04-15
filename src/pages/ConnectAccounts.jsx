import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bannerImg from '../assets/banner.png';
import { Link as LinkIcon } from 'lucide-react';

export default function ConnectAccounts() {
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
          <div className="form-column" style={{ paddingTop: '16px' }}>
            <p style={{ color: 'var(--wafd-dark)', marginBottom: '24px', lineHeight: '1.6', fontWeight: '500' }}>
              Connect your accounts from any bank to see everything in one place.
            </p>
            <p style={{ color: 'var(--wafd-text)', marginBottom: '32px', lineHeight: '1.6', fontStyle: 'italic' }}>
              From your mobile app, click <span style={{ fontWeight: '600' }}>Link Account</span>.
            </p>

            <div style={{ marginBottom: '32px' }}>
              <a href="https://apps.apple.com/us/app/wafd-bank/id1054549841?utm_source=relay&utm_medium=sms&utm_campaign=onboarding" className="link-copy">
                <span>Mobile App for Apple</span>
                <LinkIcon size={18} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.washingtonfederal.mobilebanking&hl=en_US&utm_source=relay&utm_medium=sms&utm_campaign=onboarding" className="link-copy">
                <span>Mobile App for Android</span>
                <LinkIcon size={18} />
              </a>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
