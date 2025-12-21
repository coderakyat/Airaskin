import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { gallery, categories } from '../data/gallery';
import Button from '../components/ui/Button';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredGallery = selectedCategory === 'Semua'
    ? gallery
    : gallery.filter(item => item.category === selectedCategory);

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
              Hasil <span className="text-gradient">Nyata</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Transformasi nyata dari klien kami yang telah mempercayakan perawatan kulit mereka kepada kami
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
              {filteredGallery.map((item, index) => (
                <GalleryCard key={item.id} item={item} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-pink-50/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 text-center shadow-xl"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Ingin Hasil Seperti Mereka?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Setiap hasil adalah unik sesuai dengan kondisi kulit masing-masing. Konsultasikan dengan dokter kami untuk mendapatkan treatment yang tepat.
            </p>
            <Link to="/book">
              <Button size="lg" icon={ArrowRight}>
                Mulai Konsultasi
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function GalleryCard({ item, index }: { item: any; index: number }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover-lift"
    >
      <div className="relative h-80 overflow-hidden">
        <AnimatePresence mode="wait">
          {!showAfter ? (
            <motion.div
              key="before"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <img
                src={item.before}
                alt="Before"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                SEBELUM
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="after"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <img
                src={item.after}
                alt="After"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                SESUDAH
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
              <p className="text-xs font-semibold text-pink-500">{item.category}</p>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={() => setShowAfter(true)}
            onMouseLeave={() => setShowAfter(false)}
            className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl"
          >
            <ArrowRight
              className={`w-6 h-6 text-pink-500 transition-transform ${showAfter ? 'rotate-180' : ''
                }`}
            />
          </motion.button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{item.description}</p>

        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-1">Treatment</p>
          <p className="text-sm font-semibold text-pink-500">{item.treatment}</p>
        </div>
      </div>
    </motion.div>
  );
}
