import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bannerImg from '../assets/banner.png';
import lifestyleImg from '../assets/lifestyle.png'; 
import { Phone } from 'lucide-react';

export default function VoiceBanking() {
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
              src={lifestyleImg} 
              alt="Person using voice banking on phone" 
              style={{ width: '100%', borderRadius: '8px', marginBottom: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
            />
          </div>

          <div className="form-column">
            <h2 style={{ fontSize: '18px', marginBottom: '16px', fontWeight: '700', color: 'var(--wafd-dark)' }}>
              Use Your Unique Voice to do Your Banking!
            </h2>
            <p style={{ color: 'var(--wafd-text)', marginBottom: '16px', lineHeight: '1.6' }}>
              Check your balance, transfer money between WaFd accounts and more!
            </p>
            <p style={{ color: 'var(--wafd-dark)', marginBottom: '32px', lineHeight: '1.6', fontWeight: '600' }}>
              Enroll in minutes.
            </p>

            <a 
              href="tel:18003249375"
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
              <Phone size={20} />
              SET UP VOICE BANKING
            </a>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
