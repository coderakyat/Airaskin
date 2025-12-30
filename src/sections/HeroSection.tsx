import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Award, Users, Heart, TrendingUp, Star } from 'lucide-react';
import Button from '../components/ui/Button';

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

                            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-dark">
                                Wujudkan
                                <span className="text-primary block">Kulit Impianmu</span>
                            </h1>
                            <p className="text-lg text-dark/80 leading-relaxed mb-8 max-w-xl">
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
                                className="flex items-center space-x-8 mt-12"
                            >
                                <div>
                                    <p className="text-3xl font-bold text-dark">5+</p>
                                    <p className="text-sm text-dark/70">Tahun Pengalaman</p>
                                </div>
                                <div className="w-px h-12 bg-dark/20" />
                                <div>
                                    <p className="text-3xl font-bold text-dark">1000+</p>
                                    <p className="text-sm text-dark/70">Pasien Puas</p>
                                </div>
                                <div className="w-px h-12 bg-dark/20" />
                                <div>
                                    <p className="text-3xl font-bold text-dark">15+</p>
                                    <p className="text-sm text-dark/70">Layanan Premium</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative max-w-sm mx-auto">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5] border-4 border-white"
                                >
                                    <img
                                        src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800"
                                        alt="Perawatan kulit profesional di AIRA Skin Clinic"
                                        className="w-full h-full object-cover"
                                        loading="eager"
                                        fetchPriority="high"
                                        decoding="async"
                                        width={800}
                                        height={600}
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-secondary/20"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                            <Heart className="w-6 h-6 text-white fill-white" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-dark">98%</p>
                                            <p className="text-sm text-dark/70">Tingkat Kepuasan</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                    className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-secondary/20"
                                >
                                    <div className="flex items-center space-x-2">
                                        <TrendingUp className="w-5 h-5 text-primary" />
                                        <p className="text-sm font-medium text-dark">Terpercaya & Profesional</p>
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
                            <div key={index} className="flex items-center space-x-8 whitespace-nowrap">
                                <span className="text-4xl font-bold text-white/20">{text}</span>
                                <Sparkles className="w-6 h-6 text-primary" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-dark">
                            Mengapa Memilih <span className="text-primary">AIRA?</span>
                        </h2>
                        <p className="text-dark/80 max-w-2xl mx-auto">
                            Kami berkomitmen memberikan perawatan terbaik dengan standar medis tertinggi
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="bg-white p-8 rounded-3xl border border-secondary hover:shadow-xl transition-all hover:border-primary/50"
                            >
                                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6">
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-dark">{feature.title}</h3>
                                <p className="text-dark/70 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
