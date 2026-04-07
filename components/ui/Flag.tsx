import type { FlagCode } from '../../types';
import { cn } from '../../lib/cn';

interface FlagProps {
  code: FlagCode;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
}

export default function Flag({ code, width = 18, height = 12, alt = '', className }: FlagProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/img/icons/i-${code}.svg`}
      width={width}
      height={height}
      alt={alt}
      className={cn('inline-block flex-shrink-0', className)}
    />
  );
}
