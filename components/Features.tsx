"use client";

import { motion } from "framer-motion";
import {
  FaSeedling,
  FaSyncAlt,
  FaPuzzlePiece,
  FaPenNib,
  FaBullseye,
  FaHeart,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55 },
  }),
};

const items = [
  {
    icon: <FaSeedling />,
    text: "بيئة تعليمية هادئة ومشجعة تساعد الطالب على التعلم براحة وثقة",
  },
  {
    icon: <FaSyncAlt />,
    text: "متابعة مستمرة للحفظ والمراجعة لضمان تثبيت القرآن",
  },
  { icon: <FaPuzzlePiece />, text: "أسلوب مبسط يناسب الأطفال والمبتدئين" },
  {
    icon: <FaPenNib />,
    text: "تصحيح التلاوة بشكل دقيق ومساعدة الطالب على تحسين القراءة تدريجيًا",
  },
  {
    icon: <FaBullseye />,
    text: "استخدام وسائل تحفيزية للأطفال تساعد على زيادة الحماس للحفظ",
  },
  {
    icon: <FaHeart />,
    text: "الاهتمام ببناء علاقة إيجابية بين الطالب والقرآن الكريم",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-[#FDFAF3]">
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
            لماذا تختارنا؟
          </p>
          <h2 className="section-title mb-4">مميزات التعلم في الحلقات</h2>
          <div className="gold-divider">
            <span className="text-[#C9A84C] text-xl">❁</span>
          </div>
        </motion.div>

        {/* Feature list — alternating layout */}
        <div className="space-y-5">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              variants={fadeUp}
              className={`flex items-start gap-5 rounded-2xl p-5 sm:p-6 border border-[#E8EDE8] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                i % 2 === 0 ? "bg-white" : "bg-[#E8F5EE]"
              }`}
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#1B5E3B]/10 flex items-center justify-center text-2xl text-[#1B5E3B]">
                {item.icon}
              </div>
              <p className="text-[#1A1A1A] text-base font-medium leading-relaxed pt-2">
                {item.text}
              </p>
              {/* Gold accent line */}
              <div className="ms-auto flex-shrink-0 w-1 self-stretch rounded-full bg-gradient-to-b from-[#C9A84C] to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
