import Link from "next/link";

interface PromoBannerProps {
  ghostText: string;
  text: string;
  buttonLabel: string;
  buttonHref: string;
}

export default function PromoBanner({
  ghostText,
  text,
  buttonLabel,
  buttonHref,
}: PromoBannerProps) {
  return (
    <section className="promo-banner">
      <div className="container">
        <div className="promo-banner__inner">
          <span className="promo-banner__ghost" aria-hidden="true">{ghostText}</span>
          <p
            className="promo-banner__text"
            dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br />") }}
          />
          <Link href={buttonHref} className="btn btn-primary promo-banner__btn">
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
