import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = Readonly<{
  image: string;
  className?: string;
  imageContainerClassName?: string;
  imageClassName?: string;
  showDecorations?: boolean;
  children?: ReactNode;
}>;

export default function PageHero({
  image,
  className = "",
  imageContainerClassName = "",
  imageClassName = "object-cover object-center",
  showDecorations = true,
  children,
}: PageHeroProps) {
  const hasChildren = children !== undefined && children !== null;

  return (
    <section
      className={`max-w-7xl mx-auto px-6 py-12 md:py-24 grid ${hasChildren ? "md:grid-cols-2" : "grid-cols-1"} gap-12 items-center ${className}`}
    >
      {/* Left column — content */}
      {hasChildren ? <div className="space-y-8">{children}</div> : null}

      {/* Right column — portrait image */}
      <div className="relative">
        <div
          className={`relative z-10 aspect-4/5 overflow-hidden rounded-2xl shadow-2xl ${imageContainerClassName}`.trim()}
        >
          <Image
            src={image}
            alt=""
            fill
            priority
            className={imageClassName}
            sizes={hasChildren ? "(max-width: 768px) 100vw, 50vw" : "100vw"}
          />
        </div>
        {/* Decorative blurs */}
        {showDecorations ? (
          <>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-container/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary-container/20 rounded-full blur-3xl" />
          </>
        ) : null}
      </div>
    </section>
  );
}