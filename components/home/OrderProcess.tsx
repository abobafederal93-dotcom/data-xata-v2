import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

interface OrderStep {
  id: number;
  title: string;
  description: string;
}

interface OrderProcessProps {
  steps?: readonly OrderStep[];
}

// Figma steps: y=3604/3635, fs=25 lh=36
const figmaSteps: { line1: string; line2: string }[] = [
  { line1: 'Приходи', line2: 'и выбирай' },
  { line1: 'Добавляй', line2: 'в корзину' },
  { line1: 'Оплачивай', line2: 'счёт' },
  { line1: 'Пользуйся', line2: 'сервисом' },
];

export default function OrderProcess(_props: OrderProcessProps) {
  return (
    <section className="py-60">
      <Container>
        {/* Top: Ghost + Title + Buttons */}
        <SectionHeading ghost="Как оформить заказ?" title="Начитались? Айда выбирать!" />
        <div className="mt-30 flex flex-col tablet:flex-row flex-wrap gap-20">
          <Button href="/search" variant="secondary" className="h-43 desktop:w-[13.5rem]">
            Искать сейчас
          </Button>
          <Button href="#chat" variant="accent" className="h-48 desktop:w-[15.5rem]">
            Спросить в чате
          </Button>
          <Button href="#callback" variant="white" className="h-48 desktop:w-[15.5rem]">
            Перезвоните мне
          </Button>
          <Button href="/contacts" variant="secondary" className="h-43 desktop:w-[13.5rem]">
            Контакты
          </Button>
        </div>

        {/* Bottom: Process steps */}
        <div className="mt-80">
          <SectionHeading ghost="Процесс заказа" title="Пошаговая инструкция" />
          <div className="mt-30 grid grid-cols-2 desktop:grid-cols-4 gap-30">
            {figmaSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <div className="text-25 leading-36 font-medium text-white">{step.line1}</div>
                <div className="text-25 leading-36 font-medium text-white">{step.line2}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
