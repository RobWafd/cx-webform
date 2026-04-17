import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PrimaryButton from '../components/PrimaryButton';
import feedLifestyleImg from '../assets/feed_lifestyle.png';
import { Link2, Minus, Plus } from 'lucide-react';

export default function Feed() {
  const [searchParams] = useSearchParams();
  const firstname = searchParams.get('firstname') || searchParams.get('account_firstname') || searchParams.get('firstName') || 'Customer';
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const enrollLink = "https://online.wafdbank.com/index.html?utm_source=relay&utm_medium=sms&utm_campaign=checking_onboarding";

  return (
    <PageLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div className="flex flex-col order-1 md:order-2 w-full">
          <img 
            src={feedLifestyleImg} 
            alt="Happy couple looking at phone" 
            className="w-full rounded-2xl mb-6 shadow-xl object-cover"
          />
        </div>

        <div className="flex flex-col order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-bold text-wafd-dark mb-4">Welcome to Your WaFd Mobile Feed!</h2>
            
          <p className="text-wafd-dark mb-4 leading-relaxed font-semibold text-lg">
            {firstname}, congratulations on opening your new checking account.
          </p>

          <p className="text-wafd-text mb-8 leading-relaxed text-lg">
            This welcome feed provides information about your account features and tips to help you get the most out of it. (Tip: Save this number in your contacts as WaFd Bank SMS.)
          </p>

          <h3 className="text-xl font-bold text-wafd-dark mb-3">Jump in and manage your account online</h3>
          <p className="text-wafd-text mb-6 leading-relaxed text-lg">
            We've made it easy and secure for you to do your banking anytime, anywhere.
          </p>

          <PrimaryButton 
            href={enrollLink}
            icon={Link2}
          >
            ENROLL NOW
          </PrimaryButton>

          {/* Accordion */}
          <div className="border border-wafd-border rounded-lg mt-6 bg-gray-50 overflow-hidden">
            <button 
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
              className="w-full flex justify-between items-center bg-transparent border-none text-wafd-dark font-semibold text-base md:text-lg cursor-pointer p-5 hover:bg-gray-100 transition-colors"
            >
              What You'll Need
              {isAccordionOpen ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            
            {isAccordionOpen && (
              <div className="px-5 pb-5 pt-2 text-wafd-text bg-white border-t border-gray-200">
                <p className="mb-4 leading-relaxed text-lg pt-2">
                  We've streamlined the enrollment process for online banking. All you need is:
                </p>
                <ul className="list-disc pl-6 leading-relaxed text-lg space-y-2">
                  <li>Last Name</li>
                  <li>Social Security Number</li>
                  <li>Date of Birth</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
