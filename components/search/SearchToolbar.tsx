import Icon from '../ui/Icon';
import { cn } from '../../lib/cn';

interface SearchToolbarProps {
  className?: string;
}

const dropdownBase =
  'inline-flex items-center gap-6 h-36 px-12 text-14 leading-20 font-medium rounded-sm border border-primary text-white';

export default function SearchToolbar({ className }: SearchToolbarProps) {
  return (
    <div className={cn('flex flex-col gap-12', className)}>
      <div className="flex flex-wrap items-center gap-12">
        <button type="button" className={dropdownBase}>
          <span>Сортировать по:</span>
          <span className="text-accent">цене</span>
          <Icon name="caret" className="text-24 -rotate-90" />
        </button>
        <button type="button" className={dropdownBase}>
          <span>Формат вывода:</span>
          <span className="text-accent">расширено</span>
          <Icon name="caret" className="text-24 -rotate-90" />
        </button>
        <button type="button" className={dropdownBase}>
          <span>Валюта:</span>
          <span className="text-accent">Евро</span>
          <Icon name="caret" className="text-24 -rotate-90" />
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center h-36 px-16 text-14 leading-20 font-medium rounded-sm bg-accent hover:bg-accent-dark text-white transition-colors ml-auto"
        >
          Сообщить мне
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-20">
        <label className="inline-flex items-center gap-6 text-14 leading-20 font-medium text-white cursor-pointer">
          <Icon name="check" className="text-24" />
          <span>Цена за месяц</span>
        </label>
        <label className="inline-flex items-center gap-6 text-14 leading-20 font-medium text-white cursor-pointer">
          <Icon name="check" className="text-24" />
          <span>Бесплатная установка</span>
        </label>
        <button
          type="button"
          className="inline-flex items-center gap-6 h-36 px-12 text-14 leading-20 font-medium rounded-sm bg-white text-primary-dark border border-white"
        >
          <Icon name="check" className="text-24" />
          <span>Control Panel</span>
        </button>
        <button
          type="button"
          className="text-14 leading-20 font-medium text-accent hover:text-accent-dark transition-colors"
        >
          Очистить фильтр
        </button>
      </div>
    </div>
  );
}
