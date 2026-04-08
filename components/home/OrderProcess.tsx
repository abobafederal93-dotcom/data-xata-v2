import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import type { ProcessStep } from '@/data/process';

interface OrderProcessProps {
  steps: ProcessStep[];
}

export default function OrderProcess({ steps }: OrderProcessProps) {
  return (
    <section className="py-80">
      <Container>
        <SectionHeading
          ghost="Процесс"
          title="Как это"
          subtitle="работает?"
        />

        <div className="mt-60 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-30">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              {/* Big step number */}
              <span className="text-65 leading-65 font-bold text-accent select-none">
                {step.number}
              </span>

              {/* Icon */}
              <Icon name={step.icon} className="text-24 text-cyan mt-20 mb-15" />

              {/* Title */}
              <h3 className="text-20 leading-27 font-semibold text-white mb-10">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-16 leading-23 font-normal text-secondary">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
