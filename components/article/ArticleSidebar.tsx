import { cn } from '@/lib/cn';
import type { Article } from '@/data/articles';

interface ArticleSidebarProps {
  currentArticle: Article;
  relatedArticles: Article[];
}

const allCategories = [
  'Мониторинг',
  'API',
  'Пространства',
  'База данных',
  'Обновление',
  'SSL',
  'Сеть',
];

export default function ArticleSidebar({ currentArticle, relatedArticles }: ArticleSidebarProps) {
  return (
    <aside className="w-full desktop:w-[25.5rem] flex-shrink-0 flex flex-col gap-24">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-8 flex-wrap" aria-label="Breadcrumb">
        <a href="/articles" className="text-14 leading-20 font-normal text-secondary hover:text-white transition-colors">
          Список статей
        </a>
        <span className="w-18 h-1 bg-secondary flex-shrink-0" />
        <span className="text-14 leading-20 font-normal text-secondary truncate max-w-[20rem]">
          {currentArticle.title}
        </span>
      </nav>

      {/* Categories */}
      <div className="flex flex-col gap-12">
        <h3 className="text-14 leading-20 font-medium text-white">Категории</h3>
        <div className="flex flex-wrap gap-6">
          {allCategories.map((cat) => (
            <a
              key={cat}
              href={`/articles?category=${encodeURIComponent(cat)}`}
              className={cn(
                'inline-flex items-center text-12 leading-17 font-normal px-6 py-2 rounded-sm transition-colors',
                cat === currentArticle.category
                  ? 'bg-white text-primary'
                  : 'bg-secondary/20 text-white hover:bg-secondary/30',
              )}
            >
              {cat}
            </a>
          ))}
        </div>
      </div>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <div className="flex flex-col gap-12">
          <h3 className="text-14 leading-20 font-medium text-white">Похожие статьи</h3>
          <div className="flex flex-col gap-8">
            {relatedArticles.map((article) => (
              <a
                key={article.slug}
                href={`/article/${article.slug}`}
                className="flex flex-col gap-4 group"
              >
                <span className="text-14 leading-20 font-normal text-secondary group-hover:text-white transition-colors">
                  {article.title}
                </span>
                <div className="flex items-center gap-6">
                  <span
                    className="inline-flex items-center text-12 leading-17 font-normal px-6 py-2 rounded-sm bg-secondary/20 text-white"
                  >
                    {article.category}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
