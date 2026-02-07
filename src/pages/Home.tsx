import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Clock, Wrench } from "lucide-react";

const features = [
  { icon: Shield, title: "Pengalaman & Keandalan", desc: "Berpengalaman lebih dari 40 tahun dalam industri fabrikasi logam sejak 1976." },
  { icon: Zap, title: "Presisi & Standar Produksi", desc: "Menggunakan mesin dan proses kerja terstandar untuk hasil yang akurat dan konsisten." },
  { icon: Wrench, title: "Custom Manufacturing", desc: "Setiap produk dibuat berdasarkan kebutuhan spesifik klien, bukan produk massal." },
  { icon: Clock, title: "Pengerjaan Tepat Waktu", desc: "Komitmen on-time delivery dengan sistem project management terorganisir." },
];

const services = [
  { title: "Laser Cutting CNC", desc: "Pemotongan presisi dengan CNC Fiber Laser Machine hingga area kerja 3000×1500mm." },
  { title: "Bending & Forming", desc: "Air Bending, Coining, Hemming, dan Flattening untuk berbagai kebutuhan pembentukan." },
  { title: "Welding", desc: "MIG, TIG, dan Laser Welding untuk sambungan yang kuat, rapi, dan minim cacat." },
  { title: "Post-Processing", desc: "Rounding, Deburring, Oxide Removal, dan Precision Grinding untuk finishing sempurna." },
  { title: "Powder Coating", desc: "Finishing kering yang melindungi dari cuaca, korosi, goresan, dan pemudaran warna." },
  { title: "Assembling", desc: "Pengencangan berulir dan permanen dalam bentuk paku keling dan perekat." },
];

const stats = [
  { value: "1976", label: "Beroperasi Sejak" },
  { value: "40+", label: "Tahun Pengalaman" },
  { value: "500+", label: "Proyek Selesai" },
  { value: "99%", label: "On-Time Delivery" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(222,47%,8%)_0%,hsl(222,47%,15%)_100%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
          <p className="text-steel font-medium text-sm uppercase tracking-[3px] mb-6">
            Quality in Sheet Metal Fabrication
          </p>
          <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-7xl leading-[1.05] max-w-4xl mb-6">
            Solusi Fabrikasi Logam Presisi Sejak 1976
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-10 leading-relaxed">
            Menggabungkan pengalaman lintas generasi dengan teknologi modern untuk menghadirkan solusi fabrikasi aluminium dan stainless steel yang presisi, fungsional, dan siap pakai.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/kontak"
              className="inline-flex items-center gap-2 bg-white text-slate-950 px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-slate-100 transition-colors"
            >
              Minta Penawaran <ArrowRight size={16} />
            </Link>
            <Link
              to="/layanan"
              className="inline-flex items-center gap-2 border border-slate-700 text-slate-300 px-7 py-3.5 rounded-lg font-semibold text-sm hover:border-slate-500 hover:text-white transition-colors"
            >
              Lihat Layanan
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="group">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-slate-950 group-hover:text-white transition-colors">
                  <f.icon size={22} />
                </div>
                <h3 className="font-heading font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-steel text-sm font-medium uppercase tracking-[2px] mb-3">Layanan Kami</p>
          <h2 className="font-heading font-bold text-slate-900 text-3xl lg:text-4xl mb-4 max-w-xl">
            Solusi Fabrikasi Metal Komprehensif
          </h2>
          <p className="text-slate-500 max-w-xl mb-12">
            Dari pemotongan laser hingga assembling, kami menyediakan layanan terintegrasi untuk kebutuhan sheet metal Anda.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white p-8 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all group"
              >
                <h3 className="font-heading font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/layanan"
              className="inline-flex items-center gap-2 text-slate-900 font-semibold text-sm hover:gap-3 transition-all"
            >
              Lihat semua layanan <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <span className="block font-heading font-bold text-4xl lg:text-5xl text-white mb-2">{s.value}</span>
                <span className="text-slate-400 text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-slate-900 text-3xl lg:text-4xl mb-4">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-slate-500 mb-8">
            Hubungi kami untuk konsultasi gratis dan penawaran terbaik.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/kontak"
              className="bg-slate-950 text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-slate-800 transition-colors"
            >
              Hubungi Kami
            </Link>
            <a
              href="https://wa.me/6282370711717"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-300 text-slate-700 px-8 py-3.5 rounded-lg font-semibold text-sm hover:border-slate-400 transition-colors"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
