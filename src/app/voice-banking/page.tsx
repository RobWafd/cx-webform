import React from 'react';
import PageLayout from '../../components/PageLayout';
import PrimaryButton from '../../components/PrimaryButton';
import lifestyleImg from '../../assets/lifestyle.png'; 
import { Phone } from 'lucide-react';

export default function VoiceBanking() {
  return (
    <PageLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="flex flex-col order-1 md:order-2 w-full">
          <img 
            src={lifestyleImg.src} 
            alt="Person using voice banking on phone" 
            className="w-full rounded-[12px] mb-6 shadow-xl object-cover"
          />
        </div>

        <div className="flex flex-col order-2 md:order-1">
          <h2 className="text-2xl md:text-4xl mb-6 font-bold text-wafd-dark leading-tight">
            Use Your Unique Voice to do Your Banking!
          </h2>
          <p className="text-wafd-text mb-6 leading-relaxed text-lg">
            Check your balance, transfer money between WaFd accounts and more!
          </p>
          <p className="text-wafd-dark mb-10 leading-relaxed font-semibold text-xl">
            Enroll in minutes.
          </p>

          <PrimaryButton 
            href="tel:18003249375"
          >
            SET UP VOICE BANKING
          </PrimaryButton>
        </div>
      </div>
    </PageLayout>
  );
}



