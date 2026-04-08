import { cn } from '@/lib/cn';
import type { FilterGroup } from '@/data/filters';

interface FilterSidebarProps {
  groups: FilterGroup[];
}

function RangeFilter({ min, max }: { min: number; max: number }) {
  return (
    <div className="px-4 py-8">
      <div className="flex justify-between mb-6">
        <span className="text-12 leading-17 text-secondary">€{min}</span>
        <span className="text-12 leading-17 text-secondary">€{max}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        defaultValue={max}
        className={cn(
          'w-full h-4 appearance-none rounded-sm cursor-pointer',
          '[&::-webkit-slider-track]:h-4 [&::-webkit-slider-track]:rounded-sm [&::-webkit-slider-track]:bg-white/20',
          '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-16 [&::-webkit-slider-thumb]:h-16',
          '[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:-mt-6',
          '[&::-moz-range-track]:h-4 [&::-moz-range-track]:rounded-sm [&::-moz-range-track]:bg-white/20',
          '[&::-moz-range-thumb]:w-16 [&::-moz-range-thumb]:h-16 [&::-moz-range-thumb]:rounded-full',
          '[&::-moz-range-thumb]:bg-accent [&::-moz-range-thumb]:border-0',
        )}
      />
    </div>
  );
}

function CheckboxFilter({ value, label }: { value: string; label: string }) {
  return (
    <label className="flex items-center gap-8 cursor-pointer py-4 group">
      <span className="w-18 h-18 flex-shrink-0 flex items-center justify-center border border-white/30 rounded-sm bg-white/5 group-hover:border-white/50 transition-colors">
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="opacity-0">
          <path d="M1 3.5L3.5 6L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <input type="checkbox" value={value} className="sr-only" />
      <span className="text-14 leading-20 font-normal text-white">{label}</span>
    </label>
  );
}

function SingleCheckbox({ id }: { id: string }) {
  return (
    <label className="flex items-center gap-8 cursor-pointer py-4 group">
      <span className="w-18 h-18 flex-shrink-0 flex items-center justify-center border border-white/30 rounded-sm bg-white/5 group-hover:border-white/50 transition-colors" />
      <input type="checkbox" id={id} className="sr-only" />
      <span className="text-14 leading-20 font-normal text-white">Включено</span>
    </label>
  );
}

export default function FilterSidebar({ groups }: FilterSidebarProps) {
  return (
    <aside className="w-full desktop:w-[24rem] flex-shrink-0">
      <div className="flex flex-col gap-4">
        {groups.map((group) => (
          <details key={group.id} open className="group">
            <summary className="flex items-center justify-between cursor-pointer list-none py-12 border-b border-white/10 select-none">
              <span className="text-14 leading-20 font-medium text-white">{group.title}</span>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className="text-secondary transition-transform group-open:rotate-180"
              >
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </summary>

            <div className="pt-8 pb-4">
              {group.type === 'range' && (
                <RangeFilter min={group.min ?? 0} max={group.max ?? 100} />
              )}
              {group.type === 'checkbox' && (
                <SingleCheckbox id={group.id} />
              )}
              {group.type === 'checkbox-group' && group.options && (
                <div className="flex flex-col gap-2">
                  {group.options.map((opt) => (
                    <CheckboxFilter key={opt.value} value={opt.value} label={opt.label} />
                  ))}
                </div>
              )}
            </div>
          </details>
        ))}
      </div>

      <button className="mt-16 text-14 leading-20 font-medium text-accent hover:text-accent-dark transition-colors">
        Очистить фильтр
      </button>
    </aside>
  );
}
