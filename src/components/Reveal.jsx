import { motion } from "framer-motion";

const directions = {
  up: { x: 0, y: 45 },
  down: { x: 0, y: -45 },
  left: { x: -45, y: 0 },
  right: { x: 45, y: 0 },
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.85,
  amount = 0.15,
  className = "",
}) {
  const offset = directions[direction] || directions.up;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}