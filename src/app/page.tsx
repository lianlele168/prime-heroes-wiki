import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AuthorCard from "@/components/AuthorCard";
import { ArrowRight, CalendarClock, Crosshair, ExternalLink, Layers, Rocket, ShieldCheck, Sparkles, Users } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { homeFaqs } from "@/data/pages";
import { site } from "@/data/site";
import { faqSchema, videoGameSchema, websiteSchema } from "@/lib/seo";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const intentCards = [
  { href: "/release-date/", title: "Release tracker", detail: "October 2026 early access window, every confirmed date", icon: CalendarClock, tone: "lilac" },
  { href: "/heroes/", title: "Roster explorer", detail: "Six launch heroes, five abilities each", icon: Users, tone: "mint" },
  { href: "/what-is-prime-heroes/", title: "What is Prime Heroes", detail: "Verified gameplay structure and studio facts", icon: Crosshair, tone: "apricot" },
  { href: "/prime-universe/", title: "Prime universe", detail: "The Indus connection and shared lore", icon: Layers, tone: "mint" },
] as const;

export default function HomePage() {
  return (
    <>
      <JsonLd data={[websiteSchema(), videoGameSchema(), faqSchema(homeFaqs)]} />

      <section className="hero-home">
        <div className="hero-shade" />
        <div className="page-shell hero-content">
          <span className="hero-badge"><Sparkles className="h-4 w-4" />Official 2026 Fall Lineup · Revealed Sep 04</span>
          <h1><span className="hero-title-gradient">Prime Heroes</span></h1>
          <p className="hero-copy">
            SuperGaming&apos;s Roblox-exclusive team hero shooter enters early access in October 2026
            with six heroes and five abilities each. This wiki tracks only verified facts now, and
            switches to full ability guides the moment the game is playable.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/heroes/" className="btn-primary"><Users className="h-4 w-4" />Explore the roster</Link>
            <Link href="/release-date/" className="btn-hero-secondary"><CalendarClock className="h-4 w-4" />Release tracker</Link>
            <a href={site.officialNewsUrl} target="_blank" rel="noopener noreferrer" className="btn-hero-secondary"><Rocket className="h-4 w-4" />Official reveal</a>
          </div>
        </div>
      </section>

      <section className="fact-strip" aria-label="Verified launch facts">
        <div className="page-shell fact-grid">
          <div><strong>Oct 2026</strong><span>early access window</span></div>
          <div><strong>6</strong><span>launch heroes</span></div>
          <div><strong>5</strong><span>abilities per hero</span></div>
          <div><strong>Roblox</strong><span>exclusive platform</span></div>
        </div>
      </section>

      {/* E-E-A-T AUTHOR VERIFICATION */}
      <div className="page-shell pt-8">
        <AuthorCard />

        {/* VISUAL GAMEPLAY SHOWCASE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="rounded-2xl overflow-hidden border border-indigo-900/60 bg-indigo-950/40 p-4">
            <Image
              src="/images/prime-header.webp"
              alt="Prime Heroes Official Key Artwork"
              width={1014}
              height={640}
              className="rounded-xl object-cover w-full h-56 border border-indigo-800/40"
              priority
            />
            <p className="text-xs text-indigo-300 mt-2.5 text-center font-medium">
              Figure 1: Official Prime Heroes Showcase by SuperGaming.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-indigo-900/60 bg-indigo-950/40 p-4">
            <Image
              src="/images/prime-gameplay.webp"
              alt="Prime Heroes Combat Arena"
              width={768}
              height={432}
              className="rounded-xl object-cover w-full h-56 border border-indigo-800/40"
            />
            <p className="text-xs text-indigo-300 mt-2.5 text-center font-medium">
              Figure 2: Combat Arena Action with ability rotations and tactical gunplay.
            </p>
          </div>
        </div>
      </div>

      <section className="page-section">
        <div className="page-shell">
          <div className="section-heading">
            <div><p className="eyebrow">Choose the useful page</p><h2>Start with what is confirmed</h2></div>
            <Link href="/news/" className="text-link">Verification log <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="intent-grid">
            {intentCards.map((card) => {
              const Icon = card.icon;
              return <Link key={card.href} href={card.href} className={`intent-card tone-${card.tone}`}><span className="intent-icon"><Icon className="h-5 w-5" /></span><span><strong>{card.title}</strong><small>{card.detail}</small></span><ArrowRight className="ml-auto h-4 w-4" /></Link>;
            })}
          </div>
        </div>
      </section>

      <section className="page-section band-alt">
        <div className="page-shell">
          <div className="section-heading">
            <div><p className="eyebrow">No invented heroes</p><h2>Why this wiki looks quiet before launch</h2></div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="value-card">
              <ShieldCheck className="h-6 w-6 text-lilac-700" />
              <h3>Facts first</h3>
              <p>Every claim traces to Roblox&apos;s newsroom or reputable press coverage. Rumors and fake beta links stay off the site.</p>
            </div>
            <div className="value-card">
              <Layers className="h-6 w-6 text-mint-700" />
              <h3>Structure over speculation</h3>
              <p>Six heroes and five ability slots each are confirmed. The roster explorer tracks those slots instead of inventing names.</p>
            </div>
            <div className="value-card">
              <Crosshair className="h-6 w-6 text-apricot-dark" />
              <h3>Launch-day ready</h3>
              <p>Hero pages, ability values, and a match-flow beginner guide are drafted to publish as soon as early access opens.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-shell article-layout">
          <article className="article-body">
            <section>
              <h2>Frequently asked questions</h2>
              <div className="faq-list">
                {homeFaqs.map((faq) => (
                  <details key={faq.question}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </article>
          <aside className="article-aside">
            <div>
              <p className="eyebrow">Sources</p>
              <div className="source-links !mt-0">
                <a href={site.officialNewsUrl} target="_blank" rel="noopener noreferrer">Roblox Fall Games Preview <ExternalLink className="h-4 w-4" /></a>
                <a href={site.announcementUrl} target="_blank" rel="noopener noreferrer">IGN India reveal report <ExternalLink className="h-4 w-4" /></a>
                <a href={site.trackingUrl} target="_blank" rel="noopener noreferrer">BloxInformer tracking <ExternalLink className="h-4 w-4" /></a>
              </div>
            </div>
            <div>
              <p className="eyebrow">Next update</p>
              <strong>Exact launch day</strong>
              <p>The timeline moves from an October window to a locked date the moment SuperGaming or Roblox announces it.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
