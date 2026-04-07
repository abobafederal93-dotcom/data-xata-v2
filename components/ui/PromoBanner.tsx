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
        // Rectangle 46: 1110x164, gradient orange → orange-dark
        'relative max-w-[111rem] mx-auto min-h-[16.4rem] py-30 px-20 tablet:px-60',
        'bg-gradient-to-r from-[#ff8311] to-[#d66702]',
        className
      )}
    >
      {/* Rectangle 50 sticker: 157x43, bg #d66702, y=-21 left=40 */}
      <div className="absolute -top-[2.1rem] left-40 w-[15.7rem] h-43 bg-[#d66702] text-white text-16 leading-23 font-semibold flex items-center justify-center px-15">
        Акция!
      </div>
      <div className="relative">
        <span className="block text-30 leading-43 desktop:text-55 desktop:leading-79 font-bold text-white opacity-[0.08] -mb-20 desktop:-mb-[5rem] whitespace-nowrap pointer-events-none select-none">
          Хочу скидку!
        </span>
        <h2 className="relative text-25 leading-28 desktop:text-40 desktop:leading-58 font-medium text-white mb-20">
          Хочу скидку!
        </h2>
        <p className="text-16 leading-23 text-white mb-30 max-w-[30.3rem]">{promoText}</p>
        <div className="flex flex-col tablet:flex-row gap-20">
          <Button href="/order" variant="white" className="w-full desktop:w-[17.7rem]">
            Выбрать сервер
          </Button>
          <Button href="/partner" variant="outline-white" className="desktop:w-[54.8rem]">
            Заработайте на нас!
          </Button>
          <Button href="/complaint" variant="outline-white" className="desktop:w-[54.8rem]">
            Пожаловаться директору!
          </Button>
        </div>
      </div>
    </div>
  );
}
