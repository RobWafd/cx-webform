"use client";
import React from 'react';
import PageLayout from '../../components/PageLayout';
import PrimaryButton from '../../components/PrimaryButton';
import feedLifestyleImg from '../../assets/feed_lifestyle.png';
import { ChevronRight } from 'lucide-react';
import { useDynamicText } from '../../utils/dynamicText';
import Image from 'next/image';

export default function NewAccountDetails() {
  const { parseText } = useDynamicText();

  // Dynamic values injected via parseText
  const dynamicAccountLast4 = parseText("@{input_last4digits}");
  const dynamicAccountType = parseText("@{input_productname}");

  return (
    <PageLayout>
      <div className="flex flex-col w-full max-w-md mx-auto items-center">
        
        {/* Lifestyle Image */}
        <Image 
          src={feedLifestyleImg} 
          alt="Customer using mobile app" 
          className="w-full h-auto mb-8 shadow-sm"
        />

        {/* Account Details Section */}
        <div className="w-full text-left mb-8">
          <h2 className="text-[#202324] font-bold text-[18px] leading-[24px] mb-4">
            Your New Account Details
          </h2>
          
          <div className="w-full border border-gray-300 flex flex-col">
            <div className="flex w-full border-b border-gray-300">
              <div className="flex-1 p-2 font-semibold text-[14px] text-[#202324] border-r border-gray-300">
                Account Ending in:
              </div>
              <div className="flex-1 p-2 text-[14px] text-[#202324]">
                {dynamicAccountLast4}
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex-1 p-2 font-semibold text-[14px] text-[#202324] border-r border-gray-300">
                Account Type:
              </div>
              <div className="flex-1 p-2 text-[14px] text-[#202324]">
                {dynamicAccountType}
              </div>
            </div>
          </div>
        </div>

        {/* Marketing Text */}
        <div className="w-full text-left mb-6">
          <h3 className="text-[#202324] font-bold text-[16px] leading-[22px] mb-3">
            Download the WaFd App
          </h3>
          <p className="text-[#202324] text-[15px] leading-[22px]">
            Track your spending, deposit checks and pay friends with Zelle&reg;.
          </p>
        </div>

        {/* CTA Button */}
        <PrimaryButton href="https://online.wafdbank.com/index.html?utm_source=relay&utm_medium=sms&utm_campaign=checking_onboarding">
          <div className="flex items-center gap-2">
            <span>DOWNLOAD THE APP</span>
            <ChevronRight size={20} className="text-white" />
          </div>
        </PrimaryButton>

        {/* Footer Disclaimer */}
        <div className="w-full bg-gray-100 p-4 rounded text-left mt-2">
          <p className="text-[#555] text-[11px] leading-[15px]">
            This is a service message from WaFd Bank.<br />
            WaFd Bank | 425 Pike Street Seattle, WA 98101<br />
            &copy;2025 WaFd Bank. All Rights Reserved<br />
            <a href="https://www.wafdbank.com/privacy" className="text-[#555] underline">Privacy</a> &amp; <a href="https://www.wafdbank.com/terms" className="text-[#555] underline">Terms of Use</a><br />
            Member FDIC
          </p>
          <p className="text-[#555] text-[11px] leading-[15px] mt-4">
            03/31/2025 01:15 PM
          </p>
        </div>

      </div>
    </PageLayout>
  );
}
