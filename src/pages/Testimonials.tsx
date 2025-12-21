import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Quote, Sparkles } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import Button from '../components/ui/Button';

export default function Testimonials() {
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
              Cerita <span className="text-gradient">Mereka</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Pengalaman nyata dari klien yang telah mempercayakan perawatan kulit mereka kepada kami
            </p>
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
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-pink-500 fill-pink-500" />
                ))}
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-2">Rating Sempurna dari Klien Kami</p>
            <p className="text-gray-600">Berdasarkan 1000+ ulasan terpercaya</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
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
              Jadilah Bagian dari Kisah Sukses Kami
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Bergabunglah dengan ribuan klien yang telah merasakan transformasi kulit mereka
            </p>
            <Link to="/book">
              <Button size="lg" variant="secondary" icon={Sparkles}>
                Mulai Perjalanan Anda
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-pink-50/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '98%', label: 'Tingkat Kepuasan' },
              { number: '1000+', label: 'Ulasan Positif' },
              { number: '4.9/5', label: 'Rating Rata-rata' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl text-center shadow-lg"
              >
                <p className="text-5xl font-bold text-gradient mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-3xl p-8 shadow-lg hover-lift relative"
    >
      <div className="absolute top-8 right-8 opacity-10">
        <Quote className="w-20 h-20 text-pink-500" />
      </div>

      <div className="relative">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover border-4 border-pink-100"
          />
          <div>
            <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.age} tahun</p>
          </div>
        </div>

        <div className="flex mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-pink-500 fill-pink-500" />
          ))}
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          "{testimonial.review}"
        </p>

        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-1">Treatment</p>
          <p className="text-sm font-semibold text-pink-500">{testimonial.treatment}</p>
        </div>
      </div>
    </motion.div>
  );
}
