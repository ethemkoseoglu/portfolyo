import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { dictionaries } from "@/i18n/content";
import { site } from "@/config/site";
import { ProjectDetail } from "@/components/projects/ProjectDetail";

interface PageProps {
  // Next.js 16: route params are async.
  params: Promise<{ slug: string }>;
}

// Metadata/params use the Turkish dictionary as the canonical source.
const projects = dictionaries.tr.projects;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Proje Bulunamadı" };
  }

  const canonical = `/projects/${project.slug}`;
  return {
    title: project.name,
    description: project.shortDescription,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: `${project.name} — ${site.name}`,
      description: project.shortDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — ${site.name}`,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail slug={slug} />;
}
