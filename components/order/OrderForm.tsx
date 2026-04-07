import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import Icon from '../ui/Icon';

interface OrderFormProps {
  email?: string;
}

const requisites: { id: string; label: string }[] = [
  { id: 'name', label: 'Ваше имя' },
  { id: 'country', label: 'Страна*' },
  { id: 'city', label: 'Город*' },
  { id: 'street', label: 'Улица' },
  { id: 'house', label: 'Дом' },
  { id: 'apartment', label: 'Квартира' },
  { id: 'zip', label: 'Индекс' },
  { id: 'phone', label: 'Номер телефона*' },
  { id: 'reg', label: 'Номер регистрации*' },
  { id: 'tax', label: 'Налоговый номер*' },
  { id: 'company', label: 'Название*' },
  { id: 'company-address', label: 'Адрес компании' },
];

const periods = ['1 месяц', '3 месяца', '6 месяцев', '12 месяцев'];
const methods = [
  { name: 'Кредитная карта (VISA, MasterCard, American Express)', discount: '' },
  { name: 'Webmoney WMZ', discount: '-2,5%' },
  { name: 'Webmoney WME', discount: '-2,5%' },
  { name: 'Интеркасса (Яндекс.Деньги, Qiwi, терминалы и пр.)', discount: '-2,5%' },
];

export default function OrderForm(_props: OrderFormProps) {
  return (
    <div className="flex flex-col gap-40 mb-40">
      {/* Form 1: Email */}
      <div>
        <h2 className="text-20 leading-29 font-medium text-white mb-20">
          Выслать доступ на этот E-mail
        </h2>
        <div className="flex flex-col tablet:flex-row gap-15">
          <input
            type="email"
            placeholder="Введите e-mail"
            className="h-48 bg-white w-full px-15 text-14 text-[#839ada] placeholder:text-secondary"
          />
          <Button variant="accent" className="w-full tablet:w-auto">
            Отправить
          </Button>
        </div>
      </div>

      {/* Form 2: Requisites */}
      <div>
        <h2 className="text-20 leading-29 font-medium text-white mb-20">
          Хочу указать все свои реквизиты сейчас
        </h2>
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-x-30 gap-y-20">
          {requisites.map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} className="text-12 leading-17 text-white block mb-6">
                {f.label}
              </label>
              <input
                id={f.id}
                type="text"
                placeholder="Введите"
                className="h-48 w-full bg-white px-15 text-14 text-[#839ada] placeholder:text-secondary"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Payment section */}
      <div>
        <SectionHeading ghost="Методы" title="Выберите способ оплаты" className="mb-30" />

        <h3 className="text-20 leading-29 font-medium text-white mb-20">Срок оплаты</h3>
        <div className="grid grid-cols-2 desktop:grid-cols-4 gap-20 mb-30">
          {periods.map((p, i) => (
            <label
              key={p}
              className={
                'border p-15 cursor-pointer flex flex-col gap-6 ' +
                (i === 0
                  ? 'border-accent bg-[#215aee]/30'
                  : 'border-white/20')
              }
            >
              <span className="text-14 leading-20 font-medium text-white">{p}</span>
              {i === 0 ? (
                <span className="text-14 leading-20 font-medium text-white">€29.00</span>
              ) : (
                <span className="text-14 leading-20 font-medium text-[#27e35c]">-2,5%</span>
              )}
            </label>
          ))}
        </div>

        <h3 className="text-20 leading-29 font-medium text-white mb-20">Способ оплаты</h3>
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-20 mb-30">
          {methods.map((m) => (
            <label
              key={m.name}
              className="border border-white/20 p-15 cursor-pointer flex flex-col gap-8"
            >
              <Icon name="check" className="text-24 text-white" />
              <span className="text-14 leading-20 font-medium text-white">{m.name}</span>
              {m.discount && (
                <span className="text-12 leading-17 text-[#27e35c]">{m.discount}</span>
              )}
            </label>
          ))}
        </div>

        <div className="text-16 leading-23 font-semibold text-white mb-20">К оплате: €99</div>

        <div className="flex flex-col tablet:flex-row gap-20">
          <Button variant="accent" className="w-full tablet:w-[54.8rem]">
            Оплатить и получить доступ
          </Button>
          <Button variant="white" className="w-full tablet:w-[54.8rem]">
            Получить ссылку на оплату
          </Button>
        </div>
      </div>
    </div>
  );
}
