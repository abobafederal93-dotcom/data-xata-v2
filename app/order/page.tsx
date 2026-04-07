import Container from '../../components/ui/Container';
import Breadcrumb from '../../components/ui/Breadcrumb';
import PromoBanner from '../../components/ui/PromoBanner';
import OrderSummary from '../../components/order/OrderSummary';
import OrderForm from '../../components/order/OrderForm';

export default function OrderPage() {
  const summary = [
    { label: 'Аренда сервера', description: '2x Xeon E5-2430 v2 • 32GB DDR3 • 2x240GB SSD' },
    { label: 'Подключение', description: '1 Gbps, 100TB, NL - Netherlands' },
    { label: 'Абонплата', description: '€99' },
  ];

  return (
    <main>
      <Container>
        <div className="pt-40">
          <Breadcrumb items={[{ label: 'Оформление заказа' }]} className="mb-30" />

          <OrderSummary items={summary} />

          <OrderForm />
        </div>
      </Container>

      <Container className="py-60">
        <PromoBanner />
      </Container>
    </main>
  );
}
