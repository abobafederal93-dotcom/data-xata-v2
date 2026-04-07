import Container from '../ui/Container';
import PromoBanner from '../ui/PromoBanner';
import Button from '../ui/Button';

export default function LetsStart() {
  return (
    <section className="py-60">
      <Container>
        <PromoBanner
          ghost="Хочу скидку!"
          title="Хочу скидку!"
          subtitle="Оформи заказ в течение 10 минут и получи бонус $50 на счет!"
          buttonLabel="Выбрать сервер"
          buttonHref="/search"
        />
        <div className="grid grid-cols-1 desktop:grid-cols-2 gap-20 mt-30">
          <Button
            href="https://cp.data-xata.com/"
            variant="outline"
            className="h-48 w-full"
          >
            Пожаловаться директору!
          </Button>
          <Button href="/affiliate" variant="outline" className="h-48 w-full">
            Заработайте на нас!
          </Button>
        </div>
      </Container>
    </section>
  );
}
