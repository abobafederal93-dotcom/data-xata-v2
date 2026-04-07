import Container from '../../components/ui/Container';
import Breadcrumb from '../../components/ui/Breadcrumb';
import SectionHeading from '../../components/ui/SectionHeading';
import PromoBanner from '../../components/ui/PromoBanner';
import FilterSidebar from '../../components/search/FilterSidebar';
import SearchToolbar from '../../components/search/SearchToolbar';
import ServerCard from '../../components/search/ServerCard';
import Pagination from '../../components/search/Pagination';
import { servers } from '../../data/servers';
import type { IconName } from '../../types';

const sidebarGroups: { id: string; title: string; icon: IconName; active?: boolean }[] = [
  { id: 'main', title: 'Основные', icon: 'server' },
  { id: 'price', title: 'Цена', icon: 'info' },
  { id: 'provider', title: 'Провайдер', icon: 'compare' },
  { id: 'cpu', title: 'Процессор', icon: 'tool' },
  { id: 'ram', title: 'Память', icon: 'memory' },
  { id: 'disk', title: 'Жесткий диск', icon: 'hdd', active: true },
  { id: 'speed', title: 'Скорость', icon: 'speed' },
  { id: 'os', title: 'ПО', icon: 'windows' },
  { id: 'virtualization', title: 'Виртуализация', icon: 'cloud' },
  { id: 'location', title: 'Локация', icon: 'map' },
  { id: 'features', title: 'Особенности', icon: 'star' },
];

export default function SearchPage() {
  return (
    <main>
      <section className="pt-40 pb-60">
        <Container>
          <Breadcrumb items={[{ label: 'Результаты поиска' }]} />
          <SectionHeading
            ghost="Поиск сервера"
            title="Результаты поиска"
            as="h1"
            className="mt-20"
          />
          <SearchToolbar className="mt-20" />
          <div className="flex flex-col desktop:flex-row gap-30 mt-30">
            <FilterSidebar groups={sidebarGroups} />
            <div className="flex-1 min-w-0 flex flex-col gap-20">
              {servers.map((server) => (
                <ServerCard key={server.id} server={server} />
              ))}
              <Pagination current={1} total={10} />
            </div>
          </div>
        </Container>
      </section>
      <Container className="pb-80">
        <PromoBanner
          ghost="Не нашли подходящий сервер?"
          title="Подберём индивидуально"
          subtitle="Оставьте заявку и мы предложим лучший вариант"
          buttonLabel="Связаться"
          buttonHref="/order"
        />
      </Container>
    </main>
  );
}
