import React from "react";
import Link from "next/link";
import Image from "next/image";
import AuthorCard from "@/components/AuthorCard";
import { Calculator, Shield, Swords, Calendar } from "lucide-react";

export default function CalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is there a Prime Heroes DPS or TTK calculator yet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Prime Heroes has not opened to players, so no weapon damage, fire rate, magazine size or hero health values have been published. A DPS or time-to-kill calculator needs those numbers, and any site offering one before launch is using invented figures rather than measured ones.",
        },
      },
      {
        "@type": "Question",
        name: "What has actually been confirmed about Prime Heroes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SuperGaming is developing Prime Heroes as a Roblox-exclusive hero shooter, and it was included in the Roblox Fall Games Preview. Early access is planned to launch with six playable heroes, each carrying five special abilities. Individual hero names, ability kits, weapon statistics and release dates have not been revealed.",
        },
      },
      {
        "@type": "Question",
        name: "When will real combat numbers be available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Once early access opens and the hero roster and weapon stats are publicly documented. Until then this page stays empty on purpose rather than filling the gap with estimates — see the release tracker for the current launch status.",
        },
      },
    ],
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-8 px-4 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="border-b border-indigo-900/60 pb-5 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-700/50 text-amber-300 text-xs font-semibold mb-3">
          <Calendar className="w-3.5 h-3.5" /> Pre-launch — no numbers published yet
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          Prime Heroes DPS &amp; TTK Calculator
        </h1>
        <p className="text-slate-300 text-sm mt-2 max-w-2xl">
          There is no Prime Heroes combat calculator to run yet. Prime Heroes has not opened to
          players, so weapon damage, fire rates, magazine sizes and hero health values do not exist
          in any public source — and we do not invent them.
        </p>
      </div>

      <AuthorCard />

      <div className="bg-slate-900/90 border border-amber-900/50 rounded-2xl p-6 space-y-3">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <Calculator className="w-4 h-4 text-amber-400" /> Why this page has no calculator
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          A DPS or time-to-kill figure is only meaningful if the inputs are real. Right now none of
          them are: no hero health pools, no passive or ultimate descriptions, no weapon damage
          values, no fire rates. Publishing a calculator anyway would mean filling every field with
          a guess and presenting it as a result. We would rather ship an empty page than a confident
          lie.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          If you have seen a Prime Heroes damage calculator, tier list or ability database elsewhere,
          those numbers predate the game being playable. There is nothing to verify them against.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900/90 border border-indigo-900/60 rounded-2xl p-6 space-y-3">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Shield className="w-4 h-4 text-indigo-400" /> What has been confirmed
          </h2>
          <ul className="text-sm text-slate-300 space-y-2 list-disc pl-5">
            <li>Developed by SuperGaming for Roblox</li>
            <li>Featured in the Roblox Fall Games Preview</li>
            <li>Early access planned with six playable heroes</li>
            <li>Each hero is planned to carry five special abilities</li>
          </ul>
          <p className="text-xs text-slate-500 pt-1">
            Sourced from SuperGaming and Roblox announcement coverage. See the{" "}
            <Link href="/news" className="text-indigo-300 underline hover:text-white">
              news tracker
            </Link>{" "}
            for the underlying announcements.
          </p>
        </div>

        <div className="bg-slate-900/90 border border-indigo-900/60 rounded-2xl p-6 space-y-3">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Swords className="w-4 h-4 text-pink-400" /> What has not been revealed
          </h2>
          <ul className="text-sm text-slate-300 space-y-2 list-disc pl-5">
            <li>Individual hero names, roles and health pools</li>
            <li>Passive and ultimate ability descriptions</li>
            <li>Weapon names, damage, fire rate and magazine values</li>
            <li>Distance falloff and any DPS or TTK figures</li>
            <li>A public early-access or release date</li>
          </ul>
          <p className="text-xs text-slate-500 pt-1">
            Check the{" "}
            <Link href="/heroes" className="text-indigo-300 underline hover:text-white">
              roster page
            </Link>{" "}
            and the{" "}
            <Link href="/release-date" className="text-indigo-300 underline hover:text-white">
              release tracker
            </Link>{" "}
            — both are updated when something is actually announced.
          </p>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden border border-indigo-900/60 bg-indigo-950/30 p-2">
        <Image
          src="/images/prime-header.webp"
          alt="Prime Heroes official key art"
          width={1014}
          height={640}
          className="rounded-lg object-cover w-full h-48"
        />
        <p className="text-[11px] text-indigo-300 text-center mt-1.5 font-medium">
          Official announcement art — no gameplay figures have been published
        </p>
      </div>
    </div>
  );
}
