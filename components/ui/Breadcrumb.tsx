import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb">
      <Link href="/" className="breadcrumb__home" aria-label="Главная">
        <span className="icons i-home" />
      </Link>
      {items.map((item, i) => (
        <span key={i} className="breadcrumb__item">
          <span className="breadcrumb__sep">/</span>
          {item.href ? (
            <Link href={item.href} className="breadcrumb__link">{item.label}</Link>
          ) : (
            <span className="breadcrumb__current">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
