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
      <span className="block text-30 leading-43 tablet:text-55 tablet:leading-80 font-bold text-white opacity-[0.08] -mb-36 tablet:-mb-49 whitespace-nowrap pointer-events-none select-none">
        {ghost}
      </span>
      <Tag className="text-25 leading-29 tablet:text-40 tablet:leading-58 font-medium text-white">{title}</Tag>
    </div>
  );
}
