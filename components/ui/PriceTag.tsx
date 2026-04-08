import { cn } from '@/lib/cn';

interface PriceTagProps {
  price: string;
  oldPrice?: string;
  className?: string;
}

export default function PriceTag({ price, oldPrice, className }: PriceTagProps) {
  return (
    <div className={cn('flex items-center gap-8 text-14 leading-20 font-semibold', className)}>
      <span className="text-white">{price}</span>
      {oldPrice && (
        <span className="text-secondary line-through font-normal">{oldPrice}</span>
      )}
    </div>
  );
}
