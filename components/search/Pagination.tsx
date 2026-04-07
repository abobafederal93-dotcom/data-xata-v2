import Icon from '../ui/Icon';
import { cn } from '../../lib/cn';

interface PaginationProps {
  current: number;
  total: number;
  className?: string;
}

export default function Pagination({ current, total, className }: PaginationProps) {
  const pages: (number | 'dots')[] = [];
  const maxVisible = 5;
  for (let i = 1; i <= Math.min(maxVisible, total); i++) pages.push(i);
  if (total > maxVisible + 1) {
    pages.push('dots');
    pages.push(total);
  } else if (total === maxVisible + 1) {
    pages.push(total);
  }

  const itemBase =
    'inline-flex items-center justify-center w-40 h-40 text-14 leading-20 font-medium rounded-sm transition-colors';

  return (
    <nav
      aria-label="Pagination"
      className={cn('flex items-center justify-center gap-8 mt-40', className)}
    >
      <button
        type="button"
        aria-label="Previous"
        className={cn(itemBase, 'border border-primary text-white hover:bg-primary/20')}
      >
        <Icon name="caret" className="text-16 rotate-90" />
      </button>
      {pages.map((p, i) =>
        p === 'dots' ? (
          <span key={`dots-${i}`} className="text-14 text-secondary px-4">
            ...
          </span>
        ) : (
          <button
            key={p}
            type="button"
            className={cn(
              itemBase,
              p === current
                ? 'bg-primary text-white'
                : 'border border-primary text-white hover:bg-primary/20'
            )}
          >
            {p}
          </button>
        )
      )}
      <button
        type="button"
        aria-label="Next"
        className={cn(itemBase, 'border border-primary text-white hover:bg-primary/20')}
      >
        <Icon name="caret" className="text-16 -rotate-90" />
      </button>
    </nav>
  );
}
