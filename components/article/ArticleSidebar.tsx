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
    <aside className="hidden desktop:block order-1 w-[25.5rem] shrink-0 desktop:sticky desktop:top-88">
      <nav className="bg-[#215aee] p-20">
        <h3 className="text-16 leading-23 font-medium text-white mb-15">Содержание</h3>
        <ul className="flex flex-col gap-8">
          {items.map((item) => (
            <li key={item.id} className={cn(item.level === 2 && 'pl-15')}>
              <Link
                href={`#${item.id}`}
                className={cn(
                  'block transition-colors',
                  item.level === 2
                    ? 'text-13 leading-19 text-secondary hover:text-white'
                    : item.active
                      ? 'text-14 leading-20 text-white'
                      : 'text-14 leading-20 text-secondary hover:text-white'
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
