const clients = [
  {
    icon: "i-tool",
    title: "Хостинг",
    desc: "Дата-хата работает на рынке с 2006 года. На нашем сайте есть огромное количество предложений физических выделянных серверов в Америке и Европе, которые могут быть доступны в данный момент.",
    active: false,
  },
  {
    icon: "i-speed",
    title: "Разработка",
    desc: "Дата-хата работает на рынке с 2006 года. На нашем сайте есть огромное количество предложений физических выделянных серверов в Америке и Европе, которые могут быть доступны в данный момент.",
    active: false,
  },
  {
    icon: "i-cloud",
    title: "VDI, VPN и Прокси",
    desc: "Дата-хата работает на рынке с 2006 года. На нашем сайте есть огромное количество предложений физических выделянных серверов в Америке и Европе, которые могут быть доступны в данный момент.",
    active: false,
  },
  {
    icon: "i-office",
    title: "Бизнес",
    desc: "Дата-хата работает на рынке с 2006 года. На нашем сайте есть огромное количество предложений физических выделянных серверов в Америке и Европе, которые могут быть доступны в данный момент.",
    active: true,
  },
];

export default function AboutClients() {
  return (
    <section className="clients-section">
      <div className="container">

        {/* Heading */}
        <div className="section-heading">
          <span className="section-ghost">О клиентах</span>
          <h2 className="section-title">Наши клиенты используют выделенные серверы для:</h2>
        </div>

        {/* 4 карточки */}
        <div className="clients-grid">
          {clients.map((c) => (
            <div key={c.title} className={`clients-card${c.active ? " clients-card--active" : ""}`}>
              <div className="clients-card__icon">
                <span className={`icons ${c.icon}`} aria-hidden="true" />
              </div>
              <p className="clients-card__title">{c.title}</p>
              <p className="clients-card__desc">{c.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
