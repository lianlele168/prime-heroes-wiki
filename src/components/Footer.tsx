import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Rocket } from "lucide-react";
import { navItems, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="source-strip">
        <div className="page-shell flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p><span className="status-dot" />Facts verified against official sources</p>
          <a href={site.officialNewsUrl} target="_blank" rel="noopener noreferrer">Roblox Fall Games Preview <ArrowUpRight className="h-4 w-4" /></a>
        </div>
      </div>
      <div className="page-shell footer-grid">
        <div>
          <div className="flex items-center gap-3"><span className="brand-mark"><Rocket className="h-5 w-5" /></span><strong className="font-display text-xl text-white">Prime Heroes Wiki</strong></div>
          <p className="mt-4 max-w-lg text-sm leading-7 text-[#d9d6ec]">An independent tracker for SuperGaming&apos;s Roblox-exclusive hero shooter: verified announcement facts, the confirmed roster structure, release tracking, and launch coverage that starts only once abilities are playable.</p>
        </div>
        <div>
          <h2>Explore</h2>
          <ul>{navItems.slice(0, 5).map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul>
        </div>
        <div>
          <h2>Site</h2>
          <ul>
            <li><Link href="/news/">News & Sources</Link></li>
            <li><Link href="/about/">About</Link></li>
            <li><Link href="/privacy-policy/">Privacy Policy</Link></li>
            <li><Link href="/terms/">Terms</Link></li>
          </ul>
          <p className="footer-disclaimer"><ShieldCheck className="h-4 w-4 shrink-0" />Not affiliated with SuperGaming or Roblox Corporation. Game art and names belong to their owners.</p>
        </div>
      </div>
      <div className="page-shell footer-bottom">(c) {new Date().getFullYear()} Prime Heroes Wiki. Independent fan reference.</div>
    </footer>
  );
}
