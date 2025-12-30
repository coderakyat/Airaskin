import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';

export default function CTASection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-[3rem] bg-gray-900 px-6 py-16 sm:px-16 sm:py-24 lg:flex lg:items-center lg:justify-between"
                >
                    {/* Background Decor */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-3xl rounded-full" />
                        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-96 h-96 bg-gradient-to-tr from-rose-500/20 to-orange-500/20 blur-3xl rounded-full" />
                    </div>

                    <div className="relative z-10 max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Wujudkan Kulit <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
                                Impianmu Sekarang
                            </span>
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Dapatkan perawatan terbaik dari dokter spesialis kami dan nikmati promo spesial untuk kunjungan pertamamu.
                        </p>
                    </div>

                    <div className="relative z-10 mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-end lg:mt-0 lg:ml-8">
                        <Link to="/book">
                            <Button size="lg" icon={Calendar} className="w-full sm:w-auto">
                                Konsultasi Sekarang
                            </Button>
                        </Link>
                        <Link to="/promo">
                            {/* Note: Assuming there might be a promo page or just a placeholder for now. 
                    If no promo page exists, it might link to services or book with a param. 
                    Using a secondary button style for variety. */}
                            <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white/10" icon={Sparkles}>
                                Dapatkan Promo
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
