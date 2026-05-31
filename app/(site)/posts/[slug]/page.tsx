import { ViewTransition } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Markdown from "../../../components/Markdown";
import { getBlogPostBySlug, getBlogPostSlugs } from "@/lib/site-content";

export function generateStaticParams() {
  return getBlogPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const published = new Date(post.data.date).toLocaleDateString("bg-BG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="mx-auto max-w-5xl space-y-10 px-4 py-6 md:px-8 md:py-8">
      <ViewTransition name={`blog-image-${slug}`}>
        <Image
          src={post.data.image}
          alt={post.data.title}
          width={1400}
          height={800}
          className="h-88 w-full rounded-4xl object-cover shadow-[0_12px_40px_rgba(57,56,47,0.1)]"
        />
      </ViewTransition>
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          {published}
        </p>
        <h1 className="font-headline text-3xl md:text-5xl font-bold text-on-surface leading-tight">
          {post.data.title}
        </h1>
      </header>
      <Markdown className="max-w-none leading-relaxed">
        {post.content}
      </Markdown>
    </article>
  );
}




