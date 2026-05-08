import './globals.css';
import { Open_Sans } from 'next/font/google';
import { ClientStateProvider } from '../contexts/ClientStateContext';
import { Suspense } from 'react';
import { ogImage } from '../utils/openGraph';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')
  ),
  title: 'WaFd Bank | Welcome',
  description: 'Welcome to WaFd Bank. Manage your new account with our mobile app.',
  openGraph: {
    siteName: 'WaFd Bank',
    type: 'website',
    images: ogImage('/og/banner.png', 'WaFd Bank'),
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <div id="root">
          <Suspense fallback={<div>Loading Experience...</div>}>
            <ClientStateProvider>
              {children}
            </ClientStateProvider>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
