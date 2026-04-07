import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Icon from '../ui/Icon';

interface OrderStep {
  id: number;
  title: string;
  description: string;
}

interface OrderProcessProps {
  steps: readonly OrderStep[];
}

export default function OrderProcess({ steps }: OrderProcessProps) {
  return (
    <section className="py-60">
      <Container>
        <SectionHeading ghost="Как оформить заказ?" title="Пошаговая инструкция" />
        <div className="mt-30 flex flex-col desktop:flex-row gap-30">
          {steps.map((step) => (
            <div key={step.id} className="flex-1 flex flex-col gap-16">
              <div className="w-32 h-32 rounded-full bg-accent flex items-center justify-center">
                <Icon name="check" className="text-16 text-white" />
              </div>
              <h3 className="text-25 leading-36 font-medium text-white">{step.title}</h3>
              <p className="text-14 leading-17 text-[#839ada]">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
