import { cn } from '../../lib/cn';

const pillBase =
  'inline-flex items-center justify-center h-36 px-16 text-14 leading-20 font-medium rounded-sm border border-primary text-white hover:bg-primary/20 transition-colors';

interface SearchToolbarProps {
  className?: string;
}

export default function SearchToolbar({ className }: SearchToolbarProps) {
  return (
    <div className={cn('flex flex-col gap-12', className)}>
      <div className="flex flex-wrap items-center gap-12">
        <button type="button" className={pillBase}>
          Сортировать по: цене
        </button>
        <button type="button" className={pillBase}>
          Формат вывода: расширено
        </button>
        <button type="button" className={pillBase}>
          Валюта: Евро
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center h-36 px-16 text-14 leading-20 font-medium rounded-sm bg-accent hover:bg-accent-dark text-white transition-colors ml-auto"
        >
          Сообщить мне
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-12">
        <button type="button" className={pillBase}>
          Цена за месяц
        </button>
        <button type="button" className={pillBase}>
          Бесплатная установка
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center h-36 px-16 text-14 leading-20 font-medium rounded-sm bg-white text-primary-dark border border-white"
        >
          Control Panel
        </button>
        <button type="button" className={pillBase}>
          Очистить фильтр
        </button>
      </div>
    </div>
  );
}
