import { cn } from '@/lib/cn';

interface PaginationProps {
  total: number;
  current: number;
  baseHref?: string;
}

export default function Pagination({ total, current, baseHref = '/search' }: PaginationProps) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <nav className="flex items-center gap-4" aria-label="Pagination">
      {/* Prev */}
      <a
        href={current > 1 ? `${baseHref}?page=${current - 1}` : '#'}
        aria-disabled={current <= 1}
        className={cn(
          'w-40 h-40 flex items-center justify-center border rounded-sm transition-colors',
          current <= 1
            ? 'border-white/10 text-secondary cursor-not-allowed'
            : 'border-white/20 text-white hover:bg-white/10',
        )}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

      {pages.map((page) => (
        <a
          key={page}
          href={`${baseHref}?page=${page}`}
          className={cn(
            'w-40 h-40 flex items-center justify-center text-14 leading-20 font-medium border rounded-sm transition-colors',
            page === current
              ? 'bg-primary border-primary text-white'
              : 'border-white/20 bg-transparent text-white hover:bg-white/10',
          )}
          aria-current={page === current ? 'page' : undefined}
        >
          {page}
        </a>
      ))}

      {/* Next */}
      <a
        href={current < total ? `${baseHref}?page=${current + 1}` : '#'}
        aria-disabled={current >= total}
        className={cn(
          'w-40 h-40 flex items-center justify-center border rounded-sm transition-colors',
          current >= total
            ? 'border-white/10 text-secondary cursor-not-allowed'
            : 'border-white/20 text-white hover:bg-white/10',
        )}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </nav>
  );
}
