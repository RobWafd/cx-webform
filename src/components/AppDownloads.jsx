import React from 'react';
import { Link as LinkIcon } from 'lucide-react';

export default function AppDownloads({ 
  campaign = 'onboarding',
  appleText = 'Mobile App for Apple',
  androidText = 'Mobile App for Android'
}) {
  return (
    <div className="mb-8">
      <a href={`https://apps.apple.com/us/app/wafd-bank/id1054549841?utm_source=relay&utm_medium=sms&utm_campaign=${campaign}`} className="flex justify-between items-center py-4 border-b border-wafd-border text-wafd-dark font-medium no-underline">
        <span>{appleText}</span>
        <LinkIcon size={18} />
      </a>
      <a href={`https://play.google.com/store/apps/details?id=com.washingtonfederal.mobilebanking&hl=en_US&utm_source=relay&utm_medium=sms&utm_campaign=${campaign}`} className="flex justify-between items-center py-4 border-b border-wafd-border text-wafd-dark font-medium no-underline">
        <span>{androidText}</span>
        <LinkIcon size={18} />
      </a>
    </div>
  );
}
