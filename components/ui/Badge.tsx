import { cn } from '../../lib/cn';

const variantClasses = {
  green: 'bg-green',
  secondary: 'bg-secondary',
  red: 'bg-red',
  primary: 'bg-primary',
};

interface BadgeProps {
  variant?: keyof typeof variantClasses;
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ variant = 'green', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center h-21 px-6 py-2 text-12 leading-17 text-white font-normal rounded-sm',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
