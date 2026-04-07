import Icon from '../ui/Icon';
import type { IconName } from '../../types';
import { cn } from '../../lib/cn';

interface FilterSidebarGroup {
  id: string;
  title: string;
  icon: IconName;
  active?: boolean;
}

interface FilterSidebarProps {
  groups: FilterSidebarGroup[];
  className?: string;
}

export default function FilterSidebar({ groups, className }: FilterSidebarProps) {
  return (
    <aside className={cn('w-255 flex-shrink-0 bg-primary rounded-sm overflow-hidden', className)}>
      <ul className="flex flex-col">
        {groups.map((group) => (
          <li key={group.id}>
            <button
              type="button"
              className={cn(
                'w-full h-56 flex items-center gap-16 px-16 text-14 leading-20 font-medium transition-colors',
                group.active
                  ? 'bg-white text-primary-dark'
                  : 'text-white hover:bg-white/10'
              )}
            >
              <Icon name={group.icon} className="text-24" />
              <span>{group.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
