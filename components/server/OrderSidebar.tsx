import type { Server } from '../../types/server';
import Button from '../ui/Button';

interface OrderSidebarProps {
  server: Server;
}

export default function OrderSidebar({ server }: OrderSidebarProps) {
  const lineItems: { label: string; value: string; price: string }[] = [
    {
      label: 'плата за установку',
      value: '1x Intel Quad-Core Xeon E3-1230v2',
      price: '€69.00',
    },
    { label: 'ОС', value: '+ 1x 120 GB SSD', price: '€24.00' },
    { label: 'ОС', value: 'CentOS', price: 'вкл.' },
    { label: 'сеть', value: '100 Mbit', price: 'вкл.' },
    { label: 'сеть', value: 'IPv4:1', price: 'вкл.' },
    { label: 'контракт', value: 'Поддержка - 24х7х12', price: 'вкл.' },
    { label: 'контракт', value: 'Период оплаты', price: 'помесячно' },
  ];

  const oldPrice = server.priceOld ?? 69.0;
  const newPrice = server.price;

  return (
    <aside className="w-full desktop:w-350 bg-primary rounded-sm p-30 desktop:sticky desktop:top-20">
      <h3 className="text-20 leading-29 font-medium text-white mb-20">Ваш заказ</h3>

      <div className="mb-25">
        <span className="block text-12 leading-17 font-medium text-secondary uppercase tracking-[0.024em] mb-8">
          К оплате
        </span>
        <div className="flex items-baseline gap-10">
          <span className="text-16 leading-23 font-medium text-white line-through opacity-60">
            €{oldPrice.toFixed(2)}
          </span>
          <span className="text-16 leading-23 font-medium text-white">€{newPrice.toFixed(2)}</span>
        </div>
      </div>

      <div className="mb-25">
        <span className="block text-12 leading-17 font-medium text-secondary uppercase tracking-[0.024em] mb-8">
          + плата за установку
        </span>
        <span className="block text-16 leading-23 font-medium text-white">€{(server.setupFee ?? 46.75).toFixed(2)}</span>
      </div>

      <Button href="/order" variant="accent" className="h-48 mb-15 w-full">
        Оформить заказ
      </Button>

      <button
        type="button"
        className="w-full h-48 border border-white rounded-sm text-16 leading-23 font-semibold text-white mb-25 hover:bg-white/10"
      >
        Поделиться
      </button>

      <div className="border-t border-white/20 pt-20">
        {lineItems.map((item, i) => (
          <div key={i} className="mb-15">
            <span className="block text-12 leading-17 font-medium text-secondary uppercase tracking-[0.024em] mb-6">
              {item.label}
            </span>
            <div className="flex items-start justify-between gap-10">
              <span className="text-14 leading-20 font-normal text-white">{item.value}</span>
              <span className="text-14 leading-20 font-medium text-white text-right flex-shrink-0">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
