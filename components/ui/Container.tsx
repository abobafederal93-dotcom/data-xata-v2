import { cn } from '@/lib/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-[111rem] px-20 desktop:px-0', className)}>
      {children}
    </div>
  );
}
