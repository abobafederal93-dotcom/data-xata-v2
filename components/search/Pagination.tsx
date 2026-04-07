import { cn } from '../../lib/cn';

interface PaginationProps {
  current?: number;
  total?: number;
  className?: string;
}

export default function Pagination({ className }: PaginationProps) {
  return (
    <button
      type="button"
      className={cn(
        'w-full h-48 inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white text-16 leading-23 font-semibold rounded-sm transition-colors mt-10',
        className
      )}
    >
      Показать больше конфигураций
    </button>
  );
}
