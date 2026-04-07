export type ArticleBlock =
  | { type: 'h2' | 'h3' | 'h4' | 'p' | 'highlight'; text: string }
  | { type: 'screenshot'; text?: string };

interface ArticleContentProps {
  content: ArticleBlock[];
}

export default function ArticleContent({ content }: ArticleContentProps) {
  return (
    <article className="w-full desktop:max-w-[82.5rem] flex flex-col gap-20">
      {content.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2
                key={i}
                className="text-30 leading-43 font-medium text-white mt-20"
              >
                {block.text}
              </h2>
            );
          case 'h3':
            return (
              <h3
                key={i}
                className="text-25 leading-36 font-medium text-white mt-15"
              >
                {block.text}
              </h3>
            );
          case 'h4':
            return (
              <h4
                key={i}
                className="text-20 leading-29 font-medium text-white mt-10"
              >
                {block.text}
              </h4>
            );
          case 'p':
            return (
              <p
                key={i}
                className="text-14 leading-18 font-normal text-secondary"
              >
                {block.text}
              </p>
            );
          case 'highlight':
            return (
              <div
                key={i}
                className="bg-primary pl-76 pr-30 py-24 rounded-sm text-14 leading-17 text-white min-h-84"
              >
                {block.text}
              </div>
            );
          case 'screenshot':
            return (
              <div
                key={i}
                className="bg-[#f0f3fa] p-30 rounded-sm min-h-[40.5rem] flex items-center justify-center text-secondary text-14"
              >
                {block.text ?? 'Screenshot'}
              </div>
            );
          default:
            return null;
        }
      })}
    </article>
  );
}
