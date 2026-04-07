interface Field {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  triple?: boolean;
}

interface Section {
  title: string;
  fields: Field[];
}

interface OrderFormProps {
  sections: Section[];
}

export default function OrderForm({ sections }: OrderFormProps) {
  return (
    <div className="flex flex-col gap-40 mb-40">
      {sections.map((section, si) => (
        <div key={si}>
          <h3 className="text-20 leading-29 font-medium text-white mb-20">{section.title}</h3>
          <div className="flex flex-wrap gap-x-30 gap-y-20">
            {section.fields.map((f) => {
              if (f.triple) {
                return (
                  <div key={f.id} className="w-full">
                    <label htmlFor={f.id} className="block text-12 leading-17 font-normal text-white mb-8">
                      {f.label}
                    </label>
                    <div className="flex gap-14">
                      {[0, 1, 2].map((i) => (
                        <input
                          key={i}
                          id={`${f.id}-${i}`}
                          type={f.type}
                          placeholder={f.placeholder}
                          className="w-107 h-48 px-14 bg-white text-bg text-14 rounded-sm"
                        />
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <div key={f.id} className="w-350">
                  <label htmlFor={f.id} className="block text-12 leading-17 font-normal text-white mb-8">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    placeholder={f.placeholder}
                    className="w-full h-48 px-14 bg-white text-bg text-14 rounded-sm"
                  />
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div>
        <label htmlFor="note" className="block text-12 leading-17 font-normal text-white mb-8">
          Примечание
        </label>
        <textarea
          id="note"
          className="w-full h-200 px-14 py-15 bg-white text-bg text-14 rounded-sm resize-none"
          placeholder="Дополнительные пожелания..."
        />
      </div>
    </div>
  );
}
