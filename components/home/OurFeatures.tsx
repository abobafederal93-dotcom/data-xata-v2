interface Feature {
  title: string;
  description: string;
}

interface OurFeaturesProps {
  features?: Feature[];
}

const DEFAULT_FEATURES: Feature[] = [
  {
    title: "15 лет опыта",
    description:
      "Мы работаем на рынке выделенных серверов с 2009 года. За это время мы накопили огромный опыт и наладили партнёрские отношения с ведущими дата-центрами Европы.",
  },
  {
    title: "Уникальный поиск",
    description:
      "Наш собственный поисковый движок позволяет мгновенно находить нужный сервер из 1278+ конфигураций. Фильтрация по CPU, RAM, дискам, цене и локации.",
  },
  {
    title: "Партнерская программа",
    description:
      "Зарабатывайте вместе с нами. Приводите клиентов и получайте до 10% от их ежемесячных платежей. Выплаты без задержек, прозрачная аналитика.",
  },
  {
    title: "Hi-End дата-центры",
    description:
      "Серверы размещены в дата-центрах уровня Tier III и Tier IV в 11 странах. Uptime 99.95%, резервное питание, отказоустойчивые сети.",
  },
  {
    title: "Отсутствие VAT",
    description:
      "Для европейских бизнес-клиентов с VAT-номером — полное освобождение от НДС. Экономия 20–25% от стоимости аренды.",
  },
  {
    title: "Поддержка в чате",
    description:
      "Техническая поддержка 24/7 в Telegram и онлайн-чате. Среднее время ответа — менее 5 минут. Помогаем с настройкой серверов.",
  },
];

export default function OurFeatures({ features = DEFAULT_FEATURES }: OurFeaturesProps) {
  return (
    <section className="w-full py-[6rem]">
      <div className="container">
        {/* Title block */}
        <div className="flex flex-col gap-[0.8rem] mb-[4rem]">
          <span className="title-text">Преимущества</span>
          <h2 className="title" style={{ margin: 0 }}>
            6 уникальных характеристик Дата-Хата
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="border-block flex flex-col gap-[1.2rem]"
              style={{
                borderRight: index % 3 === 2 ? "1px solid rgba(131,154,218,0.2)" : undefined,
                background: "transparent",
              }}
            >
              <h5 className="text-white">{feature.title}</h5>
              <p style={{ marginBottom: 0 }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
