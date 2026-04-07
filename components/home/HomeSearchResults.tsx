import type { Server } from "@/types";
import ServerCard from "./ServerCard";

interface HomeSearchResultsProps {
  servers: Server[];
}

export default function HomeSearchResults({ servers }: HomeSearchResultsProps) {
  return (
    <section className="hidden md:block w-full py-[2rem]">
      <div className="container">
        {/* Server list */}
        <div className="flex flex-col gap-[1.2rem]">
          {servers.map((server) => (
            <ServerCard
              key={server.id}
              id={server.id}
              name={server.name}
              cpu={server.cpu}
              ram={server.ram}
              storage={server.storage}
              location={server.location}
              locationFlag={server.locationFlag}
              price={server.price}
              priceOld={server.priceOld}
              discount={server.discount}
              os={server.os}
              instant={server.instant}
            />
          ))}
        </div>

        {/* Show more */}
        <div className="flex items-center gap-[1.6rem] mt-[2.4rem] pt-[2.4rem]" style={{ borderTop: "1px solid rgba(131,154,218,0.2)" }}>
          <a href="/search" className="bold-link">
            Показать больше конфигураций
          </a>
          <span className="text-[1.4rem]" style={{ color: "#839ada" }}>
            еще 1378+ шт от €6.00
          </span>
        </div>
      </div>
    </section>
  );
}
