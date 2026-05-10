import type { ReactNode } from 'react';

type PageLayoutProps = Readonly<{
  children: ReactNode;
  /** Extra classes on the outer wrapper (e.g. space-y-16) */
  className?: string;
}>;

/**
 * Standard page wrapper — provides consistent vertical padding used by every
 * page (`py-6 md:py-8`).  Inner sections are still responsible for their own
 * `mx-auto max-w-7xl px-4 md:px-8` container where needed.
 */
export default function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <div className={`py-6 md:py-8 ${className}`.trim()}>
      {children}
    </div>
  );
}

