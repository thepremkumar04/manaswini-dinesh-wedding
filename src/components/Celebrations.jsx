import { motion } from "framer-motion";
import { MapPin, Clock, CalendarDays } from "lucide-react";
import Reveal from "./Reveal";

const events = [
  {
    date: "11",
    month: "October",
    year: "2026",
    title: "Haldi",
    time: "6:30 AM onwards",
    venue: "Bride's House & Groom's House",
    location: "Naidupet",
    description: "Haldi celebrations will take place simultaneously at both houses.",
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
    description: "A beautiful traditional celebration bringing both families together.",
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
    description: "An evening of music, dance, laughter, and celebration.",
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
    description: "Join us as Manaswini and Dinesh begin their beautiful journey together.",
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
    description: "An evening of celebration, joy, and togetherness.",
    map: "https://maps.app.goo.gl/1HtLraKDxQbrEWoC9",
  },
];

export default function Celebrations() {
  return (
    <section className="section-transition relative overflow-hidden bg-invitation-cream px-6 py-24 md:py-32">
      {/* Paper texture */}
      <div className="invitation-paper absolute inset-0 opacity-60" />

      {/* Decorative ornaments */}
      <div className="decorative absolute left-4 top-24 text-6xl text-invitation-sage/10 md:left-12 md:text-8xl">
        ❧
      </div>

      <div className="decorative absolute right-4 bottom-24 rotate-180 text-6xl text-invitation-maroon/10 md:right-12 md:text-8xl">
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
            Save the dates
          </p>

          <h2 className="mt-4 font-display text-5xl text-invitation-maroon md:text-6xl">
            Our Celebrations
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-invitation-gold/40" />
            <span className="text-sm text-invitation-gold">✦</span>
            <span className="h-px w-12 bg-invitation-gold/40" />
          </div>

          <p className="mx-auto mt-6 max-w-xl font-display text-lg italic text-invitation-brown/55 md:text-xl">
            Six beautiful occasions, one unforgettable celebration.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">

          {/* Center line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-invitation-gold/20 md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-14">
            {events.map((event, index) => (
              <motion.div
                key={`${event.title}-${event.date}`}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -35 : 35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative md:flex ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-8 hidden h-5 w-5 items-center justify-center rounded-full border border-invitation-gold bg-invitation-cream md:left-1/2 md:flex md:-translate-x-1/2">
                  <span className="h-1.5 w-1.5 rounded-full bg-invitation-maroon" />
                </div>

                {/* Event card */}
                <div
                  className={`w-full md:w-[44%] ${
                    event.highlight
                      ? "border-invitation-gold bg-invitation-ivory shadow-[0_18px_50px_rgba(116,31,42,0.10)]"
                      : "border-invitation-gold/20 bg-invitation-ivory/80"
                  } border p-7 md:p-9`}
                >

                  {/* Date */}
                  <div className="flex items-start gap-5">
                    <div className="min-w-[62px] border-r border-invitation-gold/20 pr-5 text-center">
                      <p className="font-display text-4xl leading-none text-invitation-maroon">
                        {event.date}
                      </p>

                      <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-invitation-gold">
                        {event.month}
                      </p>

                      <p className="mt-1 text-[8px] text-invitation-brown/40">
                        {event.year}
                      </p>
                    </div>

                    <div>
                      <p className="text-[8px] uppercase tracking-[0.35em] text-invitation-sage">
                        {event.highlight
                          ? "The Wedding Day"
                          : "Celebration"}
                      </p>

                      <h3 className="mt-2 font-display text-3xl text-invitation-maroon md:text-4xl">
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px bg-invitation-gold/15" />

                  {/* Time */}
                  <div className="flex items-start gap-3">
                    <Clock
                      size={16}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-invitation-gold"
                    />

                    <p className="text-sm leading-relaxed text-invitation-brown/70">
                      {event.time}
                    </p>
                  </div>

                  {/* Venue */}
                  <div className="mt-4 flex items-start gap-3">
                    <MapPin
                      size={16}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-invitation-gold"
                    />

                    <div>
                      <p className="text-sm font-medium text-invitation-brown/80">
                        {event.venue}
                      </p>

                      <p className="mt-1 text-xs text-invitation-brown/45">
                        {event.location}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-5 font-display text-base italic leading-relaxed text-invitation-brown/55">
                    {event.description}
                  </p>

                  {/* Map button */}
                  {event.map && (
                    <a
                      href={event.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 border border-invitation-gold/40 px-5 py-3 text-[8px] uppercase tracking-[0.3em] text-invitation-maroon transition-all duration-300 hover:bg-invitation-maroon hover:text-invitation-cream"
                    >
                      <MapPin size={13} strokeWidth={1.5} />
                      View Location
                    </a>
                  )}

                  {/* Wedding highlight */}
                  {event.highlight && (
                    <div className="mt-6 border-t border-invitation-gold/15 pt-5">
                      <p className="text-[8px] uppercase tracking-[0.3em] text-invitation-gold">
                        Pushkarakalam
                      </p>

                      <p className="mt-2 font-display text-lg text-invitation-maroon">
                        8:41 AM – 8:45 AM
                      </p>

                      <p className="mt-2 text-[8px] uppercase tracking-[0.25em] text-invitation-sage">
                        Vrushika Lagnam
                      </p>
                    </div>
                  )}

                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 text-center text-xl text-invitation-gold"
        >
          ❦
        </motion.div>

      </div>
    </section>
  );
}