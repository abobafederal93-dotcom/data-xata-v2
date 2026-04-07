import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Icon from '../ui/Icon';
import type { IconName } from '../../types';

interface ClientCard {
  id: string;
  title: string;
  icon: string;
  description: string;
}

interface AboutClientsProps {
  cards: readonly ClientCard[];
}

function stripIconPrefix(icon: string): IconName {
  return (icon.startsWith('i-') ? icon.slice(2) : icon) as IconName;
}

export default function AboutClients({ cards }: AboutClientsProps) {
  return (
    <section className="py-60">
      <Container>
        <SectionHeading
          ghost="О клиентах"
          title="Наши клиенты используют выделенные серверы для:"
        />
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-30">
          {cards.map((c) => (
            <div
              key={c.id}
              className="border border-primary p-24 min-h-[25rem] flex flex-col gap-16"
            >
              <Icon name={stripIconPrefix(c.icon)} className="text-30 text-accent" />
              <h3 className="text-19 font-semibold text-white">{c.title}</h3>
              <p className="text-14 leading-17 text-secondary">{c.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
