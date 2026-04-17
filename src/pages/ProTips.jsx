import React from 'react';
import PageLayout from '../components/PageLayout';
import PrimaryButton from '../components/PrimaryButton';
import feedLifestyleImg from '../assets/feed_lifestyle.png'; 
import { ChevronRight } from 'lucide-react';

export default function ProTips() {
  return (
    <PageLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div className="flex flex-col order-1 md:order-2 w-full">
          <img 
            src={feedLifestyleImg} 
            alt="Person paying with card" 
            className="w-full rounded-2xl mb-6 shadow-xl object-cover"
          />
        </div>

        <div className="flex flex-col order-2 md:order-1">
          <h2 className="text-2xl md:text-4xl font-bold text-wafd-dark mb-4">
            Pro Tips
          </h2>
          <p className="text-wafd-text mb-8 leading-relaxed text-xl">
            Banking just got a whole lot easier.
          </p>
          <ul className="list-none text-wafd-text mb-12 leading-relaxed space-y-6 text-lg">
            <li className="flex flex-col border-b border-gray-100 pb-6">
              <span className="font-bold text-wafd-dark mb-1">Set Up Alerts</span>
              <span className="text-gray-600">Stay on top of your finances with notifications on low balances, large expenses and more.</span>
            </li>
            <li className="flex flex-col border-b border-gray-100 pb-6">
              <span className="font-bold text-wafd-dark mb-1">Link Your Accounts</span>
              <span className="text-gray-600">Connect accounts from any bank to see everything in one place.</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold text-wafd-dark mb-1">Manage Cards</span>
              <span className="text-gray-600">Lock/unlock it as needed and update your PIN.</span>
            </li>
          </ul>

          <PrimaryButton 
            to="/login-instructions"
            icon={ChevronRight}
          >
            GET STARTED
          </PrimaryButton>
        </div>
      </div>
    </PageLayout>
  );
}
