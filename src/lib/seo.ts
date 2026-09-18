import { site } from "@/data/site";

export function absoluteUrl(path = "/") {
  const normalized = path.replace(/^\/+|\/+$/g, "");
  const isFile = /\.[a-z0-9]+$/i.test(normalized);
  const clean = path === "/" ? "/" : `/${normalized}${isFile ? "" : "/"}`;
  return `${site.baseUrl}${clean}`;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: absoluteUrl(),
    description: site.description,
    inLanguage: "en",
    publisher: { "@type": "Organization", name: site.name },
  };
}

export function videoGameSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: site.gameName,
    url: site.officialNewsUrl,
    description:
      "A Roblox-exclusive team hero shooter by SuperGaming set in the Prime universe, entering early access in with six playable heroes.",
    applicationCategory: "Game",
    gamePlatform: ["Roblox"],
    genre: ["Hero Shooter", "First-Person Shooter", "Team-Based"],
    author: { "@type": "Organization", name: site.developer },
    datePublished: site.published,
    inLanguage: "en",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function articleSchema(title: string, description: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: absoluteUrl(slug),
    datePublished: site.published,

    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
  };
}

export function howToSchema(
  name: string,
  description: string,
  path: string,
  steps: { title: string; body: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url: absoluteUrl(path),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.body,
    })),
  };
}

export function rosterSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Prime Heroes Roster Explorer",
    url: absoluteUrl("/heroes/"),
    applicationCategory: "GameApplication",
    operatingSystem: "Any web browser",
    description:
      "An interactive explorer for the confirmed Prime Heroes launch roster structure: six playable heroes with five ability slots each.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}
