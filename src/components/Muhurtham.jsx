import { motion } from "framer-motion";
import { Clock, CalendarDays, MapPin } from "lucide-react";

export default function Muhurtham() {
  return (
    <section className="section-transition relative overflow-hidden bg-invitation-maroon px-6 py-24 md:py-32">
      {/* Soft paper texture */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="invitation-paper h-full w-full" />
      </div>

      {/* Decorative circles */}
      <div className="decorative absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-invitation-gold/20 md:h-[520px] md:w-[520px]" />

      <div className="decorative absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-invitation-gold/10 md:h-[700px] md:w-[700px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-[9px] uppercase tracking-[0.5em] text-invitation-gold">
            The auspicious moment
          </p>

          <h2 className="mt-4 font-display text-5xl text-invitation-cream md:text-7xl">
            The Wedding
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-invitation-gold/50 md:w-20" />

            <span className="text-lg text-invitation-gold">
              ❦
            </span>

            <span className="h-px w-12 bg-invitation-gold/50 md:w-20" />
          </div>
        </motion.div>

        {/* Main date */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mx-auto mt-12 max-w-2xl border border-invitation-gold/30 bg-invitation-cream/[0.06] px-6 py-10 md:px-12 md:py-14"
        >
          <CalendarDays
            size={24}
            strokeWidth={1.2}
            className="mx-auto text-invitation-gold"
          />

          <p className="mt-5 text-[9px] uppercase tracking-[0.45em] text-invitation-gold">
            Friday
          </p>

          <p className="mt-3 font-display text-4xl text-invitation-cream md:text-6xl">
            16 October 2026
          </p>

          <div className="mx-auto mt-8 h-px w-20 bg-invitation-gold/40" />

          {/* Wedding timing */}
          <div className="mt-8">
            <div className="flex items-center justify-center gap-3">
              <Clock
                size={18}
                strokeWidth={1.4}
                className="text-invitation-gold"
              />

              <p className="font-display text-2xl text-invitation-cream md:text-3xl">
                8:15 AM – 10:27 AM
              </p>
            </div>

            <p className="mt-3 text-[8px] uppercase tracking-[0.35em] text-invitation-cream/45">
              Wedding Ceremony
            </p>
          </div>

          {/* Pushkarakalam */}
          <div className="mt-10 border-t border-invitation-gold/15 pt-8">
            <p className="text-[8px] uppercase tracking-[0.4em] text-invitation-gold">
              Pushkarakalam
            </p>

            <p className="mt-3 font-display text-2xl text-invitation-cream md:text-3xl">
              8:41 AM – 8:45 AM
            </p>
          </div>

          {/* Lagnam */}
          <div className="mt-8">
            <p className="text-[8px] uppercase tracking-[0.4em] text-invitation-gold">
              Vrushika Lagnam
            </p>
          </div>
        </motion.div>

        {/* Venue */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="mx-auto mt-10 max-w-2xl border border-invitation-gold/15 px-6 py-8 md:px-10"
        >
          <MapPin
            size={22}
            strokeWidth={1.3}
            className="mx-auto text-invitation-gold"
          />

          <h3 className="mt-4 font-display text-3xl text-invitation-cream md:text-4xl">
            PLR Convention Centre
          </h3>

          <p className="mt-2 text-sm text-invitation-cream/55">
            Air Bypass Road, Tirupati
          </p>

          <a
            href="https://maps.app.goo.gl/xpwATjxSfLZfqbaG7"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 border border-invitation-gold/40 px-6 py-3 text-[8px] uppercase tracking-[0.3em] text-invitation-gold transition-all duration-300 hover:bg-invitation-gold hover:text-invitation-maroon"
          >
            <MapPin size={13} strokeWidth={1.5} />
            View Location
          </a>
        </motion.div>

        {/* Bottom message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mx-auto mt-12 max-w-xl font-display text-xl italic leading-relaxed text-invitation-cream/55 md:text-2xl"
        >
          We would be honoured to have you with us as we begin this beautiful
          chapter together.
        </motion.p>

        <div className="mt-9 text-xl text-invitation-gold">
          ❦
        </div>

      </div>
    </section>
  );
}