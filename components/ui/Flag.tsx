import { cn } from '@/lib/cn';

interface FlagProps {
  code: string;
  className?: string;
}

export default function Flag({ code, className }: FlagProps) {
  return (
    <img
      src={`/img/figma/flag-${code}.svg`}
      alt={code}
      width={24}
      height={14}
      className={cn('inline-block', className)}
    />
  );
}
