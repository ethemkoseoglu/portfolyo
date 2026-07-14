"use client";

import type { ComponentType } from "react";
import { Mail, Phone } from "lucide-react";
import { site, phoneDigits } from "@/config/site";
import { LinkedInIcon, GitHubIcon } from "./BrandIcons";
import { useLang } from "@/i18n/LanguageProvider";

interface SocialLink {
  label: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
  external?: boolean;
}

export function SocialLinks({ className = "" }: { className?: string }) {
  const { t } = useLang();

  const links: SocialLink[] = [
    { label: t.ui.social.email, href: `mailto:${site.email}`, Icon: Mail },
    { label: t.ui.social.phone, href: `tel:+${phoneDigits}`, Icon: Phone },
    { label: t.ui.social.linkedin, href: site.linkedin, Icon: LinkedInIcon, external: true },
    { label: t.ui.social.github, href: site.github, Icon: GitHubIcon, external: true },
  ];

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {links.map(({ label, href, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
