export default function LetsStart() {
  return (
    <section className="w-full py-[8rem]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-[6rem]">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-[2.4rem]">
            <div className="flex flex-col gap-[0.8rem]">
              <span className="title-text">Как оформить заказ?</span>
              <h2 className="title" style={{ margin: 0 }}>
                Начитались? Айда выбирать!
              </h2>
            </div>

            <p>
              Более 1278 конфигураций выделенных серверов в 11 дата-центрах уже
              ждут вас. Используйте наш удобный поиск, чтобы найти идеальный
              сервер под ваши задачи и бюджет. Заказ оформляется за несколько
              минут — без лишних звонков и бумаг.
            </p>

            <div className="flex flex-wrap gap-[1.6rem]">
              <a href="/search" className="btn btn-warning btn-lg btn-block-xs">
                Искать сейчас
              </a>
              <a
                href="https://t.me/dtxvti"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg btn-block-xs"
              >
                Спросить в чате
              </a>
            </div>
          </div>

          {/* Right image placeholder */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div
              className="rounded-[1.2rem] w-[44rem] h-[32rem] flex flex-col items-center justify-center gap-[1.2rem]"
              style={{
                background: "rgba(2,9,131,0.3)",
                border: "1px solid rgba(131,154,218,0.2)",
              }}
            >
              <span className="icons i-repository text-[5rem]" style={{ color: "rgba(131,154,218,0.3)" }} />
              <span className="text-[1.3rem]" style={{ color: "rgba(131,154,218,0.4)" }}>
                order screenshot
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
