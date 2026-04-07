import { cn } from '../../lib/cn';

interface SectionHeadingProps {
  ghost: string;
  title: string;
  className?: string;
}

export default function SectionHeading({ ghost, title, className }: SectionHeadingProps) {
  return (
    <div className={cn(className)}>
      <span className="block text-30 leading-43 desktop:text-55 desktop:leading-79 font-bold text-white opacity-[0.08] -mb-20 desktop:-mb-30 whitespace-nowrap pointer-events-none select-none">
        {ghost}
      </span>
      <h2 className="relative text-25 leading-28 desktop:text-40 desktop:leading-58 font-medium text-white">
        {title}
      </h2>
    </div>
  );
}
