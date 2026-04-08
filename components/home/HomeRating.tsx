import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';

export default function HomeRating() {
  return (
    <section className="py-80">
      <Container>
        <div className="flex flex-col desktop:flex-row items-center gap-60">
          {/* Rating number + stars */}
          <div className="flex flex-col items-center desktop:items-start gap-20">
            <span className="text-65 leading-65 font-bold text-white">
              4.9
            </span>
            <div className="flex items-center gap-5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon key={star} name="star" className="text-24 text-accent" />
              ))}
            </div>
            <p className="text-16 leading-23 font-normal text-secondary text-center desktop:text-left">
              Средняя оценка клиентов
            </p>
          </div>

          {/* Rating logos */}
          <div className="flex-1 flex justify-center desktop:justify-end">
            <img
              src="/img/figma/rating-logos-group.svg"
              alt="Рейтинговые агентства"
              className="h-[8rem] w-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
