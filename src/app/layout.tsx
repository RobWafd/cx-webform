import './globals.css';

export const metadata = {
  title: 'CX Webform',
  description: 'CX Webform built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}



