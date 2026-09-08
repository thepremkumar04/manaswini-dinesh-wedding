import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

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
    <section className="section-transition relative overflow-hidden bg-invitation-ivory px-6 py-24 md:py-32">
      <div className="invitation-paper absolute inset-0 opacity-70" />

      {/* Decorative background elements */}
      <div className="decorative absolute -left-20 top-20 h-56 w-56 rounded-full border border-invitation-gold/10 md:h-80 md:w-80" />

      <div className="decorative absolute -right-20 bottom-20 h-56 w-56 rounded-full border border-invitation-maroon/10 md:h-80 md:w-80" />

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
            Find your way to the celebrations
          </p>

          <h2 className="mt-4 font-display text-5xl text-invitation-maroon md:text-6xl">
            Our Venues
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-invitation-gold/40" />

            <span className="text-sm text-invitation-gold">
              ✦
            </span>

            <span className="h-px w-12 bg-invitation-gold/40" />
          </div>

          <p className="mx-auto mt-6 max-w-xl font-display text-lg italic text-invitation-brown/55 md:text-xl">
            We look forward to welcoming you at every celebration.
          </p>
        </motion.div>

        {/* Venue cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {venues.map((venue, index) => (
            <motion.article
              key={venue.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.75,
                delay: index * 0.12,
              }}
              whileHover={{ y: -5 }}
              className="group border border-invitation-gold/20 bg-invitation-cream/70 p-7 transition-shadow duration-500 hover:shadow-[0_18px_45px_rgba(73,53,42,0.08)] md:p-8"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl text-invitation-gold/60">
                  {venue.number}
                </span>

                <MapPin
                  size={19}
                  strokeWidth={1.3}
                  className="text-invitation-gold"
                />
              </div>

              {/* Event */}
              <p className="mt-8 text-[8px] uppercase tracking-[0.35em] text-invitation-sage">
                {venue.event}
              </p>

              {/* Venue */}
              <h3 className="mt-3 font-display text-3xl leading-tight text-invitation-maroon">
                {venue.name}
              </h3>

              {/* Details */}
              <div className="mt-6 border-t border-invitation-gold/15 pt-5">
                <p className="text-sm text-invitation-brown/65">
                  {venue.location}
                </p>

                <p className="mt-2 text-xs text-invitation-brown/40">
                  {venue.date}
                </p>
              </div>

              {/* Button */}
              <a
                href={venue.map}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 border border-invitation-gold/35 px-4 py-3 text-[8px] uppercase tracking-[0.3em] text-invitation-maroon transition-all duration-300 hover:bg-invitation-maroon hover:text-invitation-cream"
              >
                <Navigation size={13} strokeWidth={1.4} />
                Get Directions
              </a>
            </motion.article>
          ))}
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-14 text-center"
        >
          <p className="font-display text-xl italic text-invitation-brown/55 md:text-2xl">
            Your presence will make every celebration more special.
          </p>

          <div className="mt-8 text-xl text-invitation-gold">
            ❦
          </div>
        </motion.div>

      </div>
    </section>
  );
}