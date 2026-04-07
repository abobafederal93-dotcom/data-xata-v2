import { cn } from '../../lib/cn';

interface ActionBarProps {
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function ActionBar({ text, children, className }: ActionBarProps) {
  return (
    <div
      className={cn(
        'h-40 flex items-center justify-center bg-gradient-to-r from-accent to-accent-dark px-15',
        className
      )}
    >
      <p className="text-14 leading-20 font-medium text-white text-center">{children ?? text}</p>
    </div>
  );
}
