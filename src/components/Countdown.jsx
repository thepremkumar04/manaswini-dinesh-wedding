import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const weddingDate = new Date(
  "2026-10-16T08:15:00+05:30"
).getTime();

function getTimeLeft() {
  const difference = weddingDate - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(
      difference / (1000 * 60 * 60 * 24)
    ),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

function TimeBox({ value, label, highlight = false }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={`group relative w-[72px] overflow-hidden rounded-sm border px-2 py-5 text-center shadow-sm sm:w-[92px] sm:px-4 sm:py-6 md:w-[112px] md:py-7 ${
        highlight
          ? "border-invitation-gold/45 bg-invitation-maroon"
          : "border-invitation-gold/20 bg-white/65"
      }`}
    >
      {/* Soft inner glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-invitation-gold/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Top ornament */}
      <div className="relative mb-3 flex justify-center">
        <span
          className={`h-px w-5 ${
            highlight
              ? "bg-invitation-gold/60"
              : "bg-invitation-gold/30"
          }`}
        />
      </div>

      {/* Number */}
      <motion.p
        key={value}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className={`relative font-display text-4xl leading-none sm:text-5xl md:text-6xl ${
          highlight
            ? "text-invitation-cream"
            : "text-invitation-maroon"
        }`}
      >
        {String(value).padStart(2, "0")}
      </motion.p>

      {/* Label */}
      <p
        className={`relative mt-3 text-[7px] uppercase tracking-[0.28em] sm:text-[8px] ${
          highlight
            ? "text-invitation-gold"
            : "text-invitation-sage"
        }`}
      >
        {label}
      </p>
    </motion.div>
  );
}

function Separator() {
  return (
    <div className="hidden items-center justify-center self-center sm:flex">
      <span className="font-display text-2xl text-invitation-gold/60 md:text-3xl">
        :
      </span>
    </div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const weddingStarted =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <section className="section-transition relative overflow-hidden bg-invitation-ivory px-5 py-24 sm:px-8 md:px-12 md:py-32">

      {/* Paper texture */}
      <div className="invitation-paper absolute inset-0 opacity-60" />

      {/* Ambient gold glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-invitation-gold/10 blur-3xl md:h-[500px] md:w-[500px]"
      />

      {/* Decorative rings */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-invitation-gold/10 sm:h-[430px] sm:w-[430px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-invitation-gold/[0.07] sm:h-[350px] sm:w-[350px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          <span className="h-px w-10 bg-invitation-gold/35 sm:w-16" />

          <p className="text-[8px] uppercase tracking-[0.45em] text-invitation-gold sm:text-[9px]">
            The countdown begins
          </p>

          <span className="h-px w-10 bg-invitation-gold/35 sm:w-16" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: 0.12,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 font-display text-4xl leading-tight text-invitation-maroon sm:text-5xl md:text-6xl"
        >
          Until We Say{" "}
          <span className="italic text-invitation-gold">
            "I Do"
          </span>
        </motion.h2>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6"
        >
          <p className="font-display text-lg italic text-invitation-brown/55 sm:text-xl">
            16 October 2026
          </p>

          <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-invitation-sage">
            8:15 AM • PLR Convention Centre
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            delay: 0.4,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-12 flex max-w-3xl items-center justify-center gap-1 sm:gap-2 md:gap-3"
        >
          <TimeBox
            value={timeLeft.days}
            label="Days"
            highlight
          />

          <Separator />

          <TimeBox
            value={timeLeft.hours}
            label="Hours"
          />

          <Separator />

          <TimeBox
            value={timeLeft.minutes}
            label="Minutes"
          />

          <Separator />

          <TimeBox
            value={timeLeft.seconds}
            label="Seconds"
          />
        </motion.div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.7,
            duration: 0.9,
          }}
          className="mt-12"
        >
          {weddingStarted ? (
            <div className="flex flex-col items-center">
              <Heart
                size={17}
                strokeWidth={1.3}
                className="mb-3 fill-invitation-gold text-invitation-gold"
              />

              <p className="font-display text-2xl italic text-invitation-maroon sm:text-3xl">
                The celebration has begun.
              </p>
            </div>
          ) : (
            <>
              <p className="mx-auto max-w-lg font-display text-base italic leading-relaxed text-invitation-brown/50 sm:text-lg">
                Counting every moment until our special day arrives.
              </p>

              <div className="mt-7 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-invitation-gold/25" />

                <span className="text-sm text-invitation-gold">
                  ❦
                </span>

                <span className="h-px w-10 bg-invitation-gold/25" />
              </div>
            </>
          )}
        </motion.div>

      </div>
    </section>
  );
}