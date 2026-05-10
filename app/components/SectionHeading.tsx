type SectionHeadingProps = Readonly<{
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}>;

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.28em] font-semibold text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-headline text-2xl md:text-4xl font-bold text-on-surface">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-on-surface-variant leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}

