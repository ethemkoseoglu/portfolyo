"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Signature "code" band — crisp monospace typography, not a raster image, so it
 * stays razor-sharp at any scale. Near-black ground, disciplined monochrome
 * tones and a single champagne-gold accent token. Subtle dolly-in on scroll;
 * a static, centered block for reduced-motion users.
 */

// Token tones — punctuation dim, identifiers mid, key names bright, one gold.
const D = ({ children }: { children: ReactNode }) => (
  <span className="text-foreground/35">{children}</span>
);
const B = ({ children }: { children: ReactNode }) => (
  <span className="text-foreground/90">{children}</span>
);
const M = ({ children }: { children: ReactNode }) => (
  <span className="text-foreground/55">{children}</span>
);

const CODE: ReactNode[] = [
  <>
    <D>type</D> <B>Problem</B> <D>= {"{"}</D>
  </>,
  <>
    {"  "}domain<D>:</D> <M>string</M>
    <D>;</D>
  </>,
  <>
    {"  "}manual<D>:</D> <M>boolean</M>
    <D>;</D>
  </>,
  <D>{"}"}</D>,
  <>{" "}</>,
  <span className="text-foreground/30 italic">
    {"// işletme problemini ürüne çeviriyorum"}
  </span>,
  <>
    <D>function</D> <B>build</B>
    <D>(</D>p<D>:</D> <M>Problem</M>
    <D>)</D> <D>{"{"}</D>
  </>,
  <>
    {"  "}
    <D>const</D> insight <D>=</D> <B>research</B>
    <D>(p);</D>
  </>,
  <>
    {"  "}
    <D>return</D> <span className="text-accent">ship</span>
    <D>({"{"} ...insight, </D>ai<D>:</D> <M>true</M> <D>{"}"});</D>
  </>,
  <D>{"}"}</D>,
];

function CodeBlock() {
  return (
    <div className="mx-auto w-fit font-mono text-[clamp(0.7rem,2.2vw,1.05rem)] leading-[1.95] text-foreground/55">
      {CODE.map((line, i) => (
        <div key={i} className="grid grid-cols-[2ch_1fr] gap-x-6">
          <span className="select-none text-right text-foreground/20 tabular-nums">
            {i + 1}
          </span>
          <span className="whitespace-pre">{line}</span>
        </div>
      ))}
    </div>
  );
}

export function PremiumImageBand() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.32, 1], [0.35, 1, 1]);

  if (reduce) {
    return (
      <section
        aria-hidden
        className="relative flex min-h-[46vh] items-center justify-center overflow-hidden border-y border-line px-6 py-20"
      >
        <CodeBlock />
      </section>
    );
  }

  return (
    <section ref={ref} aria-hidden className="relative h-[130vh] sm:h-[160vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden border-y border-line px-6">
        <motion.div style={{ scale, opacity }} className="relative">
          <CodeBlock />
        </motion.div>
        {/* Kenarları zemine eritir */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
    </section>
  );
}
