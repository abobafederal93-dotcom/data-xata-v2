import Link from "next/link";

interface ActionButton {
  label: string;
  href: string;
  iconBefore?: string;
  iconAfter?: string;
  external?: boolean;
}

interface ActionButtonsProps {
  buttons: ActionButton[];
}

export default function ActionButtons({ buttons }: ActionButtonsProps) {
  return (
    <section className="action-buttons">
      <div className="container">
        <div className="action-buttons__inner">
          {buttons.map((btn) => {
            const content = (
              <>
                {btn.iconBefore && <span className={`icons ${btn.iconBefore}`} />}
                {btn.label}
                {btn.iconAfter && <span className={`icons ${btn.iconAfter}`} />}
              </>
            );
            if (btn.external) {
              return (
                <a key={btn.label} href={btn.href} className="action-buttons__btn">
                  {content}
                </a>
              );
            }
            return (
              <Link key={btn.label} href={btn.href} className="action-buttons__btn">
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
