import React, { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { gentleDecelEase } from '../utils/motionTransitions';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number; // Capped at 12px
  once?: boolean;
}

/**
 * Reusable scroll reveal component:
 * - Opacity and y displacement <= 12px
 * - Duration: 350–450 ms (380 ms default)
 * - Executes on every scroll entry (once: false by default) so scrolling up/down repeats motion
 * - Activates when 15% enters viewport
 * - Respects prefers-reduced-motion (no displacement, y: 0)
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  yOffset = 10,
  once = false,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const safeY = shouldReduceMotion ? 0 : Math.min(Math.max(yOffset, 0), 12);

  return (
    <motion.div
      initial={{ opacity: 0, y: safeY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.15 }}
      transition={{
        duration: 0.38,
        delay: shouldReduceMotion ? 0 : delay,
        ease: gentleDecelEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
