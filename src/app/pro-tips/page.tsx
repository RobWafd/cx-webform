import type { Metadata } from 'next';
import Image from 'next/image';
import PageLayout from '../../components/PageLayout';
import { ogImage } from '../../utils/openGraph';
import PrimaryButton from '../../components/PrimaryButton';
import feedLifestyleImg from '../../assets/tips.png';

export const metadata: Metadata = {
  title: 'Banking Pro Tips | WaFd Bank',
  description: 'Set up alerts, link your accounts, and manage your cards to get the most out of WaFd mobile banking.',
  openGraph: {
    title: 'Banking Pro Tips',
    description: 'Set up alerts, link accounts, and manage your cards — banking made easy.',
    images: ogImage('/og/tips.png', 'WaFd banking tips'),
  },
};

export default function ProTips() {
  return (
    <PageLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-start">
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-4xl font-bold text-wafd-dark mb-4">
            Pro Tips
          </h2>
          <p className="text-wafd-text mb-8 leading-relaxed text-xl">
            Banking just got a whole lot easier.
          </p>
          <ul className="list-none text-wafd-text mb-12 leading-relaxed space-y-6 text-lg">
            <li className="flex flex-col border-b border-gray-100 pb-6">
              <span className="font-bold text-wafd-dark mb-1">Set Up Alerts</span>
              <span className="text-wafd-text text-[16px] leading-[24px]">Stay on top of your finances with notifications on low balances, large expenses and more.</span>
            </li>
            <li className="flex flex-col border-b border-gray-100 pb-6">
              <span className="font-bold text-wafd-dark mb-1">Link Your Accounts</span>
              <span className="text-wafd-text text-[16px] leading-[24px]">Connect accounts from any bank to see everything in one place.</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold text-wafd-dark mb-1">Manage Cards</span>
              <span className="text-wafd-text text-[16px] leading-[24px]">Lock/unlock it as needed and update your PIN.</span>
            </li>
          </ul>

          <PrimaryButton to="/login-instructions">
            GET STARTED
          </PrimaryButton>
        </div>

        <div className="flex flex-col w-full">
          <Image
            src={feedLifestyleImg}
            alt="Person paying with card"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto rounded-[12px] mb-6 shadow-xl"
          />
        </div>
      </div>
    </PageLayout>
  );
}
