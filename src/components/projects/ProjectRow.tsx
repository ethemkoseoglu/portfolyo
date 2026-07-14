import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/types";

/**
 * Minimal project row: just the (clickable) name linking to the detail page,
 * with a subtle arrow affordance. No status, tags or labels.
 */
export function ProjectRow({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex items-center justify-between gap-4 border-t border-line py-7 transition-colors duration-300 hover:border-accent/60 sm:py-8"
    >
      <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">
        {project.name}
      </h3>
      <ArrowRight
        className="h-6 w-6 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
        strokeWidth={1.5}
        aria-hidden
      />
    </Link>
  );
}
