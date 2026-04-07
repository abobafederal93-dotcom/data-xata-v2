export default function HomeRating() {
  return (
    <div className="rating-section bg-orange">
      <div className="container">
        <div className="rating-section-image hidden-xs hidden-sm">
          <img src="/img/rating-section-image.png" alt="" className="img-responsive" />
        </div>
        <div className="row">
          <div className="col-md-7">
            <div className="title">
              <div className="title-text">Клиенты считают, что</div>
              Наш сервис просто супер!
            </div>
            <span className="rating-section__subtitle">Нас оценивают на ведущих рейтингах</span>
            <div className="flex-block vertical-center rating-section-row">
              <div className="rating-num rating-num-white">4.7</div>
              <div className="h3">из</div>
              <div className="rating-num">5</div>
            </div>
            <div className="rating-section-logos flex-block flex-wrap">
              <img src="/img/rating-section-logo-1.png" alt="" width={136} />
              <img src="/img/rating-section-logo-2.png" alt="" width={100} />
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .rating-section__subtitle {
          display: block;
          font-weight: 500;
          margin: 2.6rem 0 1.4rem;
          color: #fff;
          font-size: 2rem;
          line-height: 2.9rem;
        }
      `}</style>
    </div>
  );
}
