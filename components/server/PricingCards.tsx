import { cn } from '@/lib/cn';

interface Plan {
  id: string;
  label: string;
  active: boolean;
  extra?: string | null;
}

interface PlanCardProps {
  plans: Plan[];
  title?: string;
}

export default function PricingCards({ plans, title }: PlanCardProps) {
  return (
    <div className="flex flex-col gap-12">
      {title && (
        <h4 className="text-20 leading-29 font-medium text-white">{title}</h4>
      )}
      <div className="flex flex-wrap gap-12">
        {plans.map((plan) => (
          <button
            key={plan.id}
            type="button"
            className={cn(
              'flex flex-col items-center justify-center gap-4 px-20 py-16 rounded-sm border transition-colors',
              'text-14 leading-20 font-medium',
              plan.active
                ? 'bg-primary border-primary text-white'
                : 'bg-transparent border-white/20 text-white hover:border-white/40',
            )}
          >
            <span>{plan.label}</span>
            {plan.extra && (
              <span className={cn('text-12 leading-17 font-normal', plan.active ? 'text-white/70' : 'text-secondary')}>
                {plan.extra}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
