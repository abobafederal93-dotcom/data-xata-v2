import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import type { Feature } from '@/data/features';

interface OurFeaturesProps {
  features: Feature[];
}

export default function OurFeatures({ features }: OurFeaturesProps) {
  return (
    <section className="py-80">
      <Container>
        <SectionHeading
          ghost="Преимущества"
          title="Наши"
          subtitle="преимущества"
        />

        {/* 3×3 grid */}
        <div className="mt-60 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-30">
          {features.map((feature) => (
            <div key={feature.icon} className="flex flex-col gap-15">
              <Icon name={feature.icon} className="text-24 text-cyan" />
              <h3 className="text-16 leading-23 font-medium text-white">
                {feature.title}
              </h3>
              <p className="text-14 leading-20 font-normal text-secondary">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
