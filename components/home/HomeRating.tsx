export default function HomeRating() {
  return (
    <section className="rating-section">

      {/* Фоновое изображение справа */}
      <div className="rating-section__img" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/rating-section-image.png" alt="" width={756} height={665} />
      </div>

      <div className="container rating-section__inner">
        <div className="rating-section__content">

          {/* Ghost + Title */}
          <div className="section-heading">
            <span className="section-ghost rating-ghost">Клиенты считают, что</span>
            <h2 className="section-title">Наш сервис просто супер!</h2>
          </div>

          {/* Subtitle */}
          <p className="rating-section__subtitle">Нас оценивают на ведущих рейтингах</p>

          {/* Оценка: 4.7 из 5 */}
          <div className="rating-section__score">
            <span className="rating-section__num rating-section__num--accent">4.7</span>
            <span className="rating-section__of">из</span>
            <span className="rating-section__num">5</span>
          </div>

          {/* Логотипы рейтингов */}
          <div className="rating-section__logos">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/rating-section-logo-1.png" alt="Рейтинг хостингов" width={136} height={20} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/rating-section-logo-2.png" alt="xTOP" width={100} height={20} />
          </div>

        </div>
      </div>
    </section>
  );
}
