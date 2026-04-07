import Link from "next/link";

interface HeroSectionProps {
  title?: string;
}

export default function HeroSection({ title }: HeroSectionProps) {
  return (
    <div className="first-screen preview preview-home">
      <div className="preview-text">
        <div className="container">
          <div className="preview-text-inside">
            <div className="preview-title">
              <div className="title-text">Готовое решение</div>
              <h1 className="page-title">{title ?? "Аренда сервера"}</h1>
              <div className="title">для <span className="text-orange">DevOps</span></div>
            </div>
            <p>Мы предлагаем более 1278 конфигураций выделенных серверов в 11 дата-центрах. Быстро, дешево, качественно — вы сможете подобрать любую комбинацию!</p>
          </div>
          <div className="preview-btn">
            <p><a href="#instant" className="btn btn-warning btn-lg btn-block-xs">Сервера с мгновенной активацией</a></p>
            <p className="text-white text-center text-semibold"><Link href="/search">Я знаю, что делаю — покажите мне ВСЕ!</Link></p>
          </div>
        </div>
      </div>
      <div className="first-screen-footer hidden-xs">
        <div className="container flex-block">
          <div>Скрольте чтобы узнать детали</div>
          <ul className="footer-contatcs">
            <li><a href="tg://resolve?domain=dtxvti"><span className="icons i-tg" />dtxvti</a></li>
            <li>
              <span className="homeheader__phone">
                <span className="icons i-phone" />+372 880 7873 <span className="icons i-caret-sm" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
