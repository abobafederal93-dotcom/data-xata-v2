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
        <SectionHeading ghost="О клиентах" title="Клиенты считают" />
        <div className="mt-30 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-30">
          {cards.map((c, idx) => (
            <div
              key={c.id}
              className="border border-white/10 p-24 flex flex-col gap-12"
            >
              <span className="text-40 leading-58 font-semibold text-accent">
                #{idx + 1}
              </span>
              <Icon name={stripIconPrefix(c.icon)} className="text-30 text-white" />
              <h3 className="text-19 leading-27 font-semibold text-white">{c.title}</h3>
              <p className="text-14 leading-17 text-[#839ada]">{c.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
