import { cn } from '@/lib/cn';

interface OrderStepsProps {
  active: 1 | 2 | 3;
}

const steps = [
  { num: 1, label: 'Сервер' },
  { num: 2, label: 'Описание сервера' },
  { num: 3, label: 'Оформление заказа' },
] as const;

export default function OrderSteps({ active }: OrderStepsProps) {
  return (
    <nav className="flex items-center gap-8" aria-label="Order steps">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-secondary">
        <path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>

      {steps.map((step, idx) => (
        <div key={step.num} className="flex items-center gap-8">
          {idx > 0 && <span className="w-18 h-1 bg-secondary" />}
          <span
            className={cn(
              'text-14 leading-20',
              step.num === active ? 'font-medium text-white' : 'font-normal text-secondary',
            )}
          >
            {step.label}
          </span>
        </div>
      ))}
    </nav>
  );
}
