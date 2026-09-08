import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
} from "lucide-react";

const photos = [
  {
    src: "/gallery/photo-01.jpeg",
    alt: "Manaswini and Dinesh wedding portrait",
    size: "large",
  },
  {
    src: "/gallery/photo-02.jpeg",
    alt: "Manaswini and Dinesh together",
    size: "small",
  },
  {
    src: "/gallery/photo-03.jpeg",
    alt: "Wedding celebration",
    size: "small",
  },
  {
    src: "/gallery/photo-04.jpeg",
    alt: "Manaswini and Dinesh portrait",
    size: "medium",
  },
  {
    src: "/gallery/photo-05.jpeg",
    alt: "Wedding memories",
    size: "medium",
  },
  {
    src: "/gallery/photo-06.jpeg",
    alt: "Manaswini and Dinesh celebration",
    size: "large",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? photos.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === photos.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeImage();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <>
      <section className="relative bg-invitation-cream px-5 py-24 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="mb-14 text-center"
          >
            <p className="mb-3 font-sans text-xs uppercase tracking-[0.35em] text-invitation-gold">
              A collection of moments
            </p>

            <h2 className="font-display text-5xl text-invitation-maroon sm:text-6xl">
              Our Memories
            </h2>

            <div className="gold-divider mx-auto mt-6 h-px w-24" />

            <p className="mx-auto mt-6 max-w-xl font-sans text-sm leading-7 text-invitation-brown/70 sm:text-base">
              A glimpse into the moments, smiles, and memories that brought
              Manaswini & Dinesh to this beautiful celebration.
            </p>
          </motion.div>

          {/* Cinematic Gallery */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">

            {photos.map((photo, index) => (
              <motion.button
                key={photo.src}
                type="button"
                onClick={() => openImage(index)}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className={`
                  group relative overflow-hidden rounded-2xl
                  border border-invitation-gold/20
                  bg-invitation-ivory
                  text-left shadow-sm
                  focus:outline-none
                  focus:ring-2
                  focus:ring-invitation-gold/60
                  ${
                    photo.size === "large"
                      ? "col-span-2 row-span-2 min-h-[380px] sm:min-h-[500px]"
                      : photo.size === "medium"
                      ? "col-span-1 min-h-[260px] sm:min-h-[320px]"
                      : "col-span-1 min-h-[220px] sm:min-h-[260px]"
                  }
                `}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading={index < 2 ? "eager" : "lazy"}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60 transition duration-500 group-hover:opacity-90" />

                {/* Expand icon */}
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md opacity-0 transition duration-300 group-hover:opacity-100">
                  <Maximize2 size={16} strokeWidth={1.5} />
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/70">
                    Memory {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Wedding photo viewer"
            onClick={closeImage}
          >
            {/* Close */}
            <button
              type="button"
              onClick={closeImage}
              aria-label="Close photo viewer"
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <X size={21} />
            </button>

            {/* Previous */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous photo"
              className="absolute left-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35 }}
              className="relative flex max-h-[88vh] max-w-[88vw] items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={photos[selectedIndex].src}
                alt={photos[selectedIndex].alt}
                className="max-h-[88vh] max-w-[88vw] rounded-lg object-contain shadow-2xl"
              />
            </motion.div>

            {/* Next */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
              className="absolute right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-6"
            >
              <ChevronRight size={24} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-sans text-xs tracking-[0.25em] text-white/80 backdrop-blur-md">
              {String(selectedIndex + 1).padStart(2, "0")} /{" "}
              {String(photos.length).padStart(2, "0")}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}