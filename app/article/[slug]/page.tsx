import Container from '@/components/ui/Container';
import ArticleLayout from '@/components/article/ArticleLayout';
import ArticleSidebar from '@/components/article/ArticleSidebar';
import ArticleContent from '@/components/article/ArticleContent';
import { articles } from '@/data/articles';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug) ?? articles[0];
  const related = articles.filter((a) => a.slug !== article.slug);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-primary py-30 desktop:py-40">
        <Container>
          <h1 className="text-40 leading-58 font-medium text-white">
            {article.title}
          </h1>
        </Container>
      </div>

      <Container className="py-40">
        <ArticleLayout
          sidebar={
            <ArticleSidebar
              currentArticle={article}
              relatedArticles={related}
            />
          }
          content={
            <ArticleContent
              title={article.title}
              categories={[article.category]}
            />
          }
        />
      </Container>

      {/* Related section */}
      <div className="border-t border-white/10">
        <Container className="py-40">
          <h2 className="text-40 leading-58 font-medium text-white mb-24">Читайте также</h2>
          <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-20">
            {related.map((rel) => (
              <a
                key={rel.slug}
                href={`/article/${rel.slug}`}
                className="flex flex-col gap-12 border border-white/10 rounded-sm p-20 hover:border-white/30 transition-colors group"
              >
                <div className="flex flex-wrap gap-6">
                  <span className="inline-flex items-center text-12 leading-17 font-normal px-6 py-2 rounded-sm bg-secondary/20 text-white">
                    {rel.category}
                  </span>
                </div>
                <h3 className="text-30 leading-43 font-medium text-white group-hover:text-accent transition-colors">
                  {rel.title}
                </h3>
                <p className="text-14 leading-17 font-normal text-secondary line-clamp-3">
                  Раньше это работало нормально, пока я не реализовал ssl моих каплях, поскольку я хочу, чтобы мой плавающий IP передавал трафик по https.
                </p>
              </a>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
