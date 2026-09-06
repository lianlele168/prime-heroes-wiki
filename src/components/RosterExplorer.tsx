"use client";

import { useState } from "react";
import { ChevronRight, Lock, Sparkles } from "lucide-react";

const ABILITY_SLOTS = ["Ability 1", "Ability 2", "Ability 3", "Ability 4", "Ability 5"];

const HERO_NOTES = [
  "Slot reserved for the first officially revealed hero.",
  "Slot reserved for the second officially revealed hero.",
  "Slot reserved for the third officially revealed hero.",
  "Slot reserved for the fourth officially revealed hero.",
  "Slot reserved for the fifth officially revealed hero.",
  "Slot reserved for the sixth officially revealed hero.",
];

export default function RosterExplorer() {
  const [active, setActive] = useState(0);

  return (
    <div className="roster-explorer">
      <div className="roster-grid" role="tablist" aria-label="Launch hero slots">
        {HERO_NOTES.map((note, index) => (
          <button
            key={note}
            type="button"
            role="tab"
            aria-selected={active === index}
            className={`roster-slot ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            <span className="roster-slot-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="roster-slot-name">Hero {String(index + 1).padStart(2, "0")}</span>
            <span className="roster-slot-status"><Lock className="h-3.5 w-3.5" /> TBA</span>
          </button>
        ))}
      </div>

      <div className="roster-panel" role="tabpanel">
        <div className="flex items-center justify-between gap-3">
          <p className="eyebrow">Launch slot {String(active + 1).padStart(2, "0")} of 06</p>
          <span className="roster-chip"><Sparkles className="h-3.5 w-3.5" /> 5 ability slots</span>
        </div>
        <h3 className="roster-panel-title">Hero {String(active + 1).padStart(2, "0")}</h3>
        <p className="roster-panel-copy">{HERO_NOTES[active]} Early access launches with six playable heroes, and each hero carries five special abilities. Names, roles, and kits land here the moment SuperGaming reveals them.</p>
        <div className="roster-abilities">
          {ABILITY_SLOTS.map((slot) => (
            <div key={slot} className="roster-ability">
              <ChevronRight className="h-4 w-4" />
              <span>{slot}</span>
              <small>Revealed at Early Access</small>
            </div>
          ))}
        </div>
        <p className="roster-panel-note">Confirmed structure: 6 heroes · 5 abilities each · guns and loot collected in matches.</p>
      </div>
    </div>
  );
}
