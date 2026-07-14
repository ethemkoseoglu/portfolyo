import type { CSSProperties, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds. */
  delay?: number;
}

/**
 * SSR-safe entrance fade. Renders a plain element that is visible by default
 * and plays a one-shot CSS load-in (see `.reveal` in globals.css). No client
 * JS, and content can never get stuck invisible. Reduced-motion is honored by
 * the global media query.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const style: CSSProperties | undefined = delay
    ? { animationDelay: `${delay}s` }
    : undefined;

  return (
    <div className={`reveal${className ? ` ${className}` : ""}`} style={style}>
      {children}
    </div>
  );
}
