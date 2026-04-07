import Link from "next/link";

interface ServerCardProps {
  id: string;
  name: string;
  cpu: string;
  ram: number;
  storage: { ssd?: string; hdd?: string } | string;
  location: string;
  locationFlag: string;
  bandwidth?: string;
  locationStorage?: string;
  price: number;
  priceOld?: number;
  discount?: number;
  os: string[];
  instant?: boolean;
  active?: boolean;
}

export default function ServerCard({
  id,
  name,
  cpu,
  ram,
  storage,
  location,
  locationFlag,
  bandwidth,
  locationStorage,
  price,
  priceOld,
  discount,
  os,
  instant,
  active,
}: ServerCardProps) {
  return (
    <div className={`server-row${active ? " server-row--active" : ""}`}>
      {/* Основная строка */}
      <div className="server-row__main">

        {/* Колонка: Сервер (флаг + название + локация) */}
        <div className="server-col server-col--name">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/img/icons/i-${locationFlag}.svg`}
            width={24}
            height={14}
            alt={location}
            className="server-col__flag"
          />
          <div className="server-col__name-wrap">
            <span className="server-col__name">{name}</span>
            <span className="server-col__sub">
              <span className="icons i-map" />
              {location}{bandwidth ? ` • ${bandwidth}` : ""}{locationStorage ? ` • ${locationStorage}` : ""}
            </span>
          </div>
        </div>

        {/* Колонка: Продукт (тип) */}
        <div className="server-col server-col--product">
          <span className="icons i-server" />
          <span>{os[0] ?? "VPS"}</span>
        </div>

        {/* Колонка: RAM */}
        <div className="server-col server-col--ram">
          <span className="icons i-memory" />
          <span>{ram} GB</span>
        </div>

        {/* Колонка: Диски */}
        <div className="server-col server-col--disk">
          <span className="icons i-hdd" />
          <div className="server-col__storage">
            {typeof storage === "string" ? (
              <span>{storage}</span>
            ) : (
              <>
                {storage.ssd && <span>SSD: {storage.ssd}</span>}
                {storage.hdd && <span>HDD: {storage.hdd}</span>}
              </>
            )}
          </div>
        </div>

        {/* Колонка: Цена */}
        <div className="server-col server-col--price">
          {discount && discount > 0 && (
            <span className="server-col__discount">-{discount}%</span>
          )}
          {priceOld && (
            <span className="server-col__price-old">€{priceOld.toFixed(2)}</span>
          )}
          <span className="server-col__price">€{price.toFixed(2)}</span>
          <span className="server-col__free-install">Бесплатная установка</span>
          {instant && (
            <span className="server-col__instant">Доступ через 3-5 мин</span>
          )}
        </div>

      </div>

      {/* Расширенный блок при active */}
      {active && (
        <div className="server-row__expanded">
          <div className="server-row__actions">
            <button className="server-row__action-btn" type="button">
              <span className="icons i-star" />
              Добавить в избранное
            </button>
            <button className="server-row__action-btn" type="button">
              <span className="icons i-compare" />
              Сравнить с конкурентами
            </button>
            <Link href={`/server/${id}`} className="server-row__action-btn">
              <span className="icons i-info" />
              Смотреть подробности
            </Link>
            <Link href={`/order?id=${id}`} className="btn btn-warning server-row__order-btn">
              Заказать
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
