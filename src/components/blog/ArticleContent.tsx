import type { ReactNode } from "react";
import type { BlogContentBlock } from "@/lib/blogPosts";

const renderInline = (text: string): ReactNode[] =>
  text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-bold text-ink">
        {part}
      </strong>
    ) : (
      part
    ),
  );

const ArticleContent = ({ blocks }: { blocks: BlogContentBlock[] }) => (
  <div>
    {blocks.map((block, index) => {
      switch (block.type) {
        case "heading2":
          return (
            <h2 key={index} className="mt-12 text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
              {block.text}
            </h2>
          );
        case "heading3":
          return (
            <h3 key={index} className="mt-8 text-lg font-bold leading-tight text-ink sm:text-xl">
              {block.text}
            </h3>
          );
        case "list":
          return (
            <ul key={index} className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-600">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>{renderInline(item)}</li>
              ))}
            </ul>
          );
        case "orderedList":
          return (
            <ol key={index} className="mt-4 list-decimal space-y-2 pl-5 text-base leading-relaxed text-slate-600">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>{renderInline(item)}</li>
              ))}
            </ol>
          );
        case "paragraph":
        default:
          return (
            <p key={index} className="mt-4 text-base leading-relaxed text-slate-600">
              {renderInline(block.text)}
            </p>
          );
      }
    })}
  </div>
);

export default ArticleContent;
