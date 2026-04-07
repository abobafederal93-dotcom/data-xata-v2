import Icon from '../ui/Icon';
import SectionHeading from '../ui/SectionHeading';
import type { IconName } from '../../types/ui';

interface IncludeItem {
  icon: string;
  title: string;
  description: string;
}

interface IncludesSectionProps {
  items: IncludeItem[];
}

export default function IncludesSection({ items }: IncludesSectionProps) {
  return (
    <div className="mb-40">
      <SectionHeading ghost="Стоимость" title="Что включено в стоимость" />
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-30 mt-30">
        {items.map((item, i) => (
          <div
            key={i}
            className="border border-white/10 p-30 flex flex-col gap-15"
          >
            <Icon name={item.icon as IconName} className="text-36 text-accent" />
            <h4 className="text-19 leading-27 font-semibold text-white">{item.title}</h4>
            <p className="text-14 leading-17 font-normal text-secondary">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
