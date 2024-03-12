import { Suspense } from 'react';
import { Roboto_Condensed } from 'next/font/google';

import './_styles/global.css';
import Header from './_components/header';
import Footer from './_components/footer';

const robotoCondensed = Roboto_Condensed({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Marvel characters',
  description: 'Explore the Marvel universe and its characters.',
  keywords: ['marvel', 'characters', 'comics'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={robotoCondensed.className}>
      <body>
        <Header />
        <Suspense>
          <main>{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
