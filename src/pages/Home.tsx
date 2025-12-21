import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Award, Users, Heart, TrendingUp, Star } from 'lucide-react';
import Button from '../components/ui/Button';
import { services } from '../data/services';

export default function Home() {
  const features = [
    {
      icon: Award,
      title: 'Dokter Bersertifikat',
      description: 'Tim dokter spesialis kulit terpercaya dan berpengalaman'
    },
    {
      icon: Sparkles,
      title: 'Teknologi Terkini',
      description: 'Peralatan medis modern dan teknologi treatment terbaru'
    },
    {
      icon: Users,
      title: '1000+ Pasien',
      description: 'Dipercaya ribuan klien untuk perawatan kulit mereka'
    },
    {
      icon: Heart,
      title: 'Perawatan Personal',
      description: 'Setiap treatment disesuaikan dengan kebutuhan kulit Anda'
    }
  ];

  const marqueeText = ['Beauty', 'Wellness', 'Confidence', 'Glow', 'Radiance', 'Excellence'];

  return (
    <div className="overflow-hidden">
      <section className="relative min-h-screen flex items-center gradient-mesh pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              >
                <Star className="w-4 h-4 text-pink-500 fill-pink-500" />
                <span className="text-sm text-gray-700 font-medium">Klinik Kecantikan Terpercaya</span>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Wujudkan
                <span className="text-gradient block">Kulit Impianmu</span>
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-xl">
                Temukan kecantikan alami Anda dengan perawatan kulit profesional menggunakan teknologi terkini dan didukung oleh tim dokter bersertifikat.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/book">
                  <Button size="lg" icon={Sparkles}>
                    Reservasi Sekarang
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" icon={ArrowRight}>
                    Lihat Layanan
                  </Button>
                </Link>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center space-x-8 mt-12"
              >
                <div>
                  <p className="text-3xl font-bold text-gray-900">5+</p>
                  <p className="text-sm text-gray-600">Tahun Pengalaman</p>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div>
                  <p className="text-3xl font-bold text-gray-900">1000+</p>
                  <p className="text-sm text-gray-600">Pasien Puas</p>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div>
                  <p className="text-3xl font-bold text-gray-900">15+</p>
                  <p className="text-sm text-gray-600">Layanan Premium</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="AIRA Skin Clinic"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/50 via-transparent to-transparent" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white fill-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">98%</p>
                      <p className="text-sm text-gray-600">Tingkat Kepuasan</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -top-6 -right-6 glass p-4 rounded-2xl"
                >
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-pink-500" />
                    <p className="text-sm font-medium text-gray-900">Terpercaya & Profesional</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-900 overflow-hidden">
        <div className="relative flex">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex space-x-8 px-4"
          >
            {[...marqueeText, ...marqueeText].map((text, index) => (
              <div key={index} className="flex items-center space-x-8 whitespace-nowrap">
                <span className="text-4xl font-bold text-white/20">{text}</span>
                <Sparkles className="w-6 h-6 text-pink-500" />
              </div>
            ))}
          </motion.div>
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
              Mengapa Memilih <span className="text-gradient">AIRA?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan perawatan terbaik dengan standar medis tertinggi
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-3xl border border-pink-100 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-pink-50/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Layanan <span className="text-gradient">Premium</span>
              </h2>
              <p className="text-gray-600 max-w-xl">
                Treatment kecantikan dengan teknologi terkini untuk hasil maksimal
              </p>
            </div>
            <Link to="/services">
              <Button icon={ArrowRight}>Lihat Semua Layanan</Button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl overflow-hidden hover-lift"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <p className="text-xs font-semibold text-pink-500">{service.category}</p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-gradient transition-all">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Mulai dari</p>
                      <p className="text-lg font-bold text-pink-500">{service.price}</p>
                    </div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-pink-400 group-hover:to-rose-500 transition-all"
                    >
                      <ArrowRight className="w-5 h-5 text-pink-500 group-hover:text-white" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Siap Memulai Perjalanan Kecantikan Anda?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Konsultasikan kebutuhan kulit Anda dengan dokter spesialis kami secara gratis
            </p>
            <Link to="/book">
              <Button size="lg" variant="secondary" icon={Sparkles}>
                Konsultasi Gratis Sekarang
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
