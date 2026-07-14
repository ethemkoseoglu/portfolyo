import type { SiteConfig } from "@/lib/types";

/**
 * Site-wide configuration.
 *
 * Contact `email` and `phone` are real. The remaining external links are
 * clearly-marked placeholders — search for `REPLACE:` to fill them in.
 */
export const site: SiteConfig = {
  name: "Ethem Köseoğlu",
  title: "Ethem Köseoğlu | Product Developer & Entrepreneur",
  description:
    "Ethem Köseoğlu'nun ERP, B2B platformları, yapay zekâ destekli ürünler ve teknoloji girişimlerinden oluşan ürün geliştirme portfolyosu.",
  keywords: [
    "Ethem Köseoğlu",
    "Product Developer",
    "Software Developer",
    "ERP Developer",
    "B2B Platform",
    "Next.js Developer",
    "Girişimci",
    "Endüstri Mühendisliği",
    "Dijital Dönüşüm",
    "Ürün Geliştirme",
  ],

  // REPLACE: set the production domain once deployed (used for canonical URL,
  // Open Graph, sitemap and JSON-LD).
  url: "https://ethemkoseoglu.com",

  email: "ethem.koseoglu13@gmail.com",
  phone: "+90 541 964 65 58",
  location: "Maltepe, İstanbul, Türkiye",

  linkedin: "https://www.linkedin.com/in/ethemkoseoglu",
  github: "https://github.com/ethemkoseoglu",
  cvUrl: "/cv.pdf",
  cvTr: "/cv-tr.pdf",
  cvEn: "/cv-en.pdf",

  nav: [
    { label: "Ana Sayfa", href: "/#ana-sayfa" },
    { label: "Hakkımda", href: "/#hakkimda" },
    { label: "Projeler", href: "/#projeler" },
    { label: "Deneyim", href: "/#deneyim" },
    { label: "Yetkinlikler", href: "/#yetkinlikler" },
    { label: "İletişim", href: "/#iletisim" },
  ],
};

/** Digits-only phone for `tel:` and WhatsApp links. */
export const phoneDigits = site.phone.replace(/[^\d]/g, "");
