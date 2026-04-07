import Link from "next/link";
import type { Server } from "@/types";
import ServerCard from "./ServerCard";

interface HomeSearchResultsProps {
  servers: Server[];
}

export default function HomeSearchResults({ servers }: HomeSearchResultsProps) {
  return (
    <div className="search-section hidden-xs">
      <div className="container">
        {servers.map((s) => (
          <ServerCard
            key={s.id}
            id={s.id}
            name={s.name}
            cpu={s.cpu}
            ram={s.ram}
            storage={s.storage}
            location={s.location}
            locationFlag={s.locationFlag}
            price={s.price}
            priceOld={s.priceOld}
            discount={s.discount}
            os={s.os}
            instant={s.instant}
          />
        ))}
        <div className="search-section-bottom text-center wrap-link">
          <Link href="/search" className="bold-link">Показать больше конфигураций</Link>
          <p>еще 1378+ шт от €6.00</p>
        </div>
      </div>
    </div>
  );
}
