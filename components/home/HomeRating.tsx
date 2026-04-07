import Container from '../ui/Container';

export default function HomeRating() {
  return (
    <section className="bg-gradient-to-r from-accent to-accent-dark min-h-[47.9rem] overflow-hidden">
      <Container>
        <div className="grid desktop:grid-cols-[1fr_auto] items-center min-h-[47.9rem] gap-30">
          <div className="py-60">
            <span className="block text-30 leading-43 desktop:text-55 desktop:leading-80 font-bold text-white opacity-[0.15] -mb-36 desktop:-mb-49 whitespace-nowrap pointer-events-none select-none">
              Клиенты считают, что
            </span>
            <h2 className="text-25 leading-29 desktop:text-40 desktop:leading-58 font-medium text-white mb-20">
              Наш сервис просто супер!
            </h2>
            <p className="text-20 leading-29 desktop:leading-27 text-white mb-30">
              Нас оценивают на ведущих рейтингах
            </p>
            <div className="flex items-baseline gap-12 mb-30">
              <span className="text-45 leading-65 desktop:text-65 desktop:leading-94 font-semibold text-accent">
                4.7
              </span>
              <span className="text-20 leading-29 desktop:text-25 desktop:leading-36 font-medium text-white">
                из
              </span>
              <span className="text-45 leading-65 desktop:text-65 desktop:leading-94 font-semibold text-white">
                5
              </span>
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
