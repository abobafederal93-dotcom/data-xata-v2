import { cn } from '../../lib/cn';

interface Spec {
  label: string;
  value: string;
  highlight?: boolean;
}

interface SpecBlockProps {
  title: string;
  specs: Spec[];
}

export default function SpecBlock({ title, specs }: SpecBlockProps) {
  return (
    <div className="mb-40">
      <h3 className="text-20 leading-29 font-medium text-white mb-15">{title}</h3>
      <div className="grid grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-6 gap-0">
        {specs.map((s, i) => (
          <div
            key={i}
            className="border border-white/10 p-15 flex flex-col gap-4 h-86"
          >
            <span className="text-12 leading-17 font-medium text-secondary uppercase tracking-wide">
              {s.label}
            </span>
            <span
              className={cn(
                'text-14 leading-20',
                s.highlight ? 'text-accent' : 'text-white'
              )}
            >
              {s.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
