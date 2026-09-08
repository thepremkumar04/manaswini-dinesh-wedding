import { motion } from "framer-motion";

export default function Finale() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-invitation-sage px-6 py-24">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="invitation-paper h-full w-full" />
      </div>

      {/* Decorative rings */}
      <div className="decorative absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-invitation-gold/20 md:h-[480px] md:w-[480px]" />

      <div className="decorative absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-invitation-gold/10 md:h-[650px] md:w-[650px]" />

      {/* Corner ornaments */}
      <div className="decorative absolute left-6 top-8 text-4xl text-invitation-gold/30 md:left-12 md:top-12 md:text-6xl">
        ❀
      </div>

      <div className="decorative absolute right-6 top-8 text-4xl text-invitation-gold/30 md:right-12 md:top-12 md:text-6xl">
        ❀
      </div>

      <div className="decorative absolute bottom-8 left-6 rotate-180 text-4xl text-invitation-gold/30 md:bottom-12 md:left-12 md:text-6xl">
        ❀
      </div>

      <div className="decorative absolute bottom-8 right-6 rotate-180 text-4xl text-invitation-gold/30 md:bottom-12 md:right-12 md:text-6xl">
        ❀
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl text-invitation-gold"
        >
          ❦
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-7 text-[9px] uppercase tracking-[0.55em] text-invitation-gold"
        >
          A beautiful beginning
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 1 }}
          className="mt-5 font-display text-5xl leading-tight text-invitation-cream md:text-7xl"
        >
          Forever starts
          <span className="block italic text-invitation-gold">
            here.
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mx-auto mt-8 h-px w-20 bg-invitation-gold/50"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.75, duration: 1 }}
          className="mx-auto mt-8 max-w-xl font-display text-xl italic leading-relaxed text-invitation-cream/60 md:text-2xl"
        >
          Thank you for being a part of our story.
          We cannot wait to celebrate this beautiful
          beginning with you.
        </motion.p>

        {/* Couple */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12"
        >
          <p className="font-royal text-4xl text-invitation-cream md:text-5xl">
            Manaswini
          </p>

          <p className="my-2 font-display text-3xl italic text-invitation-gold">
            &
          </p>

          <p className="font-royal text-4xl text-invitation-cream md:text-5xl">
            Dinesh Reddy
          </p>
        </motion.div>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.25, duration: 1 }}
          className="mt-10 text-[9px] uppercase tracking-[0.4em] text-invitation-gold/70"
        >
          16 October 2026 • Tirupati
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-10 text-xl text-invitation-gold"
        >
          ❦
        </motion.div>

      </div>
    </section>
  );
}