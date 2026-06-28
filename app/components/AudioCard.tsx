import Image from "next/image";
import type { AudioData } from "@/lib/site-content";

export default function AudioCard({ title, image, audio, duration, summary }: AudioData) {
  return (
    <article className="flex flex-col overflow-hidden rounded-4xl bg-surface-container-low shadow-[0_12px_40px_rgba(57,56,47,0.06)]">
      {image && (
        <div className="relative aspect-video w-full overflow-hidden">
          <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-headline text-xl font-bold leading-tight text-on-surface md:text-2xl">
            {title}
          </h3>
          {duration && (
            <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              {duration}
            </span>
          )}
        </div>

        {summary && (
          <p className="leading-relaxed text-on-surface-variant">{summary}</p>
        )}

        <audio controls controlsList="nodownload" src={audio} className="mt-auto w-full" />
      </div>
    </article>
  );
}
