import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = Readonly<{
  image: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  children?: ReactNode;
}>;

export default function PageHero({
  image,
  title,
  subtitle,
  className = "",
  children,
}: PageHeroProps) {
  return (
    <section
      className={`relative isolate flex min-h-112 items-end overflow-hidden rounded-4xl md:min-h-136 ${className}`}
    >
      <Image
        src={image}
        alt=""
        fill
        priority={false}
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-black/10" />
      <div className="relative z-10 w-full px-6 py-10 md:px-10 md:py-12 text-white">
        <div className="max-w-5xl mx-auto space-y-4">
          {title ? (
            <h1 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg max-w-4xl">
              {title}
            </h1>
          ) : null}
          {subtitle ? (
            <div className="max-w-3xl text-base md:text-lg text-white/90 leading-relaxed">
              {subtitle}
            </div>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}


