import { motion } from "framer-motion";

export default function Blessing() {
  return (
    <section className="section-transition relative overflow-hidden bg-invitation-cream px-6 py-24 md:py-32">
      {/* Paper texture */}
      <div className="invitation-paper absolute inset-0 opacity-60" />

      {/* Decorative rings */}
      <div className="decorative absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-invitation-gold/10 md:h-[460px] md:w-[460px]" />

      <div className="decorative absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-invitation-maroon/5 md:h-[620px] md:w-[620px]" />

      {/* Corner ornaments */}
      <div className="decorative absolute left-5 top-12 text-5xl text-invitation-gold/15 md:left-12 md:text-7xl">
        ❧
      </div>

      <div className="decorative absolute right-5 bottom-12 rotate-180 text-5xl text-invitation-sage/15 md:right-12 md:text-7xl">
        ❧
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">

        {/* Small heading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-[9px] uppercase tracking-[0.5em] text-invitation-gold"
        >
          With love and blessings
        </motion.p>

        {/* Main ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="mx-auto mt-7 text-4xl text-invitation-maroon"
        >
          ❦
        </motion.div>

        {/* Message */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.25, duration: 0.9 }}
          className="mt-7 font-display text-4xl leading-tight text-invitation-maroon md:text-6xl"
        >
          May our journey be filled with
          <span className="block italic text-invitation-gold">
            love, laughter & togetherness
          </span>
        </motion.h2>

        <div className="gold-divider mt-7" />

        {/* Blessing */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.45, duration: 1 }}
          className="mx-auto mt-8 max-w-2xl font-display text-xl leading-relaxed text-invitation-brown/60 md:text-2xl"
        >
          With the love and blessings of our parents, families, and
          everyone who has been part of our journey, we look forward to
          beginning this new chapter together.
        </motion.p>

        {/* Couple */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.65, duration: 0.9 }}
          className="mx-auto mt-12 max-w-xl border-y border-invitation-gold/20 py-8"
        >
          <p className="font-royal text-4xl text-invitation-maroon md:text-5xl">
            Manaswini
          </p>

          <p className="my-2 font-display text-3xl italic text-invitation-gold">
            &
          </p>

          <p className="font-royal text-4xl text-invitation-maroon md:text-5xl">
            Dinesh Reddy
          </p>
        </motion.div>

        {/* Final invitation line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.85, duration: 1 }}
          className="mt-10 text-[9px] uppercase tracking-[0.35em] text-invitation-sage"
        >
          Your presence and blessings mean the world to us
        </motion.p>

        <div className="mt-8 text-xl text-invitation-gold">
          ❦
        </div>

      </div>
    </section>
  );
}