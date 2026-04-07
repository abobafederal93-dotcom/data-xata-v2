import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ActionBar from "@/components/ui/ActionBar";

export const metadata: Metadata = {
  title: "DATA-XATA HOSTING COMPANY",
  description: "Аренда выделенных серверов. Более 1278 конфигураций в 11 дата-центрах.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <ActionBar text="Закажи хостинг до конца карантина и получи домен в подарок! Супер предложения! Не пропусти!" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
