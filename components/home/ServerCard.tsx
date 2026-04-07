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
    <div
      className="border-block flex flex-col md:flex-row items-start md:items-center gap-[2rem] md:gap-[1.6rem] w-full"
      style={{
        background: "rgba(2,9,131,0.15)",
        transition: "border-color 0.2s",
      }}
    >
      {/* Location */}
      <div className="flex items-center gap-[0.8rem] min-w-[14rem]">
        <span className={`icons i-${locationFlag} text-[2.4rem]`} />
        <span className="text-[1.3rem] font-medium" style={{ color: "#839ada" }}>
          {location}
        </span>
      </div>

      {/* Server info */}
      <div className="flex-1 flex flex-col gap-[0.6rem]">
        <div className="flex items-center gap-[0.8rem] flex-wrap">
          <span className="text-[1.6rem] font-semibold text-white">{name}</span>
          {instant && (
            <span
              className="text-[1.1rem] font-medium px-[0.8rem] py-[0.3rem] rounded-[0.3rem]"
              style={{ background: "rgba(39,227,92,0.15)", color: "#27e35c" }}
            >
              Мгновенно
            </span>
          )}
        </div>
        <span className="text-[1.3rem]" style={{ color: "#839ada" }}>
          {cpu}
        </span>
        <div className="flex items-center gap-[0.8rem] flex-wrap">
          <span
            className="text-[1.2rem] font-medium px-[1rem] py-[0.3rem] rounded-[0.3rem]"
            style={{ background: "rgba(33,90,238,0.2)", color: "#839ada", border: "1px solid rgba(131,154,218,0.2)" }}
          >
            RAM {ram} GB
          </span>
          <span
            className="text-[1.2rem] font-medium px-[1rem] py-[0.3rem] rounded-[0.3rem]"
            style={{ background: "rgba(33,90,238,0.2)", color: "#839ada", border: "1px solid rgba(131,154,218,0.2)" }}
          >
            {storage}
          </span>
          {os.slice(0, 2).map((osName) => (
            <span
              key={osName}
              className="text-[1.2rem] font-medium px-[1rem] py-[0.3rem] rounded-[0.3rem]"
              style={{ background: "rgba(33,90,238,0.1)", color: "rgba(131,154,218,0.7)", border: "1px solid rgba(131,154,218,0.1)" }}
            >
              {osName}
            </span>
          ))}
        </div>
      </div>

      {/* Price & CTA */}
      <div className="flex flex-row md:flex-col items-center md:items-end gap-[1.2rem] md:gap-[0.6rem] md:text-right">
        <div className="flex flex-col md:items-end gap-[0.2rem]">
          <div className="flex items-center gap-[1rem]">
            <span className="text-[2.2rem] font-semibold text-white">
              €{price.toFixed(2)}
            </span>
            {discount && discount > 0 && (
              <span
                className="text-[1.1rem] font-semibold px-[0.7rem] py-[0.3rem] rounded-[0.3rem]"
                style={{ background: "rgba(39,227,92,0.15)", color: "#27e35c" }}
              >
                -{discount}%
              </span>
            )}
          </div>
          {priceOld && (
            <span
              className="text-[1.3rem] line-through"
              style={{ color: "rgba(131,154,218,0.5)" }}
            >
              €{priceOld.toFixed(2)}
            </span>
          )}
          <span className="text-[1.1rem]" style={{ color: "rgba(131,154,218,0.6)" }}>
            /месяц
          </span>
        </div>
        <a
          href={`/server/${id}`}
          className="btn btn-warning text-[1.4rem] px-[2rem] py-[1rem] whitespace-nowrap"
        >
          Заказать
        </a>
      </div>
    </div>
  );
}
