// src/utils/animations.js
// Bouncy and playful animation variants for Framer Motion

// Container stagger for parent elements (e.g., grids, lists)
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Bouncy item animation (pops up with spring)
export const bounceItem = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 15,
    },
  },
};

// Slide and spring from side
export const slideSpringFromLeft = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 18,
    },
  },
};

export const slideSpringFromRight = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 18,
    },
  },
};

export const slideUpFade = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      mass: 1,
    },
  },
};

// Text word-by-word stagger
export const textVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 12,
    },
  },
};

// Hover scaling for buttons / cards
export const hoverBounce = {
  scale: 1.05,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 10,
  },
};

export const hoverLift = {
  y: -10,
  scale: 1.02,
  boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.1)",
  transition: {
    type: "spring",
    stiffness: 300,
  },
};

// Magnetic effect (slight rotate and scale)
export const hoverMagnetic = {
  scale: 1.05,
  rotate: [0, -2, 2, -1, 1, 0],
  transition: {
    duration: 0.4,
    ease: "easeInOut",
  },
};

// Pulse glow for CTA
export const pulseGlow = {
  boxShadow: [
    "0px 0px 0px 0px rgba(139, 92, 246, 0)",
    "0px 0px 20px 5px rgba(139, 92, 246, 0.5)",
    "0px 0px 0px 0px rgba(139, 92, 246, 0)"
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};
