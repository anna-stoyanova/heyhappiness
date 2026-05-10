import Image from "next/image";
import Markdown from "./Markdown";
import SectionHeading from "./SectionHeading";

export type MosaicItem = Readonly<{
  slug: string;
  pathname: string;
  data: {
    title: string;
    image: string;
    hideTitle?: boolean;
  };
  content: string;
}>;

type ContentMosaicProps = Readonly<{
  items: MosaicItem[];
  sectionTitle?: string;
  eyebrow?: string;
  description?: string;
  reverseOrder?: boolean;
  className?: string;
}>;

export default async function ContentMosaic({
  items,
  sectionTitle,
  eyebrow,
  description,
  reverseOrder = false,
  className = "",
}: ContentMosaicProps) {
  return (
    <section className={`mx-auto max-w-7xl px-4 md:px-8 ${className}`.trim()}>
      {sectionTitle ? (
        <SectionHeading
          eyebrow={eyebrow}
          title={sectionTitle}
          description={description}
          className="mb-10"
        />
      ) : null}

      <div className="space-y-12 md:space-y-16">
        {items.map((item, index) => {
          const isReverse = reverseOrder ? index % 2 === 0 : index % 2 === 1;

          return (
            <article
              key={item.slug}
              className={`flex flex-col gap-6 overflow-hidden rounded-4xl bg-surface-container-low p-4 shadow-[0_12px_40px_rgba(57,56,47,0.06)] md:flex-row md:items-center md:gap-10 md:p-6 ${isReverse ? "md:flex-row-reverse" : ""}`}
            >
              <div className="w-full shrink-0 overflow-hidden rounded-[1.5rem] md:w-1/2">
                <Image
                  src={item.data.image}
                  alt={item.data.title}
                  width={800}
                  height={533}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="w-full space-y-4 md:w-1/2">
                {item.data.hideTitle ? null : (
                  <h3 className="font-headline text-2xl md:text-3xl font-bold text-on-surface leading-tight">
                    {item.data.title}
                  </h3>
                )}
                <Markdown className="space-y-4 text-base md:text-lg leading-relaxed text-on-surface-variant">
                  {item.content}
                </Markdown>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}


