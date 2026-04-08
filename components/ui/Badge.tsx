import { cn } from '@/lib/cn';

interface BadgeProps {
  children: React.ReactNode;
  tone?: 'default' | 'green' | 'red';
  className?: string;
}

const toneClasses = {
  default: 'bg-white/10 text-white',
  green: 'bg-green/10 text-green',
  red: 'bg-red/10 text-red',
};

export default function Badge({ children, tone = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center text-12 leading-17 font-normal px-6 py-2 rounded-sm',
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
