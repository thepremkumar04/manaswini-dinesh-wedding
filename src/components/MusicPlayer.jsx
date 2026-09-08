import { useEffect, useRef, useState } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicPlayer({ audioRef }) {
  const [isPlaying, setIsPlaying] = useState(false);


  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Unable to play music:", error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/wedding-music.mp3"
        preload="auto"
      />

      <motion.button
        type="button"
        onClick={toggleMusic}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        aria-label={isPlaying ? "Pause wedding music" : "Play wedding music"}
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-invitation-gold/50 bg-invitation-maroon text-invitation-cream shadow-[0_10px_30px_rgba(116,31,42,0.2)] transition-all duration-300 hover:bg-invitation-gold hover:text-invitation-maroon md:bottom-7 md:right-7"
      >
        {isPlaying ? (
          <Volume2 size={18} strokeWidth={1.5} />
        ) : (
          <VolumeX size={18} strokeWidth={1.5} />
        )}

        {isPlaying && (
          <motion.span
            className="absolute inset-[-5px] rounded-full border border-invitation-gold/30"
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.button>

      {/* Small music indicator */}
      <div className="fixed bottom-6 right-[4.6rem] z-50 hidden items-center gap-2 rounded-full border border-invitation-gold/20 bg-invitation-cream/90 px-3 py-2 shadow-sm backdrop-blur-sm sm:flex">
        <Music
          size={12}
          strokeWidth={1.5}
          className="text-invitation-gold"
        />

        <span className="text-[7px] uppercase tracking-[0.25em] text-invitation-brown/50">
          {isPlaying ? "Music On" : "Music"}
        </span>
      </div>
    </>
  );
}