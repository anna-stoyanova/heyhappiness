import { remark } from "remark";
import html from "remark-html";

type MarkdownProps = Readonly<{
  children: string;
  as?: keyof HTMLElementTagNameMap;
  className?: string;
}>;

export default async function Markdown({
  children,
  as: Tag = "div",
  className,
}: MarkdownProps) {
  const processed = await remark().use(html).process(children);

  return (
    <Tag
      className={`markdown ${className ?? ""}`.trim()}
      dangerouslySetInnerHTML={{ __html: processed.toString() }}
    />
  );
}



