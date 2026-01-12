import { motion, AnimatePresence } from 'framer-motion'; import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Award, Users, Heart, TrendingUp, Star } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function HeroSection() {
    const features = [
        {
            icon: Award,
            title: 'Dokter Bersertifikat',
            description: 'Tim dokter spesialis kulit terpercaya dan berpengalaman'
        },
        {
            icon: Sparkles,
            title: 'Teknologi Terkini',
            description: 'Peralatan medis modern dan teknologi treatment terbaru'
        },
        {
            icon: Users,
            title: '1000+ Pasien',
            description: 'Dipercaya ribuan klien untuk perawatan kulit mereka'
        },
        {
            icon: Heart,
            title: 'Perawatan Personal',
            description: 'Setiap treatment disesuaikan dengan kebutuhan kulit Anda'
        }
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const carouselImages = [
        "/images/hero_analysis.png",
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800", // Spa/Treatment image
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800", // Skincare product/application
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const marqueeText = ['Beauty', 'Wellness', 'Confidence', 'Glow', 'Radiance', 'Excellence'];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="overflow-hidden bg-secondary/30">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-32 md:pt-20 lg:pt-32">
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-secondary"
                            >
                                <Star className="w-4 h-4 text-primary fill-primary" />
                                <span className="text-sm text-dark font-medium">Klinik Kecantikan Terpercaya</span>
                            </motion.div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 text-dark">
                                Wujudkan
                                <span className="text-primary block">Kulit Impianmu</span>
                            </h1>
                            <p className="text-base sm:text-lg text-dark/80 leading-relaxed mb-6 sm:mb-8 max-w-xl">
                                Temukan kecantikan alami Anda dengan perawatan kulit profesional menggunakan teknologi terkini dan didukung oleh tim dokter bersertifikat.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" icon={Sparkles} onClick={() => scrollToSection('konsultasi')}>
                                    Konsultasi Sekarang
                                </Button>
                                <Button size="lg" variant="outline" icon={ArrowRight} onClick={() => scrollToSection('layanan')}>
                                    Lihat Layanan
                                </Button>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="grid grid-cols-3 gap-4 sm:flex sm:items-center sm:space-x-6 md:space-x-8 mt-8 sm:mt-12"
                            >
                                <div className="text-center sm:text-left">
                                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-dark">5+</p>
                                    <p className="text-xs sm:text-sm text-dark/70">Tahun Pengalaman</p>
                                </div>
                                <div className="hidden sm:block w-px h-10 md:h-12 bg-dark/20" />
                                <div className="text-center sm:text-left">
                                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-dark">1000+</p>
                                    <p className="text-xs sm:text-sm text-dark/70">Pasien Puas</p>
                                </div>
                                <div className="hidden sm:block w-px h-10 md:h-12 bg-dark/20" />
                                <div className="text-center sm:text-left">
                                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-dark">15+</p>
                                    <p className="text-xs sm:text-sm text-dark/70">Layanan Premium</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative w-full max-w-[280px] sm:max-w-sm mx-auto">
                                {/* HUD Container */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl aspect-[4/5] border-2 sm:border-4 border-white group"
                                >
                                    {/* Main Image */}
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentImageIndex}
                                            src={carouselImages[currentImageIndex]}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 1 }}
                                            alt="Perawatan kulit profesional di Contoh5"
                                            className="w-full h-full object-cover absolute inset-0"
                                            loading="eager"
                                        />
                                    </AnimatePresence>

                                    {/* Scanning Line Animation */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent w-full h-[50%] -translate-y-full animate-[scan_3s_ease-in-out_infinite] pointer-events-none" />
                                    <div className="absolute inset-0 border-b-2 border-primary/50 w-full h-[50%] -translate-y-full animate-[scan_3s_ease-in-out_infinite] shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] pointer-events-none" />

                                    {/* Tech Overlay / HUD Elements */}
                                    <div className="absolute inset-0 pointer-events-none">
                                        {/* Corner Brackets */}
                                        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/60 rounded-tl-lg" />
                                        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/60 rounded-tr-lg" />
                                        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/60 rounded-bl-lg" />
                                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/60 rounded-br-lg" />

                                        {/* Analysis Points (Pulsing Dots) */}
                                        <motion.div
                                            className="absolute top-[30%] left-[40%] w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                            animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                        <motion.div
                                            className="absolute top-[45%] right-[35%] w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary-rgb),0.8)]"
                                            animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                                            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                                        />
                                        <motion.div
                                            className="absolute bottom-[40%] left-[35%] w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary-rgb),0.8)]"
                                            animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                        />

                                        {/* Grid Effect Overlay */}
                                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="absolute -bottom-4 sm:-bottom-6 left-0 sm:-left-6 bg-white p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-secondary/20"
                                >
                                    <div className="flex items-center space-x-2 sm:space-x-4">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center">
                                            <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white fill-white" />
                                        </div>
                                        <div>
                                            <p className="text-lg sm:text-xl md:text-2xl font-bold text-dark">98%</p>
                                            <p className="text-xs sm:text-sm text-dark/70">Akurasi Analisa</p>
                                        </div>
                                    </div>
                                </motion.div>


                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Marquee Section */}
            <section className="py-8 bg-dark overflow-hidden">
                <div className="relative flex">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="flex space-x-8 px-4"
                    >
                        {[...marqueeText, ...marqueeText].map((text, index) => (
                            <div key={index} className="flex items-center space-x-4 sm:space-x-8 whitespace-nowrap">
                                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/20">{text}</span>
                                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12 sm:py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 sm:mb-12 md:mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-dark">
                            Mengapa Memilih <span className="text-primary">Contoh5?</span>
                        </h2>
                        <p className="text-sm sm:text-base text-dark/80 max-w-2xl mx-auto px-4 sm:px-0">
                            Kami berkomitmen memberikan perawatan terbaik dengan standar medis tertinggi
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-secondary hover:shadow-xl transition-all hover:border-primary/50"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-dark">{feature.title}</h3>
                                <p className="text-dark/70 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
