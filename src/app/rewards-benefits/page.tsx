import type { Metadata } from 'next';
import Image from 'next/image';
import PageLayout from '../../components/PageLayout';
import { ogImage } from '../../utils/openGraph';
import PrimaryButton from '../../components/PrimaryButton';
import feedLifestyleImg from '../../assets/rewards.png';
import { Link as LinkIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Your Account Benefits | WaFd Bank',
  description: 'Explore the money-saving perks included with your WaFd checking account — fuel savings, phone protection, shopping discounts, and more.',
  openGraph: {
    title: "Don't Miss Out on Your Benefits",
    description: 'Fuel savings, phone protection, shopping discounts, and more — included with your account.',
    images: ogImage('/og/rewards.png', 'WaFd account rewards and benefits'),
  },
};

export default function RewardsBenefits() {
  return (
    <PageLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-start">
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-4xl font-bold text-wafd-dark mb-4">
            Don&apos;t Miss Out on Your Benefits!
          </h2>
          <p className="text-wafd-text mb-6 leading-relaxed text-lg">
            Have you tapped into the money saving perks that come with your checking account? Your benefits include:
          </p>
          <ul className="list-disc pl-5 text-wafd-text mb-10 leading-relaxed text-lg space-y-3">
            <li>Fuel Savings</li>
            <li>Mobile Phone Protection</li>
            <li>Shopping Discounts</li>
            <li>Travel and Leisure Discounts</li>
            <li>Identity Theft Monitoring and more</li>
          </ul>

          <PrimaryButton to="/access-rewards">
            VIEW REWARDS
          </PrimaryButton>

          <a href="https://www.wafdbank.com/personal-banking/rewards-checking-faq?utm_source=relay&utm_medium=sms&utm_campaign=ck_onboarding" className="flex justify-between items-center px-4 py-5 border-t border-b border-gray-200 text-wafd-dark font-medium no-underline hover:bg-gray-50 transition-colors mt-6 rounded">
            <span className="text-lg">Frequently Asked Question</span>
            <LinkIcon size={20} />
          </a>
        </div>

        <div className="flex flex-col w-full">
          <Image
            src={feedLifestyleImg}
            alt="Person pumping gas"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto rounded-[12px] mb-6 shadow-xl"
          />
        </div>
      </div>
    </PageLayout>
  );
}
