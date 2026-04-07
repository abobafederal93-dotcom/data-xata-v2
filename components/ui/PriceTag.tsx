import { cn } from '../../lib/cn';

interface PriceTagProps {
  current: number;
  old?: number;
  currency?: string;
  size?: 'sm' | 'md';
  className?: string;
}

export default function PriceTag({ current, old, currency = '€', size = 'md', className }: PriceTagProps) {
  return (
    <div className={cn('flex items-center gap-8', className)}>
      <span
        className={cn(
          'font-semibold text-white',
          size === 'sm' ? 'text-14 leading-20' : 'text-16 leading-23'
        )}
      >
        {currency}
        {current.toFixed(2)}
      </span>
      {old && (
        <span className="text-14 leading-20 font-normal text-secondary line-through">
          {currency}
          {old.toFixed(2)}
        </span>
      )}
    </div>
  );
}
