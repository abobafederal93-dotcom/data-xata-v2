import Link from 'next/link';
import { cn } from '../../lib/cn';

type ButtonVariant = 'accent' | 'primary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  rel?: string;
  target?: string;
}

const base = 'inline-flex items-center justify-center font-semibold transition-colors cursor-pointer';

const variants: Record<ButtonVariant, string> = {
  accent: 'bg-accent hover:bg-accent-dark text-white',
  primary: 'bg-primary hover:bg-primary-dark text-white',
  outline: 'border border-white text-white hover:bg-white/10',
  ghost: 'text-white hover:text-accent underline-offset-2',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-36 px-16 text-14 leading-20 font-medium',
  md: 'h-48 px-24 text-16 leading-23',
  lg: 'h-48 px-40 text-16 leading-23',
};

export default function Button({
  variant = 'accent',
  size = 'md',
  href,
  children,
  className,
  type = 'button',
  fullWidth,
  rel,
  target,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className);

  if (href) {
    if (href.startsWith('http') || href.startsWith('tg:') || href.startsWith('skype:')) {
      return (
        <a href={href} className={classes} rel={rel} target={target}>
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
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
