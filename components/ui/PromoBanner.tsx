import Button from './Button';
import { cn } from '../../lib/cn';

interface PromoBannerProps {
  promoText?: string;
  className?: string;
}

export default function PromoBanner({
  promoText = 'Оформи заказ в течение 10 минут и получи бонус $50 на счет!',
  className,
}: PromoBannerProps) {
  return (
    <div
      className={cn(
        'relative max-w-[111rem] mx-auto border border-white/10 py-40 px-20 tablet:px-60',
        className
      )}
    >
      <div className="absolute -top-[2.1rem] left-40 w-[15.7rem] h-43 bg-[#d66702] text-white text-16 leading-23 font-semibold flex items-center justify-center px-15">
        Акция!
      </div>
      <div className="relative">
        <span className="block text-30 leading-43 desktop:text-55 desktop:leading-79 font-bold text-white opacity-[0.08] -mb-20 desktop:-mb-30 whitespace-nowrap pointer-events-none select-none">
          Хочу скидку!
        </span>
        <h2 className="relative text-25 leading-28 desktop:text-40 desktop:leading-58 font-medium text-white mb-20">
          Хочу скидку!
        </h2>
        <p className="text-16 leading-23 text-white mb-30">{promoText}</p>
        <div className="flex flex-col tablet:flex-row gap-20">
          <Button href="/order" variant="white" className="w-[17.7rem]">
            Выбрать сервер
          </Button>
          <Button href="/partner" variant="outline-white">
            Заработайте на нас!
          </Button>
          <Button href="/complaint" variant="outline-white">
            Пожаловаться директору!
          </Button>
        </div>
      </div>
    </div>
  );
}
