import Container from '../ui/Container';

export default function HomeRating() {
  return (
    <section className="bg-gradient-to-r from-accent to-accent-dark min-h-[47.9rem] overflow-hidden">
      <Container>
        <div className="grid desktop:grid-cols-[1fr_auto] items-center min-h-[47.9rem] gap-30">
          <div className="py-60">
            <span className="block text-55 leading-65 font-bold text-white opacity-[0.15] -mb-49 whitespace-nowrap pointer-events-none select-none">
              Клиенты считают, что
            </span>
            <h2 className="text-40 leading-58 font-medium text-white mb-20">
              Наш сервис просто супер!
            </h2>
            <p className="text-20 leading-27 text-white mb-30">
              Нас оценивают на ведущих рейтингах
            </p>
            <div className="flex items-baseline gap-12 mb-30">
              <span className="text-65 leading-94 font-medium text-accent">4.7</span>
              <span className="text-65 leading-94 font-medium text-white">из</span>
              <span className="text-65 leading-94 font-medium text-white">5</span>
            </div>
            <div className="flex items-center gap-30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/rating-section-logo-1.png"
                alt="Rating provider 1"
                width={136}
                height={20}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/rating-section-logo-2.png"
                alt="Rating provider 2"
                width={100}
                height={20}
              />
            </div>
          </div>
          <div className="hidden desktop:block self-center justify-self-end w-[52.5vw] max-w-[75.6rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/rating-section-image.png"
              alt=""
              width={756}
              height={665}
              className="w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
