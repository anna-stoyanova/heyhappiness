import BlogGrid from "../components/BlogGrid";
import SectionHeading from "../components/SectionHeading";
import PageLayout from "../components/PageLayout";
import { getBlogPosts } from "@/lib/site-content";

export default function PostsPage() {
  const posts = getBlogPosts();

  return (
    <PageLayout className="space-y-12">
      <section className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Блог"
          title="Размисли, практики и истории за щастието"
          description="Подбрани публикации за връзката между знанието, преживяването и ежедневните избори, които градят по-пълноценен живот."
        />
      </section>
      <BlogGrid items={posts} />
    </PageLayout>
  );
}

