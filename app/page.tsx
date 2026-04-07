import HeroSection from "@/components/home/HeroSection";
import HomeFilter from "@/components/home/HomeFilter";
import HomeSearchResults from "@/components/home/HomeSearchResults";
import AboutUs from "@/components/home/AboutUs";
import OrderProcess from "@/components/home/OrderProcess";
import AboutClients from "@/components/home/AboutClients";
import HomeRating from "@/components/home/HomeRating";
import OurFeatures from "@/components/home/OurFeatures";
import PromoBanner from "@/components/ui/PromoBanner";
import ActionButtons from "@/components/ui/ActionButtons";
import { featuredServers } from "@/data/servers";

export default function HomePage() {
  return (
    <>
      {/* 1.2 Hero */}
      <HeroSection />

      {/* 1.3 Фильтр + таблица серверов */}
      <HomeFilter />
      <HomeSearchResults servers={featuredServers} />

      {/* 1.4 О компании */}
      <AboutUs />

      {/* 1.5 Шаги заказа */}
      <OrderProcess />

      {/* 1.6 Клиенты */}
      <AboutClients />

      {/* 1.9 Отзывы */}
      <HomeRating />

      {/* 1.8 Преимущества */}
      <OurFeatures />

      {/* 1.7 PromoBanner */}
      <PromoBanner
        ghostText="Хочу скидку!"
        text={"Оформи заказ в течение 10 минут\nи получи бонус $50 на счет!"}
        buttonLabel="Выбрать сервер"
        buttonHref="/server"
      />

      {/* 1.10 ActionButtons */}
      <ActionButtons
        buttons={[
          {
            label: "Пожаловаться директору!",
            href: "mailto:support@data-xata.com",
            iconBefore: "i-email",
            external: true,
          },
          {
            label: "Заработайте на нас!",
            href: "/affiliate",
            iconAfter: "i-arrow",
          },
        ]}
      />
    </>
  );
}
