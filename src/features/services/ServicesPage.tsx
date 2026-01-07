import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { useServices } from './hooks/useServices';
import { ServiceCard } from './components/ServiceCard';
import Button from '@/components/ui/Button';

export default function ServicesPage() {
    const [selectedCategory, setSelectedCategory] = useState('Semua');
    const { services, categories, loading } = useServices();

    const filteredServices = selectedCategory === 'Semua'
        ? services
        : services.filter(s => s.category === selectedCategory);

    if (loading) {
        return (
            <div className="pt-24 min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="pt-24">
            <section className="bg-secondary/30 py-24">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                            Layanan <span className="text-primary">Premium</span>
                        </h1>
                        <p className="text-xl text-dark/80 leading-relaxed">
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
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                    : 'bg-secondary text-dark/70 hover:bg-secondary-dark'
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

            <section className="py-24 bg-primary text-white relative overflow-hidden">
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
                        <Link to="/#cta">
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
