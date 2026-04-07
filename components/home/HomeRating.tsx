import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

export default function HomeRating() {
  return (
    <section className="py-60">
      <Container>
        <div className="grid desktop:grid-cols-[1fr_auto] items-center gap-30">
          <div>
            <SectionHeading ghost="Репутация" title="Нас оценивают на ведущих рейтингах" />
            <div className="mt-30 flex items-baseline gap-12 mb-30">
              <span className="text-45 leading-65 desktop:text-65 desktop:leading-94 font-semibold text-accent">
                4.7
              </span>
              <span className="text-25 leading-36 font-medium text-white">из</span>
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
          <div className="hidden desktop:block w-[42rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/rating-section-image.png"
              alt=""
              width={420}
              height={332}
              className="w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
