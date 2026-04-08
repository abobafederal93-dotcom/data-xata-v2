import Container from '@/components/ui/Container';
import OrderSteps from '@/components/order/OrderSteps';
import OrderForm from '@/components/order/OrderForm';
import OrderSummary from '@/components/order/OrderSummary';
import { servers } from '@/data/servers';

export default function OrderPage() {
  const server = servers[0];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-primary py-40 desktop:py-60">
        <Container>
          <OrderSteps active={3} />
          <h1 className="text-40 leading-58 font-medium text-white mt-20">Оформление заказа</h1>
        </Container>
      </div>

      <Container className="py-40">
        <div className="flex flex-col desktop:flex-row gap-30 items-start">
          {/* Form */}
          <div className="flex-1 min-w-0">
            <OrderForm serverId={server.id} />
          </div>

          {/* Summary */}
          <div className="w-full desktop:w-[33rem] flex-shrink-0 desktop:sticky desktop:top-20">
            <OrderSummary server={server} />
          </div>
        </div>
      </Container>
    </div>
  );
}
