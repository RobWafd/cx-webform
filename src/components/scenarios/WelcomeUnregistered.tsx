"use client";
import React, { useState } from 'react';
import PageLayout from '../PageLayout';
import PrimaryButton from '../PrimaryButton';
import feedLifestyleImg from '../../assets/feed_lifestyle.png';
import { Minus, Plus } from 'lucide-react';
import { useDynamicText } from '../../utils/dynamicText';
import Image from 'next/image';

export default function WelcomeUnregistered() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const { parseText } = useDynamicText();

  // Dynamic values injected via parseText securely fail-gracefully if missing inside state 
  const dynamicGreeting = parseText("@{account_firstname}, congratulations on opening your new @{input_productname} account.");

  return (
    <PageLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-start">
        <div className="flex flex-col">
          <h2 className="text-[24px] leading-[28px] font-semibold text-wafd-green mb-4">
            Welcome to Your WaFd Mobile Feed!
          </h2>

          <p className="text-[#202324] mb-4 font-semibold text-[20px] leading-[24px]">
            {dynamicGreeting}
          </p>

          <p className="text-wafd-text mb-8 text-[16px] leading-[24px]">
            This welcome feed provides information about your account features and tips to help you get the most out of it. (Tip: Save this number in your contacts.)
          </p>

          <PrimaryButton href="https://online.wafdbank.com/index.html">
            ENROLL NOW
          </PrimaryButton>

          <div className="border border-wafd-border rounded-lg mt-6 bg-gray-50 overflow-hidden">
            <button
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
              className="w-full flex justify-between items-center bg-transparent border-none text-[#202324] font-semibold text-[16px] cursor-pointer p-5 hover:bg-gray-100 transition-colors"
            >
              What You'll Need
              {isAccordionOpen ? <Minus size={20} /> : <Plus size={20} />}
            </button>

            {isAccordionOpen && (
              <div className="px-5 pb-5 pt-2 text-[#202324] bg-white border-t border-gray-200">
                <p className="mb-4 text-[16px] leading-[24px] pt-2">
                  We've streamlined the enrollment process for online banking. All you need is:
                </p>
                <ul className="list-disc pl-6 text-[16px] leading-[24px] space-y-2">
                  <li>Last Name</li>
                  <li>Social Security Number</li>
                  <li>Date of Birth</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col w-full">
          <Image
            src={feedLifestyleImg}
            alt="Customer Lifestyle"
            className="w-full rounded-[12px] mb-6 shadow-xl object-cover"
          />
        </div>
      </div>
    </PageLayout>
  );
}
