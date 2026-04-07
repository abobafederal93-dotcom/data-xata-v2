import Container from '../../../components/ui/Container';
import Breadcrumb from '../../../components/ui/Breadcrumb';
import PromoBanner from '../../../components/ui/PromoBanner';
import ArticleLayout from '../../../components/article/ArticleLayout';
import ArticleSidebar, { type TocItem } from '../../../components/article/ArticleSidebar';
import ArticleContent, { type ArticleBlock } from '../../../components/article/ArticleContent';

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
