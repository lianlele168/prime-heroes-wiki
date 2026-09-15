export const site = {
  name: "Prime Heroes Wiki",
  gameName: "Prime Heroes",
  developer: "SuperGaming",
  platform: "Roblox",
  baseUrl: "https://primeheroes.robloxwikihub.com",
  officialNewsUrl: "https://about.roblox.com/newsroom/2026/09/roblox-fall-games-preview",
  announcementUrl:
    "https://in.ign.com/roblox/271017/roblox-reveals-10-upcoming-games-coming-to-the-platform-including-prime-heroes-nemesis-and-more",
  trackingUrl: "https://bloxinformer.com/upcoming-roblox-games/prime-heroes/",
  published: "2026-09-04",
  lastChecked: "2026-09-06",
  earlyAccessWindow: "October 2026",
  description:
    "An unofficial Prime Heroes tracker for the Roblox-exclusive hero shooter by SuperGaming: verified release facts, the confirmed six-hero launch structure, Prime universe context, and announcement coverage.",
} as const;

export const navItems = [
  { href: "/what-is-prime-heroes/", label: "What Is It" },
  { href: "/release-date/", label: "Release Date" },
  { href: "/heroes/", label: "Heroes" },
  { href: "/prime-universe/", label: "Prime Universe" },
  { href: "/news/", label: "News" },
] as const;

export const routes = [
  { path: "/", priority: 1, changeFrequency: "daily" },
  { path: "/what-is-prime-heroes/", priority: 0.95, changeFrequency: "weekly" },
  { path: "/release-date/", priority: 0.95, changeFrequency: "daily" },
  { path: "/heroes/", priority: 0.92, changeFrequency: "daily" },
  { path: "/prime-universe/", priority: 0.85, changeFrequency: "weekly" },
  { path: "/news/", priority: 0.8, changeFrequency: "daily" },
  { path: "/about/", priority: 0.35, changeFrequency: "monthly" },
  ] as const;
