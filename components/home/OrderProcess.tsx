import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
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
        <SectionHeading ghost="Как оформить заказ?" title="Начитались? Айда выбирать!" />
        <h3 className="text-20 leading-29 desktop:text-30 desktop:leading-43 font-medium text-white mb-20">
          Как оформить заказ?
        </h3>
        <p className="text-14 leading-17 text-secondary max-w-[60rem] mb-30">
          Выбирайте сервер прямо сейчас или задавайте вопросы в чате — мы всегда на связи и поможем
          с подбором оптимальной конфигурации.
        </p>
        <div className="flex flex-col desktop:flex-row gap-20 mb-60">
          <Button href="/search" variant="accent" size="lg">
            Искать сейчас
          </Button>
          <Button href="https://cp.data-xata.com/" variant="outline" size="lg">
            Спросить в чате
          </Button>
        </div>
        <SectionHeading ghost="Процесс заказа" title="Процесс заказа" />
        <div className="flex desktop:grid desktop:grid-cols-4 gap-20 overflow-x-auto desktop:overflow-visible pb-20 desktop:pb-0">
          {steps.map((step, index) => (
            <div key={step.id} className="flex-shrink-0 w-[26rem] desktop:w-auto flex gap-16">
              <div className="flex-1">
                <h3 className="text-20 leading-29 desktop:text-25 desktop:leading-36 font-medium text-white mb-12">
                  {step.title}
                </h3>
                <p className="text-14 leading-17 text-secondary">{step.description}</p>
              </div>
              <div className="pt-16 text-accent">
                {index === steps.length - 1 ? (
                  <Icon name="check" className="text-20" />
                ) : (
                  <Icon name="caret-right" className="text-20" />
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
