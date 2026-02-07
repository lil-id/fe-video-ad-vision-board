import { Link } from "react-router-dom";

const laserSpecs = [
  { label: "Area Kerja", value: "3000 × 1500 mm (dapat disesuaikan)" },
  { label: "Akurasi Posisi", value: "0,02 mm" },
  { label: "Ulang Akurasi", value: "0,01 mm" },
  { label: "Kecepatan Max", value: "145 m/mnt" },
  { label: "Laser Power", value: "1500W–12000W" },
  { label: "Sumber Laser", value: "MAX / Raycus / IPG" },
  { label: "Akselerasi Max", value: "2G" },
];

const bendingTypes = [
  { title: "Air Bending", desc: "Metode fleksibel — sudut antara 32°–180° tanpa mengganti alat. Tonase rendah." },
  { title: "Coining", desc: "Penguncian bentuk untuk akurasi kontur ekstrim. Hemat biaya pada produksi seri besar." },
  { title: "Hemming", desc: "Jahitan di sepanjang tepi lembaran untuk meminimalkan efek tekukan balik." },
  { title: "Flattening", desc: "Jahitan ditekan rata sempurna di sepanjang tepi lembaran." },
];

const weldingTypes = [
  { title: "MIG Welding", desc: "Pengelasan universal dan fleksibel untuk potongan lebih tebal dengan bahan pengisi." },
  { title: "TIG Welding", desc: "Untuk potongan kecil dan tipis — permukaan/finishing sangat penting, minim cipratan." },
  { title: "Laser Welding", desc: "Sinar laser berenergi tinggi untuk sambungan presisi, kuat, rapi, dan minim cacat." },
  { title: "3D Manipulator", desc: "Meja manipulator 3D putar untuk benda kerja besar dengan kualitas terjaga." },
];

const postProcessing = [
  { title: "Rounding", desc: "Berbagai tingkat pembulatan untuk tepi yang kasar atau tajam setelah produksi." },
  { title: "Deburring", desc: "Mesin penghalus tepi otomatis dengan desain sikat multiarah dalam satu proses." },
  { title: "Oxide Skin Removal", desc: "Penghilangan lapisan oksida dari proses laser cutting menggunakan kuas khusus." },
  { title: "Precision Grinding", desc: "Penggerindaan permukaan untuk menghilangkan material berlebih. Toleransi 0,02 mm." },
];

const finishing = [
  { title: "Powder Coating", desc: "Cat bubuk kering — melindungi dari cuaca, goresan, korosi, dan pemudaran warna." },
  { title: "Zinc Plating / Galvanizing", desc: "Pelapisan seng trivalen untuk mencegah korosi pada besi dan material berbasis besi." },
  { title: "Assembling", desc: "Pengencangan berulir untuk sambungan kuat yang bisa dilepas/pasang, serta paku keling dan perekat." },
];

function ServiceSection({ title, items }: { title: string; items: { title: string; desc: string }[] }) {
  return (
    <div className="mb-16">
      <h3 className="font-heading font-bold text-slate-900 text-xl lg:text-2xl mb-6">{title}</h3>
      <div className="grid sm:grid-cols-2 gap-5">
        {items.map((item) => (
          <div key={item.title} className="bg-white p-6 rounded-xl border border-slate-200">
            <h4 className="font-heading font-semibold text-slate-900 mb-1.5">{item.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-950 pt-28 pb-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-steel text-sm font-medium uppercase tracking-[2px] mb-3">Layanan Kami</p>
          <h1 className="font-heading font-bold text-white text-3xl lg:text-5xl leading-tight mb-4">
            Solusi Fabrikasi Metal Komprehensif
          </h1>
          <p className="text-slate-400 leading-relaxed">
            Dari pemotongan laser hingga assembling — layanan terintegrasi untuk kebutuhan sheet metal Anda.
          </p>
        </div>
      </section>

      {/* Laser Cutting */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-bold text-slate-900 text-2xl lg:text-3xl mb-3">
            CNC Fiber Laser Machine
          </h2>
          <p className="text-slate-500 max-w-2xl mb-8">
            Laser dihasilkan tanpa gas dan dapat menggunakan udara untuk memotong logam lembaran. Hasil pemotongan memiliki tepi yang halus tanpa proses pasca-produksi.
          </p>

          <div className="bg-slate-50 rounded-xl p-8 mb-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {laserSpecs.map((s) => (
                <div key={s.label} className="flex justify-between sm:flex-col sm:gap-1">
                  <span className="text-slate-400 text-xs uppercase tracking-wider">{s.label}</span>
                  <span className="font-heading font-semibold text-slate-900 text-sm">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="border-l-2 border-slate-200 pl-5">
              <h4 className="font-heading font-semibold text-slate-900 mb-1">Brightline</h4>
              <p className="text-slate-500 text-sm">Teknologi TRUMPF untuk memotong material lebih tebal menggunakan serat kabel.</p>
            </div>
            <div className="border-l-2 border-slate-200 pl-5">
              <h4 className="font-heading font-semibold text-slate-900 mb-1">Kontur Bersih</h4>
              <p className="text-slate-500 text-sm">Tepi dan potongan cukup halus sehingga tidak memerlukan proses pasca-produksi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bending, Welding, Post-processing, Finishing */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <ServiceSection title="Bending & Forming" items={bendingTypes} />
          <ServiceSection title="Welding" items={weldingTypes} />
          <ServiceSection title="Post-Processing" items={postProcessing} />
          <ServiceSection title="Finishing & Assembling" items={finishing} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-950 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading font-bold text-white text-2xl lg:text-3xl mb-4">Butuh Solusi Fabrikasi?</h2>
          <p className="text-slate-400 mb-8">Konsultasikan kebutuhan Anda dengan tim kami.</p>
          <Link
            to="/kontak"
            className="inline-flex bg-white text-slate-950 px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-slate-100 transition-colors"
          >
            Minta Penawaran
          </Link>
        </div>
      </section>
    </>
  );
}
