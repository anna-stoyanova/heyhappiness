import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-outline/20 bg-surface-container-low/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <Link href="/" className="font-headline text-2xl font-bold text-primary block">
              <strong>АннA</strong> - Архитект на щастие
            </Link>
            <p className="max-w-xl text-sm leading-relaxed text-on-surface-variant">
              Подкрепям хората с научно обосновани стратегии, за да градят
              щастието си всеки ден малко повече.
            </p>
          </div>

          <div className="grid gap-6 text-sm text-on-surface-variant sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="mb-3 font-semibold uppercase tracking-[0.24em] text-primary">
                Навигация
              </p>
              <ul className="space-y-2">
                <li><Link href="/about">За мен</Link></li>
                <li><Link href="/services">Сесии</Link></li>
                <li><Link href="/posts">Блог</Link></li>
                <li><Link href="/events">Събития</Link></li>
              </ul>
            </div>

            <div>
              <p className="mb-3 font-semibold uppercase tracking-[0.24em] text-primary">
                Свържете се
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:anna@bymany.bg">anna@bymany.bg</a>
                </li>
                <li>
                  <a href="tel:+359893577471">+359 893 57 74 71</a>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-3 font-semibold uppercase tracking-[0.24em] text-primary">
                Социални мрежи
              </p>
              <ul className="space-y-2">
                <li>
                  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/happiness.bymany">
                    Instagram
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://www.facebook.com/anna.stoyanova1">
                    Facebook
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://youtube.com/@annastoyanova6560">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-outline/20 pt-6 text-xs text-on-surface-variant md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} happiness.bymany.bg</p>
          <p>
            <a href="https://happiness.bymany.bg">happiness.bymany.bg</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
