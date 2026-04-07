import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

interface FilterField {
  label: string;
  value: string;
}

interface FilterSectionProps {
  filters?: FilterField[];
}

const defaultFilters: FilterField[] = [
  { label: 'RAM', value: '4-768 GB' },
  { label: 'Диски', value: 'Все' },
  { label: 'Цена', value: '7.89-920 €' },
];

export default function FilterSection({ filters = defaultFilters }: FilterSectionProps) {
  return (
    <section id="filter" className="py-60">
      <Container>
        <SectionHeading ghost="Наши сервера" title="Давайте подберем вам сервер" />
        <div className="flex flex-col desktop:flex-row items-stretch desktop:items-end gap-20">
          <div className="grid grid-cols-1 tablet:grid-cols-3 gap-20 flex-1">
            {filters.map((f) => (
              <div
                key={f.label}
                className="border border-primary h-48 px-14 flex flex-col justify-center"
              >
                <span className="text-12 leading-17 font-medium text-secondary/60 uppercase tracking-wider">
                  {f.label}
                </span>
                <span className="text-14 leading-20 font-medium text-white">{f.value}</span>
              </div>
            ))}
          </div>
          <Button variant="accent" className="h-48 w-[10.8rem]">
            Поиск
          </Button>
        </div>
        <div className="mt-20">
          <a href="/search" className="text-14 text-secondary hover:text-accent">
            Больше опций
          </a>
        </div>
      </Container>
    </section>
  );
}
