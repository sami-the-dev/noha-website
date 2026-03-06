"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChild,
  FaFemale,
  FaBookReader,
  FaBookOpen,
  FaMicrophoneAlt,
  FaRedo,
  FaGamepad,
  FaVideo,
  FaCalendarAlt,
  FaExclamationTriangle,
  FaSyncAlt,
  FaSearch,
  FaPen,
  FaBook,
  FaPhoneAlt,
  FaMapPin,
  FaSeedling,
  FaCheckCircle,
} from "react-icons/fa";

type Tab = "children" | "women-hifz" | "women-tilawa";

const tabs: {
  id: Tab;
  label: string;
  icon: React.ReactNode;
  colorClass: string;
}[] = [
  {
    id: "children",
    label: "حلقات الأطفال",
    icon: <FaChild />,
    colorClass: "text-[var(--rose)] border-[var(--rose)]",
  },
  {
    id: "women-hifz",
    label: "حفظ ومراجعة النساء",
    icon: <FaFemale />,
    colorClass: "text-[var(--primary)] border-[var(--primary)]",
  },
  {
    id: "women-tilawa",
    label: "تصحيح التلاوة",
    icon: <FaBookReader />,
    colorClass: "text-[var(--gold)] border-[var(--gold)]",
  },
];

const content: Record<
  Tab,
  {
    system: { icon: React.ReactNode; text: string }[];
    conditions: { icon: React.ReactNode; text: string }[];
  }
> = {
  children: {
    system: [
      { icon: <FaBookOpen />, text: "تسميع الحفظ الجديد" },
      { icon: <FaMicrophoneAlt />, text: "التحفيظ بالترديد مع المعلمة" },
      { icon: <FaRedo />, text: "تسميع المراجعة" },
      {
        icon: <FaGamepad />,
        text: "لعبة تحفيزية في نهاية الحصة لزيادة حب الطفل للقرآن",
      },
    ],
    conditions: [
      {
        icon: <FaVideo />,
        text: "فتح الكاميرا أثناء الحصة أمر أساسي لضمان التفاعل والتركيز",
      },
      {
        icon: <FaCalendarAlt />,
        text: "التأجيل متاح مرتين فقط خلال الشهر ويتم التعويض في يوم مناسب للطرفين",
      },
      {
        icon: <FaExclamationTriangle />,
        text: "في حالة التأجيل أكثر من مرتين يكون من الصعب تعويض باقي الحصص",
      },
      {
        icon: <FaSyncAlt />,
        text: "في حالة تأجيل الحصة من جانب المعلمة يتم التعويض غالبًا خلال نفس الأسبوع",
      },
    ],
  },
  "women-hifz": {
    system: [
      { icon: <FaBookOpen />, text: "تسميع الحفظ الجديد" },
      { icon: <FaSearch />, text: "مراجعة المتشابهات" },
      { icon: <FaRedo />, text: "تسميع المراجعة" },
      { icon: <FaPen />, text: "قراءة الطالبة وتصحيح القراءة" },
      { icon: <FaBook />, text: "شرح قاعدة تجويدية عند الحاجة" },
    ],
    conditions: [
      {
        icon: <FaPhoneAlt />,
        text: "الحصة تكون عن طريق اتصال تليفوني أو ماسنجر أو واتساب حسب المتاح للطالبة",
      },
      {
        icon: <FaCalendarAlt />,
        text: "التأجيل متاح مرتين فقط خلال الشهر ويتم التعويض في يوم مناسب للطرفين",
      },
      {
        icon: <FaExclamationTriangle />,
        text: "في حالة التأجيل أكثر من مرتين يكون من الصعب تعويض باقي الحصص",
      },
      {
        icon: <FaSyncAlt />,
        text: "في حالة تأجيل الحصة من جانب المعلمة يتم التعويض غالبًا خلال نفس الأسبوع",
      },
    ],
  },
  "women-tilawa": {
    system: [
      {
        icon: <FaMapPin />,
        text: "اختبار بسيط في بداية الحلقة على ما تم قراءته في الحصة السابقة",
      },
      { icon: <FaBookOpen />, text: "قراءة الطالبة للورد الجديد" },
      { icon: <FaPen />, text: "تصحيح التلاوة وضبط مخارج الحروف" },
      { icon: <FaBook />, text: "شرح قاعدة تجويدية عند الحاجة" },
    ],
    conditions: [
      {
        icon: <FaPhoneAlt />,
        text: "الحصة تكون عن طريق اتصال تليفوني أو ماسنجر أو واتساب حسب المتاح للطالبة",
      },
      {
        icon: <FaCalendarAlt />,
        text: "التأجيل متاح مرتين فقط خلال الشهر ويتم التعويض في يوم مناسب للطرفين",
      },
      {
        icon: <FaExclamationTriangle />,
        text: "في حالة التأجيل أكثر من مرتين يكون من الصعب تعويض باقي الحصص",
      },
      {
        icon: <FaSyncAlt />,
        text: "في حالة تأجيل الحصة من جانب المعلمة يتم التعويض غالبًا خلال نفس الأسبوع",
      },
    ],
  },
};

export default function ClassSystems() {
  const [active, setActive] = useState<Tab>("children");

  return (
    <section id="classes" className="py-20 sm:py-28 bg-islamic-pattern-light">
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
            تفاصيل الحلقات
          </p>
          <h2 className="section-title mb-4">نظام الحصص</h2>
          <div className="gold-divider">
            <span className="text-[#C9A84C] text-xl">❁</span>
          </div>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex justify-center mb-10 relative z-10">
          <div className="inline-flex flex-wrap justify-center bg-white border border-[#C9A84C]/30 rounded-full p-2 shadow-sm gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold transition-all duration-300 ${
                  active === tab.id
                    ? "bg-[#0D3B2E] text-[#E8C96A] shadow-md transform scale-105"
                    : "bg-transparent text-[#1B5E3B] hover:bg-[#1B5E3B]/5 hover:text-[#0D3B2E]"
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* System card */}
            <div className="bg-white rounded-2xl shadow-md border border-[#E8EDE8] overflow-hidden">
              <div className="bg-[#1B5E3B] px-6 py-4 flex items-center gap-2">
                <span className="text-2xl text-[#E8C96A]">
                  <FaSeedling />
                </span>
                <h3 className="text-white font-bold text-lg">نظام الحصة</h3>
              </div>
              <ul className="px-6 py-5 space-y-4">
                {content[active].system.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0 mt-0.5 text-[#1B5E3B]">
                      {step.icon}
                    </span>
                    <span className="text-[#1A1A1A] text-sm leading-relaxed">
                      {step.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conditions card */}
            <div className="bg-white rounded-2xl shadow-md border border-[#E8EDE8] overflow-hidden">
              <div className="bg-[#C9A84C] px-6 py-4 flex items-center gap-2">
                <span className="text-2xl text-[#0D3B2E]">
                  <FaCheckCircle />
                </span>
                <h3 className="text-white font-bold text-lg">
                  الشروط والأحكام
                </h3>
              </div>
              <ul className="px-6 py-5 space-y-4">
                {content[active].conditions.map((cond, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0 mt-0.5 text-[#C9A84C]">
                      {cond.icon}
                    </span>
                    <span className="text-[#1A1A1A] text-sm leading-relaxed">
                      {cond.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
