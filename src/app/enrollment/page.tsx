"use client";
import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import AppDownloads from '../../components/AppDownloads';
import PrimaryButton from '../../components/PrimaryButton';
import heroImg from '../../assets/hero.png';
import { Link as LinkIcon, ChevronDown, ChevronUp } from 'lucide-react';

export default function Enrollment() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <PageLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        
        {/* Mobile: Image on top. Desktop: Image on right */}
        <div className="flex flex-col order-1 md:order-2 w-full">
          <img
            src={heroImg.src}
            alt="Mobile App View"
            className="w-full rounded-[12px] mb-6 shadow-xl object-cover"
          />
        </div>

        {/* Form content */}
        <div className="flex flex-col order-2 md:order-1">
          <h2 className="text-[24px] leading-[28px] font-semibold text-wafd-green mb-4">Skip the Line</h2>
          <p className="text-wafd-text mb-6 leading-relaxed text-lg">
            Enrollment is quick and simple! With online and mobile banking you can:
          </p>
          <ul className="list-disc pl-5 text-wafd-text mb-8 leading-relaxed space-y-2 text-lg">
            <li>View your account balance</li>
            <li>Pay your bills online</li>
            <li>Send money through Zelle&reg;</li>
          </ul>

          <h3 className="text-lg md:text-[20px] leading-[24px] font-semibold text-wafd-text mb-6">Enroll to get started!</h3>

          <PrimaryButton 
            href="https://online.wafdbank.com/index.html?utm_source=relay&utm_medium=sms&utm_campaign=checking_onboarding"
          >
            ENROLL NOW
          </PrimaryButton>

          <AppDownloads campaign="checking_onboarding" />

          {/* Accordion */}
          <div className="border border-wafd-border rounded-lg mt-6 bg-gray-50 overflow-hidden">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex justify-between items-center bg-transparent border-none text-wafd-dark font-semibold text-base cursor-pointer p-4 hover:bg-gray-100 transition-colors"
            >
              What You Need to Enroll
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {isExpanded && (
              <div className="px-4 pb-4 pt-2 text-wafd-text bg-white border-t border-gray-200">
                <ol className="list-decimal pl-5 leading-relaxed space-y-2 pt-2">
                  <li>Last Name</li>
                  <li>Social Security Number</li>
                  <li>Date of Birth</li>
                </ol>
              </div>
            )}
          </div>
        </div>

      </div>
    </PageLayout>
  );
}



