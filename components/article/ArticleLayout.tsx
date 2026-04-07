interface ArticleLayoutProps {
  children: React.ReactNode;
}

export default function ArticleLayout({ children }: ArticleLayoutProps) {
  return (
    <div className="flex flex-col desktop:flex-row desktop:gap-30 desktop:items-start mt-40">
      {children}
    </div>
  );
}
