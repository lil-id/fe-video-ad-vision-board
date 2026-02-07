import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-white font-heading font-bold text-lg mb-4">
              CV Aneka Aluminium Cemerlang
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Perusahaan fabrikasi logam berbasis sheet metal yang telah beroperasi sejak 1976 di Makassar.
            </p>
            <a
              href="https://instagram.com/anekaaluminium.mks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
            >
              <Instagram size={16} /> @anekaaluminium.mks
            </a>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/layanan" className="hover:text-white transition-colors">Laser Cutting CNC</Link></li>
              <li><Link to="/layanan" className="hover:text-white transition-colors">Bending & Forming</Link></li>
              <li><Link to="/layanan" className="hover:text-white transition-colors">Welding</Link></li>
              <li><Link to="/layanan" className="hover:text-white transition-colors">Finishing</Link></li>
              <li><Link to="/layanan" className="hover:text-white transition-colors">Assembling</Link></li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tentang" className="hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link to="/portofolio" className="hover:text-white transition-colors">Portofolio</Link></li>
              <li><Link to="/kontak" className="hover:text-white transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Jl. Sungai Limboto No. 10, Lajangiru, Kec. Ujung Pandang, Makassar 90114</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+6282370711717" className="hover:text-white transition-colors">+62 823-7071-1717</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:anekaaluminiumcemerlang@gmail.com" className="hover:text-white transition-colors text-xs">anekaaluminiumcemerlang@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} CV Aneka Aluminium Cemerlang. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
