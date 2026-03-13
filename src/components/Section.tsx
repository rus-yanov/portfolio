import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
}

export function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section id={id} className="section-anchor">
      <div className="section-frame bg-panel/70 backdrop-blur-sm shadow-card rounded-2xl px-6 py-10 md:px-10 md:py-12">
        <div className="relative z-10">
          {eyebrow ? (
            <p className="mono text-xs uppercase tracking-[0.2em] text-accentMuted">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h2 className="mt-3 text-2xl font-semibold text-ink md:text-3xl">
              {title}
            </h2>
          ) : null}
          <div className="mt-6 space-y-6 text-base leading-relaxed text-ink/90">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
