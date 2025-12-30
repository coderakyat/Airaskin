import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { fetchDoctors, Doctor } from '../services/supabaseService';
import Button from '../components/ui/Button';

export default function DoctorsSection() {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadDoctors() {
            const data = await fetchDoctors();
            setDoctors(data.slice(0, 3)); // Show only 3 doctors on landing
            setLoading(false);
        }
        loadDoctors();
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
                        Tim <span className="text-gradient">Dokter Profesional</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Dokter spesialis kulit bersertifikat dengan pengalaman terbaik
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctors.map((doctor, index) => (
                        <motion.div
                            key={doctor.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover-lift"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-xl font-bold">{doctor.name}</h3>
                                    <p className="text-sm text-white/80">{doctor.title}</p>
                                </div>
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                    <p className="text-xs font-semibold text-pink-500">{doctor.experience}</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{doctor.specialization}</p>
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
                    <Link to="/doctors">
                        <Button variant="outline" icon={ArrowRight}>
                            Lihat Semua Dokter
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
