import React from 'react';
import { Link as LinkIcon } from 'lucide-react';

export default function AppDownloads({ 
  campaign = 'onboarding',
  appleText = 'Mobile App for Apple',
  androidText = 'Mobile App for Android'
}) {
  return (
    <div style={{ marginBottom: '32px' }}>
      <a href={`https://apps.apple.com/us/app/wafd-bank/id1054549841?utm_source=relay&utm_medium=sms&utm_campaign=${campaign}`} className="link-copy" style={{ textDecoration: 'none' }}>
        <span>{appleText}</span>
        <LinkIcon size={18} />
      </a>
      <a href={`https://play.google.com/store/apps/details?id=com.washingtonfederal.mobilebanking&hl=en_US&utm_source=relay&utm_medium=sms&utm_campaign=${campaign}`} className="link-copy" style={{ textDecoration: 'none' }}>
        <span>{androidText}</span>
        <LinkIcon size={18} />
      </a>
    </div>
  );
}
