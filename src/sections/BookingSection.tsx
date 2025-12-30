import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Phone, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';

export default function BookingSection() {
    return (
        <section className="py-24 bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 text-white relative overflow-hidden">
            <div className="absolute inset-0">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
                    transition={{ duration: 25, repeat: Infinity }}
                    className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Siap untuk Transformasi Kulit Anda?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Konsultasikan dengan dokter spesialis kami untuk mendapatkan perawatan terbaik sesuai kebutuhan kulit Anda.
                        </p>
                        <Link to="/book">
                            <Button size="lg" variant="secondary" icon={Calendar}>
                                Booking Sekarang
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/70">Telepon</p>
                                    <p className="text-lg font-semibold">+62 812-3456-7890</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/70">Alamat</p>
                                    <p className="text-lg font-semibold">Jl. Sudirman No. 123, Jakarta</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/70">Jam Operasional</p>
                                    <p className="text-lg font-semibold">Senin - Sabtu, 09:00 - 21:00</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
