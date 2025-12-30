import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { fetchGallery, GalleryItem } from '../services/supabaseService';
import Button from '../components/ui/Button';

export default function GallerySection() {
    const [gallery, setGallery] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadGallery() {
            const data = await fetchGallery();
            setGallery(data.slice(0, 3)); // Show only 3 items on landing
            setLoading(false);
        }
        loadGallery();
    }, []);

    if (loading) {
        return (
            <div className="py-24 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
            </div>
        );
    }

    return (
        <section className="py-24 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Hasil <span className="text-gradient">Nyata</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Transformasi nyata dari klien kami
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gallery.map((item, index) => (
                        <GalleryCard key={item.id} item={item} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link to="/gallery">
                        <Button variant="outline" icon={ArrowRight}>
                            Lihat Semua Gallery
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
    const [showAfter, setShowAfter] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover-lift"
        >
            <div className="relative h-64 overflow-hidden">
                <AnimatePresence mode="wait">
                    {!showAfter ? (
                        <motion.div
                            key="before"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0"
                        >
                            <img src={item.before} alt="Before" className="w-full h-full object-cover" />
                            <div className="absolute top-4 left-4 bg-gray-900/80 text-white px-3 py-1 rounded-full text-xs font-semibold">
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
                            <img src={item.after} alt="After" className="w-full h-full object-cover" />
                            <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                SESUDAH
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onMouseEnter={() => setShowAfter(true)}
                        onMouseLeave={() => setShowAfter(false)}
                        className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl"
                    >
                        <ArrowRight className={`w-5 h-5 text-pink-500 transition-transform ${showAfter ? 'rotate-180' : ''}`} />
                    </motion.button>
                </div>
            </div>

            <div className="p-4">
                <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-xs text-pink-500">{item.treatment}</p>
            </div>
        </motion.div>
    );
}
