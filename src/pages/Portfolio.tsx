import { useState } from "react";

const categories = ["Semua", "Manufaktur", "Konstruksi", "Farmasi", "Food & Beverage"];

const projects = [
  { img: "/images/portfolio-1.jpg", title: "Struktur Aluminium Industri", cat: "Manufaktur", desc: "Framework aluminium untuk pabrik elektronik dengan sistem modular dan anti-korosi." },
  { img: "/images/portfolio-2.jpg", title: "Tangki Stainless Steel 304", cat: "Farmasi", desc: "Storage tank SS304 food grade, kapasitas 5000L, full welded, electropolished." },
  { img: "/images/portfolio-3.jpg", title: "Framework Metal Building", cat: "Konstruksi", desc: "Framework metal untuk gudang 2000m², structural steel dengan coating anti-karat." },
  { img: "/images/portfolio-4.jpg", title: "Kitchen Equipment SS", cat: "Food & Beverage", desc: "Peralatan dapur industrial stainless steel untuk central kitchen." },
  { img: "/images/portfolio-5.jpg", title: "Conveyor System Frame", cat: "Manufaktur", desc: "Framework aluminium untuk conveyor 50 meter, modular design, powder coated." },
  { img: "/images/portfolio-6.jpg", title: "Railing & Safety Barriers", cat: "Konstruksi", desc: "Railing stainless steel untuk gedung bertingkat, standar K3, modern design." },
  { img: "/images/portfolio-7.jpg", title: "Machine Enclosure Custom", cat: "Manufaktur", desc: "Housing aluminium untuk industrial machinery dengan sound dampening." },
  { img: "/images/portfolio-8.jpg", title: "Water Treatment Tanks", cat: "Food & Beverage", desc: "Pressure vessel SS316 untuk water treatment, 10.000L, ASME code." },
  { img: "/images/portfolio-9.jpg", title: "Clean Room Framework", cat: "Farmasi", desc: "Komponen aluminium untuk clean room class 1000, anodized finish." },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("Semua");
  const filtered = filter === "Semua" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-950 pt-28 pb-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-steel text-sm font-medium uppercase tracking-[2px] mb-3">Portofolio</p>
          <h1 className="font-heading font-bold text-white text-3xl lg:text-5xl leading-tight mb-4">
            Proyek yang Telah Kami Selesaikan
          </h1>
          <p className="text-slate-400 leading-relaxed">
            Hasil karya terbaik kami untuk berbagai industri di Indonesia.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-slate-950 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div
                key={p.title}
                className="group rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium px-3 py-1 rounded-full">
                      {p.cat}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-slate-900 mb-1">{p.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
