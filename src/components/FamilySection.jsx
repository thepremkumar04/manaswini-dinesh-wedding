import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function FamilySection() {
  return (
    <section className="section-transition relative overflow-hidden bg-invitation-cream px-6 py-24 md:py-32">
      {/* Background texture */}
      <div className="invitation-paper absolute inset-0 opacity-60" />

      {/* Decorative leaves */}
      <div className="decorative absolute left-3 top-16 text-5xl text-invitation-sage/15 md:left-10 md:text-7xl">
        ❧
      </div>

      <div className="decorative absolute right-3 bottom-16 rotate-180 text-5xl text-invitation-sage/15 md:right-10 md:text-7xl">
        ❧
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <p className="text-[9px] uppercase tracking-[0.5em] text-invitation-gold">
            With the blessings of our families
          </p>

          <h2 className="mt-4 font-display text-5xl text-invitation-maroon md:text-6xl">
            Our Families
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-invitation-gold/40" />
            <span className="text-sm text-invitation-gold">✦</span>
            <span className="h-px w-12 bg-invitation-gold/40" />
          </div>
        </motion.div>

        {/* Families */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-10">

          {/* Bride's Family */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="royal-glow border border-invitation-gold/20 bg-invitation-ivory/80 p-8 text-center md:p-12"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-invitation-gold/40 text-xl text-invitation-maroon">
              ♡
            </div>

            <p className="mt-6 text-[9px] uppercase tracking-[0.4em] text-invitation-sage">
              Bride's Family
            </p>

            <h3 className="mt-5 font-display text-3xl text-invitation-maroon md:text-4xl">
              Manaswini
            </h3>

            <div className="mx-auto my-5 h-px w-16 bg-invitation-gold/40" />

            <p className="font-royal text-lg leading-relaxed text-invitation-brown/75 md:text-xl">
              Sri Pelluru Gopinadh Reddy
            </p>

            <p className="mt-2 font-royal text-lg leading-relaxed text-invitation-brown/75 md:text-xl">
              Smt. Sowjanya
            </p>
          </motion.div>

          {/* Groom's Family */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="royal-glow border border-invitation-gold/20 bg-invitation-ivory/80 p-8 text-center md:p-12"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-invitation-gold/40 text-xl text-invitation-maroon">
              ♡
            </div>

            <p className="mt-6 text-[9px] uppercase tracking-[0.4em] text-invitation-sage">
              Groom's Family
            </p>

            <h3 className="mt-5 font-display text-3xl text-invitation-maroon md:text-4xl">
              Dinesh Reddy
            </h3>

            <div className="mx-auto my-5 h-px w-16 bg-invitation-gold/40" />

            <p className="font-royal text-lg leading-relaxed text-invitation-brown/75 md:text-xl">
              Sri Maram Reddy Chiranjeevi Reddy
            </p>

            <p className="mt-2 font-royal text-lg leading-relaxed text-invitation-brown/75 md:text-xl">
              Smt. Aruna
            </p>
          </motion.div>

        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-14 text-center"
        >
          <p className="mx-auto max-w-2xl font-display text-xl italic leading-relaxed text-invitation-brown/60 md:text-2xl">
            Surrounded by the love, blessings, and joy of our families,
            we begin this beautiful journey together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}