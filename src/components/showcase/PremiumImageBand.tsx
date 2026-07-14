"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Cinematic "dolly-in": the section is pinned while you scroll and the image
 * scales up — feeling like it comes toward you. Static short band for
 * reduced-motion users.
 */
export function PremiumImageBand() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);

  if (reduce) {
    return (
      <section aria-hidden className="relative h-[48vh] min-h-[320px] overflow-hidden border-y border-line">
        <Image src="/images/band-code.jpg" alt="" fill priority sizes="100vw" className="object-cover grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-background/25" />
      </section>
    );
  }

  return (
    <section ref={ref} aria-hidden className="relative h-[140vh] sm:h-[180vh]">
      <div className="sticky top-0 h-screen overflow-hidden border-y border-line">
        <motion.div style={{ scale }} className="absolute inset-0">
          <Image
            src="/images/band-code.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover grayscale"
          />
        </motion.div>
        {/* Kenarları zemine eritir + tonu premium/mat tutar */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
        <div className="absolute inset-0 bg-background/20" />
      </div>
    </section>
  );
}
