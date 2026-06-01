import Link from "next/link";
import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import ContentMosaic from "../../components/ContentMosaic";
import PageLayout from "../../components/PageLayout";
import AudioCard from "../../components/AudioCard";
import { getResourcesByCategory, getAudioResources } from "@/lib/site-content";

export default function ResourcesPage() {
  const books = getResourcesByCategory("books");
  const audioItems = getAudioResources();

  return (
    <PageLayout className="space-y-16">
      <PageHero
        image="/images/main-books.webp"
        className="max-w-none px-0 py-0 grid-cols-1 md:grid-cols-1"
        imageContainerClassName="aspect-[21/9] rounded-3xl"
        showDecorations={false}
      />

      <section className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading title="ТЕСТОВЕ" className="mb-10" />
        <div className="overflow-hidden rounded-4xl bg-surface-container-low shadow-[0_12px_40px_rgba(57,56,47,0.06)]">
          <Link href="/resources/panas-test" className="grid gap-8 p-6 md:grid-cols-[1.4fr_0.8fr] md:p-10">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Научен тест
              </span>
              <h3 className="font-headline text-3xl md:text-4xl font-bold text-on-surface leading-tight">
                Как се чувствате днес?
                <br />
                PANAS Тест.
              </h3>
              <p className="max-w-2xl leading-relaxed text-on-surface-variant">
                Положителното и отрицателното афективно разписание (PANAS) е един
                от най-широко използваните методи за измерване на емоционалните
                състояния в психологията. Разберете своя профил за по-малко от 5
                минути.
              </p>
              <span className="inline-flex items-center gap-2 font-semibold text-primary">
                Направи теста сега
                <span aria-hidden="true">→</span>
              </span>
            </div>
            <div className="flex min-h-48 items-center justify-center rounded-3xl bg-linear-to-br from-primary/10 via-secondary/10 to-tertiary/10 p-8">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white text-4xl shadow-sm">
                  🧠
                </div>
                <div className="mx-auto h-3 w-24 rounded-full bg-primary/70" />
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <span className="h-16 rounded-full bg-primary/60" />
                  <span className="h-24 rounded-full bg-secondary/70" />
                  <span className="h-12 rounded-full bg-tertiary/70" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <ContentMosaic sectionTitle="КНИГИ" items={books} imageCover={false} />

      {audioItems.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading title="АУДИО" className="mb-10" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {audioItems.map((entry) => (
              <AudioCard key={entry.slug} {...entry.data} />
            ))}
          </div>
        </section>
      )}
    </PageLayout>
  );
}