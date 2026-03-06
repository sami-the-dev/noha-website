"use client";

import { motion, type Variants } from "framer-motion";
import {
  FaBookReader,
  FaMicrophoneAlt,
  FaChalkboardTeacher,
  FaHandsHelping,
} from "react-icons/fa";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, type: "tween" },
  }),
};

const courses = [
  {
    icon: <FaBookReader />,
    title: "نور البيان",
    sub: "تعليم القراءة الصحيحة للمبتدئين",
  },
  {
    icon: <FaMicrophoneAlt />,
    title: "أحكام التجويد",
    sub: "ضبط مخارج الحروف والأحكام",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "مهارات التدريس",
    sub: "أساليب تربوية حديثة وفعّالة",
  },
  {
    icon: <FaHandsHelping />,
    title: "فن التواصل مع الطلاب",
    sub: "بناء علاقة إيجابية وتحفيزية",
  },
];

export default function Qualifications() {
  return (
    <section
      id="qualifications"
      className="pt-20 pb-28 sm:pt-28 sm:pb-36 bg-[#0D3B2E] bg-islamic-pattern relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D3B2E]/80 to-[#1B5E3B]/50 pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#C9A84C] font-semibold tracking-widest text-sm uppercase mb-2">
            الكفاءة العلمية
          </p>
          <h2 className="text-white text-4xl sm:text-5xl font-black mb-4">
            المؤهلات والدورات
          </h2>
          <div className="gold-divider">
            <span className="text-[#C9A84C] text-xl">❁</span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
              variants={fadeUp}
              className="relative rounded-2xl bg-white/8 border border-[#C9A84C]/30 backdrop-blur-sm p-6 text-center hover:bg-white/12 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Gold top bar */}
              <div className="absolute top-0 right-6 left-6 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent rounded-full" />

              <div className="text-4xl mb-4 mt-2 text-[#E8C96A] flex justify-center">
                {c.icon}
              </div>
              <h3 className="text-[#E8C96A] font-bold text-base mb-2">
                {c.title}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">{c.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12"
        >
          <path
            d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z"
            fill="#FDFAF3"
          />
        </svg>
      </div>
    </section>
  );
}
