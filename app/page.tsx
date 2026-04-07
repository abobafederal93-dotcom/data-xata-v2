import { servers } from '../data/servers';
import { features } from '../data/features';
import { orderSteps } from '../data/process';
import { clientCards } from '../data/clients';
import HeroSection from '../components/home/HeroSection';
import FilterSection from '../components/home/FilterSection';
import ServerTable from '../components/home/ServerTable';
import AboutUs from '../components/home/AboutUs';
import AboutClients from '../components/home/AboutClients';
import OrderProcess from '../components/home/OrderProcess';
import OurFeatures from '../components/home/OurFeatures';
import HomeRating from '../components/home/HomeRating';
import LetsStart from '../components/home/LetsStart';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FilterSection />
      <ServerTable servers={servers} activeId={servers[0]?.id} />
      <AboutUs />
      <AboutClients cards={clientCards} />
      <OrderProcess steps={orderSteps} />
      <OurFeatures features={features} />
      <HomeRating />
      <LetsStart />
    </>
  );
}
