import { cn } from '../../lib/cn';

interface SectionHeadingProps {
  ghost: string;
  title: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export default function SectionHeading({ ghost, title, as: Tag = 'h2', className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-30', className)}>
      <span className="block text-55 leading-65 font-bold text-white opacity-[0.08] -mb-49 whitespace-nowrap pointer-events-none select-none">
        {ghost}
      </span>
      <Tag className="text-40 leading-58 font-medium text-white">{title}</Tag>
    </div>
  );
}
