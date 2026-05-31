import ContentMosaic from "../../components/ContentMosaic";
import SectionHeading from "../../components/SectionHeading";
import PageLayout from "../../components/PageLayout";
import { getLectures } from "@/lib/site-content";

export default function LecturerPage() {
  const lectures = getLectures();

  return (
    <PageLayout className="space-y-16">
      <main className="mx-auto grid max-w-7xl gap-8 px-4 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="overflow-hidden rounded-4xl bg-black shadow-[0_12px_40px_rgba(57,56,47,0.1)]">
          <iframe
            className="aspect-video w-full"
            title="Форум на Дарик Как да живеем до 100"
            src="https://www.youtube.com/embed/JMr6a2A9f44?si=E66-H6bgwJvlQ5D4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="space-y-5 rounded-4xl bg-surface-container-low p-6 shadow-[0_12px_40px_rgba(57,56,47,0.06)] md:p-8">
          <p className="leading-relaxed text-on-surface-variant">
            Като Архитект на щастието, моето призвание е да подкрепям хората в
            изграждането на по-пълноценен, смислен и радостен живот чрез
            доказани практики и знания.
          </p>
          <p className="leading-relaxed text-on-surface-variant">
            Ако търсите вдъхновяваща лекция или семинар за вашия екип или
            събитие – пишете ми на{' '}
            <a href="mailto:anna@bymany.bg" className="font-semibold text-primary">
              anna@bymany.bg
            </a>
            . Щастието е заразно. Нека го разпространим заедно.
          </p>
        </div>
      </main>

      <section className="space-y-10">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading title="ЛЕКЦИОННИ ТЕМИ" />
        </div>
        <ContentMosaic items={lectures} />
      </section>
    </PageLayout>
  );
}


