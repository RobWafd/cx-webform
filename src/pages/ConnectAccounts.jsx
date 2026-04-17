import React from 'react';
import PageLayout from '../components/PageLayout';
import AppDownloads from '../components/AppDownloads';

export default function ConnectAccounts() {
  return (
    <PageLayout>
      <div className="flex flex-col max-w-2xl mx-auto w-full pt-8 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold text-wafd-dark mb-6">Connect Your Accounts</h2>
        <p className="text-wafd-text mb-4 leading-relaxed text-lg font-medium">
          Connect your accounts from any bank to see everything in one place.
        </p>
        <p className="text-wafd-text mb-12 leading-relaxed text-lg italic">
          From your mobile app, click <span className="font-semibold not-italic text-wafd-dark">Link Account</span>.
        </p>

        <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm w-full">
          <AppDownloads campaign="onboarding" />
        </div>
      </div>
    </PageLayout>
  );
}
