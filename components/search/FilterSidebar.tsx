import Icon from '../ui/Icon';
import type { IconName } from '../../types';
import { cn } from '../../lib/cn';

interface FilterSidebarProps {
  activeTab?: string;
  className?: string;
}

const tabs: { id: string; title: string; icon: IconName }[] = [
  { id: 'main', title: 'Основные', icon: 'server' },
  { id: 'price', title: 'Цена', icon: 'info' },
  { id: 'provider', title: 'Провайдер', icon: 'compare' },
  { id: 'cpu', title: 'Процессор', icon: 'tool' },
  { id: 'ram', title: 'Память', icon: 'memory' },
  { id: 'disk', title: 'Жесткий диск', icon: 'hdd' },
  { id: 'speed', title: 'Скорость', icon: 'speed' },
  { id: 'os', title: 'ПО', icon: 'windows' },
  { id: 'virtualization', title: 'Виртуализация', icon: 'cloud' },
  { id: 'location', title: 'Локация', icon: 'map' },
  { id: 'features', title: 'Особенности', icon: 'star' },
];

export default function FilterSidebar({ activeTab = 'disk', className }: FilterSidebarProps) {
  return (
    <aside className={cn('w-full desktop:w-[25.5rem] desktop:flex-shrink-0', className)}>
      <ul className="bg-[#215aee] flex flex-col">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <li key={tab.id}>
              <button
                type="button"
                className={cn(
                  'w-full h-56 px-20 flex items-center justify-between cursor-pointer text-14 leading-20 font-medium',
                  isActive ? 'bg-white text-[#0041be]' : 'text-white'
                )}
              >
                <span className="flex items-center gap-12">
                  <Icon name={tab.icon} className="text-24" />
                  <span>{tab.title}</span>
                </span>
                <Icon name="caret-right" className="text-24" />
              </button>
            </li>
          );
        })}
      </ul>
      <div className="mt-20 flex flex-col gap-12">
        <button type="button" className="text-14 leading-20 font-medium text-accent text-left">
          Сообщить мне
        </button>
        <label className="flex gap-10 items-center text-14 leading-20 text-white cursor-pointer">
          <Icon name="check" className="text-24" />
          <span>Цена за месяц</span>
        </label>
        <label className="flex gap-10 items-center text-14 leading-20 text-white cursor-pointer">
          <Icon name="check" className="text-24" />
          <span>Бесплатная установка</span>
        </label>
        <label className="flex gap-10 items-center text-14 leading-20 text-white cursor-pointer">
          <Icon name="check" className="text-24" />
          <span>Control Panel</span>
        </label>
        <button type="button" className="text-14 leading-20 font-medium text-accent text-left">
          Очистить фильтр
        </button>
      </div>
    </aside>
  );
}
