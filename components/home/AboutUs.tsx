import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

interface AboutUsProps {
  leftTitle?: string;
  leftText?: string;
  rightTitle?: string;
  rightText?: string;
}

const placeholder =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default function AboutUs({
  leftTitle = 'О компании',
  leftText = placeholder,
  rightTitle = 'О серверах',
  rightText = placeholder,
}: AboutUsProps) {
  return (
    <section className="py-60">
      <Container>
        <SectionHeading ghost="Предыстория" title="О нас и выделенных серверах" />
        <div className="grid grid-cols-1 desktop:grid-cols-2 gap-30">
          <div className="min-h-[48.5rem] border border-primary/30 p-40">
            <h3 className="text-19 font-semibold text-white mb-20">{leftTitle}</h3>
            <p className="text-14 leading-[1.8rem] text-secondary">{leftText}</p>
          </div>
          <div className="min-h-[48.5rem] border border-primary/30 p-40 desktop:mt-[24.3rem]">
            <h3 className="text-19 font-semibold text-white mb-20">{rightTitle}</h3>
            <p className="text-14 leading-[1.8rem] text-secondary">{rightText}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
