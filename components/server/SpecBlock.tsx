interface Spec {
  label: string;
  value: string;
}

interface SpecBlockProps {
  title: string;
  specs: Spec[];
}

export default function SpecBlock({ title, specs }: SpecBlockProps) {
  return (
    <div className="mb-40">
      <h3 className="text-25 leading-36 font-medium text-white mb-20">{title}</h3>
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-15">
        {specs.map((s, i) => (
          <div
            key={i}
            className="border border-primary rounded-sm h-108 px-15 py-15 flex flex-col justify-center"
          >
            <span className="text-12 leading-17 font-medium text-secondary uppercase tracking-[0.024em] mb-8">
              {s.label}
            </span>
            <span className="text-14 leading-20 font-normal text-white">{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
