import Link from "next/link";
import type { Server } from "@/types";
import ServerCard from "./ServerCard";

interface HomeSearchResultsProps {
  servers: Server[];
}

export default function HomeSearchResults({ servers }: HomeSearchResultsProps) {
  return (
    <div className="server-table-section">
      <div className="container">

        {/* Шапка таблицы — только desktop */}
        <div className="server-table-head hidden-xs">
          <span className="server-table-head__col server-table-head__col--name">Сервер</span>
          <span className="server-table-head__col server-table-head__col--product">Продукт</span>
          <span className="server-table-head__col server-table-head__col--ram">RAM</span>
          <span className="server-table-head__col server-table-head__col--disk">Место на диске</span>
          <span className="server-table-head__col server-table-head__col--price">
            Цена в месяц
          </span>
        </div>

        {/* Строки */}
        <div className="server-rows-wrap">
          {servers.map((s, i) => (
            <ServerCard
              key={s.id}
              id={s.id}
              name={s.name}
              cpu={s.cpu}
              ram={s.ram as number}
              storage={s.storage as { ssd?: string; hdd?: string } | string}
              location={s.location as string}
              locationFlag={s.locationFlag as string}
              bandwidth={s.bandwidth}
              locationStorage={s.locationStorage}
              price={s.price}
              priceOld={s.priceOld}
              discount={s.discount}
              os={(s.os ?? []) as string[]}
              instant={s.instant}
              active={i === 1}
            />
          ))}
        </div>

        {/* Показать больше */}
        <div className="server-table-more">
          <Link href="/search" className="server-table-more__link">
            Показать больше конфигураций
          </Link>
          <p className="server-table-more__hint">еще 1378шт от €7.89</p>
        </div>

      </div>
    </div>
  );
}
