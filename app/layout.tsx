import type { Metadata } from "next";
import { IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig, absoluteUrl } from "@/lib/site";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const ogImage = {
  url: absoluteUrl(siteConfig.ogImage),
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — logo`,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} — Diluanți, solvenți și antigel`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Chemical System Corporation — producător de diluanți, solvenți și antigel din 1998. Formulare custom, analiză la sediul clientului. Margina, Timiș.",
  alternates: {
    canonical: absoluteUrl("/ro/"),
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Diluanți, solvenți și antigel`,
    description:
      "Producător românesc de diluanți și antigel. Soluții individualizate din 1998.",
    url: absoluteUrl("/ro/"),
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Diluanți, solvenți și antigel`,
    description:
      "Producător românesc de diluanți și antigel. Soluții individualizate din 1998.",
    images: [ogImage.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${ibmPlexSans.variable} ${sourceSerif.variable} flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
