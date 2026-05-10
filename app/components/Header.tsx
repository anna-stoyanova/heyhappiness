"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Начало" },
  { href: "/resources", label: "Ресурси" },
  { href: "/services", label: "Услуги" },
  { href: "/posts", label: "Блог" },
  { href: "/events", label: "Събития" },
  { href: "/lecturer", label: "Лектор" },
  { href: "/about", label: "За мен" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-background/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(57,56,47,0.06)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 md:px-8">
        <Link href="/" className="font-headline text-xl md:text-2xl font-bold text-primary">
          <strong>АннA</strong> - Архитект на щастие
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map(({ href, label }) => {
            const active =
              pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-semibold transition-colors ${active ? "text-primary border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary"}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <button className="lg:hidden rounded-full border border-outline/30 px-4 py-2 text-sm font-semibold text-on-surface-variant">
          Меню
        </button>
      </div>
    </header>
  );
}
