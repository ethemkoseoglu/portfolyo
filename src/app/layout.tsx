import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { LanguageProvider } from "@/i18n/LanguageProvider";

// Include `latin-ext` so Turkish glyphs (ı, İ, ş, ğ, ü, ö, ç, â) render.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s | Ethem Köseoğlu",
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name }],
  creator: site.name,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD — verifiable facts only (name, job title, site URL). No employer,
// award or education claims.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: site.name,
      jobTitle: "Product Developer & Entrepreneur",
      url: site.url,
      email: `mailto:${site.email}`,
    },
    {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
    >
      <body className="bg-background text-foreground font-body min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GrainOverlay />
        <LanguageProvider>
          <Navbar />
          <main id="ana-sayfa">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
