import Image from "next/image";
import PageHero from "./components/PageHero";
import SectionHeading from "./components/SectionHeading";
import Markdown from "./components/Markdown";
import { getInterviews } from "@/lib/site-content";

export default function Home() {
  const interviews = getInterviews();

  return (
    <div className="space-y-16 py-6 md:py-8">
      <PageHero
        image="/images/main.jpg"
        title="Подкрепям хората с научно обосновани стратегии, за да градят щастието си всеки ден малко повече."
      />

      <section className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading title="ИНТЕРВЮТА В МЕДИИТЕ" className="mb-10 text-center" />
        <div className="space-y-12 md:space-y-16">
          {interviews.map((interview, index) => {
            const reverse = index % 2 === 1;

            return (
              <article
                key={interview.slug}
                className={`flex flex-col gap-6 overflow-hidden rounded-4xl bg-surface-container-low p-4 shadow-[0_12px_40px_rgba(57,56,47,0.06)] md:flex-row md:items-center md:gap-10 md:p-6 ${reverse ? "md:flex-row-reverse" : ""}`}
              >
                <div className="w-full shrink-0 overflow-hidden rounded-[1.5rem] md:w-1/2">
                  <Image
                    src={interview.data.image}
                    alt={interview.data.title}
                    width={800}
                    height={533}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="w-full space-y-4 md:w-1/2">
                  <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface leading-tight">
                    {interview.data.title}
                  </h2>
                  <Markdown className="space-y-4 leading-relaxed text-on-surface-variant">
                    {interview.content}
                  </Markdown>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
