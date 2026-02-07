import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-700 bg-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/layanan" element={<Services />} />
          <Route path="/portofolio" element={<Portfolio />} />
          <Route path="/kontak" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
