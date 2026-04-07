interface PricingCard {
  label: string;
  value: string;
}

interface PricingCardsProps {
  cards: PricingCard[];
}

export default function PricingCards({ cards }: PricingCardsProps) {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-15 mb-40">
      {cards.map((c, i) => (
        <div
          key={i}
          className="border border-primary rounded-sm h-86 px-15 flex flex-col justify-center"
        >
          <span className="text-12 leading-17 font-medium text-secondary uppercase tracking-[0.024em] mb-6">
            {c.label}
          </span>
          <span className="text-14 leading-20 font-normal text-white">{c.value}</span>
        </div>
      ))}
    </div>
  );
}
