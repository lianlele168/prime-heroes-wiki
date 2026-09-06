import type { Metadata } from "next";
import { Nunito_Sans, Chakra_Petch } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: "Prime Heroes Wiki (Roblox) - Release Date, Heroes & Abilities",
    template: "%s | Prime Heroes Wiki",
  },
  description: site.description,
  keywords: [
    "Prime Heroes Roblox",
    "Prime Heroes wiki",
    "Prime Heroes release date",
    "Prime Heroes heroes",
    "Prime Heroes abilities",
    "SuperGaming Prime Heroes",
    "Roblox hero shooter",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: "Prime Heroes Wiki - Roblox Hero Shooter by SuperGaming",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Heroes Wiki - Roblox Hero Shooter by SuperGaming",
    description: site.description,
  },
  icons: { icon: "/favicon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${nunito.variable} ${chakra.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
