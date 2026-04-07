import type { Server } from '../../types/server';
import Breadcrumb from '../ui/Breadcrumb';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

interface ServerHeroProps {
  server: Server;
}

export default function ServerHero({ server }: ServerHeroProps) {
  const tags = (server.tags ?? []).map((t) =>
    typeof t === 'string' ? t : t.label
  );

  return (
    <div className="mb-40">
      <Breadcrumb
        items={[
          { label: 'Аренда сервера', href: '/' },
          { label: server.name },
        ]}
        className="mb-30"
      />
      <SectionHeading ghost="Сервер" title="Описание сервера" />
      <h1 className="text-30 leading-43 font-medium text-white desktop:text-30 desktop:leading-43 mt-15 mb-15">
        {server.name}
      </h1>
      <p className="text-14 leading-17 font-normal text-secondary max-w-[60rem] mb-20">
        {server.description ?? server.shortDescription ?? server.cpu}
      </p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-8 mb-25">
          {tags.map((label) => (
            <span
              key={label}
              className="inline-flex items-center h-21 px-6 text-12 leading-17 font-medium text-white bg-secondary/30"
            >
              {label}
            </span>
          ))}
        </div>
      )}
      <div className="flex flex-wrap gap-15">
        <Button href="#specs" variant="outline">
          Смотреть подробности
        </Button>
        <Button href="#order" variant="accent">
          Заказать
        </Button>
      </div>
    </div>
  );
}
