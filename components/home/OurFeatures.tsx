import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Icon from '../ui/Icon';
import type { IconName } from '../../types';

interface Feature {
  id: string;
  title: string;
  icon: string;
  description: string;
}

interface OurFeaturesProps {
  features: readonly Feature[];
}

function stripIconPrefix(icon: string): IconName {
  return (icon.startsWith('i-') ? icon.slice(2) : icon) as IconName;
}

export default function OurFeatures({ features }: OurFeaturesProps) {
  return (
    <section className="py-60">
      <Container>
        <SectionHeading ghost="Преимущества" title="9 уникальных характеристик Дата-Хата" />
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-30">
          {features.map((f, idx) => (
            <div
              key={f.id}
              className="border border-primary/30 p-30 min-h-[31rem] flex flex-col gap-16"
            >
              <span className="text-40 leading-50 font-medium text-accent">
                #{String(idx + 1).padStart(2, '0')}
              </span>
              <Icon name={stripIconPrefix(f.icon)} className="text-30 text-white" />
              <h3 className="text-19 font-semibold text-white">{f.title}</h3>
              <p className="text-14 leading-20 text-secondary">{f.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
