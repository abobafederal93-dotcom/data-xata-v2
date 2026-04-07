export type ArticleBlock =
  | { type: 'h1' | 'h2' | 'h3' | 'h4' | 'paragraph'; text: string }
  | { type: 'code_block'; text: string }
  | { type: 'inline_code_demo'; text: string }
  | { type: 'image'; src: string; alt?: string }
  | { type: 'blockquote'; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] };

interface ArticleContentProps {
  content: ArticleBlock[];
}

export default function ArticleContent({ content }: ArticleContentProps) {
  return (
    <article className="flex-1 desktop:max-w-[82.5rem] order-1">
      {content.map((block, i) => {
        switch (block.type) {
          case 'h1':
            return (
              <h1 key={i} className="text-40 leading-58 font-medium text-white mb-30">
                {block.text}
              </h1>
            );
          case 'h2':
            return (
              <h2 key={i} className="text-30 leading-43 font-medium text-white mb-20 mt-40">
                {block.text}
              </h2>
            );
          case 'h3':
            return (
              <h3 key={i} className="text-25 leading-36 font-medium text-white mb-15 mt-30">
                {block.text}
              </h3>
            );
          case 'h4':
            return (
              <h4 key={i} className="text-20 leading-29 font-medium text-white mb-12 mt-25">
                {block.text}
              </h4>
            );
          case 'paragraph':
            return (
              <p key={i} className="text-14 leading-18 text-secondary mb-20">
                {block.text}
              </p>
            );
          case 'code_block':
            return (
              <pre
                key={i}
                className="bg-[#f0f3fa] p-20 rounded-sm text-14 leading-17 text-[#0041be] font-mono mb-20 overflow-x-auto"
              >
                {block.text}
              </pre>
            );
          case 'inline_code_demo':
            return (
              <p key={i} className="text-14 leading-18 text-secondary mb-20">
                {block.text}{' '}
                <code className="bg-white px-3 py-1 text-12 leading-17 text-[#0041be] rounded-sm font-mono">
                  fileHeader.Open()
                </code>
              </p>
            );
          case 'image':
            // eslint-disable-next-line @next/next/no-img-element
            return <img key={i} src={block.src} alt={block.alt ?? ''} className="w-full rounded-sm mb-20" />;
          case 'blockquote':
            return (
              <blockquote
                key={i}
                className="bg-[#215aee] p-20 rounded-sm text-14 leading-17 text-white mb-20 min-h-84"
              >
                {block.text}
              </blockquote>
            );
          case 'list': {
            const ListTag = block.ordered ? 'ol' : 'ul';
            return (
              <ListTag
                key={i}
                className={
                  'text-14 leading-20 text-white mb-20 pl-20 space-y-8 ' +
                  (block.ordered ? 'list-decimal' : 'list-disc')
                }
              >
                {block.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ListTag>
            );
          }
          case 'table':
            return (
              <table key={i} className="w-full border-collapse text-14 leading-20 mb-20">
                <thead>
                  <tr>
                    {block.headers.map((h, j) => (
                      <th
                        key={j}
                        className="border border-white/10 p-12 text-secondary font-medium bg-[#215aee]/30 text-left"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, ri) => (
                    <tr key={ri}>
                      {row.map((cell, ci) => (
                        <td key={ci} className="border border-white/10 p-12 text-white">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          default:
            return null;
        }
      })}
    </article>
  );
}
