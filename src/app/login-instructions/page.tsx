import React from 'react';
import PageLayout from '../../components/PageLayout';
import AppDownloads from '../../components/AppDownloads';

export default function LoginInstructions() {
  return (
    <PageLayout>
      <div className="flex flex-col max-w-3xl mx-auto w-full pt-8">
        <h2 className="text-[24px] leading-[28px] font-semibold text-wafd-green mb-6 text-center md:text-left">Login Instructions</h2>
        <p className="text-wafd-dark mb-6 leading-relaxed font-semibold text-lg">
          Once you Login:
        </p>
        
        <ul className="list-[circle] pl-6 text-lg text-wafd-text mb-10 leading-relaxed space-y-6">
          <li className="mb-3">
            <span className="font-bold text-wafd-dark block mb-2">Set up alerts</span>
            <ul className="list-[square] pl-6 mt-1 text-wafd-text text-[16px] leading-[24px] space-y-2">
              <li>Navigate to the bell icon to setup notifications</li>
            </ul>
          </li>
          <li className="mb-3">
            <span className="font-bold text-wafd-dark block mb-2">Link your accounts</span>
            <ul className="list-[square] pl-6 mt-1 text-wafd-text text-[16px] leading-[24px] space-y-2">
              <li>Select <span className="font-semibold italic">Link Account</span> to set up your accounts</li>
            </ul>
          </li>
          <li className="mb-3">
            <span className="font-bold text-wafd-dark block mb-2">Manage cards</span>
            <ul className="list-[square] pl-6 mt-1 text-wafd-text text-[16px] leading-[24px] space-y-2">
              <li>Click on <span className="font-semibold italic">Manage Cards</span> to lock/unlock your debit card and update your PIN</li>
            </ul>
          </li>
        </ul>

        <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm">
          <AppDownloads campaign="onboarding" />
        </div>
      </div>
    </PageLayout>
  );
}



