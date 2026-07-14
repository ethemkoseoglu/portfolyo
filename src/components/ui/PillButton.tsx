import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
}

interface LinkProps extends BaseProps {
  href: string;
  /** External links open in a new tab with safe rel. */
  external?: boolean;
  type?: never;
}

interface ButtonProps extends BaseProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  external?: never;
}

type PillButtonProps = LinkProps | ButtonProps;

const base =
  "group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] transition-all duration-300 sm:text-sm";

const variants: Record<Variant, string> = {
  // Off-white pill that inverts + gains a thin gold ring on hover.
  primary:
    "bg-foreground text-background ring-1 ring-transparent hover:bg-transparent hover:text-foreground hover:ring-accent",
  // Transparent pill with hairline border that warms to gold on hover.
  secondary:
    "border border-line text-foreground hover:border-accent hover:text-accent",
};

export function PillButton(props: PillButtonProps) {
  const { children, variant = "primary", className = "", ariaLabel } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if (props.href !== undefined) {
    const isInternal = props.href.startsWith("/") && !props.external;
    if (isInternal) {
      return (
        <Link href={props.href} className={classes} aria-label={ariaLabel}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={props.href}
        className={classes}
        aria-label={ariaLabel}
        {...(props.external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={props.type ?? "button"} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
