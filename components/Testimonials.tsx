"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSearchPlus,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

const TOTAL = 23;
const images = Array.from({ length: TOTAL }, (_, i) => ({
  src: `/testomoials/testimonial-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `رأي ولي أمر ${i + 1}`,
}));

export default function Testimonials() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!rowRef.current) return;
    const amount = 360;
    rowRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#FDFAF3]">
      <div className="site-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#C9A84C] font-semibold tracking-widest text-sm uppercase mb-2">
            ماذا قالوا عنا؟
          </p>
          <h2 className="section-title mb-4">آراء أولياء الأمور</h2>
          <div className="gold-divider">
            <span className="text-[#C9A84C] text-xl">❁</span>
          </div>
        </motion.div>

        {/* Scroll controls */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => scroll("right")}
            aria-label="السابق"
            className="w-10 h-10 rounded-full bg-[#1B5E3B] text-white flex items-center justify-center hover:bg-[#2D7A50] transition-colors shadow-md"
          >
            <FaChevronRight size={14} />
          </button>
          <button
            onClick={() => scroll("left")}
            aria-label="التالي"
            className="w-10 h-10 rounded-full bg-[#1B5E3B] text-white flex items-center justify-center hover:bg-[#2D7A50] transition-colors shadow-md"
          >
            <FaChevronLeft size={14} />
          </button>
        </div>

        {/* Scrollable row */}
        <div
          ref={rowRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-8 pt-4 px-2 snap-x snap-mandatory"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: Math.min(i * 0.05, 0.5), duration: 0.4 }}
              className="group flex-shrink-0 w-80 sm:w-80 rounded-2xl overflow-hidden shadow-md border border-[#E8EDE8] snap-start bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className="relative h-[440px] w-full cursor-pointer"
                onClick={() => setSelectedIndex(i)}
              >
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0D3B2E]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-white/20 p-4 rounded-full backdrop-blur-md transform scale-50 group-hover:scale-100 transition-transform duration-300 mt-10 group-hover:mt-0">
                    <FaSearchPlus className="text-white text-3xl drop-shadow-lg" />
                  </div>
                </div>

                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="320px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Caption Area */}
              <div className="p-4 bg-gradient-to-b from-white to-[#FDFAF3] border-t border-[#E8EDE8] text-center relative overflow-hidden">
                <div className="absolute -top-3 -right-2 text-[#C9A84C] opacity-10 transform -scale-x-100">
                  <FaQuoteLeft size={50} />
                </div>

                <div className="flex justify-center gap-1 mt-2 relative z-10">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <FaStar key={idx} className="text-[#E8C96A] text-[20px]" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-1.5 mt-6">
          {Array.from({ length: Math.ceil(TOTAL / 4) }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-[#1B5E3B]/30" />
          ))}
        </div>
      </div>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute -top-12 right-0 text-white hover:text-[#E8C96A] transition-colors"
                onClick={() => setSelectedIndex(null)}
                aria-label="إغلاق"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Navigation Left (Next) */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-12 z-10">
                <button
                  aria-label="التالي"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1B5E3B]/80 hover:bg-[#1B5E3B] text-white flex items-center justify-center transition-colors shadow-lg backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((prev) => (prev! + 1) % TOTAL);
                  }}
                >
                  <FaChevronLeft size={16} />
                </button>
              </div>

              {/* Navigation Right (Previous) */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-12 z-10">
                <button
                  aria-label="السابق"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1B5E3B]/80 hover:bg-[#1B5E3B] text-white flex items-center justify-center transition-colors shadow-lg backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((prev) => (prev! - 1 + TOTAL) % TOTAL);
                  }}
                >
                  <FaChevronRight size={16} />
                </button>
              </div>

              <div className="relative w-full h-[80vh] bg-transparent">
                <Image
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
