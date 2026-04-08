import { cn } from '@/lib/cn';

interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className }: IconProps) {
  return <i className={cn('icons', `i-${name}`, className)} aria-hidden="true" />;
}
