interface OrderStep {
  title: string;
  description: string;
}

interface OrderProcessProps {
  steps?: OrderStep[];
}

const DEFAULT_STEPS: OrderStep[] = [
  {
    title: "Приходи и выбирай",
    description:
      "Используй наш удобный фильтр для поиска сервера. Выбери нужные параметры: CPU, RAM, диски, локацию и цену — и система покажет подходящие варианты.",
  },
  {
    title: "Настрой под себя",
    description:
      "Выбери операционную систему, дополнительное ПО и период аренды. Можно выбрать почасовую или месячную тарификацию.",
  },
  {
    title: "Оставь e-mail и оплати счёт",
    description:
      "Укажи e-mail для получения доступа. Оплата картой, криптовалютой или банковским переводом. Счёт придёт мгновенно.",
  },
  {
    title: "Пользуйся сервисом",
    description:
      "После оплаты данные для доступа придут на e-mail. Сервер уже готов к работе — никаких ожиданий и лишних шагов.",
  },
];

export default function OrderProcess({ steps = DEFAULT_STEPS }: OrderProcessProps) {
  return (
    <section className="w-full py-[6rem]">
      <div className="container">
        {/* Title block */}
        <div className="flex flex-col gap-[0.8rem] mb-[4rem]">
          <span className="title-text">Как оформить заказ?</span>
          <h2 className="title" style={{ margin: 0 }}>
            Начитались? Айда выбирать!
          </h2>
        </div>

        {/* Steps row */}
        <div className="scroll-row gap-[1.6rem]">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <div
                key={step.title}
                className="border-block flex flex-col gap-[1.6rem] flex-1 min-w-[22rem]"
                style={{ background: "rgba(2,9,131,0.15)" }}
              >
                {/* Step number */}
                <div className="flex items-center gap-[1.2rem]">
                  <div
                    className="flex items-center justify-center w-[3.6rem] h-[3.6rem] rounded-full text-[1.4rem] font-semibold flex-shrink-0"
                    style={{
                      background: isLast ? "rgba(39,227,92,0.15)" : "rgba(33,90,238,0.2)",
                      color: isLast ? "#27e35c" : "#215aee",
                      border: `1px solid ${isLast ? "rgba(39,227,92,0.3)" : "rgba(33,90,238,0.3)"}`,
                    }}
                  >
                    {index + 1}
                  </div>
                  {/* Arrow or check icon */}
                  {isLast ? (
                    <span className="icons i-check text-[2rem]" style={{ color: "#27e35c" }} />
                  ) : (
                    <span className="icons i-arrow text-[2rem]" style={{ color: "#ff8311" }} />
                  )}
                </div>

                {/* Title */}
                <h5 className="text-white">{step.title}</h5>

                {/* Description */}
                <p style={{ marginBottom: 0 }}>{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
