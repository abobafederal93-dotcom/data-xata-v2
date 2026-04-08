import Container from '@/components/ui/Container';
import FilterSidebar from '@/components/search/FilterSidebar';
import SearchToolbar from '@/components/search/SearchToolbar';
import SearchServerCard from '@/components/search/SearchServerCard';
import Pagination from '@/components/search/Pagination';
import { filterGroups } from '@/data/filters';
import { servers } from '@/data/servers';

export default function SearchPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-primary py-40 desktop:py-60">
        <Container>
          <nav className="flex items-center gap-8 mb-20" aria-label="Breadcrumb">
            <a href="/" className="text-secondary hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
            </a>
            <span className="w-18 h-1 bg-secondary" />
            <span className="text-14 leading-20 font-normal text-secondary">Поиск</span>
            <span className="w-18 h-1 bg-secondary" />
            <span className="text-14 leading-20 font-normal text-secondary">Результаты поиска</span>
          </nav>
          <h1 className="text-40 leading-58 font-medium text-white">Результаты поиска</h1>
        </Container>
      </div>

      <Container className="py-40">
        <div className="flex flex-col desktop:flex-row gap-30">
          {/* Sidebar */}
          <FilterSidebar groups={filterGroups} />

          {/* Main */}
          <div className="flex-1 min-w-0">
            <SearchToolbar />

            <div className="flex flex-col gap-16 mt-20">
              {servers.map((server) => (
                <SearchServerCard
                  key={server.id}
                  cpu={server.cpu}
                  type={server.type}
                  ram={server.ram}
                  ssd={server.ssd}
                  hdd={server.hdd}
                  location={server.location}
                  network={server.network}
                  traffic={server.traffic}
                  flag={server.flag}
                  price={server.price}
                  oldPrice={server.oldPrice}
                  freeSetup={server.freeSetup}
                  fastAccess={server.fastAccess}
                  badges={server.badges}
                  tags={server.tags}
                  host={server.host}
                  rating={server.rating}
                  reviews={server.reviews}
                  osOptions="Windows 2020, 2016 • Linux • CentOS, Debian,Ubuntu"
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-40 flex justify-center">
              <Pagination total={7} current={1} baseHref="/search" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
