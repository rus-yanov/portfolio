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
          className="mono pointer-events-none select-none rounded-full border border-white/7 bg-transparent px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-muted/80"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
