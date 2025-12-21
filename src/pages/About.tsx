import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Award, Users, Sparkles, Heart, Target, Eye } from 'lucide-react';

export default function About() {
  const stats = [
    { value: 5, suffix: '+', label: 'Tahun Pengalaman' },
    { value: 1000, suffix: '+', label: 'Pasien Puas' },
    { value: 15, suffix: '+', label: 'Layanan Premium' },
    { value: 98, suffix: '%', label: 'Tingkat Kepuasan' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Peduli & Empati',
      description: 'Kami memahami setiap kebutuhan dan kekhawatiran Anda tentang perawatan kulit'
    },
    {
      icon: Award,
      title: 'Profesional',
      description: 'Tim dokter bersertifikat dan terlatih dengan standar medis tertinggi'
    },
    {
      icon: Sparkles,
      title: 'Inovasi',
      description: 'Menggunakan teknologi dan metode treatment terkini untuk hasil optimal'
    },
    {
      icon: Users,
      title: 'Kepercayaan',
      description: 'Membangun hubungan jangka panjang dengan setiap klien kami'
    }
  ];

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
              Tentang <span className="text-gradient">AIRA Skin Clinic</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Perjalanan kami dimulai dari passion untuk membantu setiap orang menemukan kecantikan alami mereka
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 bg-pink-100 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-pink-500" />
                <span className="text-sm text-pink-700 font-medium">Cerita Kami</span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Membangun Kepercayaan Melalui Keahlian & Dedikasi
              </h2>

              <p className="text-gray-600 leading-relaxed">
                AIRA Skin Clinic didirikan pada tahun 2019 dengan visi untuk menghadirkan solusi perawatan kulit yang holistik dan profesional. Kami percaya bahwa setiap orang berhak mendapatkan kulit sehat dan kepercayaan diri yang maksimal.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Dengan tim dokter spesialis kulit yang berpengalaman dan teknologi terkini, kami telah membantu ribuan klien mencapai kulit impian mereka. Setiap treatment dirancang khusus sesuai dengan kebutuhan unik kulit Anda.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Komitmen kami adalah memberikan hasil yang nyata, aman, dan berkelanjutan. Kepuasan dan kesehatan kulit Anda adalah prioritas utama kami.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="space-y-4"
                >
                  <img
                    src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Clinic"
                    className="w-full h-64 object-cover rounded-3xl shadow-lg"
                  />
                  <img
                    src="https://images.pexels.com/photos/3985321/pexels-photo-3985321.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Treatment"
                    className="w-full h-48 object-cover rounded-3xl shadow-lg"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ y: -10 }}
                  className="space-y-4 pt-12"
                >
                  <img
                    src="https://images.pexels.com/photos/3865621/pexels-photo-3865621.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Equipment"
                    className="w-full h-48 object-cover rounded-3xl shadow-lg"
                  />
                  <img
                    src="https://images.pexels.com/photos/3997992/pexels-photo-3997992.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Doctor"
                    className="w-full h-64 object-cover rounded-3xl shadow-lg"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass p-6 rounded-2xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Terpercaya Sejak</p>
                    <p className="text-xl font-bold text-gray-900">2019</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Pencapaian Kami</h2>
            <p className="text-white/90 text-lg">Angka yang membuktikan dedikasi dan kepercayaan Anda</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedStat key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Nilai-Nilai <span className="text-gradient">Kami</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prinsip yang menjadi fondasi setiap layanan kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-6 p-8 bg-gradient-to-br from-pink-50 to-white rounded-3xl border border-pink-100 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-pink-50/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Misi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Memberikan perawatan kulit berkualitas tinggi yang aman, efektif, dan terjangkau untuk semua kalangan. Kami berkomitmen untuk terus berinovasi dan mengembangkan layanan yang sesuai dengan kebutuhan kulit modern.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Visi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi klinik kecantikan terdepan yang diakui secara nasional dalam memberikan solusi perawatan kulit holistik, dengan tetap menjaga nilai profesionalisme dan kepercayaan klien.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AnimatedStat({ stat, index }: { stat: { value: number; suffix: string; label: string }; index: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center"
    >
      <motion.p
        className="text-5xl lg:text-6xl font-bold mb-2"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100, delay: index * 0.1 }}
      >
        {count}{stat.suffix}
      </motion.p>
      <p className="text-white/90 text-lg">{stat.label}</p>
    </motion.div>
  );
}
