import type { Metadata } from 'next';
import Image from 'next/image';
import PageLayout from '../../components/PageLayout';
import { ogImage } from '../../utils/openGraph';
import AppDownloads from '../../components/AppDownloads';
import PrimaryButton from '../../components/PrimaryButton';
import EnrollmentAccordion from '../../components/EnrollmentAccordion';
import heroImg from '../../assets/hero.png';

export const metadata: Metadata = {
  title: 'Enroll in Online Banking | WaFd Bank',
  description: 'Enroll in WaFd online and mobile banking to view balances, pay bills, and send money with Zelle.',
  openGraph: {
    title: 'Enroll in Online Banking',
    description: 'Quick and simple enrollment. View balances, pay bills, and send money with Zelle.',
    images: ogImage('/og/hero.png', 'WaFd mobile app'),
  },
};

export default function Enrollment() {
  return (
    <PageLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-start">

        <div className="flex flex-col">
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

          <EnrollmentAccordion />
        </div>

        <div className="flex flex-col w-full">
          <Image
            src={heroImg}
            alt="Mobile App View"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto rounded-[12px] mb-6 shadow-xl"
          />
        </div>

      </div>
    </PageLayout>
  );
}
