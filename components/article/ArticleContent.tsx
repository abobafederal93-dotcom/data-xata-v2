import { cn } from '@/lib/cn';

interface ArticleContentProps {
  title: string;
  categories: string[];
}

export default function ArticleContent({ title, categories }: ArticleContentProps) {
  return (
    <article className="flex-1 min-w-0 flex flex-col gap-24">
      {/* Categories */}
      <div className="flex flex-wrap gap-6">
        {categories.map((cat) => (
          <span
            key={cat}
            className="inline-flex items-center text-12 leading-17 font-normal px-6 py-2 rounded-sm bg-secondary/20 text-white"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* H1 */}
      <h1 className="text-30 leading-43 font-medium text-white">{title}</h1>

      {/* Article body */}
      <div className="flex flex-col gap-20">
        {/* Intro paragraph */}
        <p className="text-16 leading-23 font-normal text-secondary">
          У меня в тарифном плане 2 базы данных, и их размер меньше 8 ГБ (4300 МБ + 3000 МБ = 7300 МБ). Согласно вашей документации (любая операция) на IP-адрес в секунду для всех пространств.
        </p>

        {/* H2 */}
        <h2 className="text-20 leading-27 font-semibold text-white">Пространства и мониторинг (h2)</h2>

        <p className="text-16 leading-23 font-normal text-secondary">
          По умолчанию на экземплярах будет установлена чистая ОС без этих дополнительных приложений. Файлы (объекты), передаваемые в Vultr Object Storage, по умолчанию являются «частными», что означает, что только учётная запись владельца имеет к ним доступ.
        </p>

        {/* H3 */}
        <h3 className="text-25 leading-36 font-medium text-white">База данных (h3)</h3>

        <p className="text-16 leading-23 font-normal text-secondary">
          Раньше это работало нормально, пока я не реализовал ssl моих каплях, поскольку я хочу, чтобы мой плавающий IP передавал трафик по https.
        </p>

        {/* H4 */}
        <h4 className="text-20 leading-29 font-medium text-white">Каковы требования (h4)</h4>

        <p className="text-16 leading-23 font-normal text-secondary">
          Доступ к странице консоли на сайте DO. Когда я пытаюсь что-нибудь пинговать — получаю ошибку сети.
        </p>

        {/* Code block */}
        <div className="bg-article-bg rounded-sm p-20">
          <code className="text-12 leading-17 font-mono text-primary-dark block whitespace-pre-wrap">
            {`// Limit Upload File Size
c.Request.Body = http.MaxBytesReader(c.Writer, c.Request.Body, 10<<20)
fileHeader, err := c.FormFile("image")
if err != nil {
    // error handling
}
file, err := fileHeader.Open() // IT BREAKS HERE`}
          </code>
        </div>

        {/* Inline code example */}
        <p className="text-16 leading-23 font-normal text-secondary">
          Используйте функцию{' '}
          <code className="bg-white/10 px-4 py-1 rounded-sm text-cyan text-14 leading-17 font-mono">
            fileHeader.Open()
          </code>{' '}
          для открытия загруженного файла.
        </p>

        {/* Numbered list */}
        <div className="flex flex-col gap-8">
          <span className="text-12 leading-17 font-medium text-secondary">нумерованый список</span>
          <ol className="flex flex-col gap-8">
            {[
              'Внешняя и внутренняя система видео наблюдения',
              'Внешняя и внутренняя система видео наблюдения',
              'Внешняя и внутренняя система видео наблюдения',
              'Внешняя и внутренняя система видео наблюдения',
            ].map((item, i) => (
              <li key={i} className="text-14 leading-20 font-normal text-white">
                {i + 1}. {item}
              </li>
            ))}
          </ol>
        </div>

        {/* Unordered list */}
        <div className="flex flex-col gap-8">
          <span className="text-12 leading-17 font-medium text-secondary">ненумерованный список</span>
          <ul className="flex flex-col gap-8">
            {[
              'Внешняя и внутренняя система видео наблюдения',
              'Внешняя и внутренняя система видео наблюдения',
              'Внешняя и внутренняя система видео наблюдения',
              'Внешняя и внутренняя система видео наблюдения',
            ].map((item, i) => (
              <li key={i} className="text-14 leading-20 font-normal text-white">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Review block */}
        <div className="bg-primary rounded-sm p-20 flex gap-12">
          <div className="w-36 h-36 flex-shrink-0 flex items-center justify-center rounded-full bg-white/20">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="7" r="3" stroke="white" strokeWidth="1.2" />
              <path d="M3 17c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-14 leading-17 font-normal text-white">
            Я пробую это две недели назад, и мне нравится этот хостер! Очень стабильная пропускная способность и низкая задержка.
          </p>
        </div>

        {/* H4 screenshot */}
        <h4 className="text-20 leading-29 font-medium text-white">Скриншот (h4)</h4>

        <div className="rounded-sm overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center h-[20rem]">
          <span className="text-secondary text-14">[ изображение ]</span>
        </div>
      </div>
    </article>
  );
}
