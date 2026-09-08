import { motion } from "framer-motion";
import { MapPin, Navigation, ArrowUpRight } from "lucide-react";

const venues = [
  {
    number: "01",
    name: "Subha Function Hall",
    location: "Naidupet",
    event: "Nalugu",
    date: "14 October 2026",
    map: "https://maps.app.goo.gl/P4HEHUggvbhuYYoM6",
  },
  {
    number: "02",
    name: "PLR Convention Centre",
    location: "Air Bypass Road, Tirupati",
    event: "Sangeeth & Wedding",
    date: "15–16 October 2026",
    map: "https://maps.app.goo.gl/xpwATjxSfLZfqbaG7",
  },
  {
    number: "03",
    name: "KMR Convention Centre",
    location: "Naidupet",
    event: "Reception",
    date: "18 October 2026",
    map: "https://maps.app.goo.gl/1HtLraKDxQbrEWoC9",
  },
];

export default function Venue() {
  return (
    <section className="section-transition relative overflow-hidden bg-invitation-ivory px-6 py-28 md:py-36">
      {/* Paper texture */}
      <div className="invitation-paper pointer-events-none absolute inset-0 opacity-60" />

      {/* Large decorative circles */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full border border-invitation-gold/10" />

      <div className="pointer-events-none absolute -left-28 top-32 h-[260px] w-[260px] rounded-full border border-invitation-gold/10" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full border border-invitation-maroon/10" />

      <div className="pointer-events-none absolute -right-24 bottom-28 h-[260px] w-[260px] rounded-full border border-invitation-maroon/10" />

      {/* Subtle vertical lines */}
      <div className="pointer-events-none absolute left-[8%] top-0 h-full w-px bg-invitation-gold/[0.06]" />
      <div className="pointer-events-none absolute right-[8%] top-0 h-full w-px bg-invitation-gold/[0.06]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-invitation-gold/30" />

            <p className="text-[9px] font-medium uppercase tracking-[0.5em] text-invitation-gold">
              The Celebrations
            </p>

            <span className="h-px w-10 bg-invitation-gold/30" />
          </div>

          {/* Heading */}
          <h2 className="mt-5 font-display text-5xl leading-none text-invitation-maroon md:text-7xl">
            Our Venues
          </h2>

          {/* Ornament */}
          <div className="mx-auto mt-7 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-invitation-gold/25" />

            <span className="text-xs text-invitation-gold">
              ✦
            </span>

            <span className="h-px w-16 bg-invitation-gold/25" />
          </div>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-lg font-display text-lg italic leading-relaxed text-invitation-brown/55 md:text-xl">
            Every celebration has its own place,
            <br className="hidden md:block" />
            and every place holds a memory waiting to be made.
          </p>
        </motion.div>

        {/* ================= VENUE CARDS ================= */}
        <div className="mt-16 grid gap-7 md:grid-cols-3 md:gap-8">
          {venues.map((venue, index) => (
            <motion.article
              key={venue.number}
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.9,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group relative overflow-hidden
                border border-invitation-gold/20
                bg-invitation-cream/60
                px-7 py-8
                backdrop-blur-[2px]
                transition-all duration-700
                hover:border-invitation-gold/40
                hover:shadow-[0_25px_70px_rgba(73,53,42,0.10)]
                md:px-8 md:py-9
              "
            >
              {/* Inner premium border */}
              <div className="pointer-events-none absolute inset-2 border border-invitation-gold/[0.07]" />

              {/* Hover glow */}
              <div
                className="
                  pointer-events-none absolute
                  -right-20 -top-20
                  h-40 w-40
                  rounded-full
                  bg-invitation-gold/[0.06]
                  blur-3xl
                  opacity-0
                  transition-opacity duration-700
                  group-hover:opacity-100
                "
              />

              <div className="relative z-10">

                {/* Top Row */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-display text-4xl font-light text-invitation-gold/50">
                      {venue.number}
                    </span>

                    <div className="mt-2 h-px w-8 bg-invitation-gold/30 transition-all duration-500 group-hover:w-14" />
                  </div>

                  <div
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-full
                      border border-invitation-gold/20
                      transition-all duration-500
                      group-hover:border-invitation-gold/40
                      group-hover:rotate-6
                    "
                  >
                    <MapPin
                      size={17}
                      strokeWidth={1.2}
                      className="text-invitation-gold"
                    />
                  </div>
                </div>

                {/* Event */}
                <div className="mt-9">
                  <p className="text-[8px] font-medium uppercase tracking-[0.4em] text-invitation-sage">
                    {venue.event}
                  </p>

                  <h3
                    className="
                      mt-4
                      max-w-[250px]
                      font-display
                      text-[2rem]
                      leading-[1.08]
                      text-invitation-maroon
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                    "
                  >
                    {venue.name}
                  </h3>
                </div>

                {/* Divider */}
                <div className="my-7 h-px w-full bg-invitation-gold/15" />

                {/* Details */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={14}
                      strokeWidth={1.3}
                      className="mt-0.5 shrink-0 text-invitation-gold/60"
                    />

                    <p className="text-sm leading-relaxed text-invitation-brown/65">
                      {venue.location}
                    </p>
                  </div>

                  <p className="pl-7 text-[11px] uppercase tracking-[0.18em] text-invitation-brown/40">
                    {venue.date}
                  </p>
                </div>

                {/* Directions */}
                <a
                  href={venue.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    relative mt-8 flex w-full
                    items-center justify-between
                    overflow-hidden
                    border border-invitation-gold/25
                    px-5 py-4
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.32em]
                    text-invitation-maroon
                    transition-all
                    duration-500
                    hover:border-invitation-maroon
                    hover:bg-invitation-maroon
                    hover:text-invitation-cream
                  "
                >
                  <span className="flex items-center gap-3">
                    <Navigation
                      size={13}
                      strokeWidth={1.3}
                    />

                    Get Directions
                  </span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.2}
                    className="
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ================= CLOSING ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.4,
            duration: 1,
          }}
          className="mt-20 text-center"
        >
          <div className="mx-auto flex items-center justify-center gap-4">
            <span className="h-px w-14 bg-invitation-gold/20" />

            <span className="text-lg text-invitation-gold/70">
              ❦
            </span>

            <span className="h-px w-14 bg-invitation-gold/20" />
          </div>

          <p className="mx-auto mt-7 max-w-xl font-display text-xl italic leading-relaxed text-invitation-brown/55 md:text-2xl">
            Your presence will make every celebration
            <br className="hidden md:block" />
            more special.
          </p>

          <p className="mt-6 text-[8px] uppercase tracking-[0.45em] text-invitation-gold/50">
            We cannot wait to celebrate with you
          </p>
        </motion.div>

      </div>
    </section>
  );
}