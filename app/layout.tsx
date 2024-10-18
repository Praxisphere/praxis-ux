

import 'swiper/css/bundle';
import AosAnimation from '@/components/Layout/AosAnimation';
import BackToTop from '@/components/Layout/BackToTop';
import TosterProvider from '@/providers/TosterProvider';
import {Open_Sans, Lora, Playfair_Display, Source_Sans_3} from 'next/font/google';
import localFont from 'next/font/local';
// Globals Styles
import '@/styles/navbar.css';
import '@/styles/globals.css';


const futura = localFont({
  src: './../public/fonts/futura_light.ttf',
  display: 'swap',
  variable: '--font-futura',
})

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

const sourceSans = Source_Sans_3({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans',
});

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

export const metadata = {
  title: 'Praxisphere - Empathy Beyond',
  description: 'Praxisphere landing page',
};

export default function RootLayout({children}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${sourceSans.variable} ${playfair.variable} ${futura.variable} ${lora.variable}`}>

        <TosterProvider />
        {children}
        {/* AosAnimation */}
        <AosAnimation />
        {/* BackToTop */}
        <BackToTop />
      </body>
    </html>
  );
}
