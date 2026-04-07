interface HomeFilterProps {
  ramMin?: number;
  ramMax?: number;
  priceMin?: number;
  priceMax?: number;
  diskType?: string;
}

export default function HomeFilter({
  ramMin = 0,
  ramMax = 100,
  priceMin = 6,
  priceMax = 500,
  diskType = "SSD",
}: HomeFilterProps) {
  return (
    <section className="w-full py-[4rem]">
      <div className="container">
        {/* Title block */}
        <div className="flex flex-col gap-[0.8rem] mb-[3.2rem]">
          <span className="title-text">Горячие серверы</span>
          <h2 className="title" style={{ margin: 0 }}>
            Давайте подберем вам сервер
          </h2>
        </div>

        {/* Search bar */}
        <div
          className="flex flex-col md:flex-row items-stretch md:items-center rounded-[0.6rem] overflow-hidden"
          style={{ border: "1px solid rgba(131,154,218,0.2)", background: "rgba(2,9,131,0.3)" }}
        >
          {/* RAM block */}
          <div
            className="flex flex-col justify-center px-[2rem] py-[1.6rem] flex-1"
            style={{ borderRight: "1px solid rgba(131,154,218,0.2)" }}
          >
            <span className="text-[1.2rem] font-medium uppercase tracking-wider" style={{ color: "#839ada" }}>
              Ram
            </span>
            <span className="text-[1.6rem] font-medium text-white mt-[0.4rem]">
              {ramMin}–{ramMax} GB
            </span>
          </div>

          {/* Disk type block */}
          <div
            className="flex flex-col justify-center px-[2rem] py-[1.6rem] flex-1"
            style={{ borderRight: "1px solid rgba(131,154,218,0.2)" }}
          >
            <span className="text-[1.2rem] font-medium uppercase tracking-wider" style={{ color: "#839ada" }}>
              Диски
            </span>
            <div className="flex items-center gap-[0.8rem] mt-[0.4rem]">
              <span className="text-[1.6rem] font-medium text-white">{diskType}</span>
              <span className="icons i-caret-sm text-[1rem]" style={{ color: "#839ada" }} />
            </div>
          </div>

          {/* Price block */}
          <div
            className="flex flex-col justify-center px-[2rem] py-[1.6rem] flex-1"
            style={{ borderRight: "1px solid rgba(131,154,218,0.2)" }}
          >
            <span className="text-[1.2rem] font-medium uppercase tracking-wider" style={{ color: "#839ada" }}>
              Цена
            </span>
            <span className="text-[1.6rem] font-medium text-white mt-[0.4rem]">
              €{priceMin} – €{priceMax}
            </span>
          </div>

          {/* Search button */}
          <div className="flex items-center px-[1.6rem] py-[1.6rem] md:py-0">
            <a href="/search" className="btn btn-warning w-full md:w-auto text-[1.6rem] px-[3.2rem] py-[1.5rem]">
              Поиск
            </a>
          </div>
        </div>

        {/* More options link */}
        <div className="hidden-xs flex justify-end mt-[1.2rem]">
          <a
            href="/search"
            className="text-[1.4rem] font-medium hover:text-[#ff8311] transition-colors"
            style={{ color: "#839ada" }}
          >
            Больше опций →
          </a>
        </div>
      </div>
    </section>
  );
}
