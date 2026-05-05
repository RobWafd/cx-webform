import React from 'react';


export default function AppDownloads({ campaign = 'onboarding' }: { campaign?: string }) {
  return (
    <div className="flex gap-4 flex-wrap">
      <a href={`https://apps.apple.com/us/app/wafd-bank/id1054549841?utm_source=relay&utm_medium=sms&utm_campaign=${campaign}`} className="inline-block transition-transform hover:scale-105">
        <img src="/app-store-badge.svg" alt="Download on the App Store" className="h-[48px] md:h-[56px] object-contain" />
      </a>
      <a href={`https://play.google.com/store/apps/details?id=com.washingtonfederal.mobilebanking&hl=en_US&utm_source=relay&utm_medium=sms&utm_campaign=${campaign}`} className="inline-block transition-transform hover:scale-105">
        <img src="/google-play-badge.svg" alt="Get it on Google Play" className="h-[48px] md:h-[56px] object-contain" />
      </a>
    </div>
  );
}



