import { cn } from '@/lib/cn';
import Container from '@/components/ui/Container';

export default function LetsStart() {
  return (
    <section className="py-80 bg-gradient-to-r from-accent to-accent-dark">
      <Container>
        <div className="flex flex-col desktop:flex-row items-center justify-between gap-40">
          {/* Heading */}
          <div>
            <span
              className="block text-65 leading-94 font-bold text-white opacity-[0.15] select-none pointer-events-none"
              aria-hidden="true"
            >
              Начнём?
            </span>
            <h2 className="-mt-65 text-60 leading-87 font-medium text-white">
              Начнём?
            </h2>
          </div>

          {/* CTA button */}
          <a
            href="/servers"
            className={cn(
              'flex items-center justify-center flex-shrink-0',
              'w-[35rem] h-48',
              'bg-white hover:bg-white/90 transition-colors',
              'text-16 leading-23 font-semibold text-accent',
            )}
          >
            Выбрать сервер
          </a>
        </div>
      </Container>
    </section>
  );
}
