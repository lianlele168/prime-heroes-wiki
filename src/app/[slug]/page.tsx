import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, CheckCircle2, ExternalLink, Info, ListChecks } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import RosterExplorer from "@/components/RosterExplorer";
import { getGuidePage, guidePages } from "@/data/pages";
import { site } from "@/data/site";
import { getMonthYear } from "@/lib/date";
import { articleSchema, breadcrumbSchema, faqSchema, howToSchema, rosterSchema } from "@/lib/seo";

export function generateStaticParams() {
  return guidePages.map((page) => ({ slug: page.slug }));
}

type GuideRouteProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: GuideRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getGuidePage(slug);
  if (!page) return {};
  const monthYear = getMonthYear();
  const isLegal = ["privacy-policy", "terms"].includes(slug);
  return {
    title: `${page.title} (${monthYear})`,
    description: page.description,
    alternates: { canonical: `/${page.slug}/` },
    openGraph: { type: "article", url: `/${page.slug}/`, title: page.title, description: page.description },
    twitter: { card: "summary_large_image", title: page.title, description: page.description },
  };
}

export default async function GuidePageRoute({ params }: GuideRouteProps) {
  const { slug } = await params;
  const page = getGuidePage(slug);
  if (!page) notFound();
  const stepSection = page.sections.find((section) => section.steps?.length);

  const schemas: object[] = [
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: page.title, path: `/${page.slug}/` }]),
    articleSchema(page.title, page.description, `/${page.slug}/`),
  ];
  if (page.faqs?.length) schemas.push(faqSchema(page.faqs));
  if (stepSection?.steps?.length) schemas.push(howToSchema(page.title, page.description, `/${page.slug}/`, stepSection.steps));
  if (page.slug === "heroes") schemas.push(rosterSchema());

  const currentIndex = guidePages.findIndex((item) => item.slug === page.slug);
  const related = [...guidePages.slice(currentIndex + 1), ...guidePages.slice(0, currentIndex)]
    .filter((item) => !["privacy-policy", "terms", "about"].includes(item.slug))
    .slice(0, 4);

  return (
    <>
      <JsonLd data={schemas} />
      <section className="article-hero">
        <div className="article-hero-shade" />
        <div className="page-shell relative z-10">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>{page.title}</span></nav>
          <p className="hero-eyebrow mt-8">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="article-summary">{page.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={site.officialNewsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Official reveal <ArrowUpRight className="h-4 w-4" /></a>
            {page.slug !== "heroes" ? <Link href="/heroes/" className="btn-hero-secondary"><ListChecks className="h-4 w-4" />Roster explorer</Link> : null}
          </div>
        </div>
      </section>

      {page.slug === "heroes" ? (
        <section className="page-section pb-0">
          <div className="page-shell">
            <RosterExplorer />
          </div>
        </section>
      ) : null}

      <section className="page-section">
        <div className="page-shell article-layout">
          <article className="article-body">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.steps ? (
                  <ol className="step-list">
                    {section.steps.map((step, index) => <li key={`${step.title}-${index}`}><span>{index + 1}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></li>)}
                  </ol>
                ) : null}
                {section.bullets ? <ul className="bullet-list">{section.bullets.map((bullet) => <li key={bullet}><CheckCircle2 className="h-5 w-5" /><span>{bullet}</span></li>)}</ul> : null}
                {section.callout ? <p className="article-callout"><Info className="h-5 w-5" /><span>{section.callout}</span></p> : null}
              </section>
            ))}

            {page.faqs?.length ? (
              <section><h2>Frequently asked questions</h2><div className="faq-list">{page.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>
            ) : null}

            {page.slug === "news" ? (
              <div className="source-links">
                <a href={site.officialNewsUrl} target="_blank" rel="noopener noreferrer">Roblox Fall Games Preview <ExternalLink className="h-4 w-4" /></a>
                <a href={site.announcementUrl} target="_blank" rel="noopener noreferrer">IGN India reveal report <ExternalLink className="h-4 w-4" /></a>
                <a href={site.trackingUrl} target="_blank" rel="noopener noreferrer">BloxInformer tracking <ExternalLink className="h-4 w-4" /></a>
              </div>
            ) : null}
          </article>

          <aside className="article-aside">
            <div><p className="eyebrow">Facts verified</p><strong>{site.lastChecked}</strong><p>Everything on this page traces to official announcements or reputable press coverage from the reveal window.</p></div>
            <div><p className="eyebrow">Continue</p><nav>{related.map((item) => <Link key={item.slug} href={`/${item.slug}/`}>{item.title}<ArrowRight className="h-4 w-4" /></Link>)}</nav></div>
          </aside>
        </div>
      </section>
    </>
  );
}
