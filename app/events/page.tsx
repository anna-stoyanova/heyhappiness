import ContentMosaic from "../components/ContentMosaic";
import PageLayout from "../components/PageLayout";
import { getEventsHero, getEventsPosts } from "@/lib/site-content";

export default function EventsPage() {
  const hero = getEventsHero();
  const posts = getEventsPosts();

  return (
    <PageLayout className="space-y-16">
      {hero ? (
        <section className="mx-auto max-w-7xl px-4 md:px-8">
          <ContentMosaic items={[hero]} reverseOrder />
        </section>
      ) : null}
      <ContentMosaic items={posts} />
    </PageLayout>
  );
}

