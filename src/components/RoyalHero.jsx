import { motion } from "framer-motion";

export default function RoyalHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-invitation-ivory px-6 py-24">

      {/* Traditional paper texture */}
      <div className="invitation-paper absolute inset-0" />

      {/* Soft central glow */}
      <div className="decorative absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-invitation-gold/10 blur-3xl md:h-[600px] md:w-[600px]" />

      {/* Decorative rings */}
      <div className="decorative absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-invitation-gold/15 md:h-[500px] md:w-[500px]" />

      <div className="decorative absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-invitation-maroon/10 md:h-[650px] md:w-[650px]" />

      {/* Corner flowers */}
      <span className="decorative absolute left-6 top-7 text-3xl text-invitation-maroon/40 md:left-10 md:top-10 md:text-4xl">
        ❀
      </span>

      <span className="decorative absolute right-6 top-7 text-3xl text-invitation-maroon/40 md:right-10 md:top-10 md:text-4xl">
        ❀
      </span>

      <span className="decorative absolute bottom-7 left-6 rotate-180 text-3xl text-invitation-gold/50 md:bottom-10 md:left-10 md:text-4xl">
        ❀
      </span>

      <span className="decorative absolute bottom-7 right-6 rotate-180 text-3xl text-invitation-gold/50 md:bottom-10 md:right-10 md:text-4xl">
        ❀
      </span>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">

        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[9px] uppercase tracking-[0.55em] text-invitation-sage md:text-[10px]"
        >
          Together with their families
        </motion.p>

        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 1 }}
          className="mx-auto mt-7 flex items-center justify-center gap-4"
        >
          <span className="h-px w-12 bg-invitation-gold/40 md:w-20" />

          <span className="text-2xl text-invitation-maroon">
            ❦
          </span>

          <span className="h-px w-12 bg-invitation-gold/40 md:w-20" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-7 font-display text-xl italic text-invitation-brown/65 md:text-2xl"
        >
          Joyfully invite you to celebrate
        </motion.p>

        {/* Bride */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 font-royal text-6xl font-medium leading-none text-invitation-maroon md:text-8xl lg:text-9xl"
        >
          Manaswini
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="mt-3 text-[9px] uppercase tracking-[0.35em] text-invitation-gold"
        >
          The Bride
        </motion.p>

        {/* Ampersand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.25, duration: 0.9 }}
          className="my-4 font-display text-4xl italic text-invitation-sage md:my-5 md:text-5xl"
        >
          &
        </motion.div>

        {/* Groom */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.45,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-royal text-5xl font-medium leading-none text-invitation-maroon md:text-7xl lg:text-8xl"
        >
          Dinesh Reddy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="mt-3 text-[9px] uppercase tracking-[0.35em] text-invitation-gold"
        >
          The Groom
        </motion.p>

        {/* Wedding date */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.95, duration: 1 }}
          className="mx-auto mt-10 max-w-md border-y border-invitation-gold/25 py-5"
        >
          <p className="text-[9px] uppercase tracking-[0.45em] text-invitation-sage">
            Wedding Day
          </p>

          <p className="mt-3 font-display text-2xl text-invitation-maroon md:text-3xl">
            16 October 2026
          </p>

          <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-invitation-brown/40">
            Friday • Tirupati
          </p>
        </motion.div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.25, duration: 1 }}
          className="mx-auto mt-8 max-w-xl font-display text-lg italic leading-relaxed text-invitation-brown/55 md:text-xl"
        >
          Two hearts, two families, one beautiful beginning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-9 text-xl text-invitation-gold"
        >
          ❦
        </motion.div>

      </div>
    </section>
  );
}