import { ViewTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "./Markdown";

export type BlogCardItem = Readonly<{
  slug: string;
  pathname: string;
  data: {
    title: string;
    image: string;
    summary: string;
  };
  content: string;
}>;

type BlogGridProps = Readonly<{
  items: BlogCardItem[];
  className?: string;
}>;

export default async function BlogGrid({ items, className = "" }: BlogGridProps) {
  return (
    <section className={`mx-auto max-w-7xl px-4 md:px-8 ${className}`.trim()}>
      <div className="grid gap-8 lg:grid-cols-2">
        {items.map((post, index) => (
          <article
            key={post.slug}
            className={`overflow-hidden rounded-4xl bg-surface-container-low shadow-[0_12px_40px_rgba(57,56,47,0.06)] ${index % 2 === 1 ? "lg:translate-y-8" : ""}`}
          >
            <Link href={post.pathname} className="block" transitionTypes={["nav-forward"]}>
              <ViewTransition name={`blog-image-${post.slug}`}>
                <Image
                  src={post.data.image}
                  alt={post.data.title}
                  width={900}
                  height={650}
                  className="h-72 w-full object-cover"
                />
              </ViewTransition>
            </Link>
            <div className="space-y-4 p-6 md:p-8">
              <h2 className="font-headline text-2xl font-bold text-on-surface leading-tight">
                <Link href={post.pathname}>{post.data.title}</Link>
              </h2>
              <Markdown className="text-base leading-relaxed text-on-surface-variant">
                {post.data.summary}
              </Markdown>
              <Link
                href={post.pathname}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-on-primary transition-opacity hover:opacity-90"
              >
                Прочети
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


