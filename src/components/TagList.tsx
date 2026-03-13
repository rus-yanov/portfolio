interface TagListProps {
  items: string[];
}

export function TagList({ items }: TagListProps) {
  if (!items?.length) return null;

  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="mono rounded-full border border-accentMuted/45 bg-accentMuted/15 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-accent/90"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
