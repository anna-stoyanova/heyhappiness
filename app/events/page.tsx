import BlogGrid from "../components/BlogGrid";
import SectionHeading from "../components/SectionHeading";
import PageLayout from "../components/PageLayout";
import {
  excerptFromMarkdown,
  getEventsHero,
  getEventsPosts,
} from "@/lib/site-content";

export default function EventsPage() {
  const hero = getEventsHero();
  const posts = getEventsPosts();
  const items = (hero ? [hero, ...posts] : posts).map((event) => ({
    ...event,
    data: {
      title: event.data.title,
      image: event.data.image,
      summary: event.data.summary ?? excerptFromMarkdown(event.content),
    },
  }));

  return (
    <PageLayout className="space-y-12">
      <section className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Събития"
          title="Предстоящи и специални събития"
          description="Изберете събитие, прочетете детайлите и се включете."
        />
      </section>
      <BlogGrid items={items} />
    </PageLayout>
  );
}

