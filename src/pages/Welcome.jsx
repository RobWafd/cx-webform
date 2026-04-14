import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bannerImg from '../assets/banner.png';
import lifestyleImg from '../assets/lifestyle.png';
import { ChevronRight } from 'lucide-react';

export default function Welcome() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Retrieve dynamic fields or default to placeholders if not provided
  const last4 = searchParams.get('last4') || 'XXXX';
  const productType = searchParams.get('type') || 'Checking';

  const handleDownloadClick = () => {
    // Navigate to 1.b screen (download)
    navigate('/download');
  };

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

        {/* Padding container for content */}
        <div className="content-container">
          <div className="image-column">
            <img 
              src={lifestyleImg} 
              alt="Coffee and mobile app" 
              style={{ width: '100%', borderRadius: '8px', marginBottom: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
            />
          </div>

          <div className="form-column">
            <h2 style={{ fontSize: '18px', marginBottom: '16px' }}>Your New Account Details</h2>
            
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse', 
              marginBottom: '32px',
              border: '1px solid var(--wafd-border)'
            }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--wafd-border)' }}>
                  <td style={{ padding: '12px', fontWeight: '500', backgroundColor: 'var(--wafd-gray)', width: '40%' }}>
                    Account<br/>Ending in:
                  </td>
                  <td style={{ padding: '12px' }}>{last4}</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', fontWeight: '500', backgroundColor: 'var(--wafd-gray)' }}>
                    Account<br/>Type:
                  </td>
                  <td style={{ padding: '12px' }}>{productType}</td>
                </tr>
              </tbody>
            </table>

            <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Download the WaFd App</h3>
            <p style={{ color: 'var(--wafd-text)', marginBottom: '24px', lineHeight: '1.6' }}>
              Track your spending, deposit checks and pay friends with Zelle&reg;.
            </p>

            <button 
              onClick={handleDownloadClick}
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
                gap: '8px',
                cursor: 'pointer',
                textTransform: 'uppercase'
              }}
            >
              <ChevronRight size={20} style={{ position: 'relative', left: '-4px' }} />
              DOWNLOAD THE APP
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
