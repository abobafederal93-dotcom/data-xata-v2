import Container from '../../../components/ui/Container';
import Breadcrumb from '../../../components/ui/Breadcrumb';
import PromoBanner from '../../../components/ui/PromoBanner';
import ArticleLayout from '../../../components/article/ArticleLayout';
import ArticleSidebar, { type TocItem } from '../../../components/article/ArticleSidebar';
import ArticleContent, { type ArticleBlock } from '../../../components/article/ArticleContent';
import Button from '../../../components/ui/Button';
import SectionHeading from '../../../components/ui/SectionHeading';

const tocItems: TocItem[] = [
  { id: 'prostranstva', label: 'Пространства', level: 1 },
  { id: 'monitoring', label: 'Мониторинг', level: 1 },
  { id: 'pgadmin', label: 'PGadmin', level: 1 },
  { id: 'baza', label: 'База данных', level: 1, active: true },
  { id: 'cpanel', label: 'cPanel', level: 2 },
  { id: 'whm', label: 'WHM', level: 2 },
  { id: 'openvpn', label: 'OpenVPN', level: 2 },
  { id: 'obnovlenie', label: 'Обновление', level: 1 },
  { id: 'ssl', label: 'SSL', level: 1 },
];

const content: ArticleBlock[] = [
  { type: 'h1', text: 'Нет подключения к Интернету после обновления' },
  {
    type: 'paragraph',
    text: 'После очередного обновления операционной системы пользователи могут столкнуться с проблемой отсутствия подключения к Интернету. Эта проблема может быть вызвана различными причинами — от некорректных драйверов до неправильных настроек сети.',
  },
  { type: 'h2', text: 'Пространства и мониторинг' },
  {
    type: 'paragraph',
    text: 'У меня в тарифном плане 2 базы данных, и их размер меньше 8 ГБ (4300 МБ + 3000 МБ). Тем не менее, мониторинг показывает превышение квот, и часть запросов отбрасывается.',
  },
  {
    type: 'blockquote',
    text: 'Важно: всегда делайте резервную копию базы данных перед внесением изменений в конфигурацию сервера.',
  },
  { type: 'h3', text: 'База данных' },
  {
    type: 'paragraph',
    text: 'Перед тем как приступить к решению проблемы, важно убедиться, что база данных настроена корректно и доступна для подключения. Проверьте параметры подключения и убедитесь, что сервер базы данных запущен.',
  },
  {
    type: 'inline_code_demo',
    text: 'Если запрос возвращает ошибку, проверьте функцию',
  },
  {
    type: 'code_block',
    text: '// Limit Upload File Size\nc.Request.Body = http.MaxBytesReader(c.Writer, c.Request.Body, MAX_UPLOAD_SIZE)\nif err := c.Request.ParseMultipartForm(MAX_UPLOAD_SIZE); err != nil {\n    c.AbortWithStatusJSON(400, gin.H{"error": "file too large"})\n    return\n}',
  },
  { type: 'h4', text: 'Скриншот' },
  { type: 'image', src: '/img/article-screenshot.png', alt: 'Скриншот' },
  { type: 'h4', text: 'Каковы требования' },
  {
    type: 'paragraph',
    text: 'Откройте раздел Network Setup и убедитесь, что все сетевые интерфейсы настроены корректно. Проверьте IP-адреса, маску подсети и шлюз по умолчанию.',
  },
  {
    type: 'list',
    ordered: true,
    items: [
      'Внешняя и внутренняя система видео наблюдения',
      'Контроль доступа по биометрии',
      'Резервное электропитание (UPS + дизель-генератор)',
      'Климат-контроль и пожаротушение',
    ],
  },
  {
    type: 'list',
    items: [
      'Защита от DDoS-атак',
      'Резервное копирование каждые 24 часа',
      'Бесплатный SSL-сертификат',
      'Круглосуточная техническая поддержка',
    ],
  },
  { type: 'h3', text: 'Сертификация дата-центров' },
  {
    type: 'table',
    headers: ['Дата-центр', 'SOC 1 Type II', 'SOC 2 Type II', 'ISO/IEC 27001:2013', 'PCI-DSS'],
    rows: [
      ['NYC1', 'Да', 'Да', 'Да', 'Да'],
      ['LON1', 'Да', 'Да', 'Да', 'Нет'],
      ['AMS3', 'Да', 'Да', 'Да', 'Да'],
      ['FRA2', 'Да', 'Да', 'Да', 'Да'],
      ['SGP1', 'Да', 'Нет', 'Да', 'Да'],
    ],
  },
  { type: 'h2', text: 'Обновление' },
  {
    type: 'paragraph',
    text: 'Иногда обновление системы может привести к конфликтам с существующими настройками сети. В этом случае рекомендуется откатить обновление или установить последние патчи.',
  },
];

export default function ArticlePage() {
  return (
    <main>
      <section className="pt-40 pb-60">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Блог', href: '/blog' },
              { label: 'Нет подключения к Интернету после обновления' },
            ]}
          />
          <ArticleLayout>
            <ArticleContent content={content} />
            <ArticleSidebar items={tocItems} />
          </ArticleLayout>

          {/* "Впервые на сайте?" промо */}
          <div className="relative mt-60 bg-[#16a0cb] p-30 desktop:p-40 overflow-hidden">
            <div className="absolute -top-[2.1rem] left-40 w-[15.7rem] h-43 bg-[#d66702] text-white text-16 leading-23 font-semibold flex items-center justify-center px-15">
              Хочу скидку!
            </div>
            <span
              className="block text-30 leading-43 desktop:text-55 desktop:leading-79 font-bold text-white opacity-[0.08] -mb-20 desktop:-mb-30 whitespace-nowrap pointer-events-none select-none"
              aria-hidden="true"
            >
              Хочу скидку!
            </span>
            <div className="relative flex flex-col tablet:flex-row tablet:items-center tablet:justify-between gap-20">
              <h2 className="text-25 leading-28 desktop:text-40 desktop:leading-58 font-medium text-white">
                Впервые на сайте?
              </h2>
              <Button href="/" variant="white" className="w-[17.1rem]">
                Хочу выиграть!
              </Button>
            </div>
          </div>

          {/* Читайте также */}
          <div className="mt-60">
            <SectionHeading ghost="Наши рекомендации" title="Читайте также" className="mb-30" />
            <div className="grid grid-cols-1 tablet:grid-cols-3 gap-20">
              {[
                { title: 'Плавающий IP-адрес для капли с SSL', bg: 'border border-white/10' },
                { title: 'Пространства и мониторинг', bg: 'bg-[#215aee]' },
                { title: 'Нет подключения к Интернету после обновления', bg: 'border border-white/10' },
              ].map((c) => (
                <article key={c.title} className={'p-24 flex flex-col gap-15 min-h-[19.5rem] ' + c.bg}>
                  <h3 className="text-20 leading-29 desktop:text-30 desktop:leading-43 font-medium text-white">
                    {c.title}
                  </h3>
                  <p className="text-14 leading-17 text-secondary">
                    Раньше это работало нормально, пока я не реализовал ssl моих каплях, поскольку я не могу...
                  </p>
                  <div className="flex flex-wrap items-center gap-8 mt-auto">
                    <span className="text-12 leading-17 text-white bg-secondary px-6 py-2">Сеть</span>
                    <span className="text-12 leading-17 text-white bg-secondary px-6 py-2">Мониторинг</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="pb-60">
        <Container>
          <PromoBanner />
        </Container>
      </section>
    </main>
  );
}
