import Link from "next/link";

const steps = [
  {
    title: ["Приходи", "и выбирай"],
    desc: "Единственное, для чего нельзя снять в аренду наши выделенные серверы, так это для преступной деятельности в рамках юрисдикции той страны, в которой фактически находится оборудование.",
  },
  {
    title: ["Добавляй", "в корзину"],
    desc: "Должен лишь оплатить аренду и предоставить емейл, на который будут отправлены данные для доступа к удаленному (выделенному) серверу.",
  },
  {
    title: ["Оплачивай", "счёт"],
    desc: "Которые могут быть доступны в данный момент времени для сдачи в аренду. Перечень подключений постоянно обновляется.",
  },
  {
    title: ["Пользуйся", "сервисом"],
    desc: "Аренду наши выделенные серверы, так это для преступной деятельности в рамках юрисдикции той страны, в которой фактически находится оборудование.",
    last: true,
  },
];

export default function OrderProcess() {
  return (
    <section className="order-section">
      <div className="container">

        {/* Подсекция 1: Как оформить заказ */}
        <div className="section-heading">
          <span className="section-ghost">Как оформить заказ?</span>
          <h2 className="section-title">Начитались? Айда выбирать!</h2>
        </div>

        <div className="order-intro">
          <p className="order-intro__text">
            Чтобы подобрать сервер нужной вам конфигурации — воспользуйтесь нашим поиском.
            Мы подготовили обучающее видео для вас. Если вы не знаете какой сервер вам
            подойдет — спросите нас в чате.
          </p>
          <div className="order-intro__btns">
            <Link href="/search" className="btn btn-warning">
              Искать сейчас
            </Link>
            <a href="https://cp.data-xata.com/" className="btn btn-default" rel="noindex, nofollow">
              Спросить в чате
            </a>
          </div>
        </div>

        {/* Подсекция 2: Процесс заказа — 4 шага */}
        <div className="section-heading order-steps-heading">
          <span className="section-ghost">Процесс заказа</span>
          <h2 className="section-title">Процесс заказа</h2>
        </div>

        <div className="order-steps">
          {steps.map((step, i) => (
            <div key={i} className="order-step">
              <div className="order-step__title">
                <span>{step.title[0]}</span>
                <span>{step.title[1]}</span>
              </div>
              <div className="order-step__arrow" aria-hidden="true">
                {step.last
                  ? <span className="icons i-check order-step__check" />
                  : <span className="icons i-caret-right" />
                }
              </div>
              <p className="order-step__desc">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
