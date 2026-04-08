import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: '404 — Страница не найдена | DATA-XATA',
};

export default function NotFound() {
  return (
    <html lang="ru">
      <body>
        <div className="text-center bg-accent text-white text-14 leading-20 font-medium py-10 px-20">
          Закажи хостинг до конца карантина и получи домен в подарок! Супер предложения! Не пропусти!
        </div>
        <Header />
        <main>
          <div className="min-h-[calc(100vh-20rem)] flex items-center">
            <Container>
              <nav className="flex items-center gap-8 mb-40" aria-label="Breadcrumb">
                <a href="/" className="text-secondary hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                </a>
                <span className="w-18 h-1 bg-secondary" />
                <span className="text-14 leading-20 font-normal text-secondary">Список статей</span>
                <span className="w-18 h-1 bg-secondary" />
                <span className="text-14 leading-20 font-normal text-secondary">404</span>
              </nav>

              <div className="flex flex-col desktop:flex-row items-center gap-40">
                {/* Illustration */}
                <div className="flex-shrink-0">
                  <img
                    src="/img/figma/404-illustration.svg"
                    alt="404 illustration"
                    width={308}
                    height={361}
                    className="object-contain"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-20 items-start">
                  <h1 className="text-65 leading-94 font-bold text-white">404</h1>
                  <h2 className="text-60 leading-87 font-medium text-white">Нет такой страницы</h2>
                  <p className="text-20 leading-27 font-normal text-secondary max-w-[55rem]">
                    Мы предлагаем более 1278 конфигураций выделенных серверов в 11 дата-центрах.
                  </p>
                  <a
                    href="/"
                    className="inline-flex items-center justify-center h-48 px-30 rounded-sm bg-accent hover:bg-accent-dark transition-colors text-16 leading-23 font-semibold text-white"
                  >
                    Вернуться
                  </a>
                </div>
              </div>
            </Container>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
