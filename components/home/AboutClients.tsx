import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import type { ClientCard } from '@/data/clients';

interface AboutClientsProps {
  cards: ClientCard[];
}

export default function AboutClients({ cards }: AboutClientsProps) {
  return (
    <section className="py-80">
      <Container>
        <SectionHeading
          ghost="Клиенты"
          title="Для чего"
          subtitle="используют серверы?"
        />

        {/* Grid 2 rows × 4 cols */}
        <div className="mt-60 grid grid-cols-2 tablet:grid-cols-4 gap-30">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-center gap-15 p-20 border border-white/10 hover:border-primary transition-colors"
            >
              <Icon name={card.icon} className="text-40 text-cyan" />
              <span className="text-16 leading-23 font-medium text-white text-center">
                {card.title}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
