import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-950 pt-28 pb-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-steel text-sm font-medium uppercase tracking-[2px] mb-3">Tentang Kami</p>
          <h1 className="font-heading font-bold text-white text-3xl lg:text-5xl leading-tight mb-4">
            Fabrikasi Logam Berkualitas Sejak 1976
          </h1>
          <p className="text-slate-400 leading-relaxed">
            Dari Makassar untuk Indonesia — lebih dari empat dekade menghadirkan solusi sheet metal fabrication terbaik.
          </p>
        </div>
      </section>

      {/* Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="/images/about-factory.jpg"
              alt="Fasilitas CV Aneka Aluminium Cemerlang"
              className="rounded-xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
          </div>
          <div>
            <h2 className="font-heading font-bold text-slate-900 text-2xl lg:text-3xl mb-6">Profil Perusahaan</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong className="text-slate-900">CV Aneka Aluminium Cemerlang</strong> adalah perusahaan fabrikasi logam berbasis sheet metal yang telah beroperasi sejak 1976 di Makassar. Kami menggabungkan pengalaman lintas generasi dengan teknologi modern untuk menghadirkan solusi fabrikasi aluminium dan stainless steel yang presisi, fungsional, dan siap pakai.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Berlokasi di Jl. Sungai Limboto No. 10, Lajangiru, Kecamatan Ujung Pandang, Kota Makassar — kami melayani kebutuhan komersial dan industri di seluruh Indonesia.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Peralatan kami meliputi CNC Fiber Laser Machine, mesin bending modern, peralatan welding lengkap (MIG, TIG, Laser), hingga fasilitas finishing dan assembling untuk menghasilkan produk siap pakai.
            </p>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-xl border border-slate-200">
            <h2 className="font-heading font-bold text-slate-900 text-xl mb-4">Visi</h2>
            <p className="text-slate-600 leading-relaxed">
              Menjadi perusahaan manufaktur dan instalasi logam yang unggul dan terintegrasi sebagai one stop solution untuk berbagai kebutuhan konstruksi, interior, dan sistem berbasis metal.
            </p>
          </div>
          <div className="bg-white p-10 rounded-xl border border-slate-200">
            <h2 className="font-heading font-bold text-slate-900 text-xl mb-4">Misi</h2>
            <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
              <li className="flex gap-2"><span className="text-slate-400">—</span>Menyediakan layanan terintegrasi mulai dari fabrikasi, finishing, hingga instalasi.</li>
              <li className="flex gap-2"><span className="text-slate-400">—</span>Menghadirkan solusi interior dan eksterior termasuk tempered glass, kitchen set, pintu aluminium, canopy, dan produk custom.</li>
              <li className="flex gap-2"><span className="text-slate-400">—</span>Menjaga standar kualitas, presisi, dan ketahanan produk pada setiap pekerjaan.</li>
              <li className="flex gap-2"><span className="text-slate-400">—</span>Mengembangkan kemampuan produksi, teknologi, dan SDM secara berkelanjutan.</li>
              <li className="flex gap-2"><span className="text-slate-400">—</span>Membangun hubungan jangka panjang dengan klien melalui pelayanan profesional.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Engineering Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-bold text-slate-900 text-2xl lg:text-3xl mb-10">Engineering Support</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { title: "3D/2D Drawing", desc: "Mengubah gambar konsep dan gambar teknik tradisional menjadi gambar yang siap digunakan mesin." },
              { title: "Add Value Desain", desc: "Menerima tantangan desain Anda dan menemukan solusi bersama." },
              { title: "Re-engineering", desc: "Tim teknik kami siap membuat model dan bekerja untuk mewujudkan produk Anda, mengurangi biaya pengembangan, dan meningkatkan potensi nilai." },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-slate-200 pl-6">
                <h3 className="font-heading font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-950 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading font-bold text-white text-2xl lg:text-3xl mb-4">Mari Bekerja Sama</h2>
          <p className="text-slate-400 mb-8">Diskusikan kebutuhan fabrikasi metal Anda dengan tim kami.</p>
          <Link
            to="/kontak"
            className="inline-flex bg-white text-slate-950 px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-slate-100 transition-colors"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>
    </>
  );
}
