import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export default function StudioSignature() {
  return (
    <section className="relative overflow-hidden bg-invitation-maroon px-6 pb-32 pt-16 sm:px-6 sm:pb-28 sm:pt-16">
      {/* Subtle texture */}
      <div className="invitation-paper absolute inset-0 opacity-[0.035]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">

        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xl text-invitation-gold"
        >
          ❦
        </motion.div>

        {/* Studio Logo */}
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mx-auto mt-6 flex max-w-[280px] items-center justify-center rounded-2xl border border-invitation-gold/20 bg-white/95 px-6 py-4 shadow-xl"
        >
          <img
            src="/studio-logo.png"
            alt="Suresh Studio"
            className="h-auto w-full max-w-[230px] object-contain"
          />
        </motion.div>

        {/* Studio name */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 font-display text-4xl text-invitation-cream md:text-5xl"
        >
          Suresh Studio
        </motion.h2>

        <p className="mt-3 text-[8px] uppercase tracking-[0.35em] text-invitation-gold">
          Photography • Cinematography • Wedding Films
        </p>

        <p className="mt-3 text-xs text-invitation-cream/50">
          Tirupati • Puttur
        </p>

        {/* Divider */}
        <div className="mx-auto my-7 h-px w-16 bg-invitation-gold/40" />

        {/* Studio Contact */}
        <div className="flex flex-wrap items-center justify-center gap-3">

          <a
            href="tel:+919866030257"
            className="inline-flex items-center gap-2 border border-invitation-gold/30 px-5 py-3 text-[8px] uppercase tracking-[0.25em] text-invitation-cream/80 transition-all duration-300 hover:border-invitation-gold hover:bg-invitation-gold hover:text-invitation-maroon"
          >
            <Phone size={13} strokeWidth={1.4} />
            +91 98660 30257
          </a>

          <a
            href="https://www.instagram.com/sureshstudio7/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-invitation-gold/30 px-5 py-3 text-[8px] uppercase tracking-[0.25em] text-invitation-cream/80 transition-all duration-300 hover:border-invitation-gold hover:bg-invitation-gold hover:text-invitation-maroon"
          >
            Instagram
          </a>

          <a
            href="https://maps.app.goo.gl/Mjk2ZW5fXAoN8ku89"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-invitation-gold/30 px-5 py-3 text-[8px] uppercase tracking-[0.25em] text-invitation-cream/80 transition-all duration-300 hover:border-invitation-gold hover:bg-invitation-gold hover:text-invitation-maroon"
          >
            <MapPin size={13} strokeWidth={1.4} />
            Location
          </a>

        </div>

        {/* Small credit */}
        <p className="mt-8 text-[7px] uppercase tracking-[0.3em] text-invitation-cream/20">
          Capturing moments that last forever
        </p>
      </div>

     {/* Your personal signature — bottom corner */}
<motion.div
  initial={{ opacity: 0, x: 15 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.5, duration: 0.7 }}
  className="absolute bottom-5 right-5 z-20 whitespace-nowrap text-right sm:bottom-7 sm:right-8"
>
<div className="flex flex-col items-start text-left">
  <p className="text-[7px] uppercase tracking-[0.22em] text-invitation-cream/40">
    Website crafted by
  </p>

  <p className="mt-0.5 font-display text-center text-invitation-cream/80">
    Prem
  </p>

  <a
    href="https://wa.me/918008307484"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-1 inline-flex items-center gap-1.5 text-[8px] tracking-[0.12em] text-invitation-gold/70 transition-colors hover:text-invitation-gold"
  >
    <MessageCircle size={11} strokeWidth={1.5} />
    8008307484
  </a>
</div>


</motion.div>
    </section>
  );
}