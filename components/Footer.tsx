"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  return (
    <>
      {/* Footer bar */}
      <footer className="bg-[#0D3B2E] py-8 border-t border-white/10">
        <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-right">
            <span className="text-[#E8C96A] font-bold text-lg">نهى بدران</span>
            <span className="text-white/50 mx-2">|</span>
            <span className="text-white/60 text-sm">
              معلمة قرآن كريم للأطفال والنساء
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/201068413284"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="واتساب"
              className="w-9 h-9 rounded-full bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/30 transition-colors"
            >
              <FaWhatsapp size={16} />
            </a>
            <a
              href="tel:+201068413284"
              aria-label="اتصال"
              className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/20 transition-colors"
            >
              <FaPhone size={14} />
            </a>
          </div>

          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} نهى بدران. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </>
  );
}
