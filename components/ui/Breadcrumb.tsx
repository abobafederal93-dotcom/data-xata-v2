import { cn } from '@/lib/cn';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center text-14 leading-20 font-normal', className)}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-6 text-secondary select-none">/</span>
            )}
            {isLast || !item.href ? (
              <span className={isLast ? 'text-white' : 'text-secondary'}>
                {item.label}
              </span>
            ) : (
              <a href={item.href} className="text-secondary hover:text-white transition-colors">
                {item.label}
              </a>
            )}
          </span>
        );
      })}
    </nav>
  );
}
