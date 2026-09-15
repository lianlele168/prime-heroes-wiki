export type ContentSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: { title: string; body: string }[];
  callout?: string;
};

export type GuidePage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  summary: string;
  sections: ContentSection[];
  faqs?: { question: string; answer: string }[];
};

export const homeFaqs = [
  {
    question: "What is Prime Heroes?",
    answer:
      "Prime Heroes is a Roblox-exclusive team hero shooter by SuperGaming, the studio behind Indus Battle Royale. It is set in SuperGaming's Prime universe and was revealed in Roblox's official Fall Games Preview in September 2026.",
  },
  {
    question: "When does Prime Heroes launch?",
    answer:
      "Early access is slated for October 2026 according to Roblox's Fall Games Preview coverage. The exact day has not been announced yet.",
  },
  {
    question: "How many heroes will Prime Heroes launch with?",
    answer:
      "Coverage of the announcement states that early access begins with six playable heroes, and each hero has five special abilities.",
  },
  {
    question: "Is this site affiliated with SuperGaming or Roblox?",
    answer:
      "No. Prime Heroes Wiki is an independent, unofficial reference that tracks publicly confirmed facts and links to official sources.",
  },
];

const generalPages: GuidePage[] = [
  {
    slug: "what-is-prime-heroes",
    title: "What Is Prime Heroes?",
    eyebrow: "Roblox-exclusive hero shooter",
    description:
      "Prime Heroes is a team-based hero shooter on Roblox from SuperGaming. Learn the confirmed gameplay structure: hero abilities, loot, and the Prime universe setting.",
    summary:
      "Prime Heroes is a first-person, team-based hero shooter built for Roblox by SuperGaming. Every hero brings five special abilities, and matches layer gun and loot collection on top of ability combat.",
    sections: [
      {
        heading: "Confirmed facts",
        bullets: [
          "Developer: SuperGaming, the studio behind Indus Battle Royale, MaskGun, and Prime Rush.",
          "Platform: Roblox exclusive.",
          "Genre: team-based first-person hero shooter.",
          "Setting: SuperGaming's Prime universe, the same IP world as Indus.",
          "Launch structure: early access begins with six playable heroes.",
          "Ability depth: each hero has five special abilities.",
          "Match flow: players battle each other while collecting guns and loot during matches.",
        ],
      },
      {
        heading: "What a hero shooter means on Roblox",
        paragraphs: [
          "In a hero shooter, your character choice defines your kit. Instead of one generic soldier, you pick a hero whose five abilities shape how you move, defend, and fight, then coordinate those kits with your team.",
          "Prime Heroes adds a loot layer on top: guns and items collected during a match change your firepower, so reading the map for pickups matters as much as aim.",
        ],
        callout:
          "Strategy pages on this site are added only after launch, when abilities and modes are playable and verifiable. Until then, everything here is announcement-stage fact.",
      },
      {
        heading: "Why this wiki exists now",
        paragraphs: [
          "Pre-launch wikis tend to fill with invented hero names and fake tier lists. This tracker takes the opposite approach: every claim links to official or press coverage, hero pages appear when the roster is actually revealed, and the roster explorer tracks the confirmed structure instead of rumors.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Prime Heroes free to play?",
        answer:
          "Roblox experiences are free to join, and no purchase has been announced for Prime Heroes. Monetization details have not been confirmed.",
      },
      {
        question: "Is Prime Heroes related to Indus Battle Royale?",
        answer:
          "They share SuperGaming's Prime universe setting, but Prime Heroes is a separate Roblox-exclusive hero shooter, not a port of Indus.",
      },
      {
        question: "Is Prime Heroes the same as EA FC Prime Hero cards or Heroes Battlegrounds?",
        answer:
          "No. EA FC's Prime Hero cards are a football game promotion and Heroes Battlegrounds is a different Roblox game. SuperGaming's Prime Heroes is unrelated to both.",
      },
    ],
  },
  {
    slug: "release-date",
    title: "Prime Heroes Release Date",
    eyebrow: "Early access window tracker",
    description:
      "Track the Prime Heroes Roblox release: October 2026 early access window, the September 4 announcement event, and every officially confirmed date so far.",
    summary:
      "Prime Heroes enters early access in October 2026 per Roblox's official Fall Games Preview. No exact launch day has been announced yet. This page tracks every confirmed date and updates the moment a day is locked.",
    sections: [
      {
        heading: "Date timeline",
        steps: [
          {
            title: "September 4, 2026 - announcement",
            body: "Roblox previewed its fall lineup, revealing ten upcoming games including Prime Heroes. Coverage by IGN India and others confirmed SuperGaming's hero shooter for the platform.",
          },
          {
            title: "September 2026 - Fall Games Preview live",
            body: "Roblox's newsroom Fall Games Preview lists Prime Heroes among the season's upcoming exclusive titles.",
          },
          {
            title: "October 2026 - early access window",
            body: "Coverage of the announcement states Prime Heroes enters early access in October with six playable heroes. An exact day has not been published.",
          },
        ],
      },
      {
        heading: "What is not confirmed yet",
        bullets: [
          "The exact early access launch day inside the October window.",
          "Whether early access requires a purchase, pass, or is open to everyone.",
          "Post-launch hero cadence beyond the six launch heroes.",
          "Ranked, casual, or specific mode names.",
        ],
      },
      {
        heading: "How we track it",
        paragraphs: [
          "This page is checked against Roblox's newsroom and SuperGaming's public channels. When an exact date drops, the timeline above gets the update, the date strip on the home page changes, and the news page logs the source.",
        ],
        callout: "Beware of fan-made countdowns and fake beta links. No exact launch day exists yet, and beta invitations are not distributed through random links.",
      },
    ],
    faqs: [
      {
        question: "Is there an exact Prime Heroes release date?",
        answer:
          "No. Only the October 2026 early access window is confirmed. Announcements will update this page within a day of going public.",
      },
      {
        question: "Can I play Prime Heroes right now?",
        answer:
          "No playable public build has been announced. Preview coverage exists, but early access has not opened.",
      },
      {
        question: "Will there be a beta?",
        answer:
          "No public beta has been announced. Any sign-up pages claiming otherwise are not confirmed by SuperGaming or Roblox.",
      },
    ],
  },
  {
    slug: "heroes",
    title: "Prime Heroes Roster",
    eyebrow: "Six heroes, five abilities each",
    description:
      "The confirmed Prime Heroes launch roster structure: six playable heroes at early access, five special abilities per hero. Explore the roster slots and what is officially known.",
    summary:
      "Early access launches with six playable heroes, and each hero carries five special abilities. Individual hero names and kits have not been revealed yet, so this explorer tracks the confirmed slots instead of spreading rumors.",
    sections: [
      {
        heading: "How to read the roster",
        bullets: [
          "Six launch slots are confirmed by announcement coverage.",
          "Five ability slots per hero are confirmed by press coverage of the reveal.",
          "Hero names, roles, and ability details appear here only after they are officially revealed.",
        ],
      },
      {
        heading: "What we expect hero pages to cover at launch",
        paragraphs: [
          "Once abilities are playable, each hero page will document the five abilities with real values: cooldowns, damage or support numbers, mobility tools, and how the kit combos with collected guns and loot.",
          "A tier list will only be added after enough match data exists to rank heroes honestly. Day-one tier lists are guesses, and this site does not publish guesses as facts.",
        ],
      },
    ],
    faqs: [
      {
        question: "Have any hero names been revealed?",
        answer:
          "Not yet as of September 6, 2026. The confirmed facts are six launch heroes with five abilities each.",
      },
      {
        question: "When will the roster page update?",
        answer:
          "As soon as SuperGaming reveals heroes officially or early access opens and the kits are playable and verifiable.",
      },
    ],
  },
  {
    slug: "prime-universe",
    title: "The Prime Universe",
    eyebrow: "SuperGaming's IP world",
    description:
      "Prime Heroes is set in SuperGaming's Prime universe, the same IP world as Indus Battle Royale. Here is what that connection means and what carries over.",
    summary:
      "SuperGaming built its Prime universe across Indus Battle Royale and Prime Rush before bringing it to Roblox with Prime Heroes. The shared setting gives the hero shooter an existing world of factions, technology, and lore to draw from.",
    sections: [
      {
        heading: "The studio behind the world",
        bullets: [
          "SuperGaming is an Indian game studio known for Indus Battle Royale, MaskGun, and Prime Rush.",
          "Indus is the studio's flagship battle royale and the origin of the Prime universe setting.",
          "Prime Heroes extends that universe to Roblox as an exclusive title.",
        ],
      },
      {
        heading: "Why a shared universe matters for a hero shooter",
        paragraphs: [
          "Hero shooters live and die on character identity. A studio that already owns a sci-fi world with established visual language can design heroes that feel connected instead of generic, and can keep expanding the roster without inventing a new lore system every patch.",
          "For players, the practical effect is that Prime Heroes should feel like a persistent world that grows, with new heroes and story beats arriving through updates.",
        ],
        callout:
          "Lore speculation is outside this site's scope. Lore pages will only cover connections that official materials state outright.",
      },
    ],
    faqs: [
      {
        question: "Do I need to know Indus lore to play Prime Heroes?",
        answer:
          "No. Hero shooters teach their own kits in-game. Shared-universe background adds flavor, not required reading.",
      },
      {
        question: "Will Indus content appear in Prime Heroes?",
        answer:
          "Nothing specific has been announced beyond the shared Prime universe setting. Confirmed crossovers will be logged on the news page.",
      },
    ],
  },
  {
    slug: "news",
    title: "Prime Heroes News and Sources",
    eyebrow: "Verification log",
    description:
      "Every Prime Heroes announcement this wiki tracks, with sources: the September 4 reveal, Roblox's Fall Games Preview, and upcoming early access updates.",
    summary:
      "This log lists what is confirmed, when it was confirmed, and where it was published. Rumors stay off this site until an official source backs them.",
    sections: [
      {
        heading: "Confirmed so far",
        steps: [
          {
            title: "September 4, 2026 - Prime Heroes revealed",
            body: "Roblox's Fall Games Preview event revealed ten upcoming games including Prime Heroes, a team hero shooter from SuperGaming. Sources: Roblox Newsroom, IGN India.",
          },
          {
            title: "Early September 2026 - launch structure reported",
            body: "Press coverage confirmed early access plans: October 2026 window, six playable heroes at the start, five special abilities per hero, and gun and loot collection during matches. Source: BloxInformer, Digital Reviews, Sportskeeda coverage.",
          },
        ],
      },
      {
        heading: "Watching for next",
        bullets: [
          "An exact early access date inside the October window.",
          "Official hero reveals and ability showcases.",
          "Mode names and match structure details.",
          "Monetization and early access access requirements.",
        ],
      },
      {
        heading: "Source boundaries",
        paragraphs: [
          "This is an unofficial tracker. It links to official announcements and reputable press coverage but does not host game assets or claim ownership of SuperGaming or Roblox content. Unverified leaks are not published here.",
        ],
      },
    ],
    faqs: [
      {
        question: "How fast does this log update?",
        answer:
          "Confirmed announcements are added within a day of publication, with the source linked.",
      },
      {
        question: "Do you cover leaks?",
        answer:
          "No. Only official announcements and reputable press coverage appear in this log.",
      },
    ],
  },
  {
    slug: "about",
    title: "About Prime Heroes Wiki",
    eyebrow: "Independent tracker",
    description:
      "How Prime Heroes Wiki verifies facts, separates announcements from speculation, and plans launch coverage for SuperGaming's Roblox hero shooter.",
    summary:
      "Prime Heroes Wiki is built for the pre-launch window: verified announcement facts now, hero guides and tools the moment the game is playable.",
    sections: [
      {
        heading: "Editorial approach",
        paragraphs: [
          "Every page separates confirmed facts from expectations. The roster explorer tracks the confirmed launch structure rather than inventing hero names, and strategy content starts only when abilities can be tested in-game.",
        ],
      },
      {
        heading: "Planned launch coverage",
        bullets: [
          "Per-hero ability pages with tested values and cooldowns.",
          "A match-flow beginner guide covering loot and gun collection.",
          "Mode explainers as modes are announced or discovered.",
          "A tier list only after enough real match data exists.",
        ],
      },
      {
        heading: "Ownership",
        paragraphs: [
          "Prime Heroes, the Prime universe, and related assets belong to SuperGaming. Roblox is a trademark of Roblox Corporation. This site is not affiliated with or endorsed by either.",
        ],
      },
    ],
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    eyebrow: "Site policy",
    description:
      "Prime Heroes Wiki privacy policy: data stored in your browser, hosting logs, third-party links, and how analytics or advertising changes will be handled.",
    summary:
      "This site keeps gameplay-tracking data in your browser's localStorage and submits nothing to a server. Standard hosting logs and third-party link policies apply.",
    sections: [
      {
        heading: "Local data",
        paragraphs: [
          "Interactive tools on this site store progress in localStorage on your device. That data is not submitted to this site's server.",
        ],
      },
      {
        heading: "Hosting and logs",
        paragraphs: [
          "The hosting provider may process basic request data such as IP address, browser type, requested URL, and timestamps for security and delivery.",
        ],
      },
      {
        heading: "Third-party content",
        paragraphs: [
          "Links to Roblox, SuperGaming, and press articles are third-party services with their own privacy policies.",
        ],
      },
      {
        heading: "Analytics and ads",
        paragraphs: [
          "We comply with COPPA child privacy standards. No personal information is collected from players under 13. Direct questions can be sent to lianlele168@gmail.com.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Use",
    eyebrow: "Site policy",
    description:
      "Terms of use for Prime Heroes Wiki: unofficial fan reference status, no warranties, liability limits, and intellectual property notes.",
    summary:
      "Prime Heroes Wiki is an unofficial fan reference provided as-is, with no affiliation to SuperGaming or Roblox Corporation.",
    sections: [
      {
        heading: "Unofficial reference",
        paragraphs: [
          "This site is an independent fan project. It is not affiliated with, endorsed by, or sponsored by SuperGaming or Roblox Corporation.",
        ],
      },
      {
        heading: "Accuracy",
        paragraphs: [
          "Game details can change between announcement and launch. Content is provided as-is without warranties; use your own judgment before making decisions based on it.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "Prime Heroes, the Prime universe, and related assets belong to SuperGaming. Roblox and related marks belong to Roblox Corporation. All third-party trademarks belong to their owners.",
        ],
      },
    ],
  },
];

export const guidePages = generalPages;

export function getGuidePage(slug: string) {
  return guidePages.find((page) => page.slug === slug);
}
