import { cn } from '@/lib/cn';

interface SearchToolbarProps {}

function DropdownPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-6 border border-white/20 rounded-sm px-12 py-6 cursor-pointer hover:border-white/40 transition-colors">
      <span className="text-14 leading-20 font-medium text-white">{label}</span>
      <span className="text-14 leading-20 font-medium text-accent">{value}</span>
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-white">
        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function CheckPill({ label, color = 'white' }: { label: string; color?: 'white' | 'primary-dark' }) {
  return (
    <label className="flex items-center gap-6 cursor-pointer">
      <span
        className={cn(
          'w-24 h-24 flex items-center justify-center border rounded-sm flex-shrink-0',
          'border-white/30 bg-white/5 hover:border-white/50 transition-colors',
        )}
      >
        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
          <path d="M1 4L4.5 7.5L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-transparent" />
        </svg>
      </span>
      <span
        className={cn(
          'text-14 leading-20 font-medium',
          color === 'primary-dark' ? 'text-primary-dark' : 'text-white',
        )}
      >
        {label}
      </span>
    </label>
  );
}

export default function SearchToolbar(_props: SearchToolbarProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-20 gap-y-10 py-16">
      <DropdownPill label="Сортировать по:" value="цене" />
      <DropdownPill label="Формат вывода:" value="расширено" />
      <DropdownPill label="Валюта:" value="Евро" />
      <CheckPill label="Цена за месяц" />
      <CheckPill label="Бесплатная установка" />
      <CheckPill label="Control Panel" color="primary-dark" />
    </div>
  );
}
