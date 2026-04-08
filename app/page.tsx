import HeroSection from '@/components/home/HeroSection';
import FilterSection from '@/components/home/FilterSection';
import HomeSearchResults from '@/components/home/HomeSearchResults';
import AboutUs from '@/components/home/AboutUs';
import OrderProcess from '@/components/home/OrderProcess';
import OurFeatures from '@/components/home/OurFeatures';
import AboutClients from '@/components/home/AboutClients';
import HomeRating from '@/components/home/HomeRating';
import LetsStart from '@/components/home/LetsStart';
import { servers } from '@/data/servers';
import { features } from '@/data/features';
import { orderSteps } from '@/data/process';
import { clientCards } from '@/data/clients';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FilterSection />
      <HomeSearchResults servers={servers} />
      <AboutUs />
      <OrderProcess steps={orderSteps} />
      <OurFeatures features={features} />
      <AboutClients cards={clientCards} />
      <HomeRating />
      <LetsStart />
    </>
  );
}
