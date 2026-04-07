import Button from './Button';
import { cn } from '../../lib/cn';

interface PromoBannerProps {
  ghost?: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonHref: string;
  className?: string;
}

export default function PromoBanner({
  ghost,
  title,
  subtitle,
  buttonLabel,
  buttonHref,
  className,
}: PromoBannerProps) {
  return (
    <div
      className={cn(
        'bg-gradient-to-r from-accent to-accent-dark px-20 py-24 desktop:px-48 desktop:py-40 flex flex-col desktop:flex-row desktop:items-center desktop:justify-between gap-20 desktop:gap-40',
        className
      )}
    >
      <div className="flex-1">
        {ghost && (
          <span className="block text-30 leading-43 desktop:text-55 desktop:leading-80 font-bold text-white opacity-[0.15] -mb-36 desktop:-mb-49 whitespace-nowrap pointer-events-none select-none">
            {ghost}
          </span>
        )}
        <h2 className="text-25 leading-29 desktop:text-40 desktop:leading-58 font-medium text-white">
          {title}
        </h2>
      </div>
      <div className="flex flex-col items-start desktop:items-end gap-12 desktop:gap-8 flex-shrink-0">
        <p className="text-19 leading-27 font-semibold text-white desktop:text-right desktop:max-w-[30rem]">
          {subtitle}
        </p>
        <Button
          href={buttonHref}
          variant="outline"
          className="bg-white text-primary-dark hover:bg-white/90 border-white w-177 h-48"
        >
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}
