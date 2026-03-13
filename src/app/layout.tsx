import type { Metadata } from "next";
import "./globals.css";
import { siteContent } from "../data/content";

const { seo } = siteContent;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className="relative isolate overflow-x-clip">
        <div aria-hidden className="site-background">
          <div className="site-background-base" />
          <div className="site-background-image" />
          <div className="site-background-overlay" />
          <div className="site-background-grid" />
        </div>
        <div className="relative z-10 min-h-screen overflow-x-clip">
          <div className="haze" />
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
