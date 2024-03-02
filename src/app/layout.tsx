import { Suspense } from 'react';
import { Roboto_Condensed } from 'next/font/google';

import Header from './_components/header';
import './_styles/global.css';

const robotoCondensed = Roboto_Condensed({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Marvel characters',
  description: 'An app to view Marvel characters',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={robotoCondensed.className}>
      <body>
        <Header />
        <Suspense>
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
