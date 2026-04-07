import Link from "next/link";

interface ServerCardProps {
  id: string;
  name: string;
  cpu: string;
  ram: number;
  storage: string;
  location: string;
  locationFlag: string;
  price: number;
  priceOld?: number;
  discount?: number;
  os: string[];
  instant?: boolean;
}

export default function ServerCard({
  id,
  name,
  cpu,
  ram,
  storage,
  location,
  locationFlag,
  price,
  priceOld,
  discount,
  os,
  instant,
}: ServerCardProps) {
  return (
    <div className="item-block">
      <div className="row">
        <div className="col-xs-3 item-block-name">
          <span
            className="icons i-flag"
            style={{ background: `url(/img/icons/i-${locationFlag}.svg) no-repeat center / contain` }}
          />
          {location}
        </div>
        <div className="col-xs-4 item-block-specs">
          <div className="item-block-spec">{name}</div>
          <div className="item-block-spec">{cpu}</div>
          <div className="item-block-spec">RAM {ram} GB &nbsp;|&nbsp; {storage}</div>
          <div className="item-block-spec item-block-os">
            {os.map((osName) => (
              <span key={osName} className="item-block-os-tag">{osName}</span>
            ))}
          </div>
          {instant && <div className="item-block-instant">Мгновенно</div>}
        </div>
        <div className="item-block-footer">
          <div className="item-block-price">
            {discount && discount > 0 && (
              <span className="item-block-discount">-{discount}%</span>
            )}
            {priceOld && (
              <span className="item-block-price-old">€{priceOld.toFixed(2)}</span>
            )}
            <span className="item-block-price-current">€{price.toFixed(2)}</span>
          </div>
          <Link href={`/server/${id}`} className="btn btn-warning">Заказать</Link>
        </div>
      </div>
    </div>
  );
}
