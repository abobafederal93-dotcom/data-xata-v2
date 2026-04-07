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
      <h1 className="text-30 leading-43 desktop:text-30 desktop:leading-43 font-medium text-white mb-20">
        Оформление заказа
      </h1>

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
        <div className="mt-15 text-20 leading-29 font-semibold text-white">€99</div>
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
