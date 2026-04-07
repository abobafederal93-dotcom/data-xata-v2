import Link from 'next/link';
import { cn } from '../../lib/cn';

type ButtonVariant =
  | 'accent'
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'outline-white'
  | 'white'
  | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit';
}

const base =
  'inline-flex items-center justify-center transition-colors cursor-pointer';

const variants: Record<ButtonVariant, string> = {
  accent:
    'bg-accent text-white h-48 px-20 text-16 leading-23 font-semibold hover:bg-accent-dark',
  primary:
    'bg-primary text-white h-48 px-20 text-16 leading-23 font-semibold hover:bg-primary-dark',
  secondary:
    'bg-[#002f8e] text-white h-43 px-20 text-16 leading-23 font-semibold',
  outline:
    'border border-white/30 text-white h-36 px-15 text-13 leading-20 hover:bg-white hover:text-bg',
  'outline-white':
    'border border-white text-white h-48 px-20 text-16 leading-23 font-semibold hover:bg-white hover:text-bg',
  white:
    'bg-white text-bg h-48 px-20 text-16 leading-23 font-semibold hover:bg-white/90',
  ghost:
    'bg-transparent text-white text-14 leading-20 hover:text-accent',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-36 px-15',
  md: 'h-48 px-20',
  lg: 'h-48 px-30',
};

export default function Button({
  variant = 'accent',
  size,
  href,
  external,
  className,
  children,
  type,
}: ButtonProps) {
  const classes = cn(base, variants[variant], size && sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} rel="nofollow noopener" target="_blank">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type || 'button'} className={classes}>
      {children}
    </button>
  );
}
