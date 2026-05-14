import Image from "next/image";
import PageHero from "./components/PageHero";
import SectionHeading from "./components/SectionHeading";
import Markdown from "./components/Markdown";
import { getInterviews } from "@/lib/site-content";

export default function Home() {
  const interviews = getInterviews();

  return (
    <div className="space-y-16 py-6 md:py-8">
      <PageHero image="/images/main-anna.jpg">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-sm font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 3a3 3 0 0 1 3 3c0 .75-.27 1.43-.72 1.95A4 4 0 0 1 19 11.5c0 1.6-.94 3-2.32 3.68A3 3 0 0 1 14 17.83V20h-4v-2.17a3 3 0 0 1-2.68-2.65A3.5 3.5 0 0 1 5 11.5a3.5 3.5 0 0 1 3-3.46V8a3 3 0 0 1 3-3h1a3 3 0 0 1 1-.94V6a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v.08A3.5 3.5 0 0 0 7 9.5v.06A3 3 0 0 0 5 12a1.5 1.5 0 0 0 1.5 1.5H7v1a1 1 0 0 0 1 1h.17A3 3 0 0 0 11 17.83V20h2v-2.17a3 3 0 0 0 2.83-2.33H16.5A1.5 1.5 0 0 0 18 14a2 2 0 0 0-2-2h-.5v-1A2.5 2.5 0 0 0 13 8.5V8a1 1 0 0 0-1-1h-.17A1 1 0 0 1 11 6a1 1 0 0 1 1-1h1Z"/>
          </svg>
          <span>Science-Backed Happiness</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-on-surface leading-[1.1] tracking-tight max-w-lg">
          Подкрепям хората с научно обосновани стратегии, за да градят щастието си всеки ден малко повече.
        </h1>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-lg shadow-lg">
            Започнете сега
          </button>
          <button className="bg-surface-container-high text-on-surface px-8 py-4 rounded-full font-bold text-lg">
            Научете повече
          </button>
        </div>
      </PageHero>

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
