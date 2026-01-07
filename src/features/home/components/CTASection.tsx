import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function CTASection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] bg-dark px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-24 flex flex-col items-center text-center"
                >
                    {/* Background Decor */}
                    <div className="absolute inset-0 overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Background"
                            className="absolute inset-0 w-full h-full object-cover opacity-20"
                        />

                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-96 h-96 bg-primary/20 blur-3xl rounded-full" />
                        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-96 h-96 bg-secondary/20 blur-3xl rounded-full" />
                    </div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Wujudkan Kulit <br />
                            <span className="text-primary-light">
                                Impianmu Sekarang
                            </span>
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-secondary">
                            Dapatkan perawatan terbaik dari dokter spesialis kami dan nikmati promo spesial untuk kunjungan pertamamu.
                        </p>
                    </div>

                    <div className="relative z-10 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" icon={Calendar} className="w-full sm:w-auto">
                                Hubungi Kami
                            </Button>
                        </a>
                        <Link to="/services">
                            <Button size="lg" variant="outline-light" className="w-full sm:w-auto" icon={Sparkles}>
                                Lihat Layanan
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
