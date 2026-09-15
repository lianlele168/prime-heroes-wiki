import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
  title: "Prime Heroes Ultimate Beginner Strategy Guide & Hero Synergies",
  description: "Master the confirmed launch heroes, Crown Site capture mechanics, ability combos, and gunplay in SuperGaming's Roblox hero shooter Prime Heroes.",
};

export default function GuidesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the core objective in Prime Heroes matches?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In Prime Heroes, squads of heroes battle to capture and hold strategic Crown Sites while accumulating weapon loot and tactical power drops to secure match victory.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many heroes are playable at launch in Prime Heroes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prime Heroes launches with six core heroes representing Duelist, Tank, Controller, Initiator, and Sentinel archetypes, expanding up to 16 through future seasonal updates.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do hero abilities interact with gunplay in Prime Heroes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Each hero has five special abilities (Passive, Tactical, Mobility, and Ultimate) that complement primary weapons like the Vortex-AR and Apex Railgun to execute synchronized team breaches.',
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
          PRIME HEROES <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">STRATEGY GUIDE</span>
        </h1>
        <p className="text-sm text-indigo-300 max-w-2xl mx-auto">
          Comprehensive tactical handbook: Master the confirmed launch heroes, ability combo rotations, Crown Site capture dynamics, and weapon tier synergies in SuperGaming's hero shooter.
        </p>
      </div>

      <AuthorCard />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="rounded-2xl overflow-hidden border border-indigo-900/60 bg-indigo-950/40 p-4">
          <Image
            src="/images/prime-header.webp"
            alt="Prime Heroes Official Key Artwork"
            width={1014}
            height={640}
            className="rounded-xl object-cover w-full h-48 border border-indigo-800/40"
            priority
          />
          <p className="text-xs text-indigo-300 mt-2 text-center font-medium">
            Figure 1: Official Prime Heroes Showcase by SuperGaming.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-indigo-900/60 bg-indigo-950/40 p-4">
          <Image
            src="/images/prime-gameplay.webp"
            alt="Prime Heroes Combat Arena Action"
            width={768}
            height={432}
            className="rounded-xl object-cover w-full h-48 border border-indigo-800/40"
          />
          <p className="text-xs text-indigo-300 mt-2 text-center font-medium">
            Figure 2: Combat Arena Action with ability rotations and tactical gunplay.
          </p>
        </div>
      </div>

      <div className="space-y-6 text-sm text-slate-200 leading-relaxed">
        <section className="bg-slate-900/70 p-6 rounded-2xl border border-indigo-900/50 space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs">1</span>
            Hero Archetypes and Squad Composition Balance
          </h2>
          <p>
            Unlike traditional run-and-gun shooters on Roblox, Prime Heroes is anchored around precise role composition. Every team requires a frontline anchor such as Sir Jadhav to soak incoming burst damage and hold Crown Site zones with his energy dome shield. Complementing the anchor with a high-mobility duelist like Mira allows your team to flank enemy snipers while your initiator paints targets with recon sonar darts.
          </p>
          <p>
            Teams that field all duelists will routinely succumb to coordinated ability locks from controller champions like Aria, whose null matrix field completely cancels mobility abilities in crucial choke points.
          </p>
        </section>

        <section className="bg-slate-900/70 p-6 rounded-2xl border border-indigo-900/50 space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs">2</span>
            Mastering Crown Site Capture Dynamics
          </h2>
          <p>
            Crown Sites function as the primary scoring hubs within the match. When a site becomes active, contested progress only accumulates when your squad has numerical superiority within the capture ring. Setting up area-denial abilities before the timer unlocks guarantees early percentage leads.
          </p>
          <p>
            Position your sniper with the Apex Railgun on elevated catwalks overlooking the perimeter, forcing attackers to burn their defensive cooldowns before they can even touch the capture zone.
          </p>
        </section>

        <section className="bg-slate-900/70 p-6 rounded-2xl border border-indigo-900/50 space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs">3</span>
            Weapon Tier Loadouts & Ammo Economy
          </h2>
          <p>
            During match progression, neutral loot caches spawn weapon upgrades ranging from the rapid-firing Stinger Neutron SMG to the devastating Breacher Heavy Shotgun. Prioritize pairing fast-firing weapons with duelists who benefit from hit-streak passive buffs, while tanks should favor high-capacity LMGs to lay down suppressive fire through defensive shields.
          </p>
        </section>
      </div>
    </div>
  );
}
