import Icon from '../ui/Icon';
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
      <h3 className="text-25 leading-36 font-medium text-white mb-20">Что включено</h3>
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-20">
        {items.map((item, i) => (
          <div
            key={i}
            className="border border-primary rounded-md p-25 h-208 flex flex-col"
          >
            <Icon name={item.icon as IconName} className="text-36 text-accent mb-15" />
            <h4 className="text-19 leading-27 font-semibold text-white mb-10">{item.title}</h4>
            <p className="text-14 leading-20 font-normal text-secondary">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
