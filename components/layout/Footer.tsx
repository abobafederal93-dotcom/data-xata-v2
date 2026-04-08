import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import {
  footerLegal,
  socials,
  footerColumns,
  contacts,
  phone,
} from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="bg-primary py-40">
      <Container>
        {/* Nav columns */}
        <div className="flex flex-col tablet:flex-row gap-30 tablet:gap-40 mb-40">
          {footerColumns.map((col) => (
            <div key={col.title} className="flex-1">
              <p className="text-14 leading-20 font-medium text-white mb-15">{col.title}</p>
              <ul className="flex flex-col gap-10">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-14 leading-20 font-normal text-secondary hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contacts column */}
          <div className="flex-1">
            <p className="text-14 leading-20 font-medium text-white mb-15">Контакты</p>
            <ul className="flex flex-col gap-10">
              {contacts.map((contact) => (
                <li key={contact.value}>
                  <Link
                    href={contact.href}
                    className="flex items-center gap-8 text-14 leading-20 font-medium text-white hover:text-white/80 transition-colors"
                  >
                    <span className={`icons i-${contact.type} text-16`} />
                    {contact.value}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-8 text-14 leading-20 font-medium text-accent hover:text-accent/80 transition-colors"
                >
                  <span className="icons i-phone text-16" />
                  {phone}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-30" />

        {/* Legal links */}
        <div className="flex flex-wrap gap-x-64 gap-y-10 mb-20">
          {footerLegal.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-14 leading-20 font-normal text-white hover:text-white/80 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Social icons + Payment logos row */}
        <div className="flex items-center justify-between flex-wrap gap-15">
          {/* Social icons */}
          <div className="flex items-center gap-10">
            {socials.map((social) => {
              if (social.icon === 'vk') {
                return (
                  <Link
                    key={social.icon}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center justify-center w-24 h-24 rounded-full"
                    style={{ backgroundColor: social.color }}
                  >
                    <span className="icons i-vk text-12 text-white" />
                  </Link>
                );
              }
              if (social.icon === 'tw') {
                return (
                  <Link
                    key={social.icon}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center justify-center w-24 h-24 rounded-full"
                    style={{ backgroundColor: social.color }}
                  >
                    <Image
                      src="/img/figma/icon-twitter-24.svg"
                      alt={social.label}
                      width={24}
                      height={24}
                    />
                  </Link>
                );
              }
              if (social.icon === 'slack') {
                return (
                  <Link
                    key={social.icon}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center justify-center w-24 h-24 rounded-full"
                    style={{ backgroundColor: social.color }}
                  >
                    <Image
                      src="/img/figma/icon-slack-24.svg"
                      alt={social.label}
                      width={24}
                      height={24}
                    />
                  </Link>
                );
              }
              if (social.icon === 'fb') {
                return (
                  <Link
                    key={social.icon}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center justify-center w-24 h-24 rounded-full"
                    style={{ backgroundColor: social.color }}
                  >
                    <Image
                      src="/img/figma/icon-facebook-24.svg"
                      alt={social.label}
                      width={24}
                      height={24}
                    />
                  </Link>
                );
              }
              return null;
            })}
          </div>

          {/* Payment logos */}
          <div className="flex items-center gap-15">
            <Image
              src="/img/figma/logo-mastercard-sm.svg"
              alt="Mastercard"
              width={40}
              height={25}
              className="opacity-40"
            />
            <Image
              src="/img/figma/logo-qiwi.svg"
              alt="QIWI"
              width={40}
              height={25}
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}
