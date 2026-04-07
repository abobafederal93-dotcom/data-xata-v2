import Link from "next/link";

export default function HomeFilter() {
  return (
    <section className="filter-section" id="filter">
      <div className="container">

        {/* Section heading */}
        <div className="section-heading">
          <span className="section-ghost">Наши сервера</span>
          <h2 className="section-title">Давайте подберем вам сервер</h2>
        </div>

        {/* Filter bar */}
        <div className="filter-bar">
          <div className="filter-field">
            <span className="filter-field__label">Ram</span>
            <span className="filter-field__value">4-768 GB</span>
          </div>
          <div className="filter-field">
            <span className="filter-field__label">Диски</span>
            <span className="filter-field__value">Все</span>
            <span className="icons i-caret filter-field__caret" aria-hidden="true" />
          </div>
          <div className="filter-field">
            <span className="filter-field__label">Цена</span>
            <span className="filter-field__value">7.89-920 €</span>
          </div>
          <Link href="/search" className="btn btn-warning filter-bar__btn">
            Поиск
          </Link>
        </div>

        {/* Больше опций */}
        <div className="filter-more hidden-xs">
          <Link href="/search" className="filter-more__link">
            Больше опций
          </Link>
        </div>

      </div>
    </section>
  );
}
