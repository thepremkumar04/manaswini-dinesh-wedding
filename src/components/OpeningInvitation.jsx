import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function OpeningInvitation({ onOpen }) {
  return (
    <motion.section
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[90] flex min-h-screen items-center justify-center overflow-hidden bg-invitation-ivory px-6"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-invitation-gold/10 blur-3xl" />

      {/* Decorative corners */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
        className="pointer-events-none absolute left-5 top-5 h-24 w-24 border-l border-t border-invitation-gold/40 sm:left-10 sm:top-10 sm:h-32 sm:w-32"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.15 }}
        className="pointer-events-none absolute bottom-5 right-5 h-24 w-24 border-b border-r border-invitation-gold/40 sm:bottom-10 sm:right-10 sm:h-32 sm:w-32"
      />

      {/* Invitation card */}
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="invitation-paper relative z-10 w-full max-w-xl border border-invitation-gold/30 px-7 py-14 text-center shadow-2xl sm:px-14 sm:py-20"
      >
        {/* Top ornament */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8 flex items-center justify-center gap-3"
        >
          <span className="h-px w-12 bg-invitation-gold/50" />

          <Sparkles
            size={16}
            strokeWidth={1.2}
            className="text-invitation-gold"
          />

          <span className="h-px w-12 bg-invitation-gold/50" />
        </motion.div>

        {/* Small heading */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="font-sans text-[10px] uppercase tracking-[0.4em] text-invitation-gold sm:text-xs"
        >
          Together with their families
        </motion.p>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-7"
        >
          <h1 className="font-display text-5xl leading-none text-invitation-maroon sm:text-7xl">
            Manaswini
          </h1>

          <p className="my-3 font-display text-2xl italic text-invitation-gold sm:text-3xl">
            &
          </p>

          <h1 className="font-display text-5xl leading-none text-invitation-maroon sm:text-7xl">
            Dinesh
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "6rem", opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="gold-divider mx-auto mt-9 h-px"
        />

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.25 }}
          className="mt-7 font-display text-lg tracking-wide text-invitation-brown sm:text-xl"
        >
          October 16, 2026
        </motion.p>

        {/* Open button */}
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          onClick={onOpen}
          className="group mt-10 inline-flex items-center gap-3 border border-invitation-gold bg-invitation-maroon px-8 py-3.5 font-sans text-[10px] uppercase tracking-[0.3em] text-white shadow-lg transition duration-300 hover:bg-invitation-brown sm:px-10"
        >
          <span>Open Invitation</span>

          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            →
          </motion.span>
        </motion.button>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="mt-7 font-sans text-[9px] uppercase tracking-[0.25em] text-invitation-brown/50"
        >
          A celebration of love & togetherness
        </motion.p>
      </motion.div>
    </motion.section>
  );
}