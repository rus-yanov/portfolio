import Image from "next/image";
import { siteContent } from "../data/content";
import { ContentCard } from "../components/ContentCard";
import { Section } from "../components/Section";
import { TagList } from "../components/TagList";
import { TopNav } from "../components/TopNav";

function ContactIcon({ label }: { label: string }) {
  const baseClass = "h-4 w-4 text-accentMuted transition-colors group-hover:text-accentHover";

  if (label === "GitHub") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={baseClass} aria-hidden>
        <path
          d="M9 18c-4 1.3-4-2-6-2m12 4v-3.3a2.8 2.8 0 0 0-.8-2.2c2.7-.3 5.5-1.4 5.5-6.2a4.8 4.8 0 0 0-1.3-3.3 4.5 4.5 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6 0C6.5 1.5 5.4 1.8 5.4 1.8a4.5 4.5 0 0 0-.1 3.2A4.8 4.8 0 0 0 4 8.3c0 4.8 2.8 5.9 5.5 6.2a2.8 2.8 0 0 0-.8 2.2V20"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={baseClass} aria-hidden>
        <path
          d="M16 8a5 5 0 0 1 5 5v7h-4v-7a1 1 0 0 0-2 0v7h-4v-7a5 5 0 0 1 5-5Z"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="3"
          y="9"
          width="4"
          height="11"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.45"
        />
        <circle cx="5" cy="5" r="2" stroke="currentColor" strokeWidth="1.45" />
      </svg>
    );
  }

  if (label === "Telegram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={baseClass} aria-hidden>
        <path
          d="m3 11.8 16.8-7.1c.8-.3 1.5.5 1.2 1.2L13.9 23c-.3.8-1.4.8-1.7 0l-1.7-5.3-5.3-1.7c-.8-.3-.8-1.4 0-1.7Z"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinejoin="round"
        />
        <path
          d="m10.3 17.2 7.6-9.3M5.5 15.3l4.8-2.1"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={baseClass} aria-hidden>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.45"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const {
    personal,
    hero,
    about,
    experience,
    consulting,
    projects,
    outsideWork,
    contacts
  } = siteContent;
  const personalSubtitle =
    "subtitle" in personal && typeof personal.subtitle === "string"
      ? personal.subtitle
      : undefined;
  const allowedContactLabels = ["GitHub", "LinkedIn", "Telegram", "Email"];
  const contactItems = contacts.items.filter((item) =>
    allowedContactLabels.includes(item.label)
  );

  const navItems = [
    { label: about.title, href: "#about" },
    { label: experience.title, href: "#experience" },
    { label: consulting.navLabel ?? consulting.title, href: "#consulting" },
    { label: projects.title, href: "#projects" },
    { label: outsideWork.title, href: "#outside-work" },
    { label: contacts.title, href: "#contact" }
  ];
  const outsideWorkGallery = outsideWork.gallery ?? [];
  const outsideWorkGalleryItemClasses = [
    "xl:-rotate-[0.8deg] xl:translate-y-1",
    "xl:rotate-[0.7deg] xl:translate-y-6",
    "xl:-rotate-[0.5deg] xl:-translate-y-1",
    "xl:rotate-[0.9deg] xl:translate-y-5",
    "xl:-rotate-[0.6deg] xl:translate-y-2",
    "xl:rotate-[0.5deg] xl:-translate-y-2"
  ];
  const renderOutsideWorkPhoto = (
    photo: (typeof outsideWorkGallery)[number],
    className: string
  ) => (
    <li key={photo.src} className={`list-none aspect-square ${className}`}>
      <figure className="h-full aspect-square overflow-hidden rounded-[1.2rem] border border-accentMuted/35 bg-black/30 p-2 shadow-card">
        <div className="flex h-full flex-col rounded-[0.95rem] border border-black/10 bg-stone-100/92 p-2">
          <div className="h-full aspect-square overflow-hidden rounded-[0.7rem] border border-black/10 bg-black/10">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={1200}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </figure>
    </li>
  );
  const heroActionClassName =
    "mono inline-flex cursor-pointer items-center justify-center rounded-full border border-accent/75 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.22em] text-accent shadow-[inset_0_0_0_1px_rgba(184,106,46,0.16)] transition-[color,background-color,border-color,box-shadow,transform] hover:-translate-y-px hover:border-accentHover hover:bg-accent/18 hover:text-accentHover hover:shadow-[inset_0_0_0_1px_rgba(204,122,58,0.22),0_0_0_1px_rgba(204,122,58,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60";
  const cardActionClassName =
    "mono inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-accent/80 bg-black/35 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-accent shadow-[inset_0_0_0_1px_rgba(184,106,46,0.18)] transition-[color,background-color,border-color,transform,box-shadow] hover:-translate-y-px hover:border-accentHover hover:bg-accent/20 hover:text-accentHover hover:shadow-[inset_0_0_0_1px_rgba(204,122,58,0.24),0_0_0_1px_rgba(204,122,58,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60";

  return (
    <>
      <TopNav items={navItems} />

      <main className="mx-auto flex max-w-6xl flex-col gap-14 px-6 py-12 md:gap-16 md:px-8 md:py-14">
        <section id="top" className="section-anchor">
          <div className="section-frame rounded-2xl bg-panel/70 px-6 py-10 shadow-card md:px-10 md:py-14">
            <div className="relative z-10 grid items-start gap-10 md:grid-cols-[1.25fr_0.75fr]">
              <div>
                <h1 className="hero-name text-4xl font-black uppercase leading-[0.9] text-ink sm:text-5xl md:text-7xl lg:text-8xl">
                  {personal.name}
                </h1>
                <p className="mt-4 text-base text-accent md:text-xl">{personal.title}</p>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/80">
                  {hero.description}
                </p>
                {personalSubtitle ? (
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                    {personalSubtitle}
                  </p>
                ) : null}
                <div className="mt-8 flex flex-wrap gap-3">
                  {hero.buttons?.map((button) => (
                    <a
                      key={button.href}
                      href={button.href}
                      className={heroActionClassName}
                      {...("external" in button && button.external
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                      {...("download" in button && button.download
                        ? { download: true }
                        : {})}
                    >
                      {button.label}
                    </a>
                  ))}
                </div>
              </div>

              <aside className="rounded-xl border border-accentMuted/45 bg-black/35 p-6 md:mt-12">
                <p className="mono text-[11px] uppercase tracking-[0.2em] text-accentMuted">
                  {contacts.title}
                </p>
                <div className="mt-4 space-y-3">
                  {contactItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-2.5 rounded-lg border border-accentMuted/30 px-3 py-2.5 transition-colors hover:border-accentMuted/55 hover:bg-accentMuted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                      target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    >
                      <ContactIcon label={item.label} />
                      <span className="mono text-xs uppercase tracking-[0.16em] text-ink/90 transition-colors group-hover:text-accentHover">
                        {item.label}
                      </span>
                    </a>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <Section id="about" title={about.title}>
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10">
            <div className="space-y-6">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <figure className="w-full max-w-sm justify-self-start lg:-mt-20 lg:justify-self-end xl:-mt-24">
              <div className="rounded-xl border border-accentMuted/40 bg-black/35 p-2 shadow-card">
                <div className="overflow-hidden rounded-lg border border-accentMuted/25">
                  <Image
                    src={about.portrait.src}
                    alt={about.portrait.alt}
                    width={800}
                    height={1000}
                    className="aspect-[4/5] h-full w-full object-cover grayscale"
                    priority={false}
                  />
                </div>
              </div>
            </figure>
          </div>
        </Section>

        <Section id="experience" title={experience.title}>
          <div className="grid gap-6">
            {experience.items.map((item) => (
              <ContentCard
                key={`${item.company}-${item.role}`}
                title={item.company}
                subtitle={item.role}
                meta={item.period}
                description={item.description}
              >
                {"projects" in item && item.projects ? (
                  <div className="space-y-4">
                    {item.projects.map((project) => (
                      <section
                        key={project.name}
                        className="rounded-lg border border-accentMuted/30 bg-black/15 px-4 py-4"
                      >
                        <h4 className="text-sm font-semibold text-ink md:text-base">
                          {project.name}
                        </h4>
                        <p className="mt-2 text-sm text-ink/80">
                          {project.description}
                        </p>
                        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink/85">
                          {project.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                        <div className="mt-4">
                          <TagList items={project.stack} />
                        </div>
                      </section>
                    ))}
                  </div>
                ) : (
                  <>
                    <ul className="list-disc space-y-2 pl-5 text-sm text-ink/85">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <TagList items={item.stack} />
                  </>
                )}
              </ContentCard>
            ))}
          </div>
        </Section>

        <Section id="consulting" title={consulting.title}>
          <div className="grid gap-6">
            {consulting.items.map((item) => {
              const actionLinks = [
                ...("mvpLink" in item && item.mvpLink ? [item.mvpLink] : []),
                ...("prototypeLinks" in item && item.prototypeLinks ? item.prototypeLinks : []),
                ...("articleLink" in item && item.articleLink ? [item.articleLink] : [])
              ];

              return (
                <ContentCard
                  key={item.project}
                  title={item.project}
                  titleAction={
                    actionLinks.length ? (
                      <div className="flex flex-wrap items-center gap-2">
                        {actionLinks.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            className={cardActionClassName}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {link.label}
                            <span aria-hidden>{"->"}</span>
                          </a>
                        ))}
                      </div>
                    ) : null
                  }
                  subtitle={item.role}
                  meta={item.period}
                  description={item.description}
                >
                  <ul className="list-disc space-y-2 pl-5 text-sm text-ink/85">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <TagList items={item.stack} />
                </ContentCard>
              );
            })}
          </div>
        </Section>

        <Section id="projects" title={projects.title}>
          <p>{projects.intro}</p>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.items.map((item) => (
              <ContentCard
                key={item.name}
                title={item.name}
                titleAction={
                  <a
                    href={item.link}
                    className={cardActionClassName}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.ctaLabel ?? "Открыть репозиторий"}
                    <span aria-hidden>{"->"}</span>
                  </a>
                }
                description={item.description}
              >
                <TagList items={item.stack} />
              </ContentCard>
            ))}
          </div>
        </Section>

        <Section id="outside-work" title={outsideWork.title}>
          <p>{outsideWork.text}</p>
          {outsideWorkGallery.length ? (
            <ul className="mt-8 grid w-full grid-cols-1 justify-items-center gap-x-6 gap-y-6 p-0 sm:grid-cols-2 xl:grid-cols-3 xl:gap-y-7">
              {outsideWorkGallery.map((photo, index) =>
                renderOutsideWorkPhoto(
                  photo,
                  `w-full max-w-[16rem] ${
                    outsideWorkGalleryItemClasses[index] ?? ""
                  }`
                )
              )}
            </ul>
          ) : null}
        </Section>

        <Section id="contact" title={contacts.title}>
          <p>{contacts.text}</p>
          <div className="grid gap-4 md:grid-cols-2">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center gap-3 rounded-lg border border-accentMuted/40 bg-white/5 px-5 py-4 transition-colors hover:border-accentMuted/70 hover:bg-accentMuted/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
              >
                <ContactIcon label={item.label} />
                <p className="mono text-xs uppercase tracking-[0.2em] text-ink/90 transition-colors group-hover:text-accentHover">
                  {item.label}
                </p>
              </a>
            ))}
          </div>
        </Section>
      </main>

      <footer className="border-t border-accentMuted/30 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 text-sm text-muted md:flex-row md:px-8">
          <span className="mono text-xs uppercase tracking-[0.2em]">
            {personal.name} · {personal.title}
          </span>
          <span className="mono text-xs uppercase tracking-[0.2em]">
            {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </>
  );
}
