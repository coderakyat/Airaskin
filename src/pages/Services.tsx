import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Sparkles, ArrowRight, Check } from 'lucide-react';
import { services } from '../data/services';
import Button from '../components/ui/Button';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', ...Array.from(new Set(services.map(s => s.category)))];

  const filteredServices = selectedCategory === 'Semua'
    ? services
    : services.filter(s => s.category === selectedCategory);

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
              Layanan <span className="text-gradient">Premium</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Treatment kecantikan dengan teknologi terkini dan didukung oleh tim dokter profesional
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all ${selectedCategory === category
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
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
              Tidak Yakin Treatment Mana yang Tepat?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Konsultasikan dengan dokter spesialis kami untuk mendapatkan rekomendasi treatment yang sesuai dengan kondisi kulit Anda
            </p>
            <Link to="/book">
              <Button size="lg" variant="secondary" icon={Sparkles}>
                Konsultasi Gratis
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover-lift"
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <p className="text-xs font-semibold text-pink-500">{service.category}</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
            <Clock size={12} className="text-gray-700" />
            <p className="text-xs font-medium text-gray-700">{service.duration}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-gradient transition-all">
          {service.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
          {service.description}
        </p>

        <div className="space-y-2 mb-6">
          {service.benefits.map((benefit: string, idx: number) => (
            <div key={idx} className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check size={12} className="text-pink-500" />
              </div>
              <p className="text-sm text-gray-600">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500 mb-1">Mulai dari</p>
            <p className="text-2xl font-bold text-pink-500">{service.price}</p>
          </div>
          <Link to="/book">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-medium flex items-center space-x-2"
            >
              <span>Reservasi</span>
              <motion.div animate={{ x: isHovered ? 5 : 0 }}>
                <ArrowRight size={18} />
              </motion.div>
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
