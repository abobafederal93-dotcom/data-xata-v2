import Icon from '../ui/Icon';
import Button from '../ui/Button';
import { cn } from '../../lib/cn';

interface SearchToolbarProps {
  activeCategory?: string;
  className?: string;
}

const categories = [
  { id: 'all', label: 'Все' },
  { id: 'windows', label: 'Windows' },
  { id: 'linux', label: 'Linux' },
  { id: 'gaming', label: 'Игровой' },
  { id: 'storage', label: 'Хранилище' },
  { id: 'office', label: 'Офис' },
  { id: 'backup', label: 'Бекап' },
];

export default function SearchToolbar({ activeCategory = 'storage', className }: SearchToolbarProps) {
  return (
    <div className={cn('flex flex-col gap-15', className)}>
      <div className="flex flex-wrap items-center gap-10">
        {categories.map((c) => {
          const isActive = c.id === activeCategory;
          return (
            <button
              key={c.id}
              type="button"
              className={cn(
                'h-36 px-15 inline-flex items-center text-13 leading-20 rounded-sm',
                isActive
                  ? 'bg-white text-[#010437] font-medium'
                  : 'border border-white/30 text-white'
              )}
            >
              {c.label}
            </button>
          );
        })}
        <Button variant="accent" size="sm">
          Подбор по спекам
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-15">
        <button
          type="button"
          className="h-36 flex items-center gap-6 px-12 border border-white/30 rounded-sm"
        >
          <span className="text-14 leading-20 text-white">Сортировать по:</span>
          <span className="text-14 leading-20 text-accent">цене</span>
          <Icon name="caret" className="text-16" />
        </button>
        <button
          type="button"
          className="h-36 flex items-center gap-6 px-12 border border-white/30 rounded-sm"
        >
          <span className="text-14 leading-20 text-white">Формат вывода:</span>
          <span className="text-14 leading-20 text-accent">расширено</span>
          <Icon name="caret" className="text-16" />
        </button>
        <button
          type="button"
          className="h-36 flex items-center gap-6 px-12 border border-white/30 rounded-sm"
        >
          <span className="text-14 leading-20 text-white">Валюта:</span>
          <span className="text-14 leading-20 text-accent">Евро</span>
          <Icon name="caret" className="text-16" />
        </button>
      </div>
    </div>
  );
}
