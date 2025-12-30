import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { fetchTestimonials, Testimonial } from '../services/supabaseService';
import Button from '../components/ui/Button';

export default function TestimonialsSection() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadTestimonials() {
            const data = await fetchTestimonials();
            setTestimonials(data.slice(0, 3)); // Show only 3 on landing
            setLoading(false);
        }
        loadTestimonials();
    }, []);

    if (loading) {
        return (
            <div className="py-24 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
            </div>
        );
    }

    return (
        <section className="py-24 bg-gradient-to-br from-gray-50 to-pink-50/30 dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Cerita <span className="text-gradient">Mereka</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Pengalaman nyata dari klien kami
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover-lift relative"
                        >
                            <div className="absolute top-8 right-8 opacity-10">
                                <Quote className="w-16 h-16 text-pink-500" />
                            </div>

                            <div className="relative">
                                <div className="flex items-center space-x-4 mb-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover border-4 border-pink-100"
                                    />
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.age} tahun</p>
                                    </div>
                                </div>

                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-pink-500 fill-pink-500" />
                                    ))}
                                </div>

                                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                                    "{testimonial.review}"
                                </p>

                                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Treatment</p>
                                    <p className="text-sm font-semibold text-pink-500">{testimonial.treatment}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link to="/testimonials">
                        <Button variant="outline" icon={ArrowRight}>
                            Lihat Semua Testimoni
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
