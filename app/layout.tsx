import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'DATA-XATA HOSTING COMPANY',
  description: 'Аренда выделенных серверов. Более 1278 конфигураций в 11 дата-центрах.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <div className="text-center bg-accent text-white text-14 leading-20 font-medium py-10 px-20">
          Закажи хостинг до конца карантина и получи домен в подарок! Супер предложения! Не пропусти!
        </div>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
