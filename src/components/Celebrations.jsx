import { motion } from "framer-motion";
import { MapPin, Clock, CalendarDays } from "lucide-react";

const events = [
  {
    date: "11",
    month: "October",
    year: "2026",
    title: "Haldi",
    time: "6:30 AM onwards",
    venue: "Bride's House & Groom's House",
    location: "Naidupet",
    description:
      "Haldi celebrations will take place simultaneously at both houses.",
    map: null,
  },
  {
    date: "14",
    month: "October",
    year: "2026",
    title: "Nalugu",
    time: "Groom: Morning • Bride: Evening",
    venue: "Subha Function Hall",
    location: "Naidupet",
    description:
      "A beautiful traditional celebration bringing both families together.",
    map: "https://maps.app.goo.gl/P4HEHUggvbhuYYoM6",
  },
  {
    date: "15",
    month: "October",
    year: "2026",
    title: "Sangeeth",
    time: "Evening",
    venue: "PLR Convention Centre",
    location: "Tirupati",
    description:
      "An evening of music, dance, laughter, and celebration.",
    map: "https://maps.app.goo.gl/xpwATjxSfLZfqbaG7",
  },
  {
    date: "16",
    month: "October",
    year: "2026",
    title: "Wedding",
    time: "8:15 AM – 10:27 AM",
    venue: "PLR Convention Centre",
    location: "Air Bypass Road, Tirupati",
    description:
      "Join us as Manaswini and Dinesh begin their beautiful journey together.",
    highlight: true,
    map: "https://maps.app.goo.gl/xpwATjxSfLZfqbaG7",
  },
  {
    date: "17",
    month: "October",
    year: "2026",
    title: "Appaginthalu",
    time: "Evening",
    venue: "Naidupet",
    location: "Naidupet",
    description: "Bride receiving ceremony.",
    map: null,
  },
  {
    date: "18",
    month: "October",
    year: "2026",
    title: "Reception",
    time: "Evening",
    venue: "KMR Convention Centre",
    location: "Naidupet",
    description:
      "An evening of celebration, joy, and togetherness.",
    map: "https://maps.app.goo.gl/1HtLraKDxQbrEWoC9",
  },
];

export default function Celebrations() {
  return (
    <section className="section-transition relative overflow-hidden bg-invitation-cream px-5 py-24 sm:px-8 md:px-12 md:py-32">

      {/* Paper texture */}
      <div className="invitation-paper absolute inset-0 opacity-60" />

      {/* Ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.3, 0.18],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-invitation-gold/10 blur-3xl md:h-[650px] md:w-[650px]"
      />

      {/* Decorative ornaments */}
      <div className="pointer-events-none absolute left-3 top-20 font-display text-7xl text-invitation-sage/10 md:left-12 md:text-9xl">
        ❧
      </div>

      <div className="pointer-events-none absolute bottom-20 right-3 rotate-180 font-display text-7xl text-invitation-maroon/10 md:right-12 md:text-9xl">
        ❧
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =========================================
            HEADER
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-invitation-gold/30 sm:w-16" />

            <CalendarDays
              size={15}
              strokeWidth={1.2}
              className="text-invitation-gold"
            />

            <span className="h-px w-10 bg-invitation-gold/30 sm:w-16" />
          </div>

          <p className="mt-5 text-[8px] uppercase tracking-[0.5em] text-invitation-gold sm:text-[9px]">
            Save the dates
          </p>

          <h2 className="mt-4 font-display text-5xl text-invitation-maroon sm:text-6xl md:text-7xl">
            Our Celebrations
          </h2>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-invitation-gold/30" />
            <span className="text-xs text-invitation-gold">✦</span>
            <span className="h-px w-12 bg-invitation-gold/30" />
          </div>

          <p className="mx-auto mt-6 max-w-xl font-display text-base italic leading-relaxed text-invitation-brown/55 sm:text-lg">
            Six beautiful occasions, one unforgettable celebration.
          </p>
        </motion.div>

        {/* =========================================
            TIMELINE
        ========================================= */}
        <div className="relative mt-20 md:mt-24">

          {/* Desktop timeline */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-invitation-gold/30 to-transparent md:block" />

          {/* Mobile timeline */}
          <div className="pointer-events-none absolute left-[15px] top-0 h-full w-px bg-gradient-to-b from-transparent via-invitation-gold/25 to-transparent md:hidden" />

          <div className="space-y-12 md:space-y-16">

            {events.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${event.title}-${event.date}`}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -45 : 45,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative md:flex ${
                    isLeft
                      ? "md:justify-start"
                      : "md:justify-end"
                  }`}
                >

                  {/* Timeline node */}
                  <div
                    className={`absolute left-[9px] top-8 z-20 flex items-center justify-center rounded-full border md:left-1/2 md:-translate-x-1/2 ${
                      event.highlight
                        ? "h-8 w-8 border-invitation-gold bg-invitation-maroon shadow-[0_0_0_6px_rgba(168,135,69,0.08)]"
                        : "h-5 w-5 border-invitation-gold/60 bg-invitation-cream"
                    }`}
                  >
                    <span
                      className={`rounded-full ${
                        event.highlight
                          ? "h-2 w-2 bg-invitation-gold"
                          : "h-1.5 w-1.5 bg-invitation-maroon"
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`relative ml-10 w-[calc(100%-2.5rem)] md:ml-0 md:w-[44%] ${
                      event.highlight
                        ? "border-invitation-gold bg-invitation-ivory shadow-[0_25px_70px_rgba(116,31,42,0.13)]"
                        : "border-invitation-gold/20 bg-invitation-ivory/80 shadow-[0_15px_45px_rgba(73,53,42,0.05)]"
                    } group overflow-hidden rounded-sm border transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(116,31,42,0.10)]`}
                  >

                    {/* Wedding glow */}
                    {event.highlight && (
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-invitation-gold/[0.08] via-transparent to-invitation-maroon/[0.03]" />
                    )}

                    <div className="relative p-6 sm:p-8 md:p-9">

                      {/* Event number */}
                      <div className="absolute right-6 top-5">
                        <p className="font-sans text-[7px] uppercase tracking-[0.35em] text-invitation-gold/50">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>

                      {/* Date + title */}
                      <div className="flex items-start gap-5">

                        {/* Date */}
                        <div className="min-w-[62px] border-r border-invitation-gold/20 pr-5 text-center">
                          <p className="font-display text-4xl leading-none text-invitation-maroon sm:text-5xl">
                            {event.date}
                          </p>

                          <p className="mt-2 text-[7px] uppercase tracking-[0.22em] text-invitation-gold">
                            {event.month}
                          </p>

                          <p className="mt-1 text-[7px] text-invitation-brown/40">
                            {event.year}
                          </p>
                        </div>

                        {/* Title */}
                        <div className="pt-1">
                          <p className="text-[7px] uppercase tracking-[0.3em] text-invitation-sage">
                            {event.highlight
                              ? "The Wedding Day"
                              : "Celebration"}
                          </p>

                          <h3
                            className={`mt-2 font-display text-3xl leading-none ${
                              event.highlight
                                ? "text-invitation-maroon sm:text-4xl"
                                : "text-invitation-maroon"
                            }`}
                          >
                            {event.title}
                          </h3>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="my-6 h-px bg-gradient-to-r from-invitation-gold/30 via-invitation-gold/10 to-transparent" />

                      {/* Time */}
                      <div className="flex items-start gap-3">
                        <Clock
                          size={15}
                          strokeWidth={1.4}
                          className="mt-0.5 shrink-0 text-invitation-gold"
                        />

                        <p className="text-xs leading-relaxed text-invitation-brown/70 sm:text-sm">
                          {event.time}
                        </p>
                      </div>

                      {/* Venue */}
                      <div className="mt-4 flex items-start gap-3">
                        <MapPin
                          size={15}
                          strokeWidth={1.4}
                          className="mt-0.5 shrink-0 text-invitation-gold"
                        />

                        <div>
                          <p className="text-xs font-medium text-invitation-brown/80 sm:text-sm">
                            {event.venue}
                          </p>

                          <p className="mt-1 text-[10px] text-invitation-brown/45 sm:text-xs">
                            {event.location}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-5 max-w-lg font-display text-sm italic leading-relaxed text-invitation-brown/55 sm:text-base">
                        {event.description}
                      </p>

                      {/* Location button */}
                      {event.map && (
                        <a
                          href={event.map}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center gap-2 border border-invitation-gold/35 px-5 py-3 text-[7px] uppercase tracking-[0.28em] text-invitation-maroon transition-all duration-300 hover:border-invitation-maroon hover:bg-invitation-maroon hover:text-invitation-cream"
                        >
                          <MapPin size={12} strokeWidth={1.4} />
                          View Location
                        </a>
                      )}

                      {/* Wedding highlight */}
                      {event.highlight && (
                        <div className="mt-7 border-t border-invitation-gold/20 pt-6">

                          <div className="flex flex-wrap items-end justify-between gap-5">

                            <div>
                              <p className="text-[7px] uppercase tracking-[0.32em] text-invitation-gold">
                                Pushkarakalam
                              </p>

                              <p className="mt-2 font-display text-xl text-invitation-maroon sm:text-2xl">
                                8:41 AM – 8:45 AM
                              </p>
                            </div>

                            <div className="text-left sm:text-right">
                              <p className="text-[7px] uppercase tracking-[0.3em] text-invitation-sage">
                                Vrushika Lagnam
                              </p>

                              <p className="mt-2 text-[9px] text-invitation-brown/50">
                                Auspicious Wedding Timing
                              </p>
                            </div>

                          </div>

                        </div>
                      )}

                    </div>

                    {/* Bottom gold accent */}
                    <div
                      className={`h-px w-full ${
                        event.highlight
                          ? "bg-invitation-gold"
                          : "bg-invitation-gold/15"
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 flex items-center justify-center gap-4 text-invitation-gold"
        >
          <span className="h-px w-12 bg-invitation-gold/25" />
          <span className="text-lg">❦</span>
          <span className="h-px w-12 bg-invitation-gold/25" />
        </motion.div>

      </div>
    </section>
  );
}