import { cn } from '@/lib/cn';

interface ActionBarProps {
  text: string;
  className?: string;
}

export default function ActionBar({ text, className }: ActionBarProps) {
  return (
    <div
      className={cn(
        'bg-accent text-white text-14 leading-20 font-medium text-center py-10 px-20',
        className,
      )}
    >
      {text}
    </div>
  );
}
