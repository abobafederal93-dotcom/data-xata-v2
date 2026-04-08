interface ArticleLayoutProps {
  children: React.ReactNode;
}

export default function ArticleLayout({ children }: ArticleLayoutProps) {
  return (
    <div className="flex flex-col desktop:grid desktop:grid-cols-[25.5rem_82.5rem] desktop:gap-30 desktop:items-start mt-40">
      {children}
    </div>
  );
}
