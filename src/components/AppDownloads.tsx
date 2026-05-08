import React from 'react';
import Image from 'next/image';


export default function AppDownloads({ campaign = 'onboarding' }: { campaign?: string }) {
  return (
    <div className="flex justify-center md:justify-start gap-6 md:gap-8 flex-wrap">
      <a href={`https://apps.apple.com/us/app/wafd-bank/id1054549841?utm_source=relay&utm_medium=sms&utm_campaign=${campaign}`} className="inline-flex items-center min-h-[48px] transition-transform hover:scale-105">
        <Image src="/app-store-badge.svg" alt="Download on the App Store" width={160} height={56} className="h-[48px] md:h-[56px] w-auto object-contain" />
      </a>
      <a href={`https://play.google.com/store/apps/details?id=com.washingtonfederal.mobilebanking&hl=en_US&utm_source=relay&utm_medium=sms&utm_campaign=${campaign}`} className="inline-flex items-center min-h-[48px] transition-transform hover:scale-105">
        <Image src="/google-play-badge.svg" alt="Get it on Google Play" width={160} height={56} className="h-[48px] md:h-[56px] w-auto object-contain" />
      </a>
    </div>
  );
}



