interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function HeroSection({
  title = "Аренда сервера",
  subtitle = "Готовое решение",
  description = "Мы предлагаем более 1278 конфигураций выделенных серверов в 11 дата-центрах. Быстро, дешево, качественно — вы сможете подобрать любую комбинацию!",
}: HeroSectionProps) {
  return (
    <section
      style={{ background: "linear-gradient(135deg, #010437 0%, #020983 60%, #010437 100%)" }}
      className="w-full"
    >
      <div className="container py-[6rem] md:py-[10rem]">
        <div className="flex flex-col md:flex-row gap-[4rem] md:gap-[6rem] items-start md:items-center">
          {/* Left text block */}
          <div className="flex flex-col gap-[2.4rem] flex-1 max-w-[62rem]">
            {/* Small label */}
            <span
              className="text-[1.4rem] font-medium uppercase tracking-widest"
              style={{ color: "#839ada" }}
            >
              {subtitle}
            </span>

            {/* H1 */}
            <div className="flex flex-col gap-[0.4rem]">
              <h1
                className="text-[3.6rem] leading-[5.2rem] font-medium text-white"
              >
                {title}
              </h1>
              <div className="text-[3.6rem] leading-[5.2rem] font-medium text-white flex flex-wrap items-baseline gap-[1rem]">
                <span>для</span>
                <span
                  className="text-[4rem] leading-[5.8rem] font-semibold"
                  style={{ color: "#ff8311" }}
                >
                  DevOps
                </span>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-[1.4rem] leading-[2rem] max-w-[52rem]"
              style={{ color: "#839ada" }}
            >
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-[1.6rem]">
              <a href="/search" className="btn btn-warning btn-lg self-start btn-block-xs">
                Сервера с мгновенной активацией
              </a>
              <a
                href="/search"
                className="text-[1.4rem] font-semibold text-white text-center self-start underline hover:text-[#ff8311] transition-colors"
              >
                Я знаю, что делаю — покажите мне ВСЕ!
              </a>
            </div>
          </div>

          {/* Right placeholder (decorative) */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div
              className="rounded-[1.2rem] w-[42rem] h-[32rem] flex items-center justify-center"
              style={{ background: "rgba(33,90,238,0.1)", border: "1px solid rgba(131,154,218,0.15)" }}
            >
              <span className="icons i-game text-[8rem]" style={{ color: "rgba(131,154,218,0.3)" }} />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="hidden-xs mt-[6rem] pt-[2.4rem] flex items-center justify-between"
          style={{ borderTop: "1px solid rgba(131,154,218,0.2)" }}
        >
          <span className="text-[1.3rem]" style={{ color: "#839ada" }}>
            Скрольте чтобы узнать детали
          </span>
          <div className="flex items-center gap-[2.4rem]">
            <a
              href="https://t.me/dtxvti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[0.8rem] text-[1.4rem] text-white hover:text-[#ff8311] transition-colors"
            >
              <span className="icons i-tg text-[1.8rem]" style={{ color: "#839ada" }} />
              <span>dtxvti</span>
            </a>
            <a
              href="tel:+3728807873"
              className="flex items-center gap-[0.8rem] text-[1.4rem] text-white hover:text-[#ff8311] transition-colors"
            >
              <span className="icons i-phone text-[1.8rem]" style={{ color: "#839ada" }} />
              <span>+372 880 7873</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
