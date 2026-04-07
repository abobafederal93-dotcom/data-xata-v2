import Container from '../../../components/ui/Container';
import Breadcrumb from '../../../components/ui/Breadcrumb';
import SectionHeading from '../../../components/ui/SectionHeading';
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
  {
    type: 'p',
    text: 'После очередного обновления операционной системы пользователи могут столкнуться с проблемой отсутствия подключения к Интернету. Эта проблема может быть вызвана различными причинами — от некорректных драйверов до неправильных настроек сети.',
  },
  { type: 'h2', text: 'База данных' },
  {
    type: 'p',
    text: 'Перед тем как приступить к решению проблемы, важно убедиться, что база данных настроена корректно и доступна для подключения. Проверьте параметры подключения и убедитесь, что сервер базы данных запущен.',
  },
  {
    type: 'highlight',
    text: 'Важно: всегда делайте резервную копию базы данных перед внесением изменений в конфигурацию.',
  },
  { type: 'h3', text: 'cPanel' },
  {
    type: 'p',
    text: 'cPanel предоставляет удобный интерфейс для управления хостингом и базами данных. Откройте панель управления и перейдите в раздел «Базы данных MySQL» для проверки настроек.',
  },
  { type: 'screenshot', text: 'Скриншот: панель cPanel' },
  { type: 'h3', text: 'WHM' },
  {
    type: 'p',
    text: 'WebHost Manager (WHM) — это административная панель для управления сервером. Здесь можно настроить параметры сети и проверить статус сетевых служб.',
  },
  { type: 'h4', text: 'Проверка сетевых интерфейсов' },
  {
    type: 'p',
    text: 'Откройте раздел «Network Setup» и убедитесь, что все сетевые интерфейсы настроены корректно. Проверьте IP-адреса, маску подсети и шлюз по умолчанию.',
  },
  { type: 'h3', text: 'OpenVPN' },
  {
    type: 'p',
    text: 'Если вы используете OpenVPN, проблема с подключением может быть связана с настройками VPN-клиента. Проверьте конфигурационные файлы и сертификаты.',
  },
  { type: 'h2', text: 'Обновление' },
  {
    type: 'p',
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
          <SectionHeading
            ghost="Блог"
            title="Нет подключения к Интернету после обновления"
            className="mt-20"
          />
          <ArticleLayout>
            <ArticleSidebar items={tocItems} />
            <ArticleContent content={content} />
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
