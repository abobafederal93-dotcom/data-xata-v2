import React from 'react';
import Link from 'next/link';
import Icon from './Icon';
import { cn } from '../../lib/cn';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center gap-8', className)}>
      <Link href="/" aria-label="Главная">
        <Icon name="home" className="text-24 text-secondary hover:text-white transition-colors" />
      </Link>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <span className="w-[0.1rem] h-18 bg-secondary flex-shrink-0" aria-hidden="true" />
          {item.href ? (
            <Link
              href={item.href}
              className="text-14 leading-20 text-secondary hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-14 leading-20 text-secondary">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
