import React from 'react';
import Header from './Header';
import Footer from './Footer';
import bannerImg from '../assets/banner.png';

interface PageLayoutProps {
  children: React.ReactNode;
  hideBanner?: boolean;
}

export default function PageLayout({ children, hideBanner = false }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white md:bg-gray-100 flex flex-col w-full font-sans">
      <Header />
      
      <main className="flex-1 w-full max-w-5xl mx-auto flex flex-col pb-8 md:my-10 md:shadow-2xl md:rounded-[12px] md:overflow-hidden md:bg-white relative">
        {!hideBanner && (
          <img 
            src={bannerImg.src} 
            alt="Banner" 
            className="w-full h-[120px] md:h-[240px] lg:h-[280px] object-cover block"
          />
        )}

        <div className="flex-1 px-5 py-8 md:px-16 md:py-12 flex flex-col">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}



