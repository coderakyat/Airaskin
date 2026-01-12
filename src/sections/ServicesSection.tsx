import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Check } from 'lucide-react';
import { fetchServices, Service } from '../services/supabaseService';
import Button from '../components/ui/Button';
import { useReservation } from '@/context/ReservationContext';

interface ServicesSectionProps {
    limit?: number;
}

export default function ServicesSection({ limit }: ServicesSectionProps) {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const { openModal } = useReservation();

    useEffect(() => {
        async function loadServices() {
            const data = await fetchServices();
            setServices(limit ? data.slice(0, limit) : data);
            setLoading(false);
        }
        loadServices();
    }, [limit]);

    if (loading) {
        return (
            <div className="py-24 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <section className="py-24 bg-white dark:bg-dark">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-dark dark:text-white">
                        Layanan <span className="text-primary">Premium</span>
                    </h2>
                    <p className="text-dark/70 dark:text-secondary/80 max-w-2xl mx-auto">
                        Treatment kecantikan dengan teknologi terkini
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white dark:bg-dark-light rounded-3xl overflow-hidden shadow-lg hover-lift flex flex-col h-full"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                    <p className="text-xs font-semibold text-primary">{service.category}</p>
                                </div>
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                                    <Clock size={12} className="text-dark/70" />
                                    <p className="text-xs font-medium text-dark/70">{service.duration}</p>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-dark dark:text-white">{service.title}</h3>
                                <p className="text-dark/70 dark:text-secondary/80 text-sm mb-4 line-clamp-2">{service.description}</p>

                                <div className="space-y-2 mb-4">
                                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                                        <div key={idx} className="flex items-center space-x-2">
                                            <Check size={14} className="text-primary" />
                                            <p className="text-sm text-dark/70 dark:text-secondary/80">{benefit}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t border-accent/30 dark:border-accent/10">
                                    <p className="text-xl font-bold text-primary">{service.price}</p>
                                    <Button size="sm" onClick={() => openModal(service.title)}>Konsultasi</Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {limit && services.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link to="/services">
                            <Button variant="outline" icon={ArrowRight}>
                                Lihat Semua Layanan
                            </Button>
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
