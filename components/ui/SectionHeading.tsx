import { cn } from '@/lib/cn';

interface SectionHeadingProps {
  ghost?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  ghost,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('relative', align === 'center' && 'text-center', className)}>
      {ghost && (
        <span
          className="block text-65 leading-94 font-bold text-white opacity-[0.08] select-none pointer-events-none"
          aria-hidden="true"
        >
          {ghost}
        </span>
      )}
      <h2
        className={cn(
          'text-60 leading-87 font-medium text-white',
          ghost && '-mt-60',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-40 leading-58 font-medium text-white mt-8">{subtitle}</p>
      )}
    </div>
  );
}
