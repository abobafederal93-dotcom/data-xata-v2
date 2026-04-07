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
  { label: 'Ram', value: '4-768 GB' },
  { label: 'Диски', value: 'Все' },
  { label: 'Цена', value: '7.89-920 €' },
];

export default function FilterSection({ filters = defaultFilters }: FilterSectionProps) {
  return (
    <section id="filter" className="py-60">
      <Container>
        <SectionHeading ghost="Наши сервера" title="Давайте подберем вам сервер" />
        <div className="mt-30 flex flex-col desktop:flex-row items-stretch gap-20">
          {filters.map((f) => (
            <div
              key={f.label}
              className="bg-white h-48 px-14 flex items-center justify-between desktop:w-[33.4rem] flex-1"
            >
              <span className="text-14 leading-20 font-medium text-[#0041be]">{f.label}</span>
              <span className="text-14 leading-20 font-medium text-accent text-right">
                {f.value}
              </span>
            </div>
          ))}
          <Button variant="accent" className="h-48 w-full desktop:w-[10.8rem]">
            Поиск
          </Button>
        </div>
        <div className="mt-20">
          <a href="/search" className="text-14 leading-20 font-medium text-[#839ada] hover:text-accent">
            Больше опций
          </a>
        </div>
      </Container>
    </section>
  );
}
