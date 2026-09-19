import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
  title: "Prime Heroes Pre-Launch Guide: What's Confirmed So Far",
  description:
    "What SuperGaming and Roblox have actually confirmed about Prime Heroes — studio, platform and the six-hero launch structure — plus the long list of things that have not been revealed yet.",
};

export default function GuidesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Prime Heroes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prime Heroes is an upcoming hero shooter from SuperGaming, built for Roblox and set inside the developer’s Prime universe. It was included in the Roblox Fall Games Preview, but it has not opened to players yet.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many heroes will Prime Heroes launch with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Early access is planned to launch with six playable heroes, each carrying five special abilities. SuperGaming has not revealed individual hero names, roles or ability kits, so no roster details can be confirmed yet.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a Prime Heroes strategy guide yet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Strategy advice needs real hero kits, weapon stats and map layout, and none of those have been published. Any site offering Prime Heroes ability rotations, weapon tier lists or damage numbers before launch is guessing rather than reporting.',
        },
      },
      {
        '@type': 'Question',
        name: 'When can I play Prime Heroes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No public early-access or release date has been announced. The release tracker follows the official announcement channels and is updated when a date is actually confirmed.',
        },
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          PRIME HEROES <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">PRE-LAUNCH GUIDE</span>
        </h1>
        <p className="text-sm text-indigo-300 max-w-2xl mx-auto">
          A hero shooter from SuperGaming, coming to Roblox. This page covers only what has been
          publicly announced — and is explicit about how much has not been.
        </p>
      </div>

      <AuthorCard />

      <div className="rounded-2xl overflow-hidden border border-indigo-900/60 bg-indigo-950/40 p-4">
        <Image
          src="/images/prime-header.webp"
          alt="Prime Heroes official announcement artwork"
          width={1014}
          height={640}
          className="rounded-xl object-cover w-full h-48 border border-indigo-800/40"
          priority
        />
        <p className="text-xs text-indigo-300 mt-2 text-center font-medium">
          Official announcement artwork — no gameplay figures have been published.
        </p>
      </div>

      <div className="bg-amber-950/40 border border-amber-800/50 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-white mb-2">There is no strategy guide yet — on purpose</h2>
        <p className="text-sm text-slate-200 leading-relaxed">
          Strategy advice needs inputs: hero kits, weapon behaviour, map layout, ability cooldowns.
          Prime Heroes has not been playable publicly, so none of those exist in any source we can
          cite. Writing a guide anyway would mean inventing hero names, ability rotations and weapon
          tiers and presenting them as knowledge. We would rather publish a shorter honest page.
        </p>
        <p className="text-sm text-slate-200 leading-relaxed mt-3">
          If you find a Prime Heroes hero tier list, ability database or damage guide elsewhere,
          check whether it cites an official source. Before launch, those numbers cannot be traced
          to one.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-slate-900/70 p-6 rounded-2xl border border-indigo-900/50 space-y-3">
          <h2 className="text-xl font-bold text-white">Confirmed</h2>
          <ul className="text-sm text-slate-200 space-y-2 list-disc pl-5 leading-relaxed">
            <li>Developed by SuperGaming for Roblox</li>
            <li>Featured in the Roblox Fall Games Preview</li>
            <li>Early access planned with six playable heroes</li>
            <li>Each hero planned to carry five special abilities</li>
            <li>Set in SuperGaming&apos;s Prime universe</li>
          </ul>
          <p className="text-xs text-slate-500 pt-1">
            Sourced from SuperGaming and Roblox announcement coverage — see the{' '}
            <Link href="/news" className="text-indigo-300 underline hover:text-white">
              news tracker
            </Link>
            .
          </p>
        </section>

        <section className="bg-slate-900/70 p-6 rounded-2xl border border-indigo-900/50 space-y-3">
          <h2 className="text-xl font-bold text-white">Not revealed yet</h2>
          <ul className="text-sm text-slate-200 space-y-2 list-disc pl-5 leading-relaxed">
            <li>Individual hero names, roles and health pools</li>
            <li>Passive, tactical, mobility and ultimate abilities</li>
            <li>Weapon names, damage, fire rate and magazine values</li>
            <li>Map layout and objective rules</li>
            <li>Early-access or full release date</li>
          </ul>
          <p className="text-xs text-slate-500 pt-1">
            These pages are updated as announcements land:{' '}
            <Link href="/heroes" className="text-indigo-300 underline hover:text-white">
              roster
            </Link>{' '}
            ·{' '}
            <Link href="/release-date" className="text-indigo-300 underline hover:text-white">
              release tracker
            </Link>
            .
          </p>
        </section>
      </div>

      <section className="bg-slate-900/70 p-6 rounded-2xl border border-indigo-900/50 space-y-3">
        <h2 className="text-xl font-bold text-white">How to follow the launch</h2>
        <p className="text-sm text-slate-200 leading-relaxed">
          New Prime Heroes information comes from SuperGaming and Roblox directly — the Roblox Fall
          Games Preview newsroom post, the developer&apos;s own channels, and Roblox&apos;s platform
          announcements. Anything that cannot be traced back to one of those should be treated as
          speculation until the game is playable.
        </p>
        <p className="text-sm text-slate-200 leading-relaxed">
          Until then, the most useful thing this site can do is track what is confirmed and flag
          what is not — which is exactly what the pages above do.
        </p>
      </section>
    </div>
  );
}
