export interface NavItem {
  label: string;
  href: string;
}

interface TopNavProps {
  items: NavItem[];
}

export function TopNav({ items }: TopNavProps) {
  return (
    <div className="sticky top-0 z-50 border-b border-accentMuted/30 bg-graphite/80 backdrop-blur-lg">
      <div className="mx-auto max-w-6xl px-6 py-4 md:px-8">
        <nav
          aria-label="Основная навигация"
          className="hidden items-center justify-center gap-6 text-xs uppercase tracking-[0.2em] text-muted md:flex"
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mono transition-colors hover:text-accentHover focus-visible:text-accentHover focus-visible:outline-none"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-accentMuted/25 bg-graphite/70 md:hidden">
        <div
          aria-label="Мобильная навигация"
          className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-muted"
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mono transition-colors hover:text-accentHover focus-visible:text-accentHover focus-visible:outline-none"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
