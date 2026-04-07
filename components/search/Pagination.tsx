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
        'w-full h-48 bg-accent text-white text-16 leading-23 font-semibold flex items-center justify-center rounded-sm',
        className
      )}
    >
      Показать больше конфигураций
    </button>
  );
}
