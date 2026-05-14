import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = Readonly<{
  image: string;
  className?: string;
  children?: ReactNode;
}>;

export default function PageHero({ image, className = "", children }: PageHeroProps) {
  return (
    <section
      className={`max-w-7xl mx-auto px-6 py-12 md:py-24 grid md:grid-cols-2 gap-12 items-center ${className}`}
    >
      {/* Left column — content */}
      <div className="space-y-8">{children}</div>

      {/* Right column — portrait image */}
      <div className="relative">
        <div className="relative z-10 aspect-4/5 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        {/* Decorative blurs */}
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-container/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary-container/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
