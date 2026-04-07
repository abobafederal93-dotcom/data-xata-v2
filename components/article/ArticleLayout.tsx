interface ArticleLayoutProps {
  children: React.ReactNode;
}

export default function ArticleLayout({ children }: ArticleLayoutProps) {
  return (
    <div className="grid grid-cols-1 desktop:grid-cols-[25.5rem_1fr] gap-30 mt-40">
      {children}
    </div>
  );
}
