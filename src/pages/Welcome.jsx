import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

export default function Welcome() {
  const [searchParams] = useSearchParams();
  
  const accountEnding = searchParams.get('acct') || searchParams.get('account');
  let accountType = searchParams.get('type') || searchParams.get('product');
  const firstName = searchParams.get('firstname') || searchParams.get('firstName') || searchParams.get('account_firstname');

  if (accountType) {
     accountType = accountType.replace(/\+/g, ' ');
  }

  let nameStr = firstName ? `${firstName}, you` : 'You';
  let greeting = `${nameStr} have successfully applied!`;

  if (accountEnding && accountType) {
    greeting = `${nameStr} have successfully applied for ${accountType} (...${accountEnding})!`;
  } else if (accountType) {
    greeting = `${nameStr} have successfully applied for your ${accountType} account!`;
  } else if (accountEnding) {
     greeting = `${nameStr} have successfully applied for the account ending in ...${accountEnding}!`;
  }

  return (
    <PageLayout hideBanner={true}>
      <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto py-16 md:py-32 w-full">
        <h2 className="text-[26px] md:text-4xl lg:text-5xl mb-6 text-wafd-dark font-extrabold leading-tight tracking-tight">
          {greeting}
        </h2>
        
        <p className="text-wafd-text mb-6 leading-relaxed text-lg md:text-xl max-w-lg font-medium">
          We'll be reviewing your application shortly. In the meantime, feel free to use the menu above to explore everything WaFd has to offer your new account!
        </p>
      </div>
    </PageLayout>
  );
}
