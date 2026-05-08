"use client";
import PageLayout from '../../components/PageLayout';
import AppDownloads from '../../components/AppDownloads';
import feedLifestyleImg from '../../assets/welcome.png';
import { useDynamicText } from '../../utils/dynamicText';
import Image from 'next/image';

export default function NewAccountDetails() {
  const { parseText } = useDynamicText();

  const dynamicAccountLast4 = parseText("@{input_last4digits}");
  const dynamicAccountType = parseText("@{input_productname}");

  return (
    <PageLayout>
      <div className="flex flex-col w-full max-w-md mx-auto items-center">

        <Image
          src={feedLifestyleImg}
          alt="Customer using mobile app"
          className="w-full h-auto mb-8 shadow-sm"
        />

        <div className="w-full text-left mb-8">
          <h2 className="text-wafd-dark font-bold text-[18px] leading-[24px] mb-4">
            Your New Account Details
          </h2>

          <div className="w-full border border-gray-300 flex flex-col">
            <div className="flex w-full border-b border-gray-300">
              <div className="flex-1 p-2 font-semibold text-[14px] text-wafd-dark border-r border-gray-300">
                Account Ending in:
              </div>
              <div className="flex-1 p-2 text-[14px] text-wafd-dark">
                {dynamicAccountLast4}
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex-1 p-2 font-semibold text-[14px] text-wafd-dark border-r border-gray-300">
                Account Type:
              </div>
              <div className="flex-1 p-2 text-[14px] text-wafd-dark">
                {dynamicAccountType}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-left mb-6">
          <h3 className="text-wafd-dark font-bold text-[16px] leading-[22px] mb-3">
            Download the WaFd App
          </h3>
          <p className="text-wafd-dark text-[15px] leading-[22px]">
            Track your spending, deposit checks and pay friends with Zelle&reg;.
          </p>
        </div>

        <AppDownloads campaign="new_account_onboarding" />

      </div>
    </PageLayout>
  );
}
