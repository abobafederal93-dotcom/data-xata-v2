import { cn } from '@/lib/cn';

interface ArticleLayoutProps {
  sidebar: React.ReactNode;
  content: React.ReactNode;
}

export default function ArticleLayout({ sidebar, content }: ArticleLayoutProps) {
  return (
    <div className={cn('flex flex-col desktop:flex-row gap-30 items-start')}>
      {sidebar}
      {content}
    </div>
  );
}
