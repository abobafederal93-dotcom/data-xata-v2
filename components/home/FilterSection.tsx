import { cn } from '@/lib/cn';
import Container from '@/components/ui/Container';

const categories = [
  { label: 'Все серверы', value: 'all', active: true },
  { label: 'VPS/VDS', value: 'vps' },
  { label: 'Выделенные', value: 'ds' },
  { label: 'Германия', value: 'de' },
  { label: 'Нидерланды', value: 'nl' },
  { label: 'Эстония', value: 'ee' },
  { label: 'Россия', value: 'ru' },
  { label: 'С DDoS защитой', value: 'ddos' },
  { label: 'Мгновенная активация', value: 'fast' },
  { label: 'До €50/мес', value: 'cheap' },
];

export default function FilterSection() {
  return (
    <section className="py-20 border-b border-white/10">
      <Container>
        <div className="flex items-center flex-wrap gap-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={cn(
                'px-20 h-36 text-14 leading-20 font-medium transition-colors whitespace-nowrap',
                cat.active
                  ? 'bg-accent text-white'
                  : 'bg-white/5 text-secondary hover:bg-white/10 hover:text-white',
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
