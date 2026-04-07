import Icon from '../ui/Icon';

interface SummaryItem {
  label: string;
  description: string;
}

interface OrderSummaryProps {
  items: SummaryItem[];
  total?: string;
}

export default function OrderSummary({ items }: OrderSummaryProps) {
  return (
    <div className="mb-40">
      <div className="relative mb-30">
        <span
          className="block text-30 leading-43 desktop:text-55 desktop:leading-79 font-bold text-white opacity-[0.08] -mb-20 desktop:-mb-30 whitespace-nowrap pointer-events-none select-none"
          aria-hidden="true"
        >
          Заказ
        </span>
        <h1 className="relative text-25 leading-28 desktop:text-40 desktop:leading-58 font-medium text-white">
          Оформление заказа
        </h1>
      </div>

      <div className="border border-white/10 p-20 mb-20">
        <div className="grid grid-cols-1 desktop:grid-cols-3 gap-20">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-12 leading-17 font-medium text-secondary uppercase mb-6">
                {item.label}
              </span>
              <span className="text-14 leading-20 text-white">{item.description}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="h-48 bg-[#215aee] flex items-center px-20 gap-30 text-14 leading-20 text-white">
        <button type="button" className="flex items-center gap-10">
          <Icon name="server" className="text-18" />
          Смотреть подробности
        </button>
        <button type="button">Укажу данные позже</button>
      </div>
    </div>
  );
}
