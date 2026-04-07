import HeroSection from "@/components/home/HeroSection";
import HomeFilter from "@/components/home/HomeFilter";
import HomeSearchResults from "@/components/home/HomeSearchResults";
import OrderProcess from "@/components/home/OrderProcess";
import OurFeatures from "@/components/home/OurFeatures";
import AboutClients from "@/components/home/AboutClients";
import HomeRating from "@/components/home/HomeRating";
import LetsStart from "@/components/home/LetsStart";
import AboutUs from "@/components/home/AboutUs";
import { featuredServers } from "@/data/servers";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeFilter />
      <HomeSearchResults servers={featuredServers} />
      <div className="container">
        <OrderProcess />
      </div>
      <div className="container">
        <OurFeatures />
      </div>
      <AboutClients />
      <HomeRating />
      <div className="container">
        <LetsStart />
      </div>
      <div className="container">
        <AboutUs />
      </div>
    </>
  );
}
