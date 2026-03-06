import type { Metadata } from "next";
import { Cairo, Amiri } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "المعلمة نهى بدران | معلمة قرآن كريم للأطفال والنساء",
  description:
    "معلمة قرآن كريم متخصصة في تعليم الأطفال والنساء بطريقة مبسطة تساعد على إتقان التلاوة وحفظ القرآن بسهولة. حلقات أونلاين متاحة.",
  keywords: ["قرآن كريم", "معلمة قرآن", "تحفيظ قرآن", "تجويد", "نهى بدران"],
  openGraph: {
    title: "المعلمة نهى بدران | معلمة قرآن كريم",
    description:
      "تعلّم القرآن الكريم مع المعلمة نهى بدران — أسلوب مبسط، متابعة مستمرة، حلقات أونلاين للأطفال والنساء.",
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} ${amiri.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
