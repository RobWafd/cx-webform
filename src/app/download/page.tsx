import type { Metadata } from 'next';
import PageLayout from '../../components/PageLayout';
import AppDownloads from '../../components/AppDownloads';
import { ogImage } from '../../utils/openGraph';

export const metadata: Metadata = {
  title: 'Download the WaFd App | WaFd Bank',
  description: 'Download the WaFd mobile banking app for iOS and Android to manage your account on the go.',
  openGraph: {
    title: 'Download the WaFd App',
    description: 'Available on the App Store and Google Play. Manage your account on the go.',
    images: ogImage('/og/banner.png', 'WaFd Bank mobile app'),
  },
};

export default function Download() {
  return (
    <PageLayout>
      <div className="flex flex-col max-w-2xl mx-auto w-full pt-8 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold text-wafd-dark mb-6">Mobile App Download</h2>
        <p className="text-wafd-text mb-10 leading-relaxed text-lg font-medium">
          Tap below to directly download the WaFd mobile app for your device.
        </p>

        <div className="flex justify-center md:justify-start w-full mt-4">
          <AppDownloads campaign="app_download" />
        </div>
      </div>
    </PageLayout>
  );
}



