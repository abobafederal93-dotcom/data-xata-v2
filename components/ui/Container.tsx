import { cn } from '../../lib/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-[144rem] px-15 tablet:px-40 desktop:px-165', className)}>
      {children}
    </div>
  );
}
