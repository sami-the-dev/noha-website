"use client";

import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaStar,
  FaQuran,
  FaAward,
  FaGraduationCap,
} from "react-icons/fa";
import { HiLocationMarker, HiPhone } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 bg-[#0D3B2E] overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 object-center pointer-events-none"
      >
        <source
          src="/istockphoto-1428768829-640_adpp_is.mp4"
          type="video/mp4"
        />
      </video>

      {/* Radial glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D3B2E]/80 via-[#1B5E3B]/60 to-[#0D3B2E]/90 pointer-events-none" />

      {/* Decorative arcs / circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A84C]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-[#C9A84C]/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto w-full py-14">
        {/* Arabic decorative bismillah-style heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A84C]" />
          <FaQuran className="text-[#E8C96A] text-2xl" />
          <span className="text-[#E8C96A] font-display text-xl">
            بسم الله الرحمن الرحيم
          </span>
          <FaQuran className="text-[#E8C96A] text-2xl" />
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A84C]" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-3 leading-tight"
        >
          نهى بدران
        </motion.h1>

        {/* Title badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-[#C9A84C]/20 border border-[#C9A84C]/50 text-[#E8C96A] text-lg sm:text-xl font-bold px-6 py-2 rounded-full mb-6 backdrop-blur-sm"
        >
          <FaAward className="text-xl" />
          <span>معلمة قرآن كريم للأطفال والنساء</span>
        </motion.div>

        {/* Stars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex justify-center gap-1.5 mb-6"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} className="text-[#E8C96A] text-lg" />
          ))}
        </motion.div>

        {/* Info chips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10 text-white/80"
        >
          <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm">
            <HiLocationMarker className="text-[#E8C96A]" />
            مصر
          </span>
          <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm">
            <HiPhone className="text-[#E8C96A]" />
            01068413284
          </span>
          <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm">
            <FaGraduationCap className="text-[#E8C96A] text-lg" />
            خبرة مع الأكاديميات
          </span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/201068413284?text=السلام%20عليكم%2C%20أريد%20الاستفسار%20عن%20حلقات%20تحفيظ%20القرآن"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base px-8 py-3.5 w-full sm:w-auto justify-center"
          >
            <FaWhatsapp size={20} />
            ابدأ رحلتك مع القرآن
          </a>
          <a
            href="#about"
            className="text-[#E8C96A] border border-[#E8C96A] hover:bg-[#E8C96A] hover:text-[#0D3B2E] transition-colors duration-300 rounded-full text-base px-8 py-3.5 w-full sm:w-auto justify-center flex items-center"
          >
            تعرف علينا أكثر ↓
          </a>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#FDFAF3"
          />
        </svg>
      </div>
    </section>
  );
}
