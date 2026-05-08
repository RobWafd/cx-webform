import React from 'react';
import Link from 'next/link';
import PageLayout from '../../components/PageLayout';
import PrimaryButton from '../../components/PrimaryButton';
import feedLifestyleImg from '../../assets/feed_lifestyle.png'; 
import { Link as LinkIcon, ChevronRight } from 'lucide-react';

export default function FinishSetup() {
  return (
    <PageLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-start">
        <div className="flex flex-col">
          <h2 className="text-[24px] leading-[28px] font-semibold text-wafd-green mb-4">Finish Setting up Your New Account!</h2>
          <p className="text-wafd-text mb-6 leading-relaxed text-lg">
            We're pleased to welcome you as a new client! Setting up your new account is quick and easy. Take a few minutes to:
          </p>
          <ul className="list-disc pl-5 text-wafd-text mb-8 leading-relaxed text-lg space-y-4">
            <li>
              <span className="font-semibold text-wafd-dark block mb-1">Set Up Direct Deposit</span> Having a direct deposit can unlock perks like WaFd's Early Pay Date - getting paid up to two days early.
            </li>
            <li>
              <span className="font-semibold text-wafd-dark block mb-1">Add WaFd to Your Digital Wallet</span> Connect your new debit card to Apple Pay or Google Pay to tap and pay.
            </li>
          </ul>

          <PrimaryButton 
            href="https://www.wafdbank.com/how-to/switch-to-washington-federal#direct-deposit?utm_source=relay&utm_medium=sms&utm_campaign=checking_onboarding"
          >
            SET UP DIRECT DEPOSIT
          </PrimaryButton>

          <div className="mb-8 mt-2">
            <a href="https://www.wafdbank.com/personal-banking/checking-accounts/debit-cards?utm_source=relay&utm_medium=sms&utm_campaign=checking_onboarding" className="flex justify-between items-center py-5 border-b border-t border-wafd-border text-wafd-dark font-medium no-underline hover:bg-gray-50 transition-colors px-2">
              <span className="text-lg">Add WaFd to Your Digital Wallet</span>
              <LinkIcon size={20} />
            </a>
          </div>

          <Link href="/connect-accounts" className="text-wafd-blue underline block font-medium text-lg mt-auto hover:text-blue-800 transition-colors">
            How to Connect Your Accounts
          </Link>
        </div>

        <div className="flex flex-col w-full">
          <img
            src={feedLifestyleImg.src}
            alt="Person using a digital wallet on a payment terminal"
            className="w-full rounded-[12px] mb-6 shadow-xl object-cover"
          />
        </div>
      </div>
    </PageLayout>
  );
}



