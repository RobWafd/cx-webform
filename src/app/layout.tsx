import './globals.css';

export const metadata = {
  title: 'CX Webform',
  description: 'CX Webform built with Next.js',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

import { ClientStateProvider } from '../contexts/ClientStateContext';
import { Suspense } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
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



