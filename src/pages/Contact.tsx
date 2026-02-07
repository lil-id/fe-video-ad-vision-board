import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Store to localStorage
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));
    const leads = JSON.parse(localStorage.getItem("aac_leads") || "[]");
    leads.push({ ...data, timestamp: new Date().toISOString() });
    localStorage.setItem("aac_leads", JSON.stringify(leads));
    setSubmitted(true);
    form.reset();
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-950 pt-28 pb-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-steel text-sm font-medium uppercase tracking-[2px] mb-3">Kontak</p>
          <h1 className="font-heading font-bold text-white text-3xl lg:text-5xl leading-tight mb-4">
            Mari Diskusikan Proyek Anda
          </h1>
          <p className="text-slate-400 leading-relaxed">
            Tim kami siap membantu menemukan solusi fabrikasi metal terbaik.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="font-heading font-bold text-slate-900 text-xl">Informasi Kontak</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-slate-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">Alamat</h4>
                  <p className="text-slate-500 text-sm">Jl. Sungai Limboto No. 10, Lajangiru,<br />Kec. Ujung Pandang, Makassar 90114</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-slate-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">Telepon / WhatsApp</h4>
                  <a href="tel:+6282370711717" className="text-slate-500 text-sm hover:text-slate-900 transition-colors">+62 823-7071-1717</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-slate-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">Email</h4>
                  <a href="mailto:anekaaluminiumcemerlang@gmail.com" className="text-slate-500 text-sm hover:text-slate-900 transition-colors break-all">anekaaluminiumcemerlang@gmail.com</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-slate-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">Jam Operasional</h4>
                  <p className="text-slate-500 text-sm">Senin – Sabtu: 08:00 – 17:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-lg mb-6 text-sm">
                <strong>✓ Pesan Terkirim!</strong> Tim kami akan segera menghubungi Anda.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1.5">
                    Nama Perusahaan <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    placeholder="PT Maju Jaya"
                    className="w-full px-4 py-3 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1.5">
                    Nama Kontak <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    required
                    placeholder="Nama Anda"
                    className="w-full px-4 py-3 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="email@perusahaan.com"
                    className="w-full px-4 py-3 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1.5">
                    Telepon / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+62 8xx-xxxx-xxxx"
                    className="w-full px-4 py-3 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-1.5">Layanan yang Diminati</label>
                <select
                  name="service"
                  className="w-full px-4 py-3 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-colors text-slate-700"
                >
                  <option value="">— Pilih Layanan —</option>
                  <option value="laser-cutting">Laser Cutting CNC</option>
                  <option value="bending">Bending & Forming</option>
                  <option value="welding">Welding</option>
                  <option value="finishing">Finishing</option>
                  <option value="custom">Custom Fabrication</option>
                  <option value="konsultasi">Konsultasi Umum</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-1.5">
                  Kebutuhan / Pesan <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Jelaskan kebutuhan fabrikasi Anda..."
                  className="w-full px-4 py-3 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-950 text-white py-3.5 rounded-lg font-semibold text-sm hover:bg-slate-800 transition-colors"
              >
                Kirim Pesan
              </button>

              <p className="text-center text-xs text-slate-400">
                Data Anda akan digunakan untuk keperluan komunikasi bisnis.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
