"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxHeroProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

const ParallaxHero = ({
  children,
  className = "",
  intensity = 0.15,
}: ParallaxHeroProps) => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${intensity * 100}%`],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background pointer-events-none"
        style={{ y }}
      />

      <motion.div className="relative z-10" style={{ opacity, scale }}>
        {children}
      </motion.div>
    </section>
  );
};

export default ParallaxHero;
