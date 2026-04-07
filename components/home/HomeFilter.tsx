import Link from "next/link";

interface HomeFilterProps {
  ramMin?: number;
  ramMax?: number;
  priceMin?: number;
  priceMax?: number;
}

export default function HomeFilter({
  ramMin = 0,
  ramMax = 128,
  priceMin = 6,
  priceMax = 500,
}: HomeFilterProps) {
  return (
    <div className="container">
      <div id="instant" />
      <div className="title">
        <div className="title-text">Горячие серверы</div>
        Давайте подберем вам сервер
      </div>
      <form action="#">
        <div className="search-block flex-block wrap-xs">
          <div className="search-block-item dropdown">
            <div className="search-block__header">
              <div className="search-block-item-text">Ram</div>
              <input className="input-inline text-right" type="text" readOnly value={ramMin} />
              <span>-</span>
              <input className="input-inline" type="text" readOnly value={ramMax} />
              <div className="search-block-item-text">GB</div>
            </div>
          </div>
          <div className="search-block-item">
            <div className="dropdown search-select">
              <div className="search-block-item-text search-block-item-text-select">Диски</div>
              <div className="jq-selectbox__select">
                <div className="jq-selectbox__select-text">SSD</div>
                <div className="jq-selectbox__trigger">
                  <div className="jq-selectbox__trigger-arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="search-block-item dropdown">
            <div className="flex-block search-block__header">
              <div className="search-block-item-text">Цена</div>
              <input className="input-inline text-right" type="text" readOnly value={priceMin} />
              <span>-</span>
              <input className="input-inline" type="text" readOnly value={priceMax} />
              <div className="search-block-item-text">€</div>
            </div>
          </div>
          <Link href="/search" className="btn btn-warning btn-block-xs">Поиск</Link>
        </div>
        <p className="text-right text-medium-bold hidden-xs"><Link href="/search">Больше опций</Link></p>
      </form>
    </div>
  );
}
