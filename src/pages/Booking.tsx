import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Calendar, MessageSquare, Sparkles, CheckCircle } from 'lucide-react';
import { services } from '../data/services';
import Button from '../components/ui/Button';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    service: '',
    date: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking Data:', formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        whatsapp: '',
        service: '',
        date: '',
        notes: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-mesh">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Reservasi Berhasil!</h2>
          <p className="text-gray-600 text-lg mb-8">Tim kami akan menghubungi Anda segera</p>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8 text-pink-500 mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <section className="gradient-mesh py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Reservasi <span className="text-gradient">Sekarang</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Mulai perjalanan kecantikan Anda dengan konsultasi gratis bersama dokter spesialis kami
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:sticky lg:top-32"
            >
              <img
                src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AIRA Clinic"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl mb-8"
              />

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-2xl border border-pink-100">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Mengapa Memilih AIRA?</h3>
                  <ul className="space-y-3">
                    {[
                      'Konsultasi gratis dengan dokter spesialis',
                      'Peralatan medis modern & steril',
                      'Hasil treatment yang terbukti',
                      'Harga transparan tanpa biaya tersembunyi'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-6 rounded-2xl text-white">
                  <h4 className="font-bold mb-2">Jam Operasional</h4>
                  <p className="text-sm text-white/90">Senin - Jumat: 09:00 - 20:00</p>
                  <p className="text-sm text-white/90">Sabtu: 09:00 - 18:00</p>
                  <p className="text-sm text-white/90">Minggu: Tutup</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Form Reservasi</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Masukkan nama lengkap"
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nomor WhatsApp
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        required
                        placeholder="08xxxxxxxxxx"
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Pilih Layanan
                    </label>
                    <div className="relative">
                      <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all appearance-none bg-white"
                      >
                        <option value="">Pilih layanan yang Anda inginkan</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.title}>
                            {service.title} - {service.price}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tanggal Reservasi
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Catatan (Opsional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Ceritakan kondisi kulit atau kekhawatiran Anda"
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full" icon={Sparkles}>
                    Konfirmasi Reservasi
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Dengan melakukan reservasi, Anda setuju dengan syarat dan ketentuan yang berlaku
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-pink-50/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: 'Proses Cepat', description: 'Reservasi dalam hitungan menit' },
              { icon: CheckCircle, title: 'Konfirmasi Instan', description: 'Tim kami akan menghubungi segera' },
              { icon: Phone, title: 'Dukungan 24/7', description: 'Siap membantu kapan saja' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
