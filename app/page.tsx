import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Qualifications from "@/components/Qualifications";
import Features from "@/components/Features";
import ClassSystems from "@/components/ClassSystems";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Qualifications />
      <Features />

      {/* Decorative Separator */}
      <div className="w-full bg-[#FDFAF3] flex justify-center items-center py-6">
        <div className="w-3/4 max-w-3xl h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent relative flex justify-center items-center">
          <span className="absolute bg-[#FDFAF3] px-4 text-[#C9A84C] text-2xl">
            ❁
          </span>
        </div>
      </div>

      <ClassSystems />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}
