import Link from 'next/link';
import { cn } from '../../lib/cn';

export interface TocItem {
  id: string;
  label: string;
  level: 1 | 2;
  active?: boolean;
}

interface ArticleSidebarProps {
  items: TocItem[];
}

export default function ArticleSidebar({ items }: ArticleSidebarProps) {
  return (
    <aside className="hidden desktop:block">
      <nav className="bg-primary pt-32 pb-32 pl-32 pr-32 w-255 desktop:sticky desktop:top-20 rounded-sm">
        <ul className="flex flex-col gap-14">
          {items.map((item) => (
            <li
              key={item.id}
              className={cn(item.level === 2 && 'pl-12')}
            >
              <Link
                href={`#${item.id}`}
                className={cn(
                  'block transition-colors',
                  item.level === 2 ? 'text-13 leading-20' : 'text-14 leading-20',
                  item.active
                    ? 'text-white font-medium'
                    : 'text-secondary hover:text-white'
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
