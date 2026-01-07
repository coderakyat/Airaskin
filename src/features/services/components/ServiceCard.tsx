import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Check } from 'lucide-react';
import { Service } from '@/services/supabaseService';

interface ServiceCardProps {
    service: Service;
    index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover-lift"
        >
            <div className="relative h-64 overflow-hidden">
                <motion.img
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.6 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <p className="text-xs font-semibold text-primary">{service.category}</p>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                        <Clock size={12} className="text-dark/70" />
                        <p className="text-xs font-medium text-dark/70">{service.duration}</p>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-dark group-hover:text-primary transition-all">
                    {service.title}
                </h3>

                <p className="text-dark/70 text-sm mb-4 leading-relaxed line-clamp-2">
                    {service.description}
                </p>

                <div className="space-y-2 mb-6">
                    {service.benefits.map((benefit: string, idx: number) => (
                        <div key={idx} className="flex items-center space-x-2">
                            <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <Check size={12} className="text-primary" />
                            </div>
                            <p className="text-sm text-dark/70">{benefit}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-accent/30">
                    <div>
                        <p className="text-xs text-dark/60 mb-1">Mulai dari</p>
                        <p className="text-2xl font-bold text-primary">{service.price}</p>
                    </div>
                    <Link to="/#cta">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-primary text-white rounded-full font-medium flex items-center space-x-2"
                        >
                            <span>Konsultasi</span>
                            <motion.div animate={{ x: isHovered ? 5 : 0 }}>
                                <ArrowRight size={18} />
                            </motion.div>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export default ServiceCard;
