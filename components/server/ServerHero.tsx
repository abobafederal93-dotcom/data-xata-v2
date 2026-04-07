import type { Server } from '../../types/server';
import Breadcrumb from '../ui/Breadcrumb';
import SectionHeading from '../ui/SectionHeading';

interface ServerHeroProps {
  server: Server;
}

export default function ServerHero({ server }: ServerHeroProps) {
  return (
    <div className="mb-40">
      <Breadcrumb items={[{ label: 'Описание сервера' }]} className="mb-30" />
      <SectionHeading ghost="Сервер" title="Описание сервера" />
      <div className="text-30 leading-43 font-medium text-white mb-15">{server.name}</div>
      <p className="text-14 leading-17 font-normal text-secondary max-w-[60rem]">
        {server.description ?? server.shortDescription ?? server.cpu}
      </p>
    </div>
  );
}
