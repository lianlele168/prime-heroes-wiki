"use client";
import React, { useState } from "react";
import Image from "next/image";
import AuthorCard from "@/components/AuthorCard";
import { HEROES_DATA, WEAPONS_GEAR_DATA } from "@/data/wikiData";
import { Calculator, Shield, Swords, Zap, Crosshair } from "lucide-react";

export default function CalculatorPage() {
  const [selectedHeroIdx, setSelectedHeroIdx] = useState(0);
  const [selectedWeaponIdx, setSelectedWeaponIdx] = useState(0);
  const [targetDistance, setTargetDistance] = useState(25); // studs

  const hero = HEROES_DATA[selectedHeroIdx] || HEROES_DATA[0];
  const weapon = WEAPONS_GEAR_DATA[selectedWeaponIdx] || WEAPONS_GEAR_DATA[0];

  // Calculate DPS
  const dps = Math.round((weapon.damage * weapon.fireRate) / 60);
  const effectiveRangeMult = targetDistance > 30 ? 0.75 : 1.0;
  const effectiveDps = Math.round(dps * effectiveRangeMult);
  const timeToKill = (500 / Math.max(1, effectiveDps)).toFixed(2);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is DPS calculated in Prime Heroes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DPS is calculated as (Base Weapon Damage * Rounds Per Minute) / 60, modified by effective distance falloff and hero passive bonuses.",
        },
      },
      {
        "@type": "Question",
        name: "Which weapon has the highest burst damage in Prime Heroes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Apex Railgun Sniper possesses the highest single-shot burst at 145 damage per shot, capable of eliminating low-health duelists in under two rounds.",
        },
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Prime Heroes Squad DPS & TTK Calculator",
    applicationCategory: "GameApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-8 px-4 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      <div className="border-b border-indigo-900/60 pb-5 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 text-xs font-semibold mb-3">
          <Calculator className="w-3.5 h-3.5" /> Interactive Combat Theorycrafter
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          Squad DPS & Time-To-Kill (TTK) Calculator
        </h1>
        <p className="text-slate-300 text-sm mt-2 max-w-2xl">
          Simulate weapon DPS outputs, distance falloff curves, and target TTK across all confirmed Prime Heroes and armory weapons.
        </p>
      </div>

      <AuthorCard />

      <div className="grid md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-5">
          <div className="bg-slate-900/90 border border-indigo-900/60 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-indigo-400" /> 1. Select Active Hero
            </h2>
            <select
              value={selectedHeroIdx}
              onChange={(e) => setSelectedHeroIdx(Number(e.target.value))}
              className="w-full bg-slate-950 border border-indigo-800/60 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500"
            >
              {HEROES_DATA.map((h, idx) => (
                <option key={h.id} value={idx}>
                  {h.name} ({h.role} - {h.health} HP)
                </option>
              ))}
            </select>
            <div className="text-xs text-slate-400 space-y-1">
              <div>Passive: <strong className="text-indigo-300">{hero.passiveAbility}</strong></div>
              <div>Ultimate: <strong className="text-purple-300">{hero.ultimateAbility}</strong></div>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-indigo-900/60 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Crosshair className="w-4 h-4 text-pink-400" /> 2. Equipped Armory Weapon
            </h2>
            <select
              value={selectedWeaponIdx}
              onChange={(e) => setSelectedWeaponIdx(Number(e.target.value))}
              className="w-full bg-slate-950 border border-indigo-800/60 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500"
            >
              {WEAPONS_GEAR_DATA.map((w, idx) => (
                <option key={w.id} value={idx}>
                  {w.name} ({w.category} - {w.damage} Dmg)
                </option>
              ))}
            </select>
            <div className="text-xs text-slate-400 flex justify-between">
              <span>Fire Rate: <strong className="text-white">{weapon.fireRate} RPM</strong></span>
              <span>Mag: <strong className="text-white">{weapon.magazineSize} rounds</strong></span>
              <span>Range: <strong className="text-indigo-300">{weapon.effectiveRange}</strong></span>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-indigo-900/60 rounded-2xl p-6 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="font-bold text-white">3. Engagement Distance</span>
              <span className="font-mono text-indigo-400 font-bold">{targetDistance} studs</span>
            </div>
            <input
              type="range"
              min={5}
              max={80}
              value={targetDistance}
              onChange={(e) => setTargetDistance(Number(e.target.value))}
              className="w-full accent-indigo-500 bg-slate-950 cursor-pointer"
            />
          </div>
        </div>

        {/* Results & Visuals */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-950/90 to-purple-950/60 border border-indigo-500/40 rounded-2xl p-6 space-y-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-indigo-300">
              Combat Performance Metrics
            </h2>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-black text-white font-mono">{effectiveDps}</span>
              <span className="text-sm font-sans font-medium text-slate-400">Effective DPS</span>
            </div>
            <div className="pt-3 border-t border-indigo-900/60 space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Theoretical TTK (vs 500 HP Standard Target):</span>
                <span className="font-bold text-pink-300 font-mono">{timeToKill}s</span>
              </div>
              <div className="flex justify-between">
                <span>Distance Damage Falloff:</span>
                <span className="font-bold text-indigo-300">{effectiveRangeMult * 100}% Effectiveness</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-indigo-900/60 bg-indigo-950/30 p-2">
              <Image
                src="/images/prime-header.webp"
                alt="Prime Heroes Official Key Art"
                width={1014}
                height={640}
                className="rounded-lg object-cover w-full h-36"
              />
              <p className="text-[11px] text-indigo-300 text-center mt-1.5 font-medium">Hero Roster Overview</p>
            </div>
            <div className="rounded-xl overflow-hidden border border-indigo-900/60 bg-indigo-950/30 p-2">
              <Image
                src="/images/prime-gameplay.webp"
                alt="Prime Heroes Combat Arena"
                width={768}
                height={432}
                className="rounded-lg object-cover w-full h-36"
              />
              <p className="text-[11px] text-indigo-300 text-center mt-1.5 font-medium">Crown Site Arena</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
