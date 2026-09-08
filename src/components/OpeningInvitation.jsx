import { motion } from "framer-motion";

export default function OpeningInvitation({ onOpen }) {
  return (
    <section className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-invitation-ivory px-5">

      {/* Paper texture */}
      <div className="invitation-paper absolute inset-0" />

      {/* Decorative outer frame */}
      <div className="pointer-events-none absolute inset-3 border border-invitation-gold/50 md:inset-6" />

      <div className="pointer-events-none absolute inset-5 border border-invitation-gold/15 md:inset-9" />

      {/* Corner ornaments */}
      <div className="decorative absolute left-7 top-7 text-2xl text-invitation-gold/60 md:left-12 md:top-12 md:text-3xl">
        ❀
      </div>

      <div className="decorative absolute right-7 top-7 text-2xl text-invitation-gold/60 md:right-12 md:top-12 md:text-3xl">
        ❀
      </div>

      <div className="decorative absolute bottom-7 left-7 rotate-180 text-2xl text-invitation-gold/60 md:bottom-12 md:left-12 md:text-3xl">
        ❀
      </div>

      <div className="decorative absolute bottom-7 right-7 rotate-180 text-2xl text-invitation-gold/60 md:bottom-12 md:right-12 md:text-3xl">
        ❀
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 mx-auto w-full max-w-xl text-center"
      >

        {/* Top ornament */}
        <motion.div
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-4xl text-invitation-maroon md:text-5xl"
        >
          ❦
        </motion.div>

        {/* Invitation */}
        <p className="mt-8 text-[9px] uppercase tracking-[0.55em] text-invitation-gold">
          Wedding Invitation
        </p>

        <h1 className="mt-6 font-royal text-5xl font-medium text-invitation-maroon md:text-7xl">
          Manaswini
        </h1>

        <p className="my-2 font-display text-3xl italic text-invitation-gold">
          &
        </p>

        <h1 className="font-royal text-5xl font-medium text-invitation-maroon md:text-7xl">
          Dinesh Reddy
        </h1>

        {/* Divider */}
        <div className="mx-auto mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-invitation-gold/40" />
          <span className="text-sm text-invitation-gold">
            ✦
          </span>
          <span className="h-px w-12 bg-invitation-gold/40" />
        </div>

        {/* Date */}
        <p className="mt-7 font-display text-xl italic text-invitation-brown/65 md:text-2xl">
          16 October 2026
        </p>

        <p className="mt-2 text-[8px] uppercase tracking-[0.4em] text-invitation-sage">
          Friday • Tirupati
        </p>

        {/* Opening button */}
        <motion.button
          type="button"
          onClick={onOpen}
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="mx-auto mt-12 flex items-center justify-center border border-invitation-gold bg-invitation-maroon px-10 py-4 text-[9px] uppercase tracking-[0.4em] text-invitation-cream shadow-[0_12px_35px_rgba(116,31,42,0.15)] transition-all duration-300 hover:bg-invitation-gold"
        >
          Open Invitation
        </motion.button>

        <p className="mt-5 text-[8px] uppercase tracking-[0.3em] text-invitation-brown/35">
          Tap to enter
        </p>

        {/* Bottom ornament */}
        <div className="mt-10 text-xl text-invitation-gold">
          ❦
        </div>

      </motion.div>

    </section>
  );
}