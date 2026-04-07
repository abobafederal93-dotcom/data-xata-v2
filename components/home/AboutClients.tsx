interface ClientUseCase {
  icon: string;
  title: string;
  description: string;
  href: string;
}

const USE_CASES: ClientUseCase[] = [
  {
    icon: "i-tool",
    title: "Разработка",
    description:
      "CI/CD пайплайны, тестовые стенды, dev-окружения. Полный контроль над инфраструктурой без ограничений облачных провайдеров.",
    href: "/search?tag=dev",
  },
  {
    icon: "i-cloud",
    title: "Онлайн кинотеатр",
    description:
      "Стриминг 4K-видео, CDN-раздача контента, хранение медиафайлов. Высокая пропускная способность и надёжные хранилища.",
    href: "/search?tag=streaming",
  },
  {
    icon: "i-search-block",
    title: "Удаленный офис, VPN",
    description:
      "Корпоративный VPN, удалённые рабочие столы (RDP/VNC), файловые серверы. Безопасная работа из любой точки мира.",
    href: "/search?tag=vpn",
  },
  {
    icon: "i-tool",
    title: "Гемблинг",
    description:
      "Низкие задержки, высокая доступность, соответствие требованиям лицензирования. Поддержка юрисдикций с благоприятным регулированием.",
    href: "/search?tag=gambling",
  },
];

export default function AboutClients() {
  return (
    <section className="w-full py-[6rem]">
      <div className="container">
        {/* Title block */}
        <div className="flex flex-col gap-[0.8rem] mb-[4rem]">
          <span className="title-text">О клиентах</span>
          <h2 className="title" style={{ margin: 0 }}>
            Наши клиенты используют выделенные серверы для:
          </h2>
        </div>

        {/* Cards row */}
        <div className="scroll-row gap-[1.6rem]">
          {USE_CASES.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="border-block flex flex-col gap-[1.6rem] flex-1 min-w-[22rem] group"
              style={{
                background: "rgba(2,9,131,0.15)",
                transition: "border-color 0.2s, background 0.2s",
                textDecoration: "none",
              }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center w-[5.6rem] h-[5.6rem] rounded-[0.8rem]"
                style={{ background: "rgba(33,90,238,0.2)", border: "1px solid rgba(131,154,218,0.2)" }}
              >
                <span
                  className={`icons ${item.icon} text-[2.4rem]`}
                  style={{ color: "#ff8311" }}
                />
              </div>

              {/* Title */}
              <h5 className="text-white group-hover:text-[#ff8311]" style={{ transition: "color 0.2s" }}>
                {item.title}
              </h5>

              {/* Description */}
              <p style={{ marginBottom: 0 }}>{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
