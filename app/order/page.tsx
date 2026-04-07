import Container from '../../components/ui/Container';
import Breadcrumb from '../../components/ui/Breadcrumb';
import SectionHeading from '../../components/ui/SectionHeading';
import PromoBanner from '../../components/ui/PromoBanner';
import Button from '../../components/ui/Button';
import Icon from '../../components/ui/Icon';
import OrderSummary from '../../components/order/OrderSummary';
import OrderForm from '../../components/order/OrderForm';
import type { IconName } from '../../types/ui';

export default function OrderPage() {
  const summary = [
    { label: 'Аренда сервера', description: '2x Xeon E5-2430 v2 • 32GB DDR3 • 2x240GB SSD' },
    { label: 'Подключение', description: '1 Gbps, 100TB, NL - Netherlands' },
    { label: 'Абонплата', description: '€99' },
  ];

  const formSections = [
    {
      title: 'Контактные данные',
      fields: [
        { id: 'name', label: 'Ваше имя', type: 'text', placeholder: 'Иван Иванов' },
        { id: 'phone', label: 'Номер телефона *', type: 'tel', placeholder: '+380' },
        { id: 'country', label: 'Страна *', type: 'text', placeholder: 'Украина' },
        { id: 'city', label: 'Город', type: 'text', placeholder: 'Киев' },
        { id: 'street', label: 'Улица', type: 'text', placeholder: 'ул. Хрещатик' },
        { id: 'address', label: 'Квартира / Дом / Индекс', type: 'text', placeholder: '', triple: true },
      ],
    },
    {
      title: 'Реквизиты организации',
      fields: [
        { id: 'org-name', label: 'Название организации', type: 'text', placeholder: 'ООО «Компания»' },
        { id: 'org-phone', label: 'Номер телефона *', type: 'tel', placeholder: '+380' },
        { id: 'org-country', label: 'Страна *', type: 'text', placeholder: 'Украина' },
        { id: 'org-city', label: 'Город', type: 'text', placeholder: 'Киев' },
        { id: 'org-street', label: 'Улица', type: 'text', placeholder: '' },
        { id: 'org-address', label: 'Квартира / Дом / Индекс', type: 'text', placeholder: '', triple: true },
      ],
    },
  ];

  const socials: { name: IconName; label: string }[] = [
    { name: 'fb', label: 'Facebook' },
    { name: 'tg', label: 'Twitter' },
    { name: 'email', label: 'Gmail' },
    { name: 'repository', label: 'Github' },
    { name: 'compare', label: 'Yandex' },
    { name: 'email', label: 'Mail.ru' },
  ];

  return (
    <main>
      <Container>
        <div className="pt-40">
          <Breadcrumb items={[{ label: 'Оформление заказа' }]} className="mb-30" />
          <SectionHeading ghost="Заказ" title="Оформление заказа" />

          <OrderSummary items={summary} total="Итого: €99.00" />

          <div className="bg-gradient-to-r from-accent to-accent-dark rounded-md p-40 mb-40">
            <span className="block text-55 leading-79 font-bold text-white opacity-[0.08] -mb-49 whitespace-nowrap pointer-events-none select-none">
              Получить доступ
            </span>
            <h2 className="text-25 leading-36 desktop:text-40 desktop:leading-58 font-medium text-white mb-20">
              Выслать доступ на этот E-mail
            </h2>
            <div className="flex flex-col tablet:flex-row gap-15 items-stretch tablet:items-center mb-20">
              <input
                type="email"
                placeholder="Введите e-mail"
                className="flex-1 desktop:max-w-[60.9rem] h-48 px-14 bg-white text-bg text-14 rounded-sm"
              />
              <Button variant="primary" className="h-48">
                Отправить
              </Button>
            </div>
            <p className="text-16 leading-23 font-medium text-white mb-15">
              или зарегистрироваться через социальные сети
            </p>
            <div className="flex flex-wrap gap-10">
              {socials.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={s.label}
                  className="w-36 h-36 bg-white/20 hover:bg-white/30 rounded-sm flex items-center justify-center"
                >
                  <Icon name={s.name} className="text-16 text-white" />
                </button>
              ))}
            </div>
          </div>

          <div className="mb-30">
            <span className="block text-55 leading-79 font-bold text-white opacity-[0.08] -mb-49 whitespace-nowrap pointer-events-none select-none">
              Мои реквизиты
            </span>
            <h1 className="text-40 leading-58 font-medium text-white">
              Хочу указать все свои реквизиты сейчас
            </h1>
          </div>

          <OrderForm sections={formSections} />

          <Button variant="outline" className="w-full h-48 mb-40">
            Укажу данные позже
          </Button>

          <div className="mb-40">
            <div className="mb-30">
              <span className="block text-55 leading-79 font-bold text-white opacity-[0.08] -mb-49 whitespace-nowrap pointer-events-none select-none">
                Методы
              </span>
              <h2 className="text-40 leading-58 font-medium text-white">Оплата</h2>
            </div>
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-20">
              <div className="border border-primary rounded-sm p-20">
                <h3 className="text-20 leading-29 font-medium text-white mb-20">
                  Срок оплаты
                </h3>
                <div className="flex flex-col gap-10">
                  {['1 месяц', '3 месяца', '6 месяцев', '12 месяцев'].map((p) => (
                    <label
                      key={p}
                      className="h-36 px-15 border border-primary rounded-sm flex items-center text-14 text-white cursor-pointer hover:bg-primary/20"
                    >
                      {p}
                    </label>
                  ))}
                </div>
              </div>
              <div className="border border-primary rounded-sm p-20">
                <h3 className="text-20 leading-29 font-medium text-white mb-20">
                  Способ оплаты
                </h3>
                <div className="flex flex-col gap-10">
                  {['Visa / MasterCard', 'PayPal', 'Bitcoin', 'Bank transfer'].map((p) => (
                    <label
                      key={p}
                      className="h-36 px-15 border border-primary rounded-sm flex items-center text-14 text-white cursor-pointer hover:bg-primary/20"
                    >
                      {p}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="py-60">
        <PromoBanner promoText="Промокод действует на все выделенные серверы" />
      </Container>
    </main>
  );
}
