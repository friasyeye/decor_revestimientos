import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  /** Distance to travel upward on enter (default 24px) */
  y?: number;
  /**
   * Use animate instead of whileInView.
   * Set this on the FIRST visible section of each page so the animation
   * plays on mount rather than being skipped (element already in viewport).
   */
  onMount?: boolean;
}

// Strong ease-out curve — Emil Kowalski: starts fast, feels responsive
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, y = 24, onMount = false }) => {
  if (onMount) {
    return (
      <motion.div
        initial={{ opacity: 0, y }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: EASE_OUT, delay }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.75, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
