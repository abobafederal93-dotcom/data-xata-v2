import type { Server } from '../../types/server';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

interface OrderSidebarProps {
  server: Server;
}

export default function OrderSidebar({ server }: OrderSidebarProps) {
  const lines: { label: string; value: string; price: string }[] = [
    { label: 'абонплата', value: '1x Intel Quad-Core Xeon E3-1230v2', price: '€69.00' },
    { label: 'плата за установку', value: '+ 1x 120 GB SSD', price: '€24.00' },
    { label: 'ОС', value: 'CentOS', price: 'вкл.' },
    { label: 'сеть', value: '100 Mbit', price: 'вкл.' },
    { label: 'сеть', value: 'IPv4:1', price: 'вкл.' },
    { label: 'контракт', value: 'Поддержка - 24х7х12', price: 'вкл.' },
    { label: 'интервал оплаты', value: 'Период оплаты', price: 'помесячно' },
  ];

  const total = (server.setupFee ?? 46.75).toFixed(2);

  return (
    <aside className="w-full desktop:w-[35rem] bg-[#215aee] p-32 desktop:sticky desktop:top-88">
      <h3 className="text-20 leading-29 font-medium text-white mb-20">Ваш заказ</h3>

      <div>
        {lines.map((item, i) => (
          <div
            key={i}
            className="border-b border-white/10 py-12 flex flex-col gap-4"
          >
            <span className="text-12 leading-17 font-medium text-secondary uppercase tracking-wide">
              {item.label}
            </span>
            <div className="flex items-start justify-between gap-10">
              <span className="text-14 leading-20 text-white">{item.value}</span>
              <span className="text-14 leading-20 text-white text-right shrink-0">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-20 mb-20">
        <span className="text-12 leading-17 font-medium text-secondary uppercase tracking-wide">
          К оплате
        </span>
        <span className="text-16 leading-23 font-semibold text-white">€{total}</span>
      </div>

      <Button href="/order" variant="accent" className="h-48 w-full mt-20">
        Оформить заказ
      </Button>

      <a
        href="#share"
        className="text-14 leading-20 text-secondary flex items-center gap-8 mt-12 hover:text-white"
      >
        <Icon name="info" className="text-18" />
        Поделиться
      </a>
    </aside>
  );
}
