import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bannerImg from '../assets/banner.png';
import { ExternalLink } from 'lucide-react';

export default function Download() {
  const appleLink = "https://apps.apple.com/us/app/wafd-bank/id1054549841?utm_source=relay&utm_medium=sms&utm_campaign=checking_onboarding";
  const androidLink = "https://play.google.com/store/apps/details?id=com.washingtonfederal.mobilebanking&hl=en_US";

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

        <div className="download-container" style={{ padding: '32px 20px' }}>
          <p style={{ fontSize: '15px', color: 'var(--wafd-dark)', marginBottom: '32px' }}>
            Tap to download the WaFd mobile app
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a 
              href={appleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link-copy"
            >
              <span>Download for Apple</span>
              <ExternalLink size={18} color="#9ca3af" />
            </a>
            
            <a 
              href={androidLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link-copy"
            >
              <span>Download for Android</span>
              <ExternalLink size={18} color="#9ca3af" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
