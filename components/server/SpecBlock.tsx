interface SpecRow {
  label: string;
  value: string;
}

interface SpecBlockProps {
  title?: string;
  rows: SpecRow[];
}

export default function SpecBlock({ title, rows }: SpecBlockProps) {
  return (
    <div className="flex flex-col gap-0">
      {title && (
        <h3 className="text-20 leading-29 font-medium text-white mb-12">{title}</h3>
      )}
      <div className="flex flex-col">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between py-10 border-b border-white/10 last:border-b-0"
          >
            <span className="text-12 font-medium text-secondary tracking-[0.024em] leading-17 uppercase">
              {row.label}
            </span>
            <span className="text-14 leading-20 font-medium text-white">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
