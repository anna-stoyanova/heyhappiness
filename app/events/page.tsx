import BlogGrid from "../components/BlogGrid";
import Markdown from "../components/Markdown";
import PageHero from "../components/PageHero";
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
  const items = posts.map((event) => ({
    ...event,
    data: {
      title: event.data.title,
      image: event.data.image,
      summary: event.data.summary ?? excerptFromMarkdown(event.content),
    },
  }));

  return (
    <PageLayout className="space-y-12">
      {hero ? (
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <PageHero
            image={hero.data.image}
            className="px-0 py-0 md:py-0"
            imageContainerClassName="rounded-none shadow-none"
            showDecorations={false}
          >
            <Markdown className="max-w-2xl space-y-4 leading-relaxed text-on-surface-variant">
              {hero.content || (hero.data.summary ?? "")}
            </Markdown>
          </PageHero>
        </div>
      ) : null}

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

