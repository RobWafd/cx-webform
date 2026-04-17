import React from 'react';
import PageLayout from '../components/PageLayout';
import AppDownloads from '../components/AppDownloads';

export default function AccessRewards() {
  return (
    <PageLayout>
      <div className="flex flex-col max-w-3xl mx-auto w-full pt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-wafd-dark mb-6 text-center md:text-left">Access your Rewards</h2>
        <p className="text-wafd-dark mb-6 leading-relaxed font-semibold text-lg">
          Access your Rewards Using:
        </p>
        
        <ul className="list-[circle] pl-6 text-lg text-wafd-text mb-10 leading-relaxed space-y-6">
          <li className="mb-3">
            <span className="font-bold text-wafd-dark block mb-2">Mobile Banking:</span>
            <ol className="list-decimal pl-6 mt-1 text-gray-600 space-y-2">
              <li>Login</li>
              <li>In your top navigation, swipe left and click on the Rewards tile</li>
            </ol>
          </li>
          <li className="mb-3">
            <span className="font-bold text-wafd-dark block mb-2">Online Banking:</span>
            <ol className="list-decimal pl-6 mt-1 text-gray-600 space-y-2">
              <li>Login</li>
              <li>Click on an eligible account</li>
              <li>Select Rewards on the Actions menu</li>
            </ol>
          </li>
        </ul>

        <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm mt-4 w-full">
          <AppDownloads campaign="ck_onboarding" />
        </div>
      </div>
    </PageLayout>
  );
}
