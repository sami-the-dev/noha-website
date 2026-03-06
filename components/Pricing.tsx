"use client";

import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaChild,
  FaUserGraduate,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

const factors = [
  {
    icon: <FaMapMarkerAlt />,
    label: "البلد",
    desc: "تختلف الأسعار حسب الموقع الجغرافي",
  },
  {
    icon: <FaChild />,
    label: "عمر ومستوى الطفل",
    desc: "لتحديد أسلوب التدريس وسرعة الحفظ",
  },
  {
    icon: <FaUserGraduate />,
    label: "مستوى الطالبة",
    desc: "نضمن توافق الحصة مع معرفتها بالتجويد ومستوى القراءة",
  },
];

const sessionOptions = [
  {
    icon: <FaCalendarAlt />,
    title: "عدد الحصص الشهرية",
    options: ["4 حصص / شهر", "8 حصص / شهر", "12 حصة / شهر"],
  },
  {
    icon: <FaClock />,
    title: "مدة الحصة",
    options: ["نصف ساعة", "٤٥ دقيقة", "ساعة كاملة"],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="pt-20 pb-28 sm:pt-28 sm:pb-36 bg-[#0D3B2E] bg-islamic-pattern relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D3B2E]/60 to-[#0D3B2E]/90 pointer-events-none" />

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
            الرسوم الدراسية
          </p>
          <h2 className="text-white text-4xl sm:text-5xl font-black mb-4">
            نظام الأسعار
          </h2>
          <div className="gold-divider">
            <span className="text-[#C9A84C] text-xl">❁</span>
          </div>
          <p className="text-white/70 mt-4 text-base max-w-xl mx-auto">
            السعر يُحدَّد بعد الاتفاق وفقاً لعدة عوامل لضمان تجربة تعليمية مخصصة
            لكل طالب/طالبة
          </p>
        </motion.div>

        {/* Factors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {factors.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-white/8 border border-[#C9A84C]/25 rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-white/12 transition-all duration-300"
            >
              <div className="text-4xl mb-3 text-[#E8C96A] flex justify-center">
                {f.icon}
              </div>
              <h3 className="text-[#E8C96A] font-bold text-base mb-2">
                {f.label}
              </h3>
              <p className="text-white/65 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Session options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {sessionOptions.map((opt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              className="bg-white/8 border border-[#C9A84C]/25 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl text-[#E8C96A]">{opt.icon}</span>
                <h3 className="text-[#E8C96A] font-bold text-base">
                  {opt.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {opt.options.map((o) => (
                  <span
                    key={o}
                    className="bg-[#1B5E3B]/60 border border-[#4CAF7D]/30 text-white/85 text-sm px-4 py-2 rounded-full"
                  >
                    {o}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-white/70 text-base mb-6">
            تواصلي معنا عبر واتساب لمعرفة السعر المناسب لظروفك
          </p>
          <a
            href="https://wa.me/201068413284?text=السلام%20عليكم%2C%20أريد%20الاستفسار%20عن%20الأسعار"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base px-8 py-3.5 inline-flex"
          >
            <FaWhatsapp size={20} />
            استفسر عن السعر الآن
          </a>
        </motion.div>
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
