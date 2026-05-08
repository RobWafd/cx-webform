import type { Metadata } from 'next';
import Image from 'next/image';
import PageLayout from '../../components/PageLayout';
import { ogImage } from '../../utils/openGraph';
import PrimaryButton from '../../components/PrimaryButton';
import lifestyleImg from '../../assets/voice_banking.png';

export const metadata: Metadata = {
  title: 'Voice Banking | WaFd Bank',
  description: 'Use your unique voice to check balances and transfer money between WaFd accounts. Enroll in minutes.',
  openGraph: {
    title: 'Set Up Voice Banking',
    description: 'Check balances and transfer money hands-free. Enroll in minutes.',
    images: ogImage('/og/voice_banking.png', 'WaFd voice banking'),
  },
};

export default function VoiceBanking() {
  return (
    <PageLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center">
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-4xl mb-6 font-bold text-wafd-dark leading-tight">
            Use Your Unique Voice to do Your Banking!
          </h2>
          <p className="text-wafd-text mb-6 leading-relaxed text-lg">
            Check your balance, transfer money between WaFd accounts and more!
          </p>
          <p className="text-wafd-dark mb-10 leading-relaxed font-semibold text-xl">
            Enroll in minutes.
          </p>

          <PrimaryButton href="tel:18003249375">
            SET UP VOICE BANKING
          </PrimaryButton>
        </div>

        <div className="flex flex-col w-full">
          <Image
            src={lifestyleImg}
            alt="Person using voice banking on phone"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto rounded-[12px] mb-6 shadow-xl"
          />
        </div>
      </div>
    </PageLayout>
  );
}
