"use client";

import { motion, type Variants } from "framer-motion";
import {
  FaHeart,
  FaMicrophoneAlt,
  FaBookOpen,
  FaGraduationCap,
  FaStar,
  FaLightbulb,
  FaUserAlt,
  FaMosque,
} from "react-icons/fa";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, type: "tween" },
  }),
};

const features = [
  {
    icon: <FaHeart />,
    text: "متخصصة في تعليم الأطفال والنساء بطريقة مبسطة تساعد على إتقان التلاوة وحفظ القرآن بسهولة.",
  },
  {
    icon: <FaMicrophoneAlt />,
    text: "خبرة في تعليم الأطفال باستخدام أسلوب التلقين والترديد الذي يساعد الطفل على الحفظ بثقة وبدون صعوبة.",
  },
  {
    icon: <FaBookOpen />,
    text: "الاهتمام بتصحيح التلاوة وضبط مخارج الحروف ومتابعة الحفظ والمراجعة بشكل مستمر.",
  },
  {
    icon: <FaGraduationCap />,
    text: "تقديم شرح مبسط لأحكام التجويد بطريقة سهلة تناسب المبتدئين.",
  },
  {
    icon: <FaStar />,
    text: "استخدام أساليب تحفيزية بسيطة مع الأطفال تساعد على حب القرآن والارتباط به منذ الصغر.",
  },
  {
    icon: <FaLightbulb />,
    text: "مراعاة الفروق الفردية بين الطلاب واختيار الطريقة المناسبة لكل طالب حسب مستواه.",
  },
  {
    icon: <FaUserAlt />,
    text: "خبرة في التعامل مع الأطفال والنساء في مراحل تعلم القرآن المختلفة.",
  },
  {
    icon: <FaMosque />,
    text: "العمل سابقاً مع أكاديمية متخصصة في تعليم القرآن الكريم.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-islamic-pattern-light">
      <div className="site-container">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <p className="text-[#C9A84C] font-semibold tracking-widest text-sm uppercase mb-2">
            من أنا
          </p>
          <h2 className="section-title mb-4">نبذة تعريفية</h2>
          <div className="gold-divider">
            <span className="text-[#C9A84C] text-xl">❁</span>
          </div>
          <p className="section-subtitle mt-3 text-[#4A4A4A]">
            رحلة مع القرآن الكريم تبدأ بخطوة واحدة — تعلّم مع معلمة تُحبّ ما
            تفعل
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
              variants={fadeUp}
              className="card-islamic text-center"
            >
              <div className="text-4xl text-[#1B5E3B] mb-4 flex justify-center">
                {item.icon}
              </div>
              <p className="text-[#1A1A1A] text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
