import type { ReactNode } from "react";

interface ContentCardProps {
  title: string;
  titleAction?: ReactNode;
  subtitle?: string;
  meta?: string;
  description?: string;
  children?: ReactNode;
}

export function ContentCard({
  title,
  titleAction,
  subtitle,
  meta,
  description,
  children
}: ContentCardProps) {
  return (
    <article className="rounded-xl border border-accentMuted/35 bg-white/5 px-5 py-6 shadow-glow transition-colors hover:border-accent/60">
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-lg font-semibold text-ink md:text-xl">{title}</h3>
          {titleAction}
        </div>
        {subtitle ? (
          <p className="mono text-xs uppercase tracking-[0.2em] text-accent/85">
            {subtitle}
          </p>
        ) : null}
        {meta ? (
          <p className="mono text-[11px] uppercase tracking-[0.2em] text-muted">
            {meta}
          </p>
        ) : null}
      </div>
      {description ? <p className="mt-4 text-sm text-ink/80">{description}</p> : null}
      {children ? <div className="mt-4 space-y-4">{children}</div> : null}
    </article>
  );
}
