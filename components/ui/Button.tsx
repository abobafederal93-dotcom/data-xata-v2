import { cn } from '@/lib/cn';

interface ButtonProps {
  variant?: 'accent' | 'primary' | 'outline' | 'ghost';
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const variantClasses = {
  accent: 'bg-accent hover:bg-accent-dark',
  primary: 'bg-primary hover:bg-primary-hover',
  outline: 'border border-primary bg-transparent hover:bg-primary/10',
  ghost: 'bg-transparent text-secondary hover:text-white',
};

export default function Button({
  variant = 'primary',
  href,
  children,
  className,
  type = 'button',
  onClick,
}: ButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center gap-8 text-16 leading-23 font-semibold text-white transition-colors',
    variantClasses[variant],
    className,
  );

  if (href) {
    return (
      <a href={href} className={base}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
