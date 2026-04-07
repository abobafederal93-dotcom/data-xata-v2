import { cn } from '../../lib/cn';

interface PricingPeriod {
  label: string;
  discount?: string;
  price: string;
  isActive?: boolean;
}

interface PricingCardsProps {
  periods: PricingPeriod[];
}

export default function PricingCards({ periods }: PricingCardsProps) {
  return (
    <div className="mb-40">
      <h3 className="text-20 leading-29 font-medium text-white mb-20">Цены и сроки</h3>
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-20">
        {periods.map((p, i) => (
          <div
            key={i}
            className={cn(
              'border p-20 flex flex-col gap-8 cursor-pointer transition-colors',
              p.isActive
                ? 'border-[#ff8311] bg-[#215aee]/30'
                : 'border-white/20 hover:border-[#215aee]'
            )}
          >
            <span className="text-16 leading-23 font-medium text-white">{p.label}</span>
            {p.discount && (
              <span className="text-12 leading-17 text-[#27e35c]">{p.discount}</span>
            )}
            <span className="text-20 leading-29 font-semibold text-white">{p.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
