import Button from '../ui/Button';
import Icon from '../ui/Icon';

interface SummaryItem {
  label: string;
  description: string;
}

interface OrderSummaryProps {
  items: SummaryItem[];
  total: string;
}

export default function OrderSummary({ items, total }: OrderSummaryProps) {
  return (
    <div className="mb-40">
      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-15 mb-20">
        {items.map((item, i) => (
          <div
            key={i}
            className="border border-primary rounded-sm h-85 px-15 flex flex-col justify-center"
          >
            <span className="text-12 leading-17 font-medium text-secondary uppercase tracking-[0.024em] mb-6">
              {item.label}
            </span>
            <span className="text-14 leading-20 font-normal text-white">{item.description}</span>
          </div>
        ))}
      </div>
      <div className="text-right text-25 leading-36 font-medium text-white mb-15">{total}</div>
      <Button href="#details" variant="outline" className="w-full h-48" fullWidth>
        <Icon name="server" className="mr-10" />
        Смотреть подробности
      </Button>
    </div>
  );
}
