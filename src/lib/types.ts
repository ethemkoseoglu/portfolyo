/**
 * Shared, strongly-typed content models.
 * All site content flows from the typed data files in `src/data` and
 * `src/config/site.ts`; UI components receive this data as props.
 */

/** A single portfolio project. */
export interface Project {
  /** URL-safe identifier used for `/projects/[slug]`. */
  slug: string;
  /** Display name. */
  name: string;
  /** When true, rendered as the large featured showcase (Perdeno). */
  featured: boolean;
  /** Ordering on the home page (ascending). */
  order: number;
  /** Role label (e.g. "Co-CEO · Product Development & Growth"). */
  role: string;
  /** Short uppercase status badge (e.g. "Aktif Geliştirme"). */
  status: string;
  /** One-line summary shown on the home page. */
  shortDescription: string;
  /** Longer descriptive paragraph. */
  detail: string;
  /** Personal contribution paragraph (optional). */
  contribution?: string;
  /** Focus areas — kept in English per spec (rendered as tags). */
  focus: string[];
  /** Technologies — kept as written. */
  tech: string[];
  /** Optional achievement note (e.g. BiGG+ acceptance for Mışıl). */
  achievementNote?: string;
  /** Optional brand logo shown as a light badge on the detail page. */
  logo?: { src: string; alt: string };
  /** Optional live site URL. */
  liveUrl?: string;
  /** Detail page: identified problem (Turkish). */
  problem: string;
  /** Detail page: developed solution (Turkish). */
  solution: string;
  /** Detail page: features / modules list (Turkish). */
  features: string[];
  /** Detail page: lessons learned (Turkish). */
  lessons: string[];
  /**
   * Optional verified results. Rendered ONLY when present — never invented.
   * Leave undefined to hide the results section entirely.
   */
  results?: { label: string; value: string }[];
  /** Visual gallery placeholder assets. */
  images: { src: string; alt: string }[];
}

/** A professional experience / internship. */
export interface Experience {
  /** Company / organization name. */
  company: string;
  /** Role title (rendered as an italic meta label). */
  role: string;
  /** Optional time period (e.g. "2022 – Günümüz"). */
  period?: string;
  /** Description paragraph. */
  description: string;
  /** Bullet highlights. */
  highlights: string[];
}

/** An education record. */
export interface EducationItem {
  /** Degree / program. */
  degree: string;
  /** Institution name. */
  school: string;
  /** Time period. */
  period: string;
}

/** A professional certification. */
export interface Certification {
  /** Certification title. */
  title: string;
  /** Issuing organization. */
  issuer: string;
}

/** A spoken language and proficiency. */
export interface LanguageItem {
  /** Language name (Turkish). */
  name: string;
  /** Proficiency label (Turkish). */
  level: string;
}

/** A group of skills under a category heading. */
export interface SkillCategory {
  /** Category title (e.g. "Yazılım Geliştirme"). */
  title: string;
  /** Skill labels rendered as hairline tags (no proficiency values). */
  skills: string[];
}

/** A program / accomplishment block. */
export interface Achievement {
  /** Program name (e.g. "BiGG+ Boğaziçi"). */
  program: string;
  /** Large editorial title. */
  title: string;
  /** Description paragraph. */
  description: string;
  /** Small uppercase gold-accent labels. */
  tags: string[];
}

/** A step in the product-development process. */
export interface ProcessStep {
  /** Step number label (e.g. "01"). */
  number: string;
  /** Step title. */
  title: string;
  /** Step description. */
  description: string;
}

/** A named navigation link. */
export interface NavItem {
  label: string;
  href: string;
}

/** Site-wide configuration and placeholders. */
export interface SiteConfig {
  name: string;
  /** Positioning title used in SEO. */
  title: string;
  /** SEO meta description. */
  description: string;
  /** SEO keywords. */
  keywords: string[];
  /** Canonical site URL (placeholder). */
  url: string;
  /** Contact details. */
  email: string;
  phone: string;
  /** Base location (city, country). */
  location: string;
  /** Social / external links (placeholders where unknown). */
  linkedin: string;
  github: string;
  cvUrl: string;
  /** Turkish CV (PDF). */
  cvTr: string;
  /** English CV (PDF). */
  cvEn: string;
  /** Primary navigation. */
  nav: NavItem[];
}
