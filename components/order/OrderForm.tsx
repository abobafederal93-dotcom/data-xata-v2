import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

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

const socials: { name: string; src?: string; bgClass?: string; letter?: string }[] = [
  { name: 'Twitter', src: '/img/figma/icon-twitter-36.svg' },
  { name: 'Facebook', src: '/img/figma/icon-facebook-36.svg' },
  { name: 'Github', bgClass: 'bg-[#24292e]', letter: 'g' },
  { name: 'Yandex', src: '/img/figma/icon-yandex-36.svg' },
  { name: 'Mail.ru', bgClass: 'bg-[#005ff9]', letter: 'm' },
  { name: 'Gmail', bgClass: 'bg-[#dd4b39]', letter: 'G' },
];

const goodies: { title: string; img: string }[] = [
  { title: 'Защита от DDoS', img: '/img/DDoS.svg' },
  { title: '100Гб для бекапа', img: '/img/backup.svg' },
  { title: 'Failover IP', img: '/img/Failover.svg' },
];

const periods = [
  { name: '1 месяц', price: '€29.00', discount: '' },
  { name: '3 месяца', price: '€29.00 / месяц', discount: '-2,5%', total: '€329.00' },
  { name: '6 месяцев', price: '€47.00 / месяц', discount: '-2,5%', total: '€496.00' },
  { name: '12 месяцев', price: '€56.00 / месяц', discount: '-2,5%', total: '€564.00' },
];

const paymentLogos: { name: string; src: string }[] = [
  { name: 'Visa', src: '/img/icons/i-visa.svg' },
  { name: 'Mastercard', src: '/img/icons/i-mastercard.svg' },
  { name: 'PayPal', src: '/img/icons/i-paypal.svg' },
  { name: 'Webmoney', src: '/img/icons/i-webmoney.svg' },
  { name: 'Yandex Money', src: '/img/icons/i-yandex-money.svg' },
  { name: 'Qiwi', src: '/img/icons/i-qiwi.svg' },
];

const methods = [
  { name: 'Кредитная карта (VISA, MasterCard, American Express)', discount: '' },
  { name: 'Webmoney WMZ', discount: '-2,5%' },
  { name: 'Webmoney WME', discount: '-2,5%' },
  { name: 'Интеркасса (Яндекс.Деньги, Qiwi, терминалы и пр.)', discount: '-2,5%' },
];

export default function OrderForm(_props: OrderFormProps) {
  return (
    <div className="flex flex-col gap-60 mb-40">
      {/* Form 1: Email + socials */}
      <div>
        <SectionHeading ghost="Получить доступ" title="Выслать доступ на этот E-mail" className="mb-30" />
        <div className="bg-accent p-20 flex flex-col tablet:flex-row items-center gap-20">
          <div className="flex flex-col tablet:flex-row gap-15 flex-1 w-full">
            <input
              type="email"
              placeholder="Введите e-mail"
              className="h-48 bg-white w-full px-15 text-14 text-[#839ada] placeholder:text-secondary"
            />
            <Button variant="white" className="w-full tablet:w-auto">
              Отправить
            </Button>
          </div>
        </div>
        <div className="mt-20 flex flex-col tablet:flex-row items-center justify-center gap-20">
          <span className="text-16 leading-23 font-medium text-white">
            или зарегистрироваться через социальные сети
          </span>
          <div className="flex items-center gap-10">
            {socials.map((s) =>
              s.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={s.name}
                  src={s.src}
                  alt={s.name}
                  width={36}
                  height={36}
                  className="w-36 h-36"
                />
              ) : (
                <button
                  key={s.name}
                  type="button"
                  aria-label={s.name}
                  className={
                    'w-36 h-36 rounded-full flex items-center justify-center text-white text-14 font-bold ' +
                    (s.bgClass ?? '')
                  }
                >
                  {s.letter}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Form 2: Requisites */}
      <div>
        <SectionHeading ghost="Мои реквизиты" title="Хочу указать все свои реквизиты сейчас" className="mb-30" />
        <h3 className="text-20 leading-29 font-medium text-white mb-20">Контактные данные</h3>
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
        <div className="mt-20">
          <label htmlFor="note" className="text-12 leading-17 text-white block mb-6">
            Примечание
          </label>
          <textarea
            id="note"
            placeholder="Введите"
            className="w-full min-h-[20rem] bg-white p-15 text-14 text-[#839ada] placeholder:text-secondary"
          />
        </div>
        <div className="mt-20 flex justify-end">
          <Button variant="accent" className="w-full tablet:w-[28rem]">
            Сохранить реквизиты
          </Button>
        </div>
      </div>

      {/* Goodies */}
      <div>
        <h3 className="text-20 leading-29 font-medium text-white">
          Мы знаем, что расставаться с деньгами - всегда стресс
        </h3>
        <p className="text-14 leading-17 text-secondary mt-10 mb-30">
          Чтобы подсластить пилюлю - выберите бесплатную плюшку к вашему заказу:
        </p>
        <div className="grid grid-cols-1 tablet:grid-cols-3 gap-30">
          {goodies.map((g, i) => (
            <div
              key={g.title}
              className={
                'border border-white/10 p-20 flex flex-col items-center gap-15 ' +
                (i === 2 ? 'bg-white' : '')
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.img} alt="" width={80} height={80} className="w-80 h-80" />
              <span
                className={
                  'text-19 leading-27 font-semibold text-center ' +
                  (i === 2 ? 'text-[#0041be]' : 'text-white')
                }
              >
                {g.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Payment section */}
      <div>
        <SectionHeading ghost="Методы" title="Оплата" className="mb-30" />

        <h3 className="text-20 leading-29 font-medium text-white mb-20">Срок оплаты</h3>
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-20 mb-30">
          {periods.map((p, i) => (
            <label
              key={p.name}
              className={
                'border p-15 cursor-pointer flex flex-col gap-6 ' +
                (i === 0 ? 'border-accent bg-[#215aee]/30' : 'border-white/20')
              }
            >
              <span className="text-14 leading-20 font-medium text-white">{p.name}</span>
              <span className="text-14 leading-20 font-medium text-[#27e35c]">{p.price}</span>
              {p.total && (
                <span className="text-16 leading-23 font-semibold text-[#27e35c]">{p.total}</span>
              )}
              {p.discount && !p.total && (
                <span className="text-14 leading-20 font-medium text-[#27e35c]">{p.discount}</span>
              )}
            </label>
          ))}
        </div>

        <h3 className="text-20 leading-29 font-medium text-white mb-20">Способ оплаты</h3>
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-20 mb-30">
          {methods.map((m) => (
            <label
              key={m.name}
              className="border border-white/20 p-15 cursor-pointer flex items-center gap-15"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/icons/radio.svg" alt="" width={24} height={24} className="w-24 h-24" />
              <span className="text-14 leading-20 font-medium text-white flex-1">{m.name}</span>
              {m.discount && (
                <span className="text-14 leading-20 font-medium text-[#27e35c]">{m.discount}</span>
              )}
            </label>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-20 mb-30">
          {paymentLogos.map((p) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={p.name} src={p.src} alt={p.name} className="h-24 w-auto" />
          ))}
        </div>

        <p className="text-14 leading-17 text-white mb-15">
          Вводные цены действуют на первый семестр. Гарантия возврата денег распространяется на первый месяц.
        </p>

        <div className="flex flex-col tablet:flex-row gap-20">
          <Button variant="accent" className="w-full tablet:w-[54.8rem]">
            Оплатить и получить доступ
          </Button>
          <Button variant="outline-white" className="w-full tablet:w-[54.8rem]">
            Получить ссылку на оплату
          </Button>
        </div>
      </div>
    </div>
  );
}
