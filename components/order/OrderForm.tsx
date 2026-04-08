import { cn } from '@/lib/cn';

interface OrderFormProps {
  serverId?: string;
}

function FormInput({
  label,
  placeholder,
  type = 'text',
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <label className="text-12 leading-17 font-normal text-white">{label}</label>
      <input
        type={type}
        placeholder={placeholder ?? 'Введите'}
        className={cn(
          'h-48 border border-white/20 bg-white/5 text-white placeholder:text-secondary',
          'px-16 rounded-sm text-14 leading-20 font-normal',
          'focus:outline-none focus:border-white/40 transition-colors',
        )}
      />
    </div>
  );
}

function PaymentRadio({
  value,
  label,
  logo,
  defaultChecked,
}: {
  value: string;
  label: string;
  logo?: React.ReactNode;
  defaultChecked?: boolean;
}) {
  return (
    <label className="flex items-center gap-12 cursor-pointer border border-white/20 rounded-sm px-16 py-12 hover:border-white/40 transition-colors">
      <input
        type="radio"
        name="payment"
        value={value}
        defaultChecked={defaultChecked}
        className="sr-only peer"
      />
      <span className="w-18 h-18 rounded-full border border-white/30 flex-shrink-0 flex items-center justify-center peer-checked:border-accent">
        <span className="w-10 h-10 rounded-full bg-accent opacity-0 peer-checked:opacity-100 transition-opacity" />
      </span>
      {logo}
      <span className="text-14 leading-20 font-medium text-white">{label}</span>
    </label>
  );
}

export default function OrderForm({ serverId: _serverId }: OrderFormProps) {
  return (
    <div className="flex flex-col gap-40">
      {/* Contact section */}
      <section>
        <h2 className="text-16 leading-23 font-semibold text-white mb-20">Контактные данные</h2>
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-16">
          <FormInput label="Ваше имя" placeholder="Введите" />
          <FormInput label="Номер телефона*" placeholder="Введите" type="tel" />
          <FormInput label="Страна*" placeholder="Введите" />
          <FormInput label="Город*" placeholder="Введите" />
          <div className="tablet:col-span-2">
            <FormInput label="Улица" placeholder="Введите" />
          </div>
          <FormInput label="Дом" placeholder="Введите" />
          <FormInput label="Квартира" placeholder="Введите" />
          <FormInput label="Индекс" placeholder="Введите" />
          <FormInput label="Примечание" placeholder="Введите" />
        </div>
      </section>

      {/* Payment period */}
      <section>
        <h2 className="text-16 leading-23 font-semibold text-white mb-20">Срок оплаты</h2>
        <div className="grid grid-cols-2 tablet:grid-cols-4 gap-12">
          {[
            { value: '1', label: '1 месяц', price: '€29.00 / месяц' },
            { value: '3', label: '3 месяца', price: '€47.00 / месяц' },
            { value: '6', label: '6 месяцев', price: '€56.00 / месяц' },
            { value: '12', label: '12 месяцев', price: '€329.00' },
          ].map((period, idx) => (
            <label
              key={period.value}
              className="flex flex-col gap-4 cursor-pointer border border-white/20 rounded-sm px-16 py-12 hover:border-white/40 transition-colors"
            >
              <input
                type="radio"
                name="period"
                value={period.value}
                defaultChecked={idx === 0}
                className="sr-only"
              />
              <span className="text-14 leading-20 font-medium text-white">{period.label}</span>
              <span className="text-14 leading-20 font-medium text-green">{period.price}</span>
            </label>
          ))}
        </div>
      </section>

      {/* Payment method */}
      <section>
        <h2 className="text-16 leading-23 font-semibold text-white mb-20">Способ оплаты</h2>
        <div className="flex flex-col gap-8">
          <PaymentRadio
            value="mastercard"
            label="Кредитная карта (VISA, MasterCard, American Express)"
            defaultChecked
            logo={
              <img
                src="/img/figma/logo-mastercard-sm.svg"
                alt="MasterCard"
                width={28}
                height={22}
                className="flex-shrink-0"
              />
            }
          />
          <PaymentRadio
            value="qiwi"
            label="Интеркасса (Яндекс.Деньги, Qiwi, терминалы и пр.)"
            logo={
              <img
                src="/img/figma/logo-qiwi.svg"
                alt="QIWI"
                width={44}
                height={22}
                className="flex-shrink-0"
              />
            }
          />
          <PaymentRadio value="webmoney-wmz" label="Webmoney WMZ" />
          <PaymentRadio value="webmoney-wme" label="Webmoney WME" />
        </div>
      </section>

      {/* Legal checkboxes */}
      <div className="flex flex-col gap-10">
        {[
          'Вводные цены действуют на первый семестр. Гарантия возврата денег распространяется на первые 30 дней.',
          'Я хочу получать информационный бюллетень со статьями, хитростями, обучающими материалами.',
          'Я прочитал, понимаю и согласен с Условиями продаж в отношении обработки моих персональных данных.',
          'Мы рекомендуем и советуем вам щелкать отдельные ссылки и сохранять или распечатывать документы.',
        ].map((text, i) => (
          <label key={i} className="flex items-start gap-10 cursor-pointer">
            <span className="w-24 h-24 flex-shrink-0 flex items-center justify-center border border-white/30 rounded-sm bg-white/5 mt-1 hover:border-white/50 transition-colors" />
            <span className="text-14 leading-17 font-normal text-white">{text}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
