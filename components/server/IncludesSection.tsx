const includes = [
  'Реальное железо',
  'Многовенная доставка',
  'Удаленное управление',
  'Поддержка 24/7',
  'DDoS защита',
  'Бесплатный трафик',
];

export default function IncludesSection() {
  return (
    <section className="flex flex-col gap-20">
      <h2 className="text-40 leading-58 font-medium text-white">Что включено в стоимость</h2>
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-20">
        {includes.map((item) => (
          <div key={item} className="flex items-center gap-12">
            <div className="w-36 h-36 flex-shrink-0 flex items-center justify-center rounded-sm bg-white/10">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 10L8 14L16 6"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-19 leading-27 font-semibold text-white">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
